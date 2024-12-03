import fs from 'fs/promises'

const fileContent = await fs.readFile('./input.txt', 'utf-8')

const instructions = [...fileContent.matchAll(/(mul\(\d{1,3},\d{1,3}\))|do\(\)|don't\(\)/g)]

let mulEnabled = true
const enabledInstructions = instructions.filter((instruction) => {
  if (instruction[0] === 'do()') {
    mulEnabled = true
    return false
  }

  if (instruction[0] === 'don\'t()') {
    mulEnabled = false
    return false
  }

  return mulEnabled
})

const sum = enabledInstructions.reduce((total, instruction) => {
  const [a, b] = instruction[0].replace('mul(', '').replace(')', '').split(',')

  return total + a * b
}, 0)

console.log(sum)
