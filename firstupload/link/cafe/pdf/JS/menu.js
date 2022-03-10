$(document).ready(function(){
    $('.menu>li').mouseenter(function(){
       $('#sub_menu').stop().slideDown('fast'); 
    });
    $('#sub_menu').mouseover(function(){
       $('#sub_menu').stop().slideDown('fast'); 
    });
    $('.menu>li, #sub_menu').mouseout(function(){
        $('#sub_menu').stop().slideUp('fast');
    });
});