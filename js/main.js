// DOM ELEMENTS

const btnArg = document.querySelector("#arg")
const btnBra = document.querySelector("#bra")
const btnCol = document.querySelector("#col")
const tema = document.querySelector("#tema")
const body = document.body
const card = document.querySelectorAll(".card")


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

    fetch("./js/destinosArg.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(destino => {
        const li = document.createElement("li")
        li.innerHTML = `<button class="btn-destino"><li id="${destino.id}">${destino.nombre}, $${destino.precio}</li></button>`
        listaArg.append(li)
      })
          const compraTandil = document.querySelector("#tandil")
          const compraBariloche = document.querySelector("#bariloche")
          const compraCarlosPaz = document.querySelector("#carlos-paz")
          compraTandil.addEventListener("click", comprarTandil)
          compraBariloche.addEventListener("click", comprarBariloche)
          compraCarlosPaz.addEventListener("click", comprarCarlosPaz)
    })
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

    fetch("./js/destinosBra.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(destino => {
        const li = document.createElement("li")
        li.innerHTML = `<button class="btn-destino"><li id="${destino.id}">${destino.nombre}, $${destino.precio}</li></button>`
        listaBra.append(li)
      })
          const compraFortaleza = document.querySelector("#fortaleza")
          const compraPorto = document.querySelector("#porto")
          const compraCopacabana = document.querySelector("#copacabana")
          compraFortaleza.addEventListener("click", comprarFortaleza)
          compraPorto.addEventListener("click", comprarPorto)
          compraCopacabana.addEventListener("click", comprarCopacabana)   
    })
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

    fetch("./js/destinosCol.json")
    .then(response => response.json())
    .then(data => {
      data.forEach(destino => {
        const li = document.createElement("li")
        li.innerHTML = `<button class="btn-destino"><li id="${destino.id}">${destino.nombre}, $${destino.precio}</li></button>`
        listaCol.append(li)
      })
          const compraSantaMarta = document.querySelector("#santa-marta")
          const compraCartagena = document.querySelector("#cartagena")
          const compraBogota = document.querySelector("#bogota")
          compraSantaMarta.addEventListener("click", comprarSantaMarta)
          compraCartagena.addEventListener("click", comprarCartagena)
          compraBogota.addEventListener("click", comprarBogota)   
    })
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
        text: "Estás por comprar un viaje a Bogota por $65.000",
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
    } else {
        tema.innerText = "Modo oscuro"
        card.forEach(card => card.classList.remove("card-dark"))
    }    
}



  





