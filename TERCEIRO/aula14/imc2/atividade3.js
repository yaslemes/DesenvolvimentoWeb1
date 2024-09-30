let inputDistancia = document.getElementById("distancia")
let botaoCalc = document.getElementById("calcular")
let inputPreco = document.getElementById("litro")
let divSaida = document.getElementById("saida")

function calcularGastos(){
    let distancia = inputDistancia.value
    let preco = inputPreco.value

    let valor = ((distancia/10) * preco) + 65.5

    console.log(valor)

    divSaida.innerText = String("O preço da viagem será de: R$"+String(valor))
}
botaoCalc.onclick = calcularGastos