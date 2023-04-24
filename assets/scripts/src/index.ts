interface Order {
  bread: string | null;
  ingredients: string | null;
}

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const order: Order = {
      bread: null,
      ingredients: null,
    };
    const breadInputs = document.getElementsByName('bread');
    const selectedBreadInput = Array.from(breadInputs).find((input) => (input as HTMLInputElement).checked);
    if (selectedBreadInput) {
      order.bread = (selectedBreadInput as HTMLInputElement).value;
    }
    const ingredientsInputs = document.getElementsByName('ingredients');
    const selectedIngredientsInput = Array.from(ingredientsInputs).find((input) => (input as HTMLInputElement).checked);
    if (selectedIngredientsInput) {
      order.ingredients = (selectedIngredientsInput as HTMLInputElement).value;
    }
    localStorage.setItem('order', JSON.stringify(order));
  });
}
