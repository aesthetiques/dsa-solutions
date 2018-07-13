// Given an array of n length, shift the array values to the left n times
const createArray = (length) => Array(length).fill().map((i, index) => index += 1)

const shift = (length, shiftCount, array = createArray(length)) => [...array.slice(shiftCount, array.length), ...array.slice(0, shiftCount)]
