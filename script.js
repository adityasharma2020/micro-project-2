const toggleBtn = document.getElementById('toggleBtn');
const dropDownLinks = document.getElementById('dropdown');

toggleBtn.onclick = function () {
	dropDownLinks.classList.toggle('open');
};
