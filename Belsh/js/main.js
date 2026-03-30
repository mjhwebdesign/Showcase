$(document).ready(function () {
 $(".nav-lat-item").click(function () {
  $("a.active").removeClass("active");
  $(this).addClass("active");
  var active_section = $(this).attr("href"); //get active section id
  $("html, body").animate(
   {
    //and scroll to the section
    scrollTop: $(active_section).offset().top,
   },
   1000,
  );
 });

 $(window)
  .scroll(function () {
   var windscroll = $(window).scrollTop();
   if (windscroll >= 300) {
    $(".nav-lat ").addClass("move-up");
   } else {
    $(".nav-lat ").removeClass("move-up");
   }
   if (windscroll >= 1) {
    $(".section").each(function (i) {
     if ($(this).position().top <= windscroll) {
      $(".nav-lat a.active").removeClass("active");
      $(".nav-lat a").eq(i).addClass("active");
     }
    });
   } else {
    $(".nav-lat a.active").removeClass("active");
    $(".nav-lat a:first").addClass("active");
   }
  })
  .scroll();

 const year = document.getElementById("year");
 if (year) {
  year.textContent = new Date().getFullYear();
 }
});
