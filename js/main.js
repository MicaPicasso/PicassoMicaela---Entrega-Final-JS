const usuarioIngreso= document.getElementById("usuario-ingreso"),
passIngreso= document.getElementById("pass-ingreso"),
checkIngreso= document.getElementById("check-ingreso"),
btnIngreso=document.getElementById("btn-ingreso"),
formIngreso=document.getElementById("form-index");

// falta traer las cosas del localstorage
// const usuarios= JSON.parse(localStorage.getItem("usuarios"))


// aca me traje las cosas de localstorage
function recuperarLS(){
    return JSON.parse(localStorage.getItem("usuarios"));
}
const usuariosLS = recuperarLS();
// console.log(usuariosLS);

formIngreso.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(usuarioIngreso.value);
    let userFound= usuariosLS.find((usuario)=>{
        return usuario.usuario == usuarioIngreso.value && usuario.pass == passIngreso.value;
    })
    if(userFound){
        window.location.href="../pages/escritorio.html"
    }else{
        Swal.fire('Usuario o contraseña INCORRECTOS')
    }
})
 
function guardar(valor){
    let user={usuario: usuarioIngreso.value, pass: passIngreso.value};
    if(valor== "sessionStorage"){
        sessionStorage.setItem("ingreso", JSON.stringify(user));

    }
    if(valor== "localStorage"){
        localStorage.setItem("ingreso", JSON.stringify(user));
    }
    return user
}




