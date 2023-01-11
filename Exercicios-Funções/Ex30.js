// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorMenorVetor(vetor){
    let maior = vetor[0]
    let menor = vetor[0]
    vetor.forEach(number => {
        if(number > maior) maior = number
        if(number < menor)  menor = number 
    });
    console.log(`Maior - ${maior}, Menor - ${menor}`)
}

maiorMenorVetor([0, 1, 3, 6, -8])