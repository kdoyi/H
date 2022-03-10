$('.openbutton').click(function(){
   $('.tt h2').removeClass("open");
   $('.m_notice').slideToggle();
    /* 열려져있는 모든애들 초기화(제모,그림,글씨)*/
});

$('.tt').click(function(){   /*tt는  li임, li가 부모고 (img,h2,p)는 자식들(img,h2,p ->서로 형제)*/
   
    var me = $(this).children('h2')  /*this는 li고, 그자식들 중 h2가 나야(me)*/
    var bros = $(this).siblings().children('h2'); /*나를 제외한 tt(li)의 형제들의 자식들중 h2*/
   
    
    me.addClass('open');
    bros.removeClass('open');
    
    me.next().slideDown();
    bros.next().slideUp(); 
    
    me.prev().fadeIn(200);
    bros.prev().fadeOut(200);
    
});