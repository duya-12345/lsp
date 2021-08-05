/**
 * Created by lenovo on 2020/12/31.
 */
$(document).ready(function(){
    /*锚链接悬浮时改变属性*/
    $("#backtrack>a").hover(function(){
        $(this).children("img").attr({src:"images/aGD2.png"});
    },function(){
        $(this).children("img").attr({src:"images/aGD1.png"});
    }).click(function(){
        $("html,body").animate({ scrollTop: $("#head").offset().top }, 800);
    });
});

/******筛选显示******/
/*属性*/
var chara = "!";   //进度(!)
var charb = "@";   //地区(@)
var charc = "&";   //题材(&)
function display(i){
    var $string = $("#sec_screen>div");
    //改变筛选选项样式
    var char = i.substring(0,1);
    $("#sec_fil_table tr[class='"+char+"'] a").css({"color":"#000000"});
    $("#sec_fil_table tr[class='"+char+"'] li").css({"background":"#FFFFFF"});
    $("#sec_fil_table li a[name='"+i+"']").css({"color":"#FFFFFF"});
    $("#sec_fil_table li a[name='"+i+"']").parent().css({"background":"#0099FF"});
    $("#sec_fil_table2 tr[class='"+char+"'] a").css({"color":"#000000"});
    $("#sec_fil_table2 tr[class='"+char+"'] li").css({"background":"#FFFFFF"});
    $("#sec_fil_table2 li a[name='"+i+"']").css({"color":"#FFFFFF"});
    $("#sec_fil_table2 li a[name='"+i+"']").parent().css({"background":"#0099FF"});
    //设置具体动漫的显示
    var disp;   //display样式值
    var name;   //name属性值
    if(char == "!"){//根据不同的字符给不同的属性赋值
        chara = i;
    }else if(char == "@") {
        charb = i;
    }else if(char == "&") {
        charc = i;
    }
    /*设置不符合进度的漫画隐藏*/
    $("#sec_screen div a[name]").parent().css({"display":"none"});
    $("#sec_screen div a[name*='"+chara+"']").parent().css({"display":"block"});
    /*设置不符合类型的地区隐藏*/
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
    /*设置不符合类型的题材隐藏*/
    for(var l = 0 ; l < $string.length ; l++){
        disp = getComputedStyle($string[l],null).display;
        if(disp != "none"){
            $string[l].style.display='none';
            name = $string[l].firstElementChild.getAttribute("name");
            if(name.indexOf(charc) != -1){
                $string[l].style.display='block';
            }
        }
    }
}
/******漫画显示区所有动漫display状态为none时******/
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
/******筛选相对滚动条顶部偏移值270大于是显示******/
$(window).scroll(function(){
    var num = parseInt($(this).scrollTop());
    if(num > 270){
        $("#sec_filtrate2").slideDown();
    }else{
        $("#sec_filtrate2").slideUp();
    }
});

