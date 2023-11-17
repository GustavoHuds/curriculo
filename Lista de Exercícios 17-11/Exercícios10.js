// Função para remover elementos duplicados de um array
function removerDuplicatas(array) {
    return array.filter((element, index, self) => {
        return self.indexOf(element) === index;
    });
}

// Exemplo de uso da função
let arrayComDuplicatas = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 1];
let arraySemDuplicatas = removerDuplicatas(arrayComDuplicatas);

console.log("Array com duplicatas:", arrayComDuplicatas);
console.log("Array sem duplicatas:", arraySemDuplicatas);
