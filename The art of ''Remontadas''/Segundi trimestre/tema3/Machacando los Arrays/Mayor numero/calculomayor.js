
function mayor(vector){
    let mayor=vector[0]; //por defecto el primer elemento es mayor
   // vector.sort //ordena un vector

    for (var i=0;i<vector.length;i++){
        if (vector[i]>mayor)
        mayor = vector[i];
    } 
    return mayor;
}
    function menor(vector){
        let menor=vector[0];
    for (var i=0;i<vector.length;i++){
        if (vector[i]<menor)
        menor = vector[i];
    } 
        return menor;
}
function imprimir(vector){
    document.getElementById("resultado").innerHTML = ""; //Limpio parrafo
    for (var contador=vector.length-1;contador>=0;contador--)
    //for (var contador=0;contador<vector.length;contador++)
{
    document.getElementById('resultado').innerHTML +=  "Elemento numero " + contador + ":";
    document.getElementById("resultado").innerHTML = document.getElementById("resultado").innerHTML + vector[contador] + "<br/>";
}

}
    //document.getElementById("resultado").innerHTML = mayor;
