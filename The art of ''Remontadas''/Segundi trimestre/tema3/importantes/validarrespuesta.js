function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){  //0 es el primer elemento
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";  //Pone el mensaje en blanco de manera predeterminada    
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){ //comprueba si el campo esta relleno o no, y si esta marcado o no
       // Si el campo esta vacio o (el campo es la casilla de verificacion y no esta marcada) entonces...     
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }  
    }
    if (!validarEmail()){ //valido correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    
    if (!validaPasswords()){ //si no son validas las contraseñas, es decir la funcion es distinta de esta
    document.getElementById("campo4").innerHTML = "La contraseña no cumple con requisitos de longitud o no coinciden";        
    document.getElementById("campo5").innerHTML = "La contraseña no cumple con requisitos de longitud o no coinciden";
    estanCorrectos = false;
    }
    if (!validarDNI()){ //valido contraseñas
        document.getElementById("campo6").innerHTML = "DNI no valido +(12345678X)";        
        estanCorrectos = false;
        }
    return estanCorrectos;
}

/* Función validarEmail tomada de:
* https://www.coderbox.net/blog/validar-email-usando-javascript-y-expresiones-regulares/
*/
function validarEmail(){              
	var valido;
	var emailField = document.getElementById('email');
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( validEmail.test(emailField.value) ){
		valido=true;
	}else{
        valido=false;
	}
    return valido;
} 

function validaPasswords(){
//return (document.getElementById("password1").value == document.getElementById("password2").value) && document.getElementById("password2").value.length>=8;
let clave1 = document.getElementById("password1").value;
let clave2 = document.getElementById("password2").value;
let passwordsOK = true; //Cumple con los requisitos establecidos 
// por defecto es true 
if (clave1.length<8 || (clave1!=clave2)) //cuando una de las dos sea verdadera, esta mal
    passwordsOK = false;
return passwordsOK;
}

function validarDNI(){
    let letra =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var cadena = document.getElementById("dni").value; //DNI completo 
    let cadenaSinEspacios = cadena.replace(" ", "");   
    let cadenaLimpia = cadenaSinEspacios.toUpperCase();
    var numero = parseInt(cadena.substring(0,8)); //Parte numerica
    var letraUsuario = cadena [8]; //Letra escrita por el usuario
    var letraReal = letra[numero%23]; // Letra "real" del DNI calculada segun formula
    var dniValido =true;
    if (letraUsuario!=letraReal)  // Si no coincide letras es falso
        dniValido = false;
    return dniValido;
}

/*
 Ejercicio conviertan a mayúsculas una cadena y eliminen sus posibles espacios.
*/

// && para que se cumplan dos condiciones
// or se debe cumplir una de dos cosas sea verdadera 
// || significa "o"


/*No verdadero = !true = false = falso
No falso = !false = true = verdadero

Opreacion O (OR) ||
--------------------
Verdadero o verdadero = verdadero
verdadero o falso = verdaderos
Falso o verdadero= verdadero
Falso o Falso= falso

Operacion Y (AND) &&
----------------------
Verdadero y verdadero= verdadero
verdadero y falso = falso
Falso y verdadero = falso
falso y falso = falso*/