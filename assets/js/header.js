'use strict'
$(document).ready(function () {
    let menu = document.getElementById("hamburguesa");

    // method
    function toggleMenu(event) {
        this.classList.toggle('is-active');
        document.querySelector(".menuppal").classList.toggle("is_active");
        event.preventDefault();
    }

    function menuHamburguesa(event) {

        $("#menuMovil").slideToggle(300);
    }
    // event
    menu.addEventListener('click', menuHamburguesa, false);

    $("#back").css("display", "none");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 800) {
            $("#back").fadeIn("slow");
            //$("#back").css("display", "inline");   
        }
        else {
            $("#back").fadeOut("slow");
                //$("#back").css("display", "none");
        }
        
    });
    $("#back").click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

/*
 $("#back").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  */