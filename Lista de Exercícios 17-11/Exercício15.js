// Função para obter uma lista de chaves de um objeto
function obterChavesDoObjeto(objeto) {
    return Object.keys(objeto);
}

// Exemplo de uso da função
let meuObjeto = { nome: "João", idade: 30, cidade: "Exemploville" };
let listaDeChaves = obterChavesDoObjeto(meuObjeto);

console.log("Objeto:", meuObjeto);
console.log("Lista de chaves:", listaDeChaves);
