/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector(".siguiente").onclick = function () {
  const $miembrosFamilia = document.querySelector(".miembros-familia");
  const miembrosFamlia = Number($miembrosFamilia.value);

  borrarMiembrosAnteriores();
  crearMiembros(miembrosFamlia);

  return false;
};

function crearMiembros(miembrosFamilia) {
  for (let i = 0; i < miembrosFamilia; i++) {
    crearMiembro(i);
  }
}

function crearMiembro(indice) {
  const $div = document.createElement("div");
  $div.className = "miembro";

  const $label = document.createElement("label");
  $label.textContent = `Edad del miembro ${indice + 1}`;
  const $input = document.createElement("input");
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  const $miembros = document.querySelector(".miembros");
  $miembros.appendChild($div);
}

function borrarMiembrosAnteriores() {
  const $miembros = document.querySelectorAll(".miembro");
  for (let i = 0; i < $miembros.length; i++) {
    $miembros[i].remove();
  }
}

document.querySelector(".limpiar").onclick = function () {
  borrarMiembrosAnteriores();
};

function obtenerEdadMiembros() {
  const $miembros = document.querySelectorAll(".miembro input");
  const edades = [];

  for (let i = 0; i < $miembros.length; i++) {
    edades.push(Number($miembros[i].value));
  }

  return edades;
}

document.querySelector(".calcular").onclick = function () {
  const edades = obtenerEdadMiembros();

  calcularMayorEdad(edades);

  const $mayorEdad = document.querySelector("#mayor-edad");
  $mayorEdad.textContent = `${calcularMayorEdad(edades)}`;

  const $menorEdad = document.querySelector("#menor-edad");
  $menorEdad.textContent = `${calcularMenorEdad(edades)}`;

  const $promedioEdad = document.querySelector("#edad-promedio");
  $promedioEdad.textContent = `${calcularPromedioEdad(edades)}`;
};

function calcularMayorEdad(array) {
  let mayorEdad = 0;
  for (let i = 0; i < array.length; i++) {
    let edadMiembro = Number(array[i]);

    if (edadMiembro > mayorEdad) {
      mayorEdad = edadMiembro;
    }
  }

  return mayorEdad;
}

function calcularMenorEdad(array) {
  let menorEdad = array[0];
  for (let i = 0; i < array.length; i++) {
    let edadMiembro = Number(array[i]);

    if (edadMiembro < menorEdad) {
      menorEdad = edadMiembro;
    }
  }

  return menorEdad;
}

function calcularPromedioEdad(array) {
  let promedioEdad = 0;
  for (let i = 0; i < array.length; i++) {
    promedioEdad += Number(array[i]);
  }

  return promedioEdad / array.length;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
