// Seleccionamos la pantalla donde se muestran los números
let pantalla = document.getElementById("pantalla");

// Función que agrega números y operadores a la pantalla
function agregar(valor) {
    pantalla.value += valor;          // Añade el valor al final del contenido actual
}

// Función que realiza el cálculo
function calcular() {
    try {
        // eval() toma el texto de la pantalla y lo calcula matemáticamente
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        // Si hay un error (ejemplo: 5++), muestra "Error"
        pantalla.value = "Error";
    }
}

// Función para limpiar toda la pantalla
function limpiar() {
    pantalla.value = "";              // Borra todo el contenido
}

// Función para borrar solo el último carácter
function borrarUno() {
    pantalla.value = pantalla.value.slice(0, -1); // Elimina el último dígito o símbolo
}