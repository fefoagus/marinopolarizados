//var loader = document.querySelector(".loader")//

//window.addEventListener("load", vanish);

//function vanish() {
//  loader.classList.add("disppear");
//}
//

//const loader = document.querySelector('.loader');
//const main = document.querySelector('.main');

//function init() {
//   setTimeout(() => {
//      loader.style.opacity = 0;
//     loader.style.display = 'none';

//    main.style.display = 'block';
//    setTimeout(() => (main.style.opacity = 1), 50);
//  }, 3000);
//}

//init();

window.onload = function () {
    var contenedor = document.getElementById('loader');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
}