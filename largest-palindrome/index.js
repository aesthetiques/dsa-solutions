'use strict'

let findPalindrome = digits => {
  let intOne
  let intTwo
  let starter = '1'
  let limit = ''
  let highestPalindrome = 0

  for(let i = 0; limit.length < digits; i++){
    limit += 9
  }
  for(let i = 0; starter.length < digits; i++){
    starter += 0
  }
  parseInt(starter)
  parseInt(limit)

  // intOne = starter
  // intTwo = starter

  for(let i = starter; i < limit; i++){
    let sum, one, two
    for(let j = starter; j < limit; j++){
      sum = i * j
      one = sum.toString()
      two = sum.toString().split('').reverse().join('')
      // console.log(one, two)
    }

    if(one === two){
      // console.log('1:', one, '2:', two)
      highestPalindrome = one
      console.log(highestPalindrome)
    }
  }
  console.log(highestPalindrome)

  // while(intOne < limit && intTwo < limit){
  //   let sum = intOne * intTwo
  //   console.log('checking:', intOne, intTwo)
  //   let checkOne = sum.toString()
  //   let checkTwo = sum.toString().split('').reverse().join('')
  //   // console.log('Check one:', checkOne,'CheckTwo:', checkTwo)
  //   if(checkOne === checkTwo){
  //     // console.log(sum, sum.split('').reverse())
  //     highestPalindrome = intOne * intTwo
  //     console.log('highest:', highestPalindrome)
  //   }
  //   intOne ++
  //   intTwo ++
  //   // console.log('Current highestPalindrome:', highestPalindrome)
  // }

  return highestPalindrome
}

findPalindrome(3)