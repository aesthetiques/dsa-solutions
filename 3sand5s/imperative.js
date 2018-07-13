'use strict'

let findMultiples = limit => {
  let sum = 0
  let increment = 0
  while(increment < limit){
    if((increment % 3) === 0 || (increment % 5) === 0) sum += increment
    increment ++
  }
  return sum
}

findMultiples(999)
