let inputTroco = document.getElementById("valor")
let botao = document.getElementById("calcular")
let divSaida = document.getElementById("saida")

function calcularTroco(){
    troco = inputTroco.value
    r = troco%20
    cedulasV = ((troco-r)/20)
    troco = troco - (cedulasV*20) 
    r = troco%10
    cedulasD = ((troco-r)/10)
    moedas = r

    console.log(cedulasV, cedulasD, moedas)

    divSaida.innerText = String("Cédulas de R$20,00: "+String(cedulasV)+" | Cédulas de R$10,00: "+String(cedulasD)+"  | Moedas (R$1,00): "+String(moedas))
}
botao.onclick = calcularTroco