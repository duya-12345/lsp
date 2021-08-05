/**
 * Created by lenovo on 2021/1/5.
 */
/*窗体加载事件
window.onload = function(){
    //获取所有h1元素
    var hlist = document.getElementsByTagName('h1');
    console.log(hlist.length);
    //循环给每个h1绑定单击事件
    for (var i = 0;i<hlist.length;i++) {
        //从数组中获取单个h1元素
        var htag = hlist[i];
        //给每个h1绑定单击事件
        htag.onclick = function(){
            this.style.color = 'red';
        }
    }
}*/
$(document).ready(function(){
    $("#sec_I>ul>li").click(displays);
    $("#fixed>ul>li").click(displays);
});

//给固定定位js和选择框绑定单击事件,并显示相应页面
var lis = $("#sec_I>ul>li");            //选择框选择项
var fixedli = $("#fixed>ul>li");    //获取固定定位的无序列表下的li
var sections = $("#section>:gt(0)");   //主页，动态，收藏，订阅
function displays(){
    var li = $(this);//点击的li
    //设置选中框和固定定位所有的li边款为未选中样式
    $("#fixed>ul>li").css({"border-bottom":"none"});
    $("#fixed>ul>li").children("a").children("p").css({"color":"rgba(0,0,0,1)"});
    $("#sec_I>ul>li").css({"border-bottom":"none"});
    $("#sec_I>ul>li").children("a").children("p").css({"color":"rgba(0,0,0,1)"});
    //设置选中框和固定定位选中的li的样式
    for(var n = 0 ; n < lis.length ; n++){
        if(lis[n].innerHTML == li.html()){
            $(lis[n]).css({"border-bottom":"5px #0099FF solid"});
            $(lis[n]).children("a").children("p").css({"color":"#0099FF"});
            $(fixedli[n]).css({"border-bottom":"5px #0099FF solid"});
            $(fixedli[n]).children("a").children("p").css({"color":"#0099FF"});
            break;
        }
        if(li.html().indexOf("渡鸦12345") != -1){
            $(lis[0]).css({"border-bottom":"5px #0099FF solid"});
            $(lis[0]).children("a").children("p").css({"color":"#0099FF"});
            $(fixedli[0]).css({"border-bottom":"5px #0099FF solid"});
            $(fixedli[0]).children("a").children("p").css({"color":"#0099FF"});
            break;
        }
    }
    //设置选中的页面显示，为选中的页面隐藏
    $("#sec_I").siblings("section").css({"display":"none"});
    for(var i = 0 ; i < fixedli.length ; i++){
        if(fixedli[i].innerHTML == li.html()){
            sections[i].style.display='block';
            break;
        }
    }
    for(var l = 0 ; l < lis.length ; l++){
        if(lis[l].innerHTML == li.html()){
            sections[l].style.display='block';
            break;
        }
    }
}
/***筛选相对滚动条顶部偏移值270大于是显示固定定位***/
$(window).scroll(function(){
    var num = parseInt($(this).scrollTop());
    if(num > 350){
        $("#fixed").slideDown();
    }else{
        $("#fixed").slideUp();
    }
});

