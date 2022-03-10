$(document).ready(function(){
    var w = ($(window).width()/2)-($('.modal').width()/2);
    var h = ($(window).height()/2)-($('.modal').height()/2);
    
    $('.modal').css({
        left : w,
        top : h
    });
    
    $('.btn').click(function(){
    $('.modal1').fadeIn(0);
    });
    
    $('.modal a').click(function(){
    $('.modal').fadeOut(0);
    });
});