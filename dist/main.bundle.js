/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nheader nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nheader nav ul li a {\n  text-decoration: none;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n\n#movie-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n}\n#movie-section .movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  gap: 5px;\n}\n#movie-section .movie-wrapper .movie-wrapper__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  width: 210px;\n  height: 36px;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  gap: 2px;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover {\n  color: #f81b40;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active {\n  color: #a7001c;\n  text-shadow: 0 0 5px;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button {\n  width: 210px;\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(128, 128, 128, 0.9);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  /* FORM VALIDATION */\n}\n.modal__box .movie__container {\n  height: 90%;\n  width: 90%;\n  max-width: 768px;\n  padding: 2rem;\n  margin: 2rem auto;\n  background-color: #fff;\n  border-radius: 5px;\n  overflow-y: auto;\n  position: relative;\n}\n.modal__box .movie__container > * {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__container h2 {\n  font-family: \"Karla\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container h3 {\n  margin-bottom: 1rem;\n}\n.modal__box .movie__container ul {\n  list-style: none;\n}\n.modal__box .movie__container ul li {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n}\n.modal__box .movie__container .btn {\n  padding: 0.5rem;\n  background: transparent;\n  border: 1px solid #ced4da;\n  cursor: pointer;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: normal;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n.modal__box .movie__container .btn:hover {\n  border: 1px solid #219cba;\n  background-color: #219cba;\n  color: #fff;\n}\n.modal__box .movie__container .btn__close-modal {\n  width: 1.5rem;\n  border: 1px solid transparent;\n  background-color: #dee2e6;\n  margin: 0;\n  padding: 0;\n  color: #219cba;\n  font-size: 2rem;\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  z-index: 11;\n}\n.modal__box .movie__details > * {\n  width: auto;\n}\n.modal__box .movie__details img {\n  width: 210px;\n  height: auto;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.modal__box .movie__details .movie__more {\n  margin: 0;\n  width: auto;\n  margin-bottom: 1rem;\n}\n.modal__box .movie__details .movie__more .item-category {\n  margin-right: 0.5rem;\n  font-weight: 600;\n}\n.modal__box .movie__comments {\n  clear: both;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__comments .item-name {\n  margin-right: 0.5rem;\n}\n.modal__box .movie__comments .item-name {\n  font-weight: 600;\n}\n.modal__box .movie__add-comment form {\n  width: 100%;\n  max-width: 500px;\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .movie__add-comment form > * {\n  margin-bottom: 0.75rem;\n}\n.modal__box .movie__add-comment form > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__add-comment form .input__field {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  outline: 1px solid #ced4da;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n.modal__box .movie__add-comment form .input__field:focus {\n  outline: 1px solid #219cba;\n}\n.modal__box .form__message {\n  display: none;\n  padding: 0.3rem;\n  font-size: 0.9rem;\n  color: #04bd9e;\n}\n.modal__box .error-message {\n  color: #fd3f3f;\n}\n.modal__box .visible {\n  display: block;\n}\n\n.modal__box-display {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'typography';\r\n@import 'mixins';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  @include font-b;\r\n}\r\n\r\nheader {\r\n  @include flex-row;\r\n\r\n  justify-content: space-between;\r\n\r\n  nav {\r\n    ul {\r\n      list-style: none;\r\n\r\n      @include flex-row;\r\n\r\n      li {\r\n        a {\r\n          text-decoration: none;\r\n\r\n          @include font-b;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#movie-section {\r\n  @include flex-row;\r\n\r\n  flex-wrap: wrap;\r\n  width: 90%;\r\n  margin: auto;\r\n  gap: 30px 3%;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n\r\n  .movie-wrapper {\r\n    @include flex-colum;\r\n\r\n    align-items: center;\r\n    gap: 5px;\r\n\r\n    .movie-wrapper__title {\r\n      @include flex-row;\r\n\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      gap: 5px;\r\n      width: 210px;\r\n      height: 36px;\r\n\r\n      .movie-wrapper__likes {\r\n        @include flex-row;\r\n\r\n        gap: 2px;\r\n\r\n        i {\r\n          &:hover {\r\n            color: rgb(248, 27, 64);\r\n          }\r\n\r\n          &:active {\r\n            color: rgb(167, 0, 28);\r\n            text-shadow: 0 0 5px;\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .movie-wrapper__comment-button {\r\n      width: 210px;\r\n    }\r\n  }\r\n}\r\n\r\n.modal__box {\r\n  width: 100%;\r\n  background-color: rgb(128, 128, 128, 0.9);\r\n  display: none;\r\n\r\n  @include flex-center;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 10;\r\n\r\n  .movie__container {\r\n    height: 90%;\r\n    width: 90%;\r\n    max-width: 768px;\r\n    padding: 2rem;\r\n    margin: 2rem auto;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    overflow-y: auto;\r\n    position: relative;\r\n\r\n    > * {\r\n      width: 100%;\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    > :last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    h2 {\r\n      @include font-h($fs: 2rem, $fw: bold, $tt: uppercase);\r\n\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    h3 {\r\n      margin-bottom: 1rem;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n\r\n      li {\r\n        @include flex-row;\r\n\r\n        flex-wrap: wrap;\r\n        padding: 0.5rem 0;\r\n      }\r\n    }\r\n\r\n    .btn {\r\n      padding: 0.5rem;\r\n      background: transparent;\r\n      border: 1px solid $gray-dark;\r\n      cursor: pointer;\r\n\r\n      @include font-h;\r\n\r\n      background-color: transparent;\r\n      transition: background-color ease-out 250ms;\r\n\r\n      &:hover {\r\n        border: 1px solid $accent;\r\n        background-color: $accent;\r\n        color: #fff;\r\n      }\r\n    }\r\n\r\n    .btn__close-modal {\r\n      width: 1.5rem;\r\n      border: 1px solid transparent;\r\n      background-color: $gray-light;\r\n      margin: 0;\r\n      padding: 0;\r\n      color: $accent;\r\n      font-size: 2rem;\r\n      position: fixed;\r\n      top: 1rem;\r\n      right: 1rem;\r\n      z-index: 11;\r\n    }\r\n  }\r\n\r\n  .movie__details {\r\n    > * {\r\n      width: auto;\r\n    }\r\n\r\n    img {\r\n      width: 210px;\r\n      height: auto;\r\n      margin-right: 1rem;\r\n      margin-bottom: 1rem;\r\n      float: left;\r\n    }\r\n\r\n    .movie__more {\r\n      margin: 0;\r\n      width: auto;\r\n      margin-bottom: 1rem;\r\n\r\n      .item-category {\r\n        margin-right: 0.5rem;\r\n        font-weight: 600;\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__comments {\r\n    clear: both;\r\n\r\n    .item-date,\r\n    .item-name {\r\n      margin-right: 0.5rem;\r\n    }\r\n\r\n    .item-name {\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  .movie__add-comment {\r\n    form {\r\n      width: 100%;\r\n      max-width: 500px;\r\n      margin-top: 0.5rem;\r\n\r\n      @include flex-colum;\r\n\r\n      > * {\r\n        margin-bottom: 0.75rem;\r\n      }\r\n\r\n      > :last-child {\r\n        margin-bottom: 0;\r\n      }\r\n\r\n      .input__field {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        outline: 1px solid $gray-dark;\r\n\r\n        @include font-b;\r\n\r\n        &:focus {\r\n          outline: 1px solid $accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /* FORM VALIDATION */\r\n  .form__message {\r\n    display: none;\r\n    padding: 0.3rem;\r\n    font-size: 0.9rem;\r\n    color: #04bd9e;\r\n  }\r\n\r\n  .error-message {\r\n    color: #fd3f3f;\r\n  }\r\n\r\n  .visible {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.modal__box-display {\r\n  display: flex;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\r\n\r\n$ff-h: 'Karla', sans-serif;\r\n$ff-b: 'Spectral', serif;\r\n$base: #023047;\r\n$accent: #219cba;\r\n$pink: #e68ab4;\r\n$gray-light: #dee2e6;\r\n$gray-dark: #ced4da;\r\n\r\n@mixin font-h($fs:1rem, $fw:300, $lh:1.6rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-h;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n\r\n@mixin font-b($fs:1rem, $fw:300, $lh:1.1rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-b;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n","@mixin flex-colum {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-center {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin mq ($mw:50rem) {\r\n  @media (min-width: $mw) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/style.scss");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/modules/consumeInvolvementAPI.js":
/*!**********************************************!*\
  !*** ./src/modules/consumeInvolvementAPI.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "addComment": () => (/* binding */ addComment),
