/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// compila il fieldset (personal)
$('.pulsanteScelta').click(function () {
    var dato = $(this).attr("dato");
    var nf = "dati/" + dato + ".txt";
    $.ajax({
        "url": nf,

        "success": function (r, s, x) {
            $("#contenuto").html(r);
            var c = "persona = " + r;
            eval(c);

            $('#cognome').attr('value', persona.cognome);
            $('#nome').attr('value', persona.nome);
            $('#email').attr('value', persona.email);
        },
        "error": function (x, s, y) {
            alert("Stai sbagliando qualcosa, ricontrolla ....");
        }

    });
});

//crea una tabella al volo (all'interno di un div (contenuto))
$("#pulsante").click(function () {
    var comandoJs;
    var html = "<tr><th>NOME</th><th>COGNOME</th><th>E-MAIL</th></tr>";
    $.ajax({
        url: "dati/test1.txt",
        success: function (r, s, x) {
            comandoJs = "persone = " + r;
            eval(comandoJs)
            for (var i = 0; i < persone.length; i++) {
                html += "<tr>";
                html += "<td>" + persone[i].nome + "</td>";

                html += "<td>" + persone[i].cognome + "</td>";

                html += "<td>" + persone[i].email + "</td>";
                html += "</tr>";
            }
            $("#contenuto").html(html)
        },
        error: function (x, s, e) {
            alert:("errore")

        }
    })
})

//legge il contenuto della tabella creata al volo e riporta i dati su una riga (all'interno di un div (cont))
$(document).ready(function () {
    $("#contenuto").on("mouseover", "tr", function () {
        var nome = $(this).find("td").eq(0).text();
        console.log("nome")
        var cognome = $(this).find("td").eq(1).text();
        console.log("cognome")
        var mail = $(this).find("td").eq(2).text();
        console.log("mail")
        $("#cont").html(nome + "-" + cognome + "-" + mail);
        $('#nome').attr('value', nome);
        $('#cognome').attr('value', cognome);
        $('#email').attr('value', mail);
    })

})


//funzione per leggere le regioni/province
$("#regioni").change(function () {
    var regione = $(this).val()

    $.ajax({
        "url": "regioni/" + regione + ".txt",

        "success": function (r, s, x) {
            //alert(r)
            $("#province option").remove();
            var vProv = r.split("\n")
            $(vProv).each(function (i, provincia) {
                //console.log("aggiungi ", provincia)
                var opzione = $("<option>").val(provincia).html(provincia)
                $("#province").append(opzione)

            })
        },

        "error": function (e, x, y) {
        }

    })

})

//moltiplico e coloro le palline
var r, g, b;
var colori= ["blu", "arancio", "giallo", "verde", "viola", "rosso"];
var coloreGlobale;
var posizioneX;
var posizioneY;
var idAdd = 1;

function estraiColore () {
    coloreLocale = Math.floor(Math.random() * (colori.length));
    return coloreLocale;
}

function estraiTono () {
    coloreLocale = Math.floor(Math.random() * 256);
    return coloreLocale;
}

function estraiPosizione () {
    posizioneLocale = Math.floor(Math.random() * 500);
    return posizioneLocale;
}

function componiStringaColore (rosso, verde, blu) {
    return "rgb(" + rosso + "," + verde + "," + blu;
}


$(document).ready(function () {
    $(document).on("click", ".pallina", function () {
        r = estraiTono();
        g = estraiTono();
        b = estraiTono();
        posizioneX = estraiPosizione();
        posizioneY = estraiPosizione();
        var pallina = $("<div id='pallina" + idAdd + "' class='pallina'></div>");
        $(pallina).css("background-color", componiStringaColore(r, g, b));
        $(pallina).css("left", posizioneX);
        $(pallina).css("top", posizioneY);
        $("#ballbox").append(pallina);
        idAdd++;
        return false;
    });
    
    $(document).click(function () {
        //alert("£ci");
        $(".pallina").not("#pallina0").remove();
    });
});
