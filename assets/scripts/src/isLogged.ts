let isLogged: string | null = sessionStorage.getItem('isLogged');

if (!isLogged) {
  
  location.href = "auth.html";
  
} 