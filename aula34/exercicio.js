
meuArray = []

function pegarDados () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    
    function recebeEventoForm (evento) {
        evento.preventDefault()

        const nome = document.querySelector('.nome')
        const sobrenome = document.querySelector('.sobrenome')
        const peso = document.querySelector('.peso')
        const altura = document.querySelector('.altura')

        meuArray.push({
            'nome':   nome.value,
            'sobrenome': sobrenome.value,  
            'peso': peso.value,
            'altura': altura.value
        })

        console.log(meuArray)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}: Adicionado com sucesso!</p>`
        
    }
    
    
    form.addEventListener('submit', recebeEventoForm);

}


pegarDados()