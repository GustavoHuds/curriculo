// Função para gerar a sequência de Fibonacci até um determinado número
function fibonacciAteN(numero) {
    let sequencia = [0, 1];

    while (sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2] <= numero) {
        sequencia.push(sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2]);
    }

    return sequencia;
}

// Exemplo de uso da função
let numeroLimite = 50;
let resultadoFibonacci = fibonacciAteN(numeroLimite);
console.log(`Sequência de Fibonacci até ${numeroLimite}: ${resultadoFibonacci}`);
