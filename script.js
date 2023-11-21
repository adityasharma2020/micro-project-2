const toggleBtn = document.getElementById('toggleBtn');
const dropDownLinks = document.getElementById('dropdown');
const navbar = document.getElementById('navbar');
const logo = document.getElementById('logo');

toggleBtn.onclick = function () {
	dropDownLinks.classList.toggle('open');
};

window.addEventListener('scroll', () => {
	if (navbar && window.scrollY > 100) {
		navbar.classList.add('scroll');
		logo.classList.add('logoScroll');
	} else {
		navbar.classList.remove('scroll');
		logo.classList.remove('logoScroll');
	}
});
