// STBSlider. Made just for practice in JS and free to use.
// Author: Pavel Uspensky. https://sitetobe.ru

const sliderMove = () => {
    
     let prev = document.getElementById('prev'),
         next = document.getElementById('next'),
         view = document.getElementById('1').offsetWidth, 
         slideWrap = document.getElementById('stb'),
         slide = document.querySelectorAll('.slide'),
         slideNum = 0;

    prev.addEventListener('click', function() {

        if (slideNum < slide.length -1) {
          slideNum++
        } 
       else { 
        slideNum = 0;
    }
        slideWrap.style.left = -slideNum * view + "px";
    });
    
    next.addEventListener('click', function() {

      if (slideNum > 0) {
        slideNum--
      } 
     else { 
      slideNum = slide.length -1;
  }
      slideWrap.style.left = -slideNum * view + "px";
  });
    
}
sliderMove();