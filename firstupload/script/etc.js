$(function(){
    //etc
    $('.etc > ul > li').click(function(e){
        e.preventDefault();
        $(this).find('.modal_etc').show();
    });

    $('.modal_etc').click(function(e){
        e.preventDefault();
        $('.modal_etc').fadeOut();
    });
})