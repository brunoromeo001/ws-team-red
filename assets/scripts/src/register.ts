const pageRegistration = document.querySelector(
  ".body-registration"
) as HTMLBodyElement;
const formRegister =
  document.querySelector<HTMLFormElement>(".form-registration");
const inputs = document.querySelectorAll(".form-register input") as NodeList;
const btnRegister = document.querySelector(
  ".send-register"
) as HTMLButtonElement;

type AnyObject = {
  [key: string]: any;
};

let values = {} as AnyObject;

// VALIDA REGEX DO EMAIL E SE FOI PREENCHIDO
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
function validateName(name: string) {
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
// FUNÇÃO VALIDA QUANTIDADE DE 6 A 10 CARACTERES PARA SENHA
function validatePassword(password: string) {
  let span = document.querySelector(
    ".password-mensagem-erro"
  ) as HTMLSpanElement;
  if (password.length < 6 || password.length > 10 || password == "") {
    span.innerHTML = "A senha deve ter de 6 a 10 caracteres";
    return false;
  } else {
    span.innerHTML = "";
    return true;
  }
}

function getFormValues(formEl: HTMLFormElement) {
  const userItem: string | number | null = localStorage.getItem("user");
  let arrUser = [];

  if (userItem) {
    const parsedItems = JSON.parse(userItem);

    if (Array.isArray(parsedItems)) {
      arrUser = parsedItems;
    }
  }
  // CRIANDO ID

  arrUser.sort((a, b) => a.id - b.id);
  const lastItem = arrUser[arrUser.length - 1];
  const newId = lastItem ? lastItem.id + 1 : 1;
  values.id = newId;

  // PEGANDO OS DADOS DO FORM

  const form = new FormData(formEl);

  form.forEach((value, key) => {
    values[key] = value;
  });

  const { email, name, password } = values;

  // VERIFICANDO SE EMAIL JÁ FOI CADASTRADO
  const emailExists = arrUser.some((values) => values.email === email);

  if (emailExists) {
    let span = document.querySelector(
      ".email-mensagem-erro"
    ) as HTMLSpanElement;
    span.innerHTML = "E-mail já cadastrado";
    const emailInput = document.querySelector("#email") as HTMLInputElement;
    emailInput.value = " ";
    return;
  }
  // SE OS DADOS ESTÃO VÁLIDOS ARMAZENA NO LOCALSTORAGE

  if (
    validateName(name) &&
    validateEmail(email) &&
    validatePassword(password)
  ) {
    arrUser.push(values);
    localStorage.setItem("user", JSON.stringify(arrUser));
    alert("Cadastro realizado!");
    window.location.href = "auth.html";
  }
}

if (formRegister) {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    getFormValues(formRegister);
  });
}
