const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// Retornar produtos com preços maior que 500 e fragil

const produtoCaro = produto => produto.preco >= 500
const produtoFragil = produto => produto.fragil === true

const resultado = produtos.filter(produtoCaro).filter(produtoFragil)

console.log(resultado)