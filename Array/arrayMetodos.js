const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Vertappen') //Adiciona elemento ao final do array
console.log(pilotos)

pilotos.shift() //remove primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Halmilton')//Adiciona no começo do array

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Botas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)