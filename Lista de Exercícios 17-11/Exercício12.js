// Função para gerar um número aleatório entre 1 e 100
function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

// Exemplo de uso da função
let numeroAleatorio = gerarNumeroAleatorio();
console.log(`Número aleatório entre 1 e 100: ${numeroAleatorio}`);
