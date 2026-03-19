console.log("js conectado...");

// input = parseInt(input); --> Transformar a número
/*
Contexto: Eres el profesor y estás pasando la lista. Cada alumno que dice "presente" debe ser anotado al final del registro.
Crea un arreglo vacío: let asistencia = [];
Función Principal: Crea registrarAlumno(). (Esta va en el onclick del botón).
Captura el nombre escrito en el input.
Usa .push() para meter a ese alumno al final del arreglo asistencia.
Modifica el textContent del párrafo para mostrar: "Alumnos presentes: " seguido del arreglo.
Limpia el input vaciando su .value. */

let asistencia = [];
function agregarLista(nombre) {
    asistencia.push(nombre)
    return asistencia.join(", ")
}


function registrarAlumno() {
    const container = document.getElementById("container1");
    const result = document.getElementById("result1");
    const input = document.getElementById("input1");
    let nombre = input.value;
    let resultado = agregarLista(nombre); // llamado a la función con envio de parametro

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};


/*
Contexto: En un hospital, los pacientes graves no van al final de la fila, 
pasan directamente al primer lugar de atención.
Crea un arreglo: let pacientes = ["Carlos", "María", "Diego"];
Función Principal: Crea ingresarUrgencia().
Captura el nombre del paciente desde el input.
Usa un if para revisar si el input NO está vacío (!== "").
Si escribieron un nombre, usa .unshift() para agregarlo al inicio del arreglo pacientes.
Muestra en el textContent del párrafo: "Próximos a atender: " seguido del arreglo.
Limpia el input.
 */

let pacientes = ["Carlos", "María", "Diego"];

function agregarUrgencia(nombre) {
    pacientes.unshift(nombre);
    return pacientes.join(", ")

}

function ingresarUrgencia() {
    const container = document.getElementById("container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2 ");

    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(nombre);

        result.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede estar vacío.")
    };

};

/*
Contexto: Un restaurante tiene pedidos listos. 
El cajero puede despachar el pedido más antiguo, o cancelar el último pedido que entró por un error.
Crea un arreglo: let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];
Función Principal: Crea gestionarPedidos().
Captura el texto del input. El usuario debe escribir la palabra "despachar" o "cancelar".
Usa un if. Si escribió "despachar", usa .shift() para sacar la primera comida de la lista.
Usa un else if. Si escribió "cancelar", usa .pop() para eliminar la última comida de la lista.
Muestra en el textContent: "Pedidos pendientes: " seguido del arreglo.
Limpia el input.
*/

let entregas = ["Pizza", "Sushi", "Hamburguesa", "Ensalada"];

function actualizarPedido(pedido) {
    if (pedido == "Despachar") {
        let eliminado = entregas.shift()
    } else if (pedido == "Cancelar") {
        entregas.pop()
    } else {
        alert("Ingrese un valor válido")
    };

    return `${entregas.join(", ")}`
}

function gestionarPedidos() {
    const container = document.getElementById("container3");
    const result = document.getElementById("result3");
    const input = document.getElementById("input3").value;
    let resultado = actualizarPedido(input);

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}


/*
Contexto: Una tienda online revisa si el código promocional que 
ingresó el cliente existe en su base de datos para aplicarle una rebaja.
Crea un arreglo: let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];
Función Principal: Crea verificarCodigo().
Captura el código desde el input.
Crea una variable mensaje = "Código inválido o expirado";.
Recorre el arreglo con un ciclo for.
Si el elemento actual del ciclo es igual al texto del input, cambia la variable 
mensaje a "¡Éxito! Código aceptado".
Fuera del ciclo, inyecta la variable mensaje en el textContent del párrafo.
Limpia el input.
*/

let codigosValidos = ["VERANO2026", "PROMO50", "CLIENTEVIP"];

function buscarCodigo(codigo) {
    let mensaje = "Código inválido o expirado"
    for (let i = 1; i < codigosValidos.length; i++) {
        if (codigo === codigosValidos[i]) {
            mensaje = "¡Exito! Código aceptado";
            return "¡Éxito! Código aceptado"
        } else {
            mensaje = "Ingresa un código válido"
        }
    };
    return mensaje
};

function verificarCodigo() {
    const input = document.getElementById("input4");
    let codigo = input.value;
    const container = document.getElementById("container4");
    const result = document.getElementById("result4");
    let resultado = buscarCodigo(codigo);

    result.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
};

/*
Contexto: Un cliente compra un producto 
y el sistema le genera automáticamente las etiquetas para sus próximas 3 letras de pago.
Función Principal: Crea simularCuotas().
Captura el nombre del producto desde el input (ej: "Bicicleta").
Crea una variable vacía: registroPagos = "";
Crea un ciclo for que dé exactamente 3 vueltas (del 1 al 3).
En cada vuelta, súmale (+=) a registroPagos el producto y el número de la cuota 
(Ej: producto + " - Cuota " + i + " | ").
Fuera del ciclo, muestra la variable registroPagos en el textContent del párrafo.
Limpia el input.
*/

function simuladorCuotas() {
    
}



