const submitFunction = (event) => {
  if (!validarFormulario()) {
    event.preventDefault(); //para que no recargue la pagina
  } else {
    event.preventDefault();

    console.log(
      'Los datos enviados fueron: \n' +
      'Nombre: ' + document.getElementById('nombre').value + '\n' +
      'Apellido: ' + document.getElementById('apellido').value + '\n' +
      'Documento: ' + document.getElementById('documento').value + '\n' +
      'Email: ' + document.getElementById('email').value + '\n' +
      'Edad: ' + document.getElementById('edad').value + '\n' +
      'Actividad: ' + document.getElementById('actividad').value + '\n' +
      'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n'
    )
  }
};

document
  .getElementById("formulario")
  .addEventListener("submit", submitFunction);

function validarFormulario() {
  // Esto valida los campos de texto
  const camposTexto = document.querySelectorAll('input[type="text"]');
  let validacionCorrecta = true;

  camposTexto.forEach((campo) => {
    let errorCampo = document.getElementById(
      "error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)
    ); // error + id con la primera en mayúscula
    if (campo.value.length == "") {
      mostrarError(errorCampo, "¡Este campo es requerido!");
      validacionCorrecta = false;
    } else if (campo.value.length > 0 && campo.value.length < 3) {
      mostrarError(errorCampo, "¡Este campo debe tener al menos 3 caracteres!");
      validacionCorrecta = false;
    } else {
      ocultarError(errorCampo);
    }
  });

  //   Validar email
  const email = document.getElementById("email");
  let errorEmail = document.getElementById("errorEmail");
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    // Este regex es para validar un email
    ocultarError(errorEmail);
  } else {
    mostrarError(errorEmail, "¡Por favor, introduce un email valido!");
  }


  // Validar Edad

  const edad = document.getElementById("edad");
  const errorEdad = document.getElementById("errorEdad");

  if (edad.value < 18) {
    mostrarError(errorEdad, "¡Debes ser mayor de 18 años para registrarte!");
    validacionCorrecta = false;
  } else {
    ocultarError(errorEdad);
  }

  // Validar Actividad

  const actividad = document.getElementById("actividad");
  const errorActividad = document.getElementById("errorActividad");
  if (actividad.value == "") {
    mostrarError(errorActividad, "¡Debes seleccionar una actividad!");
    validacionCorrecta = false;
  } else {
    ocultarError(errorActividad);
  }

  // Validar Nivel de Estudios

  const nivelEstudio = document.getElementById("nivelEstudio");
  const errorNivelEstudio = document.getElementById("errorNivelEstudio");
  if (nivelEstudio.value == "") {
    mostrarError(errorNivelEstudio, "¡Debes seleccionar un nivel de estudios!");
    validacionCorrecta = false;
  } else {
    ocultarError(errorNivelEstudio);
  }

  // Validar Acepto Terminos

  const aceptoTerminos = document.getElementById("aceptoTerminos");
  const errorAceptoTerminos = document.getElementById("errorAceptoTerminos");

  if (!aceptoTerminos.checked) {
    mostrarError(errorAceptoTerminos, "¡Debes aceptar los terminos y condiciones!");
    validacionCorrecta = false;
  } else {
    ocultarError(errorAceptoTerminos);
  }


  return validacionCorrecta;  //Esto dira si el formulario es correcto o no

}

const mostrarError = (elemento, mensaje) => {
  elemento.textContent = mensaje;
  elemento.style.display = "block";
};

const ocultarError = (elemento) => {
  elemento.textContent = "";
  elemento.style.display = "none";
};