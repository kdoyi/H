var current =0;
var count = $('.team li').size()-1;

/*모든초밥에게 적용해야할 것(반복해서 적용해야 할 것 그래서 each라는 애를 씀)*/

$('.team li').each(function(index){ /*인덱스는 해당번호/리스트 안에 잇는 애들한테 적용을 해주는데 반복해서 모든 과정을 해준다*/
    $('.chobab-name').css("opacity",0); /*(이름 숨겨놓음)*/
    $(this).delay(200*index).addClass("show",2000);/*(첫번째애는 0, 그다음애는 200, 그다음에는 400..그래서 순차적으로 딜레이되게->show하면 자기자리 찾아서 감 )*/
    
    $(this).hover(function(){
       var name = $(this).children().attr("title");
        /*(li자식들의 타이틀을 name에 넣어/기억시킴)*/
        $('.chobab-name').text(name);
        
        var index = $(this).index(); /*(자기 순서를 인덱스에 기억시킴)*/
        var pos = $(this).position();/*(현재있는 위치를 포스에 기억시킴)*/
        
        $('.chobab-name').stop().animate({left:pos.left},400);
        $('.chobab-name').css("opacity",1);
        $(this).addClass("up",400);
    },function(){
        $(this).removeClass("up",400);
        $('.chobab-name').css("opacity",0)

    });
});


$('.team').stop().animate({left:current},function(){
    var chobableftPos = $(this).position().left; 
    var chobabEndPos = $(window).width()-$('.team').width();
    
    if(chobableftPos>0){
        current = 0;
        $(this).stop().animate({left:0});
    }
    
    if(chobableftPos<chobabEndPos){
        current = chobabEndPos;
        $(this).stop().animate({left:chobabEndPos});
    }
    });

});