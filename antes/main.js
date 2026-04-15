console.log("hooa mundo");
//tipos de variables
let nombre= "Smauel"
let edad= 15;
let esEstudiante = true;

//var en variables
var ciudad = "madrid";
var codigoPostal = "28001";
var pais = "españa";
var edad2 = 45;
var ex_Empleado= false;
//constantes
const PI = 3.16;

document.getElementById('nuevo').innerHTML='hola mumdito mundero';

//funcion para cambiar el color del fondo
function cambiarColorFindo(){
    document.getElementById('nuevo').style.backgroundColor='yellow';
}

//funcion para pedir al usuario u precio y cantidad y mostrar el total
function calcularTotal(){
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let total = parseFloat(precio)*parseFloat(cantidad);
    alert("el total a pagar es" + total);
}



function ingresarProductos() {
    
    // Obtener valores
    let nombre1 = document.getElementById('nombre1').value || "Producto 1";
    let precio1 = parseFloat(document.getElementById('precio1').value) || 0;
    let cantidad1 = parseFloat(document.getElementById('cantidad1').value) || 0;

    let nombre2 = document.getElementById('nombre2').value || "Producto 2";
    let precio2 = parseFloat(document.getElementById('precio2').value) || 0;
    let cantidad2 = parseFloat(document.getElementById('cantidad2').value) || 0;

    let nombre3 = document.getElementById('nombre3').value || "Producto 3";
    let precio3 = parseFloat(document.getElementById('precio3').value) || 0;
    let cantidad3 = parseFloat(document.getElementById('cantidad3').value) || 0;

    // Calcular subtotales
    let total1 = precio1 * cantidad1;
    let total2 = precio2 * cantidad2;
    let total3 = precio3 * cantidad3;

    let subtotal = total1 + total2 + total3;
    let iva = subtotal * 0.15;
    let totalConIva = subtotal + iva;

    // Alert principal (mantengo tu formato lo más parecido posible)
    alert("Productos: " + nombre1 + " | " + nombre2 + " | " + nombre3 + 
          "\nSubtotal: $" + subtotal.toFixed(2) + 
          "\nIVA (15%): $" + iva.toFixed(2) + 
          "\nTotal con IVA: $" + totalConIva.toFixed(2));

    // Descuento del 25%
    if (cantidad1 > 10 || cantidad2 > 10 || cantidad3 > 10) {
        let descuento = totalConIva * 0.25;
        let totalFinal = totalConIva - descuento;
        
        alert("¡Descuento del 25% aplicado!" + 
              "\nTotal Final: $" + totalFinal.toFixed(2));
    }
}