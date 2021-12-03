/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


const webContent = document.querySelector('#content');
function homeTab() {
	const head = document.createElement('h1');
	head.classList.add('font-headline', 'font-bold');
	const tagline = document.createElement('h2');
	tagline.classList.add('font-text');

	head.innerHTML = _contents_js__WEBPACK_IMPORTED_MODULE_0__.homeContent.headLine;
	tagline.innerHTML = _contents_js__WEBPACK_IMPORTED_MODULE_0__.homeContent.tagLine;

	webContent.appendChild(head);
	webContent.appendChild(tagline);
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



(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_modules_clear_content_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEM7QUFDNUM7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw4REFBb0I7QUFDdEMscUJBQXFCLDZEQUFtQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDZEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDZDtBQUN4QztBQUNBLDREQUFPO0FBQ1AscUVBQVk7QUFDWiw0REFBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY2xlYXJfY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250ZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGpzIG1vZHVsZSB3aWxsIGNsZWFyIHRoZSBjb250ZW50IG9mIGEgcGFyZW50IG5vZGVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcclxuXHRjb25zdCBjb250ZW50UGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHRsZXQgY2hpbGQgPSBjb250ZW50UGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdHdoaWxlKGNoaWxkKSB7XHJcblx0XHRjb250ZW50UGFyZW50LnJlbW92ZUNoaWxkKGNoaWxkKVxyXG5cdFx0Y2hpbGQgPSBjb250ZW50UGFyZW50LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdH1cclxufTsiLCIvLyBUaGlzIG1vZHVsZSBpbmNsdWRlcyBhbGwgY29udGVudHMgZm9yIHRoZSB3ZWJwYWdlXHJcbi8vIGFsbCBjb250ZW50cyBhcmUgc2VwYXJhdGVkIGJ5IG9iamVjdHNcclxuLy8gc28gdGhhdCwgZXZlcnkgY29udGVudHMgaW4gZXZlcnkgd2VicGFnZSBjYW4gYmUgc2VwYXJhdGVkbHkgZXhwb3J0ZWRcclxuXHJcbmV4cG9ydCBsZXQgaG9tZUNvbnRlbnQgPSB7XHJcblx0aGVhZExpbmU6IFwiS8WNaMSrIE1pc2VcIixcclxuXHR0YWdMaW5lOiBcIlnFjWtvc28sIHRvIHRoZSBiZXN0IEvFjWjEqyBpbiB0aGUgdG93bi5cIixcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgbWVudUNvbnRlbnQgPSB7XHJcblx0aGVhZExpbmU6IFwiS8WNaMSrIE1lbnnFq1wiLFxyXG5cdG1lbnVfMTogW1wiQWZmb2dhdG9cIiwgXCJFc3ByZXNzbyBBbWVyaWNhbm9cIiwgXCJDYWZmZSBMYXR0ZVwiLCBcIkNhZmZlIE1vY2hhXCIsIFwiQ2FmZSBBdSBMYWl0XCIsIFwiQ2FwcHVjaW5vXCJdLFxyXG5cdG1lbnVfMjogW1wiQ29sZCBCcmV3IENvZmZlZVwiLCBcIkRvdWJsZSBFc3ByZXNzb1wiLCBcIkVzcHJlc3NvIENvbiBQYW5uYVwiLCBcIkZyYXBwZVwiLCBcIkljZWQgTGF0dGVcIiwgXCJGbGF0IFdoaXRlXCJdLFxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhYm91dENvbnRlbnQgPSB7XHJcblx0aGVhZExpbmU6IFwiQWJvdXQgS8WNaMSrIE1pc2VcIixcclxuXHRkZXNjOiBcIktvaGkgTWlzZSBpcyBhIHNpbXBsZSBjb2ZmZWUgc2hvcCBpbnNwaXJlZCBieSBKYXBhbmVzZSBjdWx0dXJlLiBUaGUgQ0VPIG9mIHRoaXMgY29mZmVlIHNob3AgcmVhbGx5IGxpa2VzIGFuaW1lIHdoaWNoIG1hZGUgaGltIGxvdmUgdGhlIEphcGFuZXNlIGN1bHR1cmUuIFRoaXMgY29mZmVlIHNob3AgaXMgdmVyeSBzbWFsbCBidXQgZmlsbGVkIHdpdGggbWVtb3JpZXMgYW5kIGxvdmUgYnkgdGhlIGVtcGxveWVlcyBpbiBvcmRlciB0byBnaXZlIHRoZSBiZXN0IGV4cGVyaWVuY2UgdG8gZXZlcnlvbmUuIERvbuKAmXQgZm9yZ2V0IHRoYXQgS29oaSBNaXNlIGEgZGF5IHdpbGwga2VlcCB0aGUgcmVhbCB3b3JsZCBhd2F5IVwiLFxyXG59OyIsImltcG9ydCB7IGhvbWVDb250ZW50IH0gZnJvbSAnLi9jb250ZW50cy5qcyc7XHJcblxyXG5jb25zdCB3ZWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVRhYigpIHtcclxuXHRjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHRoZWFkLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtaGVhZGxpbmUnLCAnZm9udC1ib2xkJyk7XHJcblx0Y29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblx0dGFnbGluZS5jbGFzc0xpc3QuYWRkKCdmb250LXRleHQnKTtcclxuXHJcblx0aGVhZC5pbm5lckhUTUwgPSBob21lQ29udGVudC5oZWFkTGluZTtcclxuXHR0YWdsaW5lLmlubmVySFRNTCA9IGhvbWVDb250ZW50LnRhZ0xpbmU7XHJcblxyXG5cdHdlYkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9tb2R1bGVzL2NsZWFyX2NvbnRlbnQuanMnO1xyXG5pbXBvcnQgaG9tZVRhYiBmcm9tICcuL21vZHVsZXMvaG9tZS5qcyc7XHJcblxyXG5ob21lVGFiKCk7XHJcbmNsZWFyQ29udGVudCgpO1xyXG5ob21lVGFiKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9