//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const botonCalcular = document.querySelector("#boton-calcular");

botonCalcular.onclick = function () {
  let hsVideo = document.querySelectorAll(".horas-video");
  let minVideo = document.querySelectorAll(".minutos-video");
  let segVideo = document.querySelectorAll(".segundos-video");

  let horasTotales = 0;
  let minutosTotales = 0;
  let segundosTotales = 0;

  for (let i = 0; i < segVideo.length; i++) {
    segundosTotales = segundosTotales + Number(segVideo[i].value);
  }

  for (let i = 0; i < minVideo.length; i++) {
    minutosTotales = minutosTotales + Number(minVideo[i].value);
  }

  for (let i = 0; i < hsVideo.length; i++) {
    horasTotales = horasTotales + Number(hsVideo[i].value);
  }

  while (segundosTotales >= 60) {
    segundosTotales = segundosTotales - 60;
    minutosTotales = minutosTotales + 1;
  }

  while (minutosTotales >= 60) {
    minutosTotales = minutosTotales - 60;
    horasTotales = horasTotales + 1;
  }

  let tiempoTotal = document.querySelector("#tiempo-total");
  tiempoTotal.textContent = `${horasTotales}hs ${minutosTotales}min ${segundosTotales}seg`;

  return false;
};
