"use strict";
let isLogged = sessionStorage.getItem('isLogged');
if (!isLogged) {
    location.href = "auth.html";
}
