window.onload=function(){
    $(".loginmain li").mouseover(function(){
        // 为自己添加激活样式 去处其他兄弟li激活样式
        $(this).addClass("active").siblings().removeClass("active");
        //点谁显示谁的子集
        $(this).children().addClass("on");
        //隐藏其他的子集
        $(this).siblings().children().removeClass("on");
    })

    $(".loginmain>img").click(function(){
        $(this).closest('.loginmain').children().addClass("on");
        $(this).removeClass("on").next().removeClass("on");
    })
}