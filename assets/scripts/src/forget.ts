const formForget = document.querySelector<HTMLFormElement>(".form-forget");

if (formForget) {
  formForget.addEventListener("submit", (e) => {
    e.preventDefault();

    interface User {
      email: string;
    }
    
    let userItem: string | null = localStorage.getItem('user');
    
    let users: User[] = userItem ? JSON.parse(userItem) : [];
    
    let emailFind = document.getElementById("email") as HTMLInputElement;
    
    let emailEncontrado = false;
    
    const userFind = users.find((user: User) => user.email === emailFind.value);
    
    let span = document.querySelector("#forget-msg") as HTMLSpanElement;
    
    if (userFind) {
      
      alert(`Instruções enviada para o email: ${emailFind.value}`)
      window.location.href = "auth.html";
    } else {
      
      alert("E-mail não cadastrado")
    }

  });
}