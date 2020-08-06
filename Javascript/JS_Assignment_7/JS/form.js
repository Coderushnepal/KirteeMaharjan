function Form() {
	var i = 1;

	this.createFormContainer = function(container) {
		this.form = document.createElement('form');
		this.form.classList.add('form');
		container.append(this.form);
	};

	this.createForm = function(value, index) {
		var label = document.createElement('label');
		label.id = index + 1;
		label.for = value.name;
		label.innerHTML = value.label;
		this.form.appendChild(label);

		input = document.createElement('input');
		input.classList.add('input');
		input.id = value.name;
		input.setAttribute('type', value.type);
		input.setAttribute('name', value.name);
		input.setAttribute('placeholder', value.placeholder);
		if (value.type == 'password') {
			input.setAttribute('required', 'required');
		}
		this.form.appendChild(input);

		var div = document.createElement('div');
		var divId = 'div' + '-' + value.name;
		div.id = divId;
		div.classList.add('errorBox', 'hidden');
		div.innerHTML = value.errorMsg;
		this.form.appendChild(div);
	};

	this.createSubmitButton = function() {
		var input = document.createElement('input');
		input.type = 'submit';
		input.name = 'submit';
		input.id = 'submit-btn';
		this.form.appendChild(input);
	};
}
