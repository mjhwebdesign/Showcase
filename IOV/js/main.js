// JavaScript Document

// Preloader

$(document).ready(function () {
 $(".preloader").delay(2000).fadeOut("slow");
});

// animate titles

(function ($) {
 $.fn.visible = function (partial) {
  var $t = $(this),
   $w = $(window),
   viewTop = $w.scrollTop(),
   viewBottom = viewTop + $w.height(),
   _top = $t.offset().top,
   _bottom = _top + $t.height(),
   compareTop = partial === true ? _bottom : _top,
   compareBottom = partial === true ? _top : _bottom;

  return compareBottom <= viewBottom && compareTop >= viewTop;
 };
})(jQuery);

$(window).scroll(function (event) {
 $(".page_subtitle").each(function (i, el) {
  var el = $(el);
  if (el.visible(true)) {
   el.addClass("inview");
  } else {
   el.removeClass("inview");
  }
 });
});

//Fire Videos

var vid = document.getElementById("IOVVideo");

function playVid() {
 vid.play();
}

function pauseVid() {
 vid.pause();
}

//Home page slider
$(document).ready(function () {
 $("#home_slide").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  animateOut: "fadeOut",
  autoplayHoverPause: true,
 });
});

//Ecosystem slider
$(document).ready(function () {
 $("#ecosystem_slide").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  dots: true,
  autoplay: true,
  autoplayTimeout: 8000,
  animateOut: "fadeOut",
  autoplayHoverPause: true,
 });
});

//Careers slider
$(document).ready(function () {
 $("#careers_slide").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  dots: true,
  autoplay: true,
  autoplayTimeout: 8000,
  autoplayHoverPause: true,
 });
});

//Team slider
$(document).ready(function () {
 $("#team_slide").owlCarousel({
  items: 5,
  loop: true,
  margin: 15,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
   // breakpoint from 0 up
   0: {
    items: 1,
    nav: false,
   },
   // breakpoint from 576 up
   576: {
    items: 2,
    nav: true,
   },
   // breakpoint from 768 up
   768: {
    items: 3,
    nav: true,
   },
   // breakpoint from 992 up
   992: {
    items: 4,
    nav: true,
   },
   // breakpoint from 1200 up
   1200: {
    items: 5,
    nav: true,
   },
  },
 });
});

//Advisors slider
$(document).ready(function () {
 $("#advisors_slide").owlCarousel({
  items: 5,
  loop: true,
  margin: 15,
  nav: true,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
   // breakpoint from 0 up
   0: {
    items: 1,
    nav: false,
   },
   // breakpoint from 576 up
   576: {
    items: 2,
    nav: true,
   },
   // breakpoint from 768 up
   768: {
    items: 3,
    nav: true,
   },
   // breakpoint from 992 up
   992: {
    items: 4,
    nav: true,
   },
   // breakpoint from 1200 up
   1200: {
    items: 5,
    nav: true,
   },
  },
 });
});

jQuery(document).ready(function ($) {
 // Hide Header on on scroll down
 var didScroll;
 var lastScrollTop = 0;
 var delta = 5;
 var navbarHeight = 200;

 $(window).scroll(function (event) {
  didScroll = true;
 });

 setInterval(function () {
  if (didScroll) {
   hasScrolled();
   didScroll = false;
  }
 }, 350);

 function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
   // Scroll Down
   $(".navbar").addClass("navbar_on_scroll");
  } else {
   // Scroll Up
   if (st + $(window).height() < $(document).height()) {
    $(".navbar").removeClass("navbar_on_scroll");
   }
  }

  lastScrollTop = st;
 }
});

// actions on scroll
jQuery(document).ready(function ($) {
 $(window).scroll(function () {
  var $win = $(window);
  var winH = $win.height();
  var scroll = $(window).scrollTop();
  //>=, not <=

  if (scroll >= 350) {
   $(".navbar").addClass("changenavpad"); //anim seed logo when nav has no scroll
  } else if (scroll < 350) {
   $(".navbar").removeClass("changenavpad"); //anim seed logo when nav has no scroll
  }

  if (scroll >= 200) {
   $(".has_scroll").addClass("revealonscroll"); //anim vertical nav when page has scroll
   $(".scroll_button").addClass("hideonscroll"); //anim scroll button when page has scroll
   $(".scroll_button_full_height").addClass("hideonscroll"); //anim scroll button when page has scroll
   $(".logo_seed_inner_scroll ").addClass("reveal"); //anim seed logo when nav has full height scroll
   $(".logo_seed_inner").addClass("animated"); //anim seed logo when nav has no scroll
   $(".logoinner").addClass("hidelogo"); //anim seed logo when nav has no scroll
   $(".logo_seed_inner_scroll ").addClass("reveal"); //anim seed logo when nav has full height scroll
   $(".logo_seed_inner").addClass("animated"); //anim seed logo when nav has no scroll
   //$(".navbar").addClass("changenavpad"); //anim seed logo when nav has no scroll
   $(".navbar-brand").addClass("changeheight"); //anim seed logo when nav has no scroll
   $(".nav-link").addClass("changecolor"); //anim seed logo when nav has no scroll
  } else if (scroll < 200) {
   $(".has_scroll").removeClass("revealonscroll"); //anim vertical nav when page has scroll
   $(".scroll_button").removeClass("hideonscroll"); //anim scroll button when page has scroll
   $(".scroll_button_full_height").removeClass("hideonscroll"); //anim scroll button when page has full height scroll
   $(".logo_seed_inner_scroll ").removeClass("reveal"); //anim seed logo when nav has scroll
   $(".logo_seed_inner").removeClass("animated"); //anim seed logo when nav has no scroll
   $(".navbar").removeClass("nav-down"); //anim seed logo when nav has no scroll
   $(".logoinner").removeClass("hidelogo"); //anim seed logo when nav has no scroll
   $(".logo_seed_inner_scroll ").removeClass("reveal"); //anim seed logo when nav has scroll
   $(".logo_seed_inner").removeClass("animated"); //anim seed logo when nav has no scroll
   // $(".navbar").removeClass("changenavpad"); //anim seed logo when nav has no scroll
   $(".navbar-brand").removeClass("changeheight"); //anim seed logo when nav has no scroll
   $(".nav-link").removeClass("changecolor"); //anim seed logo when nav has no scroll
  }
 }); //missing );
 $(".lineafter").addClass("inview");
});

//add class based on widows width

jQuery(document).ready(function ($) {
 var alterClass = function () {
  var ww = document.body.clientWidth;
  if (ww < 992) {
   $(".logo_seed_inner").addClass("forceshowlogo");
   $(".logoinner").addClass("forceshowlogo");
  } else if (ww >= 992) {
   $(".logo_seed_inner").removeClass("forceshowlogo");
   $(".logoinner").removeClass("forceshowlogo");
  }
 };
 $(window).resize(function () {
  alterClass();
 });
 //Fire it when the page first loads:
 alterClass();
});

// click on scroll button
jQuery(document).ready(function ($) {
 $(".scroll_button").click(function (event) {
  event.preventDefault();
  var x = $(this).offset().top;
  $("html,body").animate({ scrollTop: x - 70 }, 1000);
 });
});

// click on scroll full height button
function scrollDown() {
 var vheight = $(window).height();
 $("html, body").animate(
  {
   scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight,
  },
  500,
 );
}

// Click to Scroll DOWN Functions
$(".scroll_button_full_height").click(function (event) {
 scrollDown();
 event.preventDefault();
});

// init wow js for scroll animation with animate.css
$(document).ready(function () {
 new WOW().init();
});
