import clearContent from './modules/clear_content.js';
import homeTab from './modules/home.js';
import menuTab from './modules/menu.js';
import aboutTab from './modules/about.js';

// get the DOM element for the div who will hold the contents
const webContent = document.querySelector('#content');
// get the DOM element for the navigations
const home = document.querySelector('#home');
const menu = document.querySelector('#menu')
const about = document.querySelector('#about');

// adding event listeners to the navigations
home.addEventListener('click', () => { changeTab('home') });
menu.addEventListener('click', () => { changeTab('menu') });
about.addEventListener('click', () => { changeTab('about') });
// font-family: 'Playfair Display', serif;

function changeTab(tabTitle) {
	clearContent(); // clear the content first
	switch (tabTitle) {
		case 'home':
			homeTab(webContent);
			break;
		case 'menu':
			menuTab(webContent);
			break;
		case 'about':
			aboutTab(webContent);
			break;
		default:
			console.log('No identified tab title')
			break;
	}
};

