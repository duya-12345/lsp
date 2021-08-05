/**
 * Created by lenovo on 2021/1/1.
 */
/************设置“登录”,“注册”两个按钮，点进来显示不同的功能************/
//function showvalf(){
//    var $text=document.URL.match(/\b[a-zA-Z]*\b=[^&]*/g);
//    //注册：zhuce=%E6%B3%A8%E5%86%8C       登录：denlu=%E7%99%BB%E5%BD%95
//    if($text[0].indexOf("zhuce") != -1){
//        document.getElementById("#sec_enroll").style.display='none';
//        document.getElementById("#sec_login").style.display='block';
//    }
//    if($text[0].indexOf("denlu") != -1){
//        document.getElementById("#sec_login").style.display='none';
//        document.getElementById("#sec_enroll").style.display='block';
//    }
//}
$(document).ready(function(){
    /*********注册页面submit事件*********/
    //绑定失去焦点事件
    $("#name").bind({blur:checkName});
    $("#pwd").bind({blur:checkPwd});
    $("#cell").bind({blur:checkCell});
    $("#auth").bind({blur:checkAuth});
    //提交注册表单调用验证函数
    $("#sec_login").submit(function(){
        var flag = true;
        if(!checkName()){ flag = false; }
        if(!checkPwd()){ flag = false; }
        if(!checkCell()){ flag = false; }
        if(!checkAuth()){ flag = false; }
        return flag;
    });
    /*********登录页面submit事件*********/
    //绑定失去焦点事件
    $("#email").bind({blur:checkEmail});
    $("#repwd").bind({blur:checkRePwd});
    $("#tocell").bind({blur:checkToCell});
    $("#toauth").bind({blur:checkToAuth});
    //提交注册表单调用验证函数
    $("#sec_enroll").submit(function(){
        var flag = true;
        var color1 = $("#psaa_tosubmit").css('color');
        var color2 = $("#note_tosubmit").css('color');
        if(color1 == "rgb(0, 153, 255)"){
            if(!checkEmail()){ flag = false; }
            if(!checkRePwd()){ flag = false; }
        }else if(color2 == "rgb(0, 153, 255)"){
            if(!checkToCell()){ flag = false; }
            if(!checkToAuth()){ flag = false; }
        }
        return flag;
    });
    /******选中复选框时，改变按钮属性******/
    $("#checkbox").click(function(){
        var chec = $(this).prop('checked');
        if(chec){
            $("#submit").removeAttr("disabled");
            $("#submit").toggleClass("submitbg");
        }else{
            $("#submit").attr({disabled:"disabled"});
            $("#submit").toggleClass("submitbg");
        }
    });
    /******设置点击地区列表更好地区文本款内容******/
    $(".sec_log_f>li>ul div").click(function(){
        var text = $(this).html();
        $(".readonly").val(text);
        $(".sec_log_f>li>ul").hide();
        $(".readonly").next("img").css({"transition":"all 0.3s ease-in-out","transform":"rotate(0deg)","margin-top":"0px"});
    });
    /******设置点击显示地区文本框时，选择列表隐藏时显示，显示时隐藏******/
    $(".readonly").click(function(){
        $(".sec_log_f>li>ul").toggle();
        var num = $(this).next("img").css('transform');
        if(num == "matrix(1, 0, 0, 1, 0, 0)" || num == "none"){
            $(this).next("img").css({"transition":"all 0.3s ease-in-out","transform":"rotate(180deg)","margin-top":"4px"});
        }
        if(num == "matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)"){
            $(this).next("img").css({"transition":"all 0.3s ease-in-out","transform":"rotate(0deg)","margin-top":"0px"});
        }
    });
    /******获取验证码******/
    $("#button").click(function(){
        alert("别看了，老子做不出来验证码!");
    });
    /******登录页面短信登录改为密码登录******/
    $("#psaa_tosubmit").click(function(){
        $("#psaa_tosubmit").css({"color":"rgb(0, 153, 255)"});
        $("#note_tosubmit").css({"color":"rgb(0, 0, 0)"});
        $(".sec_enroll_ul>.sec_enroll_ul_1").css({"display":"block"});
        $(".sec_enroll_ul>.sec_enroll_ul_2").css({"display":"block"});
        $(".sec_enroll_ul>.sec_enroll_ul_3").css({"display":"none"});
        $(".sec_enroll_ul>.sec_enroll_ul_4").css({"display":"none"});
    });
    /******登录页面密码登录改为短信登录******/
    $("#note_tosubmit").click(function(){
        $("#psaa_tosubmit").css({"color":"rgb(0, 0, 0)"});
        $("#note_tosubmit").css({"color":"rgb(0, 153, 255)"});
        $(".sec_enroll_ul>.sec_enroll_ul_1").css({"display":"none"});
        $(".sec_enroll_ul>.sec_enroll_ul_2").css({"display":"none"});
        $(".sec_enroll_ul>.sec_enroll_ul_3").css({"display":"block"});
        $(".sec_enroll_ul>.sec_enroll_ul_4").css({"display":"block"});
    });
});
/*********注册页面验证文本框内容*********/
function checkName(){
    var name = $("#name");
    var $divId = $("#Divname");
    var regname = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,10}$/;
    if(name.val() == ""){
        $divId.html("昵称不能为空");
        return false;
    }
    if(name.val().length > 10){
        $divId.html("昵称过长");
        return false;
    }
    if(name.val().length < 2){
        $divId.html("昵称太短");
        return false;
    }
    if(regname.test(name.val()) == false){
        $divId.html("昵称只能由数字、字母、中文构成");
        return false;
    }
    $divId.html("");
    return true;
}//验证昵称
function checkPwd(){
    var pwd = $("#pwd");
    var $divId = $("#Divpwd");
    var regpwd = /^[A-Za-z0-9]{6,16}$/;
    if(pwd.val() == ""){
        $divId.html("密码不能为空");
        return false;
    }
    if(pwd.val().length > 16){
        $divId.html("密码过长");
        return false;
    }
    if(pwd.val().length < 6){
        $divId.html("密码太短");
        return false;
    }
    if(regpwd.test(pwd.val()) == false){
        $divId.html("密码只能由英文、数字构成");
        return false;
    }
    $divId.html("");
    return true;
}//验证密码
function checkCell(){
    var cell = $("#cell");
    var $divId = $("#Divcell");
    var regcell = /^1[0-9]{10}$/;
    if(cell.val() == ""){
        $divId.html("手机号不能为空");
        return false;
    }
    if(regcell.test(cell.val()) == false){
        $divId.html("手机号只能由1开头的11位数字构成");
        return false;
    }
    $divId.html("");
    return true;
}//验证手机号
function checkAuth(){
    var auth = $("#auth");
    var $divId = $("#Divpwd");
    var regauth = /^$/;
    $divId.html("");
    return true;
}//验证验证码
/*********注册页面验证文本框内容*********/

