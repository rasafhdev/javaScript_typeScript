const form = document.querySelector('#form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const inputPeso = e.target.querySelector('#peso')
})

function criaParagrafo () {
    const p = document.createElement('p')
    return p
}

function setResultado (msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = criaParagrafo()

}