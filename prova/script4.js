let idade = 17
let peso = 65

function dosagem(mg) {
    let ml = mg / 500
    let gota = ml * 20
    return gota
}

function calcular(idade, peso) {
    if (idade >= 12) {
        if (peso >= 60) {
            mg = 1000
        } else {
            mg = 875
        }
    } else {
        if (peso >= 5 && peso <= 9) {
            mg = 125
        } else if (peso >= 9.1 && peso >= 16.1) {
            mg = 250

        } else if (peso >= 16.1 && peso >= 24) {
            mg = 500
        } else if (peso => 24) {
            mg = 750
        }
    }
    console.log(`A quantidade de gotas é: ${dosagem(mg)}`)

}

calcular(idade, peso)



