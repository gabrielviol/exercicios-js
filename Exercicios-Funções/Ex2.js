/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulo(ladoA, ladoB, ladoC){
    if(ladoA == ladoB && ladoA == ladoC){
        console.log('Este é um triangulo Equilátero!')
    }else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        console.log('Este é um triangulo Escaleno!') 
    }else{
        console.log('Este é um triangulo Isósceles!')
    }
}

triangulo(1, 1, 1)
triangulo(1, 2, 3)
triangulo(1, 1, 3)
triangulo(2, 1, 2)