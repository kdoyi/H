var current = 0;

$('.step2_box > div > a').click(function(){
    var src = $(this).children().attr("src");
    $('#page02').css("background-image","url("+src+")");
    
    return false;
});