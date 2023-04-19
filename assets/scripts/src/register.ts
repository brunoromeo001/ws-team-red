
const pageRegistration = document.querySelector(
  ".body-registration"
) as HTMLBodyElement;
const formRegister =
  document.querySelector<HTMLFormElement>(".form-registration");
const inputs = document.querySelectorAll(".form-register input") as NodeList;
const inputName = document.querySelector("#name") as HTMLInputElement;
const inputEmail = document.getElementById("#email") as HTMLInputElement;
const inputPassword = document.getElementById("#password") as HTMLInputElement;
const btnRegister = document.querySelector(
  ".send-register"
) as HTMLButtonElement;

type AnyObject = {
  [key: string]: any;
};

let values = {} as AnyObject;

// FUNÇÃO QUE VALIDA E-MAIL
function validateEmail(email: string) {
  var regexEmail = /\S+@\S+\.\S+/;
  let span = document.querySelector(".email-mensagem-erro") as HTMLSpanElement;
  span.innerHTML = "";
  let emailValido = regexEmail.test(email);
  if (!emailValido || email == "") {
    span.innerHTML = "E-mail não é válido";
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}
// FUNÇÃO QUE VALIDA O NOME: NÃO ACEITA NÚMEROS NEM VAZIO
function validName(name: string) {
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
// FUNÇÃO VALIDA NÚMERO MÍNIMO DE 6 CARACTERES PARA SENHA
function validatePassword(password: string) {
  let span = document.querySelector(
    ".password-mensagem-erro"
  ) as HTMLSpanElement;
  if (password.length < 6 || password == "") {
    span.innerHTML = "A senha deve ter no mínimo 6 caracteres";
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}
function validation(name: string, email: string, password: string) {
  validName(name);
  validateEmail(email);
  validatePassword(password);
}

// PEGANDO DADOS DO FORM
function getFormValues(formEl: HTMLFormElement) {

  const userItem: (string | number | null) = localStorage.getItem('user');
  let arrUser = [];

  if (userItem) {    
    
    const parsedItems = JSON.parse(userItem);
    
    if (Array.isArray(parsedItems)) {
      
      arrUser = parsedItems;
    }
  }

  arrUser.sort((a, b) => a.id - b.id);
  const lastItem = arrUser[arrUser.length - 1];
  const newId = lastItem ? lastItem.id + 1: 1;   

  values.id = newId;

  const form = new FormData(formEl);

  form.forEach((value, key) => {
    values[key] = value;
  });

  const { email, name, password } = values;
  
  if (
    validName(name)
    &&
    validateEmail(email)
    &&
    validatePassword(password)
  ) {

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
