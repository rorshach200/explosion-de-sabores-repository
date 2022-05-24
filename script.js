// VARIABLES
let comida1 = document.getElementById("img1");
let comida2 = document.getElementById("img2");
let comida3 = document.getElementById("img3");
let comida4 = document.getElementById("img4");
let comida5 = document.getElementById("img5");
let comida6 = document.getElementById("img6");
let comida7 = document.getElementById("img7");
let comida8 = document.getElementById("img8");
let comida9 = document.getElementById("img9");
let esmeralda = document.getElementById("esmeralda");




// JQUERY
$(document).ready (function (){
    


    $(".draggable").draggable({
        containment: "document",
    
    });

    $( ".droppable" ).droppable({
        accept:".draggable",
        drop: function( ev, ui){
        alert("Esmeralda se lo ha comido...");}
    });

});
// FUNCIONES
