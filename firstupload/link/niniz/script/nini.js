$(document).ready(function(){
    $('.open').click(function(e){
        $(this).toggleClass('open'),
        $(this).parents().toggleClass('close');
        return false;
    });
    
    $('.menu li').hover(function(){
        $(this).find('.sub-menu').slideDown('slow');
        },function(){
        $(this).find('.sub-menu').slideUp('slow');
    });
    
    $(".scroll").click(function(event){ event.preventDefault(); $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500); });
    
	var current = 0;
	var count = $('.movie li').size()-1;
	
	$('.screen-list li').click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");
		
		current = $(this).index();
		var index = $(this).index();
		var pos = 1200 * index;
		var bar = 400 * index;
		
		$('.movie').animate({left:-pos},300);
		$('.bar').animate({left:bar},300);
	});
	
	$('.control a').click(function(){
		var check = $(this).hasClass('pr');
        
		if(check ==true){
			current -=1;
		}
        else{
			current +=1;
		}
        
		if(current<0){
			current= count;
		}
        
		if(current>count){
			current=0;
		}
        
		$('.screen-list li').eq(current).click();
        
		return false;
	})
	
 $('.album li').click(function(){
        current = $(this).index();

        $('.album_cover').animate({top:'-450px'},500,'easeInQuart').animate({top:'180px'},500,'easeOutQuart');
        
        $('.cover_bg').animate({top:'-450px'},500,'easeInQuart');

        var coverImg = $(this).children().children().attr('src');
        var coverTitle = $(this).children().children().attr('alt');

        setTimeout(function(){
            $('.cover_img').attr('src', coverImg);
            $('.album_cover p').text(coverTitle);
        },500);
        
        $('.play_now p').text(coverTitle);
    return false;
            
    }); 
    
    var w = ($(window).width()/2)-($('.modal').width()/2);
    //윈도우 너비 반절-모달 너비 반절
    var h = ($(window).height()/2)-($('.modal').height()/2);
    //윈도우 높이 반절-모달 너비 반절
    $('.modal').css({
        left: w,
        top :h
    });
    //높이값, 너비값 화면상의 중간에 위치한다.
    
    $('#modalBG').fadeOut(0);
    //모달비지 페이드아웃0
    $('.pop a').click(function(){
        $('#modalBG').fadeIn(0);return(false);
    });
    //팝업존 a를 클릭하면 모달이 보여지고 bg가 보여져
    
    $('.modal a').click(function(){
        $('.modal').fadeOut(0);
        $('#modalBG').fadeOut(0);return(false);
    });
    
        $('.pop1 a').click(function(){
        $('.modal1').fadeIn(0);return(false);
    });
        $('.pop2 a').click(function(){
        $('.modal2').fadeIn(0);return(false);
    });
        $('.pop3 a').click(function(){
        $('.modal3').fadeIn(0);return(false);
    });
        $('.pop4 a').click(function(){
        $('.modal4').fadeIn(0);return(false);
    });
        $('.pop5 a').click(function(){
        $('.modal5').fadeIn(0);return(false);
    });
        $('.pop6 a').click(function(){
        $('.modal6').fadeIn(0);return(false);
    });
        $('.pop7 a').click(function(){
        $('.modal7').fadeIn(0);return(false);
    });
        $('.pop8 a').click(function(){
        $('.modal8').fadeIn(0);return(false);
    });
});