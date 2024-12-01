import fs from 'fs/promises';

const fileContent = await fs.readFile('./input.txt', 'utf-8');

const lines = fileContent.split('\n');
const firstList = [];
const secondList = new Map();

for (const line of lines) {
  const [first, second] = line.split('  ');
  if (typeof first !== 'undefined' && typeof second !== 'undefined') {
    firstList.push(parseInt(first.trim(), 10));
    
    const secondNumber = parseInt(second.trim(), 10);

    if (secondList.has(secondNumber)) {
      secondList.set(secondNumber, secondList.get(secondNumber) + 1);
    } else {
      secondList.set(secondNumber, 1);
    }
  }
}

firstList.sort();

const totalScore = firstList.reduce((total, current) => {
  const occurences = secondList.get(current);

  if (occurences) {
    const score = secondList.get(current) * current;
    return total + score;
  }

  return total;
}, 0)

console.log(totalScore);
