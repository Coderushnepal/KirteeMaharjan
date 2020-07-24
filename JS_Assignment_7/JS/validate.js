function Validate() {
	this.isUsernameValid = function(value) {
		if (value < 3 && value == '') {
			return true;
		}
		return false;
	};

	this.isEmailValid = function(value) {
		// var result = value.search('.com');
		// return result < 0 ? false : true;
		var check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return check.test(value);
	};

	this.isPasswordValid = function(value) {
		return value.length < 6 ? false : true;
	};

	this.isPassword2Valid = function(value, pwd1) {
		return value === pwd1 ? true : false;
	};
}

// var v = new Validate();
// console.log(v.isUsernameValid('llp'));
// console.log(v.isEmailValid('ll.09oom'));
// console.log(v.isPasswordValid('jelo'));
