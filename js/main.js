document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');

    const objecto = M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 3,
        indicators: false,
        noWrap: false
        // fullWidth: true
    });

    var instance = M.Carousel.getInstance(elementosCarousel);
    const botonNext = document.getElementById('button-next');
    botonNext.onclick = () => instance.next(2);
    // botonNext.addEventListener("onclick",()=>{
            
    // })
    
});

// const elementos = document.querySelectorAll('.carousel').addEventListener("click");