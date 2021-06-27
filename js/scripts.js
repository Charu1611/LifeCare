// counter up
$(".counter").counterUp({
  delay: 10,
  time: 2000,
});
$(".counter").addClass("animated fadeInDownBig");
$("h3").addClass("animated fadeIn");
$(document).ready(function () {
  $('.owl-carousel1').owlCarousel({
      navigation: true,
      loop: true,
      dots: true,
      items: 8,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      margin: 10,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
     ],
      responsiveClass: true,
      responsive: {
          0: {
              items: 1,
              nav: true
          },
          600: {
              items: 1,
              nav: false
          },
          1000: {
              items: 1,
              nav: true,
              loop: true
          }
      }
  })
  AOS.init({duration:2000});

});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}



$(document).ready(function() {
  $("#news-slider").owlCarousel({
      items : 3,
      itemsDesktop:[1199,3],
      itemsDesktopSmall:[980,2],
      itemsMobile : [600,1],
      navigation:true,
      navigationText:["",""],
      pagination:true,
      loop: true,
      autoplay:true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
  });
});