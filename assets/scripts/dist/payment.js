"use strict";
const pagePayment = document.querySelector(".payment");
const formPayment = document.querySelector("#formPayment");
const inputForm = document.querySelectorAll("form-fields input");
const btnFixed = document.querySelector(".btn-fixed");
let valor = {};
// FUNÇÃO QUE VALIDA NÚMERO DO CARTÃO DE CRÉDITO
function validateCreditCard(numberCreditcard) {
    let regexCreditcard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/gm;
    let span = document.querySelector(".number-erro");
    const div = document.querySelector(".field");
    const inputNumber = document.querySelector("#number");
    const labelNumber = document.querySelector("#number");
    let numberValido = regexCreditcard.test(numberCreditcard);
    if (div) {
        if (inputNumber || labelNumber) {
            if (!numberValido || numberCreditcard == "") {
                div.classList.remove("field");
                div.classList.add("field-red");
                inputNumber.innerHTML = "";
            }
            else {
                inputNumber.innerHTML = "";
                div.classList.remove("field");
                div.classList.add("field-green");
            }
        }
    }
}
//   if (!numberValido || numberCreditcard == "") {
//     //span.innerHTML = "Número de cartão inválido";
//     div.classList.remove("field");
//     div.classList.add("field-red");
//   } else {
//     // span.innerHTML = "";
//     div.classList.add(".field-green");
//   }
// }
// FUNÇÃO QUE VALIDA DATA DE EXPIRAÇÃO
function validateExpiryCreditCard(expiryDate) {
    const today = new Date();
    let parts = expiryDate.split("/");
    const data = new Date(parseInt(parts[1]), parseInt(parts[0]) - 1, 30);
    let regexExpiry = /^(0[1-9]|1[0-2])(\/|-)([0-9]{4})$/gm;
    let span = document.querySelector(".expiry-erro");
    let expiryValido = regexExpiry.test(expiryDate);
    if (!expiryValido || expiryDate == "") {
        span.innerHTML = "Data inválida";
    }
    else if (data < today) {
        span.innerHTML = "Cartão vencido";
    }
    else {
        span.innerHTML = "";
    }
}
// FUNÇÃO VALIDA NÚMERO MÍNIMO DE 3 CARACTERES PARA SENHA
function validateCvv(cvv) {
    let span = document.querySelector(".cvv-erro");
    if (cvv.length < 3 || cvv == "" || !parseInt(cvv)) {
        span.innerHTML = "CVV inválido";
    }
    else {
        span.innerHTML = "";
    }
}
// FUNÇÃO QUE VALIDA O NOME: NÃO ACEITA NÚMEROS NEM VAZIO
function validateNome(name) {
    let span = document.querySelector(".name-erro");
    let regexName = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
    let nomeValido = name.split(/ +/).every((parte) => regexName.test(parte));
    span.innerHTML = "";
    if (name == "" || !nomeValido) {
        span.innerHTML = "Nome inválido";
    }
    else {
        span.innerHTML = "";
    }
}
if (formPayment) {
    let numberCard = document.getElementById("number");
    let expiryCard = document.getElementById("expiry");
    let cvvCard = document.getElementById("cvv");
    let nameCard = document.getElementById("name");
    let documentCard = document.getElementById("document");
    nameCard.addEventListener("blur", (e) => {
        validateNome(nameCard.value);
    });
    expiryCard.addEventListener("blur", (e) => {
        validateExpiryCreditCard(expiryCard.value);
    });
    numberCard.addEventListener("blur", (e) => {
        validateCreditCard(numberCard.value);
    });
    cvvCard.addEventListener("blur", (e) => {
        validateCvv(cvvCard.value);
    });
    formPayment.addEventListener("submit", (e) => {
        e.preventDefault();
    });
}
// const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/gm;
// // Alternative syntax using RegExp constructor
// // const regex = new RegExp('^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\\d{3})\\d{11})$', 'gm')
// const str = `# American Express
// 378282246310005
// 371449635398431
// # American Express Corporate
// 378734493671000
// # Diners Club
// 30569309025904
// 38520000023237
// # Discover
// 6011111111111117
// 6011000990139424
// # JCB
// 3530111333300000
// 3566002020360505
// # MasterCard
// 5555555555554444
// 5105105105105100
// # Visaa
// 4111111111111111
// 4012888888881881
// 4222222222222
// 5162927545979699`;
// let m;
// while ((m = regex.exec(str)) !== null) {
//     // This is necessary to avoid infinite loops with zero-width matches
//     if (m.index === regex.lastIndex) {
//         regex.lastIndex++;
//     }
//     // The result can be accessed through the `m`-letiable.
//     m.forEach((match, groupIndex) => {
//         console.log(`Found match, group ${groupIndex}: ${match}`);
//     });
// }
