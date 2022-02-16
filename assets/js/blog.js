'use strict'
$(document).ready(function () {
  $("#fart01").click(function () {
    let x = $("#articulo01").offset();
    let top = x.top;
    $('html, body').animate({ scrollTop: top }, 'slow');
    // html body => es la zona de acción.      
  });
  $("#fart02").click(function () {
    let x = $("#articulo02").offset();
    let top = x.top;
    $('html, body').animate({ scrollTop: top }, 'slow');
    // html body => es la zona de acción.      
  });
  $("#fart03").click(function () {
    let x = $("#articulo03").offset();
    let top = x.top;
    $('html, body').animate({ scrollTop: top }, 'slow');
    // html body => es la zona de acción.      
  });
  $("#fart04").click(function () {
    let x = $("#articulo04").offset();
    let top = x.top;
    $('html, body').animate({ scrollTop: top }, 'slow');
    // html body => es la zona de acción.      
  });

 
});

