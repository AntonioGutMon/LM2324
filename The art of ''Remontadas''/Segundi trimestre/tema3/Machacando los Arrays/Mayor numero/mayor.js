var vector = [];

function anadir(){
    var n = document.getElementById("numeros").value;
    vector.push(n)
    document.getElementById("mostrarnumeros").innerHTML = vector;
}
//function mayor(vector){
function mayor(){
    let mayorn=vector[0]; //por defecto el primer elemento es mayor
    for (var i=0;i<vector.length;i++){
        if (vector[i]>mayorn)
        mayorn = vector[i];
    } 
    document.getElementById("numeromayor").innerHTML = mayorn;
}

