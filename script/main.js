function evento(nombre, entradas) {
    this.nombre = nombre;
    this.entradas = entradas;
}

const edSheeran = new evento("EdSheeran", 50);
const metallica = new evento("Metallica", 45);
const adquiridas = [];

preguntarNombre();
sacarEntrada(prompt("¿Para que artista desea comprar entradas (Ingrese 1 para Ed Sheeran o 2 para Metallica)?"))

function preguntarNombre() {
    user = prompt("¿Como es tu nombre?");

    var titulo = document.getElementById('Titulo');
    titulo.textContent = "Bienvenido " + user + " a TusTicketsOnline";

}

function ordenarString(a,b) {
    if (a > b) {
        return 1;                     
    } if ( b > a ) {
        return -1;
    }
}

function sacarEntrada(artista) {
    let cantEntradas;
    if (artista == 1 || artista == 2) {

        switch (artista) {

            case "1":
                cantEntradas = prompt("¿Cuantas entradas queres sacar para " + edSheeran.nombre + " ( 4 entradas maximo)");
                while (cantEntradas > 4) {
                    cantEntradas = prompt("Por favor, solo un numero entre 1 y 4");
                }
                if ((edSheeran.entradas - cantEntradas) >= 0) {
                    for (let index = 1; index <= cantEntradas; index++) {
                        let persona = prompt("Para quien es la entrada " + index + " (Nombre)");
                        adquiridas.push(persona);
                        console.log(persona + " ya tiene su entrada");
                    }
                    adquiridas.sort((a,b) => ordenarString(a,b));
                    console.log(adquiridas);
                    edSheeran.entradas = edSheeran.entradas - cantEntradas;
                    console.log("Quedan " + edSheeran.entradas + " entradas para Ed Sheeran")
                } else {
                    alert("No hay entradas suficientes. Hay disponibles " + edSheeran.entradas + " entradas")
                }
                break;

            case "2":

                cantEntradas = prompt("¿Cuantas entradas queres sacar para " + metallica.nombre + " ( 4 entradas maximo)" );
                while (cantEntradas > 4) {
                    cantEntradas = prompt("Por favor, solo un numero entre 1 y 4");
                }
                if ((metallica.entradas - cantEntradas) >= 0) {
                    for (let index = 1; index <= cantEntradas; index++) {
                        let persona = prompt("Para quien es la entrada " + index + " (Nombre)");
                        adquiridas.push(persona);
                        console.log(persona + " ya tiene su entrada");
                    }
                    adquiridas.sort((a,b) => ordenarString(a,b));
                    console.log(adquiridas);
                    metallica.entradas = metallica.entradas - cantEntradas;
                    console.log("Quedan " + metallica.entradas + " entradas para Metallica")
                } else {
                    alert("No hay entradas suficientes. Hay disponibles " + metallica.entradas + " entradas")
                }
                break;
        }


    }else{
        alert("No ingreso una opcion valida, refresque la pagina");
    }


}