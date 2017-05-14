define(["jquery", "jquery_cookie", "bootstrap"], function($, ud,und) {
	var userInfo = {};
    try{
        userInfo = JSON.parse($.cookie("userInfo"));
    }catch(e){
        console.log("userInfo错误");
    }
    userInfo.tc_avatar && $(".aside .avatar img").attr("src", userInfo.tc_avatar);
    $(".aside h4").html(userInfo.tc_name);  
    $(".slide_down").on("click", function(){
        $(this).next().toggle(500);
    })
});