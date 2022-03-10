$(function(){
    var $skillVar = $('.table li p span:nth-child(2)');
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $skillVar.addClass('skill_bar');
        } else{
            $skillVar.removeClass('skill_bar');
        }
    });
})