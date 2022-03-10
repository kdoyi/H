
$(document).ready(function() {
  $('.left').click(function(event) {
    $('.insta_img_list').animate({left:0}, 1500);
    return false;
  });
  $('.right').click(function(event) {
    $('.insta_img_list').animate({left:-900}, 1500);
    return false;
  });

    
    
});



