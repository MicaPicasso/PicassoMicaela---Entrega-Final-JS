
const contenedor= document.getElementById("contenedor")


const pintarOpciones =(arr)=>{
    let card;
    for(const item of arr){
        const{id, titulo, descripcion, img}= item;
    card= `<div class="card" style="width: 18rem;">
    <img src="../multimedia/${img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${titulo.toUpperCase()}</h5>
      <p class="card-text">${descripcion}</p>
      <a href="#" class="btn btn-primary btn-card" id="${id}">Conocé más</a>
    </div>
  </div>`
    
    contenedor.innerHTML += card;
    }
}


fetch("../data/creditos.json")
.then(res=>res.json())
.then(creditos=>{
console.log(creditos);
pintarOpciones(creditos);
})