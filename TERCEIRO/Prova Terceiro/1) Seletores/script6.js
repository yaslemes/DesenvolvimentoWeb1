let ano = 2024; // Ano a ser verificado

// Função que verifica se um ano é bissexto
function bissexto(ano) {
    // Verifica a condição de bissexto
    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
        console.log("O ano sugerido é bissexto");
    } else {
        console.log("O ano não é bissexto");
    }
}

// Chama a função para verificar se o ano é bissexto
bissexto(ano);
