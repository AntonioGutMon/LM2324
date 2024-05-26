
        
let archivos=["1.png","2.png","3.png","4.png","5.png","6.png","7.png",]
function random(min,max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
}
function seleccionaimagen(){
let numero = random(0,archivos.length - 1);
document.getElementById("photos").src = "images/" + archivos[numero];

}

                function getRandomArbitrary(min, max){
                    return Math.random() * (max - min) + min;
                }
                   
                    
                    var n = parseInt(getRandomArbitrary(1,7));
                    
                    //document.write(imagen[n]);
            
                    //function pls(){
                        element = document.getElementById("photos");
                        element.src="images/1.png";
                    //}

                