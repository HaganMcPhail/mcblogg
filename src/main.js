$(document).ready(function(){

  var removeActiveLinks = function (){
    $('a[class^="display-"]').removeClass('active');
  }

  var removeActiveSection = function (activeSection){
    $(activeSection).removeClass('active');
  }

  var hideActiveSection = function (item, activeSection){
    if (activeSection.length > 0) {
      $(activeSection).hide("slide", { direction: "right" }, 300, function(){
        $('.' + item + '-box').show("slide", { direction: "up" }, 300);
      });
    } else {
      $('.' + item + '-box').show("slide", { direction: "up" }, 300);
    }
  }

  var loadPosts =  function() {
    $(".blog-preview").hide();
    $(".blog-preview").each(function(index) {
      $(this).delay(100*index).fadeIn(300);
    });
  }

  // menu bar interaction
  $('a[class^="display-"]').on("click", function(){
    var item = $(this).attr('item');
    if ($(this).hasClass('active')){
      $('.' + item + '-box').hide("slide", { direction: "right" }, 300);
      $(this).removeClass('active');
      $('body').css('overflow', 'visible');
    } else {
      var activeSection = $('section.active');
      removeActiveLinks();
      hideActiveSection(item, activeSection);
      removeActiveSection(activeSection);
      $(this).addClass('active');
      $('.' + item + '-box').addClass('active');
      $('body').css('overflow', 'hidden');
    }
  });

  $('.years a').click(function(){
    $('.months').show();
    $('.years').hide();
  });

  $('.months a').click(function(){
    removeActiveLinks();
    $('.archive-box').hide("slide", { direction: "right" }, 300, function(){
      $('.months').hide();
      $('.years').show();
      $('body').css('overflow', 'visible');
    });
    removeActiveSection($('section.active'));
    $('.featured-toggle').hide();
    $('.archive-header').show();
    loadPosts();
  });

  $('.featured div').click(function(){
    $('.featured div').removeClass("active");
    $(this).addClass("active");
    loadPosts();
  });

  loadPosts();
  $('footer').show();
});
