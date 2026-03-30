//Fire Videos
var vid = document.getElementById("RIFVideo");
function playVid() {
  vid.play();
}
function pauseVid() {
  vid.pause();
}
$(document).ready(function () {
  $(".navbar").on("show.bs.collapse", function (e) {
    console.log("open")
    $(".navbar-dark").css("background-color", "rgb(0, 181, 32)");
  });
  $(".navbar").on("hide.bs.collapse", function (e) {
    console.log("close")
    $(".navbar-dark").css("background-color", "transparent");
  });
  $('a[href^="#"]').on('click', function (event) {
    var target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 95
      }, 1000);
    }
  });
  // collapse mobile nav on click
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.navbar-nav');
  var main_nav_height = $('.navbar').outerHeight();
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    nav_sections.each(function () {
      var top = $(this).offset().top - main_nav_height,
      bottom = top + $(this).outerHeight();
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
    });
  });
  // Header scroll class
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $('#vertical-nav').addClass('header-scrolled');
      $('.navbar').addClass('header-scrolled');
      $('.logo').addClass('header-scrolled');
      $('.navbar-toggler-icon').addClass('header-scrolled');
      $('.scrollup').addClass('header-scrolled');
    } else {
      $('#vertical-nav').removeClass('header-scrolled');
      $('.navbar').removeClass('header-scrolled');
      $('.logo').removeClass('header-scrolled');
      $('.navbar-toggler-icon').removeClass('header-scrolled');
      $('.scrollup').removeClass('header-scrolled');
    }
  });
  // init for wow.js v1.1.2
  new WOW().init();
  // init for owl.carousel.js
  $('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    center:true,
    URLhashListener:true,
    autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:1
      },
      1000:{
        items:3
      }
    }
  });
});
jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 991) {
      $('.popoverOption').popover({ trigger: "click" });
      $( ".content-item" ).attr( "data-placement", "bottom" );
      $( ".popover" ).attr( "x-placement", "bottom" );
    } else if (ww >= 991) {
      $('.popoverOption').popover({ trigger: "hover" });
      $( ".content-item" ).attr( "data-placement", "right");
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
// twitter share
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
  t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));