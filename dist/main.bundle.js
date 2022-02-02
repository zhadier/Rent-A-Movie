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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/b1.png */ "./src/images/b1.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/logo.svg */ "./src/images/logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/bg-movies.svg */ "./src/images/bg-movies.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n}\nheader .header-brand {\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  text-decoration: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  height: 50px;\n  width: 110px;\n}\nheader nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nheader nav ul li a {\n  text-decoration: none;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n}\n\n#movie-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n}\n#movie-section .movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  gap: 5px;\n  background-color: #111;\n}\n#movie-section .movie-wrapper .movie-wrapper__img {\n  width: 250px;\n}\n#movie-section .movie-wrapper .movie-wrapper__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  width: 240px;\n  height: 48px;\n  line-height: 1.2;\n  color: #fff;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  width: 55px;\n  gap: 3px;\n  margin-left: 1rem;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i {\n  color: #ff3847;\n  cursor: pointer;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover {\n  color: #fd3f3f;\n  transform: scale(1.2);\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active {\n  color: #ff0202;\n  text-shadow: 0 0 7px red;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span {\n  font-size: 0.75rem;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button {\n  width: 240px;\n  border: none;\n  outline: 1px solid #ff3847;\n  background-color: transparent;\n  color: #ff3847;\n  padding: 0.25rem 0;\n  cursor: pointer;\n  transition: background-color ease-out 250ms;\n  margin-bottom: 5px;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button:hover {\n  background-color: #ff3847;\n  color: white;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button:active {\n  box-shadow: inset 0 0 5px;\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(32, 32, 32, 0.9);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\n.modal__box .modal__container {\n  height: 90%;\n  width: 90%;\n  max-width: 48rem;\n  background-color: #fff;\n  border-radius: 5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-clip: border-box;\n  background-size: cover;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .modal__container .modal__btn {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 1px solid #ff3847;\n  transition: background-color ease-out 250ms;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 11;\n}\n.modal__box .modal__container .modal__btn .btn__close-modal {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.modal__box .modal__container .modal__btn:hover {\n  background-color: #ff3847;\n}\n.modal__box .modal__container .modal__btn:hover .btn__close-modal {\n  color: #fff;\n}\n.modal__box .movie__container {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  overflow-y: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  position: relative;\n  scrollbar-width: thin;\n  scrollbar-color: #bfc5ca #dee2e6;\n}\n.modal__box .movie__container > * {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__container h2 {\n  font-family: \"Karla\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container h3 {\n  margin-bottom: 1rem;\n}\n.modal__box .movie__container ul {\n  list-style: none;\n}\n.modal__box .movie__container ul li {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n}\n.modal__box .movie__container .btn {\n  padding: 0.5rem;\n  background: transparent;\n  border: 1px solid #ff3847;\n  cursor: pointer;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n.modal__box .movie__container .btn:hover {\n  border: 1px solid #ff3847;\n  background-color: #ff3847;\n  color: #fff;\n}\n.modal__box .movie__container::-webkit-scrollbar-thumb {\n  background-color: #bfc5ca;\n  border-radius: 20px;\n}\n.modal__box .movie__container::-webkit-scrollbar {\n  width: 6px;\n}\n.modal__box .movie__container::-webkit-scrollbar-track {\n  background: #dee2e6;\n}\n@media (min-width: 48rem) {\n  .modal__box .movie__container {\n    padding: 1.5rem;\n  }\n}\n.modal__box .movie__details > * {\n  width: auto;\n}\n.modal__box .movie__details img {\n  width: 210px;\n  height: auto;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.modal__box .movie__details .movie__more {\n  margin: 0;\n  width: auto;\n  margin-bottom: 1rem;\n}\n.modal__box .movie__details .movie__more .item-category {\n  margin-right: 0.5rem;\n  font-weight: 600;\n}\n.modal__box .movie__comments {\n  clear: both;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__comments .item-name {\n  margin-right: 0.5rem;\n}\n.modal__box .movie__comments .item-name {\n  font-weight: 600;\n}\n.modal__box .movie__add-comment {\n  /* FORM VALIDATION */\n}\n.modal__box .movie__add-comment form {\n  width: 100%;\n  max-width: 31.25rem;\n  padding-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .movie__add-comment form > * {\n  margin-bottom: 0.75rem;\n}\n.modal__box .movie__add-comment form > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__add-comment form .input__field {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  background-color: transparent;\n  outline: 1px solid #bfc5ca;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}\n.modal__box .movie__add-comment form .input__field:focus {\n  outline: 1px solid #ff3847;\n}\n.modal__box .movie__add-comment .form__message {\n  padding: 0.3rem;\n  font-size: 0.9rem;\n  color: #04bd9e;\n}\n.modal__box .movie__add-comment .error-message {\n  color: #fd3f3f;\n}\n.modal__box .movie__add-comment .visible {\n  display: block;\n}\n.modal__box .commentk,\n.modal__box .reservek {\n  display: none;\n}\n\n.modal__box-display .box__display {\n  display: flex;\n}\n\nfooter {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto 10px;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'typography';\r\n@import 'mixins';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  @include font-b;\r\n\r\n  background: url(../images/b1.png);\r\n}\r\n\r\nheader {\r\n  @include flex-row;\r\n\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 90%;\r\n  margin: 50px auto;\r\n  background-color: $gray-light;\r\n  padding: 30px;\r\n  height: 50px;\r\n\r\n  .header-brand {\r\n    @include font-h;\r\n\r\n    text-decoration: none;\r\n    background-image: url(../images/logo.svg);\r\n    background-repeat: no-repeat;\r\n    height: 50px;\r\n    width: 110px;\r\n  }\r\n\r\n  nav {\r\n    ul {\r\n      list-style: none;\r\n\r\n      @include flex-row;\r\n\r\n      li {\r\n        a {\r\n          text-decoration: none;\r\n\r\n          @include font-h($fw: 600);\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n#movie-section {\r\n  @include flex-row;\r\n\r\n  flex-wrap: wrap;\r\n  width: 90%;\r\n  margin: auto;\r\n  gap: 30px 3%;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n\r\n  .movie-wrapper {\r\n    @include flex-colum;\r\n\r\n    align-items: center;\r\n    gap: 5px;\r\n    background-color: #111;\r\n\r\n    .movie-wrapper__img {\r\n      width: 250px;\r\n    }\r\n\r\n    .movie-wrapper__title {\r\n      @include flex-row;\r\n\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      gap: 5px;\r\n      width: 240px;\r\n      height: 48px;\r\n      line-height: 1.2;\r\n      color: #fff;\r\n\r\n      .movie-wrapper__likes {\r\n        @include flex-colum;\r\n\r\n        align-items: center;\r\n        width: 55px;\r\n        gap: 3px;\r\n        margin-left: 1rem;\r\n\r\n        i {\r\n          color: $accent;\r\n          cursor: pointer;\r\n\r\n          &:hover {\r\n            color: #fd3f3f;\r\n            transform: scale(1.2);\r\n          }\r\n\r\n          &:active {\r\n            color: rgb(255, 2, 2);\r\n            text-shadow: 0 0 7px red;\r\n          }\r\n        }\r\n\r\n        span {\r\n          font-size: 0.75rem;\r\n        }\r\n      }\r\n    }\r\n\r\n    .movie-wrapper__comment-button {\r\n      width: 240px;\r\n      border: none;\r\n      outline: 1px solid $accent;\r\n      background-color: transparent;\r\n      color: $accent;\r\n      padding: 0.25rem 0;\r\n      cursor: pointer;\r\n      transition: background-color ease-out 250ms;\r\n      margin-bottom: 5px;\r\n\r\n      &:hover {\r\n        background-color: $accent;\r\n        color: white;\r\n      }\r\n\r\n      &:active {\r\n        box-shadow: inset 0 0 5px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.modal__box {\r\n  width: 100%;\r\n  background-color: rgba(32, 32, 32, 0.9);\r\n  display: none;\r\n\r\n  @include flex-center;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 10;\r\n\r\n  .modal__container {\r\n    height: 90%;\r\n    width: 90%;\r\n    max-width: 48rem;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    background-image: url('../images/bg-movies.svg');\r\n    background-repeat: no-repeat;\r\n    background-position: top right;\r\n    background-clip: border-box;\r\n    background-size: cover;\r\n    position: relative;\r\n\r\n    @include flex-colum;\r\n\r\n    .modal__btn {\r\n      width: 2rem;\r\n      height: 2rem;\r\n      border-radius: 50%;\r\n      background-color: transparent;\r\n      border: 1px solid $accent;\r\n      transition: background-color ease-out 250ms;\r\n      display: flex;\r\n\r\n      @include flex-center;\r\n\r\n      position: absolute;\r\n      top: 0.5rem;\r\n      right: 0.5rem;\r\n      z-index: 11;\r\n\r\n      .btn__close-modal {\r\n        width: 100%;\r\n        height: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        border: 0;\r\n        outline: 0;\r\n        background-color: transparent;\r\n\r\n        @include font-h($fs: 1.25rem, $color: $accent);\r\n\r\n        cursor: pointer;\r\n      }\r\n\r\n      &:hover {\r\n        background-color: $accent;\r\n\r\n        .btn__close-modal {\r\n          color: #fff;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__container {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n    overflow-y: auto;\r\n    background-color: rgba($color: #fff, $alpha: 0.8);\r\n    position: relative;\r\n\r\n    > * {\r\n      width: 100%;\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    > :last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    h2 {\r\n      @include font-h($fs: 2rem, $fw: bold, $tt: uppercase);\r\n\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    h3 {\r\n      margin-bottom: 1rem;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n\r\n      li {\r\n        @include flex-row;\r\n\r\n        flex-wrap: wrap;\r\n        padding: 0.5rem 0;\r\n      }\r\n    }\r\n\r\n    .btn {\r\n      padding: 0.5rem;\r\n      background: transparent;\r\n      border: 1px solid $accent;\r\n      cursor: pointer;\r\n\r\n      @include font-h($color: $accent);\r\n\r\n      background-color: transparent;\r\n      transition: background-color ease-out 250ms;\r\n\r\n      &:hover {\r\n        border: 1px solid $accent;\r\n        background-color: $accent;\r\n        color: #fff;\r\n      }\r\n    }\r\n\r\n    scrollbar-width: thin;\r\n    scrollbar-color: $gray-dark $gray-light;\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: $gray-dark;\r\n      border-radius: 20px;\r\n    }\r\n\r\n    &::-webkit-scrollbar {\r\n      width: 6px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n      background: $gray-light;\r\n    }\r\n\r\n    @include mq($mw: 48rem) {\r\n      padding: 1.5rem;\r\n    }\r\n  }\r\n\r\n  .movie__details {\r\n    > * {\r\n      width: auto;\r\n    }\r\n\r\n    img {\r\n      width: 210px;\r\n      height: auto;\r\n      margin-right: 1rem;\r\n      margin-bottom: 1rem;\r\n      float: left;\r\n    }\r\n\r\n    .movie__more {\r\n      margin: 0;\r\n      width: auto;\r\n      margin-bottom: 1rem;\r\n\r\n      .item-category {\r\n        margin-right: 0.5rem;\r\n        font-weight: 600;\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__comments {\r\n    clear: both;\r\n\r\n    .item-date,\r\n    .item-name {\r\n      margin-right: 0.5rem;\r\n    }\r\n\r\n    .item-name {\r\n      font-weight: 600;\r\n    }\r\n  }\r\n\r\n  .movie__add-comment {\r\n    form {\r\n      width: 100%;\r\n      max-width: 31.25rem;\r\n      padding-top: 0.5rem;\r\n\r\n      @include flex-colum;\r\n\r\n      > * {\r\n        margin-bottom: 0.75rem;\r\n      }\r\n\r\n      > :last-child {\r\n        margin-bottom: 0;\r\n      }\r\n\r\n      .input__field {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        background-color: transparent;\r\n        outline: 1px solid $gray-dark;\r\n\r\n        @include font-b;\r\n\r\n        &:focus {\r\n          outline: 1px solid $accent;\r\n        }\r\n      }\r\n    }\r\n\r\n    /* FORM VALIDATION */\r\n    .form__message {\r\n      // display: none;\r\n      padding: 0.3rem;\r\n      font-size: 0.9rem;\r\n      color: #04bd9e;\r\n    }\r\n\r\n    .error-message {\r\n      color: #fd3f3f;\r\n    }\r\n\r\n    .visible {\r\n      display: block;\r\n    }\r\n  }\r\n\r\n  .commentk,\r\n  .reservek {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.modal__box-display\r\n.box__display {\r\n  display: flex;\r\n}\r\n\r\nfooter {\r\n  @include flex-row;\r\n\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 90%;\r\n  margin: 50px auto 10px;\r\n  background-color: $gray-light;\r\n  padding: 30px;\r\n  height: 50px;\r\n\r\n  @include font-b($fw: 400);\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\r\n\r\n$ff-h: 'Karla', sans-serif;\r\n$ff-b: 'Spectral', serif;\r\n$base: #023047;\r\n$accent: #ff3847;\r\n$pink: #e68ab4;\r\n$gray-light: #dee2e6;\r\n$gray-dark: #bfc5ca;\r\n\r\n@mixin font-h($fs:1rem, $fw:300, $lh:1.6rem, $ls:normal, $color: $base, $tt:uppercase) {\r\n  font-family: $ff-h;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n\r\n@mixin font-b($fs:1rem, $fw:300, $lh:1.2rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-b;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n","@mixin flex-colum {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-center {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin mq ($mw:50rem) {\r\n  @media (min-width: $mw) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/allItemsCounter.js":
/*!****************************************!*\
  !*** ./src/modules/allItemsCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ totalItems)
/* harmony export */ });
const totalItems = (arr, domElement) => {
  let length = 0;
  while (arr[length] !== undefined) {
    length += 1;
  }
  domElement.innerHTML = `(${length})`;
  return length;
};




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
/* harmony export */   "countComments": () => (/* binding */ countComments),
/* harmony export */   "getReservations": () => (/* binding */ getReservations),
/* harmony export */   "addReservation": () => (/* binding */ addReservation),
/* harmony export */   "countReservations": () => (/* binding */ countReservations)
/* harmony export */ });
const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/zggEBXzpFcQqjDxvMhMz/';

