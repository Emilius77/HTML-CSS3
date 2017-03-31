/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("#slideshow").data("fotoCorrente",-1);
function mostraFotoSuccessiva() {
    var fotoCorrente = $("#slideshow").data("fotoCorrente");
    var numFoto = $("#contenitore-miniatura img").length;
    var fotoSuccessiva = (fotoCorrente + 1) % numFoto;
    
    var urlFoto = $("#contenitore-miniatura img").eq(fotoSuccessiva).attr("src");
    
    /*img 2 è sopra */
    $("#imgGrande2").hide();
    $("#imgGrande2").attr("src", urlFoto);
    
    $("#imgGrande1").fadeOut(1500);
    $("#imgGrande2").fadeIn(1500, function () {
        $("#imgGrande1").attr("src", urlFoto);
        $("#imgGrande1").show();
    });
    
   // $("#imgGrande1").attr("src", urlFoto);
    
    console.log("fotoSucc: ", fotoSuccessiva, urlFoto);
    $("#slideshow").data("fotoCorrente", fotoSuccessiva);
    
    $("#contenitore-miniatura img").removeClass("selezionata");
    $("#contenitore-miniatura img").eq(fotoSuccessiva).addClass("selezionata");
};

setInterval(function() {
    mostraFotoSuccessiva();
}, 3000);
    

