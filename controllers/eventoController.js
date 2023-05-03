const eventos = [
    new Evento("EdSheeran", 50, "../img/Ed Sheeran.jpg"),
    new Evento("Metallica", 45, "../img/Metallica.jpg"),
    new Evento("Imagine Dragons", 80, "../img/ImagineDragons.jpg")
];

document.addEventListener('DOMContentLoaded', mostrarEventos(eventos));

function mostrarEventos(eventos) {
    let content = document.getElementById("eventos");

    eventos.forEach((unEvento) => {

        //Creamos el contenedor del evento
        var eventContainer = document.createElement("eventos");
        eventContainer.classList.add("evento-container");
        //Creamos el contenedor de la imagen
        var imagenContainer = document.createElement("div");
        imagenContainer.classList.add("imagen-container");
        //Generamos la imagen
        var img = document.createElement("img");
        img.src = unEvento.imagen;
        img.classList.add("evento-imagen");
        imagenContainer.appendChild(img);
        // Creamos el Contenedor del label, input y button
        var detalleContainer = document.createElement("eventos");
        detalleContainer.classList.add("detalle-container");
        //Generamos un label
        var lbl = document.createElement("label");
        lbl.innerText = "Cantidad de entradas:";
        //Generamos el campo de input
        var input = document.createElement("input");
        input.type = "number";
        input.min = 0;
        input.defaultValue = 0;
        //Generamos el boton
        var btn = document.createElement("button");
        btn.innerText = "Comprar";
        btn.classList = "btn btn-primary";
        //Le agregamos un evento a cada boton
        btn.addEventListener("click", function () {
            unEvento.comprarEntrada(parseInt(input.value));
        });

        detalleContainer.appendChild(lbl);
        detalleContainer.appendChild(input);
        detalleContainer.appendChild(btn);

        eventContainer.appendChild(imagenContainer);
        eventContainer.appendChild(detalleContainer);

        var contenedor = document.getElementById("eventos");
        contenedor.appendChild(eventContainer);

        contenedor.classList.add("event")
    });

}

var button = document.getElementById("sesion");
if (button != null) {
    button.addEventListener("click", (event) => {
        //Borramos la sesion
        sessionStorage.removeItem("usrJSON");
        window.location.href = "../index.html";
    }
    )
}