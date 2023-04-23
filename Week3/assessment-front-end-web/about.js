console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form submitted successfully');
}


let form = document.querySelector('#contact');
let image = document.querySelector('#rubber-duck')

form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', ()=> alert("You're a smart cookie."))
