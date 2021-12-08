/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/kohi-bg.jpg */ "./src/img/kohi-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  box-sizing: border-box;\n  vertical-align: baseline;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  font-size: 2 rem;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 85%;\n}\n\n.wrapper {\n  width: 90%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-headline {\n  font-size: 3.25rem;\n}\n\n.font-text {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\n.font-footer {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.nav-overlay-text {\n  font-size: 3.8rem;\n}\n\n.nav-burger {\n  font-size: 2rem;\n}\n\n.menu > div,\n.about-title {\n  padding-bottom: 2.5rem;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n}\n\nbody {\n  position: relative;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.nav-overlay {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  background-color: rgba(60, 46, 38, 0.9);\n  transition: 0.5s;\n}\n.nav-overlay .nav-overlay-close {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-right: 1.2rem;\n  font-size: 3.5rem;\n}\n.nav-overlay .nav-overlay-close:hover {\n  color: #B7B7B7;\n}\n.nav-overlay .nav-overlay-content {\n  position: relative;\n  font-weight: 600;\n  margin-top: 6.5rem;\n  margin-left: 4rem;\n  text-align: left;\n}\n.nav-overlay .nav-overlay-content li {\n  cursor: pointer;\n  margin-bottom: 0.9rem;\n  color: #FFFFFF;\n  transition: color 0.3s;\n}\n.nav-overlay .nav-overlay-content li:hover {\n  color: #B7B7B7;\n}\n\n.wrapper nav {\n  display: none;\n}\n\n.cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(60, 46, 38, 0.8);\n}\n\n.nav-burger {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  padding-right: 0.1rem;\n}\n\n.menu-headline {\n  padding-bottom: 2.5rem;\n}\n\n.menu > div {\n  text-align: left;\n  padding-bottom: 2.5rem;\n}\n.menu > div li {\n  margin-bottom: 0.2rem;\n}\n\n.about-desc {\n  text-align: left;\n  line-height: 1.5;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1600px) {\n  .font-headline {\n    font-size: 7rem;\n  }\n\n  .font-text {\n    font-size: 1.8rem;\n  }\n\n  .font-footer {\n    font-size: 1rem;\n  }\n\n  .nav-burger {\n    display: none;\n  }\n\n  .wrapper nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding-top: 1.2rem;\n  }\n  .wrapper nav li {\n    cursor: pointer;\n    display: inline-block;\n    font-weight: 600;\n    transition: 0.3s;\n  }\n  .wrapper nav li:nth-child(1),\n.wrapper nav li:nth-child(2) {\n    margin-right: 4rem;\n  }\n  .wrapper nav li:hover {\n    color: #B7B7B7;\n  }\n\n  .menu {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2.1rem;\n  }\n\n  .about-desc {\n    text-align: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/partial/_global.scss","webpack://./src/style.scss","webpack://./src/partial/_variables.scss","webpack://./src/partial/_small.scss","webpack://./src/partial/_large.scss"],"names":[],"mappings":"AAAA;EACC,UAAA;EACA,SAAA;EACA,eAAA;EACA,sBAAA;EACA,wBAAA;ACCD;;ADEA;EACC,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cEZY;EFaZ,sCAAA;EACA,gBAAA;EACA,gBAAA;ACCD;;ADEA;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;ACCD;;ADEA;EACC,UAAA;EACA,YAAA;EACA,cAAA;ACCD;;ADEA;EACC,gBAAA;ACCD;;ADEA;EACC,kBAAA;ACCD;;ADEA;EACC,mBAAA;EACA,gBAAA;ACCD;;ADEA;EACC,iBAAA;EACA,gBAAA;EACA,+BE3Cc;AD4Cf;;ADEA;EACC,iBAAA;ACCD;;ADEA;EACC,eAAA;ACCD;;ADEA;;EAEC,sBAAA;ACCD;;ADEA;EACC,qBAAA;EACA,qBAAA;ACCD;;AElEA;EACC,kBAAA;EACA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,4BAAA;AFqED;;AElEA;EACC,YAAA;EACA,QAAA;EACA,eAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,gBAAA;EACA,uCDbe;ECcf,gBAAA;AFqED;AEnEC;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,iBAAA;AFqEF;AElEC;EACC,cD7BY;ADiGd;AEjEC;EACC,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AFmEF;AEjEE;EACC,eAAA;EACA,qBAAA;EACA,cD3CU;EC4CV,sBAAA;AFmEH;AEhEE;EACC,cD/CW;ADiHd;;AE3DC;EACC,aAAA;AF8DF;;AE1DA;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,uCD/Da;AD4Hd;;AE1DA;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,iBAAA;EACA,qBAAA;AF6DD;;AE1DA;EACC,sBAAA;AF6DD;;AE1DA;EACC,gBAAA;EACA,sBAAA;AF6DD;AE3DC;EACC,qBAAA;AF6DF;;AEzDA;EACC,gBAAA;EACA,gBAAA;AF4DD;;AGxJA;EAII;IACI,eAAA;EHwJN;;EGrJE;IACI,iBAAA;EHwJN;;EGrJE;IACI,eAAA;EHwJN;;EGrJE;IACI,aAAA;EHwJN;;EGrJE;IACI,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,mBAAA;EHwJN;EGtJM;IACI,eAAA;IACA,qBAAA;IACA,gBAAA;IACA,gBAAA;EHwJV;EGrJM;;IAEI,kBAAA;EHuJV;EGpJM;IACI,cFvCE;ED6LZ;;EGlJE;IACI,oBAAA;IACA,uBAAA;IACA,mBAAA;IACA,WAAA;EHqJN;;EGlJE;IACI,kBAAA;EHqJN;AACF","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tfont-size: 100%;\r\n\tbox-sizing: border-box;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nbody {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\ttext-align: center;\r\n\tcolor: $text-color;\r\n\tfont-family: 'Playfair Display', serif;\r\n\tfont-weight: 400;\r\n\tfont-size: calc(32/16)rem;\r\n}\r\n\r\n.content-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 85%;\r\n}\r\n\r\n.wrapper {\r\n\twidth: 90%;\r\n\theight: 100%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.font-bold {\r\n\tfont-weight: 700;\r\n}\r\n\r\n.font-headline {\r\n\tfont-size: 3.25rem;\r\n}\r\n\r\n.font-text {\r\n\tfont-size: 1.125rem;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.font-footer {\r\n\tfont-size: .8rem;\r\n\tfont-weight: 400;\r\n\tcolor: $footer-color;\r\n}\r\n\r\n.nav-overlay-text {\r\n\tfont-size: 3.8rem;\r\n}\r\n\r\n.nav-burger {\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.menu > div, \r\n.about-title {\r\n\tpadding-bottom: 2.5rem;\r\n}\r\n\r\nli {\r\n\ttext-decoration: none;\r\n\tlist-style-type: none;\r\n}\r\n","* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  box-sizing: border-box;\n  vertical-align: baseline;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  font-size: 2 rem;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 85%;\n}\n\n.wrapper {\n  width: 90%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-headline {\n  font-size: 3.25rem;\n}\n\n.font-text {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\n.font-footer {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.nav-overlay-text {\n  font-size: 3.8rem;\n}\n\n.nav-burger {\n  font-size: 2rem;\n}\n\n.menu > div,\n.about-title {\n  padding-bottom: 2.5rem;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n}\n\nbody {\n  position: relative;\n  background-image: url(\"./img/kohi-bg.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.nav-overlay {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  background-color: rgba(60, 46, 38, 0.9);\n  transition: 0.5s;\n}\n.nav-overlay .nav-overlay-close {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-right: 1.2rem;\n  font-size: 3.5rem;\n}\n.nav-overlay .nav-overlay-close:hover {\n  color: #B7B7B7;\n}\n.nav-overlay .nav-overlay-content {\n  position: relative;\n  font-weight: 600;\n  margin-top: 6.5rem;\n  margin-left: 4rem;\n  text-align: left;\n}\n.nav-overlay .nav-overlay-content li {\n  cursor: pointer;\n  margin-bottom: 0.9rem;\n  color: #FFFFFF;\n  transition: color 0.3s;\n}\n.nav-overlay .nav-overlay-content li:hover {\n  color: #B7B7B7;\n}\n\n.wrapper nav {\n  display: none;\n}\n\n.cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(60, 46, 38, 0.8);\n}\n\n.nav-burger {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  padding-right: 0.1rem;\n}\n\n.menu-headline {\n  padding-bottom: 2.5rem;\n}\n\n.menu > div {\n  text-align: left;\n  padding-bottom: 2.5rem;\n}\n.menu > div li {\n  margin-bottom: 0.2rem;\n}\n\n.about-desc {\n  text-align: left;\n  line-height: 1.5;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1600px) {\n  .font-headline {\n    font-size: 7rem;\n  }\n\n  .font-text {\n    font-size: 1.8rem;\n  }\n\n  .font-footer {\n    font-size: 1rem;\n  }\n\n  .nav-burger {\n    display: none;\n  }\n\n  .wrapper nav {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    padding-top: 1.2rem;\n  }\n  .wrapper nav li {\n    cursor: pointer;\n    display: inline-block;\n    font-weight: 600;\n    transition: 0.3s;\n  }\n  .wrapper nav li:nth-child(1),\n.wrapper nav li:nth-child(2) {\n    margin-right: 4rem;\n  }\n  .wrapper nav li:hover {\n    color: #B7B7B7;\n  }\n\n  .menu {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    gap: 2.1rem;\n  }\n\n  .about-desc {\n    text-align: center;\n  }\n}","$text-color: #FFFFFF;\r\n$hover-color: #B7B7B7;\r\n$bg-color: #3C2E26;\r\n$cover-color: rgba(60, 46, 38, 0.8);\r\n$overlay-color: rgba(60, 46, 38, .9);\r\n$footer-color: rgba(255,255,255,0.5);","// This sass partial is specifically for mobile design\r\nbody {\r\n\tposition: relative;\r\n\tbackground-image: url('./img/kohi-bg.jpg');\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n.nav-overlay {\r\n\theight: 100%;\r\n\twidth: 0;\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\toverflow: hidden;\r\n\tbackground-color: $overlay-color;\r\n\ttransition: 0.5s;\r\n\r\n\t.nav-overlay-close {\r\n\t\tcursor: pointer;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: flex-end;\r\n\t\tpadding-right: 1.2rem;\r\n\t\tfont-size: 3.5rem;\r\n\t}\r\n\r\n\t.nav-overlay-close:hover {\r\n\t\tcolor: $hover-color;\r\n\t}\r\n\r\n\t.nav-overlay-content {\r\n\t\tposition: relative;\r\n\t\tfont-weight: 600;\r\n\t\tmargin-top: 6.5rem;\r\n\t\tmargin-left: 4rem;\r\n\t\ttext-align: left;\r\n\r\n\t\tli {\r\n\t\t\tcursor: pointer;\r\n\t\t\tmargin-bottom: .9rem;\r\n\t\t\tcolor: $text-color;\r\n\t\t\ttransition: color .3s;\r\n\t\t}\r\n\r\n\t\tli:hover {\r\n\t\t\tcolor: $hover-color;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.wrapper { \r\n\t\r\n\tnav {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n.cover {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tbackground-color: $cover-color;\r\n}\r\n\r\n.nav-burger {\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-end;\r\n\tpadding-top: 1rem;\r\n\tpadding-right: .1rem;\r\n}\r\n\r\n.menu-headline {\r\n\tpadding-bottom: 2.5rem;\r\n}\r\n\r\n.menu > div {\r\n\ttext-align: left;\r\n\tpadding-bottom: 2.5rem;\r\n\r\n\tli {\r\n\t\tmargin-bottom: .2rem;\r\n\t}\r\n}\r\n\r\n.about-desc {\r\n\ttext-align: left;\r\n\tline-height: 1.5;\r\n}","// This sass partial is for large sizes like desktops\r\n@media only screen\r\n    and (min-width: 768px)\r\n    and (max-width: 1600px) {\r\n    \t\r\n    .font-headline {\r\n        font-size: 7rem;\r\n    }\r\n\r\n    .font-text {\r\n        font-size: 1.8rem; \r\n    }\r\n\r\n    .font-footer {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .nav-burger {\r\n        display: none;\r\n    }\r\n\r\n    .wrapper nav {\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: center;\r\n        padding-top: 1.2rem;\r\n\r\n        li {\r\n            cursor: pointer;\r\n            display: inline-block;\r\n            font-weight: 600;\r\n            transition: 0.3s;\r\n        }\r\n\r\n        li:nth-child(1),\r\n        li:nth-child(2) {\r\n            margin-right: 4rem;\r\n        }\r\n\r\n        li:hover {\r\n            color: $hover-color;\r\n        }\r\n    }\r\n\r\n    .menu {\r\n        display: inline-flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 2.1rem;\r\n    }\r\n\r\n    .about-desc {\r\n        text-align: center;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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
	head.classList.add('font-headline', 'font-bold', 'about-title');
	const desc = document.createElement('p');
	desc.classList.add('font-text', 'about-desc');

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
	desc: "&emsp; Kohi Mise is a simple coffee shop inspired by Japanese culture. The CEO of this coffee shop really likes anime which made him love the Japanese culture. This coffee shop is very small but filled with memories and love by the employees in order to give the best experience to everyone. Don’t forget that Kohi Mise a day will keep the real world away!",
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
	head.classList.add('font-headline', 'menu-headline');
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

