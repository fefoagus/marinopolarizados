// testimonios//


let slider = document.querySelector('.comenta');
let sliderInd = document.querySelectorAll('.comentario');
let contador = 0;
let tamañoWidth = sliderInd[0].clientWidth;
let intervalo = 3000;

setInterval(function tiempo() {
    slides();
}, intervalo);

function slides() {
    slider.style.transform = `translate(${-tamañoWidth * contador}px`;
    slider.style.transition = `transform 1s`;
    contador++;

    if (contador === sliderInd.length) {
        contador = 0;
        setTimeout(function () {
            slider.style.transform = `translate(${-tamañoWidth * contador}px`;
            slider.style.transition = `transform 0s`;
        }, intervalo)
    }
}
