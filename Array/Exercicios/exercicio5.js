/**
    Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
    números de strings.
 */

    function maiorOuIgual(primeiro, segundo) {
        if(typeof primeiro != typeof segundo) return false

        return console.log(primeiro >= segundo)
    }

    maiorOuIgual(1, 2)