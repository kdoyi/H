$(document).ready(function(){
    $('#notice li').first().appendTo('#notice ul');
    $('#notice ul').css('top',+50);
    
setInterval(function(){
    $('#notice ul').animate({top:'+='+30},'slow',function(){
    $('#notice li').last().prependTo('#notice ul');
    $('#notice ul').css('top',+50);});
},3000);
    
    
    var num = 0;
    var nowitem = $('#slide li')
    
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
    },3000);
    
    
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
    },3000);
    
});