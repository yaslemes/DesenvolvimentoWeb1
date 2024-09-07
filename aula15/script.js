function calcular() {
    // Obtém os valores das entradas do usuário
    const maxVel = parseFloat(document.getElementById('maxvel').value);
    const txtVel = parseFloat(document.getElementById('txtvel').value);
    // Obtém a referência para a div onde a mensagem será exibida
    const fullMessage = document.getElementById('fullMessage');
    
    // Verifica se os valores inseridos são números válidos
    if (isNaN(maxVel) || isNaN(txtVel)) {
        fullMessage.textContent = 'Por favor, insira valores válidos para ambas as velocidades.';
        return;
    }

    // Verifica se a velocidade do veículo excede a velocidade máxima permitida
    if (txtVel > maxVel) {
        // Calcula a quantidade de velocidade excedida
        const excess = txtVel - maxVel;
        let multa;

        // Determina o valor da multa com base na quantidade de velocidade excedida
        if (excess <= 0.2 * maxVel) {
            multa = 'R$130,16';
        } else if (excess <= 0.5 * maxVel) {
            multa = 'R$195,23';
        } else {
            multa = 'R$880,41';
        }

        // Atualiza o conteúdo da div com a mensagem sobre a multa
        fullMessage.textContent = `Você excedeu a velocidade permitida. A multa é de ${multa}.`;
    } else {
        // Se a velocidade estiver dentro do limite, mostra uma mensagem apropriada
        fullMessage.textContent = 'Você está dentro do limite de velocidade.';
    }
}

