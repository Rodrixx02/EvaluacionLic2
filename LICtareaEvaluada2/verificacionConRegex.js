//elementos HTML
const inputEmail=document.querySelector("#inputEmail");
const inputPassword=document.querySelector("#inputPassword");
const inputTarjeta=document.querySelector("#inputTarjeta");
const inputPhoneNumber=document.querySelector("#inputPhoneNumber");
const inputFecha=document.querySelector("#inputFecha");
const btnConfirmar=document.querySelector("#btnConfirmar");

function verificarCorreo(str) {
    const escorreo=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.exec(str);
    return Boolean(escorreo);
}

function verificarContrasenia(str) {
    const escontrasenia=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.exec(str);
    return Boolean(escontrasenia);
}

function VerificarFecha(str){
    const esfecha=/^(0[1-9]|1[0-2])\/\d{2}$/.exec(str);
    return Boolean(esfecha);
}

function VerificarNumero(str){
    const esNumero=/^[26789]\d{3}[- ]?\d{4}$/.exec(str);
    return Boolean(esNumero);
}

function VerificarCard(str){
    const iscard=/^(?:[0-9]{4}[- ]?){3}[0-9]{4,7}$/.exec(str);
    return Boolean(iscard);
}

btnConfirmar.addEventListener("click", function(event) {
    event.preventDefault();
    if (!verificarCorreo(inputEmail.value)) {
        alert("Ingresar un correo válido.");
        inputEmail.value = "";
        inputEmail.focus();
        return;
    }

    if (!verificarContrasenia(inputPassword.value)) {
        alert("Ingresar una contraseña más segura (mínimo 8 caracteres, 1 mayúscula, 1 número y 1 carácter especial).");
        inputPassword.value = "";
        inputPassword.focus();
        return;
    }

    if (!verificarFecha(inputFecha.value)) {
        alert("Ingresar una fecha de vencimiento válida (MM/YY).");
        inputFecha.value = "";
        inputFecha.focus();
        return;
    }

    if (!verificarNumero(inputPhone.value)) {
        alert("Ingresar un número de teléfono válido (ej. 7123-4567).");
        inputPhone.value = "";
        inputPhone.focus();
        return;
    }

    if (!verificarCard(inputCard.value)) {
        alert("Ingresar un número de tarjeta válido.");
        inputCard.value = "";
        inputCard.focus();
        return;
    }

    // Si pasa todas las comprobaciones:
    alert("¡Todos los datos son válidos y el formulario fue enviado!");

    document.querySelector('form').reset();
});