let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let divSaida = document.getElementById("saida")
let botaoCalcular = document.getElementById("calcular")

function calcularImc(){
    console.log("EXECUTADO")
    let peso = Number(inputPeso.value)
    let altura = Number(inputAltura.value)

    let imc = peso / (altura * altura)

    divSaida.innerText = imc
}

botaoCalcular.onclick = calcularImc


  

