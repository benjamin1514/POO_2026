console.log("Conectado js");
/*Instrucciones: Crea una función llamada construirFrase. Dentro de ella, define el arreglo let palabras = ["programar", "es"];.
Usa .push() para agregar "increíble" al final.
Usa .push() para agregar "borrar" al final.
Usa .pop() para eliminar "borrar".
Muestra con alert() la frase unida por espacios.
*/

function construirFrase() {
    let palabras = ["Programar", "es"];

    palabras.push("Increíble");
    palabras.push("borrar");
    let eliminada = palabras.pop("");

    alert(`El ${palabras.join(" ")} `);
    alert(`La palabra eliminada fue = ${eliminada}`);
}

/*Instrucciones: Crea una función donde definas let alumnos = ["Juan", "María", "Pedro"];.
Un nuevo alumno, "Luis", llega primero a la fila (usa .unshift()).
El primer alumno de la fila entra a clases (usa .shift() y guarda ese nombre en una variable).
Muestra un alert() que diga: "Entró [nombre] y la fila ahora es: [el resto del arreglo]" */

function alumnos() {
    let fila = ["Juan", "María", "Pedro"];
    fila.unshift("Luis");
    let sala = [fila.shift()];

    alert(`Entro ${sala[0]} y la fila ahora es: ${fila.join(", ")}.`);
}

/*Instrucciones: Crea una función que reciba el arreglo let datos = [3, "gatos", "negros", "duermen"];.
Accede al número 3 y súmale 2 directamente en la operación de concatenación.
Construye la frase: "5 gatos negros duermen plácidamente".
Muestra el resultado con alert(). */

function reordenarDatos() {
    let datos = [3, "gatos", "negros", "duermen"];
    datos[0] += 2;
    datos.push("placidamente")
    alert(datos.join(" "))
}

/*Instrucciones: En una función, define:
JavaScript
let matriz = [
    [10, 20],
    [30, 40]
];
Accede al número 10 y al 40.
Suma ambos valores y muestra el resultado con un alert() que explique qué posiciones sumaste (ej: "Suma de [0][0] y [1][1]"). */

function cordenadas() {
    let matriz = [
        [10, 20],
        [30, 40]
    ];

    let suma = matriz[0][0] + matriz[1][1];

    alert(`suma ${matriz[0][0]} y ${matriz[1][1]} = ${suma}`)
}

/* Instrucciones: Crea una función con la matriz: let datos = [1, [2, [3, 4]]];.
Accede al número 4.
Usa .push() para agregar el número 5 al mismo sub-arreglo donde está el 4.
Muestra la matriz completa en un alert().*/

function operarIntruso() {
    let datos = [1,
        [2,
            [3, 4]
        ]
    ];
    datos[1][1].push(5);
    alert(datos)
}

/*Instrucciones: Define let sujetos = ["El programador", "La computadora"]; y una matriz let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];.
Crea una función que tome a "El programador" y la acción "analiza".
Concatena la frase y lánzala por alert(). */

function acciones(){
    let sujetos = ["El programador", "La computadora"];
    let verbos = [["codifica", "analiza"], ["falla", "reinicia"]];

    alert(`${sujetos[0]} ${verbos[0][1]}`);
}

/*Instrucciones: Tienes el arreglo let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];.
Elimina el primer elemento ("Error") y el último ("Virus").
Agrega "Monitor" al inicio.
Muestra el inventario final con alert(). */

function limpiezaDatos() {
    let inventario = ["Error", "Laptop", "Mouse", "Teclado", "Virus"];
    inventario.shift(inventario[0]);
    inventario.pop(inventario[4]);
    inventario.unshift("Monitor")
    alert(`${inventario.join(" - ")}`)
}

/*Instrucciones: Define una matriz de 3x3 llena de ceros.
JavaScript
let tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

Cambia todos los ceros de la diagonal principal (superior izquierda a inferior derecha) por el número 1.
Muestra el resultado de la fila central por alert().
[0], [1][1], and [2][2]]
 */

function matrizModificada() {
    let tablero = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

tablero[0][0] = 1;
tablero[1][1] = 1;
tablero[2][2] = 1;

alert(tablero)
}


/*Instrucciones: Crea una función con un arreglo let pacientes = ["Ana", "Betto"];.
Llegan dos pacientes más: "Carlos" y "Diana" (usa .push()).
Atienden al primero (usa .shift()).
Llega una urgencia: "Sonia" debe ser atendida de inmediato (usa .unshift()).
Muestra cuántos pacientes quedan y quién es el siguiente en la lista.
 */

function consultorioMedico()