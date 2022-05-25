//Ejercicio 1

if(5 > 5){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if(12 < 8){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if('Si' == 'Sí'){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if(true){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if(false){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if(8 >= 8){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if(30.27 <= 50){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if('a' == 'a'){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}
if(50 != 50){
    console.log('Entro en la parte verdadera');
}else{
    console.log('Entro en la parte falsa');
}


//Ejercicio 2
let esMujer = false;
let edad = 65;

if(esMujer || edad >= 60){
    console.log('Has recibido un cupon');
}else{
    console.log('No cumples los requerimientos para recibir un cupon');
}

//Ejercicio #3


let miEdad = 62;

if(miEdad > 0 && miEdad <= 125){
    if(miEdad < 18){
        console.log('Eres menor de edad');
    }else{
        if(miEdad >= 18 && miEdad <= 59){
            console.log('Eres adulto');
        }else{
            console.log('Eres un anciano');
        }
    }
}else{
    console.log('Edad invalida');
}


if(miEdad < 1 || miEdad > 125){
    console.log('Edad invalida');
}else if(miEdad < 18){
    console.log('Eres menor de edad');
}else if(miEdad >= 18 && miEdad <= 59){
    console.log('Eres adulto');
}else{
    console.log('Eres un anciano')
}

let valor = prompt('Ingresa tu edad');

switch(true){
    case (valor > 1 && valor < 18):
        console.log('Eres menor de edad');
        break;
    case (valor > 17 && valor < 60):
        console.log('Eres mayor de edad')
        break;
    case (valor > 59 && valor < 126):
        console.log('Eres mayor de edad')
        break;
    default:
        console.log('Nel perrel')
}