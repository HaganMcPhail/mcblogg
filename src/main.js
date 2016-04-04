$(document).ready(function(){

  var closeOpenSection = function(){
    var item = $('a.active').attr('item');
    var icon = $('a.active').find('i').attr('icon');
    $('a.active').find('i').attr('class', icon);
    removeActiveLinks();
    $('.' + item + '-box').hide("slide", { direction: "right" }, 300);
    removeActiveSection();
    $('body').css('overflow', 'visible');
  }

  var removeActiveLinks = function (){
    $('a[class^="display-"]').removeClass('active');
  }

  var removeActiveSection = function (activeSection){
    $('section.active').removeClass('active');
  }

  var hideActiveSection = function (item, el){
    var activeSection = $('section.active');
    if (activeSection.length > 0) {
      $(activeSection).hide("slide", { direction: "right" }, 300, function(){
        $('.' + item + '-box').show("slide", { direction: "up" }, 300);
      });
      resetIcon(el);
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

  var resetIcon = function(el){
    var icon = $(el).find('i').attr('icon');
    $(el).find('i').attr('class', icon);
  }

  var setFocus = function(){
    setTimeout(function(){
      $('section.active input').first().focus();
    }, 0);
  }

  var month = "";
  var year = "";

  // menu bar interaction
  $('a[class^="display-"]').on("click", function(){
    var item = $(this).attr('item');
    if ($(this).hasClass('active')){
      $('.' + item + '-box').hide("slide", { direction: "right" }, 300);
      $(this).removeClass('active');
      //resetIcon($(this));
      setFocus();
      $('body').css('overflow', 'visible');
    } else {
      //$(this).find('i').attr('class', 'fa fa-close');
      removeActiveLinks();
      hideActiveSection(item, $(this));
      removeActiveSection();
      $(this).addClass('active');
      $('.' + item + '-box').addClass('active');
      setFocus();
      $('.xs-menu').hide("slide", { direction: "left" }, 300);
      $('.menu-button-container').removeClass('active');
      $('.menu-button-container').find('i').attr('class', 'fa fa-bars');
      $('body').css('overflow', 'hidden');
    }
  });

  $('.years a').click(function(e){
    e.preventDefault();
    console.log('flip');
    year = $(this).attr('year');
    $('.panel').addClass('flip');
  });

  $('.months a').click(function(e){
    e.preventDefault();
    month = $(this).attr('month');
    removeActiveLinks();
    $('.archive-box').hide("slide", { direction: "right" }, 300, function(){
      $('.panel').removeClass('flip');
      $('body').css('overflow', 'visible');
    });
    removeActiveSection($('section.active'));
    $('.featured-toggle').hide();
    $('.bread-crumb').html(year + " / " + month);
    $('.archive-header').show();
    $('.xs-menu').hide("slide", { direction: "right" }, 300);
    $('.menu-button-container').removeClass('active');
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

  $('div[class$="-icon"]').on("click", function(){
    closeOpenSection();
  });

  $('input').keyup(function(event){
    if(event.keyCode == 13){
        closeOpenSection();
    }
  });

  $('.menu-button-container').on("click", function(){
    if ($(this).hasClass('active')){
      $('.xs-menu').hide("slide", { direction: "left" }, 300);
      $('.menu-button-container').find('i').attr('class', 'fa fa-bars');
      $(this).removeClass('active');
    } else {
      $('.xs-menu').show("slide", { direction: "right" }, 300);
      $('.menu-button-container').find('i').attr('class', 'fa fa-close');
      $(this).addClass('active');
    }
  });

  $('.logo').on("click", function(e){
    e.preventDefault();
    $('.archive-header').hide();
    $('.featured-toggle').show();
    loadPosts();
  });

  $('.return-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  loadPosts();
  $('footer').show();
});
