// Declaração das variáveis que representam os lados do triângulo
let l1 = 10;
let l2 = 10;
let l3 = 5;

// Função que verifica se três lados podem formar um triângulo
function ehTriangulo(lado1, lado2, lado3) { 
    // Verifica a condição de existência do triângulo
    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        return true; // Retorna verdadeiro se formar um triângulo
    } else {
        return false; // Retorna falso se não formar um triângulo
    }
}

// Função que classifica o triângulo
function verificador(lado1, lado2, lado3) {
    // Verifica se todos os lados são iguais
    if (lado1 == lado2 && lado2 == lado3) {
        return "equilátero"; // Triângulo equilátero
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return "isósceles"; // Triângulo isósceles
    } else {
        return "escaleno"; // Triângulo escaleno
    }
}

// Verifica se os lados formam um triângulo usando a função ehTriangulo
if (ehTriangulo(l1, l2, l3)) {
    // Se formar um triângulo, exibe a classificação do triângulo
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo, que é ${verificador(l1, l2, l3)}`);
} else {
    // Se não formar um triângulo, exibe uma mensagem negativa
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`);
}



