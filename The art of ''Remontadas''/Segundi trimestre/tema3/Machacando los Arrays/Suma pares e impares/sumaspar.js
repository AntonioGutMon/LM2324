var numerospares = [];

       function anadir() {
    var n = parseFloat(document.getElementById("npar").value);
    numerospares.push(n);
    document.getElementById("resultado").innerHTML = numerospares
}

function sumar(){
    var par = 0;
    for (i = 0 ; i<numerospares.length; i++) {
        if ( numerospares[i] % 2 == 0) {
        par += numerospares[i];
    }
}
    document.getElementById("resultado").innerHTML = par;

}
