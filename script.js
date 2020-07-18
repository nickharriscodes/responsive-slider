var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  handleSlideout(n);
  
  setTimeout(function(){
    showSlides(slideIndex += n, n);
  }, 500);
}

// Thumbnail image controls
function currentSlide(n) {
  handleSlideout("dot");
  setTimeout(function() {
    showSlides((slideIndex = n), "dot");
  }, 1000)
}

function handleSlideout(n) {
var slides = document.getElementsByClassName("mySlides");
var text = document.getElementsByClassName("text");
if (n === -1) {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display == "block") {
      slides[i].style.animationName = "slide-out-left";
      text[i].style.animationName = "slide-out-left";
    } else {
      slides[i].style.animationName = "";
      text[i].style.animationName = "";
    }
  }
}
if (n === 1) {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display == "block") {
      slides[i].style.animationName = "slide-out-right";
      text[i].style.animationName = "slide-out-right";
    } else {
      slides[i].style.animationName = "";
      text[i].style.animationName = "";
    }
  }
}
if (n === "dot") {
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display == "block") {
      slides[i].style.animationName = "fade-out";
      text[i].style.animationName = "fade-out";
    } else {
      slides[i].style.animationName = "";
      text[i].style.animationName = "";
    }
  }
}
}

function showSlides(n, x) {
var i;
var slides = document.getElementsByClassName("mySlides");
var text = document.getElementsByClassName("text");
var dots = document.getElementsByClassName("dot");

if (n > slides.length) {
  slideIndex = 1
}
if (n < 1) {
  slideIndex = slides.length
} 
if (x == "dot") {
  slides[slideIndex-1].style.animationName = "fade-in";
  text[slideIndex-1].style.animationName = "fade-in";
} else if (x > 0) {
  slides[slideIndex-1].style.animationName = "slide-in-left";
  text[slideIndex-1].style.animationName = "slide-in-left";
} else {
  slides[slideIndex-1].style.animationName = "slide-in-right";
  text[slideIndex-1].style.animationName = "slide-in-right";
}

for (i = 0; i < slides.length; i++) { 
  slides[i].style.display = "none";
  text[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
text[slideIndex-1].style.display = "block";
}
