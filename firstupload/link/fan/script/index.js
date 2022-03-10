$(document).ready(function(){
    var num = 0;
    $('#slide li').eq(num).fadeIn('slow');
    
    setInterval(function(){
        $('#slide li').eq(num).fadeOut('slow');
        
        if(num===3){
            num = 0;
            $('#slide li').eq(num).fadeIn('slow');
        }
        
        else{
            num++;
            $('#slide li').eq(num).fadeIn('slow');
        }
    },4000);
})