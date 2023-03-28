function sacarEntrada(artista) {
    let cantEntradas;
    let entradasEd = 50;
    let entradasMet = 45;

    switch (artista) {

        case "Ed Sheeran":

            cantEntradas = prompt("¿Cuantas entradas queres sacar para " + artista);

            if ((entradasEd - cantEntradas) >= 0) {

                for (let index = 1; index < cantEntradas; index++) {

                    let persona = prompt("Para quien es la entrada " + index + " (Nombre)");

                    alert(persona + " ya tiene su entrada");
                }

                entradasEd = entradasEd - cantEntradas;

            } else {

                alert( "No hay entradas suficientes. Hay disponibles " + entradasEd + " entradas"  )

            }

            break;

        case "Metallica":

            cantEntradas = prompt("¿Cuantas entradas queres sacar para " + artista)

            if ((entradasMet - cantEntradas) >= 0) {

                for (let index = 1; index < cantEntradas; index++) {

                    let persona = prompt("Para quien es la entrada " + index + " (Nombre)");

                    alert(persona + " ya tiene su entrada");
                }

                entradasMet = entradasMet - cantEntradas;

            } else {

                alert( "No hay entradas suficientes. Hay disponibles " + entradasMet + " entradas"  )

            }

            break;
    }


}