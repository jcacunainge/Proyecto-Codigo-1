// sección ocultar y mostrar proyectos
// const btnJavascript = document.querySelector('#javascript');
// const btnAngular = document.querySelector('#angular');
// const btnPython = document.querySelector('#python');
// const btnHtmlCss = document.querySelector('#html-Css');
// const proyectosHtmlCss = document.querySelector('#html-Css');

// function seccionHtmlCss(){
//   document.getElementById('html-Css').style.display ='block';

// }



// // Obtén una referencia al botón y a la sección
// var botonMostrar = document.getElementById('mostrarSeccion');
// var seccionHtmlCss = document.getElementById('html-Css');

// // Agrega un evento de clic al botón
// botonMostrar.addEventListener('click', function() {
//   // Cambia la propiedad 'display' de la sección para mostrarla
//   seccionHtmlCss.style.display = 'block';
// });


var seccionHtmlCssVisible = false; // Variable para rastrear el estado de la sección

function seccionHtmlCss() {
  var seccion = document.getElementById('html-Css');

  if (seccionHtmlCssVisible) {
    seccion.style.display = 'none'; // Oculta la sección
    seccionHtmlCssVisible = false; // Actualiza el estado de la variable
  } else {
    seccion.style.display = 'block'; // Muestra la sección
    seccionHtmlCssVisible = true; // Actualiza el estado de la variable
  }
}

// Agrega un evento de clic al botón
var botonMostrar = document.getElementById('mostrarSeccion');
botonMostrar.addEventListener('click', seccionHtmlCss);


//Sección iconos de las card enlaces: 

// Obtén una referencia al ícono
var iconoEnlace = document.getElementById('iconoEnlace');
// Agrega un evento de clic al ícono
iconoEnlace.addEventListener('click', function() {
  // Redirige al enlace deseado
  window.location.href = 'https://github.com/jcacunainge/Landing-Pague-Casa-de-acciones/tree/main/Lading-Page-Tienda-de-acciones';
});