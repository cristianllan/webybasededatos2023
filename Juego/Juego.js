document.addEventListener("DOMContentLoaded", function () {
    const respuestas = [
        { palabra: "leon", pista: "Es el rey de la selva." },
        { palabra: "gato", pista: "Es un animal doméstico." },
        { palabra: "perro", pista: "Es el mejor amigo del hombre." },
        { palabra: "tigre", pista: "Tiene rayas y es un gran felino." },
        { palabra: "elefante", pista: "Es el animal terrestre más grande." }
    ];
    const inputAdivinanza = document.getElementById("adivinanza");
    const botonVerificar = document.getElementById("verificar");
    const resultado = document.getElementById("resultado");
    const pista = document.getElementById("pista");

    function reiniciarJuego() {
        resultado.textContent = "";
        inputAdivinanza.value = "";
        inputAdivinanza.disabled = false;
        botonVerificar.disabled = false;
        mostrarPistaAleatoria();
    }

    function mostrarPistaAleatoria() {
        const indice = Math.floor(Math.random() * respuestas.length);
        pista.textContent = `Pista: ${respuestas[indice].pista}`;
    }

    mostrarPistaAleatoria();

    botonVerificar.addEventListener("click", function () {
        const respuestaUsuario = inputAdivinanza.value.toLowerCase();

        if (respuestas.some(respuesta => respuesta.palabra === respuestaUsuario)) {
            resultado.textContent = "¡Correcto! Has adivinado la palabra.";
            resultado.style.color = "green";
            inputAdivinanza.disabled = true;
            botonVerificar.disabled = true;
            pista.textContent = ""; // Borra la pista al adivinar correctamente
        } else {
            resultado.textContent = "Respuesta incorrecta. Intenta de nuevo.";
            resultado.style.color = "red";
        }
    });

    // Agregar un botón de reinicio
    const botonReiniciar = document.createElement("button");
    botonReiniciar.textContent = "Reiniciar";
    document.body.appendChild(botonReiniciar);

    botonReiniciar.addEventListener("click", reiniciarJuego);
});
