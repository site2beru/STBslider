const sliderMove = () => {
    const slideItems = document.querySelectorAll('.slide');
     let prev = document.getElementById('prev'),
         next = document.getElementById('next'),
         stb = document.getElementById('stb'),
         ofWid = slideItems.offsetWidth;

        slideItems.forEach((el) => {
        el.style.cssText = `
        transform: translateX(0);
        `;
         });

    prev.addEventListener('click', function() {
        slideItems.forEach((el) => { 
    el.style.transform += `translateX(-${el.offsetWidth}px)`;
        });
    });
    next.addEventListener('click', function() {
        slideItems.forEach((el) => {
       el.style.transform += `translateX(${el.offsetWidth}px)`;
    });
    });
    
}
sliderMove();