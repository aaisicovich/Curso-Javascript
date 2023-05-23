fetch('../data/data.json')
    .then(response => response.json())
    .then(data => {
            const eventos = data.eventos.map(eventoData => {
                return new Evento(eventoData.nombre, parseInt(eventoData.entradas), eventoData.imagen, eventoData.fecha);
            
            });
            console.log(eventos);
            document.addEventListener('DOMContentLoaded', mostrarEventos(eventos));
        })
        .catch(error => {
            Toastify({
                text: 'Error al leer el data.json',
                duration: 6000,
                close: true,
                gravity: 'top',
                position: 'right',
                backgroundColor: 'red',
                stopOnFocus: true,
            }).showToast();
        })

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
        // Creamos el Contenedor del button
        var detalleContainer = document.createElement("eventos");
        detalleContainer.classList.add("detalle-container");
        //Generamos el boton
        var btn = document.createElement("button");
        btn.innerText = "Comprar";
        btn.classList = "btn btn-primary";
        //Le agregamos un evento a cada boton
        btn.addEventListener("click", function () {
            unEvento.comprarEntrada();
        });

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