"use strict";
const pageAuth = document.querySelector("#body-auth");
const formAuth = document.querySelector(".form-auth");
if (formAuth) {
    formAuth.addEventListener("submit", (e) => {
        e.preventDefault();
        let userLocal = localStorage.getItem('user');
        let users = userLocal ? JSON.parse(userLocal) : [];
        let emailUser = document.getElementById("email");
        let passwordUser = document.getElementById("password");
        const userLogin = users.find((user) => user.email === emailUser.value && user.password === passwordUser.value);
        if (userLogin) {
            sessionStorage.setItem("isLoged", JSON.stringify({
                isLoged: true,
                idUser: userLogin?.id,
            }));
            window.location.href = "index.html";
        }
        else {
            alert("Usuário ou senha inválido");
        }
    });
}
