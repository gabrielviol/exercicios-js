/**
    Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
    parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
    como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
    seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
    é igual a minimo ou a maximo.
 */

function entre(min, max, num, inclusivo = false){
    if(inclusivo) return console.log(num >= min && num <= max)  
    
    else return console.log(num > min && num < max)
}

entre(1, 5, 1, true)
entre(1, 5, 1)