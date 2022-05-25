/* //Listado creciente, decreciente, random o igualado

let array = [];
let creciente = false;
let decreciente = false;

for(let i = 0; i < 10; i++){
  array[i] = prompt((i+1)+'. Digite un numero');
}

for(let i = 0; i < 9; i++){
  if(array[i] < array[i+1]){
    creciente = true;
  }
  if(array[i] > array[i+1]){
    decreciente = true;
  }
}

if(creciente == true && decreciente == false){
  alert('Es un listado creciente');
  console.log(array);
}else if(creciente == false && decreciente == true){
  alert('Es un listado decreciente');
  console.log(array);
}else if(creciente == true && decreciente == true){
  alert('Es un listado random');
  console.log(array);
}else if(creciente == false && decreciente == false){
  alert('Es un listado igualado');
  console.log(array);
}


//Encontrar un dato 
let nombres = ['Juan', 'Jose', 'Vanessa', 'Maria', 'Luisa'];

for(let i = 0; i < nombres.length; i++){
  let nombre = prompt('Digita un nombre');

  if(nombres[i] == nombre){
    alert('Encontrado correctamente');
    break
  }else{
    alert('El nombre no existe');
  }
}
 */

/* //Desplazar una posicion el arreglo

let numeros = []

for(let i = 0; i < 10; i++){
  numeros[i] = prompt(`${i+1}. Digita un numero`);
}
console.log(numeros);
let ultimo = numeros[9];
for(let i = 8; i > 0; i--){
  numeros[i + 1] = numeros[i]
}
numeros[0] = ultimo;

for(let i = 0; i < 10; i++){
  console.log(numeros[i]);
}


 */

//Ordenamiento por insercion

let limite = prompt('Digita el numero de elementos del arreglo');

let array = [];

for(let i = 0; i < limite; i++){
  array[i] = prompt(`${i + 1}. Digita un numero`);
}

console.log(array);
for(let i = 0; i < limite; i++){
  let posicion = i;
  let aux = array[i];

  while(posicion > 0 && (array[posicion - 1] > aux)){
    array[posicion] = array[posicion - 1];
    posicion--;
  }
  array[posicion] = aux;
}

console.log('Ordes ASC');
for(let i = 0; i < limite; i++){
  console.log(array[i])
}

console.log('Ordes DESC');
for(let i = (limite-1); i > 0; i--){
  console.log(array[i]);
}