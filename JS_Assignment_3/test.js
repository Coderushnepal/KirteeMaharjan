var password = document.getElementById('password');
var showPwd = document.getElementById('showpwd');
console.log(password);
console.log(showPwd);
showPwd.addEventListener('click', function(e) {
	var type = password.getAttribute('type') == 'password' ? 'text' : 'password';
	password.setAttribute('type', type);
	this.classList.toggle('fa-eye-slash');
});
