// This js module will clear the content of a parent node

export default function clearContent() {
	const contentParent = document.querySelector('#content');
	let child = contentParent.firstElementChild;
	while(child) {
		contentParent.removeChild(child)
		child = contentParent.firstElementChild;
	}
};