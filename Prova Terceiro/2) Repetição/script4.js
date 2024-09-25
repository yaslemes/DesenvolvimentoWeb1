function primo(numero) {
    if (numero <= 1) {
        return false;
    }
    
    
    if (numero === 2) {
        return true;
    }

    
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(primo(7));  // true

