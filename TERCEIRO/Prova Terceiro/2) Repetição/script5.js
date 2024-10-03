// Função que verifica se um número é primo e imprime se for
function primo(numero) {
    if (numero <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }

    if (numero === 2) {
        console.log(numero); // Imprime 2, que é primo
        return true; 
    }

    // Verifica divisores de 2 até a raiz quadrada do número
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false; // Não é primo
        }
    }

    console.log(numero); // Imprime o número primo
    return true; // É primo
}

// Função que imprime todos os números primos até N
function primosAteN(N) {
    for (let i = 2; i <= N; i++) {
        primo(i); // Chama a função primo para cada número
    }
}

// Chama a função para imprimir primos até 10
primosAteN(10);

