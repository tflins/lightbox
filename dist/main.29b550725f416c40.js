/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assest/css/lightbox.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assest/css/lightbox.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../icon/loading.gif */ \"./src/assest/icon/loading.gif\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../icon/prev.png */ \"./src/assest/icon/prev.png\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../icon/next.png */ \"./src/assest/icon/next.png\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../icon/close.png */ \"./src/assest/icon/close.png\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\n// Module\nexports.push([module.i, \"/* 浏览器样式重置 */\\nhtml,body,ul,li,ol,dl,dd,dt,p,h1,h2,h3,h4,h5,h6,form,fieldset,legend,img{margin:0;padding:0}\\nfieldset,img{border:0}\\n/* img{display:block} */\\naddress,caption,cite,code,dfn,th,var{font-style: normal;font-weight:normal}\\nul,ol{list-style:none}\\ninput{padding-top:0;padding-bottom:0;font-family:\\\"SimSun\\\",\\\"宋体\\\"}\\ninput::-moz-focus-inner{border:0;padding:0}\\nselect,input{vertical-align:middle}\\nselect,input,textarea{font-size:12px;margin:0}\\ninput[type=\\\"text\\\"],input[type=\\\"password\\\"],textarea{outline-style:none;-webkit-appearance:none}\\ntextarea{resize:none}\\ntable{border-collapse:collapse}\\n/* lightbox图片画廊样式 */\\n#G-lightbox-mask {\\n    position: fixed;\\n    left: 0;\\n    top: 0;\\n    width: 100%;\\n    height: 100%;\\n    background-color: #000;\\n    display: none;\\n    opacity: .5;\\n    filter: alpha(opacity=50%);/*兼容IE8以下*/\\n    z-index: 10000;\\n}\\n#G-lightbox-popup {\\n    position: fixed;\\n    left: 50%;\\n    top: 50px;\\n    margin-left: -250px;\\n    width: 500px;\\n    /* height: 500px; */\\n    /* background-color: #368; */\\n    display: none;\\n    z-index: 10001;\\n}\\n#G-lightbox-popup .lightbox-pic-view {\\n    position: relative;\\n    border: 5px solid #fff;\\n    border-radius: 3px;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center;\\n    background-color: #fff;\\n    overflow: hidden;\\n}\\n#G-lightbox-popup .lightbox-pic-view img {\\n    display:block\\n}\\n#G-lightbox-popup .lightbox-pic-view .lightbox-btn {\\n    position: absolute;\\n    top: 0;\\n    width: 35%;\\n    height: 100%;\\n    z-index: 1;\\n    /* background-color: #0c0; */\\n}\\n#G-lightbox-popup .lightbox-pic-view .lightbox-prev-btn {\\n    left: 0;\\n}\\n#G-lightbox-popup .lightbox-pic-view .lightbox-next-btn {\\n    right: 0;\\n}\\n#G-lightbox-popup .lightbox-pic-view .lightbox-prev-btn-show {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") no-repeat left center;\\n    cursor: pointer;\\n}\\n#G-lightbox-popup .lightbox-pic-view .lightbox-next-btn-show {\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") no-repeat right center;\\n    cursor: pointer;\\n}\\n#G-lightbox-popup .lightbox-pic-caption {\\n    position: relative;\\n    background-color: rgba(0, 0, 0, .3);\\n    margin: 0 5px;\\n    margin-top: -66px;\\n}\\n#G-lightbox-popup .lightbox-pic-caption .lightbox-caption-area {\\n    padding: 10px 5px;\\n    color: #fff;\\n}\\n#G-lightbox-popup .lightbox-pic-caption .lightbox-caption-area .lightbox-of-index {\\n    color: #999;\\n}\\n#G-lightbox-popup .lightbox-pic-caption .lightbox-close-btn {\\n    position: absolute;\\n    top: 15px;\\n    right: 10px;\\n    width: 32px;\\n    height: 32px;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") no-repeat center center;\\n    z-index: 2;\\n    cursor: pointer;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assest/css/lightbox.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assest/css/lightbox.css":
/*!*************************************!*\
  !*** ./src/assest/css/lightbox.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./lightbox.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assest/css/lightbox.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/assest/css/lightbox.css?");

/***/ }),

