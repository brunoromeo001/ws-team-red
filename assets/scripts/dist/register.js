"use strict";
const pageRegistration = document.querySelector(".body-registration");
const formRegister = document.querySelector(".form-registration");
const inputs = document.querySelectorAll(".form-register input");
const inputName = document.querySelector("#name");
const inputEmail = document.getElementById("#email");
const inputPassword = document.getElementById("#password");
const btnRegister = document.querySelector(".send-register");
let values = {};
// FUNÇÃO QUE VALIDA E-MAIL
function validateEmail(email) {
    var regexEmail = /\S+@\S+\.\S+/;
    let span = document.querySelector(".email-mensagem-erro");
    span.innerHTML = "";
    let emailValido = regexEmail.test(email);
    if (!emailValido || email == "") {
        span.innerHTML = "E-mail não é válido";
        return false;
    }
    else {
        span.innerHTML = "";
        return true;
    }
}
// FUNÇÃO QUE VALIDA O NOME: NÃO ACEITA NÚMEROS NEM VAZIO
function validName(name) {
    let span = document.querySelector(".name-mensagem-erro");
    let regexName = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
    let nomeValido = name.split(/ +/).every((parte) => regexName.test(parte));
    span.innerHTML = "";
    if (name == "" || !nomeValido) {
        span.innerHTML = "Nome não é válido";
        name = "";
        return false;
    }
    else {
        span.innerHTML = "";
        return true;
    }
}
// FUNÇÃO VALIDA NÚMERO MÍNIMO DE 6 CARACTERES PARA SENHA
function validatePassword(password) {
    let span = document.querySelector(".password-mensagem-erro");
    if (password.length < 6 || password == "") {
        span.innerHTML = "A senha deve ter no mínimo 6 caracteres";
        return false;
    }
    else {
        span.innerHTML = "";
        return true;
    }
}
function validation(name, email, password) {
    validName(name);
    validateEmail(email);
    validatePassword(password);
}
// PEGANDO DADOS DO FORM
function getFormValues(formEl) {
    const userItem = localStorage.getItem('user');
    let arrUser = [];
    if (userItem) {
        const parsedItems = JSON.parse(userItem);
        if (Array.isArray(parsedItems)) {
            arrUser = parsedItems;
        }
    }
    arrUser.sort((a, b) => a.id - b.id);
    const lastItem = arrUser[arrUser.length - 1];
    const newId = lastItem ? lastItem.id + 1 : 1;
    values.id = newId;
    const form = new FormData(formEl);
    form.forEach((value, key) => {
        values[key] = value;
    });
    const { email, name, password } = values;
    if (validName(name)
        &&
            validateEmail(email)
        &&
            validatePassword(password)) {
        arrUser.push(values);
        // COLOCANDO OS DADOS NO LOCAL STORAGE
        localStorage.setItem("user", JSON.stringify(arrUser));
    }
}
if (formRegister) {
    formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        getFormValues(formRegister);
    });
}
