botonIngresar.onclick = (e) =>{
    e.preventDefault();
    let sCorreoIngresado = '';
    let spasswordIngresada = '';
    let bAcceso = false;

    sCorreoIngresado = document.querySelector('#txtCorreoIngresado').value;
    spasswordIngresada = document.querySelector('#txtpasswordIngresada').value;

    bAcceso = validarCredenciales(sCorreoIngresado, spasswordIngresada);

    if( bAcceso == true){
        ingresar ();
    }
    else{
      Swal.fire({
        icon: 'error',
        iconColor:'red',
        text: 'Usuario y/o Contraseña inválido.',
        buttonsStyling:false,
        customClass:{
          popup:'popup-class',
          confirmButton: 'confirmButton-class',
        }
      })
  }
}

function ingresar(){
    let rol = sessionStorage.getItem('rolUsuarioActivo');
    switch(rol){
        case 'Administrador':
            const Toast = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                iconColor:'#1affd5',
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                  toast.addEventListener('mouseleave', timeOutAdmin())
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'Verificando credenciales',
                customClass:{
                  popup:'popup-class',
                }
              })
                          
        break;
        case 'Usuario Cliente':
            const Toast1 = Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                iconColor:'#1affd5',
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast1) => {
                  toast1.addEventListener('mouseenter', Swal.stopTimer)
                  toast1.addEventListener('mouseleave', Swal.resumeTimer)
                  toast1.addEventListener('mouseleave',  timeOutCliente())                  
                }
              })
              Toast1.fire({
                icon: 'success',
                title: 'Verificando credenciales'
              })
            
        break;
    }
}
