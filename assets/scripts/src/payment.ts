const pagePayment = document.querySelector(".payment") as HTMLBodyElement;
const formPayment = document.querySelector<HTMLFormElement>("#formPayment");
const inputForm = document.querySelectorAll("form-fields input") as NodeList;
const btnFixed = document.querySelector(".btn-fixed") as HTMLButtonElement;

type AnyObjects = {
  [key: string]: any;
};

let valor = {} as AnyObjects;

// FUNÇÃO QUE VALIDA NÚMERO DO CARTÃO DE CRÉDITO

function validateCreditCard(numberCreditcard: string) {
  let regexCreditcard =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/gm;
  let span = document.querySelector(".number-erro") as HTMLSpanElement;  

  let numberValido = regexCreditcard.test(numberCreditcard);
  if (!numberValido || numberCreditcard == "") {
    span.innerHTML = "Número de cartão inválido";
    
  } else {
    span.innerHTML = "";
    
  }
}

// FUNÇÃO QUE VALIDA DATA DE EXPIRAÇÃO

function validateExpiryCreditCard(expiryDate: string) {
  const today = new Date();
  let parts = expiryDate.split("/");
  const data = new Date(parseInt(parts[1]), parseInt(parts[0]) -1, 30);

  let regexExpiry = /^(0[1-9]|1[0-2])(\/|-)([0-9]{4})$/gm;
  let span = document.querySelector(".expiry-erro") as HTMLSpanElement;
  
  let expiryValido = regexExpiry.test(expiryDate);
  if (!expiryValido || expiryDate == "") {
    span.innerHTML = "Data inválida";
    
  }else if (data < today){
    span.innerHTML = "Cartão vencido";
  }
  else {
    span.innerHTML = "";
    
  }
}

// FUNÇÃO VALIDA NÚMERO MÍNIMO DE 3 CARACTERES PARA SENHA
function validateCvv(cvv: string) {
  let span = document.querySelector(".cvv-erro") as HTMLSpanElement;  
  if (
    cvv.length < 3 
    || cvv == ""
    || !parseInt(cvv)
  ) {
    span.innerHTML = "CVV inválido";
  } 
  else{
    span.innerHTML = "";
  }
}

// FUNÇÃO QUE VALIDA O NOME: NÃO ACEITA NÚMEROS NEM VAZIO
function validateNome(name: string) {
  let span = document.querySelector(".name-erro") as HTMLSpanElement;
  let regexName = /^[a-záàâãéèêíïóôõöúçñ ]+$/i;
  let nomeValido = name.split(/ +/).every((parte) => regexName.test(parte));
  span.innerHTML = "";
  if (name == "" || !nomeValido) {
    span.innerHTML = "Nome inválido";    
    
  } else {
    span.innerHTML = "";
    
  }
}

if (formPayment) {
  let numberCard = document.getElementById("number") as HTMLInputElement;
  let expiryCard = document.getElementById("expiry") as HTMLInputElement;
  let cvvCard = document.getElementById("cvv") as HTMLInputElement;
  let nameCard = document.getElementById("name") as HTMLInputElement;
  let documentCard = document.getElementById("document") as HTMLInputElement;

  nameCard.addEventListener("blur", (e) => {
    validateNome(nameCard.value)
  })

  expiryCard.addEventListener("blur", (e) => {
    validateExpiryCreditCard(expiryCard.value)    
  })  

  numberCard.addEventListener("blur", (e) => {
    validateCreditCard(numberCard.value)    
  })  

  cvvCard.addEventListener("blur", (e) => {
    validateCvv(cvvCard.value)
  })

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
