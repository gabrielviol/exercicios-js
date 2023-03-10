/**
    Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
    multiplicação deles. Porém, não utilize o operador de mutiplicação.
*/

function multiplica(v1, v2){
    if(v1 >= 0 && v2 >= 0){
    let resultado = 0
    let menor = v1 < v2 ? v1 : v2
    let maior = v1 > v2 ? v1 : v2
        for(let i=0; i < menor; i++){
            resultado += maior
        }
        return console.log(resultado)
    } else { return console.log('valor invalido') }
    
}

multiplica(2, 2)