function validarCantidadMiembros(miembro) {
  if (miembro.length === 0) {
    return 'Debes ingresar al menos 1 miembro';
  }
  if (/[^0-9]/i.test(miembro)) {
    return 'Este campo sólo acepta números';
  }

  return '';
}

function validarEdades(edades) {
  if (edades.length === 0) {
    return 'Debes ingresar al menos 1 número';
  }
  if (/[^0-9]/i.test(edades)) {
  }

  return '';
}
