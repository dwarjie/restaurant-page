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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  box-sizing: border-box;\n  vertical-align: baseline;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  font-size: 2 rem;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 85%;\n}\n\n.wrapper {\n  width: 90%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.font-bold {\n  font-weight: 900;\n}\n\n.font-headline {\n  font-size: 3.25rem;\n}\n\n.font-text {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\n.font-footer {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.nav-overlay-text {\n  font-size: 3.8rem;\n}\n\n.nav-burger {\n  font-size: 2rem;\n}\n\n.menu > div,\n.about-title {\n  padding-bottom: 2.5rem;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n}\n\nbody {\n  position: relative;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.nav-overlay {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  background-color: rgba(60, 46, 38, 0.9);\n  transition: 0.5s;\n}\n.nav-overlay .nav-overlay-close {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-right: 1.2rem;\n  font-size: 3.5rem;\n}\n.nav-overlay .nav-overlay-close:hover {\n  color: #B7B7B7;\n}\n.nav-overlay .nav-overlay-content {\n  position: relative;\n  font-weight: 600;\n  margin-top: 6.5rem;\n  margin-left: 4rem;\n  text-align: left;\n}\n.nav-overlay .nav-overlay-content li {\n  cursor: pointer;\n  margin-bottom: 0.9rem;\n  color: #FFFFFF;\n  transition: color 0.3s;\n}\n.nav-overlay .nav-overlay-content li:hover {\n  color: #B7B7B7;\n}\n\n.wrapper nav {\n  display: none;\n}\n\n.cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(60, 46, 38, 0.8);\n}\n\n.nav-burger {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  padding-right: 0.1rem;\n}\n\n.menu-headline {\n  padding-bottom: 2.5rem;\n}\n\n.menu > div {\n  text-align: left;\n  padding-bottom: 2.5rem;\n}\n.menu > div li {\n  margin-bottom: 0.2rem;\n}\n\n.about-desc {\n  text-align: left;\n  line-height: 1.5;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1600px) {\n  .font-headline {\n    font-size: 7.9rem;\n  }\n\n  .font-text {\n    font-size: 2rem;\n  }\n\n  .font-footer {\n    font-size: 1rem;\n  }\n}", "",{"version":3,"sources":["webpack://./src/partial/_global.scss","webpack://./src/style.scss","webpack://./src/partial/_variables.scss","webpack://./src/partial/_small.scss","webpack://./src/partial/_large.scss"],"names":[],"mappings":"AAAA;EACC,UAAA;EACA,SAAA;EACA,eAAA;EACA,sBAAA;EACA,wBAAA;ACCD;;ADEA;EACC,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cEZY;EFaZ,sCAAA;EACA,gBAAA;EACA,gBAAA;ACCD;;ADEA;EACC,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;ACCD;;ADEA;EACC,UAAA;EACA,YAAA;EACA,cAAA;ACCD;;ADEA;EACC,gBAAA;ACCD;;ADEA;EACC,kBAAA;ACCD;;ADEA;EACC,mBAAA;EACA,gBAAA;ACCD;;ADEA;EACC,iBAAA;EACA,gBAAA;EACA,+BE3Cc;AD4Cf;;ADEA;EACC,iBAAA;ACCD;;ADEA;EACC,eAAA;ACCD;;ADEA;;EAEC,sBAAA;ACCD;;ADEA;EACC,qBAAA;EACA,qBAAA;ACCD;;AElEA;EACC,kBAAA;EACA,yDAAA;EACA,sBAAA;EACA,2BAAA;EACA,4BAAA;AFqED;;AElEA;EACC,YAAA;EACA,QAAA;EACA,eAAA;EACA,UAAA;EACA,OAAA;EACA,MAAA;EACA,gBAAA;EACA,uCDbe;ECcf,gBAAA;AFqED;AEnEC;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,qBAAA;EACA,iBAAA;AFqEF;AElEC;EACC,cD7BY;ADiGd;AEjEC;EACC,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,gBAAA;AFmEF;AEjEE;EACC,eAAA;EACA,qBAAA;EACA,cD3CU;EC4CV,sBAAA;AFmEH;AEhEE;EACC,cD/CW;ADiHd;;AE3DC;EACC,aAAA;AF8DF;;AE1DA;EACC,kBAAA;EACA,MAAA;EACA,OAAA;EACA,YAAA;EACA,aAAA;EACA,uCD/Da;AD4Hd;;AE1DA;EACC,eAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,iBAAA;EACA,qBAAA;AF6DD;;AE1DA;EACC,sBAAA;AF6DD;;AE1DA;EACC,gBAAA;EACA,sBAAA;AF6DD;AE3DC;EACC,qBAAA;AF6DF;;AEzDA;EACC,gBAAA;EACA,gBAAA;AF4DD;;AGxJA;EAII;IACI,iBAAA;EHwJN;;EGrJE;IACI,eAAA;EHwJN;;EGrJE;IACI,eAAA;EHwJN;AACF","sourcesContent":["* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tfont-size: 100%;\r\n\tbox-sizing: border-box;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nbody {\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\ttext-align: center;\r\n\tcolor: $text-color;\r\n\tfont-family: 'Playfair Display', serif;\r\n\tfont-weight: 400;\r\n\tfont-size: calc(32/16)rem;\r\n}\r\n\r\n.content-container {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center;\r\n\talign-items: center;\r\n\theight: 85%;\r\n}\r\n\r\n.wrapper {\r\n\twidth: 90%;\r\n\theight: 100%;\r\n\tmargin: 0 auto;\r\n}\r\n\r\n.font-bold {\r\n\tfont-weight: 900;\r\n}\r\n\r\n.font-headline {\r\n\tfont-size: 3.25rem;\r\n}\r\n\r\n.font-text {\r\n\tfont-size: 1.125rem;\r\n\tfont-weight: 400;\r\n}\r\n\r\n.font-footer {\r\n\tfont-size: .8rem;\r\n\tfont-weight: 400;\r\n\tcolor: $footer-color;\r\n}\r\n\r\n.nav-overlay-text {\r\n\tfont-size: 3.8rem;\r\n}\r\n\r\n.nav-burger {\r\n\tfont-size: 2rem;\r\n}\r\n\r\n.menu > div, \r\n.about-title {\r\n\tpadding-bottom: 2.5rem;\r\n}\r\n\r\nli {\r\n\ttext-decoration: none;\r\n\tlist-style-type: none;\r\n}\r\n","* {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  box-sizing: border-box;\n  vertical-align: baseline;\n}\n\nbody {\n  width: 100vw;\n  height: 100vh;\n  text-align: center;\n  color: #FFFFFF;\n  font-family: \"Playfair Display\", serif;\n  font-weight: 400;\n  font-size: 2 rem;\n}\n\n.content-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 85%;\n}\n\n.wrapper {\n  width: 90%;\n  height: 100%;\n  margin: 0 auto;\n}\n\n.font-bold {\n  font-weight: 900;\n}\n\n.font-headline {\n  font-size: 3.25rem;\n}\n\n.font-text {\n  font-size: 1.125rem;\n  font-weight: 400;\n}\n\n.font-footer {\n  font-size: 0.8rem;\n  font-weight: 400;\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.nav-overlay-text {\n  font-size: 3.8rem;\n}\n\n.nav-burger {\n  font-size: 2rem;\n}\n\n.menu > div,\n.about-title {\n  padding-bottom: 2.5rem;\n}\n\nli {\n  text-decoration: none;\n  list-style-type: none;\n}\n\nbody {\n  position: relative;\n  background-image: url(\"./img/kohi-bg.jpg\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.nav-overlay {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  background-color: rgba(60, 46, 38, 0.9);\n  transition: 0.5s;\n}\n.nav-overlay .nav-overlay-close {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-right: 1.2rem;\n  font-size: 3.5rem;\n}\n.nav-overlay .nav-overlay-close:hover {\n  color: #B7B7B7;\n}\n.nav-overlay .nav-overlay-content {\n  position: relative;\n  font-weight: 600;\n  margin-top: 6.5rem;\n  margin-left: 4rem;\n  text-align: left;\n}\n.nav-overlay .nav-overlay-content li {\n  cursor: pointer;\n  margin-bottom: 0.9rem;\n  color: #FFFFFF;\n  transition: color 0.3s;\n}\n.nav-overlay .nav-overlay-content li:hover {\n  color: #B7B7B7;\n}\n\n.wrapper nav {\n  display: none;\n}\n\n.cover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(60, 46, 38, 0.8);\n}\n\n.nav-burger {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  padding-right: 0.1rem;\n}\n\n.menu-headline {\n  padding-bottom: 2.5rem;\n}\n\n.menu > div {\n  text-align: left;\n  padding-bottom: 2.5rem;\n}\n.menu > div li {\n  margin-bottom: 0.2rem;\n}\n\n.about-desc {\n  text-align: left;\n  line-height: 1.5;\n}\n\n@media only screen and (min-width: 768px) and (max-width: 1600px) {\n  .font-headline {\n    font-size: 7.9rem;\n  }\n\n  .font-text {\n    font-size: 2rem;\n  }\n\n  .font-footer {\n    font-size: 1rem;\n  }\n}","$text-color: #FFFFFF;\r\n$hover-color: #B7B7B7;\r\n$bg-color: #3C2E26;\r\n$cover-color: rgba(60, 46, 38, 0.8);\r\n$overlay-color: rgba(60, 46, 38, .9);\r\n$footer-color: rgba(255,255,255,0.5);","// This sass partial is specifically for mobile design\r\nbody {\r\n\tposition: relative;\r\n\tbackground-image: url('./img/kohi-bg.jpg');\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n\tbackground-repeat: no-repeat;\r\n}\r\n\r\n.nav-overlay {\r\n\theight: 100%;\r\n\twidth: 0;\r\n\tposition: fixed;\r\n\tz-index: 1;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\toverflow: hidden;\r\n\tbackground-color: $overlay-color;\r\n\ttransition: 0.5s;\r\n\r\n\t.nav-overlay-close {\r\n\t\tcursor: pointer;\r\n\t\tdisplay: flex;\r\n\t\tflex-direction: row;\r\n\t\tjustify-content: flex-end;\r\n\t\tpadding-right: 1.2rem;\r\n\t\tfont-size: 3.5rem;\r\n\t}\r\n\r\n\t.nav-overlay-close:hover {\r\n\t\tcolor: $hover-color;\r\n\t}\r\n\r\n\t.nav-overlay-content {\r\n\t\tposition: relative;\r\n\t\tfont-weight: 600;\r\n\t\tmargin-top: 6.5rem;\r\n\t\tmargin-left: 4rem;\r\n\t\ttext-align: left;\r\n\r\n\t\tli {\r\n\t\t\tcursor: pointer;\r\n\t\t\tmargin-bottom: .9rem;\r\n\t\t\tcolor: $text-color;\r\n\t\t\ttransition: color .3s;\r\n\t\t}\r\n\r\n\t\tli:hover {\r\n\t\t\tcolor: $hover-color;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n.wrapper { \r\n\t\r\n\tnav {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n\r\n.cover {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100vw;\r\n\theight: 100vh;\r\n\tbackground-color: $cover-color;\r\n}\r\n\r\n.nav-burger {\r\n\tcursor: pointer;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\tjustify-content: flex-end;\r\n\tpadding-top: 1rem;\r\n\tpadding-right: .1rem;\r\n}\r\n\r\n.menu-headline {\r\n\tpadding-bottom: 2.5rem;\r\n}\r\n\r\n.menu > div {\r\n\ttext-align: left;\r\n\tpadding-bottom: 2.5rem;\r\n\r\n\tli {\r\n\t\tmargin-bottom: .2rem;\r\n\t}\r\n}\r\n\r\n.about-desc {\r\n\ttext-align: left;\r\n\tline-height: 1.5;\r\n}","// This sass partial is for large sizes like desktops\r\n@media only screen\r\n    and (min-width: 768px)\r\n    and (max-width: 1600px) {\r\n    \t\r\n    .font-headline {\r\n        font-size: 7.9rem;\r\n    }\r\n\r\n    .font-text {\r\n        font-size: 2rem;\r\n    }\r\n\r\n    .font-footer {\r\n        font-size: 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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
const home = document.querySelector('#home');
const menu = document.querySelector('#menu')
const about = document.querySelector('#about');

// load the home tab once the page loaded
window.onload = () => {
	changeTab('about');
};

// adding event listeners to the navigations
home.addEventListener('click', () => { changeTab('home') });
menu.addEventListener('click', () => { changeTab('menu') });
about.addEventListener('click', () => { changeTab('about') });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDckJzRDtBQUNkO0FBQ0E7QUFDRTtBQUNwQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1CQUFtQjtBQUMxRCx1Q0FBdUMsbUJBQW1CO0FBQzFELHdDQUF3QyxvQkFBb0I7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHFFQUFZLElBQUk7QUFDakI7QUFDQTtBQUNBLEdBQUcsNERBQU87QUFDVjtBQUNBO0FBQ0E7QUFDQSxHQUFHLDREQUFPO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsR0FBRyw2REFBUTtBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLnNjc3M/NzViYSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NsZWFyX2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcva29oaS1iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGxheWZhaXIgRGlzcGxheVxcXCIsIHNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogMiByZW07XFxufVxcblxcbi5jb250ZW50LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogODUlO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuLmZvbnQtaGVhZGxpbmUge1xcbiAgZm9udC1zaXplOiAzLjI1cmVtO1xcbn1cXG5cXG4uZm9udC10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uZm9udC1mb290ZXIge1xcbiAgZm9udC1zaXplOiAwLjhyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG59XFxuXFxuLm5hdi1vdmVybGF5LXRleHQge1xcbiAgZm9udC1zaXplOiAzLjhyZW07XFxufVxcblxcbi5uYXYtYnVyZ2VyIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLm1lbnUgPiBkaXYsXFxuLmFib3V0LXRpdGxlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcblxcbmxpIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5uYXYtb3ZlcmxheSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDQ2LCAzOCwgMC45KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMS4ycmVtO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6ICNCN0I3Qjc7XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLXRvcDogNi41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubmF2LW92ZXJsYXkgLm5hdi1vdmVybGF5LWNvbnRlbnQgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcbn1cXG4ubmF2LW92ZXJsYXkgLm5hdi1vdmVybGF5LWNvbnRlbnQgbGk6aG92ZXIge1xcbiAgY29sb3I6ICNCN0I3Qjc7XFxufVxcblxcbi53cmFwcGVyIG5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCA0NiwgMzgsIDAuOCk7XFxufVxcblxcbi5uYXYtYnVyZ2VyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC4xcmVtO1xcbn1cXG5cXG4ubWVudS1oZWFkbGluZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4ubWVudSA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxuLm1lbnUgPiBkaXYgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4uYWJvdXQtZGVzYyB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xcbiAgLmZvbnQtaGVhZGxpbmUge1xcbiAgICBmb250LXNpemU6IDcuOXJlbTtcXG4gIH1cXG5cXG4gIC5mb250LXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuZm9udC1mb290ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFsL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFsL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3BhcnRpYWwvX3NtYWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9wYXJ0aWFsL19sYXJnZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0MsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNFWlk7RUZhWixzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRDs7QURFQTtFQUNDLGdCQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7RUFDQSxnQkFBQTtBQ0NEOztBREVBO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCRTNDYztBRDRDZjs7QURFQTtFQUNDLGlCQUFBO0FDQ0Q7O0FERUE7RUFDQyxlQUFBO0FDQ0Q7O0FERUE7O0VBRUMsc0JBQUE7QUNDRDs7QURFQTtFQUNDLHFCQUFBO0VBQ0EscUJBQUE7QUNDRDs7QUVsRUE7RUFDQyxrQkFBQTtFQUNBLHlEQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FGcUVEOztBRWxFQTtFQUNDLFlBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNEYmU7RUNjZixnQkFBQTtBRnFFRDtBRW5FQztFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUZxRUY7QUVsRUM7RUFDQyxjRDdCWTtBRGlHZDtBRWpFQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUZtRUY7QUVqRUU7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjRDNDVTtFQzRDVixzQkFBQTtBRm1FSDtBRWhFRTtFQUNDLGNEL0NXO0FEaUhkOztBRTNEQztFQUNDLGFBQUE7QUY4REY7O0FFMURBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNEL0RhO0FENEhkOztBRTFEQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUY2REQ7O0FFMURBO0VBQ0Msc0JBQUE7QUY2REQ7O0FFMURBO0VBQ0MsZ0JBQUE7RUFDQSxzQkFBQTtBRjZERDtBRTNEQztFQUNDLHFCQUFBO0FGNkRGOztBRXpEQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUY0REQ7O0FHeEpBO0VBSUk7SUFDSSxpQkFBQTtFSHdKTjs7RUdySkU7SUFDSSxlQUFBO0VId0pOOztFR3JKRTtJQUNJLGVBQUE7RUh3Sk47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRmb250LXNpemU6IDEwMCU7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcblxcdHdpZHRoOiAxMDB2dztcXHJcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRjb2xvcjogJHRleHQtY29sb3I7XFxyXFxuXFx0Zm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG5cXHRmb250LXNpemU6IGNhbGMoMzIvMTYpcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC1jb250YWluZXIge1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdGhlaWdodDogODUlO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuXFx0d2lkdGg6IDkwJTtcXHJcXG5cXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5mb250LWJvbGQge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxufVxcclxcblxcclxcbi5mb250LWhlYWRsaW5lIHtcXHJcXG5cXHRmb250LXNpemU6IDMuMjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb250LXRleHQge1xcclxcblxcdGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvbnQtZm9vdGVyIHtcXHJcXG5cXHRmb250LXNpemU6IC44cmVtO1xcclxcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuXFx0Y29sb3I6ICRmb290ZXItY29sb3I7XFxyXFxufVxcclxcblxcclxcbi5uYXYtb3ZlcmxheS10ZXh0IHtcXHJcXG5cXHRmb250LXNpemU6IDMuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1idXJnZXIge1xcclxcblxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYsIFxcclxcbi5hYm91dC10aXRsZSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblwiLFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICBmb250LWZhbWlseTogXFxcIlBsYXlmYWlyIERpc3BsYXlcXFwiLCBzZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDIgcmVtO1xcbn1cXG5cXG4uY29udGVudC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDg1JTtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uZm9udC1ib2xkIHtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi5mb250LWhlYWRsaW5lIHtcXG4gIGZvbnQtc2l6ZTogMy4yNXJlbTtcXG59XFxuXFxuLmZvbnQtdGV4dCB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuXFxuLmZvbnQtZm9vdGVyIHtcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcblxcbi5uYXYtb3ZlcmxheS10ZXh0IHtcXG4gIGZvbnQtc2l6ZTogMy44cmVtO1xcbn1cXG5cXG4ubmF2LWJ1cmdlciB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbi5tZW51ID4gZGl2LFxcbi5hYm91dC10aXRsZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG5saSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltZy9rb2hpLWJnLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi5uYXYtb3ZlcmxheSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMDtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjAsIDQ2LCAzOCwgMC45KTtcXG4gIHRyYW5zaXRpb246IDAuNXM7XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY2xvc2Uge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy1yaWdodDogMS4ycmVtO1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY2xvc2U6aG92ZXIge1xcbiAgY29sb3I6ICNCN0I3Qjc7XFxufVxcbi5uYXYtb3ZlcmxheSAubmF2LW92ZXJsYXktY29udGVudCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLXRvcDogNi41cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDRyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG4ubmF2LW92ZXJsYXkgLm5hdi1vdmVybGF5LWNvbnRlbnQgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMC45cmVtO1xcbiAgY29sb3I6ICNGRkZGRkY7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzO1xcbn1cXG4ubmF2LW92ZXJsYXkgLm5hdi1vdmVybGF5LWNvbnRlbnQgbGk6aG92ZXIge1xcbiAgY29sb3I6ICNCN0I3Qjc7XFxufVxcblxcbi53cmFwcGVyIG5hdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY292ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYwLCA0NiwgMzgsIDAuOCk7XFxufVxcblxcbi5uYXYtYnVyZ2VyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC4xcmVtO1xcbn1cXG5cXG4ubWVudS1oZWFkbGluZSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xcbn1cXG5cXG4ubWVudSA+IGRpdiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcXG59XFxuLm1lbnUgPiBkaXYgbGkge1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4uYWJvdXQtZGVzYyB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xcbiAgLmZvbnQtaGVhZGxpbmUge1xcbiAgICBmb250LXNpemU6IDcuOXJlbTtcXG4gIH1cXG5cXG4gIC5mb250LXRleHQge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuZm9udC1mb290ZXIge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxufVwiLFwiJHRleHQtY29sb3I6ICNGRkZGRkY7XFxyXFxuJGhvdmVyLWNvbG9yOiAjQjdCN0I3O1xcclxcbiRiZy1jb2xvcjogIzNDMkUyNjtcXHJcXG4kY292ZXItY29sb3I6IHJnYmEoNjAsIDQ2LCAzOCwgMC44KTtcXHJcXG4kb3ZlcmxheS1jb2xvcjogcmdiYSg2MCwgNDYsIDM4LCAuOSk7XFxyXFxuJGZvb3Rlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1wiLFwiLy8gVGhpcyBzYXNzIHBhcnRpYWwgaXMgc3BlY2lmaWNhbGx5IGZvciBtb2JpbGUgZGVzaWduXFxyXFxuYm9keSB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWcva29oaS1iZy5qcGcnKTtcXHJcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LW92ZXJsYXkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR3aWR0aDogMDtcXHJcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0ei1pbmRleDogMTtcXHJcXG5cXHRsZWZ0OiAwO1xcclxcblxcdHRvcDogMDtcXHJcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6ICRvdmVybGF5LWNvbG9yO1xcclxcblxcdHRyYW5zaXRpb246IDAuNXM7XFxyXFxuXFxyXFxuXFx0Lm5hdi1vdmVybGF5LWNsb3NlIHtcXHJcXG5cXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuXFx0XFx0cGFkZGluZy1yaWdodDogMS4ycmVtO1xcclxcblxcdFxcdGZvbnQtc2l6ZTogMy41cmVtO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQubmF2LW92ZXJsYXktY2xvc2U6aG92ZXIge1xcclxcblxcdFxcdGNvbG9yOiAkaG92ZXItY29sb3I7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5uYXYtb3ZlcmxheS1jb250ZW50IHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDYwMDtcXHJcXG5cXHRcXHRtYXJnaW4tdG9wOiA2LjVyZW07XFxyXFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDRyZW07XFxyXFxuXFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHJcXG5cXHRcXHRsaSB7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdG1hcmdpbi1ib3R0b206IC45cmVtO1xcclxcblxcdFxcdFxcdGNvbG9yOiAkdGV4dC1jb2xvcjtcXHJcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBjb2xvciAuM3M7XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdGxpOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRjb2xvcjogJGhvdmVyLWNvbG9yO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHsgXFxyXFxuXFx0XFxyXFxuXFx0bmF2IHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvdmVyIHtcXHJcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0dG9wOiAwO1xcclxcblxcdGxlZnQ6IDA7XFxyXFxuXFx0d2lkdGg6IDEwMHZ3O1xcclxcblxcdGhlaWdodDogMTAwdmg7XFxyXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogJGNvdmVyLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWJ1cmdlciB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcblxcdHBhZGRpbmctdG9wOiAxcmVtO1xcclxcblxcdHBhZGRpbmctcmlnaHQ6IC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1oZWFkbGluZSB7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYge1xcclxcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDIuNXJlbTtcXHJcXG5cXHJcXG5cXHRsaSB7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogLjJyZW07XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtZGVzYyB7XFxyXFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcclxcbn1cIixcIi8vIFRoaXMgc2FzcyBwYXJ0aWFsIGlzIGZvciBsYXJnZSBzaXplcyBsaWtlIGRlc2t0b3BzXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuXFxyXFxuICAgIGFuZCAobWluLXdpZHRoOiA3NjhweClcXHJcXG4gICAgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xcclxcbiAgICBcXHRcXHJcXG4gICAgLmZvbnQtaGVhZGxpbmUge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA3LjlyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvbnQtdGV4dCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvbnQtZm9vdGVyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoaXMgbW9kdWxlIHdpbGwgY29udGFpbiB0aGUgQWJvdXQgcGFnZVxyXG5pbXBvcnQgeyBhYm91dENvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnRzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0VGFiKHdlYkNvbnRlbnQpIHtcclxuXHRjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHRoZWFkLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtaGVhZGxpbmUnLCAnZm9udC1ib2xkJywgJ2Fib3V0LXRpdGxlJyk7XHJcblx0Y29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHRkZXNjLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtdGV4dCcsICdhYm91dC1kZXNjJyk7XHJcblxyXG5cdGhlYWQuaW5uZXJIVE1MID0gYWJvdXRDb250ZW50LmhlYWRMaW5lO1xyXG5cdGRlc2MuaW5uZXJIVE1MID0gYWJvdXRDb250ZW50LmRlc2M7XHJcblxyXG5cdHdlYkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZChkZXNjKTtcclxufTsiLCIvLyBUaGlzIGpzIG1vZHVsZSB3aWxsIGNsZWFyIHRoZSBjb250ZW50IG9mIGEgcGFyZW50IG5vZGVcclxuLy8gaXQgd2lsbCBnZXQgdGhlIHBhcmVudCBub2RlIHRoZW4gZ2V0IHRoZSBmaXJzdCBlbGVtZW50IGNoaWxkXHJcbi8vIHdoaWxlIHRoZXJlJ3Mgc3RpbGwgYSBjaGlsZCBrZWVwIGxvb3BpbmdcclxuLy8gXHRpbnNpZGUgdGhlIGxvb3AgaXQgd2lsbCByZW1vdmUgdGhlIGNoaWxkIHRoZW4gZ2V0IHRoZSBjaGlsZCBhZ2FpblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xyXG5cdGNvbnN0IGNvbnRlbnRQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cdGxldCBjaGlsZCA9IGNvbnRlbnRQYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0d2hpbGUoY2hpbGQpIHtcclxuXHRcdGNvbnRlbnRQYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpXHJcblx0XHRjaGlsZCA9IGNvbnRlbnRQYXJlbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0fVxyXG59OyIsIi8vIFRoaXMgbW9kdWxlIGluY2x1ZGVzIGFsbCBjb250ZW50cyBmb3IgdGhlIHdlYnBhZ2VcclxuLy8gYWxsIGNvbnRlbnRzIGFyZSBzZXBhcmF0ZWQgYnkgb2JqZWN0c1xyXG4vLyBzbyB0aGF0LCBldmVyeSBjb250ZW50cyBpbiBldmVyeSB3ZWJwYWdlIGNhbiBiZSBzZXBhcmF0ZWRseSBleHBvcnRlZFxyXG5cclxuZXhwb3J0IGxldCBob21lQ29udGVudCA9IHtcclxuXHRoZWFkTGluZTogXCJLxY1oxKsgTWlzZVwiLFxyXG5cdHRhZ0xpbmU6IFwiWcWNa29zbywgdG8gdGhlIGJlc3QgS8WNaMSrIGluIHRoZSB0b3duLlwiLFxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBtZW51Q29udGVudCA9IHtcclxuXHRoZWFkTGluZTogXCJLxY1oxKsgTWVuecWrXCIsXHJcblx0bWVudV8xOiBbXCJBZmZvZ2F0b1wiLCBcIkVzcHJlc3NvIEFtZXJpY2Fub1wiLCBcIkNhZmZlIExhdHRlXCIsIFwiQ2FmZmUgTW9jaGFcIiwgXCJDYWZlIEF1IExhaXRcIiwgXCJDYXBwdWNpbm9cIl0sXHJcblx0bWVudV8yOiBbXCJDb2xkIEJyZXcgQ29mZmVlXCIsIFwiRG91YmxlIEVzcHJlc3NvXCIsIFwiRXNwcmVzc28gQ29uIFBhbm5hXCIsIFwiRnJhcHBlXCIsIFwiSWNlZCBMYXR0ZVwiLCBcIkZsYXQgV2hpdGVcIl0sXHJcbn07XHJcblxyXG5leHBvcnQgbGV0IGFib3V0Q29udGVudCA9IHtcclxuXHRoZWFkTGluZTogXCJBYm91dCBLxY1oxKsgTWlzZVwiLFxyXG5cdGRlc2M6IFwiJmVtc3A7IEtvaGkgTWlzZSBpcyBhIHNpbXBsZSBjb2ZmZWUgc2hvcCBpbnNwaXJlZCBieSBKYXBhbmVzZSBjdWx0dXJlLiBUaGUgQ0VPIG9mIHRoaXMgY29mZmVlIHNob3AgcmVhbGx5IGxpa2VzIGFuaW1lIHdoaWNoIG1hZGUgaGltIGxvdmUgdGhlIEphcGFuZXNlIGN1bHR1cmUuIFRoaXMgY29mZmVlIHNob3AgaXMgdmVyeSBzbWFsbCBidXQgZmlsbGVkIHdpdGggbWVtb3JpZXMgYW5kIGxvdmUgYnkgdGhlIGVtcGxveWVlcyBpbiBvcmRlciB0byBnaXZlIHRoZSBiZXN0IGV4cGVyaWVuY2UgdG8gZXZlcnlvbmUuIERvbuKAmXQgZm9yZ2V0IHRoYXQgS29oaSBNaXNlIGEgZGF5IHdpbGwga2VlcCB0aGUgcmVhbCB3b3JsZCBhd2F5IVwiLFxyXG59OyIsImltcG9ydCB7IGhvbWVDb250ZW50IH0gZnJvbSAnLi9jb250ZW50cy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lVGFiKHdlYkNvbnRlbnQpIHtcclxuXHRjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuXHRoZWFkLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtaGVhZGxpbmUnLCAnZm9udC1ib2xkJyk7XHJcblx0Y29uc3QgdGFnbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcblx0dGFnbGluZS5jbGFzc0xpc3QuYWRkKCdmb250LXRleHQnKTtcclxuXHJcblx0aGVhZC5pbm5lckhUTUwgPSBob21lQ29udGVudC5oZWFkTGluZTtcclxuXHR0YWdsaW5lLmlubmVySFRNTCA9IGhvbWVDb250ZW50LnRhZ0xpbmU7XHJcblxyXG5cdHdlYkNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZCk7XHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZCh0YWdsaW5lKTtcclxufTsiLCIvLyBUaGlzIGpzIG1vZHVsZSBjb250YWlucyB0aGUgY29udGVudCBmb3IgTWVudSB0YWJcclxuaW1wb3J0IHsgbWVudUNvbnRlbnQgfSBmcm9tICcuL2NvbnRlbnRzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVUYWIod2ViQ29udGVudCkge1xyXG5cdGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cdGhlYWQuY2xhc3NMaXN0LmFkZCgnZm9udC1oZWFkbGluZScsICdtZW51LWhlYWRsaW5lJyk7XHJcblx0aGVhZC5pbm5lckhUTUwgPSBtZW51Q29udGVudC5oZWFkTGluZTtcclxuXHRcclxuXHRjb25zdCBtZW51SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudUhvbGRlci5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblx0Ly8gY3JlYXRlIHRoZSBmaXJzdCBjb250YWluZXIgZm9yIHRoZSBtZW51XHJcblx0Y29uc3QgbWVudVR5cGVfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdG1lbnVUeXBlXzEuY2xhc3NMaXN0LmFkZCgnbWVudS0xJyk7XHJcblx0Y29uc3QgbWVudTFfdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cdGNyZWF0ZUxpc3QobWVudTFfdWwsIG1lbnVDb250ZW50Lm1lbnVfMSk7XHJcblx0bWVudVR5cGVfMS5hcHBlbmRDaGlsZChtZW51MV91bCk7IC8vIGFwcGVuZCB0aGUgdWwgd2l0aCB0aGUgbGkgdG8gdGhlIGRpdlxyXG5cclxuXHQvLyBjcmVhdGUgdGhlIGZpcnN0IGNvbnRhaW5lciBmb3IgdGhlIG1lbnVcclxuXHRjb25zdCBtZW51VHlwZV8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0bWVudVR5cGVfMi5jbGFzc0xpc3QuYWRkKCdtZW51LTInKTtcclxuXHRjb25zdCBtZW51Ml91bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblx0Y3JlYXRlTGlzdChtZW51Ml91bCwgbWVudUNvbnRlbnQubWVudV8yKTtcclxuXHRtZW51VHlwZV8yLmFwcGVuZENoaWxkKG1lbnUyX3VsKTsgLy8gYXBwZW5kIHRoZSB1bCB3aXRoIHRoZSBsaSB0byB0aGUgZGl2XHJcblxyXG5cdG1lbnVIb2xkZXIuYXBwZW5kQ2hpbGQobWVudVR5cGVfMSk7XHJcblx0bWVudUhvbGRlci5hcHBlbmRDaGlsZChtZW51VHlwZV8yKTtcclxuXHJcblx0d2ViQ29udGVudC5hcHBlbmRDaGlsZChoZWFkKTtcclxuXHR3ZWJDb250ZW50LmFwcGVuZENoaWxkKG1lbnVIb2xkZXIpO1xyXG59O1xyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGNyZWF0ZSB0aGUgbGkgZm9yIHRoZSB1bCBub2RlXHJcbi8vIGl0IG5lZWRzIG1lbnVfdWwgd2hpY2ggaXMgdGhlIHVsIG5vZGVcclxuLy8gYWxzbyB0aGUgbWVudUxpc3QgZm9yIHRoZSBjb250ZW50cyBvZiBldmVyeSBsaSB1c2luZyBhcnJheVxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0KG1lbnVfdWwsIG1lbnVMaXN0KSB7XHJcblx0Ly8gaXQgd2lsbCBnbyB0aHJvdWdoIGFsbCB0aGUgZWxlbWVudHMgb2YgdGhlIGxpc3RcclxuXHRtZW51TGlzdC5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XHJcblx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IC8vIGNyZWF0ZSB0aGUgbGkgZWxlbWVudFxyXG5cdFx0bGkuaW5uZXJIVE1MID0gcHJvZHVjdDsgLy8gYWRkIHRoZSBjb250ZW50IG9mIHRoZSBsaVxyXG5cdFx0bGkuY2xhc3NMaXN0LmFkZCgnZm9udC10ZXh0Jyk7XHJcblxyXG5cdFx0bWVudV91bC5hcHBlbmRDaGlsZChsaSk7IC8vIHRoZW4gYXBwZW5kIGl0IGFzIGEgY2hpbGQgb2YgdGhlIHVsXHJcblx0fSk7XHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL21vZHVsZXMvY2xlYXJfY29udGVudC5qcyc7XHJcbmltcG9ydCBob21lVGFiIGZyb20gJy4vbW9kdWxlcy9ob21lLmpzJztcclxuaW1wb3J0IG1lbnVUYWIgZnJvbSAnLi9tb2R1bGVzL21lbnUuanMnO1xyXG5pbXBvcnQgYWJvdXRUYWIgZnJvbSAnLi9tb2R1bGVzL2Fib3V0LmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xyXG5cclxuLy8gZ2V0IHRoZSBET00gZWxlbWVudCBmb3IgdGhlIGRpdiB3aG8gd2lsbCBob2xkIHRoZSBjb250ZW50c1xyXG5jb25zdCB3ZWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuLy8gZ2V0IHRoZSBET00gZWxlbWVudCBmb3IgdGhlIG5hdmlnYXRpb25zXHJcbmNvbnN0IG5hdk92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW92ZXJsYXknKTtcclxuY29uc3QgbmF2QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1idXJnZXInKTtcclxuY29uc3QgY2xvc2VOYXZCdXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LW92ZXJsYXktY2xvc2UnKTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lJyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpXHJcbmNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XHJcblxyXG4vLyBsb2FkIHRoZSBob21lIHRhYiBvbmNlIHRoZSBwYWdlIGxvYWRlZFxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG5cdGNoYW5nZVRhYignYWJvdXQnKTtcclxufTtcclxuXHJcbi8vIGFkZGluZyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIG5hdmlnYXRpb25zXHJcbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZVRhYignaG9tZScpIH0pO1xyXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBjaGFuZ2VUYWIoJ21lbnUnKSB9KTtcclxuYWJvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGNoYW5nZVRhYignYWJvdXQnKSB9KTtcclxuLy8gZm9yIG9wZW5pbmcgYW5kIGNsb3NpbmcgdGhlIG5hdmlnYXRpb24gZm9yIG1vYmlsZVxyXG5uYXZCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0bmF2T3ZlcmxheS5zdHlsZS53aWR0aCA9ICcxMDAlJztcclxufSk7XHJcblxyXG5jbG9zZU5hdkJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTmF2KVxyXG5cclxuZnVuY3Rpb24gY2xvc2VOYXYoKSB7XHJcblx0bmF2T3ZlcmxheS5zdHlsZS53aWR0aCA9ICcwJSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVRhYih0YWJUaXRsZSkge1xyXG5cdGNsZWFyQ29udGVudCgpOyAvLyBjbGVhciB0aGUgY29udGVudCBmaXJzdFxyXG5cdHN3aXRjaCAodGFiVGl0bGUpIHtcclxuXHRcdGNhc2UgJ2hvbWUnOlxyXG5cdFx0XHRob21lVGFiKHdlYkNvbnRlbnQpO1xyXG5cdFx0XHRjbG9zZU5hdigpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ21lbnUnOlxyXG5cdFx0XHRtZW51VGFiKHdlYkNvbnRlbnQpO1xyXG5cdFx0XHRjbG9zZU5hdigpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdGNhc2UgJ2Fib3V0JzpcclxuXHRcdFx0YWJvdXRUYWIod2ViQ29udGVudCk7XHJcblx0XHRcdGNsb3NlTmF2KCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0Y29uc29sZS5sb2coJ05vIGlkZW50aWZpZWQgdGFiIHRpdGxlJylcclxuXHRcdFx0YnJlYWs7XHJcblx0fVxyXG59O1xyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9