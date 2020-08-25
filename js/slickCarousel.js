var slider = $(".slick-slider");  
// DOM Ready
$(function () {
  // Initialize
  slider.on("init", function (slick) {
    slick = $(slick.currentTarget);
  })
})

slider.slick({
  appendArrows: $(".slick-list"),
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 300,
  centerMode: true,
});