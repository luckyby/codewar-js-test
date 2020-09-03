// function findOutlier(integers) {
//   let n_odd = [];
//   let n_even = [];
//   integers.forEach(e => {
//     (e % 2 == 0) ? (n_even.push(e)) : (n_odd.push(e));
//   })
//   // for (let i = 0; i < integers.length; i++) {
//   //   if (integers[i] % 2 == 0) {
//   //     console.log("integers[" + i + "]=", integers[i]);
//   //     n_even.push(integers[i]);
//   //   } else {
//   //     console.log("integers[" + i + "]=", integers[i]);
//   //     n_odd.push(integers[i]);
//   //   }

//   // }
//   console.log("n_odd[0]=", n_odd[0])
//   console.log("n_even[0] =", n_even[0])
//   console.log("parseInt(n_odd[0], 10) =", parseInt(n_odd[0], 10));
//   console.log("parseInt(n_even[0], 10) =", parseInt(n_even[0], 10));

//   return (n_odd.length == 1) ? parseInt(n_odd[0], 10) : parseInt(n_even[0], 10);
// }

// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
// console.log(findOutlier([200, 6086677567, 8890, 1035356, 30]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(findOutlier([1, 1, 0, 1, 1]));

// =============================================================================
function findOutlier(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

// console.log(findOutlier([0, 1, 2]));
// console.log(findOutlier([1, 2, 3]));
// console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([200, 6086677567, 8890, 1035356, 30]));
// console.log(findOutlier([0, 0, 3, 0, 0]));
// console.log(findOutlier([1, 1, 0, 1, 1]));