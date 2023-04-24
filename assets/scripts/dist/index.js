var form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var order = {
            bread: null,
            ingredients: null
        };
        var breadInputs = document.getElementsByName('bread');
        var selectedBreadInput = Array.from(breadInputs).find(function (input) { return input.checked; });
        if (selectedBreadInput) {
            order.bread = selectedBreadInput.value;
        }
        var ingredientsInputs = document.getElementsByName('ingredients');
        var selectedIngredientsInput = Array.from(ingredientsInputs).find(function (input) { return input.checked; });
        if (selectedIngredientsInput) {
            order.ingredients = selectedIngredientsInput.value;
        }
        localStorage.setItem('order', JSON.stringify(order));
    });
}
