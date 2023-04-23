let color = document.querySelector('#color');
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
let skillsForm = document.getElementById('skill-question')

function submitForm(evt) {
	evt.preventDefault();
	
	alert('The form submitted successfully');
}

color.addEventListener('click', ()=> alert("Jeri's favorite color is purple."))
place.addEventListener('click', ()=> alert("Jeri's favorite place is Boston."))
ritual.addEventListener('click', ()=> alert("Jeri's favorite ritual is being surrounded by pillows when going to sleep."))
skillsForm.addEventListener('submit', submitForm)