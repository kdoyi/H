CountDownTimer('07/27/2020 09:00 AM');

function CountDownTimer(dt){
    var end = new Date(dt);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();

        var distance = end - now;

        if (distance < 0) {

            clearInterval(timer);

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        var strDays = days.toString();
        var strHours = hours.toString();
        var strMin = minutes.toString();
        var strSec = seconds.toString();

        if( strDays < 10 ){
            $('.day_10').text('0');
            $('.day_1').text(strDays.substring(0, 1));
        }else{
            $('.day_10').text(strDays.substring(0, 1));
            $('.day_1').text(strDays.substring(1, 2));
        }

        if( strHours < 10 ){
            $('.hour_10').text('0');
            $('.hour_1').text(strHours.substring(0, 1));
        }else{
            $('.hour_10').text(strHours.substring(0, 1));
            $('.hour_1').text(strHours.substring(1, 2));
        }

        if( strMin < 10 ){
            $('.min_10').text('0');
            $('.min_1').text(strMin.substring(0, 1));
        }else{
            $('.min_10').text(strMin.substring(0, 1));
            $('.min_1').text(strMin.substring(1, 2));
        }
    }

    showRemaining();
    timer = setInterval(showRemaining, 1000);
}

$(document).ready(function(){
    var num = 0;
    var nowitem = $('.wrap .slide #slide1 ul li')
    
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

$(document).ready(function(){
    var num = 0;
    var nowitem = $('.wrap .slide #slide2 ul li')
    
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