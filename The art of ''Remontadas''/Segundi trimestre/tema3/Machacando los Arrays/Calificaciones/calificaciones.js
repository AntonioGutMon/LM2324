/*function tri(elementos){
    let todoenorden = true;
    for (var i=0;i<elementos.length;i++){  //0 es el primer elemento
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";  //Pone el mensaje en blanco de manera predeterminada    
        if (elementos[i].value == "" || (i==2)){ //comprueba si el campo esta relleno o no, y si esta marcado o no
       // Si el campo esta vacio o (el campo es la casilla de verificacion y no esta marcada) entonces...     
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            todoenorden = false;
        }  
    }
    if (!validartri1()){ //valido correo
    document.getElementById("campo1").innerHTML = "El numero es menor que 0 o mayor que 10";         
    todoenorden = false;
    }

    if (!validartri2()){ //valido correo       
        document.getElementById("campo2").innerHTML = "El numero es menor que 0 o mayor que 10"; 
        todoenorden= false;
    }

    if (!validartri3()){ //valido correo
        document.getElementById("campo3").innerHTML = "El numero es menor que 0 o mayor que 10"; 
        todoenorden = false;
    }
}

*/
var alumno = [];
var notas1 = [];
var notas2 = [];
var notas3 = [];

function guardarnombre(){
     let nombre = document.getElementById("nombrealumno").value;
    alumno.push(nombre);
}

function  tri1(){
    document.getElementById("campo1").innerHTML = ""
var n1 = parseFloat(document.getElementById("trimestre1").value);
    if(n1 === ''){
    document.getElementById("campo1").innerHTML = "El campo está vacío";    
    }
    else if(n1<0 || (n1>10)){
    document.getElementById("campo1").innerHTML = "El numero es menor que 0 o mayor que 10";
    }
    else{   
    notas1.push(n1);
    document.getElementById("campo1").innerHTML = notas1;
    }
}

function tri2(){
    let n2 = parseFloat(document.getElementById("trimestre2").value);
        if (n2 == ""){
        document.getElementById("campo2").innerHTML = "El campo está vacío";    
        }
        else if(n2<0 || (n2>10)){
        document.getElementById("campo2").innerHTML = "El numero es menor que 0 o mayor que 10";
        }
        else{   
        notas2.push(n2);
        document.getElementById("campo2").innerHTML = notas2;
        }
    /*
    let nota2good = true;
    if(nota2<0 || (nota2>10))
        nota2good = false;
    return nota2good;
    */
}

function tri3(){
    var n3 = parseFloat(document.getElementById("trimestre3").value);
    if (n3 == ""){
        document.getElementById("campo3").innerHTML = "El campo está vacío";    
        }
        else if(n3<0 || (n3>10)){
        document.getElementById("campo3").innerHTML = "El numero es menor que 0 o mayor que 10";
        }
        else{   
        notas3.push(n3);
        document.getElementById("campo3").innerHTML = notas3;
        }
    }

function media(){
    let total = 0.0;
    let suma1 = 0.0;
    let suma2 = 0.0;
    let suma3 = 0.0;
    for(i=0; i<notas1.length; i++){
        suma1 = suma1 + notas1[i];
    }
    for(b=0; b<notas2.length; b++){
        suma2 = suma2 + notas2[b];    
    }
    for(g=0; g<notas3.length; g++){
        suma3 = suma3 + notas3[g];    
    }
    total = total + suma1 + suma2 + suma3;
    document.getElementById("resultadomedia").innerHTML = "La media del alumno " + alumno + " es " + total;
}

function borrarnotas(){
    let nada = "";
    document.getElementById("notas1").innerHTML = nada;
    document.getElementById("notas2").innerHTML = nada;
    document.getElementById("notas3").innerHTML = nada;
    document.getElementById("borrado").innerHTML = "Se han borrado todas las notas correctamente"
    }