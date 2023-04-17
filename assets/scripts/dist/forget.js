"use strict";
const formForget = document.querySelector(".form-forget");
if (formForget) {
    formForget.addEventListener("submit", (e) => {
        e.preventDefault();
        let userItem = localStorage.getItem('user');
        let users = JSON.parse(userItem);
        let emailFind = document.getElementById("email");
        let emailEncontrado = false;
        const userFind = users.find(user => user.email === emailFind.value);
        let span = document.querySelector("#forget-msg");
        if (userFind) {
            span.innerHTML = "E-mail enviado com sucesso";
        }
        else {
            span.innerHTML = "E-mail não cadastrado";
        }
    });
}
