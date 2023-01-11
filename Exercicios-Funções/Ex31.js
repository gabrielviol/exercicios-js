// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console

function numerosNegativos(vetor){
    let negativos = 0
    for(let i = 0; i <= vetor.length; i++){
        
        if(vetor[i] < 0){
            negativos++
        }
    }
    return negativos
}

console.log(numerosNegativos([-1, 1, -8, 6, -5, -4, 0, 2, -9]))