let entradasEd = 50;
let entradasMet = 45;

preguntarNombre();
sacarEntrada(prompt("¿Para que artista desea comprar entradas ( Ed Sheeran o Metallica)?"))

function preguntarNombre() {
        user = prompt("¿Como es tu nombre?");

        var titulo = document.getElementById('Titulo');
        titulo.textContent = "Bienvenido " + user + " a TusTicketsOnline";

    }
function sacarEntrada(artista) {
    let cantEntradas;

    switch (artista) {

        case "Ed Sheeran":
            cantEntradas = prompt("¿Cuantas entradas queres sacar para " + artista + " ( 4 entradas maximo)");
            while (cantEntradas > 4) {
                cantEntradas = prompt("Por favor, solo un numero entre 1 y 4");
            }
            if ((entradasEd - cantEntradas) >= 0) {
                for (let index = 1; index <= cantEntradas; index++) {
                    let persona = prompt("Para quien es la entrada " + index + " (Nombre)");
                    console.log(persona + " ya tiene su entrada");
                }
                entradasEd = entradasEd - cantEntradas;
                console.log("Quedan " + entradasEd + " para Ed Sheeran")
            } else {
                alert("No hay entradas suficientes. Hay disponibles " + entradasEd + " entradas")
            }
            break;

        case "Metallica":

            cantEntradas = prompt("¿Cuantas entradas queres sacar para " + artista)
            if ((entradasMet - cantEntradas) >= 0) {

                for (let index = 1; index <= cantEntradas; index++) {
                    let persona = prompt("Para quien es la entrada " + index + " (Nombre)");
                    console.log(persona + " ya tiene su entrada");
                }
                entradasMet = entradasMet - cantEntradas;
                console.log("Quedan " + entradasMet + " para Metallica")
            } else {
                alert("No hay entradas suficientes. Hay disponibles " + entradasMet + " entradas")
            }
            break;
    }


}