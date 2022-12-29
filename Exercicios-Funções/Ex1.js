// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function func(num1, num2){
    let soma = num1 + num2
    let sub = num1 - num2
    let mult = num1 * num2
    let div = num1 / num2

    console.log(`soma = ${soma}, sub = ${sub}, mult = ${mult}, div = ${div}`)
}

func(3,2)