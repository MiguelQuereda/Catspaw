function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
    document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  medio.currentTime=0;
  //Reproducir el vídeo
  medio.play();
  //Cambiar el valor del botón a ||
  play.value='||';
}
function accionRetrasar()
{
	//Usar propiedad .curentTime
  let actualTime = medio.currentTime;
  if(actualTime > 5){
    actualTime = actualTime - 5;
    medio.currentTime = actualTime;
  }else{
      medio.currentTime = 0;
  }
  
  //Contemplar que no existen valores negativos
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration
  let actualTime = medio.currentTime;
    if(actualTime < medio.duration +5){
        actualTime = actualTime+5;
        medio.currentTime = actualTime;
    } else{

    }
}
function accionSilenciar()
{
	//Utilizar medio.muted = true; o medio.muted = false;
    if(medio.muted == true){
        medio.muted = false;
        silenciar.value = "silenciar";
    } else{
        medio.muted = true;
        //silenciar=document.getElementById('silenciar');
        silenciar.value = "silenciado";
    }
}
function accionMasVolumen()
{
	//Contemplar que el valor máximo de volumen es 1
    if(medio.volume < 1){
        //medio.volume = medio.volume + 0.1;
        let vA = medio.volume;
        let nV = vA + 0.1;
        medio.volume = nV;
    }
    actualizarVolumen();
}
function accionMenosVolumen()
{
	//Contemplar que el valor mínimo de volumen es 0
    if(medio.volume > 0){
        let vA = medio.volume;
        let nV = vA - 0.1;
        medio.volume = nV;
    }else{
        console.log("Ya estas sin volumen");
    }

    actualizarVolumen();
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
    actualizarVolumen();
}
function actualizarVolumen(){
    let indicadorVol = document.getElementById("porVol");
    let volumen = Math.round(medio.volume*100);
    indicadorVol.innerText = " "+volumen+" %";
}

window.addEventListener('load', iniciar, false);