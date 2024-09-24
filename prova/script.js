function classificarAtleta(idade) {
    if (idade >= 5 && idade <= 7) {
        return "Infantil A";
    } else if (idade >= 8 && idade <= 10) {
        return "Infantil B";
    } else if (idade >= 11 && idade <= 13) {
        return "Juvenil A";
    } else if (idade >= 14 && idade <= 17) {
        return "Juvenil B";
    } else if (idade >= 18) {
        return "Adulto";
    } else {
        return "Idade fora do intervalo permitido";
    }
}

document.getElementById("classificacaoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    const idade = parseInt(document.getElementById("idade").value);
    const classificacao = classificarAtleta(idade);
    document.getElementById("resultado").textContent = "Classificação: " + classificacao;
});
