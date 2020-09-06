// let br = {
//   ')': '(',
//   ']': '[',
//   '}': '{'
// };
let br = {
  '(': ')',
  ']': '[',
  '}': '{'
};

let braces = '()';

let braces_arr = braces.split('');
let i = 0;
// console.log(br.braces_arr[i]);
console.log(braces_arr[i]);
console.log(br[braces_arr[i]]);
// console.log(br['(']);