/*********主页js**********/
//给主页更多绑定单击事件,并显示相应页面
var $sec_hom_as = $("#sec_hom_dyn>div>p>a");
$("#sec_hom_dyn>div>p>a").click(function(){
    $("#sec_I").siblings("section").css({"display":"none"});
    //设置选中框和固定定位所有的li边款为未选中样式
    $("#fixed>ul>li").css({"border-bottom":"none"});
    $("#fixed>ul>li").children("a").children("p").css({"color":"rgba(0,0,0,1)"});
    $("#sec_I>ul>li").css({"border-bottom":"none"});
    $("#sec_I>ul>li").children("a").children("p").css({"color":"rgba(0,0,0,1)"});
    var a = $(this);
    if($sec_hom_as[0].innerHTML == a.html()){
        sections[2].style.display='block';
        $(lis[2]).css({"border-bottom":"5px #0099FF solid"});
        $(lis[2]).children("a").children("p").css({"color":"#0099FF"});
        $(fixedli[2]).css({"border-bottom":"5px #0099FF solid"});
        $(fixedli[2]).children("a").children("p").css({"color":"#0099FF"});
    }else if($sec_hom_as[1].innerHTML == a.html()){
        sections[3].style.display='block';
        $(lis[3]).css({"border-bottom":"5px #0099FF solid"});
        $(lis[3]).children("a").children("p").css({"color":"#0099FF"});
        $(fixedli[3]).css({"border-bottom":"5px #0099FF solid"});
        $(fixedli[3]).children("a").children("p").css({"color":"#0099FF"});
    }else if($sec_hom_as[2].innerHTML == a.html()){
        sections[1].style.display='block';
        $(lis[1]).css({"border-bottom":"5px #0099FF solid"});
        $(lis[1]).children("a").children("p").css({"color":"#0099FF"});
        $(fixedli[1]).css({"border-bottom":"5px #0099FF solid"});
        $(fixedli[1]).children("a").children("p").css({"color":"#0099FF"});
    }
});
//单击私信出现对话框
$("#sec_hom_new>ul>li>a").click(function(){
    $("#sec_hom_dia").show();
});
//单击关闭对话框消失
$("#sec_hom_dia>p>a").click(function(){
    $("#sec_hom_dia").hide();
});
//点击清空消除多行文本框的内容
$("#sec_hom_dia_reset").click(function(){
    $("#sec_hom_dia>textarea").val("");
});
//点击发送清空多行文本框的内容，并发送一条消息
$("#sec_hom_dia_submit").click(function(){
    var txt = $("#sec_hom_dia>textarea").val();
    var li = "<li><div></div><span>渡鸦12345</span><p>"+txt+"</p></li>";
    $("#sec_hom_dia>ul").append(li);
    $("#sec_hom_dia>textarea").val("");
});
/*********主页js**********/
/*********动态js**********/
//点击置顶
var $sec_dyn_lis = $("#sec_dyn>ul>li");
$("#sec_dyn_ul2>li>div>a").click(function(){
    //获取发生事件的元素
    var li = $(this).parents("div").parents("li");
    //验证获取到的元素是否是“动态”
    var $li;
    for(var i = 0 ; i < $sec_dyn_lis.length ; i++){
        if($sec_dyn_lis[i].innerHTML == li.html()){
            $li = $sec_dyn_lis[i];
            break;
        }
    }
    //复制节点并将其插入至顶部，并设置原来的元素隐藏
    var li2 = $($li);
    li2.clone(false).prependTo("#sec_dyn_ul1");
    $li.style.display='none';
    //改变原顶部“动态”样式，并改变置顶元素
    var dingbu = $($sec_dyn_lis[0]);
    dingbu.css({"border-radius":"10px"});
    $("#sec_dyn_ul1>li>div>a").html("取消置顶");
    $("#sec_dyn_ul1>li>div>a").click(Top);
});
//取消置顶
function Top(){
    var li = $(this).parents("div").parents("li");
    for(var i = 0 ; i < $sec_dyn_lis.length ; i++){
        var li1 = $sec_dyn_lis[i].lastElementChild.innerHTML;
        var li2 = li[0].lastElementChild.innerHTML;
        if(li1 == li2){
            $sec_dyn_lis[i].style.display='block';
            break;
        }
    }
    li.remove();
}
//编辑
$("#sec_dyn>div>a").toggle(
    function(){
        $(this).html("完成");
        $("#sec_dyn>div>div").show();
        $("#sec_dyn>ul>li>div>input").show();
    },//显示删除节点功能
    function(){
        $(this).html("编辑");
        $("#sec_dyn>div>div").hide();
        $("#sec_dyn>ul>li>div>input").hide();
    }//隐藏删除节点功能
);
//删除
var deletes = $("#sec_dyn>ul input");
$("#sec_dyn>div>div>a").click(function(){
    for(var i = 0 ; i < deletes.length ; i++){
        if($(deletes[i]).attr('checked') == "checked"){
            $(deletes[i]).parents("div").parents("li").remove();
        }
    }
});
//点击全选
$("#sec_dyn_all").click(function(){
    var checkeds = $(this).attr('checked');
    if(checkeds == "checked"){
        for(var i = 0 ; i < deletes.length ; i++){
            var $deletes1 = $(deletes[i]);
            $deletes1.attr({checked:true});
        }
    }else{
        for(var j = 0 ; j < deletes.length ; j++){
            var $deletes2 = $(deletes[j]);
            $deletes2.attr({checked:false});
        }
    }
});
/*********动态js**********/
/*********收藏js**********/
//////////////////////动漫筛选
var $dmstring = $("#sec_col_cart>ul>li");//获取所有动漫节点
var $dmli = $("#sec_col_cart_page li");   //获取所有的页面节点
var chara = "!";   //类型(!)
var charb = "@";   //地区(@)
var charc = "%";   //时间(%)
var chard = "&";   //风格(&)
$("#sec_col_cart_table li").click(function(){
    //获取出现单击事件的标签
    var $li = $(this);                                  //点击的标签
    var char = $li.children("a").attr('name').charAt(0);//标签子元素a的name值第一位字母
    var charname = $li.children("a").attr('name');      //标签子元素a的name值
    //设置单击的元素变化背景颜色和字体颜色
    $li.siblings("li").css({"background":"#FFFFFF"});
    $li.siblings("li").children("a").css({"color":"#000000"});
    $li.css({"background":"#0099FF"});
    $li.children("a").css({"color":"#FFFFFF"});
    //筛选不符合隐藏
    var disp;   //display样式值
    var name;   //name属性值
    if(char == "!"){//根据不同的字符给不同的属性赋值
        chara = charname;
    }else if(char == "@") {
        charb = charname;
    }else if(char == "%") {
        charc = charname;
    }else if(char == "&") {
        chard = charname;
    }
    /*设置不符合类型的动漫隐藏*/
    $("#sec_col_cart>ul>li>a[name]").parent().css({"display":"none"});
    $("#sec_col_cart>ul>li>a[name*='"+chara+"']").parent().css({"display":"block"});
    /*设置不符合地区隐藏*/
    for(var p = 0 ; p < $dmstring.length ; p++){
        disp = getComputedStyle($dmstring[p],null).display;
        if(disp != "none"){
            $dmstring[p].style.display='none';
            name = $dmstring[p].firstElementChild.getAttribute("name");
            if(name.indexOf(charb) != -1){
                $dmstring[p].style.display='block';
            }
        }
    }
    /*设置不符合时间隐藏*/
    for(var r = 0 ; r < $dmstring.length ; r++){
        disp = getComputedStyle($dmstring[r],null).display;
        if(disp != "none"){
            $dmstring[r].style.display='none';
            name = $dmstring[r].firstElementChild.getAttribute("name");
            if(name.indexOf(charc) != -1){
                $dmstring[r].style.display='block';
            }
        }
    }
    /*设置不符合风格隐藏*/
    for(var l = 0 ; l < $dmstring.length ; l++){
        disp = getComputedStyle($dmstring[l],null).display;
        if(disp != "none"){
            $dmstring[l].style.display='none';
            name = $dmstring[l].firstElementChild.getAttribute("name");
            if(name.indexOf(chard) != -1){
                $dmstring[l].style.display='block';
            }
        }
    }
    dm();      //调用显示动漫数量函数
});
/*文本框跳转页面*/
$(".sec_col_cart_page_inp").blur(function(){
    //获取文本框值
    var number = $(".sec_col_cart_page_inp").val();
    if(number == ""){
        return;
    }
    var sum = parseFloat(number);
    if(sum < 1 || sum > 10){
        alert("输入数字错误");
        return;
    }
    $("#sec_col_cart_page li:eq("+sum+")").siblings().css({"background":"rgba(0,0,0,0)"});
    $("#sec_col_cart_page li:eq("+sum+")").siblings().children("a").css({"color":"#000000"});
    $("#sec_col_cart_page li:eq("+sum+")").css({"background":"#0099FF"});
    $("#sec_col_cart_page li:eq("+sum+")").children("a").css({"color":"#FFFFFF"});
    dm();//调用函数
});
/*按钮跳转页面*/
$("#sec_col_cart_page li").click(function(){
    //获取点击的按钮
    var clickli = $(this);
    var bg;     //背景颜色
    if(clickli.html().indexOf("下一页") != -1){
        for(var l = 0 ; l < $dmli.length-1 ; l++){
            bg = getComputedStyle($dmli[l],null).backgroundColor;
            if(bg != "rgba(0, 0, 0, 0)"){
                if(l+1 >= $dmli.length-1){
                    alert("没有下一页了！");
                    return;
                }
                $dmli[l].style.backgroundColor='rgba(0, 0, 0, 0)';
                $dmli[l].firstElementChild.style.color='#000000';
                $dmli[l+1].style.backgroundColor='#0099FF';
                $dmli[l+1].firstElementChild.style.color='#FFFFFF';
                break;
            }
        }
        dm();
    }else if(clickli.html().indexOf("上一页") != -1){
        for(var n = 1 ; n < $dmli.length-1 ; n++){
            bg = getComputedStyle($dmli[n],null).backgroundColor;
            if(bg != "rgba(0, 0, 0, 0)"){
                if(n-1 <= 0){
                    alert("没有上一页了！");
                    return;
                }
                $dmli[n].style.backgroundColor='rgba(0, 0, 0, 0)';
                $dmli[n].firstElementChild.style.color='#000000';
                $dmli[n-1].style.backgroundColor='#0099FF';
                $dmli[n-1].firstElementChild.style.color='#FFFFFF';
                break;
            }
        }
        dm();
    }else{
        var i = clickli.html().substring(clickli.html().indexOf(">")+1,clickli.html().indexOf("<",5));
        i = parseInt(i);
        $("#sec_col_cart_page li:eq("+i+")").siblings().css({"background":"rgba(0, 0, 0, 0)"});
        $("#sec_col_cart_page li:eq("+i+")").siblings().children("a").css({"color":"#000000"});
        $("#sec_col_cart_page li:eq("+i+")").css({"background":"#0099FF"});
        $("#sec_col_cart_page li:eq("+i+")").children("a").css({"color":"#FFFFFF"});
        dm();
    }
});
/*****设置只能显示20个动漫******/
function dm(){
    var sum = 20;   //循环次数
    var disp;       //display属性
    var bg;         //background属性
    var name;   //name属性值
    var num = 0;    //现在的页面
    var number = 0; //记录display属性不为none的动漫数量
    //获取现在显示的页面
    for(var c = 1 ; c < $dmli.length-1 ; c++){
        bg = getComputedStyle($dmli[c],null).backgroundColor;
        if(bg != "rgba(0, 0, 0, 0)"){
            num = c;
            break;
        }
    }
    num = num * 20 - 20;
    /*设置不符合类型的动漫隐藏*/
    $("#sec_col_cart>ul>li>a[name]").parent().css({"display":"none"});
    $("#sec_col_cart>ul>li>a[name*='"+chara+"']").parent().css({"display":"block"});
    /*设置不符合地区隐藏*/
    for(var p = 0 ; p < $dmstring.length ; p++){
        disp = getComputedStyle($dmstring[p],null).display;
        if(disp != "none"){
            $dmstring[p].style.display='none';
            name = $dmstring[p].firstElementChild.getAttribute("name");
            if(name.indexOf(charb) != -1){
                $dmstring[p].style.display='block';
            }
        }
    }
    /*设置不符合时间隐藏*/
    for(var r = 0 ; r < $dmstring.length ; r++){
        disp = getComputedStyle($dmstring[r],null).display;
        if(disp != "none"){
            $dmstring[r].style.display='none';
            name = $dmstring[r].firstElementChild.getAttribute("name");
            if(name.indexOf(charc) != -1){
                $dmstring[r].style.display='block';
            }
        }
    }
    /*设置不符合风格隐藏*/
    for(var l = 0 ; l < $dmstring.length ; l++){
        disp = getComputedStyle($dmstring[l],null).display;
        if(disp != "none"){
            $dmstring[l].style.display='none';
            name = $dmstring[l].firstElementChild.getAttribute("name");
            if(name.indexOf(chard) != -1){
                $dmstring[l].style.display='block';
            }
        }
    }
    //将相对于父节点下标大于num小于num+20的元素显示，小于num的隐藏,大于num+20的元素隐藏
    for(var n = 0 ; n < $dmstring.length ; n++){
        disp = getComputedStyle($dmstring[n],null).display;
        if(n < num){
            $dmstring[n].style.display='none';
            continue;
        }
        if(disp != "none"){
            number++;
            if(sum > 0){
                sum--;
                continue;
            }
            $dmstring[n].style.display='none';
        }
    }
}
//编辑
$("#sec_col_cart>div>a").toggle(
    function(){
        $(this).html("完成");
        $("#sec_col_cart>div>div").show();
        $("#sec_col_cart>ul>li>a>input").show();
    },//显示删除节点功能
    function(){
        $(this).html("编辑");
        $("#sec_col_cart>div>div").hide();
        $("#sec_col_cart>ul>li>a>input").hide();
    }//隐藏删除节点功能
);
//删除
var dmdeletes = $("#sec_col_cart>ul input");
$("#sec_col_cart>div>div>a").click(function(){
    for(var i = 0 ; i < dmdeletes.length ; i++){
        if($(dmdeletes[i]).attr('checked') == "checked"){
            $(dmdeletes[i]).parents("a").parents("li").remove();
        }
    }
});
//点击全选
$("#sec_col_cart>div>div>input").click(function(){
    var checkeds = $(this).attr('checked');
    if(checkeds == "checked"){
        for(var i = 0 ; i < dmdeletes.length ; i++){
            var $deletes1 = $(dmdeletes[i]);
            $deletes1.attr({checked:true});
        }
    }else{
        for(var j = 0 ; j < dmdeletes.length ; j++){
            var $deletes2 = $(dmdeletes[j]);
            $deletes2.attr({checked:false});
        }
    }
});
/////////////////////漫画筛选
var $mhstring = $("#sec_col_cari>ul>li");//获取所有动漫节点
var $mhli = $("#sec_col_cari_page li");   //获取所有的页面节点
var chare = "!";   //进度(!)
var charf = "@";   //地区(@)
var charg = "&";   //题材(&)
$("#sec_col_cari_table li").click(function(){
    //获取出现单击事件的标签
    var $li = $(this);                                  //点击的标签
    var char = $li.children("a").attr('name').charAt(0);//标签子元素a的name值第一位字母
    var charname = $li.children("a").attr('name');      //标签子元素a的name值
    //设置单击的元素变化背景颜色和字体颜色
    $li.siblings("li").css({"background":"#FFFFFF"});
    $li.siblings("li").children("a").css({"color":"#000000"});
    $li.css({"background":"#0099FF"});
    $li.children("a").css({"color":"#FFFFFF"});
    //筛选不符合隐藏
    var disp;   //display样式值
    var name;   //name属性值
    if(char == "!"){//根据不同的字符给不同的属性赋值
        chare = charname;
    }else if(char == "@") {
        charf = charname;
    }else if(char == "&") {
        charg = charname;
    }
    /*设置不符合进度的漫画隐藏*/
    $("#sec_col_cari>ul>li>a[name]").parent().css({"display":"none"});
    $("#sec_col_cari>ul>li>a[name*='"+chare+"']").parent().css({"display":"block"});
    /*设置不符合类型的地区隐藏*/
    for(var p = 0 ; p < $mhstring.length ; p++){
        disp = getComputedStyle($mhstring[p],null).display;
        if(disp != "none"){
            $mhstring[p].style.display='none';
            name = $mhstring[p].firstElementChild.getAttribute("name");
            if(name.indexOf(charf) != -1){
                $mhstring[p].style.display='block';
            }
        }
    }
    /*设置不符合类型的题材隐藏*/
    for(var l = 0 ; l < $mhstring.length ; l++){
        disp = getComputedStyle($mhstring[l],null).display;
        if(disp != "none"){
            $mhstring[l].style.display='none';
            name = $mhstring[l].firstElementChild.getAttribute("name");
            if(name.indexOf(charg) != -1){
                $mhstring[l].style.display='block';
            }
        }
    }
    mh();      //调用显示动漫数量函数
});
/*文本框跳转页面*/
$(".sec_col_cari_page_inp").blur(function(){
    //获取文本框值
    var number = $(".sec_col_cari_page_inp").val();
    if(number == ""){
        return;
    }
    var sum = parseFloat(number);
    if(sum < 1 || sum > 10){
        alert("输入数字错误");
        return;
    }
    $("#sec_col_cari_page li:eq("+sum+")").siblings().css({"background":"rgba(0,0,0,0)"});
    $("#sec_col_cari_page li:eq("+sum+")").siblings().children("a").css({"color":"#000000"});
    $("#sec_col_cari_page li:eq("+sum+")").css({"background":"#0099FF"});
    $("#sec_col_cari_page li:eq("+sum+")").children("a").css({"color":"#FFFFFF"});
    mh();//调用函数
});
/*按钮跳转页面*/
$("#sec_col_cari_page li").click(function(){
    //获取点击的按钮
    var clickli = $(this);
    var bg;     //背景颜色
    if(clickli.html().indexOf("下一页") != -1){
        for(var l = 0 ; l < $mhli.length-1 ; l++){
            bg = getComputedStyle($mhli[l],null).backgroundColor;
            if(bg != "rgba(0, 0, 0, 0)"){
                if(l+1 >= $mhli.length-1){
                    alert("没有下一页了！");
                    return;
                }
                $mhli[l].style.backgroundColor='rgba(0, 0, 0, 0)';
                $mhli[l].firstElementChild.style.color='#000000';
                $mhli[l+1].style.backgroundColor='#0099FF';
                $mhli[l+1].firstElementChild.style.color='#FFFFFF';
                break;
            }
        }
        mh();
    }else if(clickli.html().indexOf("上一页") != -1){
        for(var n = 1 ; n < $mhli.length-1 ; n++){
            bg = getComputedStyle($mhli[n],null).backgroundColor;
            if(bg != "rgba(0, 0, 0, 0)"){
                if(n-1 <= 0){
                    alert("没有上一页了！");
                    return;
                }
                $mhli[n].style.backgroundColor='rgba(0, 0, 0, 0)';
                $mhli[n].firstElementChild.style.color='#000000';
                $mhli[n-1].style.backgroundColor='#0099FF';
                $mhli[n-1].firstElementChild.style.color='#FFFFFF';
                break;
            }
        }
        mh();
    }else{
        var i = clickli.html().substring(clickli.html().indexOf(">")+1,clickli.html().indexOf("<",5));
        i = parseInt(i);
        $("#sec_col_cari_page li:eq("+i+")").siblings().css({"background":"rgba(0, 0, 0, 0)"});
        $("#sec_col_cari_page li:eq("+i+")").siblings().children("a").css({"color":"#000000"});
        $("#sec_col_cari_page li:eq("+i+")").css({"background":"#0099FF"});
        $("#sec_col_cari_page li:eq("+i+")").children("a").css({"color":"#FFFFFF"});
        mh();
    }
});
/*****设置只能显示20个漫画******/
function mh(){
    var sum = 20;   //循环次数
    var disp;       //display属性
    var bg;         //background属性
    var name;   //name属性值
    var num = 0;    //现在的页面
    var number = 0; //记录display属性不为none的动漫数量
    //获取现在显示的页面
    for(var c = 1 ; c < $mhli.length-1 ; c++){
        bg = getComputedStyle($mhli[c],null).backgroundColor;
        if(bg != "rgba(0, 0, 0, 0)"){
            num = c;
            break;
        }
    }
    num = num * 20 - 20;
    /*设置不符合进度的漫画隐藏*/
    $("#sec_col_cari>ul>li>a[name]").parent().css({"display":"none"});
    $("#sec_col_cari>ul>li>a[name*='"+chare+"']").parent().css({"display":"block"});
    /*设置不符合类型的地区隐藏*/
    for(var p = 0 ; p < $mhstring.length ; p++){
        disp = getComputedStyle($mhstring[p],null).display;
        if(disp != "none"){
            $mhstring[p].style.display='none';
            name = $mhstring[p].firstElementChild.getAttribute("name");
            if(name.indexOf(charf) != -1){
                $mhstring[p].style.display='block';
            }
        }
    }
    /*设置不符合类型的题材隐藏*/
    for(var l = 0 ; l < $mhstring.length ; l++){
        disp = getComputedStyle($mhstring[l],null).display;
        if(disp != "none"){
            $mhstring[l].style.display='none';
            name = $mhstring[l].firstElementChild.getAttribute("name");
            if(name.indexOf(charg) != -1){
                $mhstring[l].style.display='block';
            }
        }
    }
    //将相对于父节点下标大于num小于num+20的元素显示，小于num的隐藏,大于num+20的元素隐藏
    for(var n = 0 ; n < $mhstring.length ; n++){
        disp = getComputedStyle($mhstring[n],null).display;
        if(n < num){
            $mhstring[n].style.display='none';
            continue;
        }
        if(disp != "none"){
            number++;
            if(sum > 0){
                sum--;
                continue;
            }
            $mhstring[n].style.display='none';
        }
    }
}
//编辑
$("#sec_col_cari>div>a").toggle(
    function(){
        $(this).html("完成");
        $("#sec_col_cari>div>div").show();
        $("#sec_col_cari>ul>li>a>input").show();
    },//显示删除节点功能
    function(){
        $(this).html("编辑");
        $("#sec_col_cari>div>div").hide();
        $("#sec_col_cari>ul>li>a>input").hide();
    }//隐藏删除节点功能
);
//删除
var mhdeletes = $("#sec_col_cari>ul input");
$("#sec_col_cari>div>div>a").click(function(){
    for(var i = 0 ; i < mhdeletes.length ; i++){
        if($(mhdeletes[i]).attr('checked') == "checked"){
            $(mhdeletes[i]).parents("a").parents("li").remove();
        }
    }
});
//点击全选
$("#sec_col_cari>div>div>input").click(function(){
    var checkeds = $(this).attr('checked');
    if(checkeds == "checked"){
        for(var i = 0 ; i < mhdeletes.length ; i++){
            var $deletes1 = $(mhdeletes[i]);
            $deletes1.attr({checked:true});
        }
    }else{
        for(var j = 0 ; j < mhdeletes.length ; j++){
            var $deletes2 = $(mhdeletes[j]);
            $deletes2.attr({checked:false});
        }
    }
});
/*********收藏js**********/
/*********订阅js**********/
//点击追漫或追番
$("#sec_sub>div>span").click(function(){
    var clickspan = $(this);//受到点击的元素
    var name = clickspan.children("a").attr('name');
    //设置受到点击的元素变蓝和带下划线，其他不带下划线和变黑
    $("#sec_sub>div>span>a").css({"color":"#000000","text-decoration":"none"});
    clickspan.children("a").css({"color":"#0099FF","text-decoration":"underline"});
    //分析受到点击的元素的name值决定显示“追漫”或“追番”
    if(name == "dm"){
        $("#sec_sub_cari").hide();
        $("#sec_sub_cart").show();
    }else if(name == "mh"){
        $("#sec_sub_cart").hide();
        $("#sec_sub_cari").show();
    }
});
//点击编辑
$("#sec_sub>div>a").toggle(
    function(){
        $(this).html("完成");
        $("#sec_sub>div>div").show();
        $("#sec_sub>ul>li>a>input").show();
    },//显示删除节点功能
    function(){
        $(this).html("编辑");
        $("#sec_sub>div>div").hide();
        $("#sec_sub>ul>li>a>input").hide();
    }//隐藏删除节点功能
);
//删除
var dydeletes = $("#sec_sub>ul input");
$("#sec_sub>div>div>a").click(function(){
    for(var i = 0 ; i < dydeletes.length ; i++){
        if($(dydeletes[i]).attr('checked') == "checked"){
            $(dydeletes[i]).parents("a").parents("li").remove();
        }
    }
});
//点击全选
$("#sec_sub>div>div>input").click(function(){
    var checkeds = $(this).attr('checked'); //获取全选的checked属性值
    var dm = $("#sec_sub_cart input");     //订阅的动漫
    var mh = $("#sec_sub_cari input");     //订阅的漫画
    var deletes;                              //要进行操作的input
    //判断现在页面上显示的是漫画还是动漫
    var span = $("#sec_sub>div>span>a");    //获取控制页面显示“动漫”还是“漫画”的元素
    var color;                                //获取颜色值用于判断
    var name;                                 //获取name属性值用于判断
    for(var n = 0 ; n < span.length ; n++){
        color = getComputedStyle(span[n],null).color;
        if(color == "rgb(0, 153, 255)"){
            name = span[n].getAttribute('name');
        }
    }
    if(name == "dm"){
        deletes = dm;
    }else if(name == "mh"){
        deletes = mh;
    }
    if(checkeds == "checked"){//全选选中，设置dydeletes中所有input复选框选中
        for(var i = 0 ; i < deletes.length ; i++){
            var $deletes1 = $(deletes[i]);
            $deletes1.attr({checked:true});
        }
    }else{//全选未选中，设置dydeletes中所有input复选框未选中
        for(var j = 0 ; j < deletes.length ; j++){
            var $deletes2 = $(deletes[j]);
            $deletes2.attr({checked:false});
        }
    }
});
/*********订阅js**********/

/******漫画或漫画显示区所有display状态为none时******/
$(document).click(function(){
    var disp;           //display样式值
    var dmfatr = true;    //是否所有动漫都隐藏
    var mhfatr = true;    //是否所有漫画都隐藏
    for(var i = 0 ; i < $dmstring.length ; i++){
        disp = getComputedStyle($dmstring[i],null).display;
        if(disp != "none"){
            dmfatr = false;
        }
    }//检测是否所有动漫都隐藏
    for(var j = 0 ; j < $mhstring.length ; j++){
        disp = getComputedStyle($mhstring[j],null).display;
        if(disp != "none"){
            mhfatr = false;
        }
    }//检测是否所有漫画都隐藏
    if(dmfatr){//是便追加样式  动漫
        $("#sec_col_cart>ul").addClass("bg");
    }else{//否便移除样式  动漫
        $("#sec_col_cart>ul").removeClass("bg");
    }
    if(mhfatr){//是便追加样式  漫画
        $("#sec_col_cari>ul").addClass("bg");
    }else{//否便移除样式  漫画
        $("#sec_col_cari>ul").removeClass("bg");
    }
});
