/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(".pulsanteAccesoSpento").click(function() {
  if ($(this).hasClass("acceso"))
    $(this).removeClass("acceso")
  else
    $(this).addClass("acceso")
})