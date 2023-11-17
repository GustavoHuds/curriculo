// Função retorna a soma de todos os elementos de um array
function somarElementosArray(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}

// Exemplo de uso da função
let numeros = [1, 2, 3, 4, 5];
let resultadoSoma = somarElementosArray(numeros);
console.log(resultadoSoma);  // Isso imprimirá 15 no console
