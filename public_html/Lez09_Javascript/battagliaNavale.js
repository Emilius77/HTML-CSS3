/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    /**
     * 
     * @param {type} righe
     * @param {type} colonne
     * @param {type} fz
     * @returns {String}
     */
     
    function creaTabellaHTML(righe, colonne, fz) {
        righe = parseInt(righe)
        colonne = parseInt(colonne)
        var html = "<table>"
        for (var i = 1; i <= righe; i++) {
            html += "<tr>"
            for (var j = 1; j <= colonne; j++) {
                html += "<td>"
                html += fz(i, j)
                html += "</td>"
            }
            html += "</tr>"
        }

        html += "</table>"
        return html
    }

    fz_colori = function (riga, colonna) {
        var r = 16
        var c = 16
        var rosso = parseInt(riga / r * 255)
        var verde = parseInt(colonna / c * 255)
        var h = "<div style=\"background-color: rgb(" + rosso + "," + verde + ",100);\">&nbsp;</div>"
        return h
    }

    
    function target() {
        var rr = document.getElementById("riga").value;
        var cc = document.getElementById("colonna").value;

        var t = creaTabellaHTML(12, 12, fz_target)

        document.getElementById("lavagna").innerHTML = t;
    }

    function fz_tabellaPitagorica(r, c) {
        return (r + 1) * (c + 1)
    }

    function fz_target(r, c) {
        var riga = document.getElementById("riga").value
        var colonna = document.getElementById("colonna").value
        if ((r == riga) && (c == colonna)) {
            return creaDivHTML("&nbsp", "", "green")
        }

        if (r == riga) {
            return creaDivHTML("", "white", "white");
        }
        if (c == colonna) {
            return creaDivHTML("", "white", "white");
        }
        return "";

    }

    function creaDivHTML(contenuto, colore, sfondo) {
        return '<div style="background-color:' + sfondo + ';color:' + colore + '">' + contenuto + '</div>'
    }

    document.getElementById("lavagna").innerHTML =
            creaTabellaHTML(12, 12, function(){return " "})
