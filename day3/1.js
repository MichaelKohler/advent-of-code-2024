import fs from 'fs/promises'

const fileContent = await fs.readFile('./input.txt', 'utf-8')

const instructions = [...fileContent.matchAll(/mul\(\d{1,3},\d{1,3}\)/g)]

const sum = instructions.reduce((total, instruction) => {
  const [a, b] = instruction[0].replace('mul(', '').replace(')', '').split(',')

  return total + a * b
}, 0)

console.log(sum)
