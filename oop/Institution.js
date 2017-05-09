class HigherInstitution {
	static setDefaultInstitution(institution, institutionName, state, abbreviation, yearFounded) {
		HigherInstitution._defaultInstitution = new HigherInstitution(institution, institutionName, state, abbreviation, yearFounded);
	}
	//to initialize an instance to a valid state, and it will be called automatically
	constructor(institution, institutionName, state, abbreviation, yearFounded){
		if(arguments.length === 0){

		//keep the data inaccessibe by making them private. this is called encapsulation
			this._institution = HigherInstitution._defaultInstitution._institution;
			this._institutionName = HigherInstitution._defaultInstitution._institutionName;
			this._state = HigherInstitution._defaultInstitution._state;
			this._abbreviation = HigherInstitution._defaultInstitution._abbreviation;
			this._yearFounded = HigherInstitution._defaultInstitution._yearFounded;

			return;
		}
		this._institution = institution;
		this._institutionName = institutionName;
		this._state = state;
		this._abbreviation = abbreviation;
		this._yearFounded = yearFounded;

//this helps to capture variables in a closure
		addInstitution(institutionType) {
//add an institution type
		}

		getInstitution(){
			return this._institution
		}

	}
HigherInstitution.setDefaultInstitution("University", "University of Ibadan", "Oyo State", "UI", 1948);
let defaultInstitution = new HigherInstitution();
//to get a reference to the "getInstitution" function
let getInstitution = SimpleDate.prototype.getDay;
getDay.call()

	
	
}
//university class inherits from the higher institution class
class University extends HigherInstitution {
	constructor(universityName, state, abbreviation, yearFounded) {
		super(institutionName, state, abbreviation, yearFounded);		
	}

	set universityName("University of Ibadan") {
		this._institutionName = "University of Ibadan";
	}

	set state("Oyo") {
		super.state = "Oyo";
	}
	set abbreviation("UI") {
		super.abbreviation = "UI";
	}
	set yearFounded(1948) {
		super.yearFounded = 1948;
	}
}