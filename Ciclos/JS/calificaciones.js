//Ejercicio #1

let calificaciones = [];
alert('Digita calificaciones una por una, 0 para finalizar');

let nota;

do{
    nota = prompt('Ingresa una nota');

    if(nota == '' || nota == null || isNaN(nota) || nota <= 0){
        alert('El valor es nulo o invalido');
        break;
    }else{
        calificaciones.push(nota);
    }
}while(nota != 0);

let calificaionMasAlta = 0;

calificaciones.forEach((calificacion)=>{
    if(calificacion > calificaionMasAlta){
        calificaionMasAlta = calificacion;
    }
});

alert(`Las calificaciones son: ${calificaciones}
La nota mas alta es: ${calificaionMasAlta}`)
console.log(calificaciones);
console.log(calificaionMasAlta);

/* 
let coleccionM = new Map();
let notaM;

do{
    let i = 0;
    notaM = prompt('Digita la nota');
    if(notaM > 0){
        coleccionM.set(`${i++}`, nota);
    }
}while(notaM != 0);

let notaAlta = 0;

coleccionM.forEach((data)=>{
    if(data > notaAlta){
        notaAlta = data;
    }
});

console.log(coleccionM)
console.log(notaAlta) */