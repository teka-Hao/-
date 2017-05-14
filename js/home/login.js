define(["jquery","bootstrap","jquery_form", "jquery_cookie", "util", "nprogress"], 
function( $,ud, und, unde, util, nprogress){
    nprogress.start();
    $("#login").ajaxForm({
        success: function(data){
            console.log(data);                        
            $.cookie("userInfo", JSON.stringify(data.result), {path: "/"});
            location.href = "/";
        },
        error: function(){
            alert("登陆失败");
        }
    })
    util.loading();
    nprogress.done();
      if($.cookie("PHPSESSID")){
        location.href = "/";
    }
});