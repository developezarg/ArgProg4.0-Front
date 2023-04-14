const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function sendEmail() {
	var parametros = {
		nombre: document.getElementById("nombre").value,
		correo: document.getElementById("e-mail").value,
		mensaje: document.getElementById("message").value,
	};


	const serviceID = "service_p2xo77a";
	const templateID = "template_jc7bgdm";

	emailjs
		.send(serviceID, templateID, parametros)
		.then(
			res => {
				document.getElementById("nombre").value = "";
				document.getElementById("e-mail").value = "";
				document.getElementById("message").value = "";
				console.log(res);
				alert("Su mensaje fue enviado correctamente")
			})
		.catch((err) => console.log(err));
}