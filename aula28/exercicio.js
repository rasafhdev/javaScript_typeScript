const numero = Number(prompt('Ditite um numero: '))
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero

texto.innerHTML = ''
texto.innerHTML = `<p>Raiz Quadrada: ${Math.sqrt(numero)}<p/>`
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondado para baixo ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Arredondado para cima ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`
