import fs from 'fs/promises';

const fileContent = await fs.readFile('./input.txt', 'utf-8');

const lines = fileContent.split('\n');
const firstList = [];
const secondList = [];

for (const line of lines) {
  const [first, second] = line.split('  ');
  if (typeof first !== 'undefined' && typeof second !== 'undefined') {
    firstList.push(parseInt(first.trim(), 10));
    secondList.push(parseInt(second.trim(), 10));
  }
}

firstList.sort();
secondList.sort();

const sumOfDifference = firstList.reduce((total, current, index) => {
  const difference = Math.abs(current - secondList[index]);
  console.log(current, secondList[index], difference)
  return total + difference;
}, 0)

console.log(sumOfDifference);
