// Função que verifica se um número é primo
function primo(numero) {
    // Números menores ou iguais a 1 não são primos
    if (numero <= 1) {
        return false;
    }
    
    // O número 2 é o único número primo par
    if (numero === 2) {
        return true;
    }

    // Verifica divisores de 2 até a raiz quadrada do número
    for (let i = 2; i * i <= numero; i++) {
        // Se o número for divisível por i, não é primo
        if (numero % i === 0) {
            return false; 
        }
    }

    // Se passar por todas as verificações, é primo
    return true; 
}

// Testa a função com o número 7
console.log(primo(7));  // true


