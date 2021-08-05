/**
 * Created by lenovo on 2021/1/10.
 */
$(document).ready(function(){
});

//正片播放
$("#sec_right_pos li,#sec_right_oth li").click(function(){
    //设置受到点击li背景变化，其他li回归正常
    $("#sec_right_pos li,#sec_right_oth li").css({"background":"#F4F4F4","color":"#000"});
    $("#sec_right_pos li,#sec_right_oth li").children("a").css({"background":"none","padding":"0"});
    $(this).css({"background":"#FFF","color":"#09F"});
    $(this).children("a").css({"background":"url(images/bf.png) 0 0 no-repeat","background-size":"10px","padding":"0 18px"});
    //设置点击不同的集数播放不同的视频
});


//评论
$("#sec_left_com_a").click(function(){
    var char = $("#sec_left_com>div>textarea").val();
    var li = "<li><div><div></div></div><span>渡鸦12345</span><p>"+char+"</p></li>";
    $("#sec_left_com>ul").append(li);
    $("#sec_left_com>div>textarea").val("");
});
//订阅
$(".sec_left_det_a1").toggle(
    function(){ $(this).html("订阅"); $(this).css({"text-indent":"24px"}); },
    function(){ $(this).html("取消订阅"); $(this).css({"text-indent":"8px"}); }
);
//收藏
$(".sec_left_det_a2").toggle(
    function(){
        $(this).children("span").html("收藏");
        $(this).children("img").attr({src:"images/bs2.jpg"}); },
    function(){
        $(this).children("span").html("已收藏");
        $(this).children("img").attr({src:"images/bs1.jpg"}); }
);
/*锚链接悬浮时改变属性*/
$("#backtrack>a").hover(function(){
    $(this).children("img").attr({src:"images/GD2.png"});
},function(){
    $(this).children("img").attr({src:"images/GD1.png"});
}).click(function(){
    $("html,body").animate({ scrollTop: $("#head").offset().top }, 800);
});
