// CONTACT FORM
window.addEventListener("DOMContentLoaded", () => {
	let form = document.querySelector("#contact-form");
	let formStatus = document.querySelector("#contact-form-status");
	let contactName = document.querySelector("#contact-name");
	let contactMail = document.querySelector("#contact-email");
	let contactTel = document.querySelector("#contact-tel");
	let textarea = document.querySelector("#contact-message");
	
	function success () {
		formStatus.innerHTML = "Message bien envoyé !"
		contactMail.value = "";
		contactName.value = "";
		contactTel.value = "";
		textarea.value = "";
	}
	
	function error () {
		formStatus.innerHTML = "Oups, il y a eu une erreur ! Merci de renvoyer votre message."
	}
	
	form.addEventListener("submit", e => {
		e.preventDefault();
		var data = new FormData(form);
		ajax(form.method, form.action, data, success, error);
	});
	
	function ajax (method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader("Accept", "application/json");
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
	}
	
})
