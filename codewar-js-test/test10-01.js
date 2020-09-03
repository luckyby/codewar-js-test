// function tenToTwoNumberBit(n) {
//   let sum = 0;
//   // console.log('start n=', n);

//   function a(n) {
//     // console.log('n=', n);
//     if (n % 2 == 1) {
//       sum++;
//     }
//     if (n < 2) {
//       return;
//     } else {
//       a((n - n % 2) / 2);
//     }


//   }
//   a(n);

//   return sum;
// }


let number = 255;
console.log("tenToTwoNumberBit(" + number + ") = ", tenToTwoNumberBit(number));


// ================================ var 2 =====================================

function tenToTwoNumberBit(n) {
  let sum = 0;
  while (n >= 1) {
    if (n % 2 == 1) sum++;
    n = (n - n % 2) / 2;
  }
  return sum;
}