const getComments = async (movieId) => {
  const connect = await fetch(`${iBaseURL}comments?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addComment = async (movieId, username, comment) => {
  const connect = await fetch(`${iBaseURL}comments`, {
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
  for (let i = 0; i < arr.length; i += 1) {
    count += 1;
  }
  return `Comments (${count})`;
};

const getReservations = async (movieId) => {
  const connect = await fetch(`${iBaseURL}reservations?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addReservation = async (movieId, username, date_start, date_end) => {
  const connect = await fetch(`${iBaseURL}reservations/`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: movieId,
      username,
      date_start,
      date_end,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await connect.text();
  return response;
};

const countReservations = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) {
    count += 1;
  }
  return `Reservations (${count})`;
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
/* harmony export */   "displayMovieComments": () => (/* binding */ displayMovieComments),
/* harmony export */   "displayMovieReservations": () => (/* binding */ displayMovieReservations)
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
            <span class="item-category">Rating:</span>
            <p>${data.rating.average}</p>
          </li>
        </ul>
        ${data.summary}`;
};

const buildMovieComments = (arr) => {
  const movieComments = document.querySelector('.movie__comments');
  movieComments.innerHTML = '';
  const title = document.createElement('h3');
  title.textContent = _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.countComments(arr);
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

const buildMovieReservations = (arr) => {
  const movieReservations = document.querySelector('.movie__reservstions');
  movieReservations.innerHTML = '';
  const title = document.createElement('h3');
  title.textContent = _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.countReservations(arr);
  movieReservations.appendChild(title);
  const reservationList = document.createElement('ul');
  reservationList.classList.add('comments__list');
  arr.forEach((reserve) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>${reserve.date_start} - ${reserve.date_end}</span>
              <span class="item-name"> by ${reserve.username}:</span>`;
    reservationList.appendChild(listItem);
  });
  movieReservations.appendChild(reservationList);
};

