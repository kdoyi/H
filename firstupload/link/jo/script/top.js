$(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('.top').fadeIn();
            } else {
                $('.top').fadeOut();
            }
        });
        
        $(".top").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
});