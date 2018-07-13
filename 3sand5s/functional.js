//Find the sum of all numbers divisible by 3 or 5 under 1000

const makeRange = (limit = 999) => Array(limit).fill().map((i, index) => index -= 1)
const sumRange = (limit, arr = makeRange(limit)) => arr.reduce((accumulator, current) => current % 3 === 0 || current % 5 === 0 ? accumulator + current : accumulator + 0)
const filled = limit => sumRange(limit)

filled()
