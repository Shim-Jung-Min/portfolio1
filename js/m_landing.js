$(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        
        console.log(scroll);
        
        $("div.top").click(function(){
            $(window).scrollTop(0);
        });
        
        if(scroll>=0 && scroll<700){
            $(".wave_container").addClass("on");
            $(".logo").addClass("on");
            $(".mock").addClass("on");
        }else{
            $(".wave_container").removeClass("on");
            $(".logo").removeClass("on");
            $(".mock").removeClass("on");
        }
        
        if(scroll>=1000 && scroll<2600){//content1
            $("#container>.content1").addClass("on");
        }else{
            $("#container>.content1").removeClass("on");
        }
        
        if(scroll>=3000 && scroll<5500){//content2
            $("#container>.content2").addClass("on");
        }else{
            $("#container>.content2").removeClass("on");
        }
        
        if(scroll>=5700 && scroll<8400){//content3
            $("#container>.content3").addClass("on");
        }else{
            $("#container>.content3").removeClass("on");
        }
        
        if(scroll>=8900 && scroll<13000){//content4
            $("#container>.content4").addClass("on");
        }else{
            $("#container>.content4").removeClass("on");
        }
        
        if(scroll>=13000 && scroll<15700){
            $("footer>div").eq(0).stop().animate({"top": "250px", "opacity": "1"}, 1500, "linear");
            $("footer>div").eq(1).stop().animate({"opacity": "1"}, 1500, "linear");
            $("footer>p").stop().animate({"opacity": "1"}, 1500, "linear");
        }else{
            $("footer>div").eq(0).stop().animate({"top": "100px", "opacity": "0"}, 1500, "linear");
            $("footer>div").eq(1).stop().animate({"opacity": "0s"}, 1500, "linear");
            $("footer>p").stop().animate({"opacity": "0s"}, 1500, "linear");
        }
    });
    
});