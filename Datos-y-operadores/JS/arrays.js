
let numeroEntradas = prompt('Indica el tamaño del array');
const array1 = [];
let array2 = [];
let array3 = [];

for (let i = 0; i < numeroEntradas; i++) {
  array1[i] = prompt((i + 1)+'. Indique un numero para el primer arreglo');
}

for(let i = 0; i < numeroEntradas; i++){
  array2[i] = prompt((i + 1)+'. Indique un numero para el primer arreglo');
};

console.log(array1, array2);

let j = 0;
for(let i = 0; i < numeroEntradas; i++){
  array3[j] = array1[i];
  j++;
  array3[j] = array2[i];
  j++
}

for(let i = 0; i < (numeroEntradas * 2); i++){
  console.log(array3[i]);
}
