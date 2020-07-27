var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  handleSlideout(n);
  
  setTimeout(function(){
    showSlides(slideIndex += n, n);
  }, 400);
}

// Thumbnail image controls
function currentSlide(n) {
  handleSlideout("dot");
  setTimeout(function() {
    showSlides((slideIndex = n), "dot");
  }, 400)
}

function handleSlideout(n) {
  var slides = document.getElementsByClassName("mySlides");
  var text = document.getElementsByClassName("text");
  var containers = document.getElementsByClassName("slide-link");
  if (n === -1) {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display == "block") {
        slides[i].style.animationName = "slide-out-left";
        text[i].style.animationName = "slide-out-left";
        containers[i].style.animationName = "slide-out-left"
      } else {
        slides[i].style.animationName = "";
        text[i].style.animationName = "";
        containers[i].style.animationName = "";
      }
    }
  }
  if (n === 1) {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display == "block") {
        slides[i].style.animationName = "slide-out-right";
        text[i].style.animationName = "slide-out-right";
        containers[i].style.animationName = "slide-out-right"
      } else {
        slides[i].style.animationName = "";
        text[i].style.animationName = "";
        containers[i].style.animationName = "";
      }
    }
  }
  if (n === "dot") {
    for (let i = 0; i < slides.length; i++) {
      if (slides[i].style.display == "block") {
        slides[i].style.animationName = "fade-out";
        text[i].style.animationName = "fade-out";
        containers[i].style.animationName = "fade-out"
      } else {
        slides[i].style.animationName = "";
        text[i].style.animationName = "";
        containers[i].style.animationName = ""
      }
    }
  }
}

function showSlides(n, x) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var text = document.getElementsByClassName("text");
  var dots = document.getElementsByClassName("dot");
  var containers = document.getElementsByClassName("slide-link");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  } 

  if (x > 0) {
    slides[slideIndex-1].style.animationName = "slide-in-left";
    text[slideIndex-1].style.animationName = "slide-in-left";
    containers[slideIndex-1].style.animationName = "slide-in-left";
  } else if (x < 0){
    slides[slideIndex-1].style.animationName = "slide-in-right";
    text[slideIndex-1].style.animationName = "slide-in-right";
    containers[slideIndex-1].style.animationName = "slide-in-right";
  } else {
    slides[slideIndex-1].style.animationName = "fade-in";
    text[slideIndex-1].style.animationName = "fade-in";
    containers[slideIndex-1].style.animationName = "fade-in";
  }

  for (i = 0; i < slides.length; i++) { 
    slides[i].style.display = "none";
    text[i].style.display = "none";
    containers[i].style.display = "none"
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  text[slideIndex-1].style.display = "block";
  containers[slideIndex-1].style.display = "flex";
}
