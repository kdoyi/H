$(document).ready(function(){
   $(window).scroll(function(){
        $('.garden').each(function(i){
            var bt_of_el = $(this).offset().top + $(this).outerHeight();
            var bt_of_win = $(window).scrollTop() + $(window).height();
            
            if(bt_of_win > bt_of_el){
                $(this).animate({'opacity':'1'},1000);
            }
        });
    });
});