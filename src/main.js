$(document).ready(function(){

  var closeOpenSection = function(){
    var item = $('a.active').attr('item');
    var icon = $('a.active').find('i').attr('icon');
    $('a.active').find('i').attr('class', icon);
    removeActiveLinks();
    var activeSection = $('section.active');
    $('.' + item + '-box').hide("slide", { direction: "right" }, 300);
    removeActiveSection(activeSection);
    $('body').css('overflow', 'visible');
  }

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
    var className = $(this).find('i').attr('class');
    $(this).find('i').attr('class', 'fa fa-close');
    var item = $(this).attr('item');
    if ($(this).hasClass('active')){
      $('.' + item + '-box').hide("slide", { direction: "right" }, 300);
      $(this).removeClass('active');
      var icon = $(this).find('i').attr('icon');
      $(this).find('i').attr('class', icon);
      $('body').css('overflow', 'visible');
    } else {
      setTimeout(function(){
        $('section.active').find('input').focus();
      }, 0);
      var icon = $('a.active').find('i').attr('icon');
      $('a.active').find('i').attr('class', icon);
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

  $('.close-section').on("click", function(){
    closeOpenSection();
  });

  $('input').keyup(function(event){
    if(event.keyCode == 13){
        closeOpenSection();
    }
});

  loadPosts();
  $('footer').show();
});
