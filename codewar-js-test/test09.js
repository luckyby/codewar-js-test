//The goal of this exercise is to convert a string to a new string
//where each character in the new string is "(" if that character appears only once in the original string,
//or ")" if that character appears more than once in the original string.
//Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

function duplicateEncode(word) {
  // if (word.charAt(0).toUpperCase() === word.charAt()) {
  // 	return 'should ignore case';
  // }
  let new_chars = [];
  let chars = word.split('');
  let len = chars.length;

  for (let i = 0; i < len; i++) {
    let count = 0;
    for (let j = 0; j < len; j++) {
      i != j && chars[i].toLowerCase() == chars[j].toLowerCase() ? count += 1 : count += 0;
    }
    count > 0 ? new_chars[i] = ')' : new_chars[i] = '(';
  }
  let new_word = new_chars.join('');
  return new_word;
}

// ========================================================
// function duplicateEncode(word) {
//   return word
//     .toLowerCase()
//     .split('')
//     .map(function (a, i, w) {
//       return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//     })
//     .join('');
// }

//======================== var 2 ======================================
// function duplicateEncode(word) {
//   word = word.toLowerCase();
//   return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
// }


// ====================== var3 ===============================================
// function duplicateEncode(word) {
//   var letters = word.toLowerCase().split('')
//   return letters.map(function (c, i) {
//     return letters.some(function (x, j) {
//       return x === c && i !== j
//     }) ? ')' : '('
//   }).join('')
// }

// ======================= var 4 ================================================
const duplicateEncode = s => s
  .toLowerCase()
  .split ``
  .map((e, _, a) => a.indexOf(e) === a.lastIndexOf(e) ? '(' : ')')
  .join ``;

// ======================================================================
console.log(duplicateEncode('din')); // "((("
console.log(duplicateEncode('recede')); // "()()()"
console.log(duplicateEncode('Success')); // ")())())"     "should ignore case";
console.log(duplicateEncode('(( @')); // "))((";
console.log(duplicateEncode('')); // "";
console.log(duplicateEncode('s')); // "(";
console.log(duplicateEncode('qwe')); // "((("