const openSelectedBoxes = (ident) => {
  console.log(ident);
  const { listk, formk } = document.querySelectorAll(`.${ident}`);
  listk.classList.add('box__display');
  formk.classList.add('box__display');
  modalBox.classList.add('modal__box-display');
};

const displayMovieComments = (movie) => {
  buildMovieDescription(movie);
  _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments(movie.id).then((list) => {
    buildMovieComments(list);
    openSelectedBoxes('commentk');
  });
};

const displayMovieReservations = (movie) => {
  buildMovieDescription(movie);
  _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getReservations(movie.id).then((list) => {
    buildMovieReservations(list);
    openSelectedBoxes('reservationk');
  });
};

modalCloseBtn.addEventListener('click', () => {
  let ident = 'commentk';
  const revOpen = document.querySelectorAll('movie__container reservationk');
  if (revOpen) ident = 'reservek';
  const { listk, formk } = document.querySelectorAll(ident);
  modalBox.classList.remove('modal__box-display');
  listk.classList.remove('box__display');
  formk.classList.remove('box__display');
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
    _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.addComment(movieId, name.value, comment.value).then((ans) => {
      if (ans === 'Created') {
        _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments(movieId).then((list) => {
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
/* harmony import */ var _likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likeFunctionality.js */ "./src/modules/likeFunctionality.js");
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
    likes.append(like, span);
    details.append(name, likes);
    const commentButton = document.createElement('button');
    commentButton.type = 'button';
    commentButton.innerHTML = 'Comments';
    commentButton.className = 'movie-wrapper__comment-button';
    commentButton.addEventListener('click', () => {
      (0,_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__.displayMovieComments)(item);
    });
    mainDiv.append(img, details, commentButton);
    const reserveButton = document.createElement('button');
    reserveButton.type = 'button';
    reserveButton.innerHTML = 'Reservations';
    reserveButton.className = 'movie-wrapper__comment-button';
    reserveButton.addEventListener('click', () => {
      (0,_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__.displayMovieReservations)(item);
    });
    mainDiv.append(reserveButton);
    movieSection.appendChild(mainDiv);
    like.addEventListener('click', () => {
      (0,_likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__.setLike)(`movie${item.id}`);
      const number = like.parentNode.lastChild.textContent.split(' ');
      like.parentNode.lastChild.innerHTML = `${Number(number[0]) + 1} likes`;
    });
  });
  (0,_likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)();
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
      container.children[1].children[1].children[1].innerHTML = `${element.likes} likes`;
    });
  });
};




