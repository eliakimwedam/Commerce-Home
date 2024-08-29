
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function openNav() {
  document.getElementById("mySidepanel").style.width = "200px";
  document.getElementById("mySidepanel").style.margin = "10px";
  // document.getElementById("mySidepanel").style.backgroundColor = "rgb(1,1,1)"
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}


const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');


if (bar){
  bar.addEventListener('click', () =>{
    nav.classList.add('active');
  })
}