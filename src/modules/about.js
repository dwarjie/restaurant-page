// This module will contain the About page
import { aboutContent } from './contents.js';

export default function aboutTab(webContent) {
	const head = document.createElement('h1');
	head.classList.add('font-headline', 'font-bold', 'about-title');
	const desc = document.createElement('p');
	desc.classList.add('font-text', 'about-desc');

	head.innerHTML = aboutContent.headLine;
	desc.innerHTML = aboutContent.desc;

	webContent.appendChild(head);
	webContent.appendChild(desc);
};