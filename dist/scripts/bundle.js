(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
