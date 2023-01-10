/*
    18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
    switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function numeroPorExtenso(numero){
    switch(numero){
        case 10:
            console.log('Dez')
            break
        case 9:
            console.log('Nove')
            break
        case 8:
            console.log('Oito')
            break
        case 7:
            console.log('Sete')
            break
        case 6:
            console.log('Seis')
            break
        case 5:
            console.log('Cinco')
            break
        case 4:
            console.log('Quatro')
            break
        case 3:
            console.log('Três')
            break
        case 2:
            console.log('Dois')
            break
        case 1:
            console.log('Um')
            break
        default:
            console.log('Numero fora do intervalo')
           
    }
}

numeroPorExtenso(1)
numeroPorExtenso(4)
numeroPorExtenso(6)
numeroPorExtenso(8)
numeroPorExtenso(10)
numeroPorExtenso(11)