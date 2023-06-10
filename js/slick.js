$(document).ready(function () {
  $(".reviews__boxes").slick({
    slidersToShow: 1,
    slidersToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 700,
        settongs: {
          slidersToShow: 2,
          slidersToScroll: 1,
        },
      },
    ],
  });
});
