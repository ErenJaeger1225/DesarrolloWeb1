// Seleccionamos el elemento de la pantalla de la calculadora por su id 'display'
let display = document.getElementById('display');
// Guardamos la entrada actual como una cadena vacía inicialmente
let currentInput = '';

// Función para agregar un número a la entrada actual
function agregarNumero(num) {
    // Concatenamos el nuevo número al final de la cadena currentInput
    currentInput += num;
    // Actualizamos el valor del display con la nueva entrada
    display.value = currentInput;
}

// Función para agregar un operador matemático (+, -, *, /)
function agregarOperador(op) {
    // Si no hay nada en la entrada o el último carácter ya es un operador, no hacemos nada
    if (currentInput === '' || isNaN(currentInput.slice(-1))) {
        return;
    }
    // Agregamos el operador al final de la entrada
    currentInput += op;
    // Actualizamos el display con la entrada actualizada
    display.value = currentInput;
}

// Función para calcular el resultado de la expresión actual
function calcular() {
    try {
        // Evalúa la cadena currentInput como una expresión de JavaScript
        let resultado = eval(currentInput);
        // Muestra el resultado en el display
        display.value = resultado;
        // Guarda el resultado como nueva entrada (para permitir más operaciones)
        currentInput = resultado.toString();
    } catch (error) {
        // Si ocurre un error de evaluación (por ejemplo expresión inválida), mostramos "Error"
        display.value = "Error";
        // Reiniciamos la entrada actual para evitar más errores
        currentInput = '';
    }
}

// Función para limpiar toda la entrada y el display
function limpiar() {
    // Reinicia la entrada actual a cadena vacía
    currentInput = '';
    // Borra el contenido del display
    display.value = '';
}

// Función para borrar el último carácter digitado (un solo número u operador)
function borrarUno() {
    // Cortamos la cadena currentInput removiendo el último carácter
    currentInput = currentInput.slice(0, -1);
    // Actualizamos el display con la entrada recortada
    display.value = currentInput;
}