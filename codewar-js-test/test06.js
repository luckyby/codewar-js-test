function list(names) {
  // let len = names.length;
  // if (len == 0) {
  //   return "";
  // } else if (len == 1) {
  //   return names[0].name;
  // } else {
  //   let bbb = names.map(e => e.name);
  //   console.log(bbb);

  //   let bbb_f = bbb.slice(0, len - 1);
  //   // console.log(bbb_f);

  //   let ccc = bbb_f.join(', ')
  //   // console.log(ccc);

  //   eee = ccc + " & " + bbb[len - 1];
  //   // console.log(eee);
  //   return eee;
  // }

  let len = names.length;
  if (len == 0) {
    return "";
  } else if (len == 1) {
    return names[0].name;
  } else {
    let arr_names = names.map(e => e.name);
    return arr_names.slice(0, len - 1).join(', ') + " & " + arr_names[len - 1];
  }
}


console.log("list =", list([{
  name: 'Bart'
}, {
  name: 'Lisa'
}, {
  name: 'Maggie'
}, {
  name: 'Homer'
}, {
  name: 'Marge'
}]));
// // 'Bart, Lisa, Maggie, Homer & Marge',

console.log("list =", list([{
  name: 'Bart'
}, {
  name: 'Lisa'
}, {
  name: 'Maggie'
}]));
// // 'Bart, Lisa & Maggie'

console.log("list =", list([{
  name: 'Bart'
}, {
  name: 'Lisa'
}]));
// // 'Bart & Lisa'


console.log("list =", list([{
  name: 'Bart'
}]));
// // 'Bart'

console.log("list =", list([]));

//===============================================

// var list = (names) => names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")


//=======================================================

function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}