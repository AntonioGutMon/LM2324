function validar(elementos){
    let estanCorrectos = true;
    for (var i=0;i<elementos.length;i++){
        if (elementos[i].value == ""){
            alert("El campo " + elementos[i].id + " esta vacio")
        }
    }
    estanCorrectos = false;

    return estanCorrectos;
}