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

const links = document.querySelectorAll('.menu__link');
const li = menu.querySelectorAll('li');

const makeNavActive = () => {
	let activeSection = document.querySelector('.your-active-class');
	let sectionId = activeSection.getAttribute('id');
	let aItem = document.querySelector(`[data-link="${sectionId}"]`);
	document.querySelectorAll('.active').forEach((el) => {
		el.classList.remove('active');
	});
	aItem.classList.add('active');
};
// to remove all active class
const removeActiveClass = () => {
	document.querySelectorAll('section').forEach((el) => {
		el.classList.remove('your-active-class');
	});
};

// to set Active class to section
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

links.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		if (event.target.dataset.link) {
			document.getElementById(`${event.target.dataset.link}`).scrollIntoView({ behavior: 'smooth' });
		}
	});
});
//make scroll event
window.addEventListener('scroll', (event) => {
	event.preventDefault();
	toggleActive();
	makeNavActive();
});
