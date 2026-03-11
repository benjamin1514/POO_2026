console.log("Js conectado...");
/*Crea una variable edad. Si la edad es 18 o más, muestra por consola: 
"Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad" */

function porteroDigital() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if (edad >= 18) {
        alert("Acceso concedido, eres mayor de edad")
    } else {
        alert("Acceso denegado, eres menor de edad")
    }

}

/*Declara una variable nombre.
Si el nombre no está vacío, crea un arreglo llamado usuarios y agrega el nombre usando .push().
Si está vacío, muestra: "Error: El nombre no puede estar en blanco".
*/

function nombre() {
    let nombre = "hola1234"
    let usuarios = [];
    usuarios.push(`${nombre}`);

    if (nombre && usuarios) {
        alert(`Bienvenido ${usuarios}`);
    } else {
        alert("Error: el nombre no puede estar en blanco");
    }

}

/*Tienes esta lista: let productos = ["celular", "teclado", "mouse"];
Declara una variable nuevoProducto.
Si el producto no está en la lista (usa .includes()), agrégalo al final y muestra la lista completa.
Si ya existe, muestra: "El producto ya está en el inventario".
*/

function filtroDuplicados() {
    let productos = ["celular", "teclado", "mouse"];
    let nuevoProducto = "celular";

    if (productos.includes(nuevoProducto)) {
        alert("El producto ya está en el inventario")
    } else {
        alert("El producto no esta en el inventario")
    }
}

/*Imagina que una bodega solo tiene espacio para 5 cajas.
let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
Si el tamaño de la bodega (.length) es mayor a 5, elimina la última caja con .pop() y muestra: "Bodega llena, eliminando último ingreso".
Si es 5 o menos, muestra: "Espacio disponible".
*/

function stock() {
    let bodega = ["caja1", "caja2", "caja3", "caja4", "caja5", "caja6"];
    if (bodega.length > 5) {
        bodega.pop();
        alert("Bodega llena, eliminando último ingreso");
    } else {
        alert("Espacio disponible");
    }
}


/*5. Limpieza de Datos
A veces recibimos datos basura. let colaEspera = ["error_404", "Juan", "Sofía"];
Si el primer elemento (índice 0) es igual a "error_404", elimínalo usando .shift() y muestra la cola limpia.
Si no, muestra: "La lista de espera está correcta".
 */

function limpiezaDatos() {
    let colaEspera = ["error_404", "Juan", "Sofía"];
    let indice0 = colaEspera.shift();

    if (indice0 === colaEspera) {
        alert(`${colaEspera}`)
    } else {
        alert(`La lista de espera esta correcta ${colaEspera}`)
    }
};


/*Tienes una lista de usuarios comunes: let foro = ["User1", "User2"];
Declara la variable rol.
Si el rol es "Admin", agrega el nombre al inicio de la lista con .unshift() para que tenga prioridad.
Si no es Admin, agrégalo al final con .push(). */

function VIP() {
    let foro = ["User1", "User2"];
    let usuarioNuevo = prompt("Ingrese un usuario: ")
    if (usuarioNuevo.toLowerCase() === "admin") {
        foro.unshift(usuarioNuevo);
        alert(foro)
    } else {
        foro.push(usuarioNuevo);
        alert(foro)
    };

};


/*7. Sistema de Calificaciones Chile (Escala 1 a 7)
Crea una variable nota.
Si la nota es 6 o superior: "Excelente, eximido".
Si la nota es entre 4 y 5.9: "Aprobado, vas a examen".
Si es menor a 4: "Reprobado".
(Pista: Usa else if). */

function calificaciones() {
    let nota = parseFloat(prompt("Ingrese su nota: "))
    
    if(nota >= 6 && nota <= 7) {
        alert("Excelente eximido")
    } else if (nota >= 4 && nota <= 5.9) {
        alert("Aprobado, vas a examen")
    } else if (nota < 4 && nota >= 1) {
        alert("Reprobado")
    } else {
        alert("Coloque una nota valida.")
    }
}

/* let invitados = ["Ana", "Luis", "Camila", "Diego"];
Crea una variable persona.
Si la persona está en la lista, muestra: "¡Bienvenido/a [nombre]! Pasa a la fiesta".
Si no está, muestra: "Lo siento, no estás en la lista de invitados".
*/

function invitados() {
    let invitados = ["Ana", "Luis", "Camila", "Diego"];

    let persona = prompt("Coloque su nombre: ");
    if(invitados.includes(persona)) {
        alert(`¡Bienvenido ${persona}! Pasa a la fiesta`);
    } else {
        alert("Lo siento, no estás en la lista de invitados.")
    }
};


/*Imagina una estantería con dos niveles (una matriz):
let estanteria = [ ["Manzanas", "Peras"], ["Leche", "Yogur"] ];
Crea una variable seccion (0 o 1) y una variable producto.
Accede a la sección elegida. Si el producto solicitado está en esa sub-lista, muestra: "Producto encontrado en el estante".
Si no, muestra: "No tenemos ese producto en esa sección".
 */

function almacenMatrices() {
    let estanteria = [ ["Manzanas", "Peras"], ["Leche", "Yogur"] ];
    let seccion = prompt("Ingrese 0 o 1")
    let producto = prompt("que producto quiere");
    

    if(seccion.includes(estanteria)) {
        alert(`El producto esta en la estanteria`)
    } else {
        alert("No tenemos ese producto en esa sección")
    }
}