//Class Evento Constructor
class Evento {
    constructor(nombre, entradas, imagen) {
        this.nombre = nombre;
        this.entradas = entradas;
        this.imagen = imagen;
    }
    
    comprarEntrada(cant){
        if (cant > this.entradas) {
            showErrorMessage(["No hay suficientes entradas"]);
        }else{
            showSuccessMessage(["Gracias por su compra de " + cant + " entradas para " + this.nombre]);
        }
    }
}