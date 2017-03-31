/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("#fontSize").change(function () {
    var valore = $(this).val()
    $("body").removeClass("fontGrande fontMedio fontPiccolo")
    $("body").addClass(valore)
})
//
//$("#fontSize").change()
//
//$(".stileScrittura").click(function () {
//    var valore = $(this).val()
//    $("body").removeClass("stileScrittura1 stileScrittura2 stileScrittura3")
//    $("body").addClass(valore)
//})

var tema;
$(document).ready(function () {
    $("body").removeClass("tema1");
        $("body").removeClass("tema2");
        $("body").removeClass("tema3");
        $("body").removeClass("tema4");
        $("body").addClass(localStorage.getItem("classe"));
    $("#sfondi").click(function () {
        var numTema = $(this).val()
        tema = "tema" + numTema
        //console.log(numTema)
        $("body").removeClass("tema1");
        $("body").removeClass("tema2");
        $("body").removeClass("tema3");
        $("body").removeClass("tema4");
        $("body").addClass(tema);
        //console.log(tema);
    });
    
    $(".salva").click(function () {
        localStorage.setItem("classe", $("body").attr("class"));
        console.log(classe);
    })
})


