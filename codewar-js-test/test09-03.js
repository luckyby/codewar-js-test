let arr = [ 'a', 'b', 'c', 'a', 'd' ];
// let len = arr.length;
let new_arr = [];
// let new_item_f = "";
// let item_f = arr.shift();
let bl_out;
for (let i = 0; i < arr.length; i++) {
	console.log('**************************************');

	boolka = arr.every((e, j) => {
		// console.log('e=' + e + '   i=' + i + '   j=' + j);
		if (i != j) {
			// console.log('e=' + e + '   arr[i]=' + arr[i] + '    j= ' + j);

			let bl_out = e != arr[i];

			// console.log('bl_out=' + bl_out);
			console.log('==========================================');
			return bl_out;
		}
	});
	console.log('boolka = ', boolka);
	// console.log('bl_out = ', bl_out);

	!bl_out ? (new_arr[i] = ')') : (new_arr[i] = '(');
}

console.log('new_arr = ', new_arr);
