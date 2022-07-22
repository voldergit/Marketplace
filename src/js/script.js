$(function () {
  if ($(".products__inner-box").length) {
    var mixer = mixitup(".products__inner-box");
  }

  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
  });
  $(".product-slider__inner").slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: "$",
    // grid: true,
  });

  $(".icon-th-list").on("click", function () {
    $(".cards-sort").addClass("list");
    $(".icon-th-list").addClass("active");
    $(".icon-th-large").removeClass("active");
  });
  $(".icon-th-large").on("click", function () {
    $(".cards-sort").removeClass("list");
    $(".icon-th-large").addClass("active");
    $(".icon-th-list").removeClass("active");
  });
});
