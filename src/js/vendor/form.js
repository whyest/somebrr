const form = document.getElementById('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	let username = document.getElementById('username');
	let userphone = document.getElementById('userphone');
	let comments = document.getElementById('comments');

	console.log(
		`This form has a username of ${username.value} and a phone number ${userphone.value}. The comments are ${comments.value}`
	);

	username.value = '';
	userphone.value = '';
	comments.value = '';
});
