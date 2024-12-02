import fs from 'fs/promises'

const fileContent = await fs.readFile('./input.txt', 'utf-8')
const lines = fileContent.split('\n')

const TYPES = {
  INCREASING: 'INCREASING',
  DECREASING: 'DECREASING',
}

const safeReports = lines.filter((line) => {
  let type = null
  let previousNumber = null

  for (const rawNumber of line.split(' ')) {
    const number = parseInt(rawNumber, 10)
    
    if (type === null && previousNumber !== null) {
      if (previousNumber < number) {
        type = TYPES.INCREASING
      } else if (previousNumber > number) {
        type = TYPES.DECREASING
      } else {
        // Same number automatically is not safe
        return false
      }
    }

    const difference = Math.abs(previousNumber - number)
    if (type && (previousNumber === number || difference > 3)) {
      return false
    }

    if (type === TYPES.INCREASING && previousNumber > number) {
      return false
    }

    if (type === TYPES.DECREASING && previousNumber < number) {
      return false
    }

    previousNumber = number
  }

  return true
})

console.log(safeReports.length)
