// Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

// Exemplo de uso da função
let numeroParaCalcularFatorial = 5;
let resultadoFatorial = calcularFatorial(numeroParaCalcularFatorial);
console.log(`O fatorial de ${numeroParaCalcularFatorial} é: ${resultadoFatorial}`);
