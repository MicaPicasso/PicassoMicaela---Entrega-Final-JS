const formRegister= document.getElementById("form-register"),
nombreRegister= document.getElementsByClassName("nombre-register"),
apellidoRegister= document.getElementsByClassName("apellido-register"),
usuarioRegister= document.getElementsByClassName("usuario-register"),
passRegister= document.getElementsByClassName("pass-register"),
dniRegister= document.getElementsByClassName("dni-register"),
cardRegister= document.getElementsByClassName("card-register"),
btnRegister= document.getElementsByClassName("boton-crearUsuario"),
mailRegister= document.getElementsByClassName("mail-register"),
btnNewUsuario= document.getElementById("btn-newUsuario")


console.log(nombreRegister);
console.log(apellidoRegister);
console.log(usuarioRegister);
console.log(passRegister);
console.log(dniRegister);
console.log(cardRegister);
console.log(mailRegister);
console.log(btnNewUsuario);


let usuarios;

// si hay usuarios en la base de datos usuarios=base de datos
// si no me devuelve el array vacio usuarios=[]
// esto es porque sino de devuelve null
// esto es del index igual
if (localStorage.getItem("usuarios")) {
    usuarios=JSON.parse(localStorage.getItem("usuarios"))
}else{
    usuarios=[];
}

// constructor para un nuevo usuario
class Usuario{
    constructor(nombre,apellido,mail,usuario,pass,dni,card){
        this.nombre= nombre,
        this.apellido=apellido,
        this.mail=mail,
        this.usuario=usuario,
        this.pass=pass,
        this.dni=dni,
        this.card=card;
    }
}


function guardarUsuario(array,usuario){
    return array.push(usuario)
}
// guardar un nuevo usuario con el boton de "crear usuario"
function crearUsuario(array){
    return localStorage.setItem("usuarios", JSON.stringify(array))
}

formRegister.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault()
    if(nombreRegister[0].value=="" || apellidoRegister[0].value=="" || usuarioRegister[0].value=="" || passRegister[0].value=="" || dniRegister[0].value=="" || cardRegister[0].value=="" || mailRegister[0].value==""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 2500
            })
    }else{
        const newUsuario= new Usuario(nombreRegister[0].value, apellidoRegister[0].value,mailRegister[0].value, usuarioRegister[0].value, passRegister[0].value, dniRegister[0].value, cardRegister[0].value)
        console.log(newUsuario);
        guardarUsuario(usuarios, newUsuario)
        crearUsuario(usuarios);
        formRegister.reset();
    }
    
}

// btnNewUsuario.addEventListener("click", ()=>{
//    if(nombreRegister[0].value==""){
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Debes Completar los campos requeridos',
//         showConfirmButton: false,
//         timer: 2500
//       })
//    }else{  
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: '¡Listo! Ya puedes ingresar con tu usuario',
//         showConfirmButton: false,
//         timer: 2500
//         })
//     }
// })