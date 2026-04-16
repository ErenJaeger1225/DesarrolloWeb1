// Variable para almacenar el número secreto que el jugador debe adivinar
let numeroSecreto = 0;
// Variable para contar los intentos restantes antes de perder
let intentosRestantes = 0;
// Bandera para indicar si el juego ha terminado
let juegoTerminado = false;

// ====================== INICIAR JUEGO ======================
// Función que inicia un nuevo juego basado en la dificultad seleccionada
function iniciarJuego() {
    // Obtiene el nivel de dificultad del elemento select con id "dificultad" y lo convierte a entero
    let nivel = parseInt(document.getElementById("dificultad").value);
    // Obtiene el elemento donde se muestra la zona de adivinanza
    let zonajuego = document.getElementById("zonaAdivinanza");
    // Obtiene el elemento donde se muestran las pistas del juego
    let pistas = document.getElementById("pistaJuego");
    // Obtiene el elemento donde se muestran los intentos restantes
    let textoIntentos = document.getElementById("intentosRestantes");   // ← Corregido

    // Si el nivel es 0 (ninguna dificultad seleccionada), oculta la zona de juego y sale
    if (nivel === 0) {
        zonajuego.style.display = "none";
        return;
    }

    // Muestra la zona de juego
    zonajuego.style.display = "block";
    // Reinicia el estado del juego
    juegoTerminado = false;

    // Configura los intentos restantes según la dificultad
    if (nivel === 10) {
        intentosRestantes = 3;
    } else if (nivel === 50) {
        intentosRestantes = 5;
    } else if (nivel === 100) {
        intentosRestantes = 7;
    }

    // Genera un número secreto aleatorio entre 1 y el nivel seleccionado
    numeroSecreto = Math.floor(Math.random() * nivel) + 1;

    // Imprime el número secreto en la consola para depuración (en producción se quitaría)
    console.log("Número secreto:", numeroSecreto);

    // Muestra un mensaje inicial con el rango del número
    pistas.textContent = `Juego Iniciado - Adivina el número del 1 al ` + nivel;

    // Muestra los intentos restantes iniciales
    textoIntentos.textContent = `Intentos restantes: ` + intentosRestantes;
}

// ====================== ADIVINAR NÚMERO ======================
// Función que procesa el intento del jugador de adivinar el número
function adivinarNumero() {
    // Obtiene el elemento input donde el jugador ingresa su intento
    let input = document.getElementById("numeroIntento");
    // Convierte el valor del input a entero
    let numeroIntento = parseInt(input.value);
    // Obtiene el elemento para mostrar pistas
    let pistas = document.getElementById("pistaJuego");
    // Obtiene el elemento para mostrar intentos restantes
    let textoIntentos = document.getElementById("intentosRestantes");

    // Si el juego ya terminó, muestra alerta y sale
    if (juegoTerminado) {
        alert("El juego ya terminó. Selecciona una nueva dificultad.");
        return;
    }

    // Reduce en uno los intentos restantes
    intentosRestantes--;

    // Si el intento es correcto
    if (numeroIntento === numeroSecreto) {
        pistas.textContent = "¡Correcto! ¡Has adivinado el número!  Has ganado 100 fichas!";
        pistas.style.color = "lime";
        juegoTerminado = true;
    }
    // Si se acabaron los intentos
    else if (intentosRestantes <= 0) {
        pistas.textContent = `¡Perdiste! El número secreto era: ` + numeroSecreto;
        pistas.style.color = "red";
        juegoTerminado = true;
    }
    // Si el intento es mayor que el secreto
    else if (numeroIntento > numeroSecreto) {
        pistas.textContent = "El número es menor";
        pistas.style.color = "orange";
    }
    // Si el intento es menor que el secreto
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

// Variables globales de la mochila
let mochila = [];
const LIMITE_MOCHILA = 10;

// Función para recoger un objeto
function recogerObjeto() {
    let input = document.getElementById("nuevoObjeto");
    let objeto = input.value.trim(); // .trim() elimina espacios vacíos
    let mensaje = document.getElementById("mensajeSistema");

    if (objeto === "") {
        mensaje.textContent = "¡Escribe el nombre de un objeto!";
        return;
    }

    if (mochila.length >= LIMITE_MOCHILA) {
        mensaje.textContent = "La mochila está llena (máx 10)";
        return;
    }

    mochila.push(objeto);
    mensaje.textContent = "Has recogido: " + objeto;

    input.value = "";
    input.focus();
    actualizarPantalla(); // Refresca la lista y el contador
}

// Función para tirar el último objeto
function tirarUltimo() {
    let mensaje = document.getElementById("mensajeSistema");

    if (mochila.length === 0) {
        mensaje.textContent = "La mochila ya está vacía";
        return;
    }

    let objetoTirado = mochila.pop();
    mensaje.textContent = "Desechaste: " + objetoTirado;
    actualizarPantalla();
}

// Función para actualizar la lista visual y el contador
function actualizarPantalla() {
    let lista = document.getElementById("listaINventario");
    let contador = document.getElementById("contadorEspacio");

    // Limpiamos la lista antes de volver a llenarla
    lista.innerHTML = "";

    // Actualizamos el contador de texto
    contador.textContent = `Objetos en la mochila: ${mochila.length}/${LIMITE_MOCHILA}`;

    // Creamos los elementos de la lista
    mochila.forEach((item) => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}

// NUEVA FUNCIÓN: Buscador
function buscarObjeto() {
    let terminoBusqueda = document.getElementById("inputBusqueda").value.toLowerCase();
    let listaItems = document.querySelectorAll("#listaINventario li");

    listaItems.forEach((li) => {
        let texto = li.textContent.toLowerCase();
        // Si el texto incluye lo que buscamos, se muestra, si no, se oculta
        if (texto.includes(terminoBusqueda)) {
            li.style.display = "block";
        } else {
            li.style.display = "none";
        }
    });
}