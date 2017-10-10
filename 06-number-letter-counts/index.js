'use strict'

let numberWords = {
  '1': 'one',
  '2': 'two',
  '3': 'three',
  '4': 'four',
  '5': 'five',
  '6': 'six',
  '7': 'seven',
  '8': 'eight',
  '9': 'nine',
  '10': 'ten',
  '11': 'eleven',
  '12': 'twelve',
  '13': 'thirteen',
  '14': 'fourteen',
  '15': 'fifteen',
  '16': 'sixteen',
  '17': 'seventeen',
  '18': 'eighteen',
  '19': 'nineteen',
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
}

function transcode(){
  let returnString = ''
  let count = 1
  while(count !== 1002){
    let numString = String(count)
    let stop = numString.length
    while(stop--){
      let current
      if(numString.length === 2){
        current = numString[0] + '0'
      }else if(numString[0] === '0'){
        while(numString[0] === '0'){
          numString = numString.slice(1, numString.length)
        }
      }else{
        current = numString[0]
      }

      if(numString.length === 1){
        returnString += numberWords[current]
        numString = ''
      }

      if(numString.length === 2){
        returnString += numberWords[current]
        if(numString[1] !== 0 && parseInt(numString) > 19){
          returnString += '-'
          numString = numString[1]
        }
      }

      if(numString.length === 3){
        returnString += numberWords[current] + ' hundred'
        numString = numString.slice(1, numString.length)
        if(numString[0] === '0' && numString[1] === '0'){
          numString = ''
          stop = 0
        }else if(numString[0] !== '0' || numString[1] !== '0'){
          returnString += ' and '
        }
        // console.log('numstring is:', numString)
      }

      if(numString.length === 4){
        returnString += numberWords[current] + ' thousand'
        stop = 0
      }
    }
    count ++
  }
  // console.log(returnString.length)
  console.log(returnString)
  return returnString
}

transcode()