console.log('Funciona');

let intentosResetPass = 1;
let forgetPass = true;

while(intentosResetPass <= 5){
    let passNew = prompt('Nueva contraseña');
    let confirmPass = prompt('Confirmar contraseña');

    if (passNew != confirmPass){
        intentosResetPass++;
        alert(`Las contraseñas no coinciden, tienes ${intentosResetPass} de 5`);
    }else{
        alert('contraseña creada correctamente');
        break;
    }
}

