/**
 * Created by lenovo on 2020/12/24.
 */
var tus = new Array("images/TJ1.png","images/TJ2.png","images/TJ3.jpg","images/TJ4.png","images/TJ5.jpg");
var names = new Array("鬼灭之刃","辉夜大小姐想让我告白","某科学的超电磁炮","Fate","刀剑神域");

$(document).ready(function(){
    /*悬浮时改变样式*/
    $(".sec_tes_arr").hover(function(){
        $(this).children("a").css("color","#0099FF");
        $(this).children("img").attr({src:"images/JT7.png"});
    },function(){
        $(this).children("a").css("color","#CCCCCC");
        $(this).children("img").attr({src:"images/JT6.png"});
    });
    /*点击更多是显示隐藏的更新列表*/
    $("#sec_tes_arr").click(function(){
        $(this).children("img").toggleClass("xuanimg");
        $("#sec_tes div:eq(12)~div").toggle();
    }).toggle(
        function(){ $(this).children("a").html("收起"); },
        function(){ $(this).children("a").html("全部"); }
    );
    /*锚链接悬浮时改变属性*/
    $("#backtrack>a").hover(function(){
        $(this).children("img").attr({src:"images/GD2.png"});
    },function(){
        $(this).children("img").attr({src:"images/GD1.png"});
    }).click(function(){
        $("html,body").animate({ scrollTop: $("#head").offset().top }, 800);
    });
});
/*鼠标移至或点击按钮后切换图片*/
function slideshow1(i){
    var user = names[i];
    $("#sec_sli_pic>img").attr({src:tus[i] , alt:user});
    $("#sec_sli_pic>span").html(user);
}
/*定时切换图片*/
setInterval("slideshow()" , 3500);
var number = 0;
function slideshow(){
    number++;
    var user = names[number];
    $("#sec_sli_pic>img").attr({src:tus[number] , alt:user});
    $("#sec_sli_pic>span").html(user);
    if(number >= 4){
        number = 0;
    }
}



