// 12) Faça um algoritmo que calcule o fatorial de um número.

const fatorial = (numero) => {
    if(numero == 0 ){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(3))
console.log(fatorial(4))
console.log(fatorial(5))
