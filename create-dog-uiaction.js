function adoptDog() {
	var email = prompt('Please, enter your email address');
	if (email !='') {
		var ga = new GlideAjax('fetchUtils');
		ga.addParam('sysparm_name', 'createEmailNotification');
		ga.addParam('sysparm_adoption_center', g_form.getValue('adoption_center'));
		ga.addParam('sysparm_adopter_email', email);
		ga.getXMLAnswer(ajaxProcessor);
	} else {
		alert('Email address is not valid');
	}
}

function ajaxProcessor(answer) {
	alert('Thank you, Someonw will answer...')
}