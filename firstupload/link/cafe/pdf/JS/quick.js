$(function(){
    $('.slide').click(function(){
        $('.quick').slideToggle();
        $(this).toggleClass('slideup');
    });
});