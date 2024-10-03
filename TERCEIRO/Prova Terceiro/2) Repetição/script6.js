// Função que calcula o fatorial de um número n
function fatorial(n) {
    // Retorna uma mensagem se n for negativo
    if (n < 0) {
        return "Fatorial não definido para números negativos.";
    }

    // O fatorial de 0 é 1
    if (n === 0) {
        return 1;
    }

    let resultado = 1; // Inicializa o resultado como 1

    // Laço que calcula o fatorial multiplicando de n até 1
    for (let i = n; i >= 1; i--) {
        resultado *= i; 
    }

    return resultado; // Retorna o fatorial calculado
}

// Testes da função fatorial
console.log(fatorial(1)); // 1
console.log(fatorial(2)); // 2
console.log(fatorial(3)); // 6
console.log(fatorial(5)); // 120
console.log(fatorial(-1)); // Fatorial não definido para números negativos.
