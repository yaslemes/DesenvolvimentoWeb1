let l1 = 10 //declara o valor da variável
let l2 = 10
let l3 = 5

function ehTriangulo(lado1, lado2, lado3){ 
    if (lado1< lado2 + lado3 && lado2< lado1 + lado3 && lado3< lado1 + lado2) {
        return true

    } else {
        return false
    }
}

if (ehTriangulo(l1,l2,l3)){
    console.log(`Os lados ${l1}, ${l2} e ${l3} formam um triângulo, que é ${verificador(l1,l2,l3)}`)
}else {
    console.log(`Os lados ${l1}, ${l2} e ${l3} NÃO formam um triângulo`)
}

function verificador(lado1, lado2, lado3) {
    if (lado1 == lado2 && lado2 == lado3) {
        return "equilatero"
    } else if ( lado1 == lado2 || lado2==lado3 || lado1==lado3) {
        return "isoceles"
    } else {
        return "escaleno"
    }

}


