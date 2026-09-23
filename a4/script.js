function atualizarPagamento() {
    const selectPagamento = document.getElementById('forma-pagamento');
    const resultadoBox = document.getElementById('resultado');
    const mensagemEl = document.getElementById('mensagem-pagamento');
    const valorTotalEl = document.getElementById('valor-total');
    
    const opcao = selectPagamento.value;
    const totalBase = 100.00;
    let totalFinal = totalBase;
    
    // Limpa classes de cores anteriores
    resultadoBox.className = "resultado-box";
    
    if (opcao === 'pix') {
        totalFinal = totalBase * 0.95;
        mensagemEl.textContent = "Pagamento via PIX aprovado com 5% de desconto!";
        resultadoBox.classList.add('pagamento-pix');
    } else if (opcao === 'cartao') {
        totalFinal = totalBase;
        mensagemEl.textContent = "Pagamento via Cartão de Crédito sem juros.";
        resultadoBox.classList.add('pagamento-cartao');
    } else if (opcao === 'dinheiro') {
        totalFinal = totalBase * 0.90;
        mensagemEl.textContent = "Pagamento em Dinheiro com 10% de desconto!";
        resultadoBox.classList.add('pagamento-dinheiro');
    }
    
    // Formata o valor final trocando o ponto pela vírgula
    valorTotalEl.textContent = totalFinal.toFixed(2).replace('.', ',');
}
