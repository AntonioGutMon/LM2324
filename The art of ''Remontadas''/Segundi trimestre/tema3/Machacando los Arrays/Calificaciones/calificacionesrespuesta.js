/** 
 * Realizado por Alexandro Guerrero Fuentes
 * para calcular las calificaciones del ciclo
 */

var notas=[]; //variable igual para calificaciones

function anadir(){
    let numero = parseFloat(document.getElementById("numero").value);
    //Borramos cualquier mensaje de error previo
if (isNaN(numero)){ //Si true significa que no es un numero
        document.getElementById("aviso").innerHTML="Debes introducir un numero entre 0 y 10"
}
else{
    //compruebo que esta comprendido entre 0 y 10
    if (numero<0 || numero>10){
        document.getElementById("aviso").innerHTML="Debes introducir un numero entre 0 y 10"
    }
    else{
        notas.push(numero)
        document.getElementById("notas").innerHTML = notas;
    }
}
}

function borrar(){
    document.getElementById("aviso").innerHTML="";
    document.getElementById("notas").innerHTML="";    
    notas=[];
}

function calcularMedia(){
    let total=0.0;
    for(var i=0;i<notas.length;i++){
        total = total+notas[i];
        //total += notas[i];
    }
    total = total/notas.length;
    document.getElementById("resultado").innerHTML = total.toFixed(2);
}