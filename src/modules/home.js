import { homeContent } from './contents.js';

const webContent = document.querySelector('#content');
export default function homeTab() {
	const head = document.createElement('h1');
	head.classList.add('font-headline', 'font-bold');
	const tagline = document.createElement('h2');
	tagline.classList.add('font-text');

	head.innerHTML = homeContent.headLine;
	tagline.innerHTML = homeContent.tagLine;

	webContent.appendChild(head);
	webContent.appendChild(tagline);
};