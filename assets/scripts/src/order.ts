const hoje: Date = new Date();
const dia: number = hoje.getDate();
const mes: number = hoje.getMonth() + 1;
const ano: number = hoje.getFullYear();
const data: string = `${dia}/${mes}/${ano}`;
document.getElementById('data-atual')!.innerHTML = data;
