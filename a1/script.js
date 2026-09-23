// Função que captura o nome digitado e exibe no parágrafo de saída
function mensagem() {
    // Captura o elemento do input e o seu valor
    const nomeInput = document.getElementById("nome").value;
    
    // Captura o parágrafo onde o resultado será exibido
    const resultado = document.getElementById("resultado");

    // Verifica se o usuário digitou algo antes de exibir
    if (nomeInput.trim() !== "") {
        resultado.innerText = "Nome informado: " + nomeInput;
    } else {
        resultado.innerText = "";
    }
}

// Função que limpa o campo de texto e apaga a mensagem de saída
function limpar() {
    // Define o valor do input como vazio
    document.getElementById("nome").value = "";
    
    // Chama a função mensagem() para atualizar e limpar o parágrafo de saída
    mensagem();
}
