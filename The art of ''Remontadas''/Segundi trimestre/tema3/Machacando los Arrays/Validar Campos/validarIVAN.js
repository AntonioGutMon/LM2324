function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";        
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){
            /*Si el campo está vacio o (el campo es la casilla de verificacion y no esta marcada) entonces...*/ 
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }
        
    }
    if (!validarEmail()){ //valido el correo
        document.getElementById("campo3").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    if (!validaPassword()){ //valido el correo
        document.getElementById("campo4").innerHTML = "La contraseña no cumple los requisitos de longitud o no coinciden";
        document.getElementById("campo5").innerHTML = "La contraseña no cumple los requisitos de longitud o no coinciden";        
        estanCorrectos = false;
    } 
    if(!validarDNI()){
        document.getElementById("campo6").innerHTML = "DNI no válido (12345678X)";
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

function validaPassword(){

    let clave1 = document.getElementById("password").value;
    let clave2 = document.getElementById("password2").value;
    let passwordsOK = true; // Cumple con los requisitos establecidos

    if(clave1.length<8 || (clave1!=clave2))
        passwordsOK = false;
    return passwordsOK;
}


function validarDNI(){
    let letra = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'] 
    //var cadena = document.getElementById("dni").value; //DNI COMPLETO
    limpia();
    var numero = parseInt(cadenaLimpia.substring(0,8)); //Parte numerica
    var letraUsuario = cadena[8];//Letra escrita por el usuario
    var letraReal = letra[numero%23];//Letra real del DNI calculada segun la formula
    var dniValido = true;
    if(letraUsuario != letraReal) //Si no coincide letras es falso
        dniValido = false;
    return dniValido;
 
}

function limpia(){
    let cadena = document.getElementById("dni").value;
    let cadenaSinEspacios = cadena.replace(/ /g, "");
    let cadenaLimpia = cadenaSinEspacios.toUpperCase();
    // document.getElementById("resultado").innerHTML = cadenaLimpia;
}






    
