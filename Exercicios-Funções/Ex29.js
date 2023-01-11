/*
    29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
    deste vetor estão na posição [10,20] dentro do vetor (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
    deles estão fora dessa posição, escrevendo estas informações.
*/

function percorreVetor(vetor){
    let dentroIntervalo = []
    let foraIntervalo = []
    for(let i = 0;i <= vetor.length; i++){
        if(vetor[i] >= 0){
            if(i > 9 && i < 20){
                dentroIntervalo.push(vetor[i])
            } else {
                foraIntervalo.push(vetor[i])
            }
        }
    }
    console.log(`Dentro - ${dentroIntervalo.length}, Fora - ${foraIntervalo.length}`)
}

percorreVetor([1, , 3, , 5, , 7, 8, 9, 10, 11, 12, 45, 89, , , , , , , , , , , , 80, 90, 900, 9099])