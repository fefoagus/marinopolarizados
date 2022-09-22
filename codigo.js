


// visualizador de imagenes//


const enlaces = document.querySelectorAll('.container-grid .aa')
const lightbox = document.querySelector('.container-img')
const grande = document.querySelector('.grande')
const cerrar = document.querySelector('.bx')


enlaces.forEach((cadaEnlace, i) => {
    enlaces[i].addEventListener('click', (e) => {
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img3').src
        console.log(ruta)

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)
    })
})

cerrar.addEventListener('click', (e) => {
    lightbox.classList.remove('activo')
})