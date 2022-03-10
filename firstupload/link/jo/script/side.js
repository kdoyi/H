$(document).ready(function(){
        var currentPosition = parseInt($(".side-menu").css("top"));
        $(window).scroll(function() {
            var position = $(window).scrollTop();
            $(".side-menu").stop().animate({"top":position+currentPosition+"px"},1000);
        });
    });