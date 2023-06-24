// Apartado para imprimir un mensaje de prueba en la consola
console.log("Hola mundo");





// Apartado para descargar el hoja de vida  
let openButton = document.getElementById("btn"); // Se crea una variable que guarda el botón con el ID "btn"
openButton.addEventListener("click", function() { // Se agrega un Event Listener al botón que escucha un evento "click" y ejecuta la función que le sigue.
  fetch("./archivos/Desarollador Jr - Jhan Carlos Acuña.pdf") // Se realiza una petición HTTP para obtener el archivo PDF ubicado en la ruta especificada
    .then(response => response.arrayBuffer()) // Se convierte el contenido a un ArrayBuffer
    .then(buffer => { // Se recibe el ArrayBuffer resultante y se ejecuta la función que le sigue.
      let blob = new Blob([buffer], { type: "application/pdf" }); // Se crea un objeto Blob a partir del ArrayBuffer y se especifica el tipo de archivo como PDF
      let url = URL.createObjectURL(blob); // Se crea un URL temporal a partir del objeto Blob
      let a = document.createElement("a"); // Se crea un elemento HTML de tipo "a" (ancla) que se utilizará para descargar el archivo PDF
      a.href = url; // Se establece la URL temporal creada anteriormente como el valor del atributo `href` del elemento "a"
      a.target = "_blank"; // Se establece el valor del atributo `target` del elemento "a" como "_blank", lo que hace que el archivo PDF se abra en una nueva pestaña del navegador
      a.click(); // Se simula un clic en el elemento "a", lo que hace que el archivo PDF se descargue automáticamente.
    });
});


// //Apartado para cambiar la imagen en diferentes tamaaños de pantallas
// // Función para cambiar la imagen en función del tamaño de la pantalla
// function cambiarImagen() {
//   var anchoPantalla = window.innerWidth;
//   var imagen = document.getElementById('imagen-personal');
  
//   if (anchoPantalla < 768) {
//     imagen.src = './img/foto.jpeg';
//   } else {
//     imagen.src = './img/img-personal.png';
//   }
// }

// Llamada inicial a la función para establecer la imagen correcta
cambiarImagen();
// Evento que se dispara cuando el tamaño de la pantalla cambia
window.addEventListener('resize', cambiarImagen);



