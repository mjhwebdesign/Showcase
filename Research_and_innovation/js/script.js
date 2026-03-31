//add sticky nav on scroll
$(window).scroll(function () {
 if ($(this).scrollTop() >= 50) {
  $("nav").addClass("sticky");
 } else {
  $("nav").removeClass("sticky");
 }
});
// here and now assign image to each post and change image background on hover
function myFunction(featimage) {
 var i = 1;
 $(".here_item").each(function () {
  //$(this).addClass('here_item-'+ i);
  $(this).attr("id", "post_" + i);
  $("#here_item-featured-image").append(
   "<div class='here_item-image here_item-image-" + i + "'></div>",
  );
  $(".here_item-image-" + i).css(
   "background-image",
   "url('img/here_and_now/here_item-featured-image-" + i + ".jpg')",
  );
  $(".here_item-image-" + i).addClass("is-invisible");
  i++;
 });
}
var featimage = window.matchMedia("(min-width: 991px)");
myFunction(featimage); // Call listener function at run time
featimage.addListener(myFunction); // Attach listener function on state changes
$(".here_item").mouseover(function () {
 var id = this.id;
 var split_id = id.split("_");
 var featimg = "here_item-image-" + split_id[1];
 // Checking class using hasClass
 if ($("." + featimg).hasClass("is-invisible")) {
  // Switch class from post-unread to post-read
  $("." + featimg).switchClass("is-invisible", "is-visible");
  $(".here_item-image-default").switchClass("is-visible", "is-invisible");
 }
});
$(".here_item").mouseout(function () {
 var id = this.id;
 var split_id = id.split("_");
 var featimg = "here_item-image-" + split_id[1];
 // Checking class using hasClass
 if ($("." + featimg).hasClass("is-visible")) {
  // Switch class from post-unread to post-read
  $("." + featimg).switchClass("is-visible", "is-invisible");
  $(".here_item-image-default").switchClass("is-invisible", "is-visible");
 }
});
// findings
//findings accordion
function toggle_visibility(id) {
 var e = document.getElementById(id);
 var myClasses = document.querySelectorAll(".findings_collapse"),
  i = 0,
  l = myClasses.length;
 for (i; i < l; i++) {
  myClasses[i].style.maxHeight = "0px";
  myClasses[i].style.opacity = "0";
 }
 if (e.style.maxHeight == "0px") e.style.maxHeight = "100%";
 if (e.style.opacity == "0") e.style.opacity = "1";
}
// active findings sub menu
$(".sub-nav-findings").click(function () {
 $(this).addClass("select").siblings().removeClass("select");
});

/*======================================================================
// GET YEAR FOR COPYRIGHT FOOTER
======================================================================*/
const year = document.getElementById("year");
if (year) {
 year.textContent = new Date().getFullYear();
}