/***/ }),

/***/ "./src/img/kohi-bg.jpg":
/*!*****************************!*\
  !*** ./src/img/kohi-bg.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b8d8602fb3cce0c038e.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");






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
	(0,_modules_clear_content_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // clear the content first
	switch (tabTitle) {
		case 'home':
			(0,_modules_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(webContent);
			closeNav();
			break;
		case 'menu':
			(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])(webContent);
			closeNav();
			break;
		case 'about':
			(0,_modules_about_js__WEBPACK_IMPORTED_MODULE_3__["default"])(webContent);
			closeNav();
			break;
		default:
			console.log('No identified tab title')
			break;
	}
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQnNEO0FBQ2Q7QUFDQTtBQUNFO0FBQ3BCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQkFBbUI7QUFDMUQsQ0FBQztBQUNEO0FBQ0EsdUNBQXVDLG1CQUFtQjtBQUMxRCxDQUFDO0FBQ0Q7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMscUVBQVksSUFBSTtBQUNqQjtBQUNBO0FBQ0EsR0FBRyw0REFBTztBQUNWO0FBQ0E7QUFDQTtBQUNBLEdBQUcsNERBQU87QUFDVjtBQUNBO0FBQ0E7QUFDQSxHQUFHLDZEQUFRO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY2xlYXJfY29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250ZW50cy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9rb2hpLWJnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyIHJlbTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4NSU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9udC1oZWFkbGluZSB7XFxuICBmb250LXNpemU6IDMuMjVyZW07XFxufVxcblxcbi5mb250LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mb250LWZvb3RlciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ubmF2LW92ZXJsYXktdGV4dCB7XFxuICBmb250LXNpemU6IDMuOHJlbTtcXG59XFxuXFxuLm5hdi1idXJnZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudSA+IGRpdixcXG4uYWJvdXQtdGl0bGUge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxuXFxubGkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLm5hdi1vdmVybGF5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgNDYsIDM4LCAwLjkpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLm5hdi1vdmVybGF5IC5uYXYtb3ZlcmxheS1jbG9zZSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjJyZW07XFxuICBmb250LXNpemU6IDMuNXJlbTtcXG59XFxuLm5hdi1vdmVybGF5IC5uYXYtb3ZlcmxheS1jbG9zZTpob3ZlciB7XFxuICBjb2xvcjogI0I3QjdCNztcXG59XFxuLm5hdi1vdmVybGF5IC5uYXYtb3ZlcmxheS1jb250ZW50IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tdG9wOiA2LjVyZW07XFxuICBtYXJnaW4tbGVmdDogNHJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY29udGVudCBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY29udGVudCBsaTpob3ZlciB7XFxuICBjb2xvcjogI0I3QjdCNztcXG59XFxuXFxuLndyYXBwZXIgbmF2IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDQ2LCAzOCwgMC44KTtcXG59XFxuXFxuLm5hdi1idXJnZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAwLjFyZW07XFxufVxcblxcbi5tZW51LWhlYWRsaW5lIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcblxcbi5tZW51ID4gZGl2IHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG4ubWVudSA+IGRpdiBsaSB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XFxufVxcblxcbi5hYm91dC1kZXNjIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XFxuICAuZm9udC1oZWFkbGluZSB7XFxuICAgIGZvbnQtc2l6ZTogN3JlbTtcXG4gIH1cXG5cXG4gIC5mb250LXRleHQge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG5cXG4gIC5mb250LWZvb3RlciB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC5uYXYtYnVyZ2VyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC53cmFwcGVyIG5hdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMS4ycmVtO1xcbiAgfVxcbiAgLndyYXBwZXIgbmF2IGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICB9XFxuICAud3JhcHBlciBuYXYgbGk6bnRoLWNoaWxkKDEpLFxcbi53cmFwcGVyIG5hdiBsaTpudGgtY2hpbGQoMikge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRyZW07XFxuICB9XFxuICAud3JhcHBlciBuYXYgbGk6aG92ZXIge1xcbiAgICBjb2xvcjogI0I3QjdCNztcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIuMXJlbTtcXG4gIH1cXG5cXG4gIC5hYm91dC1kZXNjIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbC9fZ2xvYmFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbC9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFsL19zbWFsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvcGFydGlhbC9fbGFyZ2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjRVpZO0VGYVosc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Q7O0FERUE7RUFDQyxnQkFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkUzQ2M7QUQ0Q2Y7O0FERUE7RUFDQyxpQkFBQTtBQ0NEOztBREVBO0VBQ0MsZUFBQTtBQ0NEOztBREVBOztFQUVDLHNCQUFBO0FDQ0Q7O0FERUE7RUFDQyxxQkFBQTtFQUNBLHFCQUFBO0FDQ0Q7O0FFbEVBO0VBQ0Msa0JBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBRnFFRDs7QUVsRUE7RUFDQyxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxnQkFBQTtFQUNBLHVDRGJlO0VDY2YsZ0JBQUE7QUZxRUQ7QUVuRUM7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FGcUVGO0FFbEVDO0VBQ0MsY0Q3Qlk7QURpR2Q7QUVqRUM7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FGbUVGO0FFakVFO0VBQ0MsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsY0QzQ1U7RUM0Q1Ysc0JBQUE7QUZtRUg7QUVoRUU7RUFDQyxjRC9DVztBRGlIZDs7QUUzREM7RUFDQyxhQUFBO0FGOERGOztBRTFEQTtFQUNDLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDRC9EYTtBRDRIZDs7QUUxREE7RUFDQyxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FGNkREOztBRTFEQTtFQUNDLHNCQUFBO0FGNkREOztBRTFEQTtFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7QUY2REQ7QUUzREM7RUFDQyxxQkFBQTtBRjZERjs7QUV6REE7RUFDQyxnQkFBQTtFQUNBLGdCQUFBO0FGNEREOztBR3hKQTtFQUlJO0lBQ0ksZUFBQTtFSHdKTjs7RUdySkU7SUFDSSxpQkFBQTtFSHdKTjs7RUdySkU7SUFDSSxlQUFBO0VId0pOOztFR3JKRTtJQUNJLGFBQUE7RUh3Sk47O0VHckpFO0lBQ0ksYUFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFSHdKTjtFR3RKTTtJQUNJLGVBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUh3SlY7RUdySk07O0lBRUksa0JBQUE7RUh1SlY7RUdwSk07SUFDSSxjRnZDRTtFRDZMWjs7RUdsSkU7SUFDSSxvQkFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VIcUpOOztFR2xKRTtJQUNJLGtCQUFBO0VIcUpOO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHR3aWR0aDogMTAwdnc7XFxyXFxuXFx0aGVpZ2h0OiAxMDB2aDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0Y29sb3I6ICR0ZXh0LWNvbG9yO1xcclxcblxcdGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Zm9udC1zaXplOiBjYWxjKDMyLzE2KXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRoZWlnaHQ6IDg1JTtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcblxcdHdpZHRoOiA5MCU7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1ib2xkIHtcXHJcXG5cXHRmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC1oZWFkbGluZSB7XFxyXFxuXFx0Zm9udC1zaXplOiAzLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9udC10ZXh0IHtcXHJcXG5cXHRmb250LXNpemU6IDEuMTI1cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbi5mb250LWZvb3RlciB7XFxyXFxuXFx0Zm9udC1zaXplOiAuOHJlbTtcXHJcXG5cXHRmb250LXdlaWdodDogNDAwO1xcclxcblxcdGNvbG9yOiAkZm9vdGVyLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW92ZXJsYXktdGV4dCB7XFxyXFxuXFx0Zm9udC1zaXplOiAzLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtYnVyZ2VyIHtcXHJcXG5cXHRmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2LCBcXHJcXG4uYWJvdXQtdGl0bGUge1xcclxcblxcdHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cIixcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAyIHJlbTtcXG59XFxuXFxuLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA4NSU7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9udC1oZWFkbGluZSB7XFxuICBmb250LXNpemU6IDMuMjVyZW07XFxufVxcblxcbi5mb250LXRleHQge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcblxcbi5mb250LWZvb3RlciB7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbn1cXG5cXG4ubmF2LW92ZXJsYXktdGV4dCB7XFxuICBmb250LXNpemU6IDMuOHJlbTtcXG59XFxuXFxuLm5hdi1idXJnZXIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ubWVudSA+IGRpdixcXG4uYWJvdXQtdGl0bGUge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxuXFxubGkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWcva29oaS1iZy5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubmF2LW92ZXJsYXkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCA0NiwgMzgsIDAuOSk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4ubmF2LW92ZXJsYXkgLm5hdi1vdmVybGF5LWNsb3NlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcbn1cXG4ubmF2LW92ZXJsYXkgLm5hdi1vdmVybGF5LWNsb3NlOmhvdmVyIHtcXG4gIGNvbG9yOiAjQjdCN0I3O1xcbn1cXG4ubmF2LW92ZXJsYXkgLm5hdi1vdmVybGF5LWNvbnRlbnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi10b3A6IDYuNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiA0cmVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLm5hdi1vdmVybGF5IC5uYXYtb3ZlcmxheS1jb250ZW50IGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDAuOXJlbTtcXG4gIGNvbG9yOiAjRkZGRkZGO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG59XFxuLm5hdi1vdmVybGF5IC5uYXYtb3ZlcmxheS1jb250ZW50IGxpOmhvdmVyIHtcXG4gIGNvbG9yOiAjQjdCN0I3O1xcbn1cXG5cXG4ud3JhcHBlciBuYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MCwgNDYsIDM4LCAwLjgpO1xcbn1cXG5cXG4ubmF2LWJ1cmdlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcXG59XFxuXFxuLm1lbnUtaGVhZGxpbmUge1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxuXFxuLm1lbnUgPiBkaXYge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcbi5tZW51ID4gZGl2IGxpIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG59XFxuXFxuLmFib3V0LWRlc2Mge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXG4gIC5mb250LWhlYWRsaW5lIHtcXG4gICAgZm9udC1zaXplOiA3cmVtO1xcbiAgfVxcblxcbiAgLmZvbnQtdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgfVxcblxcbiAgLmZvbnQtZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgfVxcblxcbiAgLm5hdi1idXJnZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgLndyYXBwZXIgbmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XFxuICB9XFxuICAud3JhcHBlciBuYXYgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gIH1cXG4gIC53cmFwcGVyIG5hdiBsaTpudGgtY2hpbGQoMSksXFxuLndyYXBwZXIgbmF2IGxpOm50aC1jaGlsZCgyKSB7XFxuICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXG4gIH1cXG4gIC53cmFwcGVyIG5hdiBsaTpob3ZlciB7XFxuICAgIGNvbG9yOiAjQjdCN0I3O1xcbiAgfVxcblxcbiAgLm1lbnUge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMi4xcmVtO1xcbiAgfVxcblxcbiAgLmFib3V0LWRlc2Mge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVwiLFwiJHRleHQtY29sb3I6ICNGRkZGRkY7XFxyXFxuJGhvdmVyLWNvbG9yOiAjQjdCN0I3O1xcclxcbiRiZy1jb2xvcjogIzNDMkUyNjtcXHJcXG4kY292ZXItY29sb3I6IHJnYmEoNjAsIDQ2LCAzOCwgMC44KTtcXHJcXG4kb3ZlcmxheS1jb2xvcjogcmdiYSg2MCwgNDYsIDM4LCAuOSk7XFxyXFxuJGZvb3Rlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1wiLFwiLy8gVGhpcyBzYXNzIHBhcnRpYWwgaXMgc3BlY2lmaWNhbGx5IGZvciBtb2JpbGUgZGVzaWduXFxyXFxuYm9keSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcva29oaS1iZy5qcGcnKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW92ZXJsYXkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMDtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRvdmVybGF5LWNvbG9yO1xcclxcblxcdHRyYW5zaXRpb246IDAuNXM7XFxyXFxuXFxyXFxuXFx0Lm5hdi1vdmVybGF5LWNsb3NlIHtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFx0XFx0cGFkZGluZy1yaWdodDogMS4ycmVtO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMy41cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmF2LW92ZXJsYXktY2xvc2U6aG92ZXIge1xcclxcblxcdFxcdGNvbG9yOiAkaG92ZXItY29sb3I7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXYtb3ZlcmxheS1jb250ZW50IHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiA2LjVyZW07XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDRyZW07XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHJcXG5cXHRcXHRsaSB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IC45cmVtO1xcclxcblxcdFxcdFxcdGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBjb2xvciAuM3M7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGxpOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJGhvdmVyLWNvbG9yO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHsgXFxyXFxuXFx0XFxyXFxuXFx0bmF2IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvdmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNvdmVyLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1cmdlciB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1oZWFkbGluZSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDIuNXJlbTtcXHJcXG5cXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogLjJyZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtZGVzYyB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcclxcbn1cIixcIi8vIFRoaXMgc2FzcyBwYXJ0aWFsIGlzIGZvciBsYXJnZSBzaXplcyBsaWtlIGRlc2t0b3BzXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuXFxyXFxuICAgIGFuZCAobWluLXdpZHRoOiA3NjhweClcXHJcXG4gICAgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xcclxcbiAgICBcXHRcXHJcXG4gICAgLmZvbnQtaGVhZGxpbmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb250LXRleHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07IFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb250LWZvb3RlciB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5hdi1idXJnZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAud3JhcHBlciBuYXYge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjJyZW07XFxyXFxuXFxyXFxuICAgICAgICBsaSB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBsaTpudGgtY2hpbGQoMSksXFxyXFxuICAgICAgICBsaTpudGgtY2hpbGQoMikge1xcclxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGxpOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogJGhvdmVyLWNvbG9yO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tZW51IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAyLjFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFib3V0LWRlc2Mge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhpcyBtb2R1bGUgd2lsbCBjb250YWluIHRoZSBBYm91dCBwYWdlXHJcbmltcG9ydCB7IGFib3V0Q29udGVudCB9IGZyb20gJy4vY29udGVudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRUYWIod2ViQ29udGVudCkge1xyXG5cdGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cdGhlYWQuY2xhc3NMaXN0LmFkZCgnZm9udC1oZWFkbGluZScsICdmb250LWJvbGQnLCAnYWJvdXQtdGl0bGUnKTtcclxuXHRjb25zdCBkZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cdGRlc2MuY2xhc3NMaXN0LmFkZCgnZm9udC10ZXh0JywgJ2Fib3V0LWRlc2MnKTtcclxuXHJcblx0aGVhZC5pbm5lckhUTUwgPSBhYm91dENvbnRlbnQuaGVhZExpbmU7XHJcblx0ZGVzYy5pbm5lckhUTUwgPSBhYm91dENvbnRlbnQuZGVzYztcclxuXHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZChoZWFkKTtcclxuXHR3ZWJDb250ZW50LmFwcGVuZENoaWxkKGRlc2MpO1xyXG59OyIsIi8vIFRoaXMganMgbW9kdWxlIHdpbGwgY2xlYXIgdGhlIGNvbnRlbnQgb2YgYSBwYXJlbnQgbm9kZVxyXG4vLyBpdCB3aWxsIGdldCB0aGUgcGFyZW50IG5vZGUgdGhlbiBnZXQgdGhlIGZpcnN0IGVsZW1lbnQgY2hpbGRcclxuLy8gd2hpbGUgdGhlcmUncyBzdGlsbCBhIGNoaWxkIGtlZXAgbG9vcGluZ1xyXG4vLyBcdGluc2lkZSB0aGUgbG9vcCBpdCB3aWxsIHJlbW92ZSB0aGUgY2hpbGQgdGhlbiBnZXQgdGhlIGNoaWxkIGFnYWluXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XHJcblx0Y29uc3QgY29udGVudFBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcblx0bGV0IGNoaWxkID0gY29udGVudFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR3aGlsZShjaGlsZCkge1xyXG5cdFx0Y29udGVudFBhcmVudC5yZW1vdmVDaGlsZChjaGlsZClcclxuXHRcdGNoaWxkID0gY29udGVudFBhcmVudC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHR9XHJcbn07IiwiLy8gVGhpcyBtb2R1bGUgaW5jbHVkZXMgYWxsIGNvbnRlbnRzIGZvciB0aGUgd2VicGFnZVxyXG4vLyBhbGwgY29udGVudHMgYXJlIHNlcGFyYXRlZCBieSBvYmplY3RzXHJcbi8vIHNvIHRoYXQsIGV2ZXJ5IGNvbnRlbnRzIGluIGV2ZXJ5IHdlYnBhZ2UgY2FuIGJlIHNlcGFyYXRlZGx5IGV4cG9ydGVkXHJcblxyXG5leHBvcnQgbGV0IGhvbWVDb250ZW50ID0ge1xyXG5cdGhlYWRMaW5lOiBcIkvFjWjEqyBNaXNlXCIsXHJcblx0dGFnTGluZTogXCJZxY1rb3NvLCB0byB0aGUgYmVzdCBLxY1oxKsgaW4gdGhlIHRvd24uXCIsXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IG1lbnVDb250ZW50ID0ge1xyXG5cdGhlYWRMaW5lOiBcIkvFjWjEqyBNZW55xatcIixcclxuXHRtZW51XzE6IFtcIkFmZm9nYXRvXCIsIFwiRXNwcmVzc28gQW1lcmljYW5vXCIsIFwiQ2FmZmUgTGF0dGVcIiwgXCJDYWZmZSBNb2NoYVwiLCBcIkNhZmUgQXUgTGFpdFwiLCBcIkNhcHB1Y2lub1wiXSxcclxuXHRtZW51XzI6IFtcIkNvbGQgQnJldyBDb2ZmZWVcIiwgXCJEb3VibGUgRXNwcmVzc29cIiwgXCJFc3ByZXNzbyBDb24gUGFubmFcIiwgXCJGcmFwcGVcIiwgXCJJY2VkIExhdHRlXCIsIFwiRmxhdCBXaGl0ZVwiXSxcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYWJvdXRDb250ZW50ID0ge1xyXG5cdGhlYWRMaW5lOiBcIkFib3V0IEvFjWjEqyBNaXNlXCIsXHJcblx0ZGVzYzogXCImZW1zcDsgS29oaSBNaXNlIGlzIGEgc2ltcGxlIGNvZmZlZSBzaG9wIGluc3BpcmVkIGJ5IEphcGFuZXNlIGN1bHR1cmUuIFRoZSBDRU8gb2YgdGhpcyBjb2ZmZWUgc2hvcCByZWFsbHkgbGlrZXMgYW5pbWUgd2hpY2ggbWFkZSBoaW0gbG92ZSB0aGUgSmFwYW5lc2UgY3VsdHVyZS4gVGhpcyBjb2ZmZWUgc2hvcCBpcyB2ZXJ5IHNtYWxsIGJ1dCBmaWxsZWQgd2l0aCBtZW1vcmllcyBhbmQgbG92ZSBieSB0aGUgZW1wbG95ZWVzIGluIG9yZGVyIHRvIGdpdmUgdGhlIGJlc3QgZXhwZXJpZW5jZSB0byBldmVyeW9uZS4gRG9u4oCZdCBmb3JnZXQgdGhhdCBLb2hpIE1pc2UgYSBkYXkgd2lsbCBrZWVwIHRoZSByZWFsIHdvcmxkIGF3YXkhXCIsXHJcbn07IiwiaW1wb3J0IHsgaG9tZUNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnRzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVUYWIod2ViQ29udGVudCkge1xyXG5cdGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cdGhlYWQuY2xhc3NMaXN0LmFkZCgnZm9udC1oZWFkbGluZScsICdmb250LWJvbGQnKTtcclxuXHRjb25zdCB0YWdsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuXHR0YWdsaW5lLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtdGV4dCcpO1xyXG5cclxuXHRoZWFkLmlubmVySFRNTCA9IGhvbWVDb250ZW50LmhlYWRMaW5lO1xyXG5cdHRhZ2xpbmUuaW5uZXJIVE1MID0gaG9tZUNvbnRlbnQudGFnTGluZTtcclxuXHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZChoZWFkKTtcclxuXHR3ZWJDb250ZW50LmFwcGVuZENoaWxkKHRhZ2xpbmUpO1xyXG59OyIsIi8vIFRoaXMganMgbW9kdWxlIGNvbnRhaW5zIHRoZSBjb250ZW50IGZvciBNZW51IHRhYlxyXG5pbXBvcnQgeyBtZW51Q29udGVudCB9IGZyb20gJy4vY29udGVudHMuanMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVRhYih3ZWJDb250ZW50KSB7XHJcblx0Y29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblx0aGVhZC5jbGFzc0xpc3QuYWRkKCdmb250LWhlYWRsaW5lJywgJ21lbnUtaGVhZGxpbmUnKTtcclxuXHRoZWFkLmlubmVySFRNTCA9IG1lbnVDb250ZW50LmhlYWRMaW5lO1xyXG5cdFxyXG5cdGNvbnN0IG1lbnVIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtZW51SG9sZGVyLmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcclxuXHQvLyBjcmVhdGUgdGhlIGZpcnN0IGNvbnRhaW5lciBmb3IgdGhlIG1lbnVcclxuXHRjb25zdCBtZW51VHlwZV8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudVR5cGVfMS5jbGFzc0xpc3QuYWRkKCdtZW51LTEnKTtcclxuXHRjb25zdCBtZW51MV91bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0Y3JlYXRlTGlzdChtZW51MV91bCwgbWVudUNvbnRlbnQubWVudV8xKTtcclxuXHRtZW51VHlwZV8xLmFwcGVuZENoaWxkKG1lbnUxX3VsKTsgLy8gYXBwZW5kIHRoZSB1bCB3aXRoIHRoZSBsaSB0byB0aGUgZGl2XHJcblxyXG5cdC8vIGNyZWF0ZSB0aGUgZmlyc3QgY29udGFpbmVyIGZvciB0aGUgbWVudVxyXG5cdGNvbnN0IG1lbnVUeXBlXzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRtZW51VHlwZV8yLmNsYXNzTGlzdC5hZGQoJ21lbnUtMicpO1xyXG5cdGNvbnN0IG1lbnUyX3VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHRjcmVhdGVMaXN0KG1lbnUyX3VsLCBtZW51Q29udGVudC5tZW51XzIpO1xyXG5cdG1lbnVUeXBlXzIuYXBwZW5kQ2hpbGQobWVudTJfdWwpOyAvLyBhcHBlbmQgdGhlIHVsIHdpdGggdGhlIGxpIHRvIHRoZSBkaXZcclxuXHJcblx0bWVudUhvbGRlci5hcHBlbmRDaGlsZChtZW51VHlwZV8xKTtcclxuXHRtZW51SG9sZGVyLmFwcGVuZENoaWxkKG1lbnVUeXBlXzIpO1xyXG5cclxuXHR3ZWJDb250ZW50LmFwcGVuZENoaWxkKGhlYWQpO1xyXG5cdHdlYkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUhvbGRlcik7XHJcbn07XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgY3JlYXRlIHRoZSBsaSBmb3IgdGhlIHVsIG5vZGVcclxuLy8gaXQgbmVlZHMgbWVudV91bCB3aGljaCBpcyB0aGUgdWwgbm9kZVxyXG4vLyBhbHNvIHRoZSBtZW51TGlzdCBmb3IgdGhlIGNvbnRlbnRzIG9mIGV2ZXJ5IGxpIHVzaW5nIGFycmF5XHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3QobWVudV91bCwgbWVudUxpc3QpIHtcclxuXHQvLyBpdCB3aWxsIGdvIHRocm91Z2ggYWxsIHRoZSBlbGVtZW50cyBvZiB0aGUgbGlzdFxyXG5cdG1lbnVMaXN0LmZvckVhY2goKHByb2R1Y3QpID0+IHtcclxuXHRcdGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgLy8gY3JlYXRlIHRoZSBsaSBlbGVtZW50XHJcblx0XHRsaS5pbm5lckhUTUwgPSBwcm9kdWN0OyAvLyBhZGQgdGhlIGNvbnRlbnQgb2YgdGhlIGxpXHJcblx0XHRsaS5jbGFzc0xpc3QuYWRkKCdmb250LXRleHQnKTtcclxuXHJcblx0XHRtZW51X3VsLmFwcGVuZENoaWxkKGxpKTsgLy8gdGhlbiBhcHBlbmQgaXQgYXMgYSBjaGlsZCBvZiB0aGUgdWxcclxuXHR9KTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vbW9kdWxlcy9jbGVhcl9jb250ZW50LmpzJztcclxuaW1wb3J0IGhvbWVUYWIgZnJvbSAnLi9tb2R1bGVzL2hvbWUuanMnO1xyXG5pbXBvcnQgbWVudVRhYiBmcm9tICcuL21vZHVsZXMvbWVudS5qcyc7XHJcbmltcG9ydCBhYm91dFRhYiBmcm9tICcuL21vZHVsZXMvYWJvdXQuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XHJcblxyXG4vLyBnZXQgdGhlIERPTSBlbGVtZW50IGZvciB0aGUgZGl2IHdobyB3aWxsIGhvbGQgdGhlIGNvbnRlbnRzXHJcbmNvbnN0IHdlYkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG4vLyBnZXQgdGhlIERPTSBlbGVtZW50IGZvciB0aGUgbmF2aWdhdGlvbnNcclxuY29uc3QgbmF2T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtb3ZlcmxheScpO1xyXG5jb25zdCBuYXZCdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJ1cmdlcicpO1xyXG5jb25zdCBjbG9zZU5hdkJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtb3ZlcmxheS1jbG9zZScpO1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2hvbWUnKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51JylcclxuY29uc3QgYWJvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYWJvdXQnKTtcclxuXHJcbi8vIGxvYWQgdGhlIGhvbWUgdGFiIG9uY2UgdGhlIHBhZ2UgbG9hZGVkXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcblx0Y2hhbmdlVGFiKCdob21lJyk7XHJcbn07XHJcblxyXG4vLyBhZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBuYXZpZ2F0aW9uc1xyXG5ob21lLmZvckVhY2godGFiID0+IHtcclxuXHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZVRhYignaG9tZScpIH0pO1xyXG59KTtcclxubWVudS5mb3JFYWNoKHRhYiA9PiB7XHJcblx0dGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjaGFuZ2VUYWIoJ21lbnUnKSB9KTtcclxufSk7XHJcbmFib3V0LmZvckVhY2godGFiID0+IHtcclxuXHR0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZVRhYignYWJvdXQnKSB9KVxyXG59KTtcclxuLy8gZm9yIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlIG5hdmlnYXRpb24gZm9yIG1vYmlsZVxyXG5uYXZCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0bmF2T3ZlcmxheS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxufSk7XHJcblxyXG5jbG9zZU5hdkJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTmF2KVxyXG5cclxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XHJcblx0bmF2T3ZlcmxheS5zdHlsZS53aWR0aCA9ICcwJSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRhYih0YWJUaXRsZSkge1xyXG5cdGNsZWFyQ29udGVudCgpOyAvLyBjbGVhciB0aGUgY29udGVudCBmaXJzdFxyXG5cdHN3aXRjaCAodGFiVGl0bGUpIHtcclxuXHRcdGNhc2UgJ2hvbWUnOlxyXG5cdFx0XHRob21lVGFiKHdlYkNvbnRlbnQpO1xyXG5cdFx0XHRjbG9zZU5hdigpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ21lbnUnOlxyXG5cdFx0XHRtZW51VGFiKHdlYkNvbnRlbnQpO1xyXG5cdFx0XHRjbG9zZU5hdigpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2Fib3V0JzpcclxuXHRcdFx0YWJvdXRUYWIod2ViQ29udGVudCk7XHJcblx0XHRcdGNsb3NlTmF2KCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIGlkZW50aWZpZWQgdGFiIHRpdGxlJylcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9