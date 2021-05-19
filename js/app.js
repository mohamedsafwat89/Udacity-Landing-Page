/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navItems = Array.from(document.getElementsByTagName('section')); // to get all sections in An Array
let numSections = navItems.length;

const menu = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// To creat Navbar list
function creatList() {
	navItems.forEach((section) => {
		let secName = section.getAttribute('data-nav'); // to get section name
		let target = section.getAttribute('id'); // to great target
		let item = document.createElement('li');
		item.innerHTML = `<a href="#${target}" class="menu__link">${secName}</a>`;

		menu.appendChild(item);
	});
}

// to set Active class
const toggleActive = () => {
	navItems.forEach((section) => {
		let view = section.getBoundingClientRect();
		if (view.top >= 0 && view.top <= 300) {
			section.classList.toggle('your-active-class');
		}
	});
};

// Invoke function
creatList();

//make scroll event
window.addEventListener('scroll', toggleActive);
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
