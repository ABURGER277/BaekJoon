const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A + B);
