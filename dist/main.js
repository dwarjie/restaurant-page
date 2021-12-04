/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutTab)
/* harmony export */ });
/* harmony import */ var _contents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contents.js */ "./src/modules/contents.js");
// This module will contain the About page


function aboutTab(webContent) {
	const head = document.createElement('h1');
	head.classList.add('font-headline', 'font-bold');
	const desc = document.createElement('p');
	desc.classList.add('font-text');

	head.innerHTML = _contents_js__WEBPACK_IMPORTED_MODULE_0__.aboutContent.headLine;
	desc.innerHTML = _contents_js__WEBPACK_IMPORTED_MODULE_0__.aboutContent.desc;

	webContent.appendChild(head);
	webContent.appendChild(desc);
};

/***/ }),

/***/ "./src/modules/clear_content.js":
/*!**************************************!*\
  !*** ./src/modules/clear_content.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clearContent)
/* harmony export */ });
// This js module will clear the content of a parent node
// it will get the parent node then get the first element child
// while there's still a child keep looping
// 	inside the loop it will remove the child then get the child again

function clearContent() {
	const contentParent = document.querySelector('#content');
	let child = contentParent.firstElementChild;
	while(child) {
		contentParent.removeChild(child)
		child = contentParent.firstElementChild;
	}
};

/***/ }),

/***/ "./src/modules/contents.js":
/*!*********************************!*\
  !*** ./src/modules/contents.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeContent": () => (/* binding */ homeContent),
/* harmony export */   "menuContent": () => (/* binding */ menuContent),
/* harmony export */   "aboutContent": () => (/* binding */ aboutContent)
/* harmony export */ });
// This module includes all contents for the webpage
// all contents are separated by objects
// so that, every contents in every webpage can be separatedly exported

let homeContent = {
	headLine: "Kōhī Mise",
	tagLine: "Yōkoso, to the best Kōhī in the town.",
};

let menuContent = {
	headLine: "Kōhī Menyū",
	menu_1: ["Affogato", "Espresso Americano", "Caffe Latte", "Caffe Mocha", "Cafe Au Lait", "Cappucino"],
	menu_2: ["Cold Brew Coffee", "Double Espresso", "Espresso Con Panna", "Frappe", "Iced Latte", "Flat White"],
};

let aboutContent = {
	headLine: "About Kōhī Mise",
	desc: "Kohi Mise is a simple coffee shop inspired by Japanese culture. The CEO of this coffee shop really likes anime which made him love the Japanese culture. This coffee shop is very small but filled with memories and love by the employees in order to give the best experience to everyone. Don’t forget that Kohi Mise a day will keep the real world away!",
};

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homeTab)
/* harmony export */ });
/* harmony import */ var _contents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contents.js */ "./src/modules/contents.js");


function homeTab(webContent) {
	const head = document.createElement('h1');
	head.classList.add('font-headline', 'font-bold');
	const tagline = document.createElement('h2');
	tagline.classList.add('font-text');

	head.innerHTML = _contents_js__WEBPACK_IMPORTED_MODULE_0__.homeContent.headLine;
	tagline.innerHTML = _contents_js__WEBPACK_IMPORTED_MODULE_0__.homeContent.tagLine;

	webContent.appendChild(head);
	webContent.appendChild(tagline);
};

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuTab)
/* harmony export */ });
/* harmony import */ var _contents_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contents.js */ "./src/modules/contents.js");
// This js module contains the content for Menu tab


