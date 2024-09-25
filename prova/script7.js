let  alcool= 50;
let  gasolina= 100;

    function uso (alcool, gasolina){
        if (alcool < 0.7 * gasolina){
            return true;

        
        } else{
            return false;

         }


        
    }

    console.log (uso(alcool,gasolina));