function deepEqual(a,b) {
	for (key in a) {
		var aValue = a[key];
		var bValue = b[key];
		console.log('a: ', a);

		//check if b has key
		if (bValue === undefined) {
			return false;
		}

		if (typeof aValue === 'object' && typeof bValue ==='object') {
			console.log('key: ', key);
			console.log('value: ', aValue);	
			deepEqual(aValue, bValue);
		}
		else if (aValue === bValue) {
			console.log('key: ', key);
			console.log('value: ', aValue);
		}
		else {
			return false;
		}

	} //end of for ( in )
	return true;
}

var obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true