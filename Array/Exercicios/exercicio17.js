/**
    Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
 */

function somaArray(array){
    let soma = 0
    let percorre = array.forEach(valor => soma += valor)

    return soma
}

console.log(somaArray([1, 2, 4]))