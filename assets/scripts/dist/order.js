"use strict";
const hoje = new Date();
const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();
const data = `${dia}/${mes}/${ano}`;
document.getElementById('data-atual').innerHTML = data;
