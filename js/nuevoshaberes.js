const cuilNuevo= document.getElementById("cuil-nuevo"),
nombreNuevo= document.getElementById("nombre-nuevo"),
convenioNuevo= document.getElementById("convenio-nuevo"),
categoriaNuevo= document.getElementById("categoria-nuevo"),
antiguedadNuevo= document.getElementById("antiguedad-nuevo"),
btnNewEmpleado= document.getElementById("btn-nuevohaber"),
formNewEmpleado= document.getElementById("form-nuevoEmpleado")

console.log(cuilNuevo);
console.log(nombreNuevo);
console.log(convenioNuevo);
console.log(categoriaNuevo);
console.log(antiguedadNuevo);
console.log(btnNewEmpleado);



let empleados;


if (localStorage.getItem("empleados")) {
    empleados=JSON.parse(localStorage.getItem("empleados"))
}else{
    empleados=[];
}


// constructor para un nuevo empleado
class Empleado{
    constructor(cuil, nombre, convenio, categoria, antiguedad){
        this.cuil= cuil;
        this.nombre= nombre;
        this.convenio= convenio;
        this.categoria=categoria;
        this.antiguedad=antiguedad;
    }
}

function guardarEmpleados(array,empleado){
    return array.push(empleado)
}
// guardar un nuevo usuario con el boton de "crear usuario"
function crearEmpleado(array){
    return localStorage.setItem("empleados", JSON.stringify(array))
}

formNewEmpleado.addEventListener('submit', validarFormularioEmpleados);

function validarFormularioEmpleados(e){
    e.preventDefault()
    if(cuilNuevo.value=="" || nombreNuevo.value=="" || convenioNuevo.value=="" || categoriaNuevo.value=="" || antiguedadNuevo.value==""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Todos los campos son obligatorios',
            showConfirmButton: false,
            timer: 2500
            })
    }else{
        const newEmpleado= new Empleado(cuilNuevo.value, nombreNuevo.value,convenioNuevo.value, categoriaNuevo.value, antiguedadNuevo.value)
        console.log(newEmpleado);
        guardarEmpleados(empleados, newEmpleado)
        crearEmpleado(empleados);
        formNewEmpleado.reset();
    }
    
}



