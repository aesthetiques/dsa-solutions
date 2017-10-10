'use strict'

let findPrime = limit => {
  let primes = [1, 2]

  for(let i = 3; primes.length < limit; i++){
    if((i % 2) !== 0 && (i % 3) !== 0){
      primes.push(i)
    }
  }

  console.log('Primes:', primes[primes.length - 1])
  return primes[primes.length - 1]
}

findPrime(10001)