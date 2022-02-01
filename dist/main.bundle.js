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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nheader nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nheader nav ul li a {\n  text-decoration: none;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n\n#movie-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n}\n#movie-section .movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  gap: 5px;\n}\n#movie-section .movie-wrapper .movie-wrapper__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  width: 210px;\n  height: 36px;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button {\n  width: 210px;\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(128, 128, 128, 0.9);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  /* FORM VALIDATION */\n}\n.modal__box .movie__container {\n  height: 90%;\n  width: 90%;\n  max-width: 768px;\n  padding: 2rem;\n  margin: 2rem auto;\n  background-color: #fff;\n  border-radius: 5px;\n  overflow-y: auto;\n  position: relative;\n}\n.modal__box .movie__container > * {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__container h2 {\n  font-family: \"Karla\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container h3 {\n  margin-bottom: 1rem;\n}\n.modal__box .movie__container ul {\n  list-style: none;\n}\n.modal__box .movie__container ul li {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n}\n.modal__box .movie__container .btn {\n  padding: 0.5rem;\n  background: transparent;\n  border: 1px solid #ced4da;\n  cursor: pointer;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: normal;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n.modal__box .movie__container .btn:hover {\n  border: 1px solid #219cba;\n  background-color: #219cba;\n  color: #fff;\n}\n.modal__box .movie__container .btn__close-modal {\n  width: 1.5rem;\n  border: 1px solid transparent;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 11;\n}\n.modal__box .movie__details > * {\n  width: auto;\n}\n.modal__box .movie__details img {\n  width: 210px;\n  height: auto;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.modal__box .movie__details .movie__more {\n  margin: 0;\n  width: auto;\n  margin-bottom: 1rem;\n}\n.modal__box .movie__details .movie__more .item-category {\n  margin-right: 0.5rem;\n  font-weight: 600;\n}\n.modal__box .movie__comments {\n  clear: both;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__comments .item-name {\n  margin-right: 0.5rem;\n}\n.modal__box .movie__comments .item-name {\n  font-weight: 600;\n}\n.modal__box .movie__add-comment form {\n  width: 100%;\n  max-width: 500px;\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .movie__add-comment form > * {\n  margin-bottom: 0.75rem;\n}\n.modal__box .movie__add-comment form > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__add-comment form .input__field {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  outline: 1px solid #ced4da;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n.modal__box .movie__add-comment form .input__field:focus {\n  outline: 1px solid #219cba;\n}\n.modal__box .form__message {\n  display: none;\n  padding: 0.3rem;\n  font-size: 0.9rem;\n  color: #04bd9e;\n}\n.modal__box .error-message {\n  color: #fd3f3f;\n}\n.modal__box .visible {\n  display: block;\n}\n\n.modal__box-display {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'typography';\r\n@import 'mixins';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  @include font-b;\r\n}\r\n\r\nheader {\r\n  @include flex-row;\r\n\r\n  justify-content: space-between;\r\n\r\n  nav {\r\n    ul {\r\n      list-style: none;\r\n\r\n      @include flex-row;\r\n\r\n      li {\r\n        a {\r\n          text-decoration: none;\r\n\r\n          @include font-b;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#movie-section {\r\n  @include flex-row;\r\n\r\n  flex-wrap: wrap;\r\n  width: 90%;\r\n  margin: auto;\r\n  gap: 30px 3%;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n\r\n  .movie-wrapper {\r\n    @include flex-colum;\r\n\r\n    align-items: center;\r\n    gap: 5px;\r\n\r\n    .movie-wrapper__title {\r\n      @include flex-row;\r\n\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      gap: 5px;\r\n      width: 210px;\r\n      height: 36px;\r\n    }\r\n\r\n    .movie-wrapper__comment-button {\r\n      width: 210px;\r\n    }\r\n  }\r\n}\r\n\r\n.modal__box {\r\n  width: 100%;\r\n  background-color: rgb(128, 128, 128, 0.9);\r\n  display: none;\r\n\r\n  @include flex-center;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 10;\r\n\r\n  .movie__container {\r\n    height: 90%;\r\n    width: 90%;\r\n    max-width: 768px;\r\n    padding: 2rem;\r\n    margin: 2rem auto;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    overflow-y: auto;\r\n    position: relative;\r\n\r\n    > * {\r\n      width: 100%;\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    > :last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    h2 {\r\n      @include font-h($fs: 2rem, $fw: bold, $tt: uppercase);\r\n\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    h3 {\r\n      margin-bottom: 1rem;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n\r\n      li {\r\n        @include flex-row;\r\n\r\n        flex-wrap: wrap;\r\n        padding: 0.5rem 0;\r\n      }\r\n    }\r\n\r\n    .btn {\r\n      padding: 0.5rem;\r\n      background: transparent;\r\n      border: 1px solid $gray-dark;\r\n      cursor: pointer;\r\n\r\n      @include font-h;\r\n\r\n      background-color: transparent;\r\n      transition: background-color ease-out 250ms;\r\n\r\n      &:hover {\r\n        border: 1px solid $accent;\r\n        background-color: $accent;\r\n        color: #fff;\r\n      }\r\n    }\r\n\r\n    .btn__close-modal {\r\n      width: 1.5rem;\r\n      border: 1px solid transparent;\r\n      margin: 0;\r\n      padding: 0;\r\n      position: absolute;\r\n      top: 1rem;\r\n      right: 1rem;\r\n      z-index: 11;\r\n    }\r\n  }\r\n\r\n  .movie__details {\r\n    > * {\r\n      width: auto;\r\n    }\r\n\r\n    img {\r\n      width: 210px;\r\n      height: auto;\r\n      margin-right: 1rem;\r\n      margin-bottom: 1rem;\r\n      float: left;\r\n    }\r\n\r\n    .movie__more {\r\n      margin: 0;\r\n      width: auto;\r\n      margin-bottom: 1rem;\r\n\r\n      .item-category {\r\n        margin-right: 0.5rem;\r\n        font-weight: 600;\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__comments {\r\n    clear: both;\r\n\r\n    .item-date,\r\n    .item-name {\r\n      margin-right: 0.5rem;\r\n    }\r\n\r\n    .item-name {\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  .movie__add-comment {\r\n    form {\r\n      width: 100%;\r\n      max-width: 500px;\r\n      margin-top: 0.5rem;\r\n\r\n      @include flex-colum;\r\n\r\n      > * {\r\n        margin-bottom: 0.75rem;\r\n      }\r\n\r\n      > :last-child {\r\n        margin-bottom: 0;\r\n      }\r\n\r\n      .input__field {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        outline: 1px solid $gray-dark;\r\n\r\n        @include font-b;\r\n\r\n        &:focus {\r\n          outline: 1px solid $accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /* FORM VALIDATION */\r\n  .form__message {\r\n    display: none;\r\n    padding: 0.3rem;\r\n    font-size: 0.9rem;\r\n    color: #04bd9e;\r\n  }\r\n\r\n  .error-message {\r\n    color: #fd3f3f;\r\n  }\r\n\r\n  .visible {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.modal__box-display {\r\n  display: flex;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\r\n\r\n$ff-h: 'Karla', sans-serif;\r\n$ff-b: 'Spectral', serif;\r\n$base: #023047;\r\n$accent: #219cba;\r\n$pink: #e68ab4;\r\n$gray-light: #dee2e6;\r\n$gray-dark: #ced4da;\r\n\r\n@mixin font-h($fs:1rem, $fw:300, $lh:1.6rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-h;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n\r\n@mixin font-b($fs:1rem, $fw:300, $lh:1.1rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-b;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n","@mixin flex-colum {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-center {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin mq ($mw:50rem) {\r\n  @media (min-width: $mw) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
/* harmony export */   "addComment": () => (/* binding */ addComment)
/* harmony export */ });
const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zggEBXzpFcQqjDxvMhMz/comments';

