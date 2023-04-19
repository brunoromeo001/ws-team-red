let users = [
  {
    id: 1,
    name: "bruno",
    email: "email@email.com",
    password: "123456",
  },
  {
    id: 2,
    name: "Samuel",
    email: "samuelbortolingomes@gmail.com",
    password: "123456",
  },
];

const pageAuth = document.querySelector("#body-auth") as HTMLBodyElement;
const formAuth = document.querySelector<HTMLFormElement>(".form-auth");

if (formAuth) {
  formAuth.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailUser = document.getElementById("email") as HTMLInputElement;
    let passwordUser = document.getElementById("password") as HTMLInputElement;

    const userLogin = users.find(
      (user) =>
        user.email === emailUser.value && user.password === passwordUser.value
    );

    if (userLogin) {
      sessionStorage.setItem(
        "isLoged",
        JSON.stringify({
          isLoged: true,
          idUser: userLogin?.id,
        })
      );
      window.location.href = "index.html";
    } else {
      alert("Usuário ou senha inválido");
    }
  });
}
