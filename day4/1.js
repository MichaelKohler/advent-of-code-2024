import fs from 'fs/promises'

const fileContent = await fs.readFile('./input.txt', 'utf-8')
const grid = fileContent.split('\n').map((row) => row.split(''))

let count = 0

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    if (grid[i][j] === 'X') {
      if (j <= grid[i].length - 4) {
        // Check towards the right
        if (grid[i][j + 1] === 'M' && grid[i][j + 2] === 'A' && grid[i][j + 3] === 'S') {
          count++
        }

        if (i <= grid.length - 4) {
          // Check towards the bottom right
          if (grid[i + 1][j + 1] === 'M' && grid[i + 2][j + 2] === 'A' && grid[i + 3][j + 3] === 'S') {
            count++
          }
        }

        if (i > 2) {
          // Check towards the top right
          if (grid[i - 1][j + 1] === 'M' && grid[i - 2][j + 2] === 'A' && grid[i - 3][j + 3] === 'S') {
            count++
          }
        }
      }

      if (j > 2) {
        // Check towards the left
        if (grid[i][j - 1] === 'M' && grid[i][j - 2] === 'A' && grid[i][j - 3] === 'S') {
          count++
        }

        if (i <= grid.length - 4) {
          // Check towards the bottom left
          if (grid[i + 1][j - 1] === 'M' && grid[i + 2][j - 2] === 'A' && grid[i + 3][j - 3] === 'S') {
            count++
          }
        }

        if (i > 2) {
          // Check towards the top left
          if (grid[i - 1][j - 1] === 'M' && grid[i - 2][j - 2] === 'A' && grid[i - 3][j - 3] === 'S') {
            count++
          }
        }
      }

      if (i <= grid.length - 4) {
        // Check towards the bottom
        if (grid[i + 1][j] === 'M' && grid[i + 2][j] === 'A' && grid[i + 3][j] === 'S') {
          count++
        }
      }

      if (i > 2) {
        // Check towards the top
        if (grid[i - 1][j] === 'M' && grid[i - 2][j] === 'A' && grid[i - 3][j] === 'S') {
          count++
        }
      }
    }
  }
}

console.log(count)
