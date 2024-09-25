let medida = 100
let unidade = 'm'; 

function converter(unidade, medida) {
    let resultado;

    if (unidade === 'm') {
        resultado = medida * 100
    } else if (unidade === 'mm') {
        resultado = medida / 10 
    } else if (unidade === 'km') {
        resultado = medida * 100000
    } else {
        console.log("Essa unidade de medida não é aceita");
        return;
    }

    console.log(`O resultado da conversão é: ${resultado}`);
}

converter(unidade, medida);
