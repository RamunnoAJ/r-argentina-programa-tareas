/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

const $botonSiguiente = document.querySelector('#boton-siguiente')
$botonSiguiente.addEventListener('click', () => {
  const $miembrosFamilia = document.querySelector('.miembros-familia')
  const miembrosFamilia = $miembrosFamilia.value

  borrarMiembrosAnteriores()
  crearMiembros(miembrosFamilia)
  if (miembrosFamilia) {
    mostrarBotones()
  }
  validarSiguiente()

  $miembrosFamilia.value = ''

  return ''
})

function mostrarBotones() {
  document.querySelector('#calcular').className = ''
  document.querySelector('#limpiar').className = ''
}

function ocultarBotones() {
  document.querySelector('#calcular').className = 'oculto'
  document.querySelector('#limpiar').className = 'oculto'
}

function mostrarResultados() {
  document.querySelector('#calculos').className = ''
}

function ocultarResultados() {
  document.querySelector('#calculos').className = 'oculto'
}

function crearMiembros(miembrosFamilia) {
  for (let i = 0; i < miembrosFamilia; i++) {
    crearMiembro(i)
  }
}

function crearMiembro(indice) {
  const $div = document.createElement('div')
  $div.className = 'miembro'

  const $label = document.createElement('label')
  $label.textContent = `Edad del miembro ${indice + 1}`
  const $input = document.createElement('input')
  $input.type = 'number'
  $input.className = 'edad-miembro'
  $input.min = '0'
  $input.name = 'edad'

  $div.appendChild($label)
  $div.appendChild($input)

  let $miembros = document.querySelector('.miembros')
  $miembros.appendChild($div)
}

function borrarMiembrosAnteriores() {
  const $miembros = document.querySelectorAll('.miembro')
  for (let i = 0; i < $miembros.length; i++) {
    $miembros[i].remove()
  }
}

document.querySelector('#limpiar').onclick = function () {
  borrarMiembrosAnteriores()
  ocultarBotones()
  ocultarResultados()
}

function obtenerEdadMiembros() {
  const $miembros = document.querySelectorAll('.miembro .edad-miembro')
  const edades = []

  for (let i = 0; i < $miembros.length; i++) {
    if ($miembros[i] !== '') {
      edades.push(Number($miembros[i].value))
    }
  }

  return edades
}

document.querySelector('#calcular').onclick = function () {
  const edades = obtenerEdadMiembros()
  const $mayorEdad = document.querySelector('#mayor-edad')
  $mayorEdad.textContent = `${calcularMayorNumero(edades)}`
  const $menorEdad = document.querySelector('#menor-edad')
  $menorEdad.textContent = `${calcularMenorNumero(edades)}`
  const $promedioEdad = document.querySelector('#edad-promedio')
  $promedioEdad.textContent = `${calcularPromedioNumero(edades)}`

  mostrarResultados()
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $form = document.querySelector('#calculador-edades')

function validarCantidadMiembros(miembro) {
  if (miembro === '') {
    return 'Debes ingresar al menos 1 miembro'
  }
  if (/[^0-9]/i.test(miembro)) {
    return 'Este campo sólo acepta números'
  }

  return ''
}

// function validarEdades(edades) {
//   if (edades.length === 0) {
//     return 'Debes ingresar al menos 1 número';
//   }
//   if (/[^0-9]/i.test(edades)) {
//   }

//   return '';
// }

function validarSiguiente() {
  const cantidadMiembros = document.querySelector('.miembros-familia').value

  const errorMiembros = validarCantidadMiembros(cantidadMiembros)

  const errores = {
    miembros: errorMiembros
  }

  console.log(errores)

  manejarErrores(errores)
}

function manejarErrores(errores) {
  errorMiembros = errores.miembros

  if (errorMiembros) {
    document.querySelector('.miembros-familia').className = 'error'
  } else {
    document.querySelector('.miembros-familia').className = ''
  }
}

function calcularMayorNumero(array) {
  let mayorNumero = 0
  for (let i = 0; i < array.length; i++) {
    let numeroMiembro = Number(array[i])

    if (numeroMiembro > mayorNumero) {
      mayorNumero = numeroMiembro
    }
  }

  return mayorNumero
}

function calcularMenorNumero(array) {
  let menorNumero = array[0]
  for (let i = 0; i < array.length; i++) {
    let numeroMiembro = Number(array[i])

    if (numeroMiembro < menorNumero) {
      menorNumero = numeroMiembro
    }
  }

  return menorNumero
}

function calcularPromedioNumero(array) {
  let promedioNumero = 0
  for (let i = 0; i < array.length; i++) {
    promedioNumero += Number(array[i])
  }

  return promedioNumero / array.length
}
