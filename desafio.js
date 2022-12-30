
// 1. Finds all the prime numbers between 1 and 1000. 
// 2. Sums all the prime numbers that you found between 1 and 1000. 
// 3. The `main` function should return the sum of all prime numbers. Develop the solution entirely on this editor.

const main = (params) => {
    let count = 0
    let j, Primes = []
    for (j = 2; j <= params; j++) {
        for (i = 1; i <= j; i++) {
            if (j % i == 0)
                count++
        }
        if (count == 2) {
            Primes.push(j)
        }
        count = 0
    }
    var SumPrimes = Primes.reduce(function (soma, i) {
        return soma + i;
    });
    SumPrimes++
    return SumPrimes
}

main(1000)
