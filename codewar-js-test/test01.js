function spinWords() {
  function reverse_word(a) {
    if (a.length < 5) {
      return a;
    } else {
      return a.split("").reverse().join("");
    }
  };
  let words = arguments[0].split(" ");
  let words_len = words.length;
  if (words_len == 0) {
    return "";
  } else if (words_len == 1) {
    return reverse_word(words[0]);
  } else {
    let str_reverse = reverse_word(words[0]);
    for (let i = 1; i < words_len; i++) {
      console.log("i=" + i + "; words[" + i + "]=" + words[i]);
      str_reverse += " " + reverse_word(words[i]);
      console.log('str_reverse=', str_reverse);
    }
    return str_reverse;
  }
}

console.log(spinWords("Hey fellow warriors"));