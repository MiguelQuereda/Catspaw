'use strict'
    function botonAudio($id,$nombreArchivo){
        let boton = document.getElementById("reproductor"+$id);
    let audioEtiqueta = document.getElementById("audio"+$id);

    boton.addEventListener("click", function() {
      audioEtiqueta.setAttribute("src","./assets/audio/"+$nombreArchivo);
      audioEtiqueta.play();
      console.log(`Reproduciendo: ${audioEtiqueta.src}`);
    });
    }

    botonAudio("1","ronroneoShort.mp3");
    botonAudio("2","cachorroAkita.mp3");
    botonAudio("3","ronroneoShort.mp3");
    botonAudio("4","cachorroAkita.mp3");


