
require.config({
    baseUrl:'/',
    paths:{
        //每个模块都有自己的名字
        csAdd:'js/course/add',
        csList:'js/course/list',
        cgAdd:'js/course/category_add',
        cgList:'js/course/category_list',
        csStep1:'js/course/course_add_step1',
        csStep2:'js/course/course_add_step2',
        csStep3:'js/course/course_add_step3',
        login:'js/home/login',
        index:'js/home/index',
        repass:'js/home/repass',
        setting:'js/home/setting',
        tcEdit:'js/teacher/edit',
        tcList:'js/teacher/list',
        usProfile:'js/user/profile',
        usList:'js/user/list',

        //公共的：
        aside:'js/common/aside',
        header:'js/common/header',
        util:'js/common/util',
        //第三方：
        jquery:'lib/jquery/jquery.min',
        bootstrap:'lib/bootstrap/js/bootstrap',
        jquery_form: "lib/jquery-form/jquery.form",
        jquery_cookie: "lib/jquery-cookie/jquery.cookie",

        nprogress: "lib/nprogress/nprogress"
    },
    shim:{
        bootstrap:{
            deps:['jquery']
        }
    }
})
var data={
    
    '/html/course/add.html':"csAdd",
    '/html/course/list.html':"csList",
    '/html/course/category_add.html':"cgAdd",
    '/html/course/category_list.html':"cgList",
    '/html/course/course_add_step1.html':"csStep1",
    '/html/course/course_add_step2.html':"csStep2",
    '/html/course/course_add_step3.html':"csStep3",

    '/html/home/login.html':"login",
    '/html/home/settings.html':"setting",
    '/html/home/repass.html':"repass",
    '/':"index",

    '/html/teacher/edit.html':"tcEdit",
    '/html/teacher/list.html':"tcList",

    '/html/user/list.html':"usList",
    '/html/user/profile.html':"usProfile"
}
require([data[location.pathname]]);