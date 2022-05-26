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

/* for(let i = 0; i < paises.length; i++){
    if(paises[i]){
        console.log(`El pais en la posicion ${i+1} es: ${paises[i]}`);
    }else{
        console.log('No existe');
    }
} */

console.log(`El pais en la posicion 3: ${paises[3]}`);
console.log(`El pais en la posicion 0: ${paises[0]}`);
console.log(`El pais en la posicion -2: ${paises[-2]}`);
console.log(`El pais en la posicion 4: ${paises[4]}`);
console.log(`El pais en la posicion 15: ${paises[15]}`);
console.log(`El pais en la posicion 8: ${paises[8]}`);
console.log(`El pais en la posicion 13: ${paises[13]}`);



let pokemons = new Map();

pokemons.set('nombre', 'pikachu'),
pokemons.set('atack', 90);

for(let [key, value] of pokemons){
    console.log(key+" - "+value);
}

let mySet = new Set();

mySet.add(1);
mySet.add(true);
mySet.add(()=> 1);
mySet.add('Hello world');

for(let key of mySet){
    console.log(key)
}


//Ejercicio #2

let countriesMap = new Map();
let countriesSet = new Set();
let countriesArray = ['Panama', 'Egipto', 'Argentina'];

//inicializacion con Map
countriesMap.set(1 , 'Panama');
countriesMap.set(2 , 'Egipto');
countriesMap.set(3 , 'Argentina');
console.log(countriesMap);

//inicializacion con Set
countriesSet.add('Panama');
countriesSet.add('Egipto');
countriesSet.add('Argentina');
console.log(countriesSet);

//Ejercicio Map
countriesMap.set(4, 'Francia');
console.log(countriesMap);
countriesMap.delete(2);
console.log(countriesMap);
countriesMap.set(5, 'Australia');
console.log(countriesMap);
countriesMap.set(6, 'Brasil');
console.log(countriesMap);
let mapOrdenado = new Map([...countriesMap.entries()].sort());
console.log('Map ordenado'+mapOrdenado);

//Ejercicio Set
countriesSet.add('Francia');
console.log(countriesSet);
countriesSet.delete('Egipto');
console.log(countriesSet);
countriesSet.add('Brasil');
console.log(countriesSet);

//Ejercicio Array
console.log(countriesArray);
countriesArray.push('Francia');
console.log(countriesArray);
countriesArray.splice(1,1);
console.log(countriesArray);
countriesArray.push('Australia');
console.log(countriesArray);
countriesArray.push('Brasil');
console.log(countriesArray);
countriesArray.sort();
console.log(countriesArray);    