(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
