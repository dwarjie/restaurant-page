import clearContent from './modules/clear_content.js';
import homeTab from './modules/home.js';
import menuTab from './modules/menu.js';
import aboutTab from './modules/about.js';
import './style.scss';

// get the DOM element for the div who will hold the contents
const webContent = document.querySelector('#content');
// get the DOM element for the navigations
const navOverlay = document.querySelector('.nav-overlay');
const navBurger = document.querySelector('.nav-burger');
const closeNavBurger = document.querySelector('.nav-overlay-close');
const home = document.querySelectorAll('#home');
const menu = document.querySelectorAll('#menu')
const about = document.querySelectorAll('#about');

// load the home tab once the page loaded
window.onload = () => {
	changeTab('home');
};

// adding event listeners to the navigations
home.forEach(tab => {
	tab.addEventListener('click', () => { changeTab('home') });
});
menu.forEach(tab => {
	tab.addEventListener('click', () => { changeTab('menu') });
});
about.forEach(tab => {
	tab.addEventListener('click', () => { changeTab('about') })
});
// for opening and closing the navigation for mobile
navBurger.addEventListener('click', () => {
	navOverlay.style.width = '100%';
});

closeNavBurger.addEventListener('click', closeNav)

function closeNav() {
	navOverlay.style.width = '0%';
}

function changeTab(tabTitle) {
	clearContent(); // clear the content first
	switch (tabTitle) {
		case 'home':
			homeTab(webContent);
			closeNav();
			break;
		case 'menu':
			menuTab(webContent);
			closeNav();
			break;
		case 'about':
			aboutTab(webContent);
			closeNav();
			break;
		default:
			console.log('No identified tab title')
			break;
	}
};

