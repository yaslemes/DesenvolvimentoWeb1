let medida = 100; // Valor a ser convertido
let unidade = 'm'; // Unidade original

// Função para converter medidas
function converter(unidade, medida) {
    let resultado;

    // Verifica a unidade e realiza a conversão
    if (unidade === 'm') {
        resultado = medida * 100; // Metros para centímetros
    } else if (unidade === 'cm') {
        resultado = medida / 100; // Centímetros para metros
    } else if (unidade === 'mm') {
        resultado = medida / 1000; // Milímetros para metros
    } else if (unidade === 'km') {
        resultado = medida * 1000; // Quilômetros para metros
    } else {
        console.log("Essa unidade de medida não é aceita");
        return; // Retorna se a unidade não for aceita
    }

    // Exibe o resultado da conversão
    console.log(`O resultado da conversão é: ${resultado} metros`);
}

// Chama a função de conversão
converter(unidade, medida);
