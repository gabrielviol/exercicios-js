const main = (params) => {
    let count = 0
    let j, primes=[]
    
    for(j = 2; j <= params; j++){
        for(i=1; i<= j; i++){
            if(j%i == 0){
                count++
            }
        }
            if(count == 2){
                primes.push(j)
            }
            count = 0
        }
    
        var sumPrimes = primes.reduce(function (soma, i){
            return soma + i
        });
        sumPrimes++
        return console.log(sumPrimes)
    
}

main(1000)