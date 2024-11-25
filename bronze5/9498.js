const fs = require('fs');
const input = Number(fs.readFileSync(0, 'utf-8').trim());

const solution = (data) => {
  switch (true) {
    case data >= 90:
      console.log('A');
      break;
    case data >= 80:
      console.log('B');
      break;
    case data >= 70:
      console.log('C');
      break;
    case data >= 60:
      console.log('D');
      break;
    default:
      console.log('F');
      break;
  }
}

solution(input);
