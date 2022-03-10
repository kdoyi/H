$(document).ready(function(){
    var num = 0;
    var nowitem = $('#poster li')
    
    nowitem.hide()
    nowitem.eq(num).fadeIn();
    
    setInterval(function(){
        nowitem.eq(num).hide();
        
        if(num==2){
            num = 0;
            nowitem.eq(num).fadeIn();
        }
        
        else{
            num++;
            nowitem.eq(num).fadeIn();
        }
    },2500);
})