const getComments = async (movieId) => {
  const connect = await fetch(`${iBaseURL}?item_id=${movieId}`);
  const commentsList = await connect.json();
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
  const response = await connect.json();
  return response;
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
  const title = document.createElement('h3');
  title.textContent = `Comments (${arr.length})`;
  movieComments.appendChild(title);
  const commentList = document.createElement('ul');
  commentList.classList.add('comments__list');
  movieComments.forEach((comment) => {
    const listItem = document.querySelector('li');
    listItem.innerHTML = ` <div class="owner">
              <span>${comment.creation_date}</span>
              <span class="item-name">${comment.username}:</span>
            </div>
            <div class="comment">
              <p class="item-comment">${comment.comment}</p>
            </div>`;
    commentList.appendChild(listItem);
  });
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
/* harmony import */ var _displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayMovieDetails.js */ "./src/modules/displayMovieDetails.js");


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
    const like = document.createElement('i');
    like.className = 'far fa-heart';
    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.innerHTML = 'Comments';
    commentButton.className = 'movie-wrapper__comment-button';
    commentButton.addEventListener('click', () => {
      (0,_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item);
    });
    details.append(name, like);
    mainDiv.append(img, details, commentButton);
    movieSection.appendChild(mainDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSEFBcUgsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sc0NBQXNDLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQy9RO0FBQ0Esb0VBQW9FLDJCQUEyQixlQUFlLGNBQWMsNEJBQTRCLEdBQUcsVUFBVSxxQ0FBcUMsb0JBQW9CLHFCQUFxQiwyQkFBMkIsd0JBQXdCLG1CQUFtQiwyQkFBMkIsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsZ0NBQWdDLDRCQUE0QixtQ0FBbUMsR0FBRyxpQkFBaUIscUJBQXFCLGtCQUFrQix3QkFBd0IsZ0NBQWdDLDRCQUE0QixHQUFHLHNCQUFzQiwwQkFBMEIscUNBQXFDLG9CQUFvQixxQkFBcUIsMkJBQTJCLHdCQUF3QixtQkFBbUIsMkJBQTJCLEdBQUcsb0JBQW9CLGtCQUFrQix3QkFBd0IsZ0NBQWdDLDRCQUE0QixvQkFBb0IsZUFBZSxpQkFBaUIsaUJBQWlCLDRCQUE0QiwwQkFBMEIsR0FBRyxpQ0FBaUMsa0JBQWtCLDJCQUEyQixnQ0FBZ0MsNEJBQTRCLHdCQUF3QixhQUFhLEdBQUcsdURBQXVELGtCQUFrQix3QkFBd0IsZ0NBQWdDLDRCQUE0QixtQ0FBbUMsd0JBQXdCLGFBQWEsaUJBQWlCLGlCQUFpQixHQUFHLGdFQUFnRSxpQkFBaUIsR0FBRyxpQkFBaUIsZ0JBQWdCLCtDQUErQyxrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsV0FBVyxZQUFZLGFBQWEsY0FBYyxnQkFBZ0IsNEJBQTRCLGlDQUFpQyxnQkFBZ0IsZUFBZSxxQkFBcUIsa0JBQWtCLHNCQUFzQiwyQkFBMkIsdUJBQXVCLHFCQUFxQix1QkFBdUIsR0FBRyxxQ0FBcUMsZ0JBQWdCLHdCQUF3QixHQUFHLCtDQUErQyxxQkFBcUIsR0FBRyxvQ0FBb0MsdUNBQXVDLG9CQUFvQixzQkFBc0IsMkJBQTJCLHdCQUF3QixtQkFBbUIsOEJBQThCLHdCQUF3QixHQUFHLG9DQUFvQyx3QkFBd0IsR0FBRyxvQ0FBb0MscUJBQXFCLEdBQUcsdUNBQXVDLGtCQUFrQix3QkFBd0IsZ0NBQWdDLDRCQUE0QixvQkFBb0Isc0JBQXNCLEdBQUcsc0NBQXNDLG9CQUFvQiw0QkFBNEIsOEJBQThCLG9CQUFvQix1Q0FBdUMsb0JBQW9CLHFCQUFxQiwyQkFBMkIsd0JBQXdCLG1CQUFtQiwyQkFBMkIsa0NBQWtDLGdEQUFnRCxHQUFHLDRDQUE0Qyw4QkFBOEIsOEJBQThCLGdCQUFnQixHQUFHLG1EQUFtRCxrQkFBa0Isa0NBQWtDLGNBQWMsZUFBZSx1QkFBdUIsY0FBYyxnQkFBZ0IsZ0JBQWdCLEdBQUcsbUNBQW1DLGdCQUFnQixHQUFHLG1DQUFtQyxpQkFBaUIsaUJBQWlCLHVCQUF1Qix3QkFBd0IsZ0JBQWdCLEdBQUcsNENBQTRDLGNBQWMsZ0JBQWdCLHdCQUF3QixHQUFHLDJEQUEyRCx5QkFBeUIscUJBQXFCLEdBQUcsZ0NBQWdDLGdCQUFnQixHQUFHLHFGQUFxRix5QkFBeUIsR0FBRywyQ0FBMkMscUJBQXFCLEdBQUcsd0NBQXdDLGdCQUFnQixxQkFBcUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLDRCQUE0QixHQUFHLDRDQUE0QywyQkFBMkIsR0FBRyxzREFBc0QscUJBQXFCLEdBQUcsc0RBQXNELGdCQUFnQixvQkFBb0IsaUJBQWlCLCtCQUErQixxQ0FBcUMsb0JBQW9CLHFCQUFxQiwyQkFBMkIsd0JBQXdCLG1CQUFtQiwyQkFBMkIsR0FBRyw0REFBNEQsK0JBQStCLEdBQUcsOEJBQThCLGtCQUFrQixvQkFBb0Isc0JBQXNCLG1CQUFtQixHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyx3QkFBd0IsbUJBQW1CLEdBQUcseUJBQXlCLGtCQUFrQixHQUFHLE9BQU8sb0tBQW9LLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFlBQVksWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsUUFBUSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxlQUFlLGNBQWMsYUFBYSxXQUFXLGFBQWEsWUFBWSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtB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Q3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDOEI7QUFDRjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSx3RUFBWTtBQUNaLEVBQUUscUVBQWE7QUFDZixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29uc3VtZUludm9sdmVtZW50QVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb25zdW1lVFZNYXplQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TW92aWVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJsYTppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVNwZWN0cmFsOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciBuYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVxcblxcbiNtb3ZpZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAzMHB4IDMlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiAzNnB4O1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24ge1xcbiAgd2lkdGg6IDIxMHB4O1xcbn1cXG5cXG4ubW9kYWxfX2JveCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC45KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIC8qIEZPUk0gVkFMSURBVElPTiAqL1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyID4gKiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyID4gOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciAuYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciAuYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMTljYmE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5Y2JhO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIC5idG5fX2Nsb3NlLW1vZGFsIHtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDFyZW07XFxuICByaWdodDogMXJlbTtcXG4gIHotaW5kZXg6IDExO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgPiAqIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgaW1nIHtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIC5tb3ZpZV9fbW9yZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyAubW92aWVfX21vcmUgLml0ZW0tY2F0ZWdvcnkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzIC5pdGVtLWRhdGUsXFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1uYW1lIHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzIC5pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSA+ICoge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtID4gOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5pbnB1dF9fZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5pbnB1dF9fZmllbGQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICMyMTljYmE7XFxufVxcbi5tb2RhbF9fYm94IC5mb3JtX19tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiAjMDRiZDllO1xcbn1cXG4ubW9kYWxfX2JveCAuZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogI2ZkM2YzZjtcXG59XFxuLm1vZGFsX19ib3ggLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbF9fYm94LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxzQkFBQTtFQUNBLFVB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QkFBQTtFQUNBLHVCQUFBO0FGdU1GO0FBRk07RUFDRSxzQkFBQTtBQUlSO0FBRE07RUFDRSxnQkFBQTtBQUdSO0FBQU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQ2hNTiw4QkFsQks7RUFtQkwsZUFGZ0I7RUFHaEIsZ0JBSDBCO0VBSTFCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0F0Qks7RUF1Qkwsc0JBUDBFO0FEME01RTtBQUxRO0VBQ0UsMEJBQUE7QUFPVjtBQUFFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFSjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBRUU7RUFDRSxjQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0FBREZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndHlwb2dyYXBoeSc7XFxyXFxuQGltcG9ydCAnbWl4aW5zJztcXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIEBpbmNsdWRlIGZvbnQtYjtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgbmF2IHtcXHJcXG4gICAgdWwge1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuXFxyXFxuICAgICAgbGkge1xcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG4gICAgICAgICAgQGluY2x1ZGUgZm9udC1iO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4jbW92aWUtc2VjdGlvbiB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IGF1dG87XFxyXFxuICBnYXA6IDMwcHggMyU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG5cXHJcXG4gIC5tb3ZpZS13cmFwcGVyIHtcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bTtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxuXFxyXFxuICAgIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuXFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgd2lkdGg6IDIxMHB4O1xcclxcbiAgICAgIGhlaWdodDogMzZweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24ge1xcclxcbiAgICAgIHdpZHRoOiAyMTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2JveCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDEyOCwgMTI4LCAwLjkpO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcclxcblxcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuXFxyXFxuICAubW92aWVfX2NvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAycmVtLCAkZnc6IGJvbGQsICR0dDogdXBwZXJjYXNlKTtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgIGxpIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG4ge1xcclxcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS1kYXJrO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmb250LWg7XFxyXFxuXFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG5fX2Nsb3NlLW1vZGFsIHtcXHJcXG4gICAgICB3aWR0aDogMS41cmVtO1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDFyZW07XFxyXFxuICAgICAgcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgei1pbmRleDogMTE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9fZGV0YWlscyB7XFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMjEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb3ZpZV9fbW9yZSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFxyXFxuICAgICAgLml0ZW0tY2F0ZWdvcnkge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllX19jb21tZW50cyB7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcblxcclxcbiAgICAuaXRlbS1kYXRlLFxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfX2FkZC1jb21tZW50IHtcXHJcXG4gICAgZm9ybSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bTtcXHJcXG5cXHJcXG4gICAgICA+ICoge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgPiA6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaW5wdXRfX2ZpZWxkIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRncmF5LWRhcms7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBmb250LWI7XFxyXFxuXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBGT1JNIFZBTElEQVRJT04gKi9cXHJcXG4gIC5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6ICMwNGJkOWU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIGNvbG9yOiAjZmQzZjNmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19ib3gtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9U3BlY3RyYWw6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRmZi1oOiAnS2FybGEnLCBzYW5zLXNlcmlmO1xcclxcbiRmZi1iOiAnU3BlY3RyYWwnLCBzZXJpZjtcXHJcXG4kYmFzZTogIzAyMzA0NztcXHJcXG4kYWNjZW50OiAjMjE5Y2JhO1xcclxcbiRwaW5rOiAjZTY4YWI0O1xcclxcbiRncmF5LWxpZ2h0OiAjZGVlMmU2O1xcclxcbiRncmF5LWRhcms6ICNjZWQ0ZGE7XFxyXFxuXFxyXFxuQG1peGluIGZvbnQtaCgkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuNnJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0Om5vcm1hbCkge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmZi1oO1xcclxcbiAgZm9udC1zaXplOiAkZnM7XFxyXFxuICBmb250LXdlaWdodDogJGZ3O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZvbnQtYigkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuMXJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0Om5vcm1hbCkge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmZi1iO1xcclxcbiAgZm9udC1zaXplOiAkZnM7XFxyXFxuICBmb250LXdlaWdodDogJGZ3O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXHJcXG59XFxyXFxuXCIsXCJAbWl4aW4gZmxleC1jb2x1bSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleC1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1xICgkbXc6NTByZW0pIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbXcpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGlCYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pnZ0VCWHpwRmNRcWpEeHZNaE16L2NvbW1lbnRzJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9P2l0ZW1faWQ9JHttb3ZpZUlkfWApO1xuICBjb25zdCBjb21tZW50c0xpc3QgPSBhd2FpdCBjb25uZWN0Lmpzb24oKTtcbiAgcmV0dXJuIGNvbW1lbnRzTGlzdDtcbn07XG5cbmNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAobW92aWVJZCwgdXNlcm5hbWUsIGNvbW1lbnQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfWAsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBtb3ZpZUlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmV4cG9ydCB7IGdldENvbW1lbnRzLCBhZGRDb21tZW50IH07IiwiY29uc3QgYmFzZVVSTCA9ICcgaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG5cbmNvbnN0IGdldE1vdmllRGF0YSA9IGFzeW5jIChpbmRleCwgcXVlcnkpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L3Nob3dzP3E9JHtxdWVyeX1gKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0Lmpzb24oKS50aGVuKChkYXRhTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNob3J0TGlzdCA9IGRhdGFMaXN0LnNsaWNlKGluZGV4LCBpbmRleCArIDUwKTtcbiAgICBzaG9ydExpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIGdlbnJlczogaXRlbS5nZW5yZXMsXG4gICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxuICAgICAgICBlbmQ6IGl0ZW0uZW5kZWQsXG4gICAgICAgIHJhdGluZzogaXRlbS5yYXRpbmcsXG4gICAgICAgIHN1bW1hcnk6IGl0ZW0uc3VtbWFyeSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pO1xuICAgIHJldHVybiBzaG9ydExpc3Q7XG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBnZXRNb3ZpZURhdGEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IHsgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbnN1bWVJbnZvbHZlbWVudEFQSS5qcyc7XG5jb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94Jyk7XG5jb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fY2xvc2UtbW9kYWwnKTtcblxuY29uc3QgYXJySW50b1N0cmluZyA9IChhcnIpID0+IHtcbiAgbGV0IHN0ciA9ICcnO1xuICBhcnIuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBzdHIgKz0gYCR7ZWx9IHwgYDtcbiAgfSk7XG4gIHJldHVybiBzdHI7XG59O1xuXG5jb25zdCBidWlsZE1vdmllRGVzY3JpcHRpb24gPSAoZGF0YSkgPT4ge1xuICBjb25zdCBtb3ZpZURldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVfX2RldGFpbHMnKTtcbiAgbW92aWVEZXRhaWxzLnNldEF0dHJpYnV0ZSgnZGF0YS1tb3ZpZWlkJywgZGF0YS5pZCk7XG4gIG1vdmllRGV0YWlscy5pbm5lckhUTUwgPSBgPGltZyBzcmM9XCIke2RhdGEuaW1hZ2UubWVkaXVtfVwiIGFsdD1cIiR7ZGF0YS5uYW1lfSBtb3ZpZSBpbWFnZVwiPlxuICAgICAgICA8aDI+JHtkYXRhLm5hbWV9PC9oMj5cbiAgICAgICAgPHVsIGNsYXNzPVwibW92aWVfX21vcmVcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5HZW5yZTo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2FyckludG9TdHJpbmcoZGF0YS5nZW5yZXMpfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiPkVuZGVkOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5lbmRlZH08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5SYWl0aW5nOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5yYXRpbmcuYXZlcmFnZX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgJHtkYXRhLnN1bW1hcnl9YDtcbn07XG5cbmNvbnN0IGJ1aWxkTW92aWVDb21tZW50cyA9IChhcnIpID0+IHtcbiAgY29uc3QgbW92aWVDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fY29tbWVudHMnKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHthcnIubGVuZ3RofSlgO1xuICBtb3ZpZUNvbW1lbnRzLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29uc3QgY29tbWVudExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb21tZW50TGlzdC5jbGFzc0xpc3QuYWRkKCdjb21tZW50c19fbGlzdCcpO1xuICBtb3ZpZUNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwib3duZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZURldGFpbHMgPSAobW92aWUpID0+IHtcbiAgYnVpbGRNb3ZpZURlc2NyaXB0aW9uKG1vdmllKTtcbiAgZ2V0Q29tbWVudHMobW92aWUuaWQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICBidWlsZE1vdmllQ29tbWVudHMobGlzdCk7XG4gIH0pO1xuICBtb2RhbEJveC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYm94LWRpc3BsYXknKTtcbn07XG5cbm1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsQm94LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ib3gtZGlzcGxheScpO1xufSk7XG5cbmV4cG9ydCB7IGRpc3BsYXlNb3ZpZURldGFpbHMgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBkaXNwbGF5TW92aWVEZXRhaWxzIGZyb20gJy4vZGlzcGxheU1vdmllRGV0YWlscy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSBhc3luYyAobW92aWVMaXN0KSA9PiB7XG4gIGNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZS1zZWN0aW9uJyk7XG4gIG1vdmllU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgbW92aWVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcic7XG4gICAgbWFpbkRpdi5pZCA9IGBtb3ZpZSR7aXRlbS5pZH1gO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX190aXRsZSc7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19pbWcnO1xuICAgIGltZy5zcmMgPSBpdGVtLmltYWdlLm1lZGl1bTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBuYW1lLmlubmVySFRNTCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZS5jbGFzc05hbWUgPSAnZmFyIGZhLWhlYXJ0JztcbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29tbWVudEJ1dHRvbi5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICAgIGNvbW1lbnRCdXR0b24uY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uJztcbiAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheU1vdmllRGV0YWlscyhpdGVtKTtcbiAgICB9KTtcbiAgICBkZXRhaWxzLmFwcGVuZChuYW1lLCBsaWtlKTtcbiAgICBtYWluRGl2LmFwcGVuZChpbWcsIGRldGFpbHMsIGNvbW1lbnRCdXR0b24pO1xuICAgIG1vdmllU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVzIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJztcclxuaW1wb3J0IGdldE1vdmllRGF0YSBmcm9tICcuL21vZHVsZXMvY29uc3VtZVRWTWF6ZUFQSS5qcyc7XHJcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TW92aWVzLmpzJztcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gJ2FjdGlvbic7XHJcblxyXG5nZXRNb3ZpZURhdGEoMCwgcXVlcnkpLnRoZW4oKG1vdmllTGlzdCkgPT4ge1xyXG4gIGRpc3BsYXlNb3ZpZXMobW92aWVMaXN0KTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==