const navItems = Array.from(document.getElementsByTagName('section')); // to get all sections in An Array
let numSections = navItems.length;

const menu = document.querySelector('#navbar__list');

// To creat Navbar list
(function creatList() {
	navItems.forEach((section) => {
		let secName = section.getAttribute('data-nav'); // to get section name
		let target = section.getAttribute('id'); // to great target
		let item = document.createElement('li');
		item.innerHTML = `<a href="#${target}" data-link="${target}" class="menu__link">${secName}</a>`;
		menu.appendChild(item);
	});
})();

// to remove all active class
const removeActiveClass = () => {
	document.querySelectorAll('section').forEach((el) => {
		el.classList.remove('your-active-class');
	});
};

// to set Active class
const toggleActive = () => {
	navItems.forEach((section) => {
		let scrollPosition = document.documentElement.scrollTop;
		if (
			scrollPosition >= section.offsetTop - section.offsetTop * 0.15 &&
			scrollPosition < section.offsetTop + section.offsetHeight
		) {
			removeActiveClass();
			section.classList.add('your-active-class');
		}
	});
};

const links = document.querySelectorAll('.menu__link');
links.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		if (event.target.dataset.link) {
			document.getElementById(`${event.target.dataset.link}`).scrollIntoView({ behavior: 'smooth' });
		}
	});
});
//make scroll event
window.addEventListener('scroll', toggleActive);
