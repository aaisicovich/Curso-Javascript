//Class Evento Constructor
class Evento {
    constructor(nombre, entradas, imagen, fecha) {
        this.nombre = nombre;
        this.entradas = entradas;
        this.imagen = imagen;
        this.fecha = fecha;
    }
    // Implementacion Sweet Alert2
    comprarEntrada() {
        Swal.fire({
            title: 'Confirmacion de Compra',
            html: `
            <p><strong>Evento:</strong> ${this.nombre}</p>
            <p><strong>Fecha:</strong> ${this.fecha}</p>
            <input id="cantEntradas" type="number" min="1" placeholder="Cantidad de Entradas" class="swal2-input">
          `,
            icon: 'question',
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            preConfirm: () => {
                const cantEntradas = Swal.getPopup().querySelector('#cantEntradas').value;
                if (!esPositivo(cantEntradas)) {
                    Swal.showValidationMessage('Ingrese un numero mayor a 0');
                    return false;
                }
                return cantEntradas;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const cantEntradas = result.value;
                if (cantEntradas > this.cantEntradas) {
                    Swal.fire('Error', 'No hay suficientes entradas', 'error');
                } else {
                    this.descontarEntradas(cantEntradas);
                }
            } else {
                    console.log('Compra cancelada');
            }
        });
    }

    descontarEntradas(cant) {
        this.entradas = this.entradas - cant;

        fetch('../data/data.json')
            .then(response => response.json())
            .then(data => {
                const updatedData = {
                    eventos: data.eventos.map(evento => {
                        if (evento.nombre === this.nombre) {
                            evento.entradas = this.entradas;
                        }
                        return evento;
                    })
                };

                fetch('/updateEventos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedData),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('JSON file updated successfully:', data);
                        Toastify({
                            text: 'Gracias por su compra',
                            duration: 3000,
                            close: true,
                            gravity: 'top',
                            position: 'right',
                            backgroundColor: 'green',
                            stopOnFocus: true,
                        }).showToast();
                    })
                    .catch(error => {
                        console.error('Error updating JSON file:', error);
                    });
            })
            .catch(error => {
                console.log(response);
                console.error('Error fetching JSON data:', error);
            });


    }
}