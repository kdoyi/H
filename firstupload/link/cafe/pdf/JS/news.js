$(document).ready(function(){

   var current = 0;
   var count = $('.news_list li').size()-1;

   $('.list li').click(function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      
      current = $(this).index();
//   몇번째를 클릭했는지 알게해주는 인덱스, 이것을 커런트에 집어넣어줘
      var index = $(this).index();
      var pos = 600 * index;
      //몇번째있는 그림을 찾기위해 곱하기 인덱스
      
      $('.news_list').animate({left:-pos},400);
      //무비는 큰덩어리에서 왼쪽으로 -이동해서 보여주고
});

    $('.controls a').click(function(){
       var check = $(this).hasClass('prev');
        
        if(check==true){
            current -=1;
        }else{
            current+=1;
        }
        if(current<0){
            current =count;
        }
        if(current>count){
            current = 0;
        }
        
                
        $('.list li').eq(current).click();
        
    });
   
   
   });
