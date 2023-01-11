// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function mediaAritimetica(vetor){
    let soma = 0
    vetor.forEach(elemento => {
        soma += elemento
    });
    return soma/vetor.length
}

console.log(mediaAritimetica([10, 10]))

