 let saldo = 1000;
    let saldoActual=0;
    




function depositar(){
    let valor = document.getElementById("valor").value;
    if(valor <=0 ){
        alert("Porfavor ingresa un valor positivo o mayor a 0");
    }else{
        mostrarSaldo();
        suma = parseFloat(saldo) + parseFloat(valor);
        saldoActual = suma;
        saldo = saldoActual;
        alert("deposito exitoso");
        alert("saldo actual: " + saldo);
    }
}

function retirar(){
    let valor = document.getElementById("valor").value;
    if(valor <=0){
        alert("Porfavor ingresa un valor positivo o mayor a 0");
    }else if(valor > saldo){
        alert("tu saldo es unsuficiente:" + mostrarSaldo());
    }else{
        mostrarSaldo();
        resta = parseFloat(saldo) - parseFloat(valor);
        saldoActual = resta;
        saldo = saldoActual;
        alert("retiro exitoso");
        alert("saldo actual: " + saldo);
    }
}

function mostrarSaldo(){

alert(saldo);
}