/*********登录页面验证文本框内容*********/
function checkEmail(){
    var email = $("#email");
    var $divId = $("#sec_enroll_ul_o1");
    var regemail = /^([A-Za-z0-9]{5,10})@([a-z0-9]{2,7}).com$/;
    var regtocell = /^1[0-9]{10}$/;
    if(email.val() == ""){
        $divId.html("账号不能为空");
        return false;
    }
    var flag = false;//标记是否含有英文，默认没有
    var regE = /^[A-Za-z@.]$/;
    for(var i = 0 ; i < email.val().length ; i++){
        var E = email.val().substring(i,i+1);
        if(regE.test(E)){
            flag = true;
        }
    }
    if(flag){//输入邮箱
        if(regemail.test(email.val()) == false){
            $divId.html("邮箱输入格式错误，例:");
            return false;
        }
    }else{//输入手机号
        if(regtocell.test(email.val()) == false){
            $divId.html("手机号只能由1开头的11位数字构成");
            return false;
        }
    }
    $divId.html("");
    return true;
}//验证账号
function checkRePwd(){
    var repwd = $("#repwd");
    var $divId = $("#sec_enroll_ul_o2");
    var regrepwd = /^[A-Za-z0-9]{6,16}$/;
    if(repwd.val() == ""){
        $divId.html("密码不能为空");
        return false;
    }
    if(repwd.val().length > 16){
        $divId.html("密码过长");
        return false;
    }
    if(repwd.val().length < 6){
        $divId.html("密码太短");
        return false;
    }
    if(regrepwd.test(repwd.val()) == false){
        $divId.html("密码只能由英文、数字构成");
        return false;
    }
    $divId.html("");
    return true;
}//验证密码
function checkToCell(){
    var tocell = $("#tocell");
    var $divId = $("#sec_enroll_ul_o1");
    var regtocell = /^1[0-9]{10}$/;
    if(tocell.val() == ""){
        $divId.html("手机号不能为空");
        return false;
    }
    if(regtocell.test(tocell.val()) == false){
        $divId.html("手机号只能由1开头的11位数字构成");
        return false;
    }
    $divId.html("");
    return true;
}//验证手机号
function checkToAuth(){
    var toauth = $("#toauth");
    var $divId = $("#sec_enroll_ul_o2");
    var regtoauth = /^$/;
    $divId.html("");
    return true;
}//验证验证码
/*********登录页面验证文本框内容*********/

