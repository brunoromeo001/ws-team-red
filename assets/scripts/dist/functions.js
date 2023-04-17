export function validateName(name) {
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
export function validatePassword(password) {
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
export function validateEmail(email) {
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
