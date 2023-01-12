/*
    36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
    inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
    elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
    o valor do elemento for maior que 5.
*/

let vetor = [ 1, 3, 6, 8, 10, 12, 40]
let inteiro = 5

function mutiplicaPeloInteiro(vetor, inteiro){
    let vetorResultado = vetor.map(valor => valor * inteiro)
    return vetorResultado
}

function multiplicaMaior5(vetor, inteiro){
    let vetorResultadoMaior5 = vetor.map(valor => valor > 5 ? inteiro * valor : false)
    return console.log(
    `Vetor1 [${vetor}]  -  Vetor2 [${vetorResultadoMaior5}]`)
}

multiplicaMaior5(mutiplicaPeloInteiro(vetor, inteiro), inteiro)

