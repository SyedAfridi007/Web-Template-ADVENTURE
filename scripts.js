const selectElement =(element) => document.querySelector(element);

const header = selectElement('header');
const mainContent = selectElement('main');


selectElement('.hamburger').addEventListener('click',() => {
    header.classList.toggle('active');
    mainContent.classList.toggle('active');

});

window.onclick = (Event) => {
    if(Event.target.matches('.active')){
        if(header.classList.contains('active')){
            header.classList.remove('active');
            mainContent.classList.remove('active');
        }
    }
};

const swiper = new Swiper('.container', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
      },
    // using "ratio" endpoints
    breakpoints: {
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
  });


   //Javacript for video slider navigation
 const btns = document.querySelectorAll(".nav-btn");
 const slides = document.querySelectorAll(".video-slide");
 const contents = document.querySelectorAll(".content");

 var sliderNav = function(manual){
   btns.forEach((btn) => {
     btn.classList.remove("active");
   });

   slides.forEach((slide) => {
     slide.classList.remove("active");
   });

   contents.forEach((content) => {
     content.classList.remove("active");
   });

   btns[manual].classList.add("active");
   slides[manual].classList.add("active");
   contents[manual].classList.add("active");
 }

 btns.forEach((btn, i) => {
   btn.addEventListener("click", () => {
     sliderNav(i);
   });
 });






