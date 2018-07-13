const bubbleSort = (input) => {
  let dataset = input
  let lesserValue
  let sorted = false
  
  while(!sorted){
    sorted = true
    for(let i = 0; i < dataset.length - 1; i++){
        if(dataset[i] > dataset[i + 1]){
          lesserValue = dataset[i + 1]
          dataset[i + 1] = dataset[i] 
          dataset[i] = lesserValue
          console.log(dataset)
          sorted = false
        }
      }
    }

  console.log(dataset)
  return dataset
}

bubbleSort([11, 90, 45, 8, 19, 1000, 390, 9])