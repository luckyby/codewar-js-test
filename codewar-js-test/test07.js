// function digital_root(n) {

//   let dgts = (n + '').split('').map((i) => {
//     return Number(i)
//   });
//   if (dgts.length == 1) {
//     return n;
//   } else {
//     return digital_root(dgts.reduce((akk, item) => akk + item));
//   }
// }


// let number = 206301;

// console.log("digital_root(" + number + ") = ", digital_root(number));
// console.log('digital_root(16)=', a);

//  ===================================================


// function digital_root(n) {
//   let dgts = (n + '').split('').map((i) => {
//     return Number(i)
//   });
//   if (dgts.length == 1) {
//     return n;
//   } else {
//     nmbr = dgts.reduce((akk, item) => akk + item);
//     return digital_root(nmbr);
//   }
// }

// =======================================================
function digital_root(n) {
  let a = (n - 1);
  console.log('a=', a);
  let b = a % 9;
  console.log('b=', b);
  let c = b + 1;
  console.log('c=', c);
  return c;
}

let number = 206301;

console.log("digital_root(" + number + ") = ", digital_root(number));