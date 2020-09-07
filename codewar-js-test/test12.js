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


// ============================ var 1 ===================================
var n = function (digit) {
  return function (op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) {
  return function (l) {
    return l + r;
  };
}

function minus(r) {
  return function (l) {
    return l - r;
  };
}

function times(r) {
  return function (l) {
    return l * r;
  };
}

function dividedBy(r) {
  return function (l) {
    return l / r;
  };
}


// ======================== var 2 ================================
function zero(func) {
  return func ? func(0) : 0;
};

function one(func) {
  return func ? func(1) : 1;
};

function two(func) {
  return func ? func(2) : 2;
};

function three(func) {
  return func ? func(3) : 3;
};

function four(func) {
  return func ? func(4) : 4;
};

function five(func) {
  return func ? func(5) : 5;
};

function six(func) {
  return func ? func(6) : 6;
};

function seven(func) {
  return func ? func(7) : 7;
};

function eight(func) {
  return func ? func(8) : 8;
};

function nine(func) {
  return func ? func(9) : 9;
};

function plus(b) {
  return function (a) {
    return a + b;
  };
};

function minus(b) {
  return function (a) {
    return a - b;
  };
};

function times(b) {
  return function (a) {
    return a * b;
  };
};

function dividedBy(b) {
  return function (a) {
    return a / b;
  };
};


// ========================= var 3 ==========================
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) {
    return f ? f(n) : n
  }
});

function plus(n) {
  return function (a) {
    return a + n
  }
}

function minus(n) {
  return function (a) {
    return a - n
  }
}

function times(n) {
  return function (a) {
    return a * n
  }
}

function dividedBy(n) {
  return function (a) {
    return a / n
  }
}



// ==================================== var 4 =========================
'zero one two three four five six seven eight nine'.split(' ').forEach(
  (mth, num) => this[mth] = (f = val => val) => f(num)
)

let plus = (r) => (l) => l + r
let minus = (r) => (l) => l - r
let times = (r) => (l) => l * r
let dividedBy = (r) => (l) => l / r


// ============================ var 5 ====================================
['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
.forEach(function (name, n) {
  this[name] = function (f) {
    return f ? f(n) : n
  }
});

function plus(n) {
  return function (a) {
    return a + n
  }
}

function minus(n) {
  return function (a) {
    return a - n
  }
}

function times(n) {
  return function (a) {
    return a * n
  }
}

function dividedBy(n) {
  return function (a) {
    return a / n
  }
}


// ====================== var 6 =======================
const
  id = x => x,
  number = x => (f = id) => f(x),
  [zero, one, two, three, four, five, six, seven, eight, nine] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(number),
  plus = x => y => y + x,
  minus = x => y => y - x,
  times = x => y => y * x,
  dividedBy = x => y => y / x;


// =========================== var 7 ===============================