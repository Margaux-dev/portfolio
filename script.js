// MENU
let menuButton = document.querySelector("#menuDisplay");
let menu = document.querySelector(".menu");

menuButton.addEventListener("click", showMenu);

function showMenu (e) {
	e.preventDefault();
	menu.style.display = "flex";
	setTimeout(() => {menuButton.style.display = "none"}, 100);
	setTimeout(() => {
		document.querySelector("#closeMenu").style.display = "block";
	},800);
	menu.addEventListener("click", () => {
		menu.classList.add("close");
		document.querySelector("#closeMenu").style.display = "none";
		menuButton.style.display = "block";
		setTimeout(() =>{
			menu.style.display = "none";
			menu.classList.remove("close");
		},850)
	});
}


// COPYRIGHT YEAR
let copyrightDate = document.querySelector("#copyright-date");
function setDate () {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	copyrightDate.innerHTML = currentYear;
}
setDate();
