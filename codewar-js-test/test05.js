// const binaryArrayToNumber = arr => {
//   let num = 0;
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     // console.log("arr[" + i + "] =", arr[i]);
//     // console.log('num= ', num);
//     // let a = ;
//     // console.log("arr[" + i + "] * (2 ** (len - " + i + "-1))=", a);
//     num = num + arr[i] * (2 ** (len - i - 1));
//     // console.log('---------');
//     // console.log('num= ', num);
//   }
//   return num;
// };

// // console.log(binaryArrayToNumber([0, 0, 0, 1]));
// console.log(binaryArrayToNumber([1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1]));


// ========================================================
// const binaryArrayToNumber = arr => {
//   // let aaa = arr.join('');
//   // console.log('aaa=', aaa);
//   // bbb = parseInt(aaa, 2);
//   // console.log('bbb=', bbb);
//   return parseInt(arr.join(''), 2);
// };


// console.log(binaryArrayToNumber([1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1]));

//=========================================================================
function binaryArrayToNumber(arr) {
  return arr.reduce((a, b) => a << 1 | b);
}
console.log(binaryArrayToNumber([1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1]));