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
});