/***/ "./src/assest/icon/close.png":
/*!***********************************!*\
  !*** ./src/assest/icon/close.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/assest/icon/close.png?");

/***/ }),

/***/ "./src/assest/icon/loading.gif":
/*!*************************************!*\
  !*** ./src/assest/icon/loading.gif ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '\\u0000' (1:7)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/assest/icon/loading.gif?");

/***/ }),

/***/ "./src/assest/icon/next.png":
/*!**********************************!*\
  !*** ./src/assest/icon/next.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/assest/icon/next.png?");

/***/ }),

/***/ "./src/assest/icon/prev.png":
/*!**********************************!*\
  !*** ./src/assest/icon/prev.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/assest/icon/prev.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assest_css_lightbox_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assest/css/lightbox.css */ \"./src/assest/css/lightbox.css\");\n/* harmony import */ var _assest_css_lightbox_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assest_css_lightbox_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_Lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Lightbox */ \"./src/js/Lightbox.js\");\n\n\n\nnew _js_Lightbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/Lightbox.js":
/*!****************************!*\
  !*** ./src/js/Lightbox.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Lightbox; });\nfunction animate(obj, css, interval, speedFactor, func) {\n  clearInterval(obj.timer)\n  function getStyle(obj, prop) {\n    if (obj.currentStyle) return obj.currentStyle[prop]\n    // ie\n    else return document.defaultView.getComputedStyle(obj, null)[prop] // 非ie\n  }\n  obj.timer = setInterval(function() {\n    let flag = true\n    for (let prop in css) {\n      let cur = 0\n      if (prop == 'opacity')\n        cur = Math.round(parseFloat(getStyle(obj, prop)) * 100)\n      else cur = parseInt(getStyle(obj, prop))\n      let speed = (css[prop] - cur) * speedFactor\n      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed)\n      if (cur != css[prop]) flag = false\n      if (prop == 'opacity') {\n        obj.style.filter = \"alpha(opacity : '+(cur + speed)+' )\"\n        obj.style.opacity = (cur + speed) / 100\n      } else obj.style[prop] = cur + speed + 'px'\n    }\n    if (flag) {\n      clearInterval(obj.timer)\n      if (func) func()\n    }\n  }, interval)\n}\n\n// Lightbox的构造函数\nclass Lightbox {\n  constructor() {\n    let self = this\n\n    // 创建遮罩层和弹出层\n    this.popupMask = document.createElement('div')\n    this.popupWin = document.createElement('div')\n\n    // 保存body\n    this.bodyNode = document.body\n\n    this.groupName = null\n    this.groupData = []\n\n    // 点击事件委托到body中\n    // this.bodyNode.onclick = function(event) {\n    //   let event = event || window.event\n    //   let target = event.target || event.srcElement\n    //   if (\n    //     target.nodeName.toLowerCase() === 'img' &&\n    //     target.getAttribute('data-rote') === 'lightbox'\n    //   ) {\n    //     // console.log(target.getAttribute(\"data-rote\"));\n    //     // 阻止事件冒泡\n    //     event.stopPropagation()\n    //     // 当前组名\n    //     let currentGroupName = target.getAttribute('data-group')\n\n    //     if (currentGroupName !== self.groupName) {\n    //       self.groupName = currentGroupName\n    //       // 根据当前组名获取同一组的数据\n    //       self.getGroup()\n    //     }\n    //     // 初始化弹出层\n    //     self.initPopup(target)\n    //   }\n    // }\n\n    // 渲染剩余的DOM，并插入到body中\n    this.renderDom()\n\n    // 图片预览区\n    this.picViewArea = document.querySelector(\n      '#G-lightbox-popup .lightbox-pic-view'\n    )\n    // 图片\n    this.popupPic = document.querySelector('#G-lightbox-popup .lightbox-image')\n    // 图片描述区域\n    this.picCaptionArea = document.querySelector(\n      '#G-lightbox-popup .lightbox-pic-caption'\n    )\n    // 向上切换按钮\n    this.prevBtn = document.querySelector(\n      '#G-lightbox-popup .lightbox-prev-btn'\n    )\n    // 向下切换按钮\n    this.nextBtn = document.querySelector(\n      '#G-lightbox-popup .lightbox-next-btn'\n    )\n    // 图片描述文本\n    this.captionText = document.querySelector(\n      '#G-lightbox-popup .lightbox-pic-desc'\n    )\n    // 当前图片索引\n    this.currentIndex = document.querySelector(\n      '#G-lightbox-popup .lightbox-of-index'\n    )\n    // 关闭按钮\n    this.closeBtn = document.querySelector(\n      '#G-lightbox-popup .lightbox-close-btn'\n    )\n    // console.log(this.closeBtn);\n\n    // 点击遮罩层关闭其与弹出层\n    this.popupMask.onclick = function() {\n      this.style.display = 'none'\n      self.popupWin.style.display = 'none'\n    }\n    // 点击关闭按钮关闭弹出层和遮罩层\n    this.closeBtn.onclick = function(e) {\n      // 阻止事件冒泡\n      e.stopPropagation()\n      self.popupMask.style.display = 'none'\n      self.popupWin.style.display = 'none'\n    }\n    // 鼠标移入移出上下切换按钮时显示处理\n    this.hoverBtn()\n    // 点击切换按钮处理\n    this.clickBtn()\n  }\n\n  // 初始化弹出层方法\n  initPopup() {\n    let self = this,\n      soureSrc = obj.getAttribute('data-soure'),\n      currentId = obj.getAttribute('data-id')\n    // 调用显示方法\n    this.showMaskAndPopup(soureSrc, currentId)\n  }\n\n  // 渲染其他DOM方法\n  renderDom() {\n    // 给遮罩层和弹出层设置id\n    this.popupMask.setAttribute('id', 'G-lightbox-mask')\n    this.popupWin.setAttribute('id', 'G-lightbox-popup')\n    // 弹出层的html内容\n    let strDom =\n      \"<div class='lightbox-pic-view'>\" +\n      \"<span class='lightbox-btn lightbox-prev-btn'></span>\" +\n      \"<img class='lightbox-image' src='images/0.jpg' alt='美女1'>\" +\n      \"<span class='lightbox-btn lightbox-next-btn'></span>\" +\n      '</div>' +\n      \"<div class='lightbox-pic-caption'>\" +\n      \"<div class='lightbox-caption-area'>\" +\n      \"<p class='lightbox-pic-desc'>图片标题</p>\" +\n      \"<span class='lightbox-of-index'>当前索引：1 / 4</span>\" +\n      '</div>' +\n      \"<span class='lightbox-close-btn'></span>\" +\n      '</div>'\n    // 插入到弹出层中\n    this.popupWin.innerHTML = strDom\n    // 将遮罩层和弹出层添加到body中\n    this.bodyNode.appendChild(this.popupMask)\n    this.bodyNode.appendChild(this.popupWin)\n  }\n\n  getGroup() {\n    let self = this\n\n    // 根据当前组别获取所有当前组别的数据\n    let groupList = document.querySelectorAll(\n      'img[data-group=' + this.groupName + ']'\n    )\n\n    // 清空groupData数据\n    this.groupData.length = 0\n\n    // 将数据推入groupData中\n    for (let i = 0, len = groupList.length; i < len; i++) {\n      this.groupData.push({\n        src: groupList[i].getAttribute('data-soure'),\n        id: groupList[i].getAttribute('data-id'),\n        caption: groupList[i].getAttribute('data-caption')\n      })\n    }\n  }\n\n  // 显示遮罩层与弹出层\n  showMaskAndPopup(soureSrc, currentId) {\n    let self = this,\n      winHeight = document.documentElement.clientHeight, // 可见窗口宽度\n      winWidth = document.documentElement.clientWidth, // 可见窗口高度\n      viewHeight = winHeight / 2 + 10 // 当前弹出层高度\n    // 隐藏相关区域\n    this.popupPic.style.display = 'none'\n    this.picCaptionArea.style.display = 'none'\n    // 设置图片预览区宽高\n    this.picViewArea.style.width = winWidth / 2 + 'px'\n    this.picViewArea.style.height = winHeight / 2 + 'px'\n    // 显示相关区域\n    this.popupMask.style.display = 'block'\n    this.popupWin.style.display = 'block'\n    // 设置弹出层宽高位置\n    this.popupWin.style.width = winWidth / 2 + 10 + 'px'\n    this.popupWin.style.height = winHeight / 2 + 10 + 'px'\n    this.popupWin.style.marginLeft = -(winWidth / 2 + 10) / 2 + 'px'\n    // 初始化弹出层top值\n    this.popupWin.style.top = -viewHeight + 'px'\n    //console.log((winHeight - viewHeight)/2);\n    // 启动定时器调整top的值\n    let top = viewHeight\n    let changeTop = setInterval(function() {\n      top = top - 15\n      //console.log(top);\n      self.popupWin.style.top = -top + 'px'\n      //console.log(self.popupWin.style.top);\n      if (-top >= (winHeight - viewHeight) / 2) {\n        clearInterval(changeTop)\n        // 加载图片尺寸\n        self.loadPicSize(soureSrc)\n      }\n    }, 1)\n\n    // 根据当前元素id获取当前索引\n    this.index = this.getIndexOf(currentId)\n    // 如果该组图片数组中长度大于1\n    if (this.groupData.length > 1) {\n      // 有当前索引判断是否隐藏上下切换按钮\n      if (this.index === 1) {\n        this.prevBtn.classList.add('disabled')\n        this.nextBtn.classList.remove('disabled')\n      } else if (this.index === this.groupData.length) {\n        this.prevBtn.classList.remove('disabled')\n        this.nextBtn.classList.add('disabled')\n      } else {\n        this.prevBtn.classList.remove('disabled')\n        this.nextBtn.classList.remove('disabled')\n      }\n    }\n  }\n\n  getIndexOf(currentId) {\n    let index = 0\n\n    // 根据groupData中的id判断当前索引\n    for (let i = 0, len = this.groupData.length; i < len; i++) {\n      if (this.groupData[i].id === currentId) {\n        index = i + 1\n      }\n    }\n    // console.log(index);\n    return index\n  }\n  // 加载图片尺寸方法\n  loadPicSize(soureSrc) {\n    //console.log(soureSrc);\n    let self = this\n    // 清楚上一次获取图片的宽高\n    this.popupPic.style.width = 'auto'\n    this.popupPic.style.height = 'auto'\n    // 隐藏上一次图片，防止出现较差的视觉效果\n    this.popupPic.style.display = 'none'\n    // 预加载图片\n    this.preLoadImg(soureSrc, function() {\n      self.popupPic.setAttribute('src', soureSrc)\n      // 图片的宽高\n      let picWidth = self.popupPic.width,\n        picHeight = self.popupPic.height\n      // 改变弹出层的宽高\n      self.changePopup(picWidth, picHeight)\n    })\n  }\n  preLoadImg(soureSrc, callback) {\n    let img = new Image()\n    img.onload = function() {\n      callback()\n    }\n    img.src = soureSrc\n  }\n  // 改变弹出层宽高方法\n  changePopup(picWidth, picHeight) {\n    let self = this,\n      winHeight = document.documentElement.clientHeight, // 可见窗口宽度\n      winWidth = document.documentElement.clientWidth // 可见窗口高度\n    // 如果图片的宽高大于浏览器可视区域\n    let scale = Math.min(\n      winWidth / (picWidth + 10),\n      winHeight / (picHeight + 10),\n      1\n    )\n    picWidth = picWidth * scale\n    picHeight = picHeight * scale\n    // console.log(scale);\n    // 调用animate方法使改变图片预览区宽高有过度效果\n    animate(\n      this.picViewArea,\n      {\n        width: Math.floor(picWidth - 10), // 这里不取整的话，无法完成\n        height: Math.floor(picHeight - 10)\n      },\n      10,\n      0.5,\n      function() {\n        // console.log(\"dd\");\n      }\n    )\n    animate(\n      this.popupWin,\n      {\n        width: Math.floor(picWidth),\n        height: Math.floor(picHeight),\n        marginLeft: -Math.floor(picWidth / 2),\n        top: Math.floor((winHeight - picHeight) / 2)\n      },\n      10,\n      0.5,\n      function() {\n        // console.log(\"ddd\");\n        self.popupPic.style.width = picWidth + 'px'\n        // console.log(picWidth);\n        // 显示图片区域和图片描述区域\n        self.popupPic.style.display = 'block'\n        self.picCaptionArea.style.display = 'block'\n      }\n    )\n    // 设置描述文字和当前索引\n    // console.log(this.index);\n    this.captionText.innerText = this.groupData[this.index - 1].caption\n    this.currentIndex.innerText =\n      '当前索引：' + this.index + '/' + this.groupData.length\n  }\n  // 鼠标移入移出切换按钮时调整其是否显示方法\n  hoverBtn() {\n    let self = this\n    // 鼠标移入向上切换按钮时\n    this.prevBtn.onmouseover = function() {\n      let prevBtn = self.prevBtn\n      // 判断当前按钮的class中是否有disable的值\n      let disabled = false\n      for (let i = 0, len = prevBtn.classList.length; i < len; i++) {\n        if (prevBtn.classList[i] === 'disabled') {\n          disabled = true\n        }\n      }\n      if (!disabled) {\n        prevBtn.classList.add('lightbox-prev-btn-show')\n      }\n    }\n    // 鼠标移入向下切换按钮时\n    this.nextBtn.onmouseover = function() {\n      let nextBtn = self.nextBtn\n      // 判断当前按钮的class中是否有disable的值\n      let disabled = false\n      for (let i = 0, len = nextBtn.classList.length; i < len; i++) {\n        if (nextBtn.classList[i] === 'disabled') {\n          disabled = true\n        }\n      }\n      if (!disabled) {\n        nextBtn.classList.add('lightbox-next-btn-show')\n      }\n    }\n    // 鼠标移出向上切换按钮时\n    this.prevBtn.onmouseout = function() {\n      self.prevBtn.classList.remove('lightbox-prev-btn-show')\n    }\n    // 鼠标移出向下切换按钮时\n    this.nextBtn.onmouseout = function() {\n      self.nextBtn.classList.remove('lightbox-next-btn-show')\n    }\n  }\n  clickBtn() {\n    let self = this\n    // 点击向上切换按钮时\n    this.prevBtn.onclick = function(e) {\n      // 阻止事件冒泡\n      e.stopPropagation()\n      let prevBtn = self.prevBtn\n      // 判断当前按钮的class中是否有disable的值\n      let disabled = false\n      for (let i = 0, len = prevBtn.classList.length; i < len; i++) {\n        if (prevBtn.classList[i] === 'disabled') {\n          disabled = true\n        }\n      }\n      if (!disabled) {\n        // 调用切换图片方法\n        self.goto('prev')\n        // console.log(\"aa\");\n      }\n    }\n    // 点击向下切换按钮时\n    this.nextBtn.onclick = function(e) {\n      // 阻止事件冒泡\n      e.stopPropagation()\n      let nextBtn = self.nextBtn\n      // 判断当前按钮的class中是否有disable的值\n      let disabled = false\n      for (let i = 0, len = nextBtn.classList.length; i < len; i++) {\n        if (nextBtn.classList[i] === 'disabled') {\n          disabled = true\n        }\n      }\n      if (!disabled) {\n        // 调用切换图片方法\n        self.goto('next')\n        // console.log(\"dd\");\n      }\n    }\n  }\n  // 切换图片方法\n  goto(direction) {\n    // 图片原图地址\n    let src\n    // 向下切换\n    if (direction === 'next') {\n      this.index++\n      src = this.groupData[this.index - 1].src\n      this.prevBtn.classList.remove('disabled')\n      if (this.index >= this.groupData.length) {\n        this.nextBtn.classList.add('disabled')\n        this.nextBtn.classList.remove('lightbox-next-btn-show')\n      }\n    } else if (direction === 'prev') {\n      // 向上切换\n      this.index--\n      src = this.groupData[this.index - 1].src\n      this.nextBtn.classList.remove('disabled')\n      if (this.index <= 1) {\n        this.index = 1\n        this.prevBtn.classList.add('disabled')\n        this.prevBtn.classList.remove('lightbox-prev-btn-show')\n      }\n    }\n    // 重新载入图片\n    this.loadPicSize(src)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/Lightbox.js?");

/***/ })

/******/ });