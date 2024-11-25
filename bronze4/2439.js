const fs = require('fs');
const input = parseInt(fs.readFileSync(0, 'utf-8').trim());

for(let i = 0; i < input; i++) {
  let resultLine = '';
  for(let j = input; j > 0; j--) {
    resultLine += (i >= j - 1 ? '*' : ' ');
  }
  console.log(resultLine);
}
