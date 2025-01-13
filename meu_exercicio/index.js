dadosCanditados = []


function coletarDados () {
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    function recebeDadosForm (dados) {
        dados.preventDefault()

        const nome = document.querySelector('.nome')
        const profissao = document.querySelector('.profissao')
        const cidade = document.querySelector('.cidade')

        dadosCanditados.push({
            'nome': nome.value,
            'profissao': profissao.value,
            'cidade': cidade.value
        })

        console.log(dadosCanditados)

        resultado.innerHTML += `<p>${nome.value} Adicionado com sucesso!</p>`

    }

    form.addEventListener('submit', recebeDadosForm)

    
}

coletarDados()