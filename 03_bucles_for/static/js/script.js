console.log("js conectado...")

/*Selecciona el div con el id pantalla.
Crea un ciclo for que vaya del 1 al 10.
En cada vuelta del ciclo, agrega 
(concatena con +=) el número actual seguido de un guion (ej: "1 - 2 - 3 - ") al párrafo. */

function contadorDigital() {
    let array = [];
    const container = document.getElementById('resultadoContainer1');
    const resultado = document.getElementById('result1');

    for (let i = 1; i <= 10; i++) {
        array.push(i);

    };

    resultado.textContent = `Contando: ${array.join(" - ")}`;
    container.classList.remove('d-none');
};

/*Tienes la siguiente lista de estudiantes: let curso = ["Ana", "Diego", "Sofía", "Matias"];
Selecciona el div pantalla y límpialo primero asignándole un texto vacío ("").
Usa un ciclo for para recorrer el arreglo. 
En cada iteración, agrega el nombre del estudiante al párrafo, separándolos por una coma y un espacio. */

function asistenciaAutomatica() {
    let curso = ["Ana", "Diego", "Sofía", "Matias"];
    const container = document.getElementById('resultadoContainer2');
    const resultado = document.getElementById('result2');

    for (let i = 0; i <= 3; i++) {
        curso.includes(resultado)
    }
    resultado.textContent = `${curso.join(", ")}`;
    container.classList.remove('d-none');
};