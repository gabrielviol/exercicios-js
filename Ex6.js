/*
    06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
    primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
    retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples (capitalInicial, Taxajuros, tempoAplicado){
    return capitalInicial + (capitalInicial * Taxajuros * tempoAplicado)
}

function jurosCompostos (capitalInicial, Taxajuros, tempoAplicado){
    return capitalInicial * (1 + Taxajuros) ** tempoAplicado
}

console.log(jurosSimples(1000, 10/100, 2));
console.log(jurosCompostos(1000, 10/100, 2));
