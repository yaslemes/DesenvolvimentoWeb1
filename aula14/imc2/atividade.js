let inputCapital = document.getElementById("Capital")
let inputJuros = document.getElementById("Juros")
let inputPeriodos = document.getElementById("Periodos")
let botaoCalcular = document.getElementById("Calcular")
let saidaMontante = document.getElementById("Montante")

function calcularMontante(){
    let c = inputCapital.value
    let i = inputJuros.value
    let n = inputPeriodos.value
    
    let montante = c * ((1 + (i/100))**n)

    console.log(montante)

    saidaMontante.innerText = montante
}
botaoCalcular.onclick = calcularMontante