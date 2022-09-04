// Resgistro
class Subscirptor{
    constructor(obj){
        this.nombre = obj.nombre;
        this.correo = obj.correo;
        this.password = obj.password;
        this.rol = obj.rol;
    }
}

let ArrayDeSubscriptores = [];

Verificar()

botonGuardar.onclick = () =>{
    let nombreIngresado = document.getElementById('txtNombreCompleto').value;
    let correoUsuario = document.getElementById('txtCorreoUsuario').value;
    let passwordUsuario = document.getElementById('password').value; 
    let rolUsuario = document.getElementById('mySelect').value;

    let objUsuario = {nombre: nombreIngresado, correo: correoUsuario, password: passwordUsuario, rol: rolUsuario}

    ArrayDeSubscriptores.push(new Subscirptor(objUsuario));

    // Guardamos al nuevo subscriptor
    localStorage.setItem("ListadoSubscriptores",JSON.stringify(ArrayDeSubscriptores));
}
