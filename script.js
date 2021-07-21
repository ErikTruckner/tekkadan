const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

//Carousel

let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;


document.getElementById("carousel__btn--next")
.addEventListener("click", function(){
    moveToNextSlide();
});
document.getElementById("carousel__btn--prev")
.addEventListener("click", function(){
    moveToPrevSlide();
});

function updateSlidesPosition(){
    for(let slide of slides){
        slide.classList.remove("carousel__item--visible");
        slide.classList.add("carousel__item--hidden");
    }
    slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide(){
    
    if (slidePosition === totalSlides -1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidesPosition();
}

function moveToPrevSlide(){
   
    if (slidePosition === 0){
    // totalSlides -1, if you wan't infinite carousel effect to both ways
        slidePosition = 0;  
    } else {
        slidePosition--;
    }
    updateSlidesPosition();
}





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}