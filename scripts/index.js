
//Hiding the scroll when up
$(".bi-arrow-up-square-fill").hide();

//Scrolling button activate
$(window).scroll(function () {
    var scroll_amount = $(window).scrollTop();
    if (scroll_amount > 50) {
        $(".bi-arrow-up-square-fill").fadeIn();
    }
    if (scroll_amount == 0) {
        $(".bi-arrow-up-square-fill").fadeOut();
    }
});

// Hover effecta
$('.hover_image').hover(function () {
    $(this).addClass('hover_style');
},
    function () {
        $(this).removeClass('hover_style');
    });


// Video aspect ratio maintainer
var j = 0;
const video_width = $(".comp_video").width()
comp_video_array = document.getElementsByClassName('comp_video')
for (j = 0; j < comp_video_array.length; j++) {
    comp_video_array[j].style.height = (9 / 16) * video_width + "px";
}
// Document ready - means the page is loaded
$(document).ready(function () {
    $(window).resize(function () {
        var j = 0;
        const video_width = $(".comp_video").width()
        comp_video_array = document.getElementsByClassName('comp_video')
        for (j = 0; j < comp_video_array.length; j++) {
            comp_video_array[j].style.height = (9 / 16) * video_width + "px";
        }
    });
});

