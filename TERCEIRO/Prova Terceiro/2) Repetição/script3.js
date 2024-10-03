let numero = 10; // Número até o qual queremos imprimir

// Função que imprime os números pares de 1 até N
function pares(N) {
    // Laço que itera de 1 até N
    for (let i = 1; i <= N; i++) {
        // Verifica se o número é par
        if (i % 2 === 0) {
            console.log(i); // Imprime o número par
        }
    }
}

// Chama a função com o número definido
pares(numero);

