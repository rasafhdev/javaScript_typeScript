const alunos = ['Rodrigo', 'Asafh', 'Vieira']

// Adicionando valor no final
alunos.push('Helena')
console.log(alunos)

// Adicionando valor no inicio, todos os elementos mudam de indice
alunos.unshift('Patricia')
console.log(alunos)

// Removnedo o ultimo valor:
alunos.pop()
console.log(alunos)

// Removando valores através do indice
delete alunos[0]
console.log(alunos)


