function crearUsuario() {
    const nombre = document.getElementById("nombre").value;
    const documento = document.getElementById("documento").value;
    const mail = document.getElementById("mail").value;

    if (validarString(nombre, 'nombre') && validarDocumento(documento, 'documento') && validarMail(mail, 'mail')) {
        console.log(nombre);
        console.log(documento);
        console.log(mail);
        var user = new usuario(nombre, documento, mail);
        var json = JSON.stringify(user);
        sessionStorage.setItem("usrJSON", json);
        console.log(json);
        console.log(user);
        return true;
    } else {
        return false;
    }

}

if (sessionStorage.getItem('usrJSON')) {
    var userJson = JSON.parse(sessionStorage.getItem('usrJSON'));
} else {
    var userJson = new usuario(null, null, null)
}
console.log(userJson);
if (userJson.nombre == null) {

    var button = document.getElementById("btnIngresar");
    if (button != null) {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            //Limpiamos el div con cada clickeo del boton
            const div = document.getElementById("messages");
            div.innerHTML = '';
            //Valida que los datos sean correctos
            if (crearUsuario()) {
                window.location.href = "/pages/eventos.html";
            }

        }
        )
    }
} else {
    window.location.href = "/pages/eventos.html";
}
