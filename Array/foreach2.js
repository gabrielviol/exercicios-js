//Implementando o forEach

Array.prototype.forEach2 = function(callback){
    for(let i  = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Gabriel', 'Rebecca', 'Daniel', 'João']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
