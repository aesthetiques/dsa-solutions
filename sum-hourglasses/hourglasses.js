function topOrBottomRow(arr, offset) => arr[offset] + arr[offset + 1] + arr[offset + 2]
function midRow(arr, offset) => arr[1 + offset]

function hourglassSum(arr) {
  console.log(arr)
  let highestSum = null
  for(let i = 0; inBounds(i, arr.length); i++){
      let offset = 0
      while(inBounds(offset, arr.length)){
          let top = topOrBottomRow(arr[i], offset)
          let mid = midRow(arr[i + 1], offset)
          let bot = topOrBottomRow(arr[i + 2], offset)
          offset++
          highestSum = highestSum ? highestSum < (top + mid + bot) 
                                  ? top + mid + bot      
                                  : highestSum 
                                  : top + mid + bot
      }
  }
  
  return highestSum
}