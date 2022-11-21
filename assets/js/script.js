// STBSlider. Made just for practice in JS and free to use.
// Author: Pavel Uspensky. https://sitetobe.ru

const sliderMove = () => {
    
     let prev = document.getElementById('prev'),
         next = document.getElementById('next'),
         view = document.getElementById('1').offsetWidth, 
         slideWrap = document.getElementById('stb'),
         slide = document.querySelectorAll('.slide'),
         slideNum = 0;

    next.addEventListener('click', function() {

      if (slideNum > 0) {
        slideNum--
      } 
     else { 
      slideNum = slide.length -1;
  }
      slideWrap.style.left = -slideNum * view + "px";
  });

    prev.addEventListener('click', function (list) {

      if (slideNum < slide.length - 1) {
        slideNum++;
      }
      else {
        slideNum = 0;
      }
      slideWrap.style.left = -slideNum * view + "px";
    });
   
    const intervalId = setInterval(() => {
      if (slideNum < slide.length - 1) {
        slideNum++;
      }
      else {
        slideNum = 0;
      }
      slideWrap.style.left = -slideNum * view + "px";
    }, 4000);

}
sliderMove();
