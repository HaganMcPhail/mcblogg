$(document).ready(function(){
  $('.featured div').click(function(){
    $('.featured div').removeClass("active");
    $(this).addClass("active");
  });
});
