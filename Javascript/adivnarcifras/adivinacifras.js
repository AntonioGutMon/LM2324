function numero_random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    document.getElementById("numero").innerHTML = Math.floor(Math.random() * (max - min) + min);
}

function comprobar() {
    var numeroEscrito = document.getElementById("escribir").value
    var numeroGenerado = document.getElementById("numero").value
    if (numeroEscrito = numeroGenerado ) {
        
    }
}