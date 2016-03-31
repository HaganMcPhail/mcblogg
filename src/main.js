$(document).ready(function(){

  // featured content selector
  $('.featured div').click(function(){
    $('.featured div').removeClass("active");
    $(this).addClass("active");
  });

  // search bar
  $('a[class^="display-"]').click(function(){
    var item = $(this).attr('item');
    if ($(this).hasClass('active')){
      $('.' + item + '-box').hide("slide", { direction: "up" }, 300);
      $(this).removeClass('active');
    } else {
      $('a[class^="display-"]').removeClass('active');
      $('section[class$="-box"]').hide("slide", { direction: "up" }, 300, function(){
        setTimeout(function(){
          $('.' + item + '-box').show("slide", { direction: "up" }, 300);
        }, 300);
      });
      $(this).addClass('active');
    }

  });
});
