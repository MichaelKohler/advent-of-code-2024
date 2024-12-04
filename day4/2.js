// This probably could be optimized, but at least it should
// not be confusing this way.

import fs from 'fs/promises'

const fileContent = await fs.readFile('./input.txt', 'utf-8')
const grid = fileContent.split('\n').map((row) => row.split(''))

let count = 0

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === 'A') {
      if (i > 0 && j > 0 && i < grid.length - 1 && j < grid[i].length - 1) {
        /*
          M . M
          . A .
          S . S
        */
        if (
          grid[i - 1][j - 1] === "M" &&
          grid[i - 1][j + 1] === "M" &&
          grid[i + 1][j - 1] === "S" &&
          grid[i + 1][j + 1] === "S"
        ) {
          count++
        }

        /*
          S . S
          . A .
          M . M
        */
        if (
          grid[i - 1][j - 1] === "S" &&
          grid[i - 1][j + 1] === "S" &&
          grid[i + 1][j - 1] === "M" &&
          grid[i + 1][j + 1] === "M"
        ) {
          count++
        }

        /*
          M . S
          . A .
          M . S
        */
        if (
          grid[i - 1][j - 1] === "M" &&
          grid[i - 1][j + 1] === "S" &&
          grid[i + 1][j - 1] === "M" &&
          grid[i + 1][j + 1] === "S"
        ) {
          count++
        }

        /*
          S . M
          . A .
          S . M
        */
          if (
            grid[i - 1][j - 1] === "S" &&
            grid[i - 1][j + 1] === "M" &&
            grid[i + 1][j - 1] === "S" &&
            grid[i + 1][j + 1] === "M"
          ) {
            count++
          }
      }
    }
  }
}

console.log(count)
