$(document).ready(function(){
    $('.menu>li').mouseover(function(){
        $('#sub-menu').slideDown();
    });
    
    $('#sub-menu').mouseleave(function(){
        $('#sub-menu').slideUp();
    });
});