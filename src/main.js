$(document).ready(function(){
  $('.featured div').click(function(){
    $('.featured div').removeClass("active");
    $(this).addClass("active");
  });
  $('.display-search').click(function(){
    if ($(this).hasClass('active')){
      $('.search-container').hide("slide", { direction: "right" }, 400);
      $('.search-box').slideUp(400);
      $(this).removeClass('active');
    } else {
      $('.search-box').slideDown(400);
      $('.search-container').show("slide", { direction: "left" }, 800);
      $(this).addClass('active');
    }

  });
});
