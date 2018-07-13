'use strict'

let findSum = limit => {
  let sum = 0
  let i = 0
  while(i !== limit && i < limit){
    if((limit % i) === 0 && i !== limit) sum = i
    i++
  }
  console.log('sum:', sum)
  return sum
}

findSum(2000)
