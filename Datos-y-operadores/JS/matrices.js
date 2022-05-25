let columna = prompt('Indique la cantidad de columnas de la matriz');
let filas = prompt('Indique la cantidad de filas de la matriz');


let array = [[],[],[]];

for(let i = 0; i < filas; i++){
    for(let j = 0; j < columna; j++){
        array[i][j] = prompt('Añadir numero en la posicion: '+i+' - '+j);
    }
}

for(let i = 0; i < filas; i++){
    for(let j = 0; j < columna; j++){
        console.log(array[i][j]);
    }
}


//Ejercicios #1 

let paises = ['Argentina', 'Australia', 'Belgica', 'Brasil', 'Chile', 'Egipto', 'Francia', 'Panama', 'Sudafica', 'Turquia', 'Tunez'];

let size = paises.length;
console.log(`El tamaño del array de paises es: ${size}`);

for(let i = 0; i < paises.length; i++){
    if(paises[i]){
        console.log(`El pais en la posicion ${i+1} es: ${paises[i]}`);
    }else{
        console.log('No existe');
    }
}

console.log(`El pais en la posicion 3: ${paises[3]}`);
console.log(`El pais en la posicion 0: ${paises[0]}`);
console.log(`El pais en la posicion -2: ${paises[-2]}`);
console.log(`El pais en la posicion 4: ${paises[4]}`);
console.log(`El pais en la posicion 15: ${paises[15]}`);
console.log(`El pais en la posicion 8: ${paises[8]}`);
console.log(`El pais en la posicion 13: ${paises[13]}`);