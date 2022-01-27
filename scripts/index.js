$(".bi-arrow-up-square-fill").hide();

$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 50) {
        $(".bi-arrow-up-square-fill").fadeIn();
    }
    if (scroll_amount == 0) {
        $(".bi-arrow-up-square-fill").fadeOut();
    }
});

