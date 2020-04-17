// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function(){

  $('.quadratino').click(function () {
    // creo variabile per singolo quadratino
    var singoloQuadratino = $(this);

    // chiamata ajax per creare numero random e aggiungere background differente a seconda del numero
    $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato) {
          console.log(data.response, data.success);
          var numRandom = data.response;
          if (numRandom <= 5){
            singoloQuadratino.addClass("giallo");
          } else {
            singoloQuadratino.addClass("verde");
          }
          singoloQuadratino.text(numRandom);
        },
        error : function (richiesta,stato,errori) {
          console.log("E' avvenuto un errore. " + errori, "stato " + stato, richiesta);
        }
    });

  });


})
