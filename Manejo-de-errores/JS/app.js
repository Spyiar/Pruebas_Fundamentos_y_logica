let number;
try{
    number = parseInt(prompt('Digita un numero'));
}catch(err){
    console.log(err)
}

let respuesta = Math.pow(number,2);
console.log('Valor incorrecto, solo se aceptan numeros')
console.log(respuesta);


//Ejercicio #Final
function factorial(){
    let numero = prompt('Digite el numero factorial');
    let res = 1;

    try {
        if(numero == '' || numero == null || isNaN(numero) || numero <= 0){
            alert('El valor es nulo o invalido');
            return;
        }else{
            for(let i = 0; i < numero; i++){
                res *= (i+1); 
                console.log(res);
            }
            factorial();
        }
    } catch (error) {
        console.log('Error: '+error);
    }
}

factorial();
