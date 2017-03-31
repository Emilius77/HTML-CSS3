/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('.pulsanteScelta').click(function () {
    var dato = $(this).attr("dato");
    var nf = "dati/" + dato + ".txt";
    $.ajax({
        "url": nf,
        "success": function (r, s, x) {
            $("#contenuto").html(r);
        },
        "error": function (x, s, y) {
            alert("Stai sbagliando qualcosa, ricontrolla ....");
        }

    });
});
