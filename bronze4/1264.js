const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const filterForData = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

const algorithm = (stringData) => {
  let count = 0;
  for (let i = 0; i < stringData.length; i++) {
    if (filterForData.includes(stringData[i])) {
      count++;
    }
  }
  return count;
};

for (let i = 0; i < input.length; i++) {
  if (input[i] === '#') break;
  console.log(algorithm(input[i]));
}
