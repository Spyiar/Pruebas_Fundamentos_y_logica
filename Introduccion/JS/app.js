console.log('Funciona');
/* let usuario = {
    nombre : 'juan',
    password : '12345'
}
localStorage.setItem('usuario', JSON.stringify(usuario)); */

//let intentos = 0;


function restablecerPass(){
    let intentosResetPass = 1;
    while(intentosResetPass <= 5){
        let passNew = prompt('Nueva contraseña');
        let confirmPass = prompt('Confirmar contraseña');
    
        if((passNew == '' || passNew == null) || (confirmPass == '' || confirmPass == null)){
            alert(`Campos invalidos, tienes ${intentosResetPass} de 5 intentos`);
            restablecerPass();
        }
        if (passNew != confirmPass){
            intentosResetPass++;
            alert(`Las contraseñas no coinciden, tienes ${intentosResetPass} de 5 intentos`);
            restablecerPass();
        }else{
            alert('contraseña creada correctamente');
            intentosResetPass = 5;
            return passNew;
        }

        if(intentosResetPass == 5){
            alert('Tu cuenta sera bloqueada');
            return;
        } 

        return passNew;
    }
}

function validar(){
    let registro = JSON.parse(localStorage.getItem('usuario'));
    
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
        alert('Usuario o contraseña incorrectos');
        let changePass = confirm('¿Deseas cambiar tu contraseña?');
        if(changePass){
            let newPass = restablecerPass();
            usuario.password = newPass;
            console.log(JSON.stringify(usuario));
            localStorage.setItem('usuario', JSON.stringify(usuario));
            validar();
        }else{
            validar();
        }
    }else{
        return alert('Iniciado correctamente');
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



 

