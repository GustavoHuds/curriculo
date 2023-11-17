// Função para verificar se uma palavra é um palíndromo
function ehPalindromo(palavra) {
    // Remover espaços e converter para minúsculas
    palavra = palavra.replace(/ /g, '').toLowerCase();

    // Comparar a string original com a string invertida
    let palavraInvertida = palavra.split('').reverse().join('');

    return palavra === palavraInvertida;
}

// Exemplos de uso da função
let palavra1 = "radar";
let palavra2 = "hello";

console.log(`A palavra "${palavra1}" é um palíndromo? ${ehPalindromo(palavra1)}`);
console.log(`A palavra "${palavra2}" é um palíndromo? ${ehPalindromo(palavra2)}`);