/***/ }),

/***/ "./src/images/b1.png":
/*!***************************!*\
  !*** ./src/images/b1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5a642075334914d80a7d.png";

/***/ }),

/***/ "./src/images/bg-movies.svg":
/*!**********************************!*\
  !*** ./src/images/bg-movies.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9021034722ee9cec063f.svg";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebb6245062b9d9c3aac7.svg";

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
/******/ 			"main": 0
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
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/consumeTVMazeAPI.js */ "./src/modules/consumeTVMazeAPI.js");
/* harmony import */ var _modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayMovies.js */ "./src/modules/displayMovies.js");
/* harmony import */ var _modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/allItemsCounter.js */ "./src/modules/allItemsCounter.js");





const query = 'action';
const homeItems = document.querySelector('.movie-section__items');
(0,_modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0, query).then((movieList) => {
  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movieList);
  const all = document.querySelectorAll('.movie-wrapper');
  (0,_modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(all, homeItems);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLGVBQWUsY0FBYyxhQUFhLFdBQVcsYUFBYSxZQUFZLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksWUFBWSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdB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Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQjJCO0FBQzhCO0FBQ0Y7QUFDRDs7QUFFdEQ7QUFDQTtBQUNBLHdFQUFZO0FBQ1osRUFBRSxxRUFBYTtBQUNmO0FBQ0EsRUFBRSx1RUFBVTtBQUNaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hbGxJdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnN1bWVJbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29uc3VtZVRWTWF6ZUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYjEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JnLW1vdmllcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9U3BlY3RyYWw6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbmhlYWRlciAuaGVhZGVyLWJyYW5kIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcbmhlYWRlciBuYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuI21vdmllLXNlY3Rpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDMwcHggMyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19pbWcge1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgZ2FwOiAzcHg7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpIHtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6aG92ZXIge1xcbiAgY29sb3I6ICNmZDNmM2Y7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgaTphY3RpdmUge1xcbiAgY29sb3I6ICNmZjAyMDI7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDdweCByZWQ7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgc3BhbiB7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbiB7XFxuICB3aWR0aDogMjQwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmMzg0NztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzg0NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4O1xcbn1cXG5cXG4ubW9kYWxfX2JveCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC45KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vZGFsX19jb250YWluZXIge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA0OHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0biB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzg0NztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVyZW07XFxuICByaWdodDogMC41cmVtO1xcbiAgei1pbmRleDogMTE7XFxufVxcbi5tb2RhbF9fYm94IC5tb2RhbF9fY29udGFpbmVyIC5tb2RhbF9fYnRuIC5idG5fX2Nsb3NlLW1vZGFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODQ3O1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0bjpob3ZlciAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogI2JmYzVjYSAjZGVlMmU2O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgLmJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjM4NDc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgLmJ0bjpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzODQ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzg0NztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzVjYTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2RlZTJlNjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuICAubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzID4gKiB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIGltZyB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyAubW92aWVfX21vcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgLm1vdmllX19tb3JlIC5pdGVtLWNhdGVnb3J5IHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1kYXRlLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tbmFtZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQge1xcbiAgLyogRk9STSBWQUxJREFUSU9OICovXFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzEuMjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gLmlucHV0X19maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNiZmM1Y2E7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSAuaW5wdXRfX2ZpZWxkOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmYzODQ3O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IC5mb3JtX19tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6ICMwNGJkOWU7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICNmZDNmM2Y7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5tb2RhbF9fYm94IC5jb21tZW50ayxcXG4ubW9kYWxfX2JveCAucmVzZXJ2ZWsge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm1vZGFsX19ib3gtZGlzcGxheSAuYm94X19kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDUwcHggYXV0byAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUNTRSw4QkFsQks7RUFtQkwsZUFGZ0I7RUFHaEIsZ0JBSDBCO0VBSTFCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0F0Qks7RUF1Qkwsc0JBUDBFO0VETDFFLG1EQUFBO0FBSUY7O0FBREE7RUVWRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VGVUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ2xCVztFRG1CWCxhQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSkU7RUNsQkEsZ0NBVEs7RUFVTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQVpLO0VBYUwseUJBUDBFO0VEc0J4RSxxQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVdKO0FBUEk7RUFDRSxnQkFBQTtFRWpDSixhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FGMkNGO0FBUlE7RUFDRSxxQkFBQTtFQ3BDUixnQ0FUSztFQVVMLGVBRmdCO0VBR2hCLGdCRG9DNkI7RUNuQzdCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0FaSztFQWFMLHlCQVAwRTtBRHNENUU7O0FBUkE7RUVoREUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFRmdEQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQWFGO0FBWEU7RUVqRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFB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LHlCQy9YVztFRGdZWCxhQUFBO0VBQ0EsWUFBQTtFQ25YQSw4QkFsQks7RUFtQkwsZUFGZ0I7RUFHaEIsZ0JEbVhxQjtFQ2xYckIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQXRCSztFQXVCTCxzQkFQMEU7QURzWDVFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcclxcbkBpbXBvcnQgJ21peGlucyc7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBAaW5jbHVkZSBmb250LWI7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2IxLnBuZyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuICAuaGVhZGVyLWJyYW5kIHtcXHJcXG4gICAgQGluY2x1ZGUgZm9udC1oO1xcclxcblxcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvbG9nby5zdmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIG5hdiB7XFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgICAgIGxpIHtcXHJcXG4gICAgICAgIGEge1xcclxcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtaCgkZnc6IDYwMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbiNtb3ZpZS1zZWN0aW9uIHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGdhcDogMzBweCAzJTtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcclxcblxcclxcbiAgLm1vdmllLXdyYXBwZXIge1xcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcclxcblxcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXHJcXG5cXHJcXG4gICAgLm1vdmllLXdyYXBwZXJfX2ltZyB7XFxyXFxuICAgICAgd2lkdGg6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxyXFxuICAgICAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuXFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICAgIGhlaWdodDogNDhweDtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICAgIGNvbG9yOiAjZmZmO1xcclxcblxcclxcbiAgICAgIC5tb3ZpZS13cmFwcGVyX19saWtlcyB7XFxyXFxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcclxcblxcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHdpZHRoOiA1NXB4O1xcclxcbiAgICAgICAgZ2FwOiAzcHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG5cXHJcXG4gICAgICAgIGkge1xcclxcbiAgICAgICAgICBjb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcbiAgICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2ZkM2YzZjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyLCAyKTtcXHJcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDdweCByZWQ7XFxyXFxuICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHNwYW4ge1xcclxcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbiB7XFxyXFxuICAgICAgd2lkdGg6IDI0MHB4O1xcclxcbiAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgJGFjY2VudDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBjb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJjphY3RpdmUge1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19ib3gge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuOSk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gIC5tb2RhbF9fY29udGFpbmVyIHtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIG1heC13aWR0aDogNDhyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmctbW92aWVzLnN2ZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcclxcblxcclxcbiAgICAubW9kYWxfX2J0biB7XFxyXFxuICAgICAgd2lkdGg6IDJyZW07XFxyXFxuICAgICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50O1xcclxcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgdG9wOiAwLjVyZW07XFxyXFxuICAgICAgcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgICB6LWluZGV4OiAxMTtcXHJcXG5cXHJcXG4gICAgICAuYnRuX19jbG9zZS1tb2RhbCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICBvdXRsaW5lOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAxLjI1cmVtLCAkY29sb3I6ICRhY2NlbnQpO1xcclxcblxcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxyXFxuXFxyXFxuICAgICAgICAuYnRuX19jbG9zZS1tb2RhbCB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllX19jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjgpO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAycmVtLCAkZnc6IGJvbGQsICR0dDogdXBwZXJjYXNlKTtcXHJcXG5cXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHVsIHtcXHJcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcblxcclxcbiAgICAgIGxpIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idG4ge1xcclxcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50O1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGNvbG9yOiAkYWNjZW50KTtcXHJcXG5cXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxyXFxuICAgICAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcclxcbiAgICBzY3JvbGxiYXItY29sb3I6ICRncmF5LWRhcmsgJGdyYXktbGlnaHQ7XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1kYXJrO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICAgIHdpZHRoOiA2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1xKCRtdzogNDhyZW0pIHtcXHJcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9fZGV0YWlscyB7XFxyXFxuICAgID4gKiB7XFxyXFxuICAgICAgd2lkdGg6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMjEwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5tb3ZpZV9fbW9yZSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuXFxyXFxuICAgICAgLml0ZW0tY2F0ZWdvcnkge1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLm1vdmllX19jb21tZW50cyB7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcblxcclxcbiAgICAuaXRlbS1kYXRlLFxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfX2FkZC1jb21tZW50IHtcXHJcXG4gICAgZm9ybSB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAzMS4yNXJlbTtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW07XFxyXFxuXFxyXFxuICAgICAgPiAqIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgID4gOmxhc3QtY2hpbGQge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgLmlucHV0X19maWVsZCB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRncmF5LWRhcms7XFxyXFxuXFxyXFxuICAgICAgICBAaW5jbHVkZSBmb250LWI7XFxyXFxuXFxyXFxuICAgICAgICAmOmZvY3VzIHtcXHJcXG4gICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC8qIEZPUk0gVkFMSURBVElPTiAqL1xcclxcbiAgICAuZm9ybV9fbWVzc2FnZSB7XFxyXFxuICAgICAgLy8gZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICBwYWRkaW5nOiAwLjNyZW07XFxyXFxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgICAgY29sb3I6ICMwNGJkOWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xcclxcbiAgICAgIGNvbG9yOiAjZmQzZjNmO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC52aXNpYmxlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbW1lbnRrLFxcclxcbiAgLnJlc2VydmVrIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19ib3gtZGlzcGxheVxcclxcbi5ib3hfX2Rpc3BsYXkge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtcm93O1xcclxcblxcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiA5MCU7XFxyXFxuICBtYXJnaW46IDUwcHggYXV0byAxMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHQ7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcblxcclxcbiAgQGluY2x1ZGUgZm9udC1iKCRmdzogNDAwKTtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJsYTppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVNwZWN0cmFsOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4kZmYtaDogJ0thcmxhJywgc2Fucy1zZXJpZjtcXHJcXG4kZmYtYjogJ1NwZWN0cmFsJywgc2VyaWY7XFxyXFxuJGJhc2U6ICMwMjMwNDc7XFxyXFxuJGFjY2VudDogI2ZmMzg0NztcXHJcXG4kcGluazogI2U2OGFiNDtcXHJcXG4kZ3JheS1saWdodDogI2RlZTJlNjtcXHJcXG4kZ3JheS1kYXJrOiAjYmZjNWNhO1xcclxcblxcclxcbkBtaXhpbiBmb250LWgoJGZzOjFyZW0sICRmdzozMDAsICRsaDoxLjZyZW0sICRsczpub3JtYWwsICRjb2xvcjogJGJhc2UsICR0dDp1cHBlcmNhc2UpIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZmYtaDtcXHJcXG4gIGZvbnQtc2l6ZTogJGZzO1xcclxcbiAgZm9udC13ZWlnaHQ6ICRmdztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAkbHM7XFxyXFxuICBsaW5lLWhlaWdodDogJGxoO1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiAkdHQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmb250LWIoJGZzOjFyZW0sICRmdzozMDAsICRsaDoxLjJyZW0sICRsczpub3JtYWwsICRjb2xvcjogJGJhc2UsICR0dDpub3JtYWwpIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZmYtYjtcXHJcXG4gIGZvbnQtc2l6ZTogJGZzO1xcclxcbiAgZm9udC13ZWlnaHQ6ICRmdztcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAkbHM7XFxyXFxuICBsaW5lLWhlaWdodDogJGxoO1xcclxcbiAgY29sb3I6ICRjb2xvcjtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiAkdHQ7XFxyXFxufVxcclxcblwiLFwiQG1peGluIGZsZXgtY29sdW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtcm93IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmbGV4LWNlbnRlciB7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBtcSAoJG13OjUwcmVtKSB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogJG13KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHRvdGFsSXRlbXMgPSAoYXJyLCBkb21FbGVtZW50KSA9PiB7XG4gIGxldCBsZW5ndGggPSAwO1xuICB3aGlsZSAoYXJyW2xlbmd0aF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCArPSAxO1xuICB9XG4gIGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gYCgke2xlbmd0aH0pYDtcbiAgcmV0dXJuIGxlbmd0aDtcbn07XG5cbmV4cG9ydCB7IHRvdGFsSXRlbXMgYXMgZGVmYXVsdCB9O1xuIiwiY29uc3QgaUJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvemdnRUJYenBGY1FxakR4dk1oTXovJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9Y29tbWVudHM/aXRlbV9pZD0ke21vdmllSWR9YCk7XG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9IGF3YWl0IGNvbm5lY3QuanNvbigpO1xuICBpZiAoY29tbWVudHNMaXN0LmVycm9yKSByZXR1cm4gW107XG4gIHJldHVybiBjb21tZW50c0xpc3Q7XG59O1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKG1vdmllSWQsIHVzZXJuYW1lLCBjb21tZW50KSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtpQmFzZVVSTH1jb21tZW50c2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBtb3ZpZUlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBjb21tZW50LFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGNvdW50Q29tbWVudHMgPSAoYXJyKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY291bnQgKz0gMTtcbiAgfVxuICByZXR1cm4gYENvbW1lbnRzICgke2NvdW50fSlgO1xufTtcblxuY29uc3QgZ2V0UmVzZXJ2YXRpb25zID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfXJlc2VydmF0aW9ucz9pdGVtX2lkPSR7bW92aWVJZH1gKTtcbiAgY29uc3QgY29tbWVudHNMaXN0ID0gYXdhaXQgY29ubmVjdC5qc29uKCk7XG4gIGlmIChjb21tZW50c0xpc3QuZXJyb3IpIHJldHVybiBbXTtcbiAgcmV0dXJuIGNvbW1lbnRzTGlzdDtcbn07XG5cbmNvbnN0IGFkZFJlc2VydmF0aW9uID0gYXN5bmMgKG1vdmllSWQsIHVzZXJuYW1lLCBkYXRlX3N0YXJ0LCBkYXRlX2VuZCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9cmVzZXJ2YXRpb25zL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBtb3ZpZUlkLFxuICAgICAgdXNlcm5hbWUsXG4gICAgICBkYXRlX3N0YXJ0LFxuICAgICAgZGF0ZV9lbmQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0LnRleHQoKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRSZXNlcnZhdGlvbnMgPSAoYXJyKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY291bnQgKz0gMTtcbiAgfVxuICByZXR1cm4gYFJlc2VydmF0aW9ucyAoJHtjb3VudH0pYDtcbn07XG5cbmV4cG9ydCB7XG4gIGdldENvbW1lbnRzLCBhZGRDb21tZW50LCBjb3VudENvbW1lbnRzLCBnZXRSZXNlcnZhdGlvbnMsIGFkZFJlc2VydmF0aW9uLCBjb3VudFJlc2VydmF0aW9ucyxcbn07IiwiY29uc3QgYmFzZVVSTCA9ICcgaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG5cbmNvbnN0IGdldE1vdmllRGF0YSA9IGFzeW5jIChpbmRleCwgcXVlcnkpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L3Nob3dzP3E9JHtxdWVyeX1gKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0Lmpzb24oKS50aGVuKChkYXRhTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNob3J0TGlzdCA9IGRhdGFMaXN0LnNsaWNlKGluZGV4LCBpbmRleCArIDUwKTtcbiAgICBzaG9ydExpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIGdlbnJlczogaXRlbS5nZW5yZXMsXG4gICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxuICAgICAgICBlbmQ6IGl0ZW0uZW5kZWQsXG4gICAgICAgIHJhdGluZzogaXRlbS5yYXRpbmcsXG4gICAgICAgIHN1bW1hcnk6IGl0ZW0uc3VtbWFyeSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pO1xuICAgIHJldHVybiBzaG9ydExpc3Q7XG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBnZXRNb3ZpZURhdGEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0ICogYXMgQ0lBUEkgZnJvbSAnLi9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94Jyk7XG5jb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2NvbW1lbnQnKTtcbmNvbnN0IGZvcm1NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX21lc3NhZ2UnKTtcbmxldCB0aW1lcklkID0gJyc7XG5cbmNvbnN0IGFyckludG9TdHJpbmcgPSAoYXJyKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgc3RyICs9IGAke2VsfSB8IGA7XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgYnVpbGRNb3ZpZURlc2NyaXB0aW9uID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbW92aWVEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX19kZXRhaWxzJyk7XG4gIG1vdmllRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVpZCcsIGRhdGEuaWQpO1xuICBtb3ZpZURldGFpbHMuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke2RhdGEubmFtZX0gbW92aWUgaW1hZ2VcIj5cbiAgICAgICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vdmllX19tb3JlXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+R2VucmU6PC9zcGFuPlxuICAgICAgICAgICAgPHA+JHthcnJJbnRvU3RyaW5nKGRhdGEuZ2VucmVzKX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5FbmRlZDo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2RhdGEuZW5kZWR9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+UmF0aW5nOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5yYXRpbmcuYXZlcmFnZX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgJHtkYXRhLnN1bW1hcnl9YDtcbn07XG5cbmNvbnN0IGJ1aWxkTW92aWVDb21tZW50cyA9IChhcnIpID0+IHtcbiAgY29uc3QgbW92aWVDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fY29tbWVudHMnKTtcbiAgbW92aWVDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IENJQVBJLmNvdW50Q29tbWVudHMoYXJyKTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29tbWVudExpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHNfX2xpc3QnKTtcbiAgYXJyLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwib3duZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XG59O1xuXG5jb25zdCBidWlsZE1vdmllUmVzZXJ2YXRpb25zID0gKGFycikgPT4ge1xuICBjb25zdCBtb3ZpZVJlc2VydmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fcmVzZXJ2c3Rpb25zJyk7XG4gIG1vdmllUmVzZXJ2YXRpb25zLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gQ0lBUEkuY291bnRSZXNlcnZhdGlvbnMoYXJyKTtcbiAgbW92aWVSZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCByZXNlcnZhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICByZXNlcnZhdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHNfX2xpc3QnKTtcbiAgYXJyLmZvckVhY2goKHJlc2VydmUpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuPiR7cmVzZXJ2ZS5kYXRlX3N0YXJ0fSAtICR7cmVzZXJ2ZS5kYXRlX2VuZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1uYW1lXCI+IGJ5ICR7cmVzZXJ2ZS51c2VybmFtZX06PC9zcGFuPmA7XG4gICAgcmVzZXJ2YXRpb25MaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG4gIG1vdmllUmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uTGlzdCk7XG59O1xuXG5jb25zdCBvcGVuU2VsZWN0ZWRCb3hlcyA9IChpZGVudCkgPT4ge1xuICBjb25zb2xlLmxvZyhpZGVudCk7XG4gIGNvbnN0IHsgbGlzdGssIGZvcm1rIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtpZGVudH1gKTtcbiAgbGlzdGsuY2xhc3NMaXN0LmFkZCgnYm94X19kaXNwbGF5Jyk7XG4gIGZvcm1rLmNsYXNzTGlzdC5hZGQoJ2JveF9fZGlzcGxheScpO1xuICBtb2RhbEJveC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYm94LWRpc3BsYXknKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZUNvbW1lbnRzID0gKG1vdmllKSA9PiB7XG4gIGJ1aWxkTW92aWVEZXNjcmlwdGlvbihtb3ZpZSk7XG4gIENJQVBJLmdldENvbW1lbnRzKG1vdmllLmlkKS50aGVuKChsaXN0KSA9PiB7XG4gICAgYnVpbGRNb3ZpZUNvbW1lbnRzKGxpc3QpO1xuICAgIG9wZW5TZWxlY3RlZEJveGVzKCdjb21tZW50aycpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZVJlc2VydmF0aW9ucyA9IChtb3ZpZSkgPT4ge1xuICBidWlsZE1vdmllRGVzY3JpcHRpb24obW92aWUpO1xuICBDSUFQSS5nZXRSZXNlcnZhdGlvbnMobW92aWUuaWQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICBidWlsZE1vdmllUmVzZXJ2YXRpb25zKGxpc3QpO1xuICAgIG9wZW5TZWxlY3RlZEJveGVzKCdyZXNlcnZhdGlvbmsnKTtcbiAgfSk7XG59O1xuXG5tb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBsZXQgaWRlbnQgPSAnY29tbWVudGsnO1xuICBjb25zdCByZXZPcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbW92aWVfX2NvbnRhaW5lciByZXNlcnZhdGlvbmsnKTtcbiAgaWYgKHJldk9wZW4pIGlkZW50ID0gJ3Jlc2VydmVrJztcbiAgY29uc3QgeyBsaXN0aywgZm9ybWsgfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaWRlbnQpO1xuICBtb2RhbEJveC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbF9fYm94LWRpc3BsYXknKTtcbiAgbGlzdGsuY2xhc3NMaXN0LnJlbW92ZSgnYm94X19kaXNwbGF5Jyk7XG4gIGZvcm1rLmNsYXNzTGlzdC5yZW1vdmUoJ2JveF9fZGlzcGxheScpO1xufSk7XG5cbmNvbnN0IGRpc3BsYXlNZXNzYWdlID0gKG1zZykgPT4ge1xuICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gIGlmIChtc2cpIHtcbiAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9IG1zZztcbiAgICBmb3JtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gIH1cbiAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItbWVzc2FnZScsICd2aXNpYmxlJyk7XG4gIH0sIDUwMDApO1xufTtcblxuY29uc3QgdmFsaWRTdHJpbmcgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIubWF0Y2goL15bYS16QS1aMC05w4Atw79cXHUwMGYxXFx1MDBkMVxcdTAwRTBcXHUwMEZDX1xcLSBdezEsMzB9JC8pKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdmFsaWRGb3JtID0gKG5hbWUsIGNvbW1lbnQpID0+IHtcbiAgbmFtZS52YWx1ZSA9IG5hbWUudmFsdWUudHJpbSgpO1xuICBjb21tZW50LnZhbHVlID0gY29tbWVudC52YWx1ZS50cmltKCk7XG4gIGlmICghdmFsaWRTdHJpbmcobmFtZS52YWx1ZSkpIHtcbiAgICBuYW1lLmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoJ05hbWUgZmllbGQgb25seSBhbGxvd3MgYWxwaGFudW1lcmljLCBoeXBoZW5zLCB1bmRlcnNjb3JlcywgYW5kIG1heCAzMCBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoY29tbWVudC52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZS5sZW5ndGggPiAyNTApIHtcbiAgICBjb21tZW50LmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoJ0luc2lnaHRzIGZpZWxkIGFsbG93cyAxIHRvIDI1MCBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNlbmRDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9fdXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBfX2luc2lnaHRzJyk7XG4gIGNvbnN0IG1vdmllSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVfX2RldGFpbHMnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVJZCcpO1xuXG4gIGlmICh2YWxpZEZvcm0obmFtZSwgY29tbWVudCkpIHtcbiAgICBDSUFQSS5hZGRDb21tZW50KG1vdmllSWQsIG5hbWUudmFsdWUsIGNvbW1lbnQudmFsdWUpLnRoZW4oKGFucykgPT4ge1xuICAgICAgaWYgKGFucyA9PT0gJ0NyZWF0ZWQnKSB7XG4gICAgICAgIENJQVBJLmdldENvbW1lbnRzKG1vdmllSWQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgICAgICBidWlsZE1vdmllQ29tbWVudHMobGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBuYW1lLnZhbHVlID0gJyc7XG4gICAgICAgIG5hbWUuZm9jdXMoKTtcbiAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDb21tZW50IHNlbnQgc3VjY2Vzc2Z1bGx5JztcbiAgICAgICAgZGlzcGxheU1lc3NhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKCdDb21tZW50cyBhcmUgbm90IGF2YWlsYWJsZSBmb3Igbm93LiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2VuZENvbW1lbnQoKTtcbn0pO1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVDb21tZW50cywgZGlzcGxheU1vdmllUmVzZXJ2YXRpb25zIH07IiwiaW1wb3J0IHsgdXBkYXRlTGlrZXMsIHNldExpa2UgfSBmcm9tICcuL2xpa2VGdW5jdGlvbmFsaXR5LmpzJztcbmltcG9ydCB7IGRpc3BsYXlNb3ZpZUNvbW1lbnRzLCBkaXNwbGF5TW92aWVSZXNlcnZhdGlvbnMgfSBmcm9tICcuL2Rpc3BsYXlNb3ZpZURldGFpbHMuanMnO1xuXG5jb25zdCBkaXNwbGF5TW92aWVzID0gYXN5bmMgKG1vdmllTGlzdCkgPT4ge1xuICBjb25zdCBtb3ZpZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW92aWUtc2VjdGlvbicpO1xuICBtb3ZpZVNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gIG1vdmllTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXInO1xuICAgIG1haW5EaXYuaWQgPSBgbW92aWUke2l0ZW0uaWR9YDtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlscy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fdGl0bGUnO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9faW1nJztcbiAgICBpbWcuc3JjID0gaXRlbS5pbWFnZS5tZWRpdW07XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHtpdGVtLm5hbWV9YDtcbiAgICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpa2VzLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19saWtlcyc7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGxpa2UuY2xhc3NOYW1lID0gJ2ZhcyBmYS1oZWFydCc7XG4gICAgbGlrZXMuYXBwZW5kKGxpa2UsIHNwYW4pO1xuICAgIGRldGFpbHMuYXBwZW5kKG5hbWUsIGxpa2VzKTtcbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29tbWVudEJ1dHRvbi5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICAgIGNvbW1lbnRCdXR0b24uY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uJztcbiAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheU1vdmllQ29tbWVudHMoaXRlbSk7XG4gICAgfSk7XG4gICAgbWFpbkRpdi5hcHBlbmQoaW1nLCBkZXRhaWxzLCBjb21tZW50QnV0dG9uKTtcbiAgICBjb25zdCByZXNlcnZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5pbm5lckhUTUwgPSAnUmVzZXJ2YXRpb25zJztcbiAgICByZXNlcnZlQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbic7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRpc3BsYXlNb3ZpZVJlc2VydmF0aW9ucyhpdGVtKTtcbiAgICB9KTtcbiAgICBtYWluRGl2LmFwcGVuZChyZXNlcnZlQnV0dG9uKTtcbiAgICBtb3ZpZVNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNldExpa2UoYG1vdmllJHtpdGVtLmlkfWApO1xuICAgICAgY29uc3QgbnVtYmVyID0gbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC50ZXh0Q29udGVudC5zcGxpdCgnICcpO1xuICAgICAgbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC5pbm5lckhUTUwgPSBgJHtOdW1iZXIobnVtYmVyWzBdKSArIDF9IGxpa2VzYDtcbiAgICB9KTtcbiAgfSk7XG4gIHVwZGF0ZUxpa2VzKCk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVzIGFzIGRlZmF1bHQgfTtcbiIsImNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGFwcElEID0gJ3pnZ0VCWHpwRmNRcWpEeHZNaE16JztcblxuY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElEfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vSlNPTicgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHthcHBJRH0vbGlrZXM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3QuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuLy8gZmV0Y2goYmFzZVVSTCwge1xuLy8gICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL0pTT04nIH0sXG4vLyB9KS50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UudGV4dCgpKSk7XG4vLyAvLyB9KTtcblxuY29uc3QgdXBkYXRlTGlrZXMgPSAoKSA9PiB7XG4gIGdldExpa2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VsZW1lbnQuaXRlbV9pZH1gKTtcbiAgICAgIGNvbnRhaW5lci5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSBgJHtlbGVtZW50Lmxpa2VzfSBsaWtlc2A7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlTGlrZXMsIHNldExpa2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZ2V0TW92aWVEYXRhIGZyb20gJy4vbW9kdWxlcy9jb25zdW1lVFZNYXplQVBJLmpzJztcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TW92aWVzLmpzJztcbmltcG9ydCB0b3RhbEl0ZW1zIGZyb20gJy4vbW9kdWxlcy9hbGxJdGVtc0NvdW50ZXIuanMnO1xuXG5jb25zdCBxdWVyeSA9ICdhY3Rpb24nO1xuY29uc3QgaG9tZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXNlY3Rpb25fX2l0ZW1zJyk7XG5nZXRNb3ZpZURhdGEoMCwgcXVlcnkpLnRoZW4oKG1vdmllTGlzdCkgPT4ge1xuICBkaXNwbGF5TW92aWVzKG1vdmllTGlzdCk7XG4gIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZpZS13cmFwcGVyJyk7XG4gIHRvdGFsSXRlbXMoYWxsLCBob21lSXRlbXMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=