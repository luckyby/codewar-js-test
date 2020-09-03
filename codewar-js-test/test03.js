function getCount(str) {
  var vowelsCount = 0;
  let vow_array = ["a", "e", "i", "o", "u"];
  let str_array = str.split("");
  str_array.forEach(elem => {
    (elem == vow_array[0] || elem == vow_array[1] || elem == vow_array[2] || elem == vow_array[3] || elem == vow_array[4]) ? vowelsCount++ : vowelsCount += 0;
  });

  return vowelsCount;
}

aaa = getCount("abracadabra");
console.log('aaa=', aaa);