// CLASS

class Destino{
    constructor(id, nombre, ciudad, pais, precio){
        this.id = id
        this.nombre = nombre
        this.ciudad = ciudad
        this.pais = pais
        this.precio = precio
    }
}

// OBJECTS

const tandil = new Destino("tandil", "Tandil", "Buenos Aires", "Argentina", 35000)
const bariloche = new Destino("bariloche", "Bariloche", "Rio Negro", "Argentina", 52000)
const carlosPaz = new Destino("carlos-paz", "Villa Carlos Paz", "Córdoba", "Argentina", 46000)
const fortaleza = new Destino("fortaleza", "Fortaleza", "Ceará", "Brasil", 87000)
const porto = new Destino("porto", "Porto Alegre", "Rio Grande", "Brasil", 92000)
const copacabana = new Destino("copacabana", "Copacabana", "Rio de Janeiro", "Brasil", 81500)
const santaMarta = new Destino("santa-marta", "Santa Marta", "Magdalena", "Colombia", 78000)
const cartagena = new Destino("cartagena", "Cartagena", "Bolivar", "Colombia", 71000)
const bogota = new Destino("bogota", "Bogota", "Antioquia", "Colombia", 65000)


// ARRAY

const ciudades = [tandil, bariloche, carlosPaz, fortaleza, porto, copacabana, santaMarta, cartagena, bogota]


// ARRAY FILTERS

const ciudadesArg = ciudades.filter((ciudad) => { return ciudad.pais == "Argentina"})
const ciudadesBra = ciudades.filter((ciudad) => { return ciudad.pais == "Brasil"})
const ciudadesCol = ciudades.filter((ciudad) => { return ciudad.pais == "Colombia"})


// STORAGE

localStorage.setItem('ciudadesArg', JSON.stringify(ciudadesArg))
localStorage.setItem('ciudadesBra', JSON.stringify(ciudadesBra))
localStorage.setItem('ciudadesCol', JSON.stringify(ciudadesCol))

const ciudadesArgStorage = JSON.parse(localStorage.getItem('ciudadesArg'))
const ciudadesBraStorage = JSON.parse(localStorage.getItem('ciudadesBra'))
const ciudadesColStorage = JSON.parse(localStorage.getItem('ciudadesCol'))


// DOM ELEMENTS

const btnArg = document.querySelector("#arg")
const btnBra = document.querySelector("#bra")
const btnCol = document.querySelector("#col")
const tema = document.querySelector("#tema")
const body = document.body
const card = document.querySelectorAll(".card")
const btnDestino = document.querySelectorAll(".btn-destino")

// EVENTS

btnArg.addEventListener("click", mostrarDestinosArg)
btnBra.addEventListener("click", mostrarDestinosBra)
btnCol.addEventListener("click", mostrarDestinosCol)
tema.addEventListener("click", cambiarTema)

// FUNCTIONS

function mostrarDestinosArg(){
    if(btnArg.innerText == "Ver Destinos"){
        btnArg.innerText = "Ocultar"
        let br = document.createElement("br")
        listaArg.append(br)

            for(destino of ciudadesArgStorage){
                const li = document.createElement("li")
                li.innerHTML = `
                    <button class="btn-destino"><li id="${destino.id}">${destino.nombre}, $${destino.precio}</li></button>
                `
                listaArg.append(li)
            }  
            const compraTandil = document.querySelector("#tandil")
            const compraBariloche = document.querySelector("#bariloche")
            const compraCarlosPaz = document.querySelector("#carlos-paz")
            compraTandil.addEventListener("click", comprarTandil)
            compraBariloche.addEventListener("click", comprarBariloche)
            compraCarlosPaz.addEventListener("click", comprarCarlosPaz)      
    } else {
        btnArg.innerText = "Ver Destinos"
        listaArg.innerHTML = ""
    }   
}


function mostrarDestinosBra(){
    if(btnBra.innerText == "Ver Destinos"){
        btnBra.innerText = "Ocultar"
        let br = document.createElement("br")
        listaBra.append(br)

            for(destino of ciudadesBraStorage){
                const li = document.createElement("li")
                li.innerHTML = `
                    <button class="btn-destino"><li id="${destino.id}">${destino.nombre}, $${destino.precio}</li></button>
                `
                listaBra.append(li)
            }
            const compraFortaleza = document.querySelector("#fortaleza")
            const compraPorto = document.querySelector("#porto")
            const compraCopacabana = document.querySelector("#copacabana")
            compraFortaleza.addEventListener("click", comprarFortaleza)
            compraPorto.addEventListener("click", comprarPorto)
            compraCopacabana.addEventListener("click", comprarCopacabana)
    } else {
        btnBra.innerText = "Ver Destinos"
        listaBra.innerHTML = ""
    }   
}

function mostrarDestinosCol(){
    if(btnCol.innerText == "Ver Destinos"){
        btnCol.innerText = "Ocultar"
        let br = document.createElement("br")
        listaCol.append(br)
            for(destino of ciudadesColStorage){
                const li = document.createElement("li")
                li.innerHTML = `
                    <button class="btn-destino"><li id="${destino.id}">${destino.nombre}, $${destino.precio}</li></button>
                `
                listaCol.append(li)
            }
            const compraSantaMarta = document.querySelector("#santa-marta")
            const compraCartagena = document.querySelector("#cartagena")
            const compraBogota = document.querySelector("#bogota")
            compraSantaMarta.addEventListener("click", comprarSantaMarta)
            compraCartagena.addEventListener("click", comprarCartagena)
            compraBogota.addEventListener("click", comprarBogota)
    } else {
        btnCol.innerText = "Ver Destinos"
        listaCol.innerHTML = ""
    }   
}

// BUY FUNCTIONS

function comprarTandil(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Tandil por $35.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarBariloche(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Bariloche por $52.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarCarlosPaz(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Villa Carlos Paz por $46.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarFortaleza(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Fortaleza por $87.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarPorto(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Porto Alegre por $92.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarCopacabana(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Copacabana por $81.500",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarSantaMarta(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Santa Marta por $78.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarCartagena(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Cartagena por $71.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}
function comprarBogota(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Confirmar compra?',
        text: "Estás por comprar un viaje a Bogota por $92.000",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            '¡Gracias por tu compra!',
            'Te esperamos para más viajes.',
            'success'
          )
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Compra cancelada',
            'Podes seguir viendo otros destinos :)',
            'error'
          )
        }
      })
}

// THEME FUNCTION

function cambiarTema(){
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")){
        tema.innerText = "Modo claro"
        card.forEach(card => card.classList.add("card-dark"))
        btnDestino.forEach(btn => btn.classList.add("btn-destino-dark"))
    } else {
        tema.innerText = "Modo oscuro"
        card.forEach(card => card.classList.remove("card-dark"))
        
    }    
}


  





