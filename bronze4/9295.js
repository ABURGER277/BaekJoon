const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim().split('\n');

const testCase = parseInt(input.shift());
for(let i = 1; i<= testCase; i++) {
  const [n, m] = input.shift().split(' ').map(Number);
  console.log(`Case ${i}: ${n + m}`);
}
