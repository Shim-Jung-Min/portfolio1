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
    }, 30);
    
    if(c > 99){
        c = 100;
    }
    
    
    
    //메뉴btn
    var close = function(){
        $(".btn").removeClass("on");
        $(".menu_pop").removeClass("on");
        $(".menu_pop").css({"opacity":"0"});
        $(".btn p").animate({"opacity":"1"},500,"linear",function(){
            $(".menu_pop").css({"z-index":"0"});
        });
        $("h1").removeClass("on");
    }
    
    $(".btn").click(function(){
        $(".btn p").animate({"opacity":"0"},500,"linear",function(){
            $(".menu_pop").css({"z-index":"20","opacity":"1"});
            $(".menu_pop").addClass("on");
        });
        $(".btn").addClass("on");
        $("h1").addClass("on");
    });
    
    $(".btn_c").click(close);
    
    function door(){
		$bnnNum = 0;
        if($(".container>section").eq(1).hasClass("on")) return false;
        $(".container>section").eq(0).css({"transform":"translateZ(10000px)"});
		$(".container>section").eq(1).css({"transform":"translateZ(0px) rotate(720deg)"});
        $(".snb").delay(100).animate({"display":"block"},150,"linear",function(){
            $(".container").addClass("on");
        });
        $(".container>section").removeClass("on");
        $(".container>section").eq(1).addClass("on");
        
        $("div.trace").css({"transform": "rotate(300deg)"});
        $(".bframe").animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").addClass("on");
            $(".snb>ul").removeClass("opa");
            
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
        });
        $(".snb>ul").removeClass("on");
        $(".snb>ul").eq(0).addClass("on");
        
        $(".moving").addClass("on");
    }
    
    function main(){
        
        if($(".container>section").eq(0).hasClass("on")) return false;
        
        $(".container>section").eq(0).css({"transform":"translateZ(0px)"});
		$(".container>section").eq(1).css({"transform":"translateZ(-10000px) rotate(-720deg)"});
        $(".snb").delay(1650).animate({"display":"block"},150,"linear",function(){
            $(".container").removeClass("on");
        });
        $(".container>section").removeClass("on");
        $(".container>section").eq(0).addClass("on");
        
        
        $("div.trace").css({"transform": "rotate(170deg)"});
        
        $(".btn").removeClass("on");
        $(".menu_pop").removeClass("on");
        $(".menu_pop").css({"opacity":"0"});
        $(".btn p").animate({"opacity":"1"},500,"linear",function(){
            $(".menu_pop").css({"z-index":"0"});
        });
        $("h1").removeClass("on");
        $(".moving").removeClass("on");
    }
    
    //translateZ 전환(main->sub,sub->main)
    
    $(".door").click(door);
    
    $("h1").click(main);
    
    //gnb
    var $book_w = $(".sub").width();
    
    //main 눌렀을때
    $(".gnb>div>ul>li").eq(0).click(main);
    
    //profile 눌렀을때
    $(".gnb>div>ul>li").eq(1).click(function(){
        $bnnNum = 0;
        
        //메인페이지에 있으면
        if($(".container>section").eq(0).hasClass("on")){
        $(".container>section").eq(0).css({"transform":"translateZ(10000px)"});
		$(".container>section").eq(1).css({"transform":"translateZ(0px) rotate(720deg)"});
        $(".snb").delay(100).animate({"display":"block"},150,"linear",function(){
            $(".container").addClass("on");
        });
        $(".container>section").removeClass("on");
        $(".container>section").eq(1).addClass("on");
        }
        
        $("div.trace").css({"transform": "rotate(300deg)"});
        $(".bframe").animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").eq($bnnNum).addClass("on");
            $(".snb>ul").removeClass("opa");
            
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
        });
        $(".snb>ul").removeClass("on");
        $(".snb>ul").eq(0).addClass("on");
        
        $(".btn").removeClass("on");
        $(".menu_pop").removeClass("on");
        $(".menu_pop").css({"opacity":"0"});
        $(".btn p").animate({"opacity":"1"},500,"linear",function(){
            $(".menu_pop").css({"z-index":"0"});
        });
        $("h1").removeClass("on");
    });
    
    //project 눌렀을때
    $(".gnb>div>ul>li").eq(2).click(function(){
        /*var main = setTimeout(main,);*/
        
        $bnnNum = 2;
        
        if($(".container>section").eq(0).hasClass("on")){
        $(".container>section").eq(0).css({"transform":"translateZ(10000px)"});
		$(".container>section").eq(1).css({"transform":"translateZ(0px) rotate(720deg)"})
        $(".snb").delay(100).animate({"display":"block"},150,"linear",function(){
            $(".container").addClass("on");
        });
        $(".container>section").removeClass("on");
        $(".container>section").eq(1).addClass("on");
        }
            
        $("div.trace").css({"transform": "rotate(425deg)"});
        $(".bframe").animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").eq($bnnNum).addClass("on");
            $(".snb>ul").removeClass("opa");
            
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
        });
        $(".snb>ul").removeClass("on");
        $(".snb>ul").eq(1).addClass("on");
        
        $(".btn").removeClass("on");
        $(".menu_pop").removeClass("on");
        $(".menu_pop").css({"opacity":"0"});
        $(".btn p").animate({"opacity":"1"},500,"linear",function(){
            $(".menu_pop").css({"z-index":"0"});
        });
        $("h1").removeClass("on");
    });
    
    
        /*if(li<1){
            $("div.trace").css({"transform": "rotate(170deg)"});
            
        }else if(li>=1&&li<2){
            if($(".container>section").eq(1).hasClass("on")) return false;
            
            $(".container>section").eq(0).css({"transform":"translateZ(5000px)"});
            $(".container>section").eq(1).css({"transform":"translateZ(0px) rotate(720deg)"});
            $(".snb").delay(100).animate({"display":"block"},150,"linear",function(){
                $(".container").addClass("on");
            });
            $(".container>section").removeClass("on");
            $(".container>section").eq(1).addClass("on");
        }*/
    
    //메인페이지
    $(".window").hover(function(){
        $(".cursor").css({"transform":"scale(2)"});
        $(".light").css({"z-index": 6});
        $(".light").stop().animate({"opacity": 1},600,"linear");
        $(".light").delay(700).stop().animate({opacity:0},600,"linear",function(){
            $(".light").css("z-index","0");
            $(".cursor").css({"transform":"scale(1)"});
        });
    });
    
    $(".siluet").hover(function(){
        $(".talk").stop().animate({opacity:1},600,"linear");
        $(".talk p").eq(3).stop().animate({opacity:1},600,"linear");
        $(".talk").delay(700).stop().animate({opacity:0},600,"linear");
        $(".talk p").eq(3).delay(700).stop().animate({opacity:0},600,"linear");
    });
    
    
    var flag = true;
    
    $(".bed").hover(function(){
        
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
    
    //배너
    
    //snb
    $(".snb>ul>li").mouseover(function(){
        $(this).addClass("on");
    });
    
    $(".snb>ul>li").mouseout(function(){
        $(this).removeClass("on");
    });
    
    //profile snb
    $(".snb>ul:first-of-type>li").click(function(){
        $bnnNum = $(this).index();
        $book_w = $(".sub").width();
        
        $(".bframe>article").removeClass("on");
        $(".snb>ul").addClass("opa");
        
        $(".bframe").animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").eq($bnnNum).addClass("on");
            $(".snb>ul").removeClass("opa");
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
        });
        
        //gnb 자동조정
        if($bnnNum<2){
            $("div.trace").css({"transform": "rotate(300deg)"});
        }else if($bnnNum>=2){
            $("div.trace").css({"transform": "rotate(425deg)"});
        }
        
        //snb
        if($bnnNum<2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(0).addClass("on");
        }else if($bnnNum>=2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(1).addClass("on");
        }
    });
    
    //projects snb
    $(".snb>ul:last-of-type>li").click(function(){
        $bnnNum = $(this).index()+2;
        $book_w = $(".sub").width();
        
        $(".bframe>article").removeClass("on");
        $(".snb>ul").addClass("opa");
        
        $(".bframe").animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").eq($bnnNum).addClass("on");
            $(".snb>ul").removeClass("opa");
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
        });
        
        //gnb 자동조정
        if($bnnNum<2){
            $("div.trace").css({"transform": "rotate(300deg)"});
        }else if($bnnNum>=2){
            $("div.trace").css({"transform": "rotate(425deg)"});
        }
        
        //snb
        if($bnnNum<2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(0).addClass("on");
        }else if($bnnNum>=2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(1).addClass("on");
        }
    });
    
    //다음버튼
    var $bnnNum = 0;
    var $lastNum = $(".bframe>article").size()-1;
    
    $(".next").click(function(e){
        e.preventDefault;
        
        $bnnNum++;
        if($bnnNum > $lastNum) $bnnNum = 0;
        
        $book_w = $(".sub").width();
        
        $(".bframe>article").removeClass("on");
        $(".snb>ul").addClass("opa");
        
        /*$(".sub").animate({left:"-1920px"},1000,"linear");*/
        $(".bframe").animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").eq($bnnNum).addClass("on");
            $(".snb>ul").removeClass("opa");
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
        });
        
        //gnb 자동조정
        if($bnnNum<2){
            $("div.trace").css({"transform": "rotate(300deg)"});
        }else if($bnnNum>=2){
            $("div.trace").css({"transform": "rotate(425deg)"});
        }
        
        //snb
        if($bnnNum<2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(0).addClass("on");
        }else if($bnnNum>=2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(1).addClass("on");
        }
    });
    
    //이전버튼
    $(".prev").click(function(e){
        e.preventDefault;
        
        $bnnNum--;
        if($bnnNum < 0) $bnnNum = $lastNum;
        
        $book_w = $(".sub").width();
        
        $(".bframe>article").removeClass("on");
        $(".snb>ul").addClass("opa");
        
        $(".bframe").animate({"left":-$bnnNum * $book_w}, 700, "linear", function(){
            $(".bframe>article").eq($bnnNum).addClass("on");
            $(".snb>ul").removeClass("opa");
            if($(".snb>ul:first-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }else if($(".snb>ul:last-of-type").hasClass("on")){
                $(".snb>ul>li>span:last-of-type").css({"background-position": "0px 0px"});
                $(".snb>ul>li").eq($bnnNum).children().eq(1).css({"background-position": "-18px 0px"});
            }
        });
        
        //gnb 자동조정
        if($bnnNum<2){
            $("div.trace").css({"transform": "rotate(300deg)"});
        }else if($bnnNum>=2){
            $("div.trace").css({"transform": "rotate(425deg)"});
        }
        
        //snb
        if($bnnNum<2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(0).addClass("on");
        }else if($bnnNum>=2){
            $(".snb>ul").removeClass("on");
            $(".snb>ul").eq(1).addClass("on");
        }
    });
    
    //about
    
    //skills
    
    //skcnc
    var $autoNum = 0;
    var $lastAuto = $(".cncBan>section").size()-1;
    
    function $cncBanner(){
        $autoNum++;
        if($autoNum > $lastAuto) $autoNum = 0;
        
        $banner_w = $(".skcnc>section").width();
            
        $(".cncBan").animate({"left":-$autoNum * $banner_w}, 700, "linear");
    }
    
    var $cncBan = setInterval($cncBanner, 5000);
    
    
    
    //footer
    //toggle_music
    $(".toggle_music").click(function(){
        $(this).toggleClass("on");
        var gogo = play();
    });
    
    function play(){
        var audio = document.getElementById("audio");
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }
});




















