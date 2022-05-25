//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const numerosLista = [...document.querySelectorAll(".numero-lista")];
let nuevoArray = [];

for (let i = 0; i < numerosLista.length; i++) {
  nuevoArray.push(Number(numerosLista[i].textContent));
}

// console.log(nuevoArray);

let promedio = 0;
for (let i = 0; i < numerosLista.length; i++) {
  promedio = promedio + nuevoArray[i];
}
promedio = promedio / numerosLista.length;

document.querySelector(".numero-promedio").textContent = promedio;
// console.log(promedio);

let numeroMasGrande = nuevoArray[0];
for (let i = 0; i < numerosLista.length; i++) {
  if (nuevoArray[i] > numeroMasGrande) {
    numeroMasGrande = nuevoArray[i];
  }
}

document.querySelector(".numero-mas-grande").textContent = numeroMasGrande;
// console.log(numeroMasGrande);

let numeroMasChico = nuevoArray[0];
for (let i = 0; i < numerosLista.length; i++) {
  if (nuevoArray[i] < numeroMasChico) {
    numeroMasChico = nuevoArray[i];
  }
}

document.querySelector(".numero-mas-chico").textContent = numeroMasChico;
// console.log(numeroMasChico);
