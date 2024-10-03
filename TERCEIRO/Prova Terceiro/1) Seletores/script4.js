let idade = 17;
let peso = 65;

// Função para calcular a dosagem em gotas
function dosagem(mg) {
    let ml = mg / 500; // Conversão de mg para ml
    let gota = ml * 20; // Cálculo de gotas (20 gotas por ml)
    return gota;
}

// Função para calcular a dosagem com base na idade e peso
function calcular(idade, peso) {
    let mg; // Declara a variável mg

    // Verifica a dosagem para adultos
    if (idade >= 12) {
        if (peso >= 60) {
            mg = 1000; // Dosagem para peso >= 60 kg
        } else {
            mg = 875; // Dosagem para peso < 60 kg
        }
    } else {
        // Verifica a dosagem para crianças
        if (peso >= 5 && peso <= 9) {
            mg = 125; // Dosagem para peso entre 5 e 9 kg
        } else if (peso > 9 && peso <= 16.1) {
            mg = 250; // Dosagem para peso entre 9.1 e 16.1 kg
        } else if (peso > 16.1 && peso < 24) {
            mg = 500; // Dosagem para peso entre 16.1 e 24 kg
        } else if (peso >= 24) {
            mg = 750; // Dosagem para peso >= 24 kg
        }
    }

    // Exibe a quantidade de gotas calculadas
    console.log(`A quantidade de gotas é: ${dosagem(mg)}`);
}

// Chama a função calcular com a idade e peso fornecidos
calcular(idade, peso);
