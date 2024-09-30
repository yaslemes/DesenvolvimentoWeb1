let ano = 2024

function bissexto(ano){
    if(ano % 400 == 0 || (ano % 4==0 && ano % 100 != 0))
        console.log("O ano sugerido é bissexto");

    else {
        console.log("O ano não é bissexto");
    }
   

}

bissexto(ano)