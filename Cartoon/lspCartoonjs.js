/**
 * Created by lenovo on 2020/12/28.
 */
$(document).ready(function(){
    $(".sec_pag_inp").blur(page2);
});


/******筛选显示******/
/*属性*/
var $string = $("#sec_screen>div");//获取所有动漫节点
var $li = $("#sec_page li");        //获取所有的页面节点
var chara = "!";   //类型(!)
var charb = "@";   //地区(@)
var charc = "%";   //时间(%)
var chard = "&";   //风格(&)
function display(i){
    //改变筛选选项样式
    var char = i.substring(0,1);
    $("#sec_fil_table tr[class='"+char+"'] a").css({"color":"#000000"});
    $("#sec_fil_table tr[class='"+char+"'] li").css({"background":"#FFFFFF"});
    $("#sec_fil_table li a[name='"+i+"']").css({"color":"#FFFFFF"});
    $("#sec_fil_table li a[name='"+i+"']").parent().css({"background":"#0099FF"});
    //设置具体动漫的显示
    var disp;   //display样式值
    var name;   //name属性值
    if(char == "!"){//根据不同的字符给不同的属性赋值
        chara = i;
    }else if(char == "@") {
        charb = i;
    }else if(char == "%") {
        charc = i;
    }else if(char == "&") {
        chard = i;
    }
    /*设置不符合类型的动漫隐藏*/
    $("#sec_screen div a[name]").parent().css({"display":"none"});
    $("#sec_screen div a[name*='"+chara+"']").parent().css({"display":"block"});
    /*设置不符合地区隐藏*/
    for(var p = 0 ; p < $string.length ; p++){
        disp = getComputedStyle($string[p],null).display;
        if(disp != "none"){
            $string[p].style.display='none';
            name = $string[p].firstElementChild.getAttribute("name");
            if(name.indexOf(charb) != -1){
                $string[p].style.display='block';
            }
        }
    }
    /*设置不符合时间隐藏*/
    for(var r = 0 ; r < $string.length ; r++){
        disp = getComputedStyle($string[r],null).display;
        if(disp != "none"){
            $string[r].style.display='none';
            name = $string[r].firstElementChild.getAttribute("name");
            if(name.indexOf(charc) != -1){
                $string[r].style.display='block';
            }
        }
    }
    /*设置不符合风格隐藏*/
    for(var l = 0 ; l < $string.length ; l++){
        disp = getComputedStyle($string[l],null).display;
        if(disp != "none"){
            $string[l].style.display='none';
            name = $string[l].firstElementChild.getAttribute("name");
            if(name.indexOf(chard) != -1){
                $string[l].style.display='block';
            }
        }
    }
    dm();      //调用显示动漫数量函数
}
/******跳转页面******/
/***文本框跳转页面***/
function page2(){
    //获取文本框值
    var number = $(".sec_pag_inp").val();
    if(number == ""){
        return;
    }
    var sum = parseFloat(number);
    if(sum < 1 || sum > 10){
        alert("输入数字错误");
        return;
    }
    $("#sec_page li:eq("+sum+")").siblings().css({"background":"rgba(0,0,0,0)"});
    $("#sec_page li:eq("+sum+")").siblings().children("a").css({"color":"#000000"});
    $("#sec_page li:eq("+sum+")").css({"background":"#0099FF"});
    $("#sec_page li:eq("+sum+")").children("a").css({"color":"#FFFFFF"});
    dm();//调用函数
}
/***按钮跳转页面***/
function page(i) {
    var bg;     //背景颜色
    if (i == "*") {
        //设置用户点击下一页时“*”
        for(var l = 0 ; l < $li.length-1 ; l++){
            bg = getComputedStyle($li[l],null).backgroundColor;
            if(bg != "rgba(0, 0, 0, 0)"){
                if(l+1 >= $li.length-1){
                    alert("没有下一页了！");
                    return;
                }
                $li[l].style.backgroundColor='rgba(0, 0, 0, 0)';
                $li[l].firstElementChild.style.color='#000000';
                $li[l+1].style.backgroundColor='#0099FF';
                $li[l+1].firstElementChild.style.color='#FFFFFF';
                break;
            }
        }
        dm();
    }else if(i == "@"){
        //设置用户点击上一页时“@”
        for(var n = 1 ; n < $li.length-1 ; n++){
            bg = getComputedStyle($li[n],null).backgroundColor;
            if(bg != "rgba(0, 0, 0, 0)"){
                if(n-1 <= 0){
                    alert("没有上一页了！");
                    return;
                }
                $li[n].style.backgroundColor='rgba(0, 0, 0, 0)';
                $li[n].firstElementChild.style.color='#000000';
                $li[n-1].style.backgroundColor='#0099FF';
                $li[n-1].firstElementChild.style.color='#FFFFFF';
                break;
            }
        }
        dm();
    }else{
        $("#sec_page li:eq("+i+")").siblings().css({"background":"rgba(0, 0, 0, 0)"});
        $("#sec_page li:eq("+i+")").siblings().children("a").css({"color":"#000000"});
        $("#sec_page li:eq("+i+")").css({"background":"#0099FF"});
        $("#sec_page li:eq("+i+")").children("a").css({"color":"#FFFFFF"});
        dm();
    }
}
/*****设置只能显示20个动漫******/
function dm(){
    var sum = 20;   //循环次数
    var disp;       //display属性
    var name;   //name属性值
    var bg;         //background属性
    var num = 0;    //现在的页面
    var number = 0; //记录display属性不为none的动漫数量
    //获取现在显示的页面
    for(var c = 1 ; c < $li.length-1 ; c++){
        bg = getComputedStyle($li[c],null).backgroundColor;
        if(bg != "rgba(0, 0, 0, 0)"){
            num = c;
            break;
        }
    }
    num = num * 20 - 20;
    /*设置不符合类型的动漫隐藏*/
    $("#sec_screen div a[name]").parent().css({"display":"none"});
    $("#sec_screen div a[name*='"+chara+"']").parent().css({"display":"block"});
    /*设置不符合地区隐藏*/
    for(var p = 0 ; p < $string.length ; p++){
        disp = getComputedStyle($string[p],null).display;
        if(disp != "none"){
            $string[p].style.display='none';
            name = $string[p].firstElementChild.getAttribute("name");
            if(name.indexOf(charb) != -1){
                $string[p].style.display='block';
            }
        }
    }
    /*设置不符合时间隐藏*/
    for(var r = 0 ; r < $string.length ; r++){
        disp = getComputedStyle($string[r],null).display;
        if(disp != "none"){
            $string[r].style.display='none';
            name = $string[r].firstElementChild.getAttribute("name");
            if(name.indexOf(charc) != -1){
                $string[r].style.display='block';
            }
        }
    }
    /*设置不符合风格隐藏*/
    for(var l = 0 ; l < $string.length ; l++){
        disp = getComputedStyle($string[l],null).display;
        if(disp != "none"){
            $string[l].style.display='none';
            name = $string[l].firstElementChild.getAttribute("name");
            if(name.indexOf(chard) != -1){
                $string[l].style.display='block';
            }
        }
    }
    //将相对于父节点下标大于num小于num+20的元素显示，小于num的隐藏,大于num+20的元素隐藏
    for(var n = 0 ; n < $string.length ; n++){
        disp = getComputedStyle($string[n],null).display;
        if(n < num){
            $string[n].style.display='none';
            continue;
        }
        if(disp != "none"){
            number++;
            if(sum > 0){
                sum--;
                continue;
            }
            $string[n].style.display='none';
        }
    }
}
/******动漫显示区所有动漫display状态为none时******/
$(document).click(function(){
    var $string = $("#sec_screen>div");
    var disp;           //display样式值
    var fatr = true;    //是否所有动漫都隐藏
    for(var i = 0 ; i < $string.length ; i++){
        disp = getComputedStyle($string[i],null).display;
        if(disp != "none"){
            fatr = false;
        }
    }
    if(fatr){
        $("#sec_screen").addClass("bg");
    }else{
        $("#sec_screen").removeClass("bg");
    }
});


