let nombre = prompt('Digita tu nombre');
let salario = prompt('Digita tu salario por dia');
let diasTrabajados = prompt('Digita los dias trabajados');
let total = parseFloat(diasTrabajados * salario); 
alert(`Hola, ${nombre}. Tu salario total por los dias ${diasTrabajados} trabajados es de: $${total}`); 

let fecha = new Date();

console.log(`Hola, estamos en el mes ${fecha.getMonth()} en el dia ${fecha.getDay()} con ${fecha.getHours()} hora(s) y ${fecha.getMinutes()} munitos y ${fecha.getSeconds()} seguntos.`);