const pagePayment = document.querySelector(".payment") as HTMLBodyElement;
const formPayment = document.querySelector<HTMLFormElement>(".form-fields");
const inputForm = document.querySelectorAll("form-fields input") as NodeList;
const btnFixed = document.querySelector(".btn-fixed") as HTMLButtonElement;

type AnyObjects = {
  [key: string]: any;
};

let valor = {} as AnyObjects;

// FUNÇÃO QUE VALIDA NÚMERO DO CARTÃO DE CRÉDITO

function validateCreditCard(numberCreditcard: string) {
  var regexCreditcard =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/gm;
  let span = document.querySelector(".number-mensagem-erro") as HTMLSpanElement;
  span.innerHTML = "";

  let numberValido = regexCreditcard.test(numberCreditcard);
  if (!numberValido || numberCreditcard == "") {
    span.innerHTML = "Número de cartão inválido";
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}

// FUNÇÃO QUE VALIDA DATA DE EXPIRAÇÃO

function validateExpiryCreditCard(ExpiryDate: string) {
  var regexExpiry = /^(0[1-9]|1[0-2])(\/|-)([0-9]{4})$/gm;
  let span = document.querySelector(".expiry-mensagem-erro") as HTMLSpanElement;
  span.innerHTML = "";

  let expiryValido = regexExpiry.test(ExpiryDate);
  if (!expiryValido || ExpiryDate == "") {
    span.innerHTML = "Informe uma data correta";
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}

// FUNÇÃO VALIDA NÚMERO MÍNIMO DE 3 CARACTERES PARA SENHA
function validateCvv(cvv: string) {
  let span = document.querySelector(".cvv-mensagem-erro") as HTMLSpanElement;
  if (cvv.length < 3 || cvv == "") {
    span.innerHTML = "O CVV deve ter no mínimo 3 caracteres";
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}

// FUNÇÃO QUE VALIDA O NOME: NÃO ACEITA NÚMEROS NEM VAZIO
function validateNome(name: string) {
  let span = document.querySelector(".name-mensagem-erro") as HTMLSpanElement;
  let regexName = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
  let nomeValido = name.split(/ +/).every((parte) => regexName.test(parte));
  span.innerHTML = "";
  if (name == "" || !nomeValido) {
    span.innerHTML = "Nome não é válido";
    name = "";
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
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

//     // The result can be accessed through the `m`-variable.
//     m.forEach((match, groupIndex) => {
//         console.log(`Found match, group ${groupIndex}: ${match}`);
//     });
// }
