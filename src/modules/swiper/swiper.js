function initializeSwiper() {
  const swiper = new Swiper('.swiper', {
    // 參數_一次可以看見幾個 card
    slidesPerView: 1.25,
    // 參數_每個card之間的間距
    spaceBetween: 5,
  
    breakpoints: {
      // 視窗寬度 >= 414px
      768: {
        slidesPerView: 1.75,
        spaceBetween: 30
      },
      // 視窗寬度 >= 767px
      992: {
        slidesPerView: 2.5,
        spaceBetween: 50
      }
    },
  });
}

export { initializeSwiper };