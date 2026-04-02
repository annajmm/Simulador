// variável para armazenar o total
let total = 0;

// seleciona todos os itens
const itens = document.querySelectorAll('.item');

// função para calcular total (arrow function ✅)
const calcularTotal = () => {
    total = 0;

    itens.forEach(item => {
        if (item.checked) {
            total += parseFloat(item.value); // parseFloat ✅
        }
    });

    document.getElementById('total').innerText = total.toFixed(2);
};

// evento de clique ✅
itens.forEach(item => {
    item.addEventListener('click', calcularTotal);
});