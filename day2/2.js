// Something is off and the result is incorrect. Did not have enough time to debug it.

import fs from 'fs/promises'

const fileContent = await fs.readFile('./input.txt', 'utf-8')
const lines = fileContent.split('\n')

const TYPES = {
  INCREASING: 'INCREASING',
  DECREASING: 'DECREASING',
}

function validate({ numbers, shouldRevalidate = true }) {
  let type = null
  let previousNumber = null
  let result = true
  let index = 0

  for (const number of numbers) {
    if (type === null && previousNumber !== null) {
      if (previousNumber < number) {
        type = TYPES.INCREASING
      } else if (previousNumber > number) {
        type = TYPES.DECREASING
      } else {
        // Same number automatically is not safe
        result = false
      }
    }

    const difference = Math.abs(previousNumber - number)
    if (type && (previousNumber === number || difference > 3)) {
      result = false
    }

    if (type === TYPES.INCREASING && previousNumber > number) {
      result = false
    }

    if (type === TYPES.DECREASING && previousNumber < number) {
      result = false
    }

    if (shouldRevalidate && !result) {
      const newListToCheck = [...numbers]
      newListToCheck.splice(index, 1)
      const revalidateWithoutThisNumberResult = validate({
        numbers: newListToCheck,
        shouldRevalidate: false,
      })

      if (revalidateWithoutThisNumberResult) {
        return true
      }
    }

    previousNumber = number
    index++
  }

  return result
}

const safeReports = lines.filter((line) => {
  const parsedNumbers = line.split(' ').map((rawNumber) => parseInt(rawNumber, 10))
  const result = validate({ numbers: parsedNumbers })

  // We have not yet checked if the array without its first entry is safe
  if (!result) {
    const revalidateWithoutFirstEntryResult = validate({
      numbers: parsedNumbers.slice(1),
      shouldRevalidate: false,
    })

    return revalidateWithoutFirstEntryResult
  }

  return result
})

console.log(safeReports.length)