function menuTab(webContent) {
	const head = document.createElement('h1');
	head.classList.add('font-headline');
	head.innerHTML = _contents_js__WEBPACK_IMPORTED_MODULE_0__.menuContent.headLine;

	const menuHolder = document.createElement('div');
	menuHolder.classList.add('menu');
	// create the first container for the menu
	const menuType_1 = document.createElement('div');
	menuType_1.classList.add('menu-1');
	const menu1_ul = document.createElement('ul');
	createList(menu1_ul, _contents_js__WEBPACK_IMPORTED_MODULE_0__.menuContent.menu_1);
	menuType_1.appendChild(menu1_ul); // append the ul with the li to the div

	// create the first container for the menu
	const menuType_2 = document.createElement('div');
	menuType_2.classList.add('menu-2');
	const menu2_ul = document.createElement('ul');
	createList(menu2_ul, _contents_js__WEBPACK_IMPORTED_MODULE_0__.menuContent.menu_2);
	menuType_2.appendChild(menu2_ul); // append the ul with the li to the div

	menuHolder.appendChild(menuType_1);
	menuHolder.appendChild(menuType_2);

	webContent.appendChild(head);
	webContent.appendChild(menuHolder);
};

// This function will create the li for the ul node
// it needs menu_ul which is the ul node
// also the menuList for the contents of every li using array
function createList(menu_ul, menuList) {
	// it will go through all the elements of the list
	menuList.forEach((product) => {
		const li = document.createElement('li'); // create the li element
		li.innerHTML = product; // add the content of the li
		li.classList.add('font-text');

		menu_ul.appendChild(li); // then append it as a child of the ul
	});
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_clear_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/clear_content.js */ "./src/modules/clear_content.js");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");
/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu.js */ "./src/modules/menu.js");
/* harmony import */ var _modules_about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/about.js */ "./src/modules/about.js");





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
	(0,_modules_clear_content_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // clear the content first
	switch (tabTitle) {
		case 'home':
			(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(webContent);
			break;
		case 'menu':
			(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(webContent);
			break;
		case 'about':
			(0,_modules_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])(webContent);
			break;
		default:
			console.log('No identified tab title')
			break;
	}
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2QztBQUM3QztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrREFBcUI7QUFDdkMsa0JBQWtCLDJEQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQjRDO0FBQzVDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhEQUFvQjtBQUN0QyxxQkFBcUIsNkRBQW1CO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUM0QztBQUM1QztBQUNlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQiw4REFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNERBQWtCO0FBQ3hDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFrQjtBQUN4QyxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQywwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQixFQUFFO0FBQ0Y7Ozs7OztVQzNDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNEO0FBQ2Q7QUFDQTtBQUNFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQkFBbUI7QUFDMUQsdUNBQXVDLG1CQUFtQjtBQUMxRCx3Q0FBd0Msb0JBQW9CO0FBQzVEO0FBQ0E7QUFDQTtBQUNBLENBQUMscUVBQVksSUFBSTtBQUNqQjtBQUNBO0FBQ0EsR0FBRyw0REFBTztBQUNWO0FBQ0E7QUFDQSxHQUFHLDREQUFPO0FBQ1Y7QUFDQTtBQUNBLEdBQUcsNkRBQVE7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NsZWFyX2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIG1vZHVsZSB3aWxsIGNvbnRhaW4gdGhlIEFib3V0IHBhZ2VcclxuaW1wb3J0IHsgYWJvdXRDb250ZW50IH0gZnJvbSAnLi9jb250ZW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFRhYih3ZWJDb250ZW50KSB7XHJcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblx0aGVhZC5jbGFzc0xpc3QuYWRkKCdmb250LWhlYWRsaW5lJywgJ2ZvbnQtYm9sZCcpO1xyXG5cdGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblx0ZGVzYy5jbGFzc0xpc3QuYWRkKCdmb250LXRleHQnKTtcclxuXHJcblx0aGVhZC5pbm5lckhUTUwgPSBhYm91dENvbnRlbnQuaGVhZExpbmU7XHJcblx0ZGVzYy5pbm5lckhUTUwgPSBhYm91dENvbnRlbnQuZGVzYztcclxuXHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZChoZWFkKTtcclxuXHR3ZWJDb250ZW50LmFwcGVuZENoaWxkKGRlc2MpO1xyXG59OyIsIi8vIFRoaXMganMgbW9kdWxlIHdpbGwgY2xlYXIgdGhlIGNvbnRlbnQgb2YgYSBwYXJlbnQgbm9kZVxyXG4vLyBpdCB3aWxsIGdldCB0aGUgcGFyZW50IG5vZGUgdGhlbiBnZXQgdGhlIGZpcnN0IGVsZW1lbnQgY2hpbGRcclxuLy8gd2hpbGUgdGhlcmUncyBzdGlsbCBhIGNoaWxkIGtlZXAgbG9vcGluZ1xyXG4vLyBcdGluc2lkZSB0aGUgbG9vcCBpdCB3aWxsIHJlbW92ZSB0aGUgY2hpbGQgdGhlbiBnZXQgdGhlIGNoaWxkIGFnYWluXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcblx0Y29uc3QgY29udGVudFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblx0bGV0IGNoaWxkID0gY29udGVudFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR3aGlsZShjaGlsZCkge1xyXG5cdFx0Y29udGVudFBhcmVudC5yZW1vdmVDaGlsZChjaGlsZClcclxuXHRcdGNoaWxkID0gY29udGVudFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR9XHJcbn07IiwiLy8gVGhpcyBtb2R1bGUgaW5jbHVkZXMgYWxsIGNvbnRlbnRzIGZvciB0aGUgd2VicGFnZVxyXG4vLyBhbGwgY29udGVudHMgYXJlIHNlcGFyYXRlZCBieSBvYmplY3RzXHJcbi8vIHNvIHRoYXQsIGV2ZXJ5IGNvbnRlbnRzIGluIGV2ZXJ5IHdlYnBhZ2UgY2FuIGJlIHNlcGFyYXRlZGx5IGV4cG9ydGVkXHJcblxyXG5leHBvcnQgbGV0IGhvbWVDb250ZW50ID0ge1xyXG5cdGhlYWRMaW5lOiBcIkvFjWjEqyBNaXNlXCIsXHJcblx0dGFnTGluZTogXCJZxY1rb3NvLCB0byB0aGUgYmVzdCBLxY1oxKsgaW4gdGhlIHRvd24uXCIsXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IG1lbnVDb250ZW50ID0ge1xyXG5cdGhlYWRMaW5lOiBcIkvFjWjEqyBNZW55xatcIixcclxuXHRtZW51XzE6IFtcIkFmZm9nYXRvXCIsIFwiRXNwcmVzc28gQW1lcmljYW5vXCIsIFwiQ2FmZmUgTGF0dGVcIiwgXCJDYWZmZSBNb2NoYVwiLCBcIkNhZmUgQXUgTGFpdFwiLCBcIkNhcHB1Y2lub1wiXSxcclxuXHRtZW51XzI6IFtcIkNvbGQgQnJldyBDb2ZmZWVcIiwgXCJEb3VibGUgRXNwcmVzc29cIiwgXCJFc3ByZXNzbyBDb24gUGFubmFcIiwgXCJGcmFwcGVcIiwgXCJJY2VkIExhdHRlXCIsIFwiRmxhdCBXaGl0ZVwiXSxcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWJvdXRDb250ZW50ID0ge1xyXG5cdGhlYWRMaW5lOiBcIkFib3V0IEvFjWjEqyBNaXNlXCIsXHJcblx0ZGVzYzogXCJLb2hpIE1pc2UgaXMgYSBzaW1wbGUgY29mZmVlIHNob3AgaW5zcGlyZWQgYnkgSmFwYW5lc2UgY3VsdHVyZS4gVGhlIENFTyBvZiB0aGlzIGNvZmZlZSBzaG9wIHJlYWxseSBsaWtlcyBhbmltZSB3aGljaCBtYWRlIGhpbSBsb3ZlIHRoZSBKYXBhbmVzZSBjdWx0dXJlLiBUaGlzIGNvZmZlZSBzaG9wIGlzIHZlcnkgc21hbGwgYnV0IGZpbGxlZCB3aXRoIG1lbW9yaWVzIGFuZCBsb3ZlIGJ5IHRoZSBlbXBsb3llZXMgaW4gb3JkZXIgdG8gZ2l2ZSB0aGUgYmVzdCBleHBlcmllbmNlIHRvIGV2ZXJ5b25lLiBEb27igJl0IGZvcmdldCB0aGF0IEtvaGkgTWlzZSBhIGRheSB3aWxsIGtlZXAgdGhlIHJlYWwgd29ybGQgYXdheSFcIixcclxufTsiLCJpbXBvcnQgeyBob21lQ29udGVudCB9IGZyb20gJy4vY29udGVudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVRhYih3ZWJDb250ZW50KSB7XHJcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblx0aGVhZC5jbGFzc0xpc3QuYWRkKCdmb250LWhlYWRsaW5lJywgJ2ZvbnQtYm9sZCcpO1xyXG5cdGNvbnN0IHRhZ2xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5cdHRhZ2xpbmUuY2xhc3NMaXN0LmFkZCgnZm9udC10ZXh0Jyk7XHJcblxyXG5cdGhlYWQuaW5uZXJIVE1MID0gaG9tZUNvbnRlbnQuaGVhZExpbmU7XHJcblx0dGFnbGluZS5pbm5lckhUTUwgPSBob21lQ29udGVudC50YWdMaW5lO1xyXG5cclxuXHR3ZWJDb250ZW50LmFwcGVuZENoaWxkKGhlYWQpO1xyXG5cdHdlYkNvbnRlbnQuYXBwZW5kQ2hpbGQodGFnbGluZSk7XHJcbn07IiwiLy8gVGhpcyBqcyBtb2R1bGUgY29udGFpbnMgdGhlIGNvbnRlbnQgZm9yIE1lbnUgdGFiXHJcbmltcG9ydCB7IG1lbnVDb250ZW50IH0gZnJvbSAnLi9jb250ZW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51VGFiKHdlYkNvbnRlbnQpIHtcclxuXHRjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHRoZWFkLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtaGVhZGxpbmUnKTtcclxuXHRoZWFkLmlubmVySFRNTCA9IG1lbnVDb250ZW50LmhlYWRMaW5lO1xyXG5cclxuXHRjb25zdCBtZW51SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudUhvbGRlci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblx0Ly8gY3JlYXRlIHRoZSBmaXJzdCBjb250YWluZXIgZm9yIHRoZSBtZW51XHJcblx0Y29uc3QgbWVudVR5cGVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1lbnVUeXBlXzEuY2xhc3NMaXN0LmFkZCgnbWVudS0xJyk7XHJcblx0Y29uc3QgbWVudTFfdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdGNyZWF0ZUxpc3QobWVudTFfdWwsIG1lbnVDb250ZW50Lm1lbnVfMSk7XHJcblx0bWVudVR5cGVfMS5hcHBlbmRDaGlsZChtZW51MV91bCk7IC8vIGFwcGVuZCB0aGUgdWwgd2l0aCB0aGUgbGkgdG8gdGhlIGRpdlxyXG5cclxuXHQvLyBjcmVhdGUgdGhlIGZpcnN0IGNvbnRhaW5lciBmb3IgdGhlIG1lbnVcclxuXHRjb25zdCBtZW51VHlwZV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudVR5cGVfMi5jbGFzc0xpc3QuYWRkKCdtZW51LTInKTtcclxuXHRjb25zdCBtZW51Ml91bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0Y3JlYXRlTGlzdChtZW51Ml91bCwgbWVudUNvbnRlbnQubWVudV8yKTtcclxuXHRtZW51VHlwZV8yLmFwcGVuZENoaWxkKG1lbnUyX3VsKTsgLy8gYXBwZW5kIHRoZSB1bCB3aXRoIHRoZSBsaSB0byB0aGUgZGl2XHJcblxyXG5cdG1lbnVIb2xkZXIuYXBwZW5kQ2hpbGQobWVudVR5cGVfMSk7XHJcblx0bWVudUhvbGRlci5hcHBlbmRDaGlsZChtZW51VHlwZV8yKTtcclxuXHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZChoZWFkKTtcclxuXHR3ZWJDb250ZW50LmFwcGVuZENoaWxkKG1lbnVIb2xkZXIpO1xyXG59O1xyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGNyZWF0ZSB0aGUgbGkgZm9yIHRoZSB1bCBub2RlXHJcbi8vIGl0IG5lZWRzIG1lbnVfdWwgd2hpY2ggaXMgdGhlIHVsIG5vZGVcclxuLy8gYWxzbyB0aGUgbWVudUxpc3QgZm9yIHRoZSBjb250ZW50cyBvZiBldmVyeSBsaSB1c2luZyBhcnJheVxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0KG1lbnVfdWwsIG1lbnVMaXN0KSB7XHJcblx0Ly8gaXQgd2lsbCBnbyB0aHJvdWdoIGFsbCB0aGUgZWxlbWVudHMgb2YgdGhlIGxpc3RcclxuXHRtZW51TGlzdC5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcblx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IC8vIGNyZWF0ZSB0aGUgbGkgZWxlbWVudFxyXG5cdFx0bGkuaW5uZXJIVE1MID0gcHJvZHVjdDsgLy8gYWRkIHRoZSBjb250ZW50IG9mIHRoZSBsaVxyXG5cdFx0bGkuY2xhc3NMaXN0LmFkZCgnZm9udC10ZXh0Jyk7XHJcblxyXG5cdFx0bWVudV91bC5hcHBlbmRDaGlsZChsaSk7IC8vIHRoZW4gYXBwZW5kIGl0IGFzIGEgY2hpbGQgb2YgdGhlIHVsXHJcblx0fSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vbW9kdWxlcy9jbGVhcl9jb250ZW50LmpzJztcclxuaW1wb3J0IGhvbWVUYWIgZnJvbSAnLi9tb2R1bGVzL2hvbWUuanMnO1xyXG5pbXBvcnQgbWVudVRhYiBmcm9tICcuL21vZHVsZXMvbWVudS5qcyc7XHJcbmltcG9ydCBhYm91dFRhYiBmcm9tICcuL21vZHVsZXMvYWJvdXQuanMnO1xyXG5cclxuLy8gZ2V0IHRoZSBET00gZWxlbWVudCBmb3IgdGhlIGRpdiB3aG8gd2lsbCBob2xkIHRoZSBjb250ZW50c1xyXG5jb25zdCB3ZWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuLy8gZ2V0IHRoZSBET00gZWxlbWVudCBmb3IgdGhlIG5hdmlnYXRpb25zXHJcbmNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKVxyXG5jb25zdCBhYm91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dCcpO1xyXG5cclxuLy8gYWRkaW5nIGV2ZW50IGxpc3RlbmVycyB0byB0aGUgbmF2aWdhdGlvbnNcclxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hhbmdlVGFiKCdob21lJykgfSk7XHJcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZVRhYignbWVudScpIH0pO1xyXG5hYm91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgY2hhbmdlVGFiKCdhYm91dCcpIH0pO1xyXG4vLyBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRhYih0YWJUaXRsZSkge1xyXG5cdGNsZWFyQ29udGVudCgpOyAvLyBjbGVhciB0aGUgY29udGVudCBmaXJzdFxyXG5cdHN3aXRjaCAodGFiVGl0bGUpIHtcclxuXHRcdGNhc2UgJ2hvbWUnOlxyXG5cdFx0XHRob21lVGFiKHdlYkNvbnRlbnQpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ21lbnUnOlxyXG5cdFx0XHRtZW51VGFiKHdlYkNvbnRlbnQpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2Fib3V0JzpcclxuXHRcdFx0YWJvdXRUYWIod2ViQ29udGVudCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIGlkZW50aWZpZWQgdGFiIHRpdGxlJylcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9