console.log('Funciona');

let registro = JSON.parse(localStorage.getItem('usuario'));
let intentos = 0;
let intentosResetPass = 1;
let forgetPass = true;

function restablecerPass(){
    while(intentosResetPass <= 5){
        let passNew = prompt('Nueva contraseña');
        let confirmPass = prompt('Confirmar contraseña');
    
        if((passNew == '' || passNew == null || !isNaN(passNew)) || (confirmPass == '' || confirmPass == null)){
            alert('Campos invalidos');
            restablecerPass();
        }
        if (passNew != confirmPass){
            intentosResetPass++;
            alert(`Las contraseñas no coinciden, tienes ${intentosResetPass} de 5`);
        }else{
            alert('contraseña creada correctamente');
            return passNew;
        }

        if(intentosResetPass == 5){
            alert('Tu cuenta sera bloqueada');
            return;
        } 
    }
}

function validar(){
    let user = prompt('Digita tu nombre');
    let pass = prompt('Digita tu contraseña');
    if((user == '' || user == null || !isNaN(user)) || (pass == '' || pass == null)){
        alert('Usuario o contraseña invalidos');
        validar();
    }
    let usuario = {
        nombre: user,
        password: pass
    }

    if(usuario.nombre != registro.nombre || usuario.password != registro.password){
        let newPass = restablecerPass();
        usuario.password = newPass;
        localStorage.setItem('usuario', usuario);
    }
}

validar();

/* while(intentos <= 10){
    let user = prompt('Digita tu nombre');
    let pass = prompt('Digita tu contraseña');
    let usuario = {
        nombre: user,
        password: pass
    }
    if(usuario.nombre != registro.nombre || usuario.password != registro.password){
        alert('Usuario o contraseña incorrecta');
        let change = confirm('¿Deseas cambiar tu contraseña?');
        if(change == true){
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
        }else{
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
} */



 

