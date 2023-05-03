function crearUsuario() {
    const nombre = document.getElementById("nombre").value;
    const documento = document.getElementById("documento").value;
    const mail = document.getElementById("mail").value;

    if (validarString(nombre, 'nombre') && validarDocumento(documento, 'documento') && validarMail(mail, 'mail')) {

        var user = new usuario(nombre, documento, mail);
        var json = JSON.stringify(user);
        sessionStorage.setItem("usrJSON", json);
    } else {
        return false;
    }

}
if (sessionStorage['usrJSON'] && sessionStorage['usrJSON'].trim() !== '') {
    var userJson = JSON.parse(sessionStorage['usrJSON']);
} else {
    var userJson = new usuario(null, null, null)
}
console.log(userJson);
if (userJson.nombre == null) {

    var button = document.getElementById("btnIngresar");
    if (button != null) {
        button.addEventListener("click", (event) => {
            //Limpiamos el div con cada clickeo del boton
            const div = document.getElementById("messages");
            div.innerHTML = '';
            //Valida que los datos sean correctos
            if (crearUsuario()) {
                window.location.href = "../pages/eventos.html";
            }

        }
        )
    }
} else {
    window.location.href = "../pages/eventos.html";
}
