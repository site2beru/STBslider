const sliderMove = () => {
    const slide = document.querySelectorAll('.slide');
     let prev = document.getElementById('prev'),
         next = document.getElementById('next'),
         view = document.getElementById('1').offsetWidth,
         slideWrap = document.getElementById('stb'),
         slideNum = 0;

    prev.addEventListener('click', function() {

        slideWrap.style.left = -view + "px";
        slideNum = 0;
    });
    next.addEventListener('click', function() {
        slide.forEach((el) => {
       el.style.transform += `translateX(${el.offsetWidth}px)`;
    });
    });
    
}
sliderMove();