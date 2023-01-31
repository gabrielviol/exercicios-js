const aprovados = ['Gabriel', 'Rebecca', 'Daniel', 'João']

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})


// Arrow function
aprovados.forEach(nome => console.log(nome))


// A partir de uma função armazenada em uma constante
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)