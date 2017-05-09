//function called dataTypes that compare and return results, based on the argument supplied to it
const function dataTypes(value) {
	//checks if argument supplied is null
	if(value === null) {
		return 'no value';
	}
	//checks if argument supplied is undefined
	else if (value === undefined) {
		return 'no value';
	}
	//compares the argument supplied with 'true'
	else if (value === 'true') {
		return true;
	}
	//compares the argument supplied with 'false'
	else if (value === 'false') {
		return false;
	}
	//checks if argument supplied is less than 100
	else if (value < 100) {
		return 'less than 100';
	}
	//checks if argument supplied is greater than 100
	else if (value > 100) {
		return 'more than 100';
	}
	//checks if argument supplied is equal to 100
	else if (value=100) {
		return 'equal to 100';
	}
	//checks if argument supplied is a string type
	else if (typeof value === 'string') {
		//checks if the argument supplied is an empty string
		if (value = "") {
			return 0;
		}
		else {
			return value.length;
		}
	}
	//checks if argument supplied is a list
	else if (typeof value === 'object') {
		//checks if length of the argument supplied is greater or equal to 3
		if (value.length >= 3) {
			return value[3];
		}
		//checks if argument supplied is an empty list
		else if (value = []) {
			return 'undefined';
		}
		else {
			return 'undefined';
		}
	}//checks if the argument supplied is a function
	else if (typeof value === 'function') {
		value(true);
		return 'called callback';
	}

}