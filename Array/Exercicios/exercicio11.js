/**
    Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array
 */

function firstLast(array){
    let newArray = []
    newArray.push(array[0])
    newArray.push(array[array.length-1])
    return newArray
}

let array = [1,2,3,4,10]

console.log(firstLast(array))