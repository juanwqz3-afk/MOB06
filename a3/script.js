function verificarEstoque() {
    const inputQtd = document.getElementById('quantidade');
    const mensagemEl = document.getElementById('mensagem');
    
    const quantidadeDesejada = Number(inputQtd.value);
    const estoqueDisponivel = 3;
    
    // Limpa as classes anteriores
    mensagemEl.className = "mensagem";
    
    if (quantidadeDesejada <= 0) {
        mensagemEl.textContent = "Por favor, insira uma quantidade válida.";
        mensagemEl.classList.add('erro');
    } else if (quantidadeDesejada <= estoqueDisponivel) {
        mensagemEl.textContent = "Sucesso! Quantidade disponível em estoque.";
        mensagemEl.classList.add('sucesso');
    } else {
        mensagemEl.textContent = "Estoque ultrapassado! Não temos essa quantidade disponível.";
        mensagemEl.classList.add('erro');
    }
}
