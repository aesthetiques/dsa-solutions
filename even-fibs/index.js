'use strict'

const findSum = limit => {
  let fibArray = [0, 1]
  let sum = 0
  let i = 1
  while(fibArray[i] < limit){
    let newFib = fibArray[i] + fibArray[i - 1]
    fibArray.push(newFib)
    if((newFib % 2) === 0) sum += newFib
    i++
  }
  console.log('Completed sum:', sum)
  return sum
}

findSum(4000000)