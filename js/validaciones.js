const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const nombreValue = nombre.value.trim();
  const apellidoValue = apellido.value.trim();
  const emailValue = email.value.trim();
  const mensajeValue = mensaje.value.trim();

  if (nombreValue === "") {
    setErrorFor(nombre, "No puede dejar la casilla nombre en blanco");
  } else if (!validateName(nombreValue)) {
    setErrorFor(nombre, "Solo se aceptan letras");
  } else {
    setSuccessFor(nombre);
  }

  if (apellidoValue === "") {
    setErrorFor(apellido, "No puede dejar la casilla apellido en blanco");
  } else if (!validateName(apellidoValue)) {
    setErrorFor(apellido, "Solo se aceptan letras");
  } else {
    setSuccessFor(apellido);
  }
  if (emailValue === "") {
    setErrorFor(email, "No puede dejar el email en blanco");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "No ingreso un email válido");
  } else {
    setSuccessFor(email);
  }

  if (mensajeValue === "") {
    setErrorFor(mensaje,"No puede dejar el mensaje en blanco");
  } else {
    setSuccessFor(mensaje);
  }
}
function setErrorFor(input, message) {
  const inputContainer = input.parentElement;
  const small = inputContainer.querySelector('small');
  inputContainer.className = "inputContainer error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const inputContainer = input.parentElement;
  inputContainer.className = "inputContainer success";
}

//Valida que tiene ser un email
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

//Valida que un campo contenga solo letras (como nombre o apellido)
function validateName(nombre, apellido) {
  var patt = new RegExp("^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]{1,256}$");

  return patt.test(nombre, apellido);
}
