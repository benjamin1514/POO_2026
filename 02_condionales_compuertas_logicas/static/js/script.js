console.log("Js conectado...");
/*Crea una variable edad. Si la edad es 18 o más, muestra por consola: 
"Acceso permitido a la App". Si es menor, muestra: "Acceso denegado: necesitas ser mayor de edad" */

function porteroDigital() {
    let edad = parseInt(prompt("Ingrese su edad"));
    if(edad >= 18) {
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
    
    if(nombre && usuarios) {
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

    if(productos.includes(nuevoProducto)) {
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
    if(bodega.length > 5) {
        bodega.pop();
        alert("Bodega llena, eliminando último ingreso");
    } else {
        alert("Espacio disponible");
    }
}