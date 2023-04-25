const orderForm = document.getElementById('order-save') as HTMLFormElement; 
const btnSave = document.getElementById('btn-save') as HTMLFormElement; 
const breadRadios = document.getElementsByName('bread') as NodeListOf<HTMLInputElement>;
const ingredientsRadios = document.getElementsByName('ingredients') as NodeListOf<HTMLInputElement>;
const section = document.getElementById("section") as HTMLFormElement;
const totalPrice = document.getElementById("totalPrice") as HTMLFormElement;
const textMobile = document.getElementById("text-mobile") as HTMLFormElement;
const textDesktop = document.getElementById("text-desktop") as HTMLFormElement;
const pay = document.getElementById("pay") as HTMLFormElement;


sessionStorage.removeItem("orderDescription");

let HNumber = 1;
let totalOrder = 0;

btnSave.addEventListener("click", (e) => {
  
  let selectedBreadPrice: number = 0;
  let selectedIngredientPrice: number = 0;
  
  breadRadios.forEach((option: HTMLInputElement) => {
    if (option.checked) {
      const priceElement = option.parentElement?.querySelector('.price') as HTMLElement; 
      selectedBreadPrice = parseFloat(priceElement.innerText.replace('R$ ', '').replace(',', '.')); 
    }
  });
  
  ingredientsRadios.forEach((option: HTMLInputElement) => {
    if (option.checked) {
      const priceElement = option.parentElement?.querySelector('.price') as HTMLElement; 
      selectedIngredientPrice = parseFloat(priceElement.innerText.replace('R$ ', '').replace(',', '.')); 
    }
  });
  
  const total = selectedBreadPrice + selectedIngredientPrice; 

  let orderItens: string | number | null = sessionStorage.getItem("orderDescription");  
  let arrOrderDescription = [];  

  if (orderItens) {
    const parsedItens = JSON.parse(orderItens);

    if (Array.isArray(parsedItens)) {
      arrOrderDescription = parsedItens;
    }
  }  

  arrOrderDescription.push(
    {
      desciption: `Hamburger ${HNumber}`,
      price: total.toFixed(2),
    }
  )  
  HNumber ++; 
  sessionStorage.setItem("orderDescription", JSON.stringify(arrOrderDescription));

  
  Object.values(arrOrderDescription).forEach((val) => {
    const haNumber = document.querySelector(`.ha-${HNumber -1}`) as HTMLFormElement;
    if(haNumber){
      haNumber.remove();
      console.log(haNumber, HNumber - 1 )
    }

    totalOrder += parseFloat(val.price);  
    
    section.innerHTML += `
      <div class="content ha-${HNumber -1}">
        <span >${val.desciption}</span>
        <span >R$ ${val.price}</span>
        <a href="#">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_471)">
                <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_1_471">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
        </a>
      </div>
    `;

    
  });   
  
  
  totalPrice.innerHTML = "";
  textDesktop.innerHTML = "";
  textMobile.innerHTML = "";

  totalPrice.innerHTML += `
    R$ ${totalOrder.toFixed(2)}
    <small>subtotal</small>
  `;  

  textDesktop.innerHTML += `
    <strong>Bandeja</strong>
    <small> ${HNumber - 1} hamburgue(s)</small>     
  `;  

  textMobile.innerHTML += `
    <small>Ver Bandeja</small>
    <strong> ${HNumber - 1} hamburgue(s)</strong>
  `;

 
  
});

pay.addEventListener('click', function(event) {
  event.preventDefault(); 
  
  let orderItens = sessionStorage.getItem("orderDescription"); 
  let allOrders = localStorage.getItem("orders"); 
  let arrOrders = [];  

  if (allOrders) {
    const parsedItems = JSON.parse(allOrders);

    if (Array.isArray(parsedItems)) {
      arrOrders = parsedItems;
    }
  }

  arrOrders.sort((a, b) => a.idOrder - b.idOrder);
  const lastItem = arrOrders[arrOrders.length - 1];
  const newId = lastItem ? lastItem.idOrder + 1 : 1;  

  if(orderItens){    

    const isLogged: string | null = sessionStorage.getItem("isLogged");

    if (isLogged !== null) {

      const isLoggedObjeto = JSON.parse(isLogged);   
      
      arrOrders.push({
        idUser: isLoggedObjeto.idUser,
        idOrder: newId,
        qtdItem: HNumber - 1,
        price: totalOrder,
        date: new Date()
      })

      localStorage.setItem("orders", JSON.stringify(arrOrders))

      location.href = "payment.html";
    }

  }
  
});


  
  

