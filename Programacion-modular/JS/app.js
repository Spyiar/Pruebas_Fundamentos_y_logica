
/* function saludo(mensaje){
    console.log(
        `--- ${Date()} ---
        --- ${mensaje} ---`);
}

saludo('!Hola mundo!');

function multiplicar(a, b){
    return a * b;
}

console.log(multiplicar(5,10));


//Ejercicio #1
function calcularImpuestos(nombre, salario, impuesto){
    let totalImpuestos = salario * (impuesto/100);
    return `Hola ${nombre}, el total de impuestos que debes pagar segun tu salario ($${salario}) es de: $${totalImpuestos}`;
}

let nombre = prompt('Digita tu nombre');
let salario = prompt('Digita tu salario');
let impuesto = prompt('Digita el porcentaje de impuestos a pagar');

let resultado = calcularImpuestos(nombre, salario, impuesto);

alert(calcularImpuestos(nombre, salario, impuesto)); */

let valor = parseInt(prompt(`Selecciona una opcion
1. Area de un circulo
2. Area de un triangulo
0. Finalizar`));
const PI = 3.141592;

function radioDelCirculo(radio){
    if(radio > 0 && !isNaN(radio)){
        area = PI * Math.pow(radio,2);
        return 'El area es: '+area;
    }else{
        return 'Error, los datos ingresados no pueden ser leidos';
    }
}
function radioDelTriangulo(base, altura){
    if((base > 0 && !isNaN(base)) || (altura > 0 && !isNaN(altura))){
        area = (base * altura) / 2;
        return 'El area del triangulo es: '+area;
    }else{
        return 'Error, los datos ingresados no pueden ser leidos';
    }
}



while(valor != 0){
    if(valor == 1){
        let radioC = prompt('Indica el radio del ciuculo');
        alert(radioDelCirculo(radioC)); 
        break;
    } else if(valor == 2){
        let base = prompt('Indica la base');
        let altura = prompt('Indica la altura');
        alert(radioDelTriangulo(base, altura));
        break;
    }else if(valor == 0){
        alert('Programa finalizado');
        break;
    }else{
        alert('Valor no encontrado');
    }
}

