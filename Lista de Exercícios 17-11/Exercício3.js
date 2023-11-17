// Função verifica se um número é par ou ímpar
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplos de uso da função
console.log(verificarParOuImpar(4));  // Isso imprimirá "Par" no console
console.log(verificarParOuImpar(7));  // Isso imprimirá "Ímpar" no console
