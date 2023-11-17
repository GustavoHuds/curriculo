// Função para ordenar um array de strings em ordem alfabética
function ordenarStringsAlfabeticamente(arrayDeStrings) {
    return arrayDeStrings.slice().sort();
}

// Exemplo de uso da função
let arrayOriginal = ["banana", "maçã", "laranja", "abacaxi"];
let arrayOrdenado = ordenarStringsAlfabeticamente(arrayOriginal);

console.log("Array original:", arrayOriginal);
console.log("Array ordenado:", arrayOrdenado);
