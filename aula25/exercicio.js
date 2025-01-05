const nome = prompt('Nome completo: ')

document.body.innerHTML += `Seu nome completo é: ${nome}<br />`
document.body.innerHTML += `Seu nome tem ${nome.length} Letras!<br /> `
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]}<br />`
document.body.innerHTML += `O primeiro indice da letra a em seu nome é: ${nome.search('a')}<br />`
document.body.innerHTML += `As ultimas 3 letras do seu nome são: ${nome.slice(-3)}<br />`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')}<br />`
document.body.innerHTML += `Seu nome maiusculo: ${nome.toUpperCase()}<br />`
document.body.innerHTML += `Seu nome minusculo: ${nome.toLowerCase()}<br />`