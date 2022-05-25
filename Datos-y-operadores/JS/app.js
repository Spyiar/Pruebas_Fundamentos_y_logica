console.log('Funciona');

<<<<<<< Updated upstream
=======
let numeros = [5,2,7,9,3,1,0,4,6];
console.log(numeros);
let i, n, j, aux;


n = numeros.length;

for(j = 1; j < n; j++){
    for(i = 0; i < (n - j); i++){
        if(numeros[i] > numeros[i + 1]){
            aux = numeros[i];
            numeros[i] = numeros[i + 1];
            numeros[i + 1] = aux;
        }
    }
}

console.log(numeros);

let array = [15,78,4,8,7,58,9,5,6];

for(let i = 0; i < (array.length - 1); i++){
    for(let j = 0; j < (array.length - 1); j++){
        if(array[j] > array[j + 1]){
            let aux = array[j];
            array[j] = array[j + 1];
            array[j+1] = aux;
        }
    }
}

console.log(array)
>>>>>>> Stashed changes
