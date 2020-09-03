function isValidWalk(walk) {
  if (walk.length != 10) return false;
  let countx = 0;
  let county = 0;
  for (let i = 0; i < 10; i++) {
    console.log('walk[i] =', walk[i]);
    if (walk[i] == "n") {
      county = county + 1;
      console.log('walk[i] in n =', walk[i]);
      console.log('county=', county);
    }
    if (walk[i] == "s") {
      county = county - 1;
      console.log('walk[i] in s =', walk[i]);
      console.log('county=', county);
    }
    if (walk[i] == "w") {
      countx = countx - 1;
      console.log('walk[i] in w =', walk[i]);
      console.log('countx=', countx);
    }
    if (walk[i] == "e") {
      countx = countx + 1;
      console.log('walk[i] in e =', walk[i]);
      console.log('countx=', countx);
    }

  }
  if (countx == 0 && county == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));