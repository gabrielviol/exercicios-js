/**
    Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
    elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
    exemplos abaixo para um melhor entendimento:
 */

function objetoParaArray(obj){
    const resultado = []
    for(let chave in obj ){
        resultado.push([chave, obj[chave]])
    }

    return resultado
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    }))

