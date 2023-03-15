/**
    Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
    pares e que também tenham índices pares.
 */
const array = [ 3, 5, 9, 11, 4, 2]

function retornaPar(array){
    let par = array.filter( (valor, indice) => valor % 2 == 0 || indice % 2 == 0 ? valor : 0 )

    return par
}

console.log(retornaPar(array))