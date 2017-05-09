//function called dataTypes that compare and return results, based on the argument supplied to it
const dataTypes = (value) =>  {
  let callback = '';
  //checks if argument supplied is an empty string
  if (value === '') {
			return 0;
	}
	//checks if argument supplied is null
	else if(value === null) {
		return 'no value';
	}
	//checks if argument supplied is undefined
	else if (value === undefined) {
		return 'no value';
	}
	//compares the argument supplied with 'true'
	else if (value === true) {
	  return true;
		
	}
	//compares the argument supplied with 'false'
	else if (value === false) {
		return false;
	}
	//checks if argument supplied is a string type
	else if (typeof value === 'string') {
		return value.length;
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
	else if (value ==100) {
		return 'equal to 100';
	}
	
	
	//checks if argument supplied is a list
	else if (value.isArray) {
	  //checks if argument supplied is an empty list
		if (value == []) {
			return 'undefined';
		}
		//checks if length of the argument supplied is greater or equal to 3
		else if (value.length >= 3) {
			return value[3];
		}
		else {
			return 'undefined';
		}
	}
	//checks if the argument supplied is a function
	else if (value == callback) {
	   return 'called callback';
	}
	  

}