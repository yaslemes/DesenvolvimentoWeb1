// Função que verifica se três lados podem formar um triângulo
function ehTriangulo(lado1, lado2, lado3) {
    // Verifica a condição de existência do triângulo
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        return true; // Retorna verdadeiro se formar um triângulo
    } else {
        return false; // Retorna falso se não formar um triângulo
    }
}

// PROGRAMA PRINCIPAL

// Declaração das variáveis que representam os lados do triângulo
let l1 = 11;
let l2 = 30;
let l3 = 1;

// Verifica se os lados formam um triângulo usando a função ehTriangulo
if (ehTriangulo(l1, l2, l3)) {
    // Se formar um triângulo, exibe uma mensagem positiva
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo`);
} else {
    // Se não formar um triângulo, exibe uma mensagem negativa
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`);
}

