/*
    38) Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir todos os números
    ímpares que estão entre esses valores. Por padrão os valores devem ser 0 para início e 100 para fim. Atente
    para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor.
*/

function inicioFim(menor = 0, maior = 100){
    if (menor > maior) {
        menor = maior + menor
        maior = menor - maior
        menor = menor - maior        
    }
    let vetorImpares = []
    for(let i = menor; i <= maior; i++){
        if(i % 2 == 1){
            vetorImpares.push(i)
        }
    }
    return vetorImpares
}

console.log(inicioFim(22,2))