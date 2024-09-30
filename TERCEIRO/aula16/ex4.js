let numero = 10; 

function fcaminhos(escolha) {
    const caminhos = [
        "Escolha inválida. Tente de novo.", 
        "Caminho B", 
        "Caminho C", 
        "Caminho D", 
        "Caminho E", 
        "Caminho F", 
        "Caminho G", 
        "Caminho H"  
    ];
    
    
    console.log(caminhos[escolha] || caminhos[0]);
}


fcaminhos(numero);
