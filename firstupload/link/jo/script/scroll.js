$(document).ready(function(){
    $(window).scroll(function(){
        $('.adtext').each(function(i){
            var bt_of_el = $(this).offset().top + $(this).outerHeight();
            var bt_of_win = $(window).scrollTop() + $(window).height();
            
            if(bt_of_win > bt_of_el){
                $(this).animate({'opacity':'1','margin-right':'0px'},1000);
            }
        });
    });
    
    $(window).scroll(function(){
        $('#pick').each(function(i){
            var bt_of_el = $(this).offset().top + $(this).outerHeight();
            var bt_of_win = $(window).scrollTop() + $(window).height();
            
            if(bt_of_win > bt_of_el){
                $(this).animate({'opacity':'1','margin-right':'0'},1000);
            }
        });
    });
    
    
    $(window).scroll(function(){
        $('#adposter').each(function(i){
            var bt_of_el = $(this).offset().top + $(this).outerHeight();
            var bt_of_win = $(window).scrollTop() + $(window).height();
            
            if(bt_of_win > bt_of_el){
                $(this).animate({'opacity':'1','margin-left':'0'},700);
            }
        });
    });
    
    var currentPosition = parseInt($(".side-menu").css("top"));
        $(window).scroll(function() {
            var position = $(window).scrollTop();
            $(".side-menu").stop().animate({"top":position+currentPosition+"px"},1000);
        });
});