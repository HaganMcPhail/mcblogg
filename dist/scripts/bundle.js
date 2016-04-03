(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
      $('body').css('overflow', 'hidden');
    }
  });

  $('.years a').click(function(){
    year = $(this).attr('year');
    $('.months').show();
    $('.years').hide();
  });

  $('.months a').click(function(){
    month = $(this).attr('month');
    removeActiveLinks();
    $('.archive-box').hide("slide", { direction: "right" }, 300, function(){
      $('.months').hide();
      $('.years').show();
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

  $('input').keyup(function(event){
    if(event.keyCode == 13){
        closeOpenSection();
    }
  });

  $('.menu-button-container').on("click", function(){
    if ($(this).hasClass('active')){
      $('.xs-menu').hide("slide", { direction: "left" }, 300);
      $(this).removeClass('active');
    } else {
      $('.xs-menu').show("slide", { direction: "right" }, 300);
      $(this).addClass('active');
    }
  });

  $('.logo').on("click", function(){
    $('.archive-header').hide();
    $('.featured-toggle').show();
    loadPosts();
  });

  loadPosts();
  $('footer').show();
});

},{}]},{},[1]);
