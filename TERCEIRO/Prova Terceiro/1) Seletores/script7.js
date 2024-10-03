let alcool = 50; // Preço do álcool
let gasolina = 100; // Preço da gasolina

// Função que determina se é melhor usar álcool em vez de gasolina
function uso(alcool, gasolina) {
    // Verifica se o preço do álcool é menor que 70% do preço da gasolina
    if (alcool < 0.7 * gasolina) {
        return true; // Usar álcool é vantajoso
    } else {
        return false; // Usar gasolina é mais vantajoso
    }
}

// Chama a função e exibe o resultado
console.log(uso(alcool, gasolina));
