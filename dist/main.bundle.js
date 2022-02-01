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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nheader nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nheader nav ul li a {\n  text-decoration: none;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(128, 128, 128, 0.9);\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n  /* FORM VALIDATION */\n}\n.modal__box .movie__container {\n  height: 90%;\n  width: 90%;\n  max-width: 768px;\n  padding: 2rem;\n  margin: 2rem auto;\n  background-color: #fff;\n  border-radius: 5px;\n  overflow-y: auto;\n}\n.modal__box .movie__container > * {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__container h2 {\n  font-family: \"Karla\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container h3 {\n  margin-bottom: 1rem;\n}\n.modal__box .movie__container ul {\n  list-style: none;\n}\n.modal__box .movie__container ul li {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n}\n.modal__box .movie__details > * {\n  width: auto;\n}\n.modal__box .movie__details img {\n  width: 210px;\n  height: auto;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.modal__box .movie__details .movie__more {\n  margin: 0;\n  width: auto;\n  margin-bottom: 1rem;\n}\n.modal__box .movie__details .movie__more .item-category {\n  margin-right: 0.5rem;\n  font-weight: 600;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__comments .item-name {\n  margin-right: 0.5rem;\n}\n.modal__box .movie__comments .item-name {\n  font-weight: 600;\n}\n.modal__box .movie__add-comment form {\n  width: 100%;\n  max-width: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .movie__add-comment form > * {\n  margin-bottom: 0.75rem;\n}\n.modal__box .movie__add-comment form > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__add-comment form .btn {\n  padding: 0.5rem;\n  background: transparent;\n  border: 1px solid #ced4da;\n  cursor: pointer;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n.modal__box .movie__add-comment form .btn:hover {\n  border: 1px solid #219cba;\n  background-color: #219cba;\n  color: #fff;\n}\n.modal__box .movie__add-comment form .input__field {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  outline: 1px solid #ced4da;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.1rem;\n  color: #023047;\n  text-transform: normal;\n}\n.modal__box .movie__add-comment form .input__field:focus {\n  outline: 1px solid #219cba;\n}\n.modal__box .form__message {\n  display: none;\n  padding: 0.3rem;\n  font-size: 0.9rem;\n  color: #04bd9e;\n}\n.modal__box .error-message {\n  color: #fd3f3f;\n}\n.modal__box .visible {\n  display: block;\n}\n\n.modal__box-display {\n  display: flex;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_mixins.scss"],"names":[],"mappings":"AAGA;;;EAGE,sBAAA;EACA,UAAA;EACA,SAAA;EACA,uBAAA;AADF;;AAIA;ECSE,8BAlBK;EAmBL,eAFgB;EAGhB,gBAH0B;EAI1B,sBAJ+C;EAK/C,mBALmC;EAMnC,cAtBK;EAuBL,sBAP0E;ADF5E;;AAFA;EERE,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBAAA;EFQA,8BAAA;AAOF;AAJI;EACE,gBAAA;EEfJ,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBAAA;AFsBF;AALQ;EACE,qBAAA;ECRR,8BAlBK;EAmBL,eAFgB;EAGhB,gBAH0B;EAI1B,sBAJ+C;EAK/C,mBALmC;EAMnC,cAtBK;EAuBL,sBAP0E;ADuB5E;;AALA;EACE,WAAA;EACA,0CAAA;EEzBA,uBAAA;EACA,mBAAA;EF4BA,eAAA;EACA,MAAA;EACA,OAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EA+HA,oBAAA;AAvHF;AANE;EACE,WAAA;EACA,UAAA;EACA,gBAAA;EACA,aAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;AAQJ;AANI;EACE,WAAA;EACA,mBAAA;AAQN;AALI;EACE,gBAAA;AAON;AAJI;EC3DF,gCATK;EAUL,eD2DyB;EC1DzB,iBD0DoC;ECzDpC,sBAJ+C;EAK/C,mBALmC;EAMnC,cAZK;EAaL,yBDsD+C;EAE3C,mBAAA;AAWN;AARI;EACE,mBAAA;AAUN;AAPI;EACE,gBAAA;AASN;AAPM;EE3EJ,aAAA;EACA,mBAAA;EACA,2BAAA;EACA,uBAAA;EF2EM,eAAA;EACA,iBAAA;AAWR;AALI;EACE,WAAA;AAON;AAJI;EACE,YAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,WAAA;AAMN;AAHI;EACE,SAAA;EACA,WAAA;EACA,mBAAA;AAKN;AAHM;EACE,oBAAA;EACA,gBAAA;AAKR;AACI;;EAEE,oBAAA;AACN;AAEI;EACE,gBAAA;AAAN;AAKI;EACE,WAAA;EACA,gBAAA;EElIJ,aAAA;EACA,sBAAA;EACA,2BAAA;EACA,uBAAA;AFgIF;AAGM;EACE,sBAAA;AADR;AAIM;EACE,gBAAA;AAFR;AAKM;EACE,eAAA;EACA,uBAAA;EACA,yBAAA;EACA,eAAA;EC9HN,8BAlBK;EAmBL,eAFgB;EAGhB,gBAH0B;EAI1B,sBAJ+C;EAK/C,mBALmC;EAMnC,cAtBK;EAuBL,sBAP0E;EDmIpE,6BAAA;EACA,2CAAA;AACR;AACQ;EACE,yBAAA;EACA,yBCvJD;EDwJC,WAAA;AACV;AAGM;EACE,WAAA;EACA,eAAA;EACA,YAAA;EACA,0BAAA;EChJN,8BAlBK;EAmBL,eAFgB;EAGhB,gBAH0B;EAI1B,sBAJ+C;EAK/C,mBALmC;EAMnC,cAtBK;EAuBL,sBAP0E;ADuJ5E;AAFQ;EACE,0BAAA;AAIV;AAGE;EACE,aAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AADJ;AAIE;EACE,cAAA;AAFJ;AAKE;EACE,cAAA;AAHJ;;AAOA;EACE,aAAA;AAJF","sourcesContent":["@import 'typography';\r\n@import 'mixins';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  @include font-b;\r\n}\r\n\r\nheader {\r\n  @include flex-row;\r\n\r\n  justify-content: space-between;\r\n\r\n  nav {\r\n    ul {\r\n      list-style: none;\r\n\r\n      @include flex-row;\r\n\r\n      li {\r\n        a {\r\n          text-decoration: none;\r\n\r\n          @include font-b;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.modal__box {\r\n  width: 100%;\r\n  background-color: rgb(128, 128, 128, 0.9);\r\n  // display: none;\r\n  @include flex-center;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 10;\r\n\r\n  .movie__container {\r\n    height: 90%;\r\n    width: 90%;\r\n    max-width: 768px;\r\n    padding: 2rem;\r\n    margin: 2rem auto;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    overflow-y: auto;\r\n\r\n    > * {\r\n      width: 100%;\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    > :last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    h2 {\r\n      @include font-h($fs: 2rem, $fw: bold, $tt: uppercase);\r\n\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    h3 {\r\n      margin-bottom: 1rem;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n\r\n      li {\r\n        @include flex-row;\r\n\r\n        flex-wrap: wrap;\r\n        padding: 0.5rem 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__details {\r\n    > * {\r\n      width: auto;\r\n    }\r\n\r\n    img {\r\n      width: 210px;\r\n      height: auto;\r\n      margin-right: 1rem;\r\n      margin-bottom: 1rem;\r\n      float: left;\r\n    }\r\n\r\n    .movie__more {\r\n      margin: 0;\r\n      width: auto;\r\n      margin-bottom: 1rem;\r\n\r\n      .item-category {\r\n        margin-right: 0.5rem;\r\n        font-weight: 600;\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__comments {\r\n    .item-date,\r\n    .item-name {\r\n      margin-right: 0.5rem;\r\n    }\r\n\r\n    .item-name {\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  .movie__add-comment {\r\n    form {\r\n      width: 100%;\r\n      max-width: 500px;\r\n\r\n      @include flex-colum;\r\n\r\n      > * {\r\n        margin-bottom: 0.75rem;\r\n      }\r\n\r\n      > :last-child {\r\n        margin-bottom: 0;\r\n      }\r\n\r\n      .btn {\r\n        padding: 0.5rem;\r\n        background: transparent;\r\n        border: 1px solid $gray-dark;\r\n        cursor: pointer;\r\n\r\n        @include font-b;\r\n\r\n        background-color: transparent;\r\n        transition: background-color ease-out 250ms;\r\n\r\n        &:hover {\r\n          border: 1px solid $accent;\r\n          background-color: $accent;\r\n          color: #fff;\r\n        }\r\n      }\r\n\r\n      .input__field {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        outline: 1px solid $gray-dark;\r\n\r\n        @include font-b;\r\n\r\n        &:focus {\r\n          outline: 1px solid $accent;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /* FORM VALIDATION */\r\n  .form__message {\r\n    display: none;\r\n    padding: 0.3rem;\r\n    font-size: 0.9rem;\r\n    color: #04bd9e;\r\n  }\r\n\r\n  .error-message {\r\n    color: #fd3f3f;\r\n  }\r\n\r\n  .visible {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.modal__box-display {\r\n  display: flex;\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\r\n\r\n$ff-h: 'Karla', sans-serif;\r\n$ff-b: 'Spectral', serif;\r\n$base: #023047;\r\n$accent: #219cba;\r\n$pink: #e68ab4;\r\n$gray-light: #dee2e6;\r\n$gray-dark: #ced4da;\r\n\r\n@mixin font-h($fs:1rem, $fw:300, $lh:1.1rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-h;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n\r\n@mixin font-b($fs:1rem, $fw:300, $lh:1.1rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-b;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n","@mixin flex-colum {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-center {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin mq ($mw:50rem) {\r\n  @media (min-width: $mw) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/consumeTVMazeAPI.js":
/*!*****************************************!*\
  !*** ./src/modules/consumeTVMazeAPI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getMovie)
/* harmony export */ });
const baseURL = ' https://api.tvmaze.com';

