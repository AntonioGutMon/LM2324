   var numeros=[]

function anadir(){
  var number = parseFloat(document.getElementById("n").value)
    numeros.push(number)
    document.getElementById("resultado").innerHTML=numeros
}

function sumar(){
var suma = 0
    for(i=0;i<numeros.length;i++)
    suma+= numeros[i]

    document.getElementById("resultado").innerHTML=suma
}

function multiplicar(){
var multi = 1
    for(i=0;i<numeros.length;i++)
    multi*= numeros[i]

    document.getElementById("resultado").innerHTML=multi
}