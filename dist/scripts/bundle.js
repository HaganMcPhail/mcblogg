(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
