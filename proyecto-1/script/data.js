let proyectos = [
    {
        imagen: "https://www.comparapps.com/wp-content/uploads/2019/08/Como-Crear-Una-Pagina-Web.jpg",
        tituloProyecto: "Proyecto 1",
        descripcionProyecto: "Se realiza el proyecto usando html, css, completamente responsive",
        deploy: "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg",
        codigo: "https://okhosting.com/resources/uploads/2018/06/github-logo.png"
    },
    {
        imagen: "https://www.comparapps.com/wp-content/uploads/2019/08/Como-Crear-Una-Pagina-Web.jpg",
        tituloProyecto: "Proyecto 1",
        descripcionProyecto: "Se realiza el proyecto usando html, css, completamente responsive",
        deploy: "https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg",
        codigo: "https://okhosting.com/resources/uploads/2018/06/github-logo.png"
    },

]

function crearCardProyecto(){
    let imagenProyecto = document.createElement("img");
    imagenProyecto.src = proyectos.imagen;

    let tituloProyecto = document.createElement("h3");
    tituloProyecto.innerHTML = proyectos.tituloProyecto;

    let descripcionProyecto = document.createElement("p");
    descripcionProyecto.innerHTML = proyectos.descripcionProyecto;

    let deploy = document.createElement("a")


}