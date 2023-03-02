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

export { calcularMayorNumero, calcularMenorNumero, calcularPromedioNumero }
