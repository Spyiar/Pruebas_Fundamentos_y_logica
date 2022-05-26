let resultado = 0;

for(let i = 10; i >= 0; i--){
    resultado += i;
}
console.log(resultado);

const calificaciones = [90.5, 87.4, 65.6, 40.57];

let suma = 0;

for(let i = 0; i < calificaciones.length; i++){
    suma += calificaciones[i];
}

let promedio = suma / calificaciones.length;

console.log(promedio);


//ejercicios de foreach

let numeros = [1, 2, 3, 4, 5, 6, 7, 8];

numeros.forEach((numero, i, z) =>{
    console.log(`Actuamente estas en la posicion ${i+1} con el valor de ${numero} - ${z}`);
});