/* harmony export */   "countComments": () => (/* binding */ countComments)
/* harmony export */ });
const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zggEBXzpFcQqjDxvMhMz/comments';

const getComments = async (movieId) => {
  const connect = await fetch(`${iBaseURL}?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addComment = async (movieId, username, comment) => {
  const connect = await fetch(`${iBaseURL}`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieId,
      username,
      comment,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await connect.text();
  return response;
};

const countComments = (arr) => {
  let count = 0;
  arr.forEach((element) => {
    count += 1;
  });
  return count;
};



/***/ }),

/***/ "./src/modules/consumeTVMazeAPI.js":
/*!*****************************************!*\
  !*** ./src/modules/consumeTVMazeAPI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMovieData)
/* harmony export */ });
const baseURL = ' https://api.tvmaze.com';

const getMovieData = async (index, query) => {
  const connect = await fetch(`${baseURL}/shows?q=${query}`);
  const response = await connect.json().then((dataList) => {
    const shortList = dataList.slice(index, index + 50);
    shortList.map((item) => {
      const container = {
        id: item.id,
        name: item.name,
        genres: item.genres,
        image: item.image,
        end: item.ended,
        rating: item.rating,
        summary: item.summary,
      };
      return container;
    });
    return shortList;
  });
  return response;
};




/***/ }),

/***/ "./src/modules/displayMovieDetails.js":
/*!********************************************!*\
  !*** ./src/modules/displayMovieDetails.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMovieDetails)
/* harmony export */ });
/* harmony import */ var _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumeInvolvementAPI.js */ "./src/modules/consumeInvolvementAPI.js");


const modalBox = document.querySelector('.modal__box');
const modalCloseBtn = document.querySelector('#btn__close-modal');
const commentForm = document.querySelector('#form__comment');
const formMessage = document.querySelector('#form__message');
let timerId = '';

const arrIntoString = (arr) => {
  let str = '';
  arr.forEach((el) => {
    str += `${el} | `;
  });
  return str;
};

const buildMovieDescription = (data) => {
  const movieDetails = document.querySelector('.movie__details');
  movieDetails.setAttribute('data-movieid', data.id);
  movieDetails.innerHTML = `<img src="${data.image.medium}" alt="${data.name} movie image">
        <h2>${data.name}</h2>
        <ul class="movie__more">
          <li>
            <span class="item-category">Genre:</span>
            <p>${arrIntoString(data.genres)}</p>
          </li>
          <li>
            <span class="item-category">Ended:</span>
            <p>${data.ended}</p>
          </li>
          <li>
            <span class="item-category">Raiting:</span>
            <p>${data.rating.average}</p>
          </li>
        </ul>
        ${data.summary}`;
};

const buildMovieComments = (arr) => {
  const movieComments = document.querySelector('.movie__comments');
  movieComments.innerHTML = '';
  const title = document.createElement('h3');
  title.textContent = `Comments (${(0,_consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.countComments)(arr)})`;
  movieComments.appendChild(title);
  const commentList = document.createElement('ul');
  commentList.classList.add('comments__list');
  arr.forEach((comment) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ` <div class="owner">
              <span>${comment.creation_date}</span>
              <span class="item-name">${comment.username}:</span>
            </div>
            <div class="comment">
              <p class="item-comment">${comment.comment}</p>
            </div>`;
    commentList.appendChild(listItem);
  });
  movieComments.appendChild(commentList);
};

const displayMovieDetails = (movie) => {
  buildMovieDescription(movie);
  (0,_consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movie.id).then((list) => {
    buildMovieComments(list);
  });
  modalBox.classList.add('modal__box-display');
};

modalCloseBtn.addEventListener('click', () => {
  modalBox.classList.remove('modal__box-display');
});

const displayMessage = (msg) => {
  clearTimeout(timerId);
  if (msg) {
    formMessage.textContent = msg;
    formMessage.classList.add('error-message');
  }
  formMessage.classList.add('visible');
  timerId = setTimeout(() => {
    formMessage.classList.remove('error-message', 'visible');
  }, 5000);
};

const validString = (str) => {
  if (str.match(/^[a-zA-Z0-9À-ÿ\u00f1\u00d1\u00E0\u00FC_\- ]{1,30}$/)) return true;
  return false;
};

const validForm = (name, comment) => {
  name.value = name.value.trim();
  comment.value = comment.value.trim();
  if (!validString(name.value)) {
    name.focus();
    displayMessage('Name field only allows alphanumeric, hyphens, underscores, and max 30 characters.');
    return false;
  }
  if (comment.value === '' || comment.value.length > 250) {
    comment.focus();
    displayMessage('Insights field allows 1 to 250 characters.');
    return false;
  }
  return true;
};

const sendComment = () => {
  const name = document.querySelector('#inp__username');
  const comment = document.querySelector('#inp__insights');
  const movieId = document.querySelector('.movie__details').getAttribute('data-movieId');

  if (validForm(name, comment)) {
    (0,_consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(movieId, name.value, comment.value).then((ans) => {
      if (ans === 'Created') {
        (0,_consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(movieId).then((list) => {
          buildMovieComments(list);
        });
        name.value = '';
        name.focus();
        comment.value = '';
        formMessage.textContent = 'Comment sent successfully';
        displayMessage();
      } else {
        displayMessage('Comments are not available for now. Try again later.');
      }
    });
  }
};

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendComment();
});



/***/ }),

/***/ "./src/modules/displayMovies.js":
/*!**************************************!*\
  !*** ./src/modules/displayMovies.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMovies)
/* harmony export */ });
/* harmony import */ var _likeFunctionality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeFunctionality */ "./src/modules/likeFunctionality.js");
/* harmony import */ var _displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayMovieDetails.js */ "./src/modules/displayMovieDetails.js");



const displayMovies = async (movieList) => {
  const movieSection = document.querySelector('#movie-section');
  movieSection.innerHTML = '';
  movieList.forEach((item) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'movie-wrapper';
    mainDiv.id = `movie${item.id}`;
    const details = document.createElement('div');
    details.className = 'movie-wrapper__title';
    const img = document.createElement('img');
    img.className = 'movie-wrapper__img';
    img.src = item.image.medium;
    const name = document.createElement('h3');
    name.innerHTML = `${item.name}`;
    const likes = document.createElement('div');
    likes.className = 'movie-wrapper__likes';
    const span = document.createElement('span');
    const like = document.createElement('i');
    like.className = 'fas fa-heart';
    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.innerHTML = 'Comments';
    commentButton.className = 'movie-wrapper__comment-button';
    likes.append(like, span);
    details.append(name, likes);
    commentButton.addEventListener('click', () => {
      (0,_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__["default"])(item);
    });
    mainDiv.append(img, details, commentButton);
    movieSection.appendChild(mainDiv);
    like.addEventListener('click', () => {
      (0,_likeFunctionality__WEBPACK_IMPORTED_MODULE_0__.setLike)(`movie${item.id}`);
      const number = like.parentNode.lastChild.textContent;
      like.parentNode.lastChild.innerHTML = `${Number(number) + 1}`;
    });
  });
  (0,_likeFunctionality__WEBPACK_IMPORTED_MODULE_0__.updateLikes)();
};




/***/ }),

/***/ "./src/modules/likeFunctionality.js":
/*!******************************************!*\
  !*** ./src/modules/likeFunctionality.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateLikes": () => (/* binding */ updateLikes),
/* harmony export */   "setLike": () => (/* binding */ setLike)
/* harmony export */ });
const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const appID = 'zggEBXzpFcQqjDxvMhMz';

const setLike = async (id) => {
  const connect = await fetch(`${baseURL}${appID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const response = await connect.text();
  return response;
};

const getLike = async (id) => {
  const connect = await fetch(`${baseURL}${appID}/likes?item_id=${id}`);
  const response = await connect.json();
  return response;
};
// fetch(baseURL, {
//   method: 'POST',
//   headers: { 'Content-type': 'application/JSON' },
// }).then((response) => console.log(response.text()));
// // });

const updateLikes = () => {
  getLike().then((response) => {
    response.forEach((element) => {
      const container = document.querySelector(`#${element.item_id}`);
      container.children[1].children[1].children[1].innerHTML = `${element.likes}`;
    });
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/consumeTVMazeAPI.js */ "./src/modules/consumeTVMazeAPI.js");
/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMovies.js */ "./src/modules/displayMovies.js");




const query = 'action';

(0,_modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0, query).then((movieList) => {
  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movieList);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9DQUFvQztBQUNwRCxJQUFJO0FBQ0osT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdCQUFnQjtBQUNuRSxtRUFBbUUsY0FBYztBQUNqRixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDZ0M7Ozs7Ozs7VUNqQ2hDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ04yQjtBQUM4QjtBQUNGO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLHdFQUFZO0FBQ1osRUFBRSxxRUFBYTtBQUNmLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnN1bWVUVk1hemVBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VGdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJsYTppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVNwZWN0cmFsOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciBuYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVxcblxcbiNtb3ZpZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAzMHB4IDMlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDJweDtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZjgxYjQwO1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjYTcwMDFjO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHg7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbiB7XFxuICB3aWR0aDogMjEwcHg7XFxufVxcblxcbi5tb2RhbF9fYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjkpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgLyogRk9STSBWQUxJREFUSU9OICovXFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNzY4cHg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgPiAqIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB1bCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIC5idG4ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIC5idG46aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOWNiYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTljYmE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgLmJ0bl9fY2xvc2UtbW9kYWwge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBjb2xvcjogIzIxOWNiYTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMXJlbTtcXG4gIHJpZ2h0OiAxcmVtO1xcbiAgei1pbmRleDogMTE7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyA+ICoge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyBpbWcge1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgLm1vdmllX19tb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIC5tb3ZpZV9fbW9yZSAuaXRlbS1jYXRlZ29yeSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tZGF0ZSxcXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzIC5pdGVtLW5hbWUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gLmlucHV0X19maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjY2VkNGRhO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4xcmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gLmlucHV0X19maWVsZDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgIzIxOWNiYTtcXG59XFxuLm1vZGFsX19ib3ggLmZvcm1fX21lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6ICMwNGJkOWU7XFxufVxcbi5tb2RhbF9fYm94IC5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjZmQzZjNmO1xcbn1cXG4ubW9kYWxfX2JveCAudmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsX19ib3gtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fdHlwb2dyYXBoeS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7OztFQUdFLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQURGOztBQUlBO0VDU0UsOEJBbEJLO0VBbUJMLGVBRmdCO0VBR2hCLGdCQUgwQjtFQUkxQixzQkFKK0M7RUFLL0MsbUJBTG1DO0VBTW5DLGNBdEJLO0VBdUJMLHNCQVAwRTtBREY1RTs7QUFGQTtFRVJFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUZRQSw4QkFBQTtBQU9GO0FBSkk7RUFDRSxnQkFBQTtFRWZKLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUZzQkY7QUFMUTtFQUNFLHFCQUFBO0VDUlIsOEJBbEJLO0VBbUJMLGVBRmdCO0VBR2hCLGdCQUgwQjtFQUkxQixzQkFKK0M7RUFLL0MsbUJBTG1DO0VBTW5DLGNBdEJLO0VBdUJMLHNCQVAwRTtBRHVCNUU7O0FBTEE7RUU5QkUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFRjhCQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQVVGO0FBUkU7RUUvQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFRitDRSxtQkFBQTtFQUNBLFFBQUE7QUFZSjtBQVZJO0VFOUNGLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUY4Q0ksOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWNOO0FBWk07RUV2REosYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFRnVETSxRQUFBO0FBZ0JSO0FBYlU7RUFDRSxjQUFBO0FBZVo7QUFaVTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQWNaO0FBUkk7RUFDRSxZQUFBO0FBVU47O0FBTEE7RUFDRSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VFM0VBLHVCQUFBO0VBQ0EsbUJBQUE7RUY4RUEsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBaUpBLG9CQUFBO0FBeklGO0FBTkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFRSjtBQU5JO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FBUU47QUFMSTtFQUNFLGdCQUFBO0FBT047QUFKSTtFQzlHRixnQ0FUSztFQVVMLGVEOEd5QjtFQzdHekIsaUJENkdvQztFQzVHcEMsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQVpLO0VBYUwseUJEeUcrQztFQUUzQyxtQkFBQTtBQVdOO0FBUkk7RUFDRSxtQkFBQTtBQVVOO0FBUEk7RUFDRSxnQkFBQTtBQVNOO0FBUE07RUU5SEosYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFRjhITSxlQUFBO0VBQ0EsaUJBQUE7QUFXUjtBQVBJO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VDdklKLGdDQVRLO0VBVUwsZUFGZ0I7RUFHaEIsZ0JBSDBCO0VBSTFCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0FaSztFQWFMLHNCQVAwRTtFRDRJdEUsNkJBQUE7RUFDQSwyQ0FBQTtBQWFOO0FBWE07RUFDRSx5QkFBQTtFQUNBLHlCQ3RKQztFRHVKRCxXQUFBO0FBYVI7QUFUSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQzVKTztFRDZKUCxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNDaktHO0VEa0tILGVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBV047QUFOSTtFQUNFLFdBQUE7QUFRTjtBQUxJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU9OO0FBSkk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBTU47QUFKTTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFNUjtBQURFO0VBQ0UsV0FBQTtBQUdKO0FBREk7O0VBRUUsb0JBQUE7QUFHTjtBQUFJO0VBQ0UsZ0JBQUE7QUFFTjtBQUdJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUV4TkosYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBRndORjtBQUNNO0VBQ0Usc0JBQUE7QUFDUjtBQUVNO0VBQ0UsZ0JBQUE7QUFBUjtBQUdNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUNwTk4sOEJBbEJLO0VBbUJMLGVBRmdCO0VBR2hCLGdCQUgwQjtFQUkxQixzQkFKK0M7RUFLL0MsbUJBTG1DO0VBTW5DLGNBdEJLO0VBdUJMLHNCQVAwRTtBRDJONUU7QUFGUTtFQUNFLDBCQUFBO0FBSVY7QUFHRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTtFQUNFLGNBQUE7QUFGSjtBQUtFO0VBQ0UsY0FBQTtBQUhKOztBQU9BO0VBQ0UsYUFBQTtBQUpGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcclxcbkBpbXBvcnQgJ21peGlucyc7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBAaW5jbHVkZSBmb250LWI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgICAgIGxpIHtcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtYjtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuI21vdmllLXNlY3Rpb24ge1xcclxcbiAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuXFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZ2FwOiAzMHB4IDMlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAubW92aWUtd3JhcHBlciB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW07XFxyXFxuXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICAubW92aWUtd3JhcHBlcl9fdGl0bGUge1xcclxcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgIHdpZHRoOiAyMTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDM2cHg7XFxyXFxuXFxyXFxuICAgICAgLm1vdmllLXdyYXBwZXJfX2xpa2VzIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgICAgICAgZ2FwOiAycHg7XFxyXFxuXFxyXFxuICAgICAgICBpIHtcXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYigyNDgsIDI3LCA2NCk7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMTY3LCAwLCAyOCk7XFxyXFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA1cHg7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uIHtcXHJcXG4gICAgICB3aWR0aDogMjEwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19ib3gge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCwgMC45KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcblxcclxcbiAgLm1vdmllX19jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICA+ICoge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgPiA6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMiB7XFxyXFxuICAgICAgQGluY2x1ZGUgZm9udC1oKCRmczogMnJlbSwgJGZ3OiBib2xkLCAkdHQ6IHVwcGVyY2FzZSk7XFxyXFxuXFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoMyB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB1bCB7XFxyXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHJcXG4gICAgICBsaSB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnRuIHtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGdyYXktZGFyaztcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZm9udC1oO1xcclxcblxcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnRuX19jbG9zZS1tb2RhbCB7XFxyXFxuICAgICAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodDtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICBjb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIHRvcDogMXJlbTtcXHJcXG4gICAgICByaWdodDogMXJlbTtcXHJcXG4gICAgICB6LWluZGV4OiAxMTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllX19kZXRhaWxzIHtcXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAyMTBweDtcXHJcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vdmllX19tb3JlIHtcXHJcXG4gICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAuaXRlbS1jYXRlZ29yeSB7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfX2NvbW1lbnRzIHtcXHJcXG4gICAgY2xlYXI6IGJvdGg7XFxyXFxuXFxyXFxuICAgIC5pdGVtLWRhdGUsXFxyXFxuICAgIC5pdGVtLW5hbWUge1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pdGVtLW5hbWUge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9fYWRkLWNvbW1lbnQge1xcclxcbiAgICBmb3JtIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcclxcblxcclxcbiAgICAgID4gKiB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICA+IDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5pbnB1dF9fZmllbGQge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgJGdyYXktZGFyaztcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtYjtcXHJcXG5cXHJcXG4gICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgJGFjY2VudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEZPUk0gVkFMSURBVElPTiAqL1xcclxcbiAgLmZvcm1fX21lc3NhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBjb2xvcjogIzA0YmQ5ZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgY29sb3I6ICNmZDNmM2Y7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudmlzaWJsZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2JveC1kaXNwbGF5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FybGE6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1TcGVjdHJhbDppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MSwyMDA7MSwzMDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuJGZmLWg6ICdLYXJsYScsIHNhbnMtc2VyaWY7XFxyXFxuJGZmLWI6ICdTcGVjdHJhbCcsIHNlcmlmO1xcclxcbiRiYXNlOiAjMDIzMDQ3O1xcclxcbiRhY2NlbnQ6ICMyMTljYmE7XFxyXFxuJHBpbms6ICNlNjhhYjQ7XFxyXFxuJGdyYXktbGlnaHQ6ICNkZWUyZTY7XFxyXFxuJGdyYXktZGFyazogI2NlZDRkYTtcXHJcXG5cXHJcXG5AbWl4aW4gZm9udC1oKCRmczoxcmVtLCAkZnc6MzAwLCAkbGg6MS42cmVtLCAkbHM6bm9ybWFsLCAkY29sb3I6ICRiYXNlLCAkdHQ6bm9ybWFsKSB7XFxyXFxuICBmb250LWZhbWlseTogJGZmLWg7XFxyXFxuICBmb250LXNpemU6ICRmcztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkZnc7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogJGxzO1xcclxcbiAgbGluZS1oZWlnaHQ6ICRsaDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogJHR0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZm9udC1iKCRmczoxcmVtLCAkZnc6MzAwLCAkbGg6MS4xcmVtLCAkbHM6bm9ybWFsLCAkY29sb3I6ICRiYXNlLCAkdHQ6bm9ybWFsKSB7XFxyXFxuICBmb250LWZhbWlseTogJGZmLWI7XFxyXFxuICBmb250LXNpemU6ICRmcztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAkZnc7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogJGxzO1xcclxcbiAgbGluZS1oZWlnaHQ6ICRsaDtcXHJcXG4gIGNvbG9yOiAkY29sb3I7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogJHR0O1xcclxcbn1cXHJcXG5cIixcIkBtaXhpbiBmbGV4LWNvbHVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmbGV4LXJvdyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbXEgKCRtdzo1MHJlbSkge1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtdykge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgaUJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvemdnRUJYenBGY1FxakR4dk1oTXovY29tbWVudHMnO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtpQmFzZVVSTH0/aXRlbV9pZD0ke21vdmllSWR9YCk7XG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9IGF3YWl0IGNvbm5lY3QuanNvbigpO1xuICBpZiAoY29tbWVudHNMaXN0LmVycm9yKSByZXR1cm4gW107XG4gIHJldHVybiBjb21tZW50c0xpc3Q7XG59O1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKG1vdmllSWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtpQmFzZVVSTH1gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogbW92aWVJZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3QudGV4dCgpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBjb3VudENvbW1lbnRzID0gKGFycikgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGNvdW50ICs9IDE7XG4gIH0pO1xuICByZXR1cm4gY291bnQ7XG59O1xuXG5leHBvcnQgeyBnZXRDb21tZW50cywgYWRkQ29tbWVudCwgY291bnRDb21tZW50cyB9OyIsImNvbnN0IGJhc2VVUkwgPSAnIGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20nO1xuXG5jb25zdCBnZXRNb3ZpZURhdGEgPSBhc3luYyAoaW5kZXgsIHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9zaG93cz9xPSR7cXVlcnl9YCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC5qc29uKCkudGhlbigoZGF0YUxpc3QpID0+IHtcbiAgICBjb25zdCBzaG9ydExpc3QgPSBkYXRhTGlzdC5zbGljZShpbmRleCwgaW5kZXggKyA1MCk7XG4gICAgc2hvcnRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBnZW5yZXM6IGl0ZW0uZ2VucmVzLFxuICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgZW5kOiBpdGVtLmVuZGVkLFxuICAgICAgICByYXRpbmc6IGl0ZW0ucmF0aW5nLFxuICAgICAgICBzdW1tYXJ5OiBpdGVtLnN1bW1hcnksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hvcnRMaXN0O1xuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgZ2V0TW92aWVEYXRhIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGdldENvbW1lbnRzLCBhZGRDb21tZW50LCBjb3VudENvbW1lbnRzIH0gZnJvbSAnLi9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94Jyk7XG5jb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2NvbW1lbnQnKTtcbmNvbnN0IGZvcm1NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX21lc3NhZ2UnKTtcbmxldCB0aW1lcklkID0gJyc7XG5cbmNvbnN0IGFyckludG9TdHJpbmcgPSAoYXJyKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgc3RyICs9IGAke2VsfSB8IGA7XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgYnVpbGRNb3ZpZURlc2NyaXB0aW9uID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbW92aWVEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX19kZXRhaWxzJyk7XG4gIG1vdmllRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVpZCcsIGRhdGEuaWQpO1xuICBtb3ZpZURldGFpbHMuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke2RhdGEubmFtZX0gbW92aWUgaW1hZ2VcIj5cbiAgICAgICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vdmllX19tb3JlXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+R2VucmU6PC9zcGFuPlxuICAgICAgICAgICAgPHA+JHthcnJJbnRvU3RyaW5nKGRhdGEuZ2VucmVzKX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5FbmRlZDo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2RhdGEuZW5kZWR9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+UmFpdGluZzo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2RhdGEucmF0aW5nLmF2ZXJhZ2V9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgICR7ZGF0YS5zdW1tYXJ5fWA7XG59O1xuXG5jb25zdCBidWlsZE1vdmllQ29tbWVudHMgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IG1vdmllQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVfX2NvbW1lbnRzJyk7XG4gIG1vdmllQ29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBgQ29tbWVudHMgKCR7Y291bnRDb21tZW50cyhhcnIpfSlgO1xuICBtb3ZpZUNvbW1lbnRzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb21tZW50TGlzdC5jbGFzc0xpc3QuYWRkKCdjb21tZW50c19fbGlzdCcpO1xuICBhcnIuZm9yRWFjaCgoY29tbWVudCkgPT4ge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaXN0SXRlbS5pbm5lckhUTUwgPSBgIDxkaXYgY2xhc3M9XCJvd25lclwiPlxuICAgICAgICAgICAgICA8c3Bhbj4ke2NvbW1lbnQuY3JlYXRpb25fZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+JHtjb21tZW50LnVzZXJuYW1lfTo8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21tZW50XCI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1jb21tZW50XCI+JHtjb21tZW50LmNvbW1lbnR9PC9wPlxuICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBjb21tZW50TGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gIH0pO1xuICBtb3ZpZUNvbW1lbnRzLmFwcGVuZENoaWxkKGNvbW1lbnRMaXN0KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZURldGFpbHMgPSAobW92aWUpID0+IHtcbiAgYnVpbGRNb3ZpZURlc2NyaXB0aW9uKG1vdmllKTtcbiAgZ2V0Q29tbWVudHMobW92aWUuaWQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICBidWlsZE1vdmllQ29tbWVudHMobGlzdCk7XG4gIH0pO1xuICBtb2RhbEJveC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYm94LWRpc3BsYXknKTtcbn07XG5cbm1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsQm94LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ib3gtZGlzcGxheScpO1xufSk7XG5cbmNvbnN0IGRpc3BsYXlNZXNzYWdlID0gKG1zZykgPT4ge1xuICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gIGlmIChtc2cpIHtcbiAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9IG1zZztcbiAgICBmb3JtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gIH1cbiAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItbWVzc2FnZScsICd2aXNpYmxlJyk7XG4gIH0sIDUwMDApO1xufTtcblxuY29uc3QgdmFsaWRTdHJpbmcgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIubWF0Y2goL15bYS16QS1aMC05w4Atw79cXHUwMGYxXFx1MDBkMVxcdTAwRTBcXHUwMEZDX1xcLSBdezEsMzB9JC8pKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdmFsaWRGb3JtID0gKG5hbWUsIGNvbW1lbnQpID0+IHtcbiAgbmFtZS52YWx1ZSA9IG5hbWUudmFsdWUudHJpbSgpO1xuICBjb21tZW50LnZhbHVlID0gY29tbWVudC52YWx1ZS50cmltKCk7XG4gIGlmICghdmFsaWRTdHJpbmcobmFtZS52YWx1ZSkpIHtcbiAgICBuYW1lLmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoJ05hbWUgZmllbGQgb25seSBhbGxvd3MgYWxwaGFudW1lcmljLCBoeXBoZW5zLCB1bmRlcnNjb3JlcywgYW5kIG1heCAzMCBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoY29tbWVudC52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZS5sZW5ndGggPiAyNTApIHtcbiAgICBjb21tZW50LmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoJ0luc2lnaHRzIGZpZWxkIGFsbG93cyAxIHRvIDI1MCBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNlbmRDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9fdXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBfX2luc2lnaHRzJyk7XG4gIGNvbnN0IG1vdmllSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVfX2RldGFpbHMnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVJZCcpO1xuXG4gIGlmICh2YWxpZEZvcm0obmFtZSwgY29tbWVudCkpIHtcbiAgICBhZGRDb21tZW50KG1vdmllSWQsIG5hbWUudmFsdWUsIGNvbW1lbnQudmFsdWUpLnRoZW4oKGFucykgPT4ge1xuICAgICAgaWYgKGFucyA9PT0gJ0NyZWF0ZWQnKSB7XG4gICAgICAgIGdldENvbW1lbnRzKG1vdmllSWQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgICAgICBidWlsZE1vdmllQ29tbWVudHMobGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBuYW1lLnZhbHVlID0gJyc7XG4gICAgICAgIG5hbWUuZm9jdXMoKTtcbiAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDb21tZW50IHNlbnQgc3VjY2Vzc2Z1bGx5JztcbiAgICAgICAgZGlzcGxheU1lc3NhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKCdDb21tZW50cyBhcmUgbm90IGF2YWlsYWJsZSBmb3Igbm93LiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2VuZENvbW1lbnQoKTtcbn0pO1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVEZXRhaWxzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyB1cGRhdGVMaWtlcywgc2V0TGlrZSB9IGZyb20gJy4vbGlrZUZ1bmN0aW9uYWxpdHknO1xyXG5pbXBvcnQgZGlzcGxheU1vdmllRGV0YWlscyBmcm9tICcuL2Rpc3BsYXlNb3ZpZURldGFpbHMuanMnO1xyXG5cclxuY29uc3QgZGlzcGxheU1vdmllcyA9IGFzeW5jIChtb3ZpZUxpc3QpID0+IHtcclxuICBjb25zdCBtb3ZpZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92aWUtc2VjdGlvbicpO1xyXG4gIG1vdmllU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcclxuICBtb3ZpZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFpbkRpdi5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcic7XHJcbiAgICBtYWluRGl2LmlkID0gYG1vdmllJHtpdGVtLmlkfWA7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXRhaWxzLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX190aXRsZSc7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9faW1nJztcclxuICAgIGltZy5zcmMgPSBpdGVtLmltYWdlLm1lZGl1bTtcclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHtpdGVtLm5hbWV9YDtcclxuICAgIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsaWtlcy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fbGlrZXMnO1xyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICBsaWtlLmNsYXNzTmFtZSA9ICdmYXMgZmEtaGVhcnQnO1xyXG4gICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgY29tbWVudEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBjb21tZW50QnV0dG9uLmlubmVySFRNTCA9ICdDb21tZW50cyc7XHJcbiAgICBjb21tZW50QnV0dG9uLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbic7XHJcbiAgICBsaWtlcy5hcHBlbmQobGlrZSwgc3Bhbik7XHJcbiAgICBkZXRhaWxzLmFwcGVuZChuYW1lLCBsaWtlcyk7XHJcbiAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBkaXNwbGF5TW92aWVEZXRhaWxzKGl0ZW0pO1xyXG4gICAgfSk7XHJcbiAgICBtYWluRGl2LmFwcGVuZChpbWcsIGRldGFpbHMsIGNvbW1lbnRCdXR0b24pO1xyXG4gICAgbW92aWVTZWN0aW9uLmFwcGVuZENoaWxkKG1haW5EaXYpO1xyXG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgc2V0TGlrZShgbW92aWUke2l0ZW0uaWR9YCk7XHJcbiAgICAgIGNvbnN0IG51bWJlciA9IGxpa2UucGFyZW50Tm9kZS5sYXN0Q2hpbGQudGV4dENvbnRlbnQ7XHJcbiAgICAgIGxpa2UucGFyZW50Tm9kZS5sYXN0Q2hpbGQuaW5uZXJIVE1MID0gYCR7TnVtYmVyKG51bWJlcikgKyAxfWA7XHJcbiAgICB9KTtcclxuICB9KTtcclxuICB1cGRhdGVMaWtlcygpO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZGlzcGxheU1vdmllcyBhcyBkZWZhdWx0IH07XHJcbiIsImNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcclxuY29uc3QgYXBwSUQgPSAnemdnRUJYenBGY1FxakR4dk1oTXonO1xyXG5cclxuY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7YXBwSUR9L2xpa2VzL2AsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcclxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9KU09OJyB9LFxyXG4gIH0pO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XHJcbiAgcmV0dXJuIHJlc3BvbnNlO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7YXBwSUR9L2xpa2VzP2l0ZW1faWQ9JHtpZH1gKTtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3QuanNvbigpO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuLy8gZmV0Y2goYmFzZVVSTCwge1xyXG4vLyAgIG1ldGhvZDogJ1BPU1QnLFxyXG4vLyAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9KU09OJyB9LFxyXG4vLyB9KS50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UudGV4dCgpKSk7XHJcbi8vIC8vIH0pO1xyXG5cclxuY29uc3QgdXBkYXRlTGlrZXMgPSAoKSA9PiB7XHJcbiAgZ2V0TGlrZSgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VsZW1lbnQuaXRlbV9pZH1gKTtcclxuICAgICAgY29udGFpbmVyLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IGAke2VsZW1lbnQubGlrZXN9YDtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgdXBkYXRlTGlrZXMsIHNldExpa2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgZ2V0TW92aWVEYXRhIGZyb20gJy4vbW9kdWxlcy9jb25zdW1lVFZNYXplQVBJLmpzJztcclxuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMnO1xyXG5cclxuY29uc3QgcXVlcnkgPSAnYWN0aW9uJztcclxuXHJcbmdldE1vdmllRGF0YSgwLCBxdWVyeSkudGhlbigobW92aWVMaXN0KSA9PiB7XHJcbiAgZGlzcGxheU1vdmllcyhtb3ZpZUxpc3QpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9