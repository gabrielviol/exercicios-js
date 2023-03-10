/**
    Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
    o segundo será o número de vezes que haverá repetição. Um array será retornado.
 */

function repeteElementos(repetir, vezes){
    let array = []
    for(let i = 0; i < vezes; i++){
        array.push(repetir)
    }
    return console.log(array)
}

repeteElementos(0 , 10)