/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(".pulsanteAccesoSpento").click(function() {
  if ($(this).hasClass("acceso"))
    $(this).removeClass("acceso");
  else
    $(this).addClass("acceso");
});

//andiamo a creare una funzione "a tempo"
//in questo caso avremo un bottone che eseguirà un comando "dopo" 2500 millisecondi

$("#music").click(function () { //qui richiamiamo l'id del bottone (music)

setTimeout ( function () {
    window.open('../ForPersonalSite/audio/Payphone.mp3', 'titolopagina', 'scrollbars=no,status=no,resizable=no,top=0,left=0,  width=300,height=120');
}, 5000);

});

//andiamo a creare una funzione che cambierà il colore della pagina ogni secondo
/**
 * 
 * @param {type} r
 * @param {type} g
 * @param {type} b
 * @returns {ritorna cambi di colore}
 */

var contatore = 0;
var idTimer = 0;

$("#color").click(function(){
    //con questo comando andiamo a "disabilitare" il tasto "color" in modo che non
    //possa essere cliccato più volte
    $("#color").attr("disabled", "disabled");
  
  idTimer = setInterval(function(){
    contatore++;
    var colore = contatore % 256;
    $("body").css({
      "background-color": rgb( colore, colore, 200)
    });
  }, 60);
  
});

/* ritorna rgb(255,255,255)*/
function rgb(r, g, b) {
  return "rgb(" + r + "," + g + "," + b +")";
}

//qui abbiamo creato un tasto (c-stop) che ferma il contatore e riattiva il 
//pulsante "color"
$("#cstop").click(function (){
    clearInterval(idTimer);
    $("#color").removeAttr("disabled");
});



    