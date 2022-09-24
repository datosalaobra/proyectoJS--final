//evento onload
window.onload = function() {
    //array
        let rol = ["Plan Premium", "Plan Básico"];
    //for each
        rol.forEach(element => {
        let opcion = document.createElement("option");
            document.querySelector("#mySelect").appendChild(opcion);
            opcion.innerHTML = element;
        });
    };

btnIniciarSesion.onclick = () => {
    if(window.innerWidth>850){
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "10px";
        formularioLogin.style.display = "block";
        cajaRegistro.style.opacity = "1";
        cajaLogin.style.opacity = "0";
    }
    else{
        formularioRegistro.style.display = "none";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display = "block";
        cajaRegistro.style.display = "block";
        cajaLogin.style.display = "none";
    }    
}
btnRegistrarse.onclick = () =>{
    if(window.innerWidth>850){
        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "410px";
        formularioLogin.style.display = "none";
        cajaRegistro.style.opacity = "0";
        cajaLogin.style.opacity = "1";
    }
    else{
        formularioRegistro.style.display = "block";
        contenedorLoginRegistro.style.left = "0px";
        formularioLogin.style.display = "none";
        cajaRegistro.style.display = "none";
        cajaLogin.style.display = "block";
        cajaLogin.style.opacity = "1";
    }
}

window.addEventListener("resize", ajusteWidth);

function ajusteWidth() {
    if(window.innerWidth > 800){
        cajaLogin.style.display = "block";
        cajaRegistro.style.display = "block";
    }
    else{
        cajaRegistro.style.display = "block";
        cajaRegistro.style.opacity = "1";
        cajaLogin.style.display = "none";
        formularioLogin.display = "block";
        formularioRegistro.display = "none";
        contenedorLoginRegistro.style.left = "0px";
    }
}

ajusteWidth();

function Verificar(){
    let arrayAuxiliar = JSON.parse(localStorage.getItem("ListadoSubscriptores"));
    if (arrayAuxiliar){
        for (elemento of arrayAuxiliar){
            ArrayDeSubscriptores.push(new Subscirptor(elemento));
        }
    }
}

function obtenerUsuarios(){
    let listaUsuarios = JSON.parse (localStorage.getItem("ListadoSubscriptores"));  
    return listaUsuarios;
}

function validarCredenciales(pCorreo, ppassword){ 
    let ListadoSubscriptores = obtenerUsuarios();
    let bAcceso = false;

    for (var i=0; i < ListadoSubscriptores.length; i++ ){
        if(pCorreo == ListadoSubscriptores[i].correo && ppassword == ListadoSubscriptores[i].password){
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', ListadoSubscriptores[i].nombre);
            sessionStorage.setItem('rolUsuarioActivo', ListadoSubscriptores[i].rol);
        }
    }
    return bAcceso;
}

function timeOutPremium(){
    setTimeout(function(){window.location.href = './pages/userPremium'; },1000);
}
  
function timeOutBasico(){
    setTimeout(function(){window.location.href = './pages/userStandar.html'; },1000);
}
