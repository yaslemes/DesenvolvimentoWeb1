function primo(numero) {
    if (numero <= 1) {
        return; 
    }

    
    if (numero === 2) {
        console.log(numero);
        return; 
    }

    
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return; 
        }
    }

    console.log(numero);
}


function primosAteN(N) {
    for (let i = 2; i <= N; i++) {
        primo(i);
    }
}

primosAteN(10);
