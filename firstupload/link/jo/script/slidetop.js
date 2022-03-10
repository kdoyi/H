$(document).ready(function(){
    $('#notice li').first().appendTo('#notice ul');
    $('#notice ul').css('top',+50);
    
setInterval(function(){
    $('#notice ul').animate({top:'+='+300},'slow',function(){
    $('#notice li').last().prependTo('#notice ul');
    $('#notice ul').css('top',+50);});
},3000);
});