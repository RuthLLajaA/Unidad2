//Conociendo el ciclo for
function saludar(){
    var nombre=document.getElementById("nombre").value;
var saludo="Hola, ¿Qué tal?";
for(var i=0;i<3;i++){
    var mensaje=`${saludo} ${nombre} ${i}`;
   alert(mensaje); 
}   
}

function saludar1(){
    var nombre=document.getElementById("nombre").value;
    var saludo=["Buenos días","Bunas tardes","Buenas noches"];
    for(var i=0;i<saludo.length;i++){
    var mensaje=`${saludo[i]} ${nombre}`;
   alert(mensaje); 
}   
}