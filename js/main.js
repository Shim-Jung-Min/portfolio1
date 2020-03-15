$(function(){
    
    //로딩페이지
    var counter = 0;
    var c = 0;
    var i = setInterval(function(){
      $(".progress-text").html(c + "%");
      $(".progress-bar").css("width", c + "%");
        
    counter++;
    c++;

    if(counter >= 100) {
        $(".progress-text").html("100%");
        clearInterval(i);
        $(".progress").addClass("progress-complete");
        
        $(".loading").add($(".progress-text")).delay(700).animate({opacity:0}, 250, function(){
                $(".progress").animate({top:"-1000px"}, 1000);
        });
    }
    }, 50);
    
    if(c > 99){
        c = 100;
    }
    
    //메뉴 열림
    var toggle = true;
    
    $(".btn>p.menu").click(function(){
        if(toggle){
            $(".btn p.menu").text("close");
            $(".btn").addClass("on");
            $("h1").addClass("on");
            setTimeout(function(){
                $(".menu_pop").addClass("on");
                $(".menu_pop").addClass("display");
            },800);
            toggle = false;
        }else{
            $(".menu_pop").removeClass("on");
            setTimeout(function(){
                $(".menu_pop").removeClass("display");
                $(".btn p.menu").text("menu");
                $(".btn").removeClass("on");
                $("h1").removeClass("on");
            },1000);
            toggle = true;
        }
    });
    
    //메뉴 닫힘 function//
    function close(){
        $(".menu_pop").removeClass("on");
        setTimeout(function(){
            $(".menu_pop").removeClass("display");
            $(".btn p.menu").text("menu");
            $(".btn").removeClass("on");
            $("h1").removeClass("on");
        },1000);
        toggle = true;
    }
    
    //sub function//
    function sub(){
        if($(".container>section").eq(1).hasClass("on")) return false;
        $(".container>section").eq(0).css({"transform":"translateZ(10000px)"});
		$(".container>section").eq(1).css({"transform":"translateZ(0px) rotate(720deg)"});
        /*$(".snb").delay(100).animate({"display":"block"},150,"linear",function(){
            $(".container").addClass("on");
        });*/
        setTimeout(function(){
            $(".container").addClass("on");
        },250);
        $(".container>section").removeClass("on");
        $(".container>section").eq(1).addClass("on");//opacity
        $(".snb>ul").removeClass("on");
        $(".snb>ul").eq(0).addClass("on");//opacity
        
        $(".moving").addClass("on");//rotate siluet
    }
    
    //main function//
    function main(){
        
        if($(".container>section").eq(0).hasClass("on")) return false;
         $(".container>section").eq(0).css({"transform":"translateZ(0px)"});
		$(".container>section").eq(1).css({"transform":"translateZ(-10000px) rotate(-720deg)"});
        /*$(".snb").delay(1650).animate({"display":"block"},150,"linear",function(){
            $(".container").removeClass("on");
        });*/
        setTimeout(function(){
            $(".container").removeClass("on");
        },1800);
        $(".container>section").removeClass("on");
        $(".container>section").eq(0).addClass("on");//opacity
        
        $(".moving").removeClass("on");//rotate siluet
    }
    
    //banner function//
    var $bnnNum = 0;
    var $lastNum = $(".bframe>article").size()-1;
    var $book_w = $(".sub").width();
    
    function banner(){
        
        $(".bframe>article").removeClass("on");
        $(".snb>ul").addClass("opa");
        
        $(".bframe").stop().animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").eq($bnnNum).addClass("on");
            
            $(".snb>ul").removeClass("opa");
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
            
            if($(".bframe>article").eq(0).hasClass("on")){
                var $autoNum = 0;
                setInterval($cncBanner,4000);
            }else{
                clearInterval($cncBanner);
            }
            
            if($(".bframe>article").eq(2).hasClass("on")){
                $(".mosaji").addClass("on");
            }else{
                $(".mosaji").removeClass("on");
            }
            
            if($(".bframe>article").eq(6).hasClass("on")){
                setTimeout(function(){
                    $(".pole>span").eq(0).addClass("on");
                },0);
                setTimeout(function(){
                    $(".pole>span").eq(1).addClass("on");
                },500);
                setTimeout(function(){
                    $(".pole>span").eq(2).addClass("on");
                },900);
                setTimeout(function(){
                    $(".pole>span").eq(3).addClass("on");
                },1400);
                setTimeout(function(){
                    $(".pole>span").eq(4).addClass("on");
                },2000);
            }else{
                $(".pole>span").removeClass("on");
            }
            
            
            if($(".bframe>article").eq(5).hasClass("on")){
                skills();
            }else{
                $(".bar").animate({"width": "0"}, 600, "linear");
            }
        });
        
        
        //gnb 자동조정
        if($bnnNum<4){
            $("div.trace").css({"transform": "rotate(300deg)"});
        }else if($bnnNum>=4){
            $("div.trace").css({"transform": "rotate(425deg)"});
        }
        
        //snb
        if($bnnNum<4){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(0).addClass("on");
        }else if($bnnNum>=4){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(1).addClass("on");
        }
    }
    //function end
    
    //main page 전환
    $(".door").click(function(){
        $bnnNum = 0;
        sub();
        banner();
    });
    
    $("h1").click(function(){
        $("div.trace").css({"transform": "rotate(170deg)"});
        main();
        close();
    });
    
    //gnb main
    $(".gnb>div>ul>li").eq(0).click(function(){
        $("div.trace").css({"transform": "rotate(170deg)"});
        var Zmove = setTimeout(main, 1700);
        var close_menu = setTimeout(close, 700);
    });
    //gnb profile
    $(".gnb>div>ul>li").eq(1).click(function(){
        $bnnNum = 0;
        var Zmove = setTimeout(sub, 1700);
        banner();
        var close_menu = setTimeout(close, 700);
    });
    //gnb projects
    $(".gnb>div>ul>li").eq(2).click(function(){
        $bnnNum = 4;
        var Zmove = setTimeout(sub, 1700);
        banner();
        var close_menu = setTimeout(close, 700);
    });
    
    //snb
    //mouse over,out
        $(".snb>ul>li").mouseover(function(){
            $(this).addClass("on");
        });    
        $(".snb>ul>li").mouseout(function(){
            $(this).removeClass("on");
        });
    //profile tab
        $(".snb>ul:first-of-type>li").click(function(){
            $bnnNum = $(this).index();

            banner();
        });
    //projects tab
        $(".gnb>ul:last-of-type>li").click(function(){
            $bnnNum = $(this).index()+4;
            
            banner();
        });
    
    
    //bframe next
    $(".next").click(function(e){
        e.preventDefault();
        
        $bnnNum++;
        if($bnnNum > $lastNum){return false;}
        
        banner();
    });
    
    //bframe prev
    $(".prev").click(function(e){
        e.preventDefault();
        
        $bnnNum--;
        if($bnnNum < 0){return false;}
        
        banner();
    });
    
    //bframe mousewheel
    $(window).mousewheel(function(event,delta){
        if(delta>0){//up
            if($bnnNum <= 0)return false;
            $bnnNum--;
            banner();
        }else if(delta<0){//down
            if($bnnNum >= $lastNum)return false;
            $bnnNum++;
            banner();
        }
    });
    
    //main event
    $(".door").mouseenter(function(){
        $(".cursor").addClass("hover");
        $(".cursor p").text("click");
    });
    $(".door").mouseleave(function(){
        $(".cursor").removeClass("hover");
        $(".cursor p").text("");
    });
    
    /*
    $(".window").mouseenter(function(){
        $(".cursor").addClass("hover");
        $(".cursor p").text("click");
    });
    $(".window").mouseleave(function(){
        $(".cursor").removeClass("hover");
        $(".cursor p").text("");
    });*/
    
    $(".window").click(function(){
        $(".light").css({"z-index": 6});
        $(".light").stop().animate({"opacity": 1},600,"linear");
        $(".light").delay(700).stop().animate({opacity:0},600,"linear",function(){
            $(".light").css("z-index","0");
        });
    });
    
    $(".talk").children().eq(0).delay(7000).animate({opacity:1},720,"linear",function(){
       $(".talk").children().eq(0).delay(720).animate({opacity:0},360,"linear"
       );
    });
    $(".talk").children().eq(1).delay(10000).animate({opacity:1},720,"linear",function(){
       $(".talk").children().eq(1).delay(720).animate({opacity:0},360,"linear"
       );
    });
    $(".talk").children().eq(2).delay(13000).animate({opacity:1},720,"linear",function(){
       $(".talk").children().eq(2).delay(720).animate({opacity:0},360,"linear"
       );
    });
    
    $(".siluet").children().eq(1).mouseenter(function(){
        $(".cursor").addClass("hover");
        $(".cursor p").text("click");
    });
    $(".siluet").children().eq(1).mouseleave(function(){
        $(".cursor").removeClass("hover");
        $(".cursor p").text("");
    });
    
    $(".siluet").children().eq(1).click(function(){
        
        $(".talk").stop().animate({opacity:1},720,"linear");
        $(".talk").children().eq(3).stop().animate({opacity:1},720,"linear");
        $(".talk").delay(720).stop().animate({opacity:0},360,"linear");
        $(".talk").children().eq(3).delay(720).stop().animate({opacity:0},360,"linear");
    });
    
    $(".bed").children().eq(1).mouseenter(function(){
        $(".cursor").addClass("hover");
        $(".cursor p").text("click");
    });
    $(".bed").children().eq(1).mouseleave(function(){
        $(".cursor").removeClass("hover");
        $(".cursor p").text("");
    });
    var flag = true;
    
    $(".bed").children().eq(1).click(function(){
        
        if(flag){
            $(".goyoung").addClass("on");
            flag = false;
        }else{
            $(".goyoung").removeClass("on");
            flag = true;
        }
        
    });

    
    //메인 컨텐츠들 hover 했을 때 커서 스케일 커지고 보더 없어지고 html 속성으로 click 입력, hover 나오면 스케일 다시 작아지고 보더 생기고 html 속성으로 "" 입력
    
    //gnb 클릭했을 때 해당 방향으로 가운데 원 rotateZ, 메뉴팝 닫히고 해당 페이지로 이동
    
    //상단 센터에 호버하면 커서 스케일 커지고 html 속성으로 close 입력, 호버 나오면 다시 작아지고 html 속성으로 ""입력
    
    //클릭하면 효과
    
    //skills
    var cent = [98,98,90,95,90,90,95,80];
    
    function skills(){
        for(var i=0; i<8; i++){
            $(".bar").eq(i).animate({"width": cent[i] + "%"}, 600, "linear");
        }
    }
     
    
    //skcnc
    var $autoNum = 0;
    var $lastAuto = $(".cncBan>section").size()-1;
    
    function $cncBanner(){
        $autoNum++;
        if($autoNum > $lastAuto){$autoNum = 0;}
        
        $banner_w = $(".skcnc>section").width();
        $(".cncBan>section").addClass("on");
            
        setTimeout(function(){
            $(".cncBan").stop().animate({"left":-$autoNum * $banner_w}, 500, "linear",function(){
                $(".cncBan>section").removeClass("on");
            });
        },300);
    }
    
    //footer
    //toggle_music
    
    function play(){
        var audio = document.getElementById("audio");
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
        $(".toggle_music").toggleClass("on");
        $(".phonograph").toggleClass("on");
    }
    
    $(".toggle_music").mouseenter(function(){
        $(".cursor").addClass("pointer");
    });
    $(".toggle_music").mouseleave(function(){
        $(".cursor").removeClass("pointer");
    });
    $(".toggle_music").click(function(){
        var toggle_music = play();
    });
    
    $(".phonograph").mouseenter(function(){
        $(".cursor").addClass("hover");
        $(".cursor p").text("click");
    });
    $(".phonograph").mouseleave(function(){
        $(".cursor").removeClass("hover");
        $(".cursor p").text("");
    });
    $(".phonograph").click(function(){
        var toggle_music = play();
    });
});