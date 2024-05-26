function conversion(Formula){

        var valor = document.getElementById("cantidad").value;
        var resultado = 0;
        if (Formula=="Fahrenheit"){

                 resultado = valor * 9/5 + 32;
                  document.getElementById("resultado").innerHTML = resultado + " ºC";
        }
        else{
                resultado = valor - 32; 
                document.getElementById("resultado").innerHTML = resultado * 5/9 + " ºF";
        }
}