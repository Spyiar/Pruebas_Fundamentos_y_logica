console.log('Funciona');

let intentos = 0;
let registro = JSON.parse(localStorage.getItem('usuario'));
let intentosResetPass = 1;
let forgetPass = true;



while(intentos <= 10){
    let user = prompt('Digita tu nombre');
    let pass = prompt('Digita tu contraseña');
    let usuario = {
        nombre: user,
        password: pass
    }
    if(usuario.nombre != registro.nombre || usuario.password != registro.password){
        alert('Usuario o contrasña incorrecta');
        let change = confirm('¿Deseas cambiar tu contraseña?');
        if(change == true){
            setTimeout(()=>{
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
            }, 10000000);
            
            break;
        }
    }else{
        alert('Es correcto');
        break;
    }
    intentos++;
    if(intentos == 3){
        alert('Tu cuenta sera bloqueada');
        break;
    }
}



 

