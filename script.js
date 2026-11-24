
async function cargarTarjetas() {

    let res = await fetch('obras.json');
    let datos = await res.json();
    let contenedor = document.getElementById("contenedor");
    let htmlAcumulado = "";

    datos.forEach(item => {

        htmlAcumulado += `<div class="col-md-4">`;

        htmlAcumulado += `<div class="obra border-bottom border-danger">`;

        htmlAcumulado += `<img src="${item.imagen}" class="img-fluid object-fit-cover" alt="${item.titulo}">`;

        htmlAcumulado += `<p class="numero">${item.numero}</p>`;

        htmlAcumulado += `<h3>${item.titulo}</h3>`;

        htmlAcumulado += `<p class="dato">${item.ubicacion}</p>`;

        htmlAcumulado += `<p>${item.descripcion}</p>`;

        htmlAcumulado += `</div>`;

        htmlAcumulado += `</div>`;

    });

    contenedor.innerHTML = htmlAcumulado;
}

let boton = document.getElementById("cargarObras");

boton.addEventListener("click", cargarTarjetas);

