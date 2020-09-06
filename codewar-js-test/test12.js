// This time we want to write calculations using functions and get the results.
// Let 's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//   There must be a function for each number from 0("zero") to 9("nine")
// There must be a function for each of the following mathematical operations: 
// plus, minus, times, dividedBy(divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, 
// the most inner function represents the right operand
// Divison should be integer division.
// For example, this should return 2, not 2.666666...:

//   eight(dividedBy(three()));

function zero() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("0" + arguments[0]));
  } else {
    return "0";
  }
}

function one() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("1" + arguments[0]));
  } else {
    return "1";
  }
}

function two() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("2" + arguments[0]));
  } else {
    return "2";
  }
}

function three() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("3" + arguments[0]));
  } else {
    return "3";
  }
}

function four() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("4" + arguments[0]));
  } else {
    return "4";
  }
}

function five() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("5" + arguments[0]));
  } else {
    return "5";
  }

}

function six() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("6" + arguments[0]));
  } else {
    return "6";
  }
}

function seven() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("7" + arguments[0]));
  } else {
    return "7";
  }
}

function eight() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("8" + arguments[0]));
  } else {
    return "8";
  }
}

function nine() {
  if ((typeof arguments[0]) != 'undefined') {
    return Math.floor(eval("9" + arguments[0]));
  } else {
    return "9";
  }
}

function plus() {
  if ((typeof arguments[0]) != 'undefined') {
    return "+" + arguments[0];
  } else {
    return "+";
  }
}

function minus() {
  if ((typeof arguments[0]) != 'undefined') {
    return "-" + arguments[0];
  } else {
    return "-";
  }
}

function times() {
  if ((typeof arguments[0]) != 'undefined') {
    return "*" + arguments[0];
  } else {
    return "*";
  }
  // return "*" + arguments[0];
}

function dividedBy() {
  if ((typeof arguments[0]) != 'undefined') {
    return "/" + arguments[0];
  } else {
    return "/";
  }
}



console.log(seven(times(five()))); // , 35
console.log(four(plus(nine()))); // , 13
console.log(eight(minus(three()))); // , 5
console.log(six(dividedBy(two()))); // , 3
console.log(six(dividedBy(four()))); // , 1
console.log(six(dividedBy(zero()))); // , infinity