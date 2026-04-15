let numeroSecreto = 0;
let intentosRestantes = 0;
let juegoTerminado = false;

// ====================== INICIAR JUEGO ======================
function iniciarJuego() {
    let nivel = parseInt(document.getElementById("dificultad").value);
    let zonajuego = document.getElementById("zonaAdivinanza");
    let pistas = document.getElementById("pistaJuego");
    let textoIntentos = document.getElementById("intentosRestantes");   // ← Corregido

    if (nivel === 0) {
        zonajuego.style.display = "none";
        return;
    }

    zonajuego.style.display = "block";
    juegoTerminado = false;

    // Configurar según dificultad
    if (nivel === 10) {
        intentosRestantes = 3;
    } else if (nivel === 50) {
        intentosRestantes = 5;
    } else if (nivel === 100) {
        intentosRestantes = 7;
    }

    numeroSecreto = Math.floor(Math.random() * nivel) + 1;

    console.log("Número secreto:", numeroSecreto);

    pistas.textContent = `Juego Iniciado - Adivina el número del 1 al ` + nivel;

    textoIntentos.textContent = `Intentos restantes: ` + intentosRestantes;
}

// ====================== ADIVINAR NÚMERO ======================
function adivinarNumero() {
    let input = document.getElementById("numeroIntento");
    let numeroIntento = parseInt(input.value);
    let pistas = document.getElementById("pistaJuego");
    let textoIntentos = document.getElementById("intentosRestantes");

    if (juegoTerminado) {
        alert("El juego ya terminó. Selecciona una nueva dificultad.");
        return;
    }

    // Restar intento
    intentosRestantes--;

    if (numeroIntento === numeroSecreto) {
        pistas.textContent = "¡Correcto! ¡Has adivinado el número!  Has ganado 100 fichas!";
        pistas.style.color = "lime";
        juegoTerminado = true;
    } 
    else if (intentosRestantes <= 0) {
        pistas.textContent = `¡Perdiste! El número secreto era: ` + numeroSecreto;
        pistas.style.color = "red";
        juegoTerminado = true;
    } 
    else if (numeroIntento > numeroSecreto) {
        pistas.textContent = "El número es menor";
        pistas.style.color = "orange";
    } 
    else {
        pistas.textContent = "El número es mayor";
        pistas.style.color = "orange";
    }

    // ← Actualizar siempre el contador (esta línea es clave)
    textoIntentos.textContent = `Intentos restantes: ` + intentosRestantes;

    // Limpiar y enfocar
    input.value = "";
    input.focus();
}