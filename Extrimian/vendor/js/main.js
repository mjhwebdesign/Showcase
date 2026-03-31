jQuery(document).ready(function ($) {
 var hash = window.location.hash;
 if (hash == "" || hash == "#" || hash == undefined) return false;
 var target = $(hash);
 headerHeight = 75;
 target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
 if (target.length) {
  $("html,body")
   .stop()
   .animate(
    {
     scrollTop: target.offset().top - 110, //offsets for fixed header
    },
    "linear",
   );
 }
});
//reveal lead in homepage
$(".connection").hover(
 function () {
  $(".generic-lead").addClass("d-none");
  $(".light-grey-one").addClass("extrimian-grey-bg");
  $(".connection-lead").addClass("d-block");
  $(".governance,.fullmanage,.marketplace").addClass("half-opacity");
 },
 function () {
  $(".generic-lead").removeClass("d-none");
  $(".light-grey-one").removeClass("extrimian-grey-bg");
  $(".connection-lead").removeClass("d-block");
  $(".governance,.fullmanage,.marketplace").removeClass("half-opacity");
 },
);
$(".governance").hover(
 function () {
  $(".generic-lead").addClass("d-none");
  $(".light-grey-one").addClass("extrimian-grey-bg");
  $(".governance-lead").addClass("d-block");
  $(".connection,.fullmanage,.marketplace").addClass("half-opacity");
 },
 function () {
  $(".generic-lead").removeClass("d-none");
  $(".light-grey-one").removeClass("extrimian-grey-bg");
  $(".governance-lead").removeClass("d-block");
  $(".connection,.fullmanage,.marketplace").removeClass("half-opacity");
 },
);
$(".fullmanage").hover(
 function () {
  $(".generic-lead").addClass("d-none");
  $(".light-grey-one").addClass("extrimian-green-bg");
  $(".fullmanage-lead").addClass("d-block");
  $(".connection,.governance,.marketplace").addClass("half-opacity");
 },
 function () {
  $(".generic-lead").removeClass("d-none");
  $(".light-grey-one").removeClass("extrimian-green-bg");
  $(".fullmanage-lead").removeClass("d-block");
  $(".connection,.governance,.marketplace").removeClass("half-opacity");
 },
);
$(".marketplace").hover(
 function () {
  $(".generic-lead").addClass("d-none");
  $(".light-grey-one").addClass("extrimian-green-bg");
  $(".marketplace-lead").addClass("d-block");
  $(".connection,.governance,.fullmanage").addClass("half-opacity");
 },
 function () {
  $(".generic-lead").removeClass("d-none");
  $(".light-grey-one").removeClass("extrimian-green-bg");
  $(".marketplace-lead").removeClass("d-block");
  $(".connection,.governance,.fullmanage").removeClass("half-opacity");
 },
);
//Deploy platform card thr url hash
if (location.hash && location.hash === "#connect") {
 $("#connect").addClass("active");
 $("#connect .collapse").addClass("show");
 $("#connect .open-close").text(function (i, text) {
  return text === "read more" ? "Close" : "read more";
 });
} else if (location.hash && location.hash === "#accelerate") {
 $("#accelerate").addClass("active");
 $("#accelerate .collapse").addClass("show");
 $("#accelerate .open-close").text(function (i, text) {
  return text === "read more" ? "Close" : "read more";
 });
} else if (location.hash && location.hash === "#govern") {
 $("#govern").addClass("active");
 $("#govern .collapse").addClass("show");
 $("#govern .open-close").text(function (i, text) {
  return text === "read more" ? "Close" : "read more";
 });
} else if (location.hash && location.hash === "#relax") {
 $("#relax").addClass("active");
 $("#relax .collapse").addClass("show");
 $("#relax .open-close").text(function (i, text) {
  return text === "read more" ? "Close" : "read more";
 });
}
//select active card
$(function () {
 $("#connect .btn").click(function () {
  $("#connect").toggleClass("active");
  $("#govern, #relax, #accelerate").removeClass("active");
  $("#connect .open-close").text(function (i, text) {
   return text === "read more" ? "Close" : "read more";
  });
  $("#govern .open-close, #accelerate .open-close, #relax .open-close").text(
   "read more",
  );
 });
 $("#govern .btn").click(function () {
  $("#govern").toggleClass("active");
  $("#connect, #relax, #accelerate").removeClass("active");
  $("#govern .open-close").text(function (i, text) {
   return text === "read more" ? "Close" : "read more";
  });
  $("#connect .open-close, #accelerate .open-close, #relax .open-close").text(
   "read more",
  );
 });
 $("#relax .btn").click(function () {
  $("#relax").toggleClass("active");
  $("#govern, #connect, #accelerate").removeClass("active");
  $("#relax .open-close").text(function (i, text) {
   return text === "read more" ? "Close" : "read more";
  });
  $("#govern .open-close, #accelerate .open-close, #connect .open-close").text(
   "read more",
  );
 });
 $("#accelerate .btn").click(function () {
  $("#accelerate").toggleClass("active");
  $("#govern, #relax, #connect").removeClass("active");
  $("#accelerate .open-close").text(function (i, text) {
   return text === "read more" ? "Close" : "read more";
  });
  $("#govern .open-close, #connect .open-close, #relax .open-close").text(
   "read more",
  );
 });
});

const year = document.getElementById("year");
if (year) {
 year.textContent = new Date().getFullYear();
}
