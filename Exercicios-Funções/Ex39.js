// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

// let vetor1 = [ 1, 2, 3, 4 ]
// let vetor2 = [ 4, 3, 2, 1 ]

// function inversaoVetores(vetor1, vetor2){
//     for(let i = 0; i < 4; i++){
//         vetor2.push(vetor1[i])
//     }    
//     vetor1.splice(0, 4)
//     for(let i = 0; i < 4; i++){
//         vetor1.push(vetor2[i])
//     } 
//     vetor2.splice(0, 4)
    
//     console.log(vetor1)
//     console.log(vetor2)
// }

// inversaoVetores(vetor1, vetor2)


/* CORRETO */

function trocaValores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for(let i = 0; i < vetorA.length; i++){
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
        }
    } else {
        return 'Vetores de tamanhos diferentes.'
    }

    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

trocaValores(vetorA, vetorB)