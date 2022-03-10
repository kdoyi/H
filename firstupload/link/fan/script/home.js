$(document).ready(function(){
    $('#slide li').last().prependTo('#slide ul');
    $('#slide ul').css('left',-0);
    
setInterval(function(){
    $('#slide ul').animate({left:'-='+1400},'slow',function(){
    $('#slide li').first().appendTo('#slide ul');
    $('#slide ul').css('left',0);});
},3000);
    
    $('.board > li > a').click(function(){
        $(this).parent().addClass('on').siblings().removeClass('on');
        return false;
    });
    
    var w = ($(window).width()/2)-($('.modal').width()/2);
    var h = ($(window).height()/2)-($('.modal').height()/2);
    
     $('.modal').css({
        left: w,
        top: h
    });
    
    $('.bt').click(function(){
        $('.modal').fadeIn(0);
        return false;
    });
    
    $('.modal a').click(function(){
        $('.modal').fadeOut(0);
        return false;
    });
    
    $('.list li').click(function(){
        $('.list>li>img').removeClass("big",400);
        $(this).children().toggleClass("big",400,'easeOutElastic');
        
    });
    
    var current = 0;
    var count = $('.photo li').size()-1;
    
    $('.list li').click(function(){
        $(this).addClass('move');
        $(this).siblings().removeClass('move');
        
        current = $(this).index();
        
        var index = $(this).index();
        var pos = 400 * index;
        var bar = 100 * index;
        
        $('.photo').animate({left:-pos},400);
        $('.bar').animate({left:bar},400);
        return false;
    });
    
    $('.control a').click(function(){
        var check = $(this).hasClass('prev');
        
        if(check ==true){
            current -=1;
        }
        else{
            current +=1;
        }
        
        if(current<0){
            current = count;
        }
        
        if(current>count){
            current = 0;
        }
        
        $('.list li').eq(current).click();
        
        return false;
    });
    
    
});