$(document).ready(function(){
    $('.menu>li').mouseover(function(){
        $('#sub-bg').slideDown();
    });
    
    $('#sub-menu').mouseleave(function(){
        $('#sub-bg').slideUp();
    });
	
});