const getMovie = async (movieId) => {
  const connect = await fetch(`${baseURL}/lookup/shows?tvrage=${movieId}`);
  const movie = await connect.json();
  return movie;
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
/* harmony import */ var _consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consumeTVMazeAPI.js */ "./src/modules/consumeTVMazeAPI.js");


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
            <span class="item-category">Gender:</span>
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

const displayMovieDetails = (movieId) => {
  (0,_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"])(movieId).then((obj) => {
    buildMovieDescription(obj, movieId);
    // getComments(movieId).then((list) => {
    //   buildMovieComments(list);
    // });
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
/* harmony import */ var _modules_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayMovieDetails.js */ "./src/modules/displayMovieDetails.js");




window.addEventListener('load', (0,_modules_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__["default"])(40995));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixvQkFBb0I7QUFDckM7QUFDQTtBQUNBLFVBQVUsYUFBYTtBQUN2Qjs7QUFFQTtBQUNBLEVBQUUsZ0VBQVE7QUFDVjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsR0FBRztBQUNIOzs7Ozs7OztVQ3ZDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ04yQjs7QUFFd0M7O0FBRW5FLGdDQUFnQywyRUFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb25zdW1lVFZNYXplQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9kaXNwbGF5TW92aWVEZXRhaWxzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJsYTppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVNwZWN0cmFsOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbmhlYWRlciBuYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVxcblxcbi5tb2RhbF9fYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjkpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMTA7XFxuICAvKiBGT1JNIFZBTElEQVRJT04gKi9cXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBtYXJnaW46IDJyZW0gYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzID4gKiB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIGltZyB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyAubW92aWVfX21vcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgLm1vdmllX19tb3JlIC5pdGVtLWNhdGVnb3J5IHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1kYXRlLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tbmFtZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gPiAqIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSAuYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5idG46aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzIxOWNiYTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTljYmE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5pbnB1dF9fZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2NlZDRkYTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5pbnB1dF9fZmllbGQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICMyMTljYmE7XFxufVxcbi5tb2RhbF9fYm94IC5mb3JtX19tZXNzYWdlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiAjMDRiZDllO1xcbn1cXG4ubW9kYWxfX2JveCAuZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogI2ZkM2YzZjtcXG59XFxuLm1vZGFsX19ib3ggLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbF9fYm94LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQ1NFLDhCQWxCSztFQW1CTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQXRCSztFQXVCTCxzQkFQMEU7QURGNUU7O0FBRkE7RUVSRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VGUUEsOEJBQUE7QUFPRjtBQUpJO0VBQ0UsZ0JBQUE7RUVmSixhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FGc0JGO0FBTFE7RUFDRSxxQkFBQTtFQ1JSLDhCQWxCSztFQW1CTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQXRCSztFQXVCTCxzQkFQMEU7QUR1QjVFOztBQUxBO0VBQ0UsV0FBQTtFQUNBLDBDQUFBO0VFekJBLHVCQUFBO0VBQ0EsbUJBQUE7RUY0QkEsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBK0hBLG9CQUFBO0FBdkhGO0FBTkU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUUo7QUFOSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQVFOO0FBTEk7RUFDRSxnQkFBQTtBQU9OO0FBSkk7RUMzREYsZ0NBVEs7RUFVTCxlRDJEeUI7RUMxRHpCLGlCRDBEb0M7RUN6RHBDLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0FaSztFQWFMLHlCRHNEK0M7RUFFM0MsbUJBQUE7QUFXTjtBQVJJO0VBQ0UsbUJBQUE7QUFVTjtBQVBJO0VBQ0UsZ0JBQUE7QUFTTjtBQVBNO0VFM0VKLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUYyRU0sZUFBQTtFQUNBLGlCQUFBO0FBV1I7QUFMSTtFQUNFLFdBQUE7QUFPTjtBQUpJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU1OO0FBSEk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBS047QUFITTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFLUjtBQUNJOztFQUVFLG9CQUFBO0FBQ047QUFFSTtFQUNFLGdCQUFBO0FBQU47QUFLSTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFRWxJSixhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FGZ0lGO0FBR007RUFDRSxzQkFBQTtBQURSO0FBSU07RUFDRSxnQkFBQTtBQUZSO0FBS007RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUM5SE4sOEJBbEJLO0VBbUJMLGVBRmdCO0VBR2hCLGdCQUgwQjtFQUkxQixzQkFKK0M7RUFLL0MsbUJBTG1DO0VBTW5DLGNBdEJLO0VBdUJMLHNCQVAwRTtFRG1JcEUsNkJBQUE7RUFDQSwyQ0FBQTtBQUNSO0FBQ1E7RUFDRSx5QkFBQTtFQUNBLHlCQ3ZKRDtFRHdKQyxXQUFBO0FBQ1Y7QUFHTTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VDaEpOLDhCQWxCSztFQW1CTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQXRCSztFQXVCTCxzQkFQMEU7QUR1SjVFO0FBRlE7RUFDRSwwQkFBQTtBQUlWO0FBR0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7RUFDRSxjQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISjs7QUFPQTtFQUNFLGFBQUE7QUFKRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd0eXBvZ3JhcGh5JztcXHJcXG5AaW1wb3J0ICdtaXhpbnMnO1xcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgQGluY2x1ZGUgZm9udC1iO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuXFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBuYXYge1xcclxcbiAgICB1bCB7XFxyXFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gICAgICBsaSB7XFxyXFxuICAgICAgICBhIHtcXHJcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbiAgICAgICAgICBAaW5jbHVkZSBmb250LWI7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tb2RhbF9fYm94IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyOCwgMTI4LCAxMjgsIDAuOSk7XFxyXFxuICAvLyBkaXNwbGF5OiBub25lO1xcclxcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gIC5tb3ZpZV9fY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuXFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAycmVtLCAkZnc6IGJvbGQsICR0dDogdXBwZXJjYXNlKTtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgIGxpIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfX2RldGFpbHMge1xcclxcbiAgICA+ICoge1xcclxcbiAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDIxMHB4O1xcclxcbiAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW92aWVfX21vcmUge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcblxcclxcbiAgICAgIC5pdGVtLWNhdGVnb3J5IHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9fY29tbWVudHMge1xcclxcbiAgICAuaXRlbS1kYXRlLFxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfX2FkZC1jb21tZW50IHtcXHJcXG4gICAgZm9ybSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcclxcblxcclxcbiAgICAgID4gKiB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICA+IDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgIC5idG4ge1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZ3JheS1kYXJrO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAgICAgQGluY2x1ZGUgZm9udC1iO1xcclxcblxcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcclxcblxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxyXFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaW5wdXRfX2ZpZWxkIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRncmF5LWRhcms7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBmb250LWI7XFxyXFxuXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBGT1JNIFZBTElEQVRJT04gKi9cXHJcXG4gIC5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgY29sb3I6ICMwNGJkOWU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZXJyb3ItbWVzc2FnZSB7XFxyXFxuICAgIGNvbG9yOiAjZmQzZjNmO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19ib3gtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9U3BlY3RyYWw6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRmZi1oOiAnS2FybGEnLCBzYW5zLXNlcmlmO1xcclxcbiRmZi1iOiAnU3BlY3RyYWwnLCBzZXJpZjtcXHJcXG4kYmFzZTogIzAyMzA0NztcXHJcXG4kYWNjZW50OiAjMjE5Y2JhO1xcclxcbiRwaW5rOiAjZTY4YWI0O1xcclxcbiRncmF5LWxpZ2h0OiAjZGVlMmU2O1xcclxcbiRncmF5LWRhcms6ICNjZWQ0ZGE7XFxyXFxuXFxyXFxuQG1peGluIGZvbnQtaCgkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuMXJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0Om5vcm1hbCkge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmZi1oO1xcclxcbiAgZm9udC1zaXplOiAkZnM7XFxyXFxuICBmb250LXdlaWdodDogJGZ3O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZvbnQtYigkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuMXJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0Om5vcm1hbCkge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmZi1iO1xcclxcbiAgZm9udC1zaXplOiAkZnM7XFxyXFxuICBmb250LXdlaWdodDogJGZ3O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXHJcXG59XFxyXFxuXCIsXCJAbWl4aW4gZmxleC1jb2x1bSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleC1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1xICgkbXc6NTByZW0pIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbXcpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGJhc2VVUkwgPSAnIGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20nO1xuXG5jb25zdCBnZXRNb3ZpZSA9IGFzeW5jIChtb3ZpZUlkKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9sb29rdXAvc2hvd3M/dHZyYWdlPSR7bW92aWVJZH1gKTtcbiAgY29uc3QgbW92aWUgPSBhd2FpdCBjb25uZWN0Lmpzb24oKTtcbiAgcmV0dXJuIG1vdmllO1xufTtcblxuZXhwb3J0IHsgZ2V0TW92aWUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBnZXRNb3ZpZSBmcm9tICcuL2NvbnN1bWVUVk1hemVBUEkuanMnO1xuXG5jb25zdCBhcnJJbnRvU3RyaW5nID0gKGFycikgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgIHN0ciArPSBgJHtlbH0gfCBgO1xuICB9KTtcbiAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGJ1aWxkTW92aWVEZXNjcmlwdGlvbiA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IG1vdmllRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fZGV0YWlscycpO1xuICBtb3ZpZURldGFpbHMuc2V0QXR0cmlidXRlKCdkYXRhLW1vdmllaWQnLCBkYXRhLmlkKTtcbiAgbW92aWVEZXRhaWxzLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHtkYXRhLm5hbWV9IG1vdmllIGltYWdlXCI+XG4gICAgICAgIDxoMj4ke2RhdGEubmFtZX08L2gyPlxuICAgICAgICA8dWwgY2xhc3M9XCJtb3ZpZV9fbW9yZVwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiPkdlbmRlcjo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2FyckludG9TdHJpbmcoZGF0YS5nZW5yZXMpfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiPkVuZGVkOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5lbmRlZH08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5SYWl0aW5nOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5yYXRpbmcuYXZlcmFnZX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgJHtkYXRhLnN1bW1hcnl9YDtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZURldGFpbHMgPSAobW92aWVJZCkgPT4ge1xuICBnZXRNb3ZpZShtb3ZpZUlkKS50aGVuKChvYmopID0+IHtcbiAgICBidWlsZE1vdmllRGVzY3JpcHRpb24ob2JqLCBtb3ZpZUlkKTtcbiAgICAvLyBnZXRDb21tZW50cyhtb3ZpZUlkKS50aGVuKChsaXN0KSA9PiB7XG4gICAgLy8gICBidWlsZE1vdmllQ29tbWVudHMobGlzdCk7XG4gICAgLy8gfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheU1vdmllRGV0YWlscyBhcyBkZWZhdWx0IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xuXG5pbXBvcnQgZGlzcGxheU1vdmllRGV0YWlscyBmcm9tICcuL21vZHVsZXMvZGlzcGxheU1vdmllRGV0YWlscy5qcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZGlzcGxheU1vdmllRGV0YWlscyg0MDk5NSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9