window.onload = function(){
    slider = document.querySelector(".slider input");
    slider.oninput = function(){
        progressBar = document.querySelector(".slider progress");
        progressBar.value = slider.value;
        sliderValue = document.querySelector(".slider-value");
        sliderValue.innerHTML = slider.value;
    }
}
// --------slide-show----------------------------------------------------------------
 
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// --------------------------------------automatic
var aslideIndex = 0;
ashowSlides();

function ashowSlides() {
  var i;
  var aslides = document.getElementsByClassName("a-slides");
  var dots = document.getElementsByClassName("adot");
  for (i = 0; i < aslides.length; i++) {
    aslides[i].style.display = "none";  
  }
  aslideIndex++;
  if (aslideIndex >aslides.length) {aslideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  aslides[aslideIndex-1].style.display = "block";  
  dots[aslideIndex-1].className += " active";
  setTimeout(ashowSlides, 2000); // Change image every 2 seconds
}