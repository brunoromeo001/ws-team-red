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

function getFormValues(formEl: HTMLFormElement) {
  // PEGANDO DADOS DO FORM
  const form = new FormData(formEl);
  let id: number = 1;
  values.id = 1;
  form.forEach((value, key) => {
    values[key] = value;
    console.log(values.id);
  });
  // COLOCANDO OS DADOS NO LOCAL STORAGE
  localStorage.setItem("user", JSON.stringify(values));
  return values;
}
if (formRegister) {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    const { name, email, password } = getFormValues(formRegister);
    console.log(name, email, password);
  });
}

// CONSTRIUR FUNÇÃO DE VALIDAÇÃO
// PESQUISAR REGEX PARA EMAIL, SENHA E NOME
// const { name, email, password } = values;
// function validation(nome:string, email:string, password:string){
// let msg = '';
//   if(nome == ''){
//     msg = "Por favor, informe o nome."
//   } if()

// }

// ???DÚVIDA: NÃO SOBREESCREVER OS DADOS E ENVIAR PARA UM JSON???
