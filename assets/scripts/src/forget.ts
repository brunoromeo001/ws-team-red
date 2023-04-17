const formForget = document.querySelector<HTMLFormElement>(".form-forget");

if (formForget) {
  formForget.addEventListener("submit", (e) => {
    e.preventDefault();

    let userItem: (string | number | null) = localStorage.getItem('user');

    let users: object = JSON.parse(userItem);
    
    let emailFind = document.getElementById("email") as HTMLInputElement;
    
    let emailEncontrado = false;
    
    const userFind = users.find(user => user.email === emailFind.value);

    let span = document.querySelector("#forget-msg") as HTMLSpanElement;

    if (userFind) {
      span.innerHTML = "E-mail enviado com sucesso";
    } else {
      span.innerHTML = "E-mail não cadastrado";
    }

  });
}