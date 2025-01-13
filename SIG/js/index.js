async function atualizarSig() {
    const botao = document.querySelector('.botao');
    const resultado = document.querySelector('.resultado');
    const nomeUsuarioSpan = document.querySelector('#nome-usuario');

    // Função para buscar o nome do usuário do backend
    async function buscarNomeUsuario() {
        try {
            const response = await fetch('http://127.0.0.1:5500');
            const data = await response.json();
            nomeUsuarioSpan.textContent = data.nome; // Atualiza o nome no HTML
        } catch (error) {
            console.error('Erro ao buscar o nome do usuário:', error);
            nomeUsuarioSpan.textContent = 'Usuário desconhecido';
        }
    }

    // Captura o clique no botão
    function capturaBotao(evento) {
        evento.preventDefault();
        resultado.innerHTML += '<p>Sistema atualizado com sucesso!</p>';
        console.log('Botão foi clicado!');
    }

    botao.addEventListener('click', capturaBotao);

    // Chama a função para buscar o nome do usuário ao carregar a página
    buscarNomeUsuario();
}

atualizarSig();
