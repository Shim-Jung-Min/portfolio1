$(function(){
    $("#m_menu span.m").on("mouseenter" ,function() {
        $(this).next().addBack().toggleClass("on").end().find(".m, ul").removeClass("on").end().parent().siblings().find(".m, ul").removeClass("on");
         return false;
    });
    
    $("ul>li").click(function(){
        $(window).scrollTop(0);
        
        var i= $(this).index();
        console.log(i);
        
        $("section").removeClass("on");
        $("section").eq(i).addClass("on");
    });
});