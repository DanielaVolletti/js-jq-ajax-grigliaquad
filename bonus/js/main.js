// Griglia 6x6,
// ad ogni click (su ogni rettangolino) parte una richiesta AJAX che prende un numero random da 1 a 9 (primo end-point della API in slide).
// Se il num ritornato è <= 5 il quadrato diventa giallo,
// se è > di 5 il quadrato diventa verde.
// Il numero ottenuto appare al centro del quadrato
$(document).ready(function(){

  // handlebars per creare dinamicamente una riga di quadratini
  var source = $('#quadrato-template').html();
  var template = Handlebars.compile(source);
  var context = {"riga": "row", "quadrato": "quadratino"};
  var html = template(context);

  // con un ciclo creo dinamicamente una griglia 6X6
  for(var i = 0; i < 6; i++){
    $('.contenitore-griglia').append(html);
  };

  // evento click
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
          if (singoloQuadratino.hasClass("active")){
            alert("Hai già cliccato!");
          } else if (numRandom <= 5){
            singoloQuadratino.addClass("giallo active");
          } else {
            singoloQuadratino.addClass("verde active");
          }
          singoloQuadratino.text(numRandom);
        },
        error : function (richiesta,stato,errori) {
          console.log("E' avvenuto un errore. " + errori, "stato " + stato, richiesta);
        }
    });

  });


})
