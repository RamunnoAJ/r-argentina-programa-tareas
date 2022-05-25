document.querySelector("#enviar").onclick = function () {
  const primerNombreUsuario = document.querySelector(
    "#primer-nombre-usuario"
  ).value;
  const segundoNombreUsuario = document.querySelector(
    "#segundo-nombre-usuario"
  ).value;
  const apellidoUsuario = document.querySelector("#apellido-usuario").value;

  document.querySelector("#respuesta").value = nombreUsuarioCompleto(
    primerNombreUsuario,
    segundoNombreUsuario,
    apellidoUsuario
  );

  document.querySelector(
    "#titulo"
  ).innerText = `Bienvenido ${nombreUsuarioCompleto(
    primerNombreUsuario,
    segundoNombreUsuario,
    apellidoUsuario
  )}!`;
  return false;
};

function nombreUsuarioCompleto(
  primerNombreUsuario,
  segundoNombreUsuario,
  apellidoUsuario
) {
  return `${primerNombreUsuario} ${segundoNombreUsuario} ${apellidoUsuario}`;
}
