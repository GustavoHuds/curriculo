// Função para calcular a média de um array de números
function calcularMedia(arrayDeNumeros) {
    if (arrayDeNumeros.length === 0) {
        return 0; // Retorna 0 se o array estiver vazio para evitar divisão por zero
    }

    let soma = arrayDeNumeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / arrayDeNumeros.length;
}

// Exemplo de uso da função
let arrayDeNumeros = [5, 10, 15, 20, 25];
let media = calcularMedia(arrayDeNumeros);

console.log("Array de números:", arrayDeNumeros);
console.log("Média dos números:", media);
