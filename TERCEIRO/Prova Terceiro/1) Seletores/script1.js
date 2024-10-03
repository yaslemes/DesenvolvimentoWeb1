// Declaração da variável 'idade' e atribuição de um valor
let idade = 52;

// Função que classifica um atleta com base na idade
function classificarAtleta(idade) {
    // Verifica se a idade está na faixa de 5 a 7 anos
    if (idade >= 5 && idade <= 7) {
        return "Infantil A"; // Retorna "Infantil A"

    // Verifica se a idade está na faixa de 8 a 10 anos
    } else if (idade >= 8 && idade <= 10) {
        return "Infantil B"; // Retorna "Infantil B"

    // Verifica se a idade está na faixa de 11 a 13 anos
    } else if (idade >= 11 && idade <= 13) {
        return "Juvenil A"; // Retorna "Juvenil A"

    // Verifica se a idade está na faixa de 14 a 17 anos
    } else if (idade >= 14 && idade <= 17) {
        return "Juvenil B"; // Retorna "Juvenil B"

    // Verifica se a idade é 18 ou mais
    } else if (idade >= 18) {
        return "Adulto"; // Retorna "Adulto"

    // Se a idade não se enquadrar em nenhuma faixa
    } else {
        return "Idade fora do intervalo permitido"; // Retorna uma mensagem de erro
    }
}

// Chama a função classificarAtleta com a idade fornecida e exibe o resultado no console
console.log(classificarAtleta(idade));
