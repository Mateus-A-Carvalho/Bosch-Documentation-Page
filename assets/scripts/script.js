let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlides(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow__container-img");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) return slideIndex = 1;
  if (n < 1) return slideIndex = slides.length;

  for(i = 0; i < slides.length; i++) {
    slides[i].style.display= "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

