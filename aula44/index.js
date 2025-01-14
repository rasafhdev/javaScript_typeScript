// Cpaturar o evento de submit do formulário

const form = document.querySelector('#formulario')

form.addEventListener('submit', function (e) {
    e.preventDefault() //usado para prevenção

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')


    //sempre que eu quiser pegar um valor, vai ser necessário colocar a variavel.value
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    // trata o erro de difitação, que no caso, se peso ou altura ! (diferente de number)
    if (!peso) {
        setResultado('Peso invalido', false)
    }

})

function getNivelImc (imc) {
    const nivel = [
        'Abaixo do Peso',
        'Peso nomal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3',

    ]

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]

}

function getImc(peso, altura) {
    const imc = peso / altura ** 2
    return imc.toFixed(2)
}



function criaP () {
    const p = document.createElement('p')
    return p
}


function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = criaP ()

    if (isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)

}