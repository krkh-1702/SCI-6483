
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

// Hover effects
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

//Adding the p5.js scketch for text loading 
let main = ["k", "r", "i", "t", "i", "k", "a"];
var possible = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let loadedFont;
let index = 0;
var canvas;

//function preload() {
//  loadedFont = loadFont("PPNeueMachina-Ultrabold.otf");
//}

function setup() {
  canvas = createCanvas(800, 400);
  canvas.parent("test");
  canvas.style("display":"block");
  //canvas.position(0,0);
  //canvas.style('z-index', '-1');


  textAlign(CENTER, CENTER);
  textFont(loadedFont);
  textSize(50);
  frameRate(5);
}

function draw() {
  background(175);
  fill(255, 255, 255);

  // Selecting a random character
  for (let index = 75; index <= width - 125; index += 100) {
    for (i = 0; i < main.length; i++) {
      if (frameCount < 25) {
        let randomChar = possible[Math.floor(Math.random() * possible.length)];
        text(randomChar[i], index, height / 2);
      }
      if (frameCount >= 25) {
        text(main[i], 75 + i * 100, height / 2);
      }
    }
  }
}

