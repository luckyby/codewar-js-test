//Write a function that takes a string of braces,
//and determines if the order of the braces is valid.
//It should return true if the string is valid,
//and false if it 's invalid.

//This Kata is similar to the Valid Parentheses Kata,
//but introduces new characters: brackets[], and curly braces {}.
//Thanks to @arnedag for the idea!

//All input strings will be nonempty,
//and will only consist of parentheses, brackets and curly braces: ()[] {}.
//What is considered Valid ?

//  A string of braces is considered valid if all braces are matched with the correct brace.
//Examples

// "(){}[]" => True
// "([{}])" => True
// "(}" => False
// "[(])" => False
// "[({})](]" => False

function validBraces(braces) {
	let braces_arr = braces.split('');
	let len = braces_arr.length;
	// console.log('length braces = ' + len);

	if (len % 2 == 1) {
		// console.log('len%2 = ', len % 2);
		return false;
	} else {
		for (let i = 0; i <= len / 2; i++) {
			// console.log('i = ' + i, 'len/2 = ' + len / 2);

			let len_braces_arr = braces_arr.length;
			if (len_braces_arr == 0) return true;
			// console.log('len_braces_arr =', len_braces_arr);
			// let res = findBracesPair(braces_arr, len_braces_arr);
			// console.log('res = ' + res);
			if (findBracesPair(braces_arr, len_braces_arr) == -1) return false;
		}
		// return true;
	}

	function findBracesPair(array, length) {
		// console.log('-----------------------------------');
		for (let i = 0; i < length - 1; i++) {
			// console.log('array[' + i + '] = ' + array[i]);
			// console.log('array[' + (i + 1) + '] = ' + array[i + 1]);
			if (
				(array[i] == '(' && array[i + 1] == ')') ||
				(array[i] == '[' && array[i + 1] == ']') ||
				(array[i] == '{' && array[i + 1] == '}')
			) {
				// console.log('braces_arr[' + i + '] = ' + braces_arr[i], ' and braces_arr[' + i + '+1] = ' + braces_arr[i + 1]);
				array.splice(i, 2);
				return 1;
			}
		}
		return -1;
	}
	// braces_arr.forEach((element) => {
	// 	console.log('element = ' + element);
	// });
}

// ========================= var 2 =============================
function validBraces(braces) {
	var matches = { '(': ')', '{': '}', '[': ']' };
	var stack = [];
	var currentChar;

	for (var i = 0; i < braces.length; i++) {
		currentChar = braces[i];

		if (matches[currentChar]) {
			// opening braces
			stack.push(currentChar);
		} else {
			// closing braces
			if (currentChar !== matches[stack.pop()]) {
				return false;
			}
		}
	}

	return stack.length === 0; // any unclosed braces left?
}

// ==================== var 3 ====================================
function validBraces(braces) {
	while (/\(\)|\[\]|\{\}/g.test(braces)) {
		braces = braces.replace(/\(\)|\[\]|\{\}/g, '');
	}
	return !braces.length;
}

// ====================var 4 ==================================
function validBraces(braces) {
	while (braces.indexOf('{}') != -1 || braces.indexOf('()') != -1 || braces.indexOf('[]') != -1) {
		braces = braces.replace('{}', '').replace('()', '').replace('[]', '');
	}
	return braces.length == 0;
}

// ==========================var 5 ===============================
function validBraces(braces) {
	for (var i = 0, depth = []; i < braces.length; i++) {
		switch (braces[i]) {
			case '(':
			case '[':
			case '{':
				depth.push(braces[i]);
				break;
			case ')':
				if (depth.pop() != '(') return false;
				break;
			case ']':
				if (depth.pop() != '[') return false;
				break;
			case '}':
				if (depth.pop() != '{') return false;
				break;
		}
	}
	return depth.length == 0;
}

// ========================= var 6 ==========================
function validBraces(braces) {
	var parts = { '{': '}', '[': ']', '(': ')' };

	var stack = [];

	for (var i = 0; i < braces.length; i++) {
		var brace = braces[i];

		if (brace in parts) {
			stack.push(brace);
		} else {
			if (!stack || parts[stack.pop()] != brace) {
				return false;
			}
		}
	}

	return !stack.length;
}

// ========================= var 7 ===============================
function validBraces(str) {
	var prev = '';
	while (str.length != prev.length) {
		prev = str;
		str = str.replace('()', '').replace('[]', '').replace('{}', '');
	}
	return str.length === 0;
}

// ============================ var 8 =================================
const braceMap = {
	'(': ')',
	'[': ']',
	'{': '}'
};

function validBraces(braces) {
	return !braces.split('').reduce(function(prev, cur) {
		if (cur === braceMap[prev[prev.length - 1]]) {
			prev.pop();
		} else {
			prev.push(cur);
		}
		return prev;
	}, []).length;
}

// =========================== var 9 ==============================
function validBraces(braces) {
	let re = /\(\)|\{\}|\[\]/;
	return re.test(braces) ? validBraces(braces.replace(re, '')) : '' === braces;
}

// ============================== var 10 ===============================
function validBraces(braces) {
	let pattern = /\[\]|\(\)|\{\}/;
	while (pattern.test(braces)) {
		braces = braces.replace(pattern, '');
	}
	if (braces === '') {
		return true;
	} else {
		return false;
	}
}

// ============================= var 11 ==================================
function validBraces(braces) {
	while (/\(\)|\{\}|\[\]/.test(braces)) {
		braces = braces.replace(/\(\)|\{\}|\[\]/, '');
	}
	return braces.length > 0 ? false : true;
}

// ================================  var 12 =============================
function validBraces(braces) {
	var close = { ')': '(', '}': '{', ']': '[' };
	var operands = [];
	for (let s of braces.split('')) {
		if (!close[s]) operands.push(s);
		else if (operands.pop() !== close[s]) return false;
	}
	return operands.length === 0;
}

// =============================var 13 =======================================
function validBraces(braces) {
	while (braces.search(/{}|\[\]|\(\)/) !== -1) {
		braces = braces.replace(/{}|\[\]|\(\)/g, '');
	}
	if (braces !== '') return false;
	return true;
}

// =========================var 14 =========================================
const validBraces = (braces) => ![ ...braces ].reduce((pre, val) => (pre + val).replace(/(\(\)|\[]|{})/, ``), ``);

// =========================== var 15 =======================================
f = (_) => ((t = _.replace(/\(\)|\[]|{}|<>/, '')) == _ ? !_ : f(t));
validBraces = f;

// ===================================== var 15 =======================

console.log('1 => ' + validBraces('{()}[]')); //  true
console.log('2 => ' + validBraces('[(])')); //  false
