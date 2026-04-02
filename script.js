// Armazena o total
let total = 0;

// Seleciona todos os itens
const itens = document.querySelectorAll('.item');

// Função para calcular total
const calcularTotal = () => {
    total = 0;

    itens.forEach(item => {
        if (item.checked) {
            total += parseFloat(item.value);
        }
    });

    document.getElementById('total').innerText = 
    total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
};

itens.forEach(item => {
    item.addEventListener('click', calcularTotal);
});