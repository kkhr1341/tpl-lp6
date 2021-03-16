

$(function () {
  $(window).scroll(function () {
    $(".js-scroll").each(function () {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 10) {
        $(this).addClass("js-scroll-in");
      }
    });
  });

  $(window).scroll(function () {
    $(".js-scroll-blur").each(function () {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + 10) {
        $(this).addClass("js-scroll-blur-in");
      }
    });
  });
  $(window).scroll(function () {
    $(".effect").each(function () {
      let imgPos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight / 5 + 50) {
        $(this).addClass("effect-in");
      }
    });
  });
});
$(function () {
  $(".js-scroll").each(function () {
    let imgPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 50) {
      $(this).addClass("js-scroll-in");
    }
  });
});
$(function () {
  $(".js-scroll-blur").each(function () {
    let imgPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + 50) {
      $(this).addClass("js-scroll-blur-in");
    }
  });
});
$(function () {
  $(".effect-in").each(function () {
    let imgPos = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight / 5 + 50) {
      $(this).addClass("effect-in");
    }
  });
});
