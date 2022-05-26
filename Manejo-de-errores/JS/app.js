/* let numero;
try{
    numero = parseInt(prompt('Digita un numero'));
}catch(err){
    console.log(err)
}

let res = Math.pow(numero,2);
console.log('Valor incorrecto, solo se aceptan numeros')
console.log(res); */



//Forma 1
/* for(let i = 0; i < numeroFactorial; i++){
    if(!isNaN(numeroFactorial)){
        if(numeroFactorial < 0){
            console.log('El valor ingresado debe ser mayor a 0');
            break;
        }
        resultado *= (i+1); 
        console.log(resultado);
    }else{
        console.log('El dato ingresado no es un numero');
    }
} */

//Forma 2

function factorial(){
    let numeroFactorial;
    let resultado = 1;


    try{
        numeroFactorial = parseInt(prompt('Agregar numero factorial'));
        console.log(numeroFactorial);
    }catch(err){
        console.log('Valor incorrecto, solo se aceptan numeros');
        factorial();
    }
    try{
        if(!isNaN(numeroFactorial)){
            for(let i = 0; i < numeroFactorial; i++){
            resultado *= (i+1); 
            console.log(resultado);
            }
        }else if(numeroFactorial == 0){
            resultado = 1;
            console.log(resultado);
        }else if(numeroFactorial < 0){
            console.log('No se aceptan numeros negativos');
        }else{
            console.log('Debes ingresar un valor numerico');
        }
    }catch(err){
        console.log('Valor incorrecto, solo se aceptan numeros');
    }
    factorial();
}
factorial();


