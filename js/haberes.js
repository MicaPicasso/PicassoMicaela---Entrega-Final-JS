const formPago= document.getElementById("form-haberes"),
periodoPago = document.getElementById("periodo-haberes"),
montoPago= document.getElementById("monto-haberes"),
botonPago= document.getElementById("btn-haberes"),
checkNewEmpleado= document.getElementById("check-haberes"),
divHaber= document.getElementById("nuevo-haber"),
sectionPago=document.getElementById("section-haberes"),
inputEmpleado= document.getElementById("input-empleado"),
pEmpleado= document.getElementById("detalle-empleado")


// console.log(formPago);
// console.log(periodoPago);
// console.log(montoPago);
// console.log(botonPago);
// console.log(checkNewEmpleado);
// console.log(divHaber);


const meses2023=[
    "01/2023",
    "02/2023",
    "03/2023",
    "04/2023",
    "05/2023",
    "06/2023",
    "07/2023",
    "08/2023",
    "09/2023",
    "10/2023",
    "11/2023",
    "12/2023",
    "01/2024",
]

meses2023.forEach(periodo=>{
    let option= document.createElement("option")
    option.value= periodo;
    option.innerText= periodo;
    periodoPago.appendChild(option);
})





// aca me traje las cosas de localstorage
const empleados=[];
function recuperarempleadosLS(){
    return JSON.parse(localStorage.getItem("empleados"));
}
const empleadosLS = recuperarempleadosLS();
console.log(empleadosLS);



inputEmpleado.addEventListener("change", ()=>{
    let empleadoFound= empleadosLS.find((empleados)=>{
        pEmpleado.innerHTML= empleados.nombre; 
        return empleados.cuil == inputEmpleado.value;
    })
    if(!empleadoFound){
        pEmpleado.innerText= "EMPLEADO NO ENCONTRADO"
    }
})



// boton confirmar
botonPago.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(`Depositaste ${montoPago.value} por el periodo ${periodoPago.value} cuil n° ${inputEmpleado.value} nombre ${pEmpleado.value}`);
    console.log(pEmpleado);
    
    
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: `¿Deseas realizar un pago de $${montoPago.value}, en concepto de haberes por el periodo ${periodoPago.value}?`,
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Acepto',
        cancelButtonText: 'No, cancelar.',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Listo!',
            'Tu pago se ha realizado.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu operacion se ha cancelado',
            'error'
          )
        }
      })
})
 


// trabajar con el boton de guardar

