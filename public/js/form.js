
const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	firstName: /^[a-zA-ZÀ-ÿ,.'-\s]{1,40}$/, 
	lastName: /^[a-zA-ZÀ-ÿ,.'-\s]{1,40}$/,
	password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/, //The password must be at least 8 to 16 characters long, at least one digit, at least one lowercase, and at least one uppercase.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
}

 //(?=.*\d)          should contain at least one digit
 // (?=.*[a-z])       should contain at least one lower case
 // (?=.*[A-Z])       should contain at least one upper case
 // [a-zA-Z0-9]{8,}   should contain at least 8 from the mentioned characters

 const fields = {
	 'first-name'  :  false ,
	 'last-name'   :  false ,
	 'password'    :  false ,
	 'email'       :  false ,
 }



const validationForm = (e) => {

	switch (e.target.name) {

		case "first-name":           //Expression    input       field
			validationField(expressions.firstName , e.target , 'first-name');
			break;

		case "last-name":
			validationField(expressions.lastName , e.target , 'last-name');
			break;

		case "email":
			validationField(expressions.email , e.target , 'email');
			break;

		case "password":
			validationField(expressions.password , e.target , 'password');
			break;
	}
}

const validationField = (expression, input, field) => {

	if (expression.test(input.value)) {
	
		//using template strings 
		document.getElementById(`${field}__control` ).classList.remove('form__control-incorrect');
		document.getElementById(`${field}__control`).classList.add('form__control-correct');
		document.querySelector(`#${field}__control i`).classList.add('fa-check-circle');
		document.querySelector(`#${field}__control i`).classList.remove('fa-times-circle');
		document.querySelector(`#${field}__control .form__input-error`).classList.remove('form__input-error-active');

		//Submit
		fields[field] = true;

	} else {
		document.getElementById(`${field}__control`).classList.add('form__control-incorrect');
		document.getElementById(`${field}__control`).classList.remove('form__control-correct');
		document.querySelector(`#${field}__control i`).classList.remove('fa-check-circle');
		document.querySelector(`#${field}__control i`).classList.add('fa-times-circle');
		document.querySelector(`#${field}__control .form__input-error`).classList.add('form__input-error-active');

		//Submit
		fields[field] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validationForm);
	input.addEventListener('blur', validationForm);
});

form.addEventListener('submit', (e) => {

	e.preventDefault()

	if(fields["first-name"] && fields["last-name"] && fields['email'] && fields['password']){
	
		form.reset();
		document.querySelector('.form__successful-message').classList.add('form__successful-message-active');
		
		setTimeout(() => {
			document.querySelector('.form__successful-message').classList.remove('form__successful-message-active');
			location.reload();
		},3000);

		//remove icons
		document.querySelectorAll('.form__control-correct').forEach((icon) =>{
			icon.classList.remove('form__control-correct');

		});
	}else{
		document.querySelector('.form__error-message').classList.add('form__error-message-active');
		
		setTimeout(() => {
			document.querySelector('.form__error-message').classList.remove('form__error-message-active');
		},5000);
	}
});