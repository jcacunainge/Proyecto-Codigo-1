let servicios = [
    {
        img: 'https://cdn-icons-png.flaticon.com/512/390/390583.png?w=740&t=st=1687197433~exp=1687198033~hmac=c4fc0ec259510818dd6de80cff9edc91ece79ebebdd69de199a419854391177d',
        titulo: 'Desarrollo de sitios web responsivos',
        descripcion: 'Diseñar sitios web adaptativos para diferentes dispositivos y pantallas.'
    },
    {
        img: 'https://cdn-icons-png.flaticon.com/512/762/762711.png?w=740&t=st=1687197536~exp=1687198136~hmac=82398de703d49a87422fa1a9592455d57fe6dbd99b9b17186586774f3fee6735',
        titulo: 'Optimización de rendimiento web:',
        descripcion: 'Optimizar sitios web para mejor velocidad, eficiencia y mejor experiencia'
    },
    {
        img: 'https://cdn-icons-png.flaticon.com/512/438/438915.png?w=740&t=st=1687197605~exp=1687198205~hmac=4b1034d7082ff4ad5f38812f1febfd5146a388ebba241065bc950b3efaea9981',
        titulo: 'Diseño de interfaces de usuario (UI)',
        descripcion: 'Diseñar interfaces atractivas y usables para sitios, apps y plataformas.'
    },
    {
        img: 'https://cdn-icons-png.flaticon.com/512/994/994146.png?w=740&t=st=1687198717~exp=1687199317~hmac=a7fb6983f4aaf072675fbe78a7aefc28a7e8cc2d8cd41022adcdb48cdc0e7815',
        titulo: 'Desarrollo de aplicaciones web',
        descripcion: 'Desarrollar aplicaciones web interactivas y funcionales para experiencia inmersiva.'
    },

    {
        img: 'https://cdn-icons-png.flaticon.com/512/675/675626.png?w=740&t=st=1687198156~exp=1687198756~hmac=e4ca7990f0bcc265e48a59dc7e07fe34ee12de4c2c26bc7d25ca43cef3ce1485',
        titulo: 'Integración de APIs',
        descripcion: 'Conectar diferentes sistemas y plataformas a través de APIs'
    },

    {
        img: 'https://cdn-icons-png.flaticon.com/512/1197/1197432.png?w=740&t=st=1687198630~exp=1687199230~hmac=b41b7afe8dfed15a5d97204ed6e8b852c6dcf69e7394ec2010f921b1b3344586',
        titulo: 'Mantenimiento y actualización de web',
        descripcion: 'Mantener sitios web actualizados, seguros y en funcionamiento constante'
    }
];


function crearCard(servicio) {
    let itemServicio = document.createElement('div');
    itemServicio.classList.add('contenedor-servicios-card');
    itemServicio.innerHTML = `
      <img class="img-servicio" src="${servicio.img}" alt="">
      <h4 class="titulo-servicio">${servicio.titulo}</h4>
      <p class="descripcion-servicio">${servicio.descripcion}</p>
    `;
    return itemServicio;
  }

  const seccionServicios = document.getElementById('servicios');
  servicios.forEach((servicio) => {
    const card = crearCard(servicio);
    seccionServicios.appendChild(card);
  });