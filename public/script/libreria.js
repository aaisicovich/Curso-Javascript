
function validarString(input, nombre){
    const soloLetras = /^[a-zA-Z]+$/;

    if (soloLetras.test(input)){
        return true;
    } else {
        showErrorMessage(["El campo " + nombre + " solo puede contener letras"]);
        return false;
    }
}

function validarDocumento(input, nombre){
    const valor = input.trim();
    const expresionRegularLong = /^\d{1,9}$/;
    const expresionRegularNums = /^[0-9]+$/;
    if (!expresionRegularNums.test(valor) || !expresionRegularLong.test(valor)) {
        showErrorMessage(["El campo " + nombre + " solo puede ser números y longitud maxima 9 caracteres"]);
        return false;
      }
      // el valor es válido
      return true;
   

}

function validarMail(input, nombre){
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (expresionRegular.test(input)) {
        return true;
    } else {  
        showErrorMessage(["El campo " + nombre + " contiene valores inválidos, ingrese uno distinto"]);
    }
}

// Function para chequear valor positivo
function esPositivo(value) {
    const valorParseado = parseInt(value);
    return !isNaN(valorParseado) && valorParseado > 0;
}