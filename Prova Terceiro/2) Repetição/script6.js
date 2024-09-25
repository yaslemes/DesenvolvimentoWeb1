function fatorial(n) {
    if (n < 0) {
        return "Fatorial não definido para números negativos.";
    }

    if (n === 0) {
        return 1;
    }

    let resultado = 1; 


    for (let i = n; i >= 1; i--) {
        resultado *= i; 
    }
    return resultado; 
}


console.log(fatorial(1)); 
console.log(fatorial(2)); 
console.log(fatorial(3)); 