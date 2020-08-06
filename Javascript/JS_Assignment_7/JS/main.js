var formInputs = [
	{
		label: 'Username',
		type: 'text',
		name: 'username',
		placeholder: 'Enter username',
		errorMsg: 'Username must be at least 3 characters'
	},
	{
		label: 'Email',
		type: 'email',
		name: 'email',
		placeholder: 'Enter email',
		errorMsg: 'Email is not valid'
	},
	{
		label: 'Password',
		type: 'password',
		name: 'password',
		placeholder: 'Enter Password',
		errorMsg: 'Password must be at least 6 characters'
	},
	{
		label: 'Confirm Passeord',
		type: 'password',
		name: 'Comfirmpassword',
		placeholder: 'Re-enter Password',
		errorMsg: 'Password 2 is required'
	}
];

// -------- Creating a form structure -------------

//------ Form container -----------------
var container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

//------- Form title ---------------------
var title = document.createElement('div');
title.classList.add('title');
title.innerHTML = 'Register with us';
container.appendChild(title);

//------- Form ------------------------
var form = new Form();
form.createFormContainer(container);
formInputs.forEach(function(value, index) {
	form.createForm(value, index);
});

form.createSubmitButton();

// --------- Validation --------------

const username = document.getElementById('username');
const divUser = document.getElementById('div-username');

const email = document.getElementById('email');
const divEmail = document.getElementById('div-email');

const password = document.getElementById('password');
const divPwd = document.getElementById('div-password');

const password2 = document.getElementById('Comfirmpassword');
const divPwd2 = document.getElementById('div-Comfirmpassword');

const submitBtn = document.getElementById('submit-btn');

console.log(divUser, username, email, divEmail, password2, divPwd2, submitBtn);

validate = new Validate();
var validateFunction;

submitBtn.addEventListener('click', function(event) {
	// console.log('clicked submit btn');
	// console.log(event);
	var isFormValid = validateFunction(event);
	if (!isFormValid) {
		event.preventDefault();
	}
});

var validateFunction = function(event) {
	console.log(event);
	console.log(username.value);
	if (validate.isUsernameValid(username.value)) {
		username.className = 'input valid';
		divUser.className = 'errorbox hidden';
	} else {
		username.classList.add('invalid');
		divUser.classList.add('visible');
	}

	if (validate.isEmailValid(email.value)) {
		email.className = 'input valid';
		divEmail.className = 'errorBox hidden';
	} else {
		email.classList.add('invalid');
		divEmail.classList.add('visible');
	}

	if (validate.isPasswordValid(password.value)) {
		password.className = 'input valid';
		divPwd.className = 'errorBox hidden';
	} else {
		password.classList.add('invalid');
		divPwd.classList.add('visible');
	}

	if (validate.isPassword2Valid(password2.value, password.value)) {
		password2.className = 'input valid';
		divPwd2.className = 'errorBox hidden';
	} else {
		password2.classList.add('invalid');
		divPwd2.classList.add('visible');
	}

	return false;
};
