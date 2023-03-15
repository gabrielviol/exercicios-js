/**
    Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
    array recebido como parâmetro.
 */

function retornaNumber(array){
    return array.filter(item => typeof item === "number")
}

console.log(retornaNumber(['oi','oi',2,3,4,'oi','oi',true]))