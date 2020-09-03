//Write a function that takes an integer as input, 
//and returns the number of bits 
//that are equal to one in the binary representation of that number. 
//You can guarantee that input is non-negative.

//Example: The binary representation of 1234 is 10011010010, 
// so the function should return 5 in this case

var countBits = function (n) {
  let sum = 0;
  while (n >= 1) {
    if (n % 2 == 1) sum++;
    n = (n - n % 2) / 2;
  }
  return sum;
};

console.log('countBits = ', countBits(35));
console.log(countBits(0)); //  0
console.log(countBits(4)); //  1
console.log(countBits(7)); //  3
console.log(countBits(9)); //  2
console.log(countBits(10)); // 2


// ============================ var 2 ==============================
countBits = n => n.toString(2).split('0').join('').length;

// ============================ var 2-1 ===============================
var countBits = function (n) {
  return n.toString(2).replace(/0/g, '').length;
};


// ============================ var 3 ================================
function countBits(n) {
  for (c = 0; n; n >>= 1) c += n & 1
  return c;
}

// ============================ var 4 ==================================
var countBits = function (n) {
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};