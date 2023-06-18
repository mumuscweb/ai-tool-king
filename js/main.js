var button = $(".to-top");
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        button.show()
    } else {
        button.hide()
    };
});

button.click(function () {
    $('html , body').animate({ scrollTop: 0 }, 500)
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
    delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });