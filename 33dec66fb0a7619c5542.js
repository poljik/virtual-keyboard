/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n:focus {\\n  outline: 0;\\n  outline-offset: 0;\\n}\\n\\n.wrapper {\\n  margin: 5px auto;\\n  width: 700px;\\n}\\n.wrapper .title {\\n  margin: 5px auto;\\n  font-size: 34px;\\n  font-weight: bold;\\n  text-align: center;\\n}\\n.wrapper p {\\n  margin: 5px auto;\\n}\\n.wrapper textarea {\\n  margin: 5px auto;\\n  padding: 3px;\\n  width: 700px;\\n  height: 250px;\\n  box-sizing: border-box;\\n  resize: none;\\n}\\n.wrapper .keyboard {\\n  margin: 5px auto;\\n  padding: 5px 0;\\n  height: 250px;\\n  background: rgb(139, 202, 228);\\n  border-radius: 7px;\\n}\\n.wrapper .keyboard .row {\\n  display: flex;\\n  justify-content: center;\\n  margin: 3px 5px;\\n  width: 690px;\\n}\\n\\n.key {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 3px;\\n  width: 40px;\\n  height: 40px;\\n  background: linear-gradient(315deg, rgb(190, 194, 206) 10%, rgb(100, 105, 105));\\n  border-radius: 5px;\\n  box-shadow: 4px 4px 8px 0px rgba(23, 45, 86, 0.41);\\n}\\n.key:hover {\\n  background: rgb(204, 113, 113);\\n}\\n\\n.active, .caps_active {\\n  border-radius: 15px;\\n  background: rgb(204, 113, 113);\\n  transition: 0.3s;\\n}\\n\\ndiv#ShiftLeft, div#CapsLock, div#Backspace {\\n  width: 93.2px;\\n}\\n\\ndiv#Enter {\\n  width: 82.8px;\\n}\\n\\ndiv#Tab {\\n  width: 46px;\\n}\\n\\ndiv#ControlLeft, div#ControlRight {\\n  width: 72px;\\n}\\n\\ndiv#Space {\\n  width: 249.6px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/functions.js":
/*!**********************************!*\
  !*** ./src/scripts/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keyName = [\n  [\"Backquote\", \"Digit1\", \"Digit2\", \"Digit3\", \"Digit4\", \"Digit5\", \"Digit6\", \"Digit7\", \"Digit8\", \"Digit9\", \"Digit0\", \"Minus\", \"Equal\", \"Backspace\"],\n  [\"Tab\", \"KeyQ\", \"KeyW\", \"KeyE\", \"KeyR\", \"KeyT\", \"KeyY\", \"KeyU\", \"KeyI\", \"KeyO\", \"KeyP\", \"BracketLeft\", \"BracketRight\", \"slash2\", \"Delete\"],\n  [\"CapsLock\", \"KeyA\", \"KeyS\", \"KeyD\", \"KeyF\", \"KeyG\", \"KeyH\", \"KeyJ\", \"KeyK\", \"KeyL\", \"Semicolon\", \"Quote\", \"Enter\"],\n  [\"ShiftLeft\", \"Backslash\", \"KeyZ\", \"KeyX\", \"KeyC\", \"KeyV\", \"KeyB\", \"KeyN\", \"KeyM\", \"Comma\", \"Period\", \"Slash\", \"ArrowUp\", \"ShiftRight\"],\n  [\"ControlLeft\", \"MetaLeft\", \"AltLeft\", \"Space\", \"AltRight\", \"ControlRight\", \"ArrowLeft\", \"ArrowDown\", \"ArrowRight\"],\n];\n\nconst key = [\n  [\"`\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"-\", \"=\", \"Backspace\"],\n  [\"Tab\", \"q\", \"w\", \"e\", \"r\", \"t\", \"y\", \"u\", \"i\", \"o\", \"p\", \"[\", \"]\", \"\\\\\", \"Del\"],\n  [\"Caps Lock\", \"a\", \"s\", \"d\", \"f\", \"g\", \"h\", \"j\", \"k\", \"l\", \";\", \"\\\"\", \"Enter\"],\n  [\"Shift\", \"\\\\\", \"z\", \"x\", \"c\", \"v\", \"b\", \"n\", \"m\", \",\", \".\", \"/\", \"↑\", \"Shift\"],\n  [\"Ctrl\", \"Win\", \"Alt\", \"Space\", \"Alt\", \"Ctrl\", \"←\", \"↓\", \"→\"],\n];\n\nconst keyShift = [\n  [\"~\", \"!\", \"@\", \"#\", \"$\", \"%\", \"^\", \"&\", \"*\", \"(\", \")\", \"_\", \"+\", \"Backspace\"],\n  [\"Tab\", \"Q\", \"W\", \"E\", \"R\", \"T\", \"Y\", \"U\", \"I\", \"O\", \"P\", \"{\", \"}\", \"|\", \"Del\"],\n  [\"Caps Lock\", \"A\", \"S\", \"D\", \"F\", \"G\", \"H\", \"J\", \"K\", \"L\", \":\", \"\\\"\", \"Enter\"],\n  [\"Shift\", \"|\", \"Z\", \"X\", \"C\", \"V\", \"B\", \"N\", \"M\", \"<\", \">\", \"?\", \"↑\", \"Shift\"],\n  [\"Ctrl\", \"Win\", \"Alt\", \"Space\", \"Alt\", \"Ctrl\", \"←\", \"↓\", \"→\"],\n];\n\nconst keyCaps = [\n  [\"`\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"-\", \"=\", \"Backspace\"],\n  [\"Tab\", \"Q\", \"W\", \"E\", \"R\", \"T\", \"Y\", \"U\", \"I\", \"O\", \"P\", \"[\", \"]\", \"\\\\\", \"Del\"],\n  [\"Caps Lock\", \"A\", \"S\", \"D\", \"F\", \"G\", \"H\", \"J\", \"K\", \"L\", \";\", \"\\\"\", \"Enter\"],\n  [\"Shift\", \"\\\\\", \"Z\", \"X\", \"C\", \"V\", \"B\", \"N\", \"M\", \",\", \".\", \"/\", \"↑\", \"Shift\"],\n  [\"Ctrl\", \"Win\", \"Alt\", \"Space\", \"Alt\", \"Ctrl\", \"←\", \"↓\", \"→\"],\n];\n\nconst keyRu = [\n  [\"`\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"-\", \"=\", \"Backspace\"],\n  [\"Tab\", \"й\", \"ц\", \"у\", \"к\", \"е\", \"н\", \"г\", \"ш\", \"щ\", \"з\", \"х\", \"ъ\", \"\\\\\", \"Del\"],\n  [\"Caps Lock\", \"ф\", \"ы\", \"в\", \"а\", \"п\", \"р\", \"о\", \"л\", \"д\", \"ж\", \"э\", \"Enter\"],\n  [\"Shift\", \"\\\\\", \"я\", \"ч\", \"с\", \"м\", \"и\", \"т\", \"ь\", \"б\", \"ю\", \".\", \"↑\", \"Shift\"],\n  [\"Ctrl\", \"Win\", \"Alt\", \"Space\", \"Alt\", \"Ctrl\", \"←\", \"↓\", \"→\"],\n];\n\nconst keyRuShift = [\n  [\"Ё\", \"!\", \"\\\"\", \"№\", \";\", \"%\", \":\", \"?\", \"*\", \"(\", \")\", \"_\", \"+\", \"Backspace\"],\n  [\"Tab\", \"Й\", \"Ц\", \"У\", \"К\", \"Е\", \"Н\", \"Г\", \"Ш\", \"Щ\", \"З\", \"Х\", \"Ъ\", \"/\", \"Del\"],\n  [\"Caps Lock\", \"Ф\", \"Ы\", \"В\", \"А\", \"П\", \"Р\", \"О\", \"Л\", \"Д\", \"Ж\", \"Э\", \"Enter\"],\n  [\"Shift\", \"/\", \"Я\", \"Ч\", \"С\", \"М\", \"И\", \"Т\", \"Ь\", \"Б\", \"Ю\", \".\", \"↑\", \"Shift\"],\n  [\"Ctrl\", \"Win\", \"Alt\", \"Space\", \"Alt\", \"Ctrl\", \"←\", \"↓\", \"→\"],\n];\n\nconst keyRuCaps = [\n  [\"`\", \"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"0\", \"-\", \"=\", \"Backspace\"],\n  [\"Tab\", \"Й\", \"Ц\", \"У\", \"К\", \"Е\", \"Н\", \"Г\", \"Ш\", \"Щ\", \"З\", \"Х\", \"Ъ\", \"\\\\\", \"Del\"],\n  [\"Caps Lock\", \"Ф\", \"Ы\", \"В\", \"А\", \"П\", \"Р\", \"О\", \"Л\", \"Д\", \"Ж\", \"Э\", \"Enter\"],\n  [\"Shift\", \"\\\\\", \"Я\", \"Ч\", \"С\", \"М\", \"И\", \"Т\", \"Ь\", \"Б\", \"Ю\", \".\", \"↑\", \"Shift\"],\n  [\"Ctrl\", \"Win\", \"Alt\", \"Space\", \"Alt\", \"Ctrl\", \"←\", \"↓\", \"→\"],\n];\n\nfunction createElem(name, id, classes) {\n  const elem = document.createElement(name);\n  if (id) {\n    elem.id = id;\n  }\n  if (classes) {\n    elem.className = classes;\n  }\n\n  return document.body.appendChild(elem);\n}\n\nfunction createChildElem(root, name, id, classes) {\n  const elem = document.createElement(name);\n  if (id) {\n    elem.id = id;\n  }\n  if (classes) {\n    elem.className = classes;\n  }\n\n  return root.appendChild(elem);\n}\n\nclass Keyboard {\n  constructor() {\n    this.bodyTextArea = null;\n    this.bodyKb = null;\n    this.keysInRows = null;\n    this.EN = true;\n    this.Caps = false;\n    this.Shift = false;\n    this.Alt = false;\n  }\n\n  init() {\n    if (localStorage.getItem(\"vrKbEN\") === null) {\n      localStorage.setItem(\"vrKbEN\", true);\n    } else if (localStorage.getItem(\"vrKbEN\") === \"false\") {\n      this.EN = false;\n    } else {\n      this.EN = true;\n    }\n\n    this.bodyWrapper = createElem(\"div\", \"wrapper\", \"wrapper\");\n    createChildElem(this.bodyWrapper, \"div\", \"tittle\", \"title\").textContent = \"Virtual keyboard\";\n    createChildElem(this.bodyWrapper, \"p\").textContent = \"Language switch: AltLeft + ShiftLeft\";\n\n    this.bodyTextArea = createChildElem(this.bodyWrapper, \"textarea\", \"textarea\", \"textarea\");\n    this.bodyKb = createChildElem(this.bodyWrapper, \"div\", \"keyboard\", \"keyboard\");\n\n    for (let indexRow = 0; indexRow < 5; indexRow += 1) {\n      const rootRow = createChildElem(this.bodyKb, \"div\", \"row\", \"row\");\n      const numberKeysInRow = this.keysInRows[this.keysInRows.length - 1 - indexRow];\n\n      for (let indexCol = 0; indexCol < numberKeysInRow; indexCol += 1) {\n        const elem = document.createElement(\"div\");\n        elem.id = keyName[indexRow][indexCol];\n        elem.className = \"key\";\n        if (this.EN) {\n          elem.textContent = key[indexRow][indexCol];\n        } else {\n          elem.textContent = keyRu[indexRow][indexCol];\n        }\n        rootRow.appendChild(elem);\n      }\n    }\n\n    this.bodyTextArea.focus();\n    document.addEventListener(\"keydown\", (e) => {\n      e.preventDefault();\n      this.keyDown(e.code);\n    });\n    document.addEventListener(\"keyup\", (e) => this.keyUp(e.code));\n\n    const keysAll = document.querySelectorAll(\".key\");\n    for (let index = 0; index < keysAll.length; index += 1) {\n      keysAll[index].addEventListener(\"mousedown\", (e) => this.keyDown(e.target.id));\n      keysAll[index].addEventListener(\"mouseup\", (e) => this.keyUp(e.target.id));\n    }\n  }\n\n  keyDown(code) {\n    let char = \"\";\n    const keysAll = document.querySelectorAll(\".key\");\n\n    for (let index = 0; index < keysAll.length; index += 1) {\n      const el = keysAll[index];\n      const keyCode = el.getAttribute(\"id\");\n\n      if (code === keyCode) {\n        el.classList.add(\"active\");\n        char = el.textContent;\n\n        if (code === \"ShiftLeft\" || code === \"ShiftRight\") {\n          this.Shift = true;\n          if (this.Alt) this.changeLang();\n          else this.shiftPress();\n        }\n\n        if (code === \"CapsLock\") {\n          if (this.Caps) {\n            this.Caps = false;\n            el.classList.remove(\"caps_active\");\n          } else {\n            this.Caps = true;\n            el.classList.add(\"caps_active\");\n          }\n          this.capsPress();\n        }\n\n        if (code === \"Enter\") char = \"\\n\";\n\n        if (code === \"Space\") this.bodyTextArea.textContent += \" \";\n\n        if (code === \"Tab\") this.bodyTextArea.textContent += \"\\t\";\n\n        if (code === \"AltLeft\") {\n          this.Alt = true;\n          if (this.Shift) this.changeLang();\n        }\n\n        if (code === \"Backspace\" || code === \"Delete\") {\n          const { length } = this.bodyTextArea.textContent;\n          this.bodyTextArea.textContent = this.bodyTextArea.textContent.substring(0, (length - 1));\n          char = \"\";\n        }\n\n        if (char.length === 1) this.bodyTextArea.textContent += char;\n\n        this.bodyTextArea.selectionStart = this.bodyTextArea.textContent.length;\n        this.bodyTextArea.selectionEnd = this.bodyTextArea.selectionStart;\n        return;\n      }\n    }\n\n    this.bodyTextArea.focus();\n  }\n\n  keyUp(code) {\n    const keysAll = document.querySelectorAll(\".key\");\n\n    for (let index = 0; index < keysAll.length; index += 1) {\n      const el = keysAll[index];\n      const keyCode = el.getAttribute(\"id\");\n\n      if (keyCode === code) {\n        el.classList.remove(\"active\");\n        this.bodyTextArea.focus();\n\n        if (code === \"ShiftLeft\" || code === \"ShiftRight\") {\n          this.Shift = false;\n          this.shiftPress();\n          el.classList.remove(\"shift_active\");\n        }\n\n        if (code === \"AltLeft\" || code === \"AltRight\") {\n          this.Alt = false;\n        }\n\n        return;\n      }\n    }\n\n    this.bodyTextArea.focus();\n  }\n\n  shiftPress() {\n    const array = this.bodyKb.querySelectorAll(\".key\");\n    for (let index = 0; index < array.length; index += 1) {\n      if (this.Shift && this.EN) {\n        array[index].textContent = (keyShift.flat())[index];\n      }\n      if (this.Shift && !this.EN) {\n        array[index].textContent = (keyRuShift.flat())[index];\n      }\n      if (!this.Shift && this.EN) {\n        array[index].textContent = (key.flat())[index];\n      }\n      if (!this.Shift && this.EN && this.Caps) {\n        array[index].textContent = (keyCaps.flat())[index];\n      }\n      if (!this.Shift && !this.EN) {\n        array[index].textContent = (keyRu.flat())[index];\n      }\n      if (!this.Shift && !this.EN && this.Caps) {\n        array[index].textContent = (keyRuCaps.flat())[index];\n      }\n    }\n  }\n\n  capsPress() {\n    const array = this.bodyKb.querySelectorAll(\".key\");\n    for (let index = 0; index < array.length; index += 1) {\n      if (this.Caps && this.EN) {\n        array[index].textContent = (keyCaps.flat())[index];\n      }\n      if (this.Caps && !this.EN) {\n        array[index].textContent = (keyRuCaps.flat())[index];\n      }\n      if (!this.Caps && this.EN) {\n        array[index].textContent = (key.flat())[index];\n      }\n      if (!this.Caps && !this.EN) {\n        array[index].textContent = (keyRu.flat())[index];\n      }\n    }\n  }\n\n  changeLang() {\n    if (this.EN) {\n      this.EN = false;\n      localStorage.setItem(\"vrKbEN\", \"false\");\n    } else {\n      this.EN = true;\n      localStorage.setItem(\"vrKbEN\", \"true\");\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  Keyboard,\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/functions.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/scripts/functions.js\");\n/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n\n\n\nconst { Keyboard } = _functions__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\nconst myKb = new Keyboard();\nmyKb.keysInRows = [9, 14, 13, 15, 14];\nmyKb.init();\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;