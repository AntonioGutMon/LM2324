var contador = 0;
var correctas = 0;

function iniciar() {
    contador = 1;
    document.getElementById("pregunta_1").style.display = "block";
}

function enviar() {
    if (contador==1) {
        let respuesta1 = document.querySelector('input[name="pregunta_1"]:checked').value;
        
        if (respuesta1 == 1) {
            correctas=correctas+1;
            contador=contador+1;
        }
        else {
            contador=contador+1;
        }
    }
    
    if (contador==2) {
        document.getElementById("pregunta_1").style.display = "none";
        document.getElementById("pregunta_2").style.display = "block";

        let respuesta2 = document.querySelector('input[name="pregunta_2"]:checked').value;
        
        if (respuesta2 == 2) {
            correctas=correctas+1;
            contador=contador+1;
        }
        else {
            contador=contador+1;
        }
    }

    if (contador==3) {
        document.getElementById("pregunta_2").style.display = "none";
        document.getElementById("pregunta_3").style.display = "block";

        let respuesta3 = document.querySelector('input[name="pregunta_3"]:checked').value;
        
        if (respuesta3 == 3) {
            correctas=correctas+1;
            contador=contador+1;
        }
        else {
            contador=contador+1;
        }
    }

    if (contador==4) {
        document.getElementById("pregunta_3").style.display = "none";
        document.getElementById("pregunta_4").style.display = "block";

        let respuesta4 = document.querySelector('input[name="pregunta_4"]:checked').value;
        
        if (respuesta4 == 2) {
            correctas=correctas+1;
            contador=contador+1;
        }
        else {
            contador=contador+1;
        }
    }

    if (contador==5) {
        document.getElementById("pregunta_4").style.display = "none";
        document.getElementById("boton").style.display = "none";
        document.getElementById("resultado_final").innerHTML = "HAS ACERTADO " + correctas + " PREGUNTAS DE 4";
    }
}