/*
Version cutre
function ocultarr() {
    document.getElementById("rojo").style.visibility = "hidden";
    }

function ocultarv() {
    document.getElementById("verde").style.visibility = "hidden";
        }

function ocultarb() {
    document.getElementById("blue").style.visibility = "hidden";
        }
        */

 /* Version mejorada */
 function ocultar(caja){
    document.getElementById(caja).style.visibility = "hidden";
 }       

 function mostrar(caja){
    document.getElementById(caja).style.visibility = "visible";
 }       

 /* Version con un solo boton */
 function ocultar_o_mostrar(caja){
    if (document.getElementById(caja).style.visibility =="visible" || document.getElementById(caja).style.visibility =="")  //Si el valor es "visible" o "" el circulo se oculta
        document.getElementById(caja).style.visibility = "hidden";
    else
        document.getElementById(caja).style.visibility = "visible";
 }