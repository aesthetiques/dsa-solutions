let firstQueries = [[1, 2, 100],
                     [2, 5, 100],
                     [3, 4, 100]]

let secondQueries = [[1, 5, 3],
                       [4, 8, 7],
                       [6, 9, 1]]

function oneBasedArray(limit){
  let obj = {}
  for(let i = 1; i <= limit; i++){
      obj[i] = 0
  }
  return obj
}

function addIndices(arr, query, currentHighest){
    let sum = arr
    let highestInt = currentHighest
    for(let i = query[0]; i <= query[1]; i++){
        sum[i] += query[2]
        highestInt = highestInt !== null ? Math.max(highestInt, sum[i]) 
                                            : sum[i]
    }
    return { arr: sum, highest: highestInt }
}

function arrayManipulation(n, queries) {
    let result = { arr: oneBasedArray(n), highest: null }
    let offset = 0
    while(offset < queries.length){
        let query = queries[offset]
        result = addIndices(result.arr, query, result.highest)
        offset ++
    }
    return result.highest
}

arrayManipulation(5, firstQueries)