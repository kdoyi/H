$(document).ready(function(){
    $(".board > li >a").click(function(){
        $(this).parent().addClass("on").siblings().removeClass("on");
        return false;
    });
});