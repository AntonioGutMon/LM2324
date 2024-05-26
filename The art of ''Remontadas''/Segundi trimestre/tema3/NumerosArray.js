var numeros = [];

function anadir() {
    var n = parseFloat(document.getElementById("n").value);  // Parsefloat devuelve el primer numero, hace falta
    numeros.push(n);
    document.getElementById("resultado").innerHTML = numeros
}

var s=0
//La variable global solo se inicializa una vez (ejecuta una vez)

function sumar(){
    s = 0;
    for (var i = 0 ; i< numeros.length; i++) {  //i cuenta la longitud
        s += numeros[i];   //i marca la posicion del primer numero, y se suma a s;
    }                      // despues marca el segundo, y se suma, y asi hasta llegar al ultimo numero
    document.getElementById("resultado").innerHTML = s;
}

function multiplicar(){
    var m = 1;
    for (var i = 0 ; i < numeros.length; i++) {
        m*= numeros[i];
    }
    document.getElementById("resultado").innerHTML = m;
}

//i++ incrementa un numero
//for = se repite

/*
function pintarArray(){
   document.getElementById("numerosanadir").innerHTML = ""; 
}

 pintarArray();

function anadir() {
    anadirelement = document.getElementById("numeros").value;
    numeros.push(anadirelement);
    pintarArray();
}


function sumar() {
    var adicion = document.getElementById("numerosanadir").value
    document.getElementById("resultado").innerHTML = "El resultado es" + adicion ;
}

function multiplicar() {
    var producto = document.getElementById("numerosanadir").value
    document.getElementById("resultado").innerHTML = "El resultado es" + producto ;
}
*/