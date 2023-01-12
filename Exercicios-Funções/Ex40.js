// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

vetor = [ 1, 6.9, 7, 10]

function conceitoNotas(vetor){
    let vetorFinal = vetor.map(nota => {
        if( nota < 5){
            return [nota, 'D']
        } else if(nota < 7){
            return [nota, 'C']
        } else if(nota < 9){
            return [nota, 'B']
        } else if(nota <= 10){
            return [nota, 'A']
        } else{
            return 'Erro'
        }
    })
    return vetorFinal
}

console.log(conceitoNotas(vetor))