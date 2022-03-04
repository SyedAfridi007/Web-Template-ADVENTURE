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






