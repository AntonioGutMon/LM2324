function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){  //0 es el primer elemento
        document.getElementById("campo"+(i+1).toString()).innerHTML = "";    
        if (elementos[i].value == "" || (i==6 && !elementos[i].checked)){ 
            document.getElementById("campo"+(i+1).toString()).innerHTML = "El campo " + elementos[i].id + " está vacío";
            estanCorrectos = false;
        }  
    }
    if (!validarEmail()){ 
        document.getElementById("campo4").innerHTML = "Email no válido";        
        estanCorrectos = false;
    }
    
    if (!validaPasswords()){ 
        document.getElementById("campo6").innerHTML = "La contraseña no cumple con requisitos de longitud o no coinciden";        
        document.getElementById("campo9").innerHTML = "La contraseña no cumple con requisitos de longitud o no coinciden";
        estanCorrectos = false;
    }
    if (!validarDNI()){ 
        document.getElementById("campo3").innerHTML = "DNI no valido +(12345678X)";        
        estanCorrectos = false;
        }
    return estanCorrectos;
}


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
    let clave1 = document.getElementById("password1").value;
    let clave2 = document.getElementById("password2").value;
    let passwordsOK = true; 
    if (clave1.length<8 || (clave1!=clave2)) 
        passwordsOK = false;
    return passwordsOK;
    }

function validarDNI(){
    let letra =['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var cadena = document.getElementById("dni").value; 
    let cadenaSinEspacios = cadena.replace(" ", "");   
    let cadenaLimpia = cadenaSinEspacios.toUpperCase();
    var numero = parseInt(cadena.substring(0,8)); 
    var letraReal = letra[numero%23]; 
    var dniValido =true;
    if (letraUsuario!=letraReal)  
        dniValido = false;
    return dniValido;
}


function guardar(){
    var guarda=document.getElementById("verificacion").value
    if(guarda.checked){
        localStorage.setItem("datos",JSON.stringify(datos))
    }

}

function cargar(){
    let objeto=localStorage.getItem("datos")
    if (objeto!=null){
        let objetoAux = JSON.parse(parseado);
        document.getElementById("nombre").innerHTML = objetoAux.nombre;
        document.getElementById("apellidos").innerHTML = objetoAux.apellidos;
        document.getElementById("dni").innerHTML = objetoAux.dni;
    }
}

window.onload=cargar();

/*
/A-Z.test(clave1) //Si devuelve true es mayuscula
/a-z.test(clave2) //si devuelve true es minuscula
/0-9.test(clave3) //si devuelve true tiene numeros
*/