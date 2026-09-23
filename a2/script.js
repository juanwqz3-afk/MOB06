function calcularTotal() {
    const inputQtd = document.getElementById('quantidade');
    const valorTotalEl = document.getElementById('valor-total');
    
    const quantidade = Number(inputQtd.value);
    const precoUnitario = 135.00;
    
    const total = quantidade * precoUnitario;
    
    valorTotalEl.textContent = total.toFixed(2).replace('.', ',');
}
