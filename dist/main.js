/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! namespace exports */
/*! export addHome [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addHome\": () => /* binding */ addHome\n/* harmony export */ });\nconst addHome = () => {\n    const homeTab = document.querySelector(\"#home-tab\");\n    homeTab.classList.add(\"active\");\n    \n    const addedDiv = document.querySelector(\"#added-div\");\n    \n    addImg(addedDiv);\n    addDescription(addedDiv);   \n\n    \n}\n\nconst addImg = (addedDiv) => {\n    const img = document.createElement(\"img\");\n    img.src = \"./pasta-pic.jpg\";    \n    addedDiv.appendChild(img);\n\n}\n\nconst addDescription = (addedDiv) => {\n    const text = document.createElement(\"div\");\n    text.setAttribute(\"id\", \"home-text\");\n    text.textContent = \"The Pasta Society makes your dreams come true. Choose the pasta, combine it with one of our delicious sauces and you're ready do immerse yourself into the Italian flavour.\"\n    addedDiv.appendChild(text);\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadHead__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadHead */ \"./src/loadHead.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n(0,_loadHead__WEBPACK_IMPORTED_MODULE_1__.loadHead)();\n(0,_home__WEBPACK_IMPORTED_MODULE_2__.addHome)();\n\nconst addListeners = (() => {\n    const tabs = document.querySelectorAll(\"button\");\n\n    tabs.forEach((tab) => {\n        tab.addEventListener(\"click\", () => {\n            clearPage();\n            \n            switch (tab.id) {\n                case \"home-tab\" : (0,_home__WEBPACK_IMPORTED_MODULE_2__.addHome)();\n                break;\n                case \"menu-tab\" : (0,_menu__WEBPACK_IMPORTED_MODULE_0__.addMenu)();\n                break;\n            }\n        })\n    })\n\n    return { tabs }\n})();\n\n\n\nconst clearPage = () => {\n    const tabs = addListeners.tabs;\n    const addedDiv = document.querySelector(\"#added-div\");\n    \n    tabs.forEach(tab => {\n        tab.classList.remove(\"active\");\n    })\n    \n    addedDiv.innerHTML = \"\";\n    \n}\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/loadHead.js":
/*!*************************!*\
  !*** ./src/loadHead.js ***!
  \*************************/
/*! namespace exports */
/*! export loadHead [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHead\": () => /* binding */ loadHead\n/* harmony export */ });\nconst loadHead = () => {\n    const content = document.querySelector(\"#content\");\n\n    createTitle(content);\n    createTabBtns();  \n    createAddedDiv(content);  \n\n};\n\nconst createTitle = (content) => {\n    \n    \n    const h1 = document.createElement(\"h1\");\n    h1.textContent = \"The Pasta Society\";\n    content.appendChild(h1);    \n}\n\nconst createTabBtns = function() {\n    const tab = document.createElement(\"div\");\n    tab.classList.add(\"tab\");\n    content.appendChild(tab);\n\n    for (let i = 0; i <3; i++) {\n        const button = document.createElement(\"button\");  \n        button.classList.add(\"tablinks\");          \n        tab.appendChild(button);\n    }\n    addBtnsContent();\n};\n\nconst createAddedDiv = (content) => {\n    const addedDiv = document.createElement(\"div\");\n    addedDiv.setAttribute(\"id\", \"added-div\");\n    content.appendChild(addedDiv);\n}\n\nconst addBtnsContent = () => {\n    const buttons = document.querySelectorAll(\"button\");\n    const homeTab = buttons.item(0);\n    const menuTab = buttons.item(1);\n    const contactTab = buttons.item(2);\n\n    homeTab.textContent = \"Home\";\n    homeTab.id = \"home-tab\";\n    \n    menuTab.textContent = \"Menu\";\n    menuTab.id = \"menu-tab\";\n\n    contactTab.textContent = \"Contact\";\n    contactTab.id = \"contact-tab\";\n};\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/loadHead.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! namespace exports */
/*! export addMenu [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addMenu\": () => /* binding */ addMenu\n/* harmony export */ });\nconst addMenu = () => {\n    const menuTab = document.querySelector(\"#menu-tab\");\n    menuTab.classList.add(\"active\");\n    \n    const addedDiv = document.querySelector(\"#added-div\");\n    addMenuTable(addedDiv);\n    addEventListeners();\n    addCalcBtn(addedDiv);\n    addSelectionDiv(addedDiv);\n   \n     \n\n    \n}\n\nconst menuItem = (type, name, price) => {\n    \n    return { type, name, price }\n}\n\nconst pastaList = [];\nconst sauceList = [];\nconst selectedItems = [];\n\nconst createItem = (type, name, price) => {\n  const item = menuItem(type, name, price);\n \n\n  if (item.type === \"pasta\") {\n    pastaList.push({name, price});\n  } else {\n    sauceList.push({name, price});\n  }\n  \n}\n\nconst createMenuItems = (() => {   \n\n    createItem(\"pasta\", \"spaghetti\", 3.5);\n    createItem(\"pasta\", \"bucatini\", 3);\n    createItem(\"pasta\", \"farfalle\", 4);\n    \n    createItem(\"sauce\", \"pesto\", 2);\n    createItem(\"sauce\", \"ham & cream\", 5);\n\n    \n})();\n\n\n\n\nconst addMenuTable = (addedDiv) => {  \n    \n    const menuDiv = document.createElement(\"div\");\n    menuDiv.setAttribute(\"id\", \"menu-div\");\n    addedDiv.appendChild(menuDiv);\n\n    const pastaGrid = document.createElement(\"div\");\n    pastaGrid.setAttribute(\"id\", \"pasta-grid\");    \n    makeGrid(pastaList, pastaGrid, \"pasta-cell\");\n\n\n    const sauceGrid = document.createElement(\"div\");\n    sauceGrid.setAttribute(\"id\", \"sauce-grid\");    \n    makeGrid(sauceList, sauceGrid, \"sauce-cell\");\n    \n    \n    menuDiv.appendChild(pastaGrid);\n    menuDiv.appendChild(sauceGrid);\n    \n}\n\nfunction addCalcBtn(addedDiv) {\n  const calcBtn = document.createElement(\"button\");\n  calcBtn.setAttribute(\"id\", \"calc-btn\");\n  calcBtn.textContent = \"Calculate price\";\n  addedDiv.appendChild(calcBtn);\n\n  calcBtn.addEventListener(\"click\", () => {\n    showSelection();\n  })\n}\n\nfunction makeGrid(list, grid, newClass) {  \n\n  for (let i = 0; i < list.length; i++) {\n    let item = list[i];\n    let itemProps = Object.values(item);\n    let itemKeys = Object.keys(item);\n    \n    for (let j = 0; j < itemProps.length; j++) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\", newClass);\n      cell.setAttribute(\"id\", i);\n    \n        if (isNaN(itemProps[j])) {\n          cell.textContent = itemProps[j];\n          cell.classList.add(itemKeys[j]);\n        } else {\n          cell.textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(itemProps[j]);\n          cell.classList.add(itemKeys[j]);\n        }\n    \n      grid.appendChild(cell);  \n    }\n\n  }\n  \n}\n\nconst addEventListeners = () => {\n const cells = document.querySelectorAll(\".cell\");\n  cells.forEach((cell) => {\n    cell.addEventListener(\"click\", () => {\n      \n      if (cell.classList.contains(\"pasta-cell\")) {\n        setPastaSelection(cell);\n        \n      } else if (cell.classList.contains(\"sauce-cell\")) {\n        setSauceSelection(cell);\n        //calculatePrice();\n      }\n    })\n  })\n};\n\nfunction setPastaSelection(cell) {\n  const item = pastaList[cell.id];\n  selectedItems[0] = item;\n  \n  //console.log(selectedItems[0].price);\n  \n}\n\nfunction setSauceSelection(cell) {\n  const item = sauceList[cell.id];\n  selectedItems[1] = item;\n  //console.log(selectedItems[1]);\n}\n\nfunction showSelection() {  \n  const selectionDiv = document.querySelector(\"#selection-div\");\n  const price = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(calculatePrice())\n  selectionDiv.textContent = `You chose ${selectedItems[0].name} with ${selectedItems[1].name}. Price: ${price}`;\n  \n}\n\nfunction addSelectionDiv(addedDiv) {\n  const selectionDiv = document.createElement(\"div\");\n  selectionDiv.setAttribute(\"id\", \"selection-div\");\n  addedDiv.appendChild(selectionDiv);\n}\n\n\n\nfunction calculatePrice() {\n return selectedItems[0].price + selectedItems[1].price;\n}\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;