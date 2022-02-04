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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n  position: relative;\n}\nheader .header-brand {\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  text-decoration: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  height: 50px;\n  width: 110px;\n}\nheader .navbar__menu-button {\n  width: 2rem;\n  height: 2rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\nheader .navbar__menu-button i {\n  font-size: 1.5rem;\n  color: #023047;\n  transition: color ease-out 250ms;\n}\nheader .navbar__menu-button i:hover {\n  color: #ff3847;\n}\n@media (min-width: 600px) {\n  header .navbar__menu-button {\n    display: none;\n  }\n}\nheader .header-nav {\n  display: none;\n}\nheader .header-nav ul {\n  list-style: none;\n  gap: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nheader .header-nav ul li a {\n  text-decoration: none;\n  border: 1px solid transparent;\n  padding: 1px;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n}\nheader .header-nav ul li a:hover {\n  border-color: #ff3847;\n  color: #ff3847;\n}\n@media (min-width: 600px) {\n  header .header-nav {\n    display: flex;\n  }\n  header .header-nav ul {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: flex-start;\n  }\n}\nheader .header-nav-modal {\n  display: flex;\n  padding: 1rem;\n  background-color: #dee2e6;\n  position: absolute;\n  top: 100%;\n  right: 0;\n  z-index: 11;\n}\nheader .header-nav-modal li {\n  padding: 0.5rem;\n  border-bottom: 1px solid #bfc5ca;\n}\n\n.movie-sec,\n.bluRay-sec {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n}\n.movie-sec .movie-wrapper,\n.bluRay-sec .movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  gap: 5px;\n  background-color: #111;\n}\n.movie-sec .movie-wrapper .movie-wrapper__img,\n.bluRay-sec .movie-wrapper .movie-wrapper__img {\n  width: 250px;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title,\n.bluRay-sec .movie-wrapper .movie-wrapper__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  width: 240px;\n  height: 48px;\n  line-height: 1.2;\n  color: #fff;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  width: 55px;\n  gap: 3px;\n  margin-left: 1rem;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i {\n  color: #ff3847;\n  cursor: pointer;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover {\n  color: #fd3f3f;\n  transform: scale(1.2);\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active {\n  color: #ff0202;\n  text-shadow: 0 0 7px #ff0202;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span {\n  font-size: 0.75rem;\n}\n.movie-sec .movie-wrapper .movie-wrapper__comment-button,\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button {\n  width: 240px;\n  border: none;\n  outline: 1px solid #ff3847;\n  background-color: transparent;\n  color: #ff3847;\n  padding: 0.25rem 0;\n  cursor: pointer;\n  transition: background-color ease-out 250ms;\n  margin-bottom: 5px;\n}\n.movie-sec .movie-wrapper .movie-wrapper__comment-button:hover,\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button:hover {\n  background-color: #ff3847;\n  color: white;\n}\n.movie-sec .movie-wrapper .movie-wrapper__comment-button:active,\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button:active {\n  box-shadow: inset 0 0 5px;\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(32, 32, 32, 0.9);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\n.modal__box .modal__container {\n  height: 90%;\n  width: 90%;\n  max-width: 48rem;\n  background-color: #fff;\n  border-radius: 5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-clip: border-box;\n  background-size: cover;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .modal__container .modal__btn {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 1px solid #ff3847;\n  transition: background-color ease-out 250ms;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 11;\n}\n.modal__box .modal__container .modal__btn .btn__close-modal {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.modal__box .modal__container .modal__btn:hover {\n  background-color: #ff3847;\n}\n.modal__box .modal__container .modal__btn:hover .btn__close-modal {\n  color: #fff;\n}\n.modal__box .movie__container {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  overflow-y: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  position: relative;\n  scrollbar-width: thin;\n  scrollbar-color: #bfc5ca #dee2e6;\n}\n.modal__box .movie__container > * {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__container h2 {\n  font-family: \"Karla\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container h3 {\n  margin-bottom: 1rem;\n}\n.modal__box .movie__container ul {\n  list-style: none;\n}\n.modal__box .movie__container ul li {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n}\n.modal__box .movie__container .btn {\n  padding: 0.25rem 0.5rem;\n  background: transparent;\n  border: 1px solid #ff3847;\n  cursor: pointer;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n.modal__box .movie__container .btn:hover {\n  border: 1px solid #ff3847;\n  background-color: #ff3847;\n  color: #fff;\n}\n.modal__box .movie__container::-webkit-scrollbar-thumb {\n  background-color: #bfc5ca;\n  border-radius: 20px;\n}\n.modal__box .movie__container::-webkit-scrollbar {\n  width: 6px;\n}\n.modal__box .movie__container::-webkit-scrollbar-track {\n  background: #dee2e6;\n}\n@media (min-width: 48rem) {\n  .modal__box .movie__container {\n    padding: 1.5rem;\n  }\n}\n.modal__box .movie__details > * {\n  width: auto;\n}\n.modal__box .movie__details img {\n  width: 210px;\n  height: auto;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.modal__box .movie__details .movie__more {\n  margin: 0;\n  width: auto;\n  margin-bottom: 1rem;\n}\n.modal__box .movie__details .movie__more .item-category {\n  margin-right: 0.5rem;\n  font-weight: 600;\n}\n.modal__box .movie__comments,\n.modal__box .movie__reservations {\n  clear: both;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__comments .item-name,\n.modal__box .movie__reservations .item-date,\n.modal__box .movie__reservations .item-name {\n  margin-right: 0.5rem;\n}\n.modal__box .movie__comments .item-name,\n.modal__box .movie__reservations .item-name {\n  font-weight: 600;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__reservations .item-date {\n  font-weight: 400;\n}\n.modal__box .movie__add-comment {\n  /* FORM VALIDATION */\n}\n.modal__box .movie__add-comment form {\n  width: 100%;\n  max-width: 31.25rem;\n  padding-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .movie__add-comment form > * {\n  margin-bottom: 0.75rem;\n}\n.modal__box .movie__add-comment form > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__add-comment form .input__field {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  background-color: transparent;\n  outline: 1px solid #bfc5ca;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}\n.modal__box .movie__add-comment form .input__field:focus {\n  outline: 1px solid #ff3847;\n}\n.modal__box .movie__add-comment .form__message {\n  display: none;\n  padding: 0.3rem;\n  font-size: 0.9rem;\n  color: #02a58a;\n}\n.modal__box .movie__add-comment .error-message {\n  color: #ff0202;\n}\n.modal__box .movie__add-comment .visible {\n  display: block;\n}\n\n.modal__box-display {\n  display: flex;\n}\n\n.box__hide {\n  display: none;\n}\n\nfooter {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto 10px;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}\n\n.toggle {\n  display: none;\n}\n\n.active {\n  font-style: italic;\n  font-weight: 900;\n  padding: 2px;\n}\n\n.about-sec .about-section__container {\n  border: 5px solid white;\n  width: 90%;\n  max-width: 700px;\n  min-height: 65vh;\n  padding: 50px;\n  margin: auto;\n  text-align: center;\n}\n.about-sec .about-section__container h2 {\n  margin: auto auto 80px;\n  font-family: \"Karla\", sans-serif;\n  font-size: 4rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1;\n  color: #023047;\n  text-transform: uppercase;\n  color: #ff3847;\n  background-color: white;\n  border: 1px solid;\n}\n.about-sec .about-section__container p {\n  font-size: 1.2rem;\n  line-height: 1.7;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'typography';\r\n@import 'mixins';\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody {\r\n  @include font-b;\r\n\r\n  background: url(../images/b1.png);\r\n}\r\n\r\nheader {\r\n  @include flex-row;\r\n\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 90%;\r\n  margin: 50px auto;\r\n  background-color: $gray-light;\r\n  padding: 30px;\r\n  height: 50px;\r\n  position: relative;\r\n\r\n  .header-brand {\r\n    @include font-h;\r\n\r\n    text-decoration: none;\r\n    background-image: url(../images/logo.svg);\r\n    background-repeat: no-repeat;\r\n    height: 50px;\r\n    width: 110px;\r\n  }\r\n\r\n  .navbar__menu-button {\r\n    width: 2rem;\r\n    height: 2rem;\r\n    background-color: transparent;\r\n    border: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n\r\n    i {\r\n      font-size: 1.5rem;\r\n      color: $base;\r\n      transition: color ease-out 250ms;\r\n\r\n      &:hover {\r\n        color: $accent;\r\n      }\r\n    }\r\n\r\n    @include mq($mw: 600px){\r\n      display: none;\r\n    }\r\n  }\r\n\r\n  .header-nav {\r\n    display: none;\r\n\r\n    ul {\r\n      list-style: none;\r\n      gap: 20px;\r\n\r\n      @include flex-colum;\r\n\r\n      li {\r\n        a {\r\n          text-decoration: none;\r\n          border: 1px solid transparent;\r\n          padding: 1px;\r\n\r\n          &:hover {\r\n            border-color: $accent;\r\n            color: $accent;\r\n          }\r\n\r\n          @include font-h($fw: 600);\r\n        }\r\n      }\r\n    }\r\n\r\n    @include mq($mw: 600px){\r\n      display: flex;\r\n\r\n      ul {\r\n        @include flex-row;\r\n      }\r\n    }\r\n  }\r\n\r\n  .header-nav-modal {\r\n    display: flex;\r\n    padding: 1rem;\r\n    background-color: $gray-light;\r\n    position: absolute;\r\n    top: 100%;\r\n    right: 0;\r\n    z-index: 11;\r\n\r\n    li {\r\n      padding: 0.5rem;\r\n      border-bottom: 1px solid $gray-dark;\r\n    }\r\n  }\r\n}\r\n\r\n.movie-sec,\r\n.bluRay-sec {\r\n  @include flex-row;\r\n\r\n  flex-wrap: wrap;\r\n  width: 90%;\r\n  margin: auto;\r\n  gap: 30px 3%;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n\r\n  .movie-wrapper {\r\n    @include flex-colum;\r\n\r\n    align-items: center;\r\n    gap: 5px;\r\n    background-color: #111;\r\n\r\n    .movie-wrapper__img {\r\n      width: 250px;\r\n    }\r\n\r\n    .movie-wrapper__title {\r\n      @include flex-row;\r\n\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      gap: 5px;\r\n      width: 240px;\r\n      height: 48px;\r\n      line-height: 1.2;\r\n      color: #fff;\r\n\r\n      .movie-wrapper__likes {\r\n        @include flex-colum;\r\n\r\n        align-items: center;\r\n        width: 55px;\r\n        gap: 3px;\r\n        margin-left: 1rem;\r\n\r\n        i {\r\n          color: $accent;\r\n          cursor: pointer;\r\n\r\n          &:hover {\r\n            color: #fd3f3f;\r\n            transform: scale(1.2);\r\n          }\r\n\r\n          &:active {\r\n            color: $red;\r\n            text-shadow: 0 0 7px $red;\r\n          }\r\n        }\r\n\r\n        span {\r\n          font-size: 0.75rem;\r\n        }\r\n      }\r\n    }\r\n\r\n    .movie-wrapper__comment-button {\r\n      width: 240px;\r\n      border: none;\r\n      outline: 1px solid $accent;\r\n      background-color: transparent;\r\n      color: $accent;\r\n      padding: 0.25rem 0;\r\n      cursor: pointer;\r\n      transition: background-color ease-out 250ms;\r\n      margin-bottom: 5px;\r\n\r\n      &:hover {\r\n        background-color: $accent;\r\n        color: white;\r\n      }\r\n\r\n      &:active {\r\n        box-shadow: inset 0 0 5px;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.modal__box {\r\n  width: 100%;\r\n  background-color: rgba(32, 32, 32, 0.9);\r\n  display: none;\r\n\r\n  @include flex-center;\r\n\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  z-index: 10;\r\n\r\n  .modal__container {\r\n    height: 90%;\r\n    width: 90%;\r\n    max-width: 48rem;\r\n    background-color: #fff;\r\n    border-radius: 5px;\r\n    background-image: url('../images/bg-movies.svg');\r\n    background-repeat: no-repeat;\r\n    background-position: top right;\r\n    background-clip: border-box;\r\n    background-size: cover;\r\n    position: relative;\r\n\r\n    @include flex-colum;\r\n\r\n    .modal__btn {\r\n      width: 2rem;\r\n      height: 2rem;\r\n      border-radius: 50%;\r\n      background-color: transparent;\r\n      border: 1px solid $accent;\r\n      transition: background-color ease-out 250ms;\r\n      display: flex;\r\n\r\n      @include flex-center;\r\n\r\n      position: absolute;\r\n      top: 0.5rem;\r\n      right: 0.5rem;\r\n      z-index: 11;\r\n\r\n      .btn__close-modal {\r\n        width: 100%;\r\n        height: 100%;\r\n        margin: 0;\r\n        padding: 0;\r\n        border: 0;\r\n        outline: 0;\r\n        background-color: transparent;\r\n\r\n        @include font-h($fs: 1.25rem, $color: $accent);\r\n\r\n        cursor: pointer;\r\n      }\r\n\r\n      &:hover {\r\n        background-color: $accent;\r\n\r\n        .btn__close-modal {\r\n          color: #fff;\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__container {\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 1rem;\r\n    overflow-y: auto;\r\n    background-color: rgba($color: #fff, $alpha: 0.8);\r\n    position: relative;\r\n\r\n    > * {\r\n      width: 100%;\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    > :last-child {\r\n      margin-bottom: 0;\r\n    }\r\n\r\n    h2 {\r\n      @include font-h($fs: 2rem, $fw: bold, $tt: uppercase);\r\n\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    h3 {\r\n      margin-bottom: 1rem;\r\n    }\r\n\r\n    ul {\r\n      list-style: none;\r\n\r\n      li {\r\n        @include flex-row;\r\n\r\n        flex-wrap: wrap;\r\n        padding: 0.5rem 0;\r\n      }\r\n    }\r\n\r\n    .btn {\r\n      padding: 0.25rem 0.5rem;\r\n      background: transparent;\r\n      border: 1px solid $accent;\r\n      cursor: pointer;\r\n\r\n      @include font-h($color: $accent);\r\n\r\n      background-color: transparent;\r\n      transition: background-color ease-out 250ms;\r\n\r\n      &:hover {\r\n        border: 1px solid $accent;\r\n        background-color: $accent;\r\n        color: #fff;\r\n      }\r\n    }\r\n\r\n    scrollbar-width: thin;\r\n    scrollbar-color: $gray-dark $gray-light;\r\n\r\n    &::-webkit-scrollbar-thumb {\r\n      background-color: $gray-dark;\r\n      border-radius: 20px;\r\n    }\r\n\r\n    &::-webkit-scrollbar {\r\n      width: 6px;\r\n    }\r\n\r\n    &::-webkit-scrollbar-track {\r\n      background: $gray-light;\r\n    }\r\n\r\n    @include mq($mw: 48rem) {\r\n      padding: 1.5rem;\r\n    }\r\n  }\r\n\r\n  .movie__details {\r\n    > * {\r\n      width: auto;\r\n    }\r\n\r\n    img {\r\n      width: 210px;\r\n      height: auto;\r\n      margin-right: 1rem;\r\n      margin-bottom: 1rem;\r\n      float: left;\r\n    }\r\n\r\n    .movie__more {\r\n      margin: 0;\r\n      width: auto;\r\n      margin-bottom: 1rem;\r\n\r\n      .item-category {\r\n        margin-right: 0.5rem;\r\n        font-weight: 600;\r\n      }\r\n    }\r\n  }\r\n\r\n  .movie__comments,\r\n  .movie__reservations {\r\n    clear: both;\r\n\r\n    .item-date,\r\n    .item-name {\r\n      margin-right: 0.5rem;\r\n    }\r\n\r\n    .item-name {\r\n      font-weight: 600;\r\n    }\r\n\r\n    .item-date {\r\n      font-weight: 400;\r\n    }\r\n  }\r\n\r\n  .movie__add-comment {\r\n    form {\r\n      width: 100%;\r\n      max-width: 31.25rem;\r\n      padding-top: 0.5rem;\r\n\r\n      @include flex-colum;\r\n\r\n      > * {\r\n        margin-bottom: 0.75rem;\r\n      }\r\n\r\n      > :last-child {\r\n        margin-bottom: 0;\r\n      }\r\n\r\n      .input__field {\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n        border: none;\r\n        background-color: transparent;\r\n        outline: 1px solid $gray-dark;\r\n\r\n        @include font-b;\r\n\r\n        &:focus {\r\n          outline: 1px solid $accent;\r\n        }\r\n      }\r\n    }\r\n\r\n    /* FORM VALIDATION */\r\n    .form__message {\r\n      display: none;\r\n      padding: 0.3rem;\r\n      font-size: 0.9rem;\r\n      color: $green;\r\n    }\r\n\r\n    .error-message {\r\n      color: $red;\r\n    }\r\n\r\n    .visible {\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n\r\n.modal__box-display {\r\n  display: flex;\r\n}\r\n\r\n.box__hide {\r\n  display: none;\r\n}\r\n\r\nfooter {\r\n  @include flex-row;\r\n\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 90%;\r\n  margin: 50px auto 10px;\r\n  background-color: $gray-light;\r\n  padding: 30px;\r\n  height: 50px;\r\n\r\n  @include font-b($fw: 400);\r\n}\r\n\r\n.toggle {\r\n  display: none;\r\n}\r\n\r\n.active {\r\n  font-style: italic;\r\n  font-weight: 900;\r\n  padding: 2px;\r\n}\r\n\r\n.about-sec {\r\n  .about-section__container {\r\n    border: 5px solid white;\r\n    width: 90%;\r\n    max-width: 700px;\r\n    min-height: 65vh;\r\n    padding: 50px;\r\n    margin: auto;\r\n    text-align: center;\r\n\r\n    h2 {\r\n      margin: auto auto 80px;\r\n\r\n      @include font-h($fs: 4rem, $fw: bold, $lh: 1);\r\n\r\n      color: $accent;\r\n      background-color: white;\r\n      border: 1px solid;\r\n    }\r\n\r\n    p {\r\n      font-size: 1.2rem;\r\n      line-height: 1.7;\r\n      color: white;\r\n    }\r\n  }\r\n}\r\n","@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\r\n\r\n$ff-h: 'Karla', sans-serif;\r\n$ff-b: 'Spectral', serif;\r\n$base: #023047;\r\n$accent: #ff3847;\r\n$gray-light: #dee2e6;\r\n$gray-dark: #bfc5ca;\r\n$red: #ff0202;\r\n$green: #02a58a;\r\n\r\n@mixin font-h($fs:1rem, $fw:300, $lh:1.6rem, $ls:normal, $color: $base, $tt:uppercase) {\r\n  font-family: $ff-h;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n\r\n@mixin font-b($fs:1rem, $fw:300, $lh:1.2rem, $ls:normal, $color: $base, $tt:normal) {\r\n  font-family: $ff-b;\r\n  font-size: $fs;\r\n  font-weight: $fw;\r\n  letter-spacing: $ls;\r\n  line-height: $lh;\r\n  color: $color;\r\n  text-transform: $tt;\r\n}\r\n","@mixin flex-colum {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-row {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n}\r\n\r\n@mixin flex-center {\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin mq ($mw:50rem) {\r\n  @media (min-width: $mw) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
const iBaseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
let rentedDate = '';

const getComments = async (movieId, appID) => {
  const connect = await fetch(`${iBaseURL}${appID}/comments?item_id=${movieId}`);
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addComment = async (movieId, username, comment, appID) => {
  const connect = await fetch(`${iBaseURL}${appID}/comments`, {
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

const getReservations = async (movieId, appID) => {
  const connect = await fetch(`${iBaseURL}${appID}/reservations?item_id=${movieId}`);
  const reservationsList = await connect.json();
  if (reservationsList.error) return [];
  return reservationsList;
};

const isReserved = async (movieId, dateStart, dateEnd, appID) => {
  const cdS = new Date(dateStart);
  const cdE = new Date(dateEnd);
  const reservationsList = await getReservations(movieId, appID);
  for (let i = 0; i < reservationsList.length; i += 1) {
    const apiS = new Date(reservationsList[i].date_start);
    const apiE = new Date(reservationsList[i].date_end);
    rentedDate = `from ${apiS.toISOString().slice(0, 10)} to ${apiE.toISOString().slice(0, 10)}`;
    if (cdS >= apiS && cdS <= apiE) return true;
    if (cdE >= apiS && cdE <= apiE) return true;
    if (cdS <= apiS && cdE >= apiE) return true;
  }
  return false;
};

const addReservation = async (movieId, username, dateStart, dateEnd, appID) => {
  let response = '';
  const isResev = await isReserved(movieId, dateStart, dateEnd, appID);
  if (!isResev) {
    const connect = await fetch(`${iBaseURL}${appID}/reservations/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: movieId,
        username,
        date_start: dateStart,
        date_end: dateEnd,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    response = await connect.text();
  } else {
    response = `This movie is already rented ${rentedDate}.`;
  }
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

const getMovieData = async (index, query, total) => {
  const connect = await fetch(`${baseURL}/shows?q=${query}`);
  const response = await connect.json().then((dataList) => {
    const shortList = dataList.slice(index, index + total);
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
const reservationForm = document.querySelector('#form__reservation');
const formMessageCom = document.querySelector('#form__message-com');
const formMessageRes = document.querySelector('#form__message-res');
let timerId = '';
let newID = '';

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
  const movieReservations = document.querySelector('.movie__reservations');
  movieReservations.innerHTML = '';
  const title = document.createElement('h3');
  title.textContent = _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.countReservations(arr);
  movieReservations.appendChild(title);
  const reservationList = document.createElement('ul');
  reservationList.classList.add('comments__list');
  arr.forEach((reserve) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<span class="item-date">${reserve.date_start} to ${reserve.date_end}</span>
              <span>by ${reserve.username}</span>`;
    reservationList.appendChild(listItem);
  });
  movieReservations.appendChild(reservationList);
};

const closeBox = (ident) => {
  const elDom = document.querySelectorAll(`.${ident}`);
  elDom.forEach((el) => {
    el.classList.add('box__hide');
  });
};

const displayMovieComments = (movie, appID) => {
  buildMovieDescription(movie);
  newID = appID;
  _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments(movie.id, appID).then((list) => {
    buildMovieComments(list);
    closeBox('reservationk');
    modalBox.classList.add('modal__box-display');
  });
};

const displayMovieReservations = (movie, appID) => {
  buildMovieDescription(movie);
  newID = appID;
  _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getReservations(movie.id, appID).then((list) => {
    buildMovieReservations(list);
    closeBox('commentk');
    modalBox.classList.add('modal__box-display');
  });
};

modalCloseBtn.addEventListener('click', () => {
  const comBox = document.querySelectorAll('.commentk');
  comBox.forEach((el) => {
    el.classList.remove('box__hide');
  });
  const resBox = document.querySelectorAll('.reservationk');
  resBox.forEach((el) => {
    el.classList.remove('box__hide');
  });
  modalBox.classList.remove('modal__box-display');
});

const displayMessage = (eldom, msg) => {
  clearTimeout(timerId);
  if (msg) {
    eldom.textContent = msg;
    eldom.classList.add('error-message');
  }
  eldom.classList.add('visible');
  timerId = setTimeout(() => {
    eldom.classList.remove('error-message', 'visible');
  }, 10000);
};

const validString = (str) => {
  if (str.match(/^[a-zA-Z0-9À-ÿ\u00f1\u00d1\u00E0\u00FC_\- ]{1,30}$/)) return true;
  return false;
};

const validFormComment = (name, comment) => {
  name.value = name.value.trim();
  comment.value = comment.value.trim();
  if (!validString(name.value)) {
    name.focus();
    displayMessage(formMessageCom, 'Name field only allows alphanumeric, hyphens, underscores, and max 30 characters.');
    return false;
  }
  if (comment.value === '' || comment.value.length > 250) {
    comment.focus();
    displayMessage(formMessageCom, 'Insights field allows 1 to 250 characters.');
    return false;
  }
  return true;
};

const validFormReservation = (name, dateStar, dateEnd) => {
  name.value = name.value.trim();
  if (!validString(name.value)) {
    name.focus();
    displayMessage(formMessageRes, 'Name field only allows alphanumeric, hyphens, underscores, and max 30 characters.');
    return false;
  }
  if (dateStar.value >= dateEnd.value) {
    dateStar.focus();
    displayMessage(formMessageRes, 'Invalid date range.');
    return false;
  }
  return true;
};

const sendComment = (appID) => {
  const name = document.querySelector('#inp__username');
  const comment = document.querySelector('#inp__insights');
  const movieId = document.querySelector('.movie__details').getAttribute('data-movieId');

  if (validFormComment(name, comment)) {
    _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.addComment(movieId, name.value, comment.value, appID).then((ans) => {
      if (ans === 'Created') {
        _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getComments(movieId, appID).then((list) => {
          buildMovieComments(list);
        });
        name.value = '';
        name.focus();
        comment.value = '';
        formMessageCom.textContent = 'Comment sent successfully';
        displayMessage(formMessageCom);
      } else {
        displayMessage(formMessageCom, 'Comments are not available for now. Try again later.');
      }
    });
  }
};

const sendReservation = (appID) => {
  const name = document.querySelector('#inp__username-res');
  const startDate = document.querySelector('#inp__start-date');
  const endDate = document.querySelector('#inp__end-date');
  const movieId = document.querySelector('.movie__details').getAttribute('data-movieId');

  if (validFormReservation(name, startDate, endDate)) {
    _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.addReservation(movieId, name.value, startDate.value, endDate.value, appID).then((ans) => {
      if (ans === 'Created') {
        _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getReservations(movieId, appID).then((list) => {
          buildMovieReservations(list);
        });
        name.value = '';
        startDate.value = '';
        endDate.value = '';
        name.focus();
        formMessageRes.textContent = 'Reserved successfully';
        displayMessage(formMessageRes);
      } else {
        displayMessage(formMessageRes, ans);
      }
    });
  }
};

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendComment(newID);
});

reservationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendReservation(newID);
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



const displayMovies = async (movieList, appId, section) => {
  const movieSection = document.querySelector(`#${section}-section`);
  movieSection.innerHTML = '';
  movieList.forEach((item) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'movie-wrapper';
    mainDiv.id = `${section}${item.id}`;
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
      (0,_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__.displayMovieComments)(item, appId);
    });
    mainDiv.append(img, details, commentButton);
    const reserveButton = document.createElement('button');
    reserveButton.type = 'button';
    reserveButton.innerHTML = 'Reservations';
    reserveButton.className = 'movie-wrapper__comment-button';
    reserveButton.addEventListener('click', () => {
      (0,_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__.displayMovieReservations)(item, appId);
    });
    mainDiv.append(reserveButton);
    movieSection.appendChild(mainDiv);
    like.addEventListener('click', () => {
      (0,_likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__.setLike)(`${section}${item.id}`, appId);
      const number = like.parentNode.lastChild.textContent.split(' ');
      like.parentNode.lastChild.innerHTML = `${Number(number[0]) + 1} likes`;
    });
  });
  (0,_likeFunctionality_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(appId);
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

const setLike = async (id, appID) => {
  const connect = await fetch(`${baseURL}${appID}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id }),
    headers: { 'Content-type': 'application/JSON' },
  });
  const response = await connect.text();
  return response;
};

const getLike = async (appID) => {
  const connect = await fetch(`${baseURL}${appID}/likes/`);
  const response = await connect.json();
  return response;
};

const updateLikes = (appID) => {
  getLike(appID).then((response) => {
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





const dvdID = 'zggEBXzpFcQqjDxvMhMz';
const bluID = 'DiufW768skxheMu2XO3y';
const movieLink = document.querySelector('#movie__link');
const bluLink = document.querySelector('#blu-ray__link');
const aboutLink = document.querySelector('#about__link');
const movieSection = document.querySelector('#movie-section');
const aboutSection = document.querySelector('#about-section');
const bluSection = document.querySelector('#bluRay-section');
const headerNav = document.querySelector('#header-nav');
const menuBtn = document.querySelector('#menu__button');
const dvd = 'action';
const bluray = 'girls';

const homeItems = document.querySelector('.movie-section__items');
(0,_modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])(0, dvd, 50).then((movieList) => {
  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movieList, dvdID, 'movie');
  const all = document.querySelectorAll('#movie-section > .movie-wrapper');
  (0,_modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(all, homeItems);
});

const bluItems = document.querySelector('.bluRay-section__items');
(0,_modules_consumeTVMazeAPI_js__WEBPACK_IMPORTED_MODULE_1__["default"])(51, bluray, 25).then((movieList) => {
  (0,_modules_displayMovies_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movieList, bluID, 'bluRay');
  const all = document.querySelectorAll('#bluRay-section > .movie-wrapper');
  (0,_modules_allItemsCounter_js__WEBPACK_IMPORTED_MODULE_3__["default"])(all, bluItems);
});

movieLink.addEventListener('click', () => {
  movieLink.classList.add('active');
  bluLink.classList.remove('active');
  aboutLink.classList.remove('active');
  movieSection.classList.remove('toggle');
  aboutSection.classList.add('toggle');
  bluSection.classList.add('toggle');
});

aboutLink.addEventListener('click', () => {
  movieLink.classList.remove('active');
  bluLink.classList.remove('active');
  aboutLink.classList.add('active');
  movieSection.classList.add('toggle');
  aboutSection.classList.remove('toggle');
  bluSection.classList.add('toggle');
});

bluLink.addEventListener('click', () => {
  movieLink.classList.remove('active');
  bluLink.classList.add('active');
  aboutLink.classList.remove('active');
  movieSection.classList.add('toggle');
  aboutSection.classList.add('toggle');
  bluSection.classList.remove('toggle');
});

menuBtn.addEventListener('click', () => {
  const menuBtnClose = menuBtn.querySelector('#menu__icon-close');
  if (menuBtnClose.classList.contains('box__hide')) {
    menuBtnClose.classList.remove('box__hide');
    menuBtn.querySelector('#menu__icon-bars').classList.add('box__hide');
  } else {
    menuBtnClose.classList.add('box__hide');
    menuBtn.querySelector('#menu__icon-bars').classList.remove('box__hide');
  }
  headerNav.classList.toggle('header-nav-modal');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 600 && headerNav.classList.contains('header-nav-modal')) {
    headerNav.classList.remove('header-nav-modal');
    menuBtn.querySelector('#menu__icon-close').classList.add('box__hide');
    menuBtn.querySelector('#menu__icon-bars').classList.remove('box__hide');
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFlBQVksV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxZQUFZLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxjQUFjLGNBQWMsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxVQUFVLFdBQVcsTUFBTSxPQUFPLFdBQVcsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFlBQVksTUFBTSxPQUFPLFdBQVcsTUFBTSxPQUFPLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsV0FBVyxXQUFXLE1BQU0sT0FBTyxZQUFZLFdBQVcsTUFBTSxPQUFPLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssWUFBWSxZQUFZLGVBQWUsY0FBYyxhQUFhLFdBQVcsYUFBYSxZQUFZLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxLQUFLLFFBQVEsV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLE1BQU0sV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLGFBQWEsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLGFBQWEsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxZQUFZLFdBQVcsVUFBVSxhQUFhLFlBQVksY0FBYyxjQUFjLGFBQWEsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxPQUFPLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxZQUFZLFlBQVksZUFBZSxjQUFjLGFBQWEsWUFBWSxZQUFZLGFBQWEsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSwrQ0FBK0MscUJBQXFCLHNDQUFzQyw2QkFBNkIsaUJBQWlCLGdCQUFnQiw4QkFBOEIsS0FBSyxjQUFjLHNCQUFzQiw0Q0FBNEMsS0FBSyxnQkFBZ0Isd0JBQXdCLHlDQUF5QywwQkFBMEIsaUJBQWlCLHdCQUF3QixvQ0FBb0Msb0JBQW9CLG1CQUFtQix5QkFBeUIseUJBQXlCLHdCQUF3QixrQ0FBa0Msa0RBQWtELHFDQUFxQyxxQkFBcUIscUJBQXFCLE9BQU8sZ0NBQWdDLG9CQUFvQixxQkFBcUIsc0NBQXNDLHFCQUFxQixzQkFBc0IsZ0NBQWdDLDRCQUE0Qix3QkFBd0IsZUFBZSw0QkFBNEIsdUJBQXVCLDJDQUEyQyx1QkFBdUIsMkJBQTJCLFdBQVcsU0FBUyxvQ0FBb0Msd0JBQXdCLFNBQVMsT0FBTyx1QkFBdUIsc0JBQXNCLGdCQUFnQiwyQkFBMkIsb0JBQW9CLGtDQUFrQyxrQkFBa0IsZUFBZSxvQ0FBb0MsNENBQTRDLDJCQUEyQiwyQkFBMkIsc0NBQXNDLCtCQUErQixlQUFlLDRDQUE0QyxhQUFhLFdBQVcsU0FBUyxvQ0FBb0Msd0JBQXdCLGtCQUFrQiw4QkFBOEIsV0FBVyxTQUFTLE9BQU8sNkJBQTZCLHNCQUFzQixzQkFBc0Isc0NBQXNDLDJCQUEyQixrQkFBa0IsaUJBQWlCLG9CQUFvQixnQkFBZ0IsMEJBQTBCLDhDQUE4QyxTQUFTLE9BQU8sS0FBSyxvQ0FBb0Msd0JBQXdCLDBCQUEwQixpQkFBaUIsbUJBQW1CLG1CQUFtQiw4QkFBOEIsNEJBQTRCLDBCQUEwQiw0QkFBNEIsZ0NBQWdDLGlCQUFpQiwrQkFBK0IsaUNBQWlDLHVCQUF1QixTQUFTLG1DQUFtQyw0QkFBNEIsNkNBQTZDLDhCQUE4QixtQkFBbUIsdUJBQXVCLHVCQUF1QiwyQkFBMkIsc0JBQXNCLHFDQUFxQyxnQ0FBZ0Msb0NBQW9DLHdCQUF3QixxQkFBcUIsOEJBQThCLG1CQUFtQiw2QkFBNkIsOEJBQThCLDJCQUEyQiwrQkFBK0Isc0NBQXNDLGVBQWUsNEJBQTRCLDRCQUE0QiwwQ0FBMEMsZUFBZSxhQUFhLHNCQUFzQixpQ0FBaUMsYUFBYSxXQUFXLFNBQVMsNENBQTRDLHVCQUF1Qix1QkFBdUIscUNBQXFDLHdDQUF3Qyx5QkFBeUIsNkJBQTZCLDBCQUEwQixzREFBc0QsNkJBQTZCLHVCQUF1QixzQ0FBc0MseUJBQXlCLFdBQVcsd0JBQXdCLHNDQUFzQyxXQUFXLFNBQVMsT0FBTyxLQUFLLHFCQUFxQixrQkFBa0IsOENBQThDLG9CQUFvQiwrQkFBK0IsMEJBQTBCLGFBQWEsY0FBYyxlQUFlLGdCQUFnQixrQkFBa0IsNkJBQTZCLG9CQUFvQixtQkFBbUIseUJBQXlCLCtCQUErQiwyQkFBMkIseURBQXlELHFDQUFxQyx1Q0FBdUMsb0NBQW9DLCtCQUErQiwyQkFBMkIsZ0NBQWdDLHlCQUF5QixzQkFBc0IsdUJBQXVCLDZCQUE2Qix3Q0FBd0Msb0NBQW9DLHNEQUFzRCx3QkFBd0IsbUNBQW1DLGlDQUFpQyxzQkFBc0Isd0JBQXdCLHNCQUFzQixpQ0FBaUMsd0JBQXdCLHlCQUF5QixzQkFBc0IsdUJBQXVCLHNCQUFzQix1QkFBdUIsMENBQTBDLCtEQUErRCxnQ0FBZ0MsV0FBVyx1QkFBdUIsc0NBQXNDLG1DQUFtQywwQkFBMEIsYUFBYSxXQUFXLFNBQVMsT0FBTyw2QkFBNkIsb0JBQW9CLHFCQUFxQixzQkFBc0IseUJBQXlCLDBEQUEwRCwyQkFBMkIsaUJBQWlCLHNCQUFzQiw4QkFBOEIsU0FBUywyQkFBMkIsMkJBQTJCLFNBQVMsZ0JBQWdCLGdFQUFnRSxrQ0FBa0MsU0FBUyxnQkFBZ0IsOEJBQThCLFNBQVMsZ0JBQWdCLDJCQUEyQixrQkFBa0IsOEJBQThCLGdDQUFnQyw4QkFBOEIsV0FBVyxTQUFTLGtCQUFrQixrQ0FBa0Msa0NBQWtDLG9DQUFvQywwQkFBMEIsK0NBQStDLDRDQUE0QyxzREFBc0QsdUJBQXVCLHNDQUFzQyxzQ0FBc0Msd0JBQXdCLFdBQVcsU0FBUyxrQ0FBa0MsZ0RBQWdELHdDQUF3Qyx1Q0FBdUMsOEJBQThCLFNBQVMsa0NBQWtDLHFCQUFxQixTQUFTLHdDQUF3QyxrQ0FBa0MsU0FBUyxxQ0FBcUMsMEJBQTBCLFNBQVMsT0FBTywyQkFBMkIsYUFBYSxzQkFBc0IsU0FBUyxpQkFBaUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsOEJBQThCLHNCQUFzQixTQUFTLDBCQUEwQixvQkFBb0Isc0JBQXNCLDhCQUE4Qiw4QkFBOEIsaUNBQWlDLDZCQUE2QixXQUFXLFNBQVMsT0FBTyx1REFBdUQsb0JBQW9CLDJDQUEyQywrQkFBK0IsU0FBUyx3QkFBd0IsMkJBQTJCLFNBQVMsd0JBQXdCLDJCQUEyQixTQUFTLE9BQU8sK0JBQStCLGNBQWMsc0JBQXNCLDhCQUE4Qiw4QkFBOEIsa0NBQWtDLG1CQUFtQixtQ0FBbUMsV0FBVyw2QkFBNkIsNkJBQTZCLFdBQVcsNkJBQTZCLHdCQUF3Qiw0QkFBNEIseUJBQXlCLDBDQUEwQywwQ0FBMEMsZ0NBQWdDLHlCQUF5Qix5Q0FBeUMsYUFBYSxXQUFXLFNBQVMseURBQXlELHdCQUF3QiwwQkFBMEIsNEJBQTRCLHdCQUF3QixTQUFTLDRCQUE0QixzQkFBc0IsU0FBUyxzQkFBc0IseUJBQXlCLFNBQVMsT0FBTyxLQUFLLDZCQUE2QixvQkFBb0IsS0FBSyxvQkFBb0Isb0JBQW9CLEtBQUssZ0JBQWdCLHdCQUF3Qix5Q0FBeUMsMEJBQTBCLGlCQUFpQiw2QkFBNkIsb0NBQW9DLG9CQUFvQixtQkFBbUIsb0NBQW9DLEtBQUssaUJBQWlCLG9CQUFvQixLQUFLLGlCQUFpQix5QkFBeUIsdUJBQXVCLG1CQUFtQixLQUFLLG9CQUFvQixpQ0FBaUMsZ0NBQWdDLG1CQUFtQix5QkFBeUIseUJBQXlCLHNCQUFzQixxQkFBcUIsMkJBQTJCLGdCQUFnQixpQ0FBaUMsNERBQTRELDZCQUE2QixrQ0FBa0MsNEJBQTRCLFNBQVMsZUFBZSw0QkFBNEIsMkJBQTJCLHVCQUF1QixTQUFTLE9BQU8sS0FBSyxtRkFBbUYsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sc0NBQXNDLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLG1DQUFtQyw2QkFBNkIsbUJBQW1CLHFCQUFxQix5QkFBeUIsd0JBQXdCLGtCQUFrQixvQkFBb0IsZ0dBQWdHLHlCQUF5QixxQkFBcUIsdUJBQXVCLDBCQUEwQix1QkFBdUIsb0JBQW9CLDBCQUEwQixLQUFLLDZGQUE2Rix5QkFBeUIscUJBQXFCLHVCQUF1QiwwQkFBMEIsdUJBQXVCLG9CQUFvQiwwQkFBMEIsS0FBSywwQkFBMEIsb0JBQW9CLDZCQUE2QixrQ0FBa0MsOEJBQThCLEtBQUsseUJBQXlCLG9CQUFvQiwwQkFBMEIsa0NBQWtDLDhCQUE4QixLQUFLLDRCQUE0Qiw4QkFBOEIsMEJBQTBCLEtBQUssK0JBQStCLCtCQUErQixpQkFBaUIsT0FBTyxLQUFLLHVCQUF1QjtBQUNoMjJCO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWtKO0FBQ2xKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEhBQU87Ozs7QUFJNEY7QUFDcEgsT0FBTyxpRUFBZSw0SEFBTyxJQUFJLG1JQUFjLEdBQUcsbUlBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsT0FBTztBQUNwQztBQUNBOztBQUVpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUakM7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsUUFBUTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQyxTQUFTLEVBQUUsTUFBTTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDO0FBQ3pDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1Qjs7QUFFQTtBQUNBLGlDQUFpQyxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsUUFBUTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBLHlCQUF5QixpQ0FBaUMsS0FBSyxnQ0FBZ0M7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVMsRUFBRSxNQUFNO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDJDQUEyQztBQUMzQyxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsSUFBSTtBQUNKLCtDQUErQyxXQUFXO0FBQzFEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7O0FBU0U7Ozs7Ozs7Ozs7Ozs7OztBQzlGRjs7QUFFQTtBQUNBLGlDQUFpQyxRQUFRLFdBQVcsTUFBTTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVtQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmlCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsSUFBSTtBQUNsQixHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0JBQWtCLFNBQVMsV0FBVztBQUM5RSxjQUFjLFVBQVU7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsV0FBVztBQUM1QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQSxVQUFVLGFBQWE7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0VBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUMsd0NBQXdDLGlCQUFpQjtBQUN6RDtBQUNBO0FBQ0Esd0NBQXdDLGdCQUFnQjtBQUN4RDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isd0VBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsb0JBQW9CLEtBQUssaUJBQWlCO0FBQzlGLHlCQUF5QixpQkFBaUI7QUFDMUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxNQUFNO0FBQ3BEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRSxrRUFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0VBQXFCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDZEQUE2RCxLQUFLO0FBQ2xFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLGlFQUFnQjtBQUNwQjtBQUNBLFFBQVEsa0VBQWlCO0FBQ3pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFFQUFvQjtBQUN4QjtBQUNBLFFBQVEsc0VBQXFCO0FBQzdCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUV5RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqT0k7QUFDNEI7O0FBRTFGO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUSxFQUFFLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFVBQVU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw2RUFBb0I7QUFDMUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0saUZBQXdCO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUFPLElBQUksUUFBUSxFQUFFLFFBQVE7QUFDbkM7QUFDQSwrQ0FBK0MsdUJBQXVCO0FBQ3RFLEtBQUs7QUFDTCxHQUFHO0FBQ0gsRUFBRSxrRUFBVztBQUNiOztBQUVvQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEcEM7O0FBRUE7QUFDQSxpQ0FBaUMsUUFBUSxFQUFFLE1BQU07QUFDakQ7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QyxlQUFlLG9DQUFvQztBQUNuRCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLFFBQVEsRUFBRSxNQUFNO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsZ0JBQWdCO0FBQ25FLG1FQUFtRSxlQUFlO0FBQ2xGLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckIyQjtBQUM4QjtBQUNGO0FBQ0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFQUFZO0FBQ1osRUFBRSxxRUFBYTtBQUNmO0FBQ0EsRUFBRSx1RUFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQSx3RUFBWTtBQUNaLEVBQUUscUVBQWE7QUFDZjtBQUNBLEVBQUUsdUVBQVU7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hbGxJdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnN1bWVJbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29uc3VtZVRWTWF6ZUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYjEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JnLW1vdmllcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9U3BlY3RyYWw6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbmhlYWRlciAuaGVhZGVyLWJyYW5kIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcbmhlYWRlciAubmF2YmFyX19tZW51LWJ1dHRvbiB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuaGVhZGVyIC5uYXZiYXJfX21lbnUtYnV0dG9uIGkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRyYW5zaXRpb246IGNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbn1cXG5oZWFkZXIgLm5hdmJhcl9fbWVudS1idXR0b24gaTpob3ZlciB7XFxuICBjb2xvcjogI2ZmMzg0NztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICBoZWFkZXIgLm5hdmJhcl9fbWVudS1idXR0b24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5oZWFkZXIgLmhlYWRlci1uYXYgdWwgbGkgYTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6ICNmZjM4NDc7XFxuICBjb2xvcjogI2ZmMzg0NztcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSB7XFxuICBoZWFkZXIgLmhlYWRlci1uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcbiAgaGVhZGVyIC5oZWFkZXItbmF2IHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIH1cXG59XFxuaGVhZGVyIC5oZWFkZXItbmF2LW1vZGFsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTE7XFxufVxcbmhlYWRlciAuaGVhZGVyLW5hdi1tb2RhbCBsaSB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JmYzVjYTtcXG59XFxuXFxuLm1vdmllLXNlYyxcXG4uYmx1UmF5LXNlYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMzBweCAzJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19pbWcsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2ltZyB7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgZ2FwOiAzcHg7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGksXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpIHtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgaTpob3ZlcixcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6aG92ZXIge1xcbiAgY29sb3I6ICNmZDNmM2Y7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpOmFjdGl2ZSxcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjZmYwMjAyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggI2ZmMDIwMjtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIHNwYW4sXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24sXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmYzODQ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmMzg0NztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmhvdmVyLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODQ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbjphY3RpdmUsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4O1xcbn1cXG5cXG4ubW9kYWxfX2JveCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC45KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vZGFsX19jb250YWluZXIge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA0OHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0biB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzg0NztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVyZW07XFxuICByaWdodDogMC41cmVtO1xcbiAgei1pbmRleDogMTE7XFxufVxcbi5tb2RhbF9fYm94IC5tb2RhbF9fY29udGFpbmVyIC5tb2RhbF9fYnRuIC5idG5fX2Nsb3NlLW1vZGFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODQ3O1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0bjpob3ZlciAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogI2JmYzVjYSAjZGVlMmU2O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgLmJ0biB7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzg0NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciAuYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjM4NDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODQ3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjNWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZGVlMmU2O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gIC5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgPiAqIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgaW1nIHtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIC5tb3ZpZV9fbW9yZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyAubW92aWVfX21vcmUgLml0ZW0tY2F0ZWdvcnkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzIC5pdGVtLWRhdGUsXFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1uYW1lLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIC5pdGVtLWRhdGUsXFxuLm1vZGFsX19ib3ggLm1vdmllX19yZXNlcnZhdGlvbnMgLml0ZW0tbmFtZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1uYW1lLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIC5pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1kYXRlLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIC5pdGVtLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCB7XFxuICAvKiBGT1JNIFZBTElEQVRJT04gKi9cXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMS4yNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gPiAqIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSAuaW5wdXRfX2ZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2JmYzVjYTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5pbnB1dF9fZmllbGQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZjM4NDc7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLmZvcm1fX21lc3NhZ2Uge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6ICMwMmE1OGE7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICNmZjAyMDI7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbF9fYm94LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJveF9faGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmFib3V0LXNlYyAuYWJvdXQtc2VjdGlvbl9fY29udGFpbmVyIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtaW4taGVpZ2h0OiA2NXZoO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFib3V0LXNlYyAuYWJvdXQtc2VjdGlvbl9fY29udGFpbmVyIGgyIHtcXG4gIG1hcmdpbjogYXV0byBhdXRvIDgwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG4uYWJvdXQtc2VjIC5hYm91dC1zZWN0aW9uX19jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUNVRSw4QkFuQks7RUFvQkwsZUFGZ0I7RUFHaEIsZ0JBSDBCO0VBSTFCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0F2Qks7RUF3Qkwsc0JBUDBFO0VETjFFLG1EQUFBO0FBSUY7O0FBREE7RUVWRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VGVUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ25CVztFRG9CWCxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTUY7QUFKRTtFQ2xCQSxnQ0FWSztFQVdMLGVBRmdCO0VBR2hCLGdCQUgwQjtFQUkxQixzQkFKK0M7RUFLL0MsbUJBTG1DO0VBTW5DLGNBYks7RUFjTCx5QkFQMEU7RURzQnhFLHFCQUFBO0VBQ0EseURBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBV0o7QUFSRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBVUo7QUFSSTtFQUNFLGlCQUFBO0VBQ0EsY0NoREM7RURpREQsZ0NBQUE7QUFVTjtBQVJNO0VBQ0UsY0NuREM7QUQ2RFQ7QUU5Q0U7RUZvQkE7SUFxQkksYUFBQTtFQVNKO0FBQ0Y7QUFORTtFQUNFLGFBQUE7QUFRSjtBQU5JO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VFckVKLGFBQUE7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QUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWVKO0FBYkk7RUFDRSxzQkFBQTtFQ3JkSixnQ0FWSztFQVdMLGVEc2R5QjtFQ3JkekIsaUJEcWRvQztFQ3BkcEMsc0JBSitDO0VBSy9DLGNEbWQrQztFQ2xkL0MsY0FiSztFQWNMLHlCQVAwRTtFRDBkdEUsY0NoZUc7RURpZUgsdUJBQUE7RUFDQSxpQkFBQTtBQW1CTjtBQWhCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBa0JOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcclxcbkBpbXBvcnQgJ21peGlucyc7XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBAaW5jbHVkZSBmb250LWI7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2IxLnBuZyk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAuaGVhZGVyLWJyYW5kIHtcXHJcXG4gICAgQGluY2x1ZGUgZm9udC1oO1xcclxcblxcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvbG9nby5zdmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHdpZHRoOiAxMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXZiYXJfX21lbnUtYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICAgaSB7XFxyXFxuICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgICAgY29sb3I6ICRiYXNlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgY29sb3I6ICRhY2NlbnQ7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1xKCRtdzogNjAwcHgpe1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5oZWFkZXItbmF2IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG5cXHJcXG4gICAgdWwge1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgICAgZ2FwOiAyMHB4O1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW07XFxyXFxuXFxyXFxuICAgICAgbGkge1xcclxcbiAgICAgICAgYSB7XFxyXFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgIHBhZGRpbmc6IDFweDtcXHJcXG5cXHJcXG4gICAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtaCgkZnc6IDYwMCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIG1xKCRtdzogNjAwcHgpe1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgICAgdWwge1xcclxcbiAgICAgICAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuaGVhZGVyLW5hdi1tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMTAwJTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDExO1xcclxcblxcclxcbiAgICBsaSB7XFxyXFxuICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JheS1kYXJrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1zZWMsXFxyXFxuLmJsdVJheS1zZWMge1xcclxcbiAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuXFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZ2FwOiAzMHB4IDMlO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxyXFxuXFxyXFxuICAubW92aWUtd3JhcHBlciB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW07XFxyXFxuXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcclxcblxcclxcbiAgICAubW92aWUtd3JhcHBlcl9faW1nIHtcXHJcXG4gICAgICB3aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vdmllLXdyYXBwZXJfX3RpdGxlIHtcXHJcXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBnYXA6IDVweDtcXHJcXG4gICAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgICAgY29sb3I6ICNmZmY7XFxyXFxuXFxyXFxuICAgICAgLm1vdmllLXdyYXBwZXJfX2xpa2VzIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW07XFxyXFxuXFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgd2lkdGg6IDU1cHg7XFxyXFxuICAgICAgICBnYXA6IDNweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcblxcclxcbiAgICAgICAgaSB7XFxyXFxuICAgICAgICAgIGNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjZmQzZjNmO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG4gICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICRyZWQ7XFxyXFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA3cHggJHJlZDtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgc3BhbiB7XFxyXFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uIHtcXHJcXG4gICAgICB3aWR0aDogMjQwcHg7XFxyXFxuICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAkYWNjZW50O1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuXFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAmOmFjdGl2ZSB7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWxfX2JveCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC45KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcblxcclxcbiAgLm1vZGFsX19jb250YWluZXIge1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0OHJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iZy1tb3ZpZXMuc3ZnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXHJcXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtY29sdW07XFxyXFxuXFxyXFxuICAgIC5tb2RhbF9fYnRuIHtcXHJcXG4gICAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXHJcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcclxcblxcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB0b3A6IDAuNXJlbTtcXHJcXG4gICAgICByaWdodDogMC41cmVtO1xcclxcbiAgICAgIHotaW5kZXg6IDExO1xcclxcblxcclxcbiAgICAgIC5idG5fX2Nsb3NlLW1vZGFsIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIG91dGxpbmU6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtaCgkZnM6IDEuMjVyZW0sICRjb2xvcjogJGFjY2VudCk7XFxyXFxuXFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgfVxcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDtcXHJcXG5cXHJcXG4gICAgICAgIC5idG5fX2Nsb3NlLW1vZGFsIHtcXHJcXG4gICAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfX2NvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmZmLCAkYWxwaGE6IDAuOCk7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgPiAqIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gOmxhc3QtY2hpbGQge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDIge1xcclxcbiAgICAgIEBpbmNsdWRlIGZvbnQtaCgkZnM6IDJyZW0sICRmdzogYm9sZCwgJHR0OiB1cHBlcmNhc2UpO1xcclxcblxcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDMge1xcclxcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgdWwge1xcclxcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuXFxyXFxuICAgICAgbGkge1xcclxcbiAgICAgICAgQGluY2x1ZGUgZmxleC1yb3c7XFxyXFxuXFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ0biB7XFxyXFxuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XFxyXFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcXHJcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZm9udC1oKCRjb2xvcjogJGFjY2VudCk7XFxyXFxuXFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXHJcXG5cXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcclxcbiAgICAgICAgY29sb3I6ICNmZmY7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXHJcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAkZ3JheS1kYXJrICRncmF5LWxpZ2h0O1xcclxcblxcclxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktZGFyaztcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICB3aWR0aDogNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JheS1saWdodDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaW5jbHVkZSBtcSgkbXc6IDQ4cmVtKSB7XFxyXFxuICAgICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubW92aWVfX2RldGFpbHMge1xcclxcbiAgICA+ICoge1xcclxcbiAgICAgIHdpZHRoOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDIxMHB4O1xcclxcbiAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubW92aWVfX21vcmUge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICB3aWR0aDogYXV0bztcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcblxcclxcbiAgICAgIC5pdGVtLWNhdGVnb3J5IHtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9fY29tbWVudHMsXFxyXFxuICAubW92aWVfX3Jlc2VydmF0aW9ucyB7XFxyXFxuICAgIGNsZWFyOiBib3RoO1xcclxcblxcclxcbiAgICAuaXRlbS1kYXRlLFxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaXRlbS1uYW1lIHtcXHJcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pdGVtLWRhdGUge1xcclxcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tb3ZpZV9fYWRkLWNvbW1lbnQge1xcclxcbiAgICBmb3JtIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDMxLjI1cmVtO1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bTtcXHJcXG5cXHJcXG4gICAgICA+ICoge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgPiA6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAuaW5wdXRfX2ZpZWxkIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgJGdyYXktZGFyaztcXHJcXG5cXHJcXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtYjtcXHJcXG5cXHJcXG4gICAgICAgICY6Zm9jdXMge1xcclxcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgJGFjY2VudDtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyogRk9STSBWQUxJREFUSU9OICovXFxyXFxuICAgIC5mb3JtX19tZXNzYWdlIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgIHBhZGRpbmc6IDAuM3JlbTtcXHJcXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgICBjb2xvcjogJGdyZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lcnJvci1tZXNzYWdlIHtcXHJcXG4gICAgICBjb2xvcjogJHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudmlzaWJsZSB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsX19ib3gtZGlzcGxheSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm94X19oaWRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXHJcXG5cXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0O1xcclxcbiAgcGFkZGluZzogMzBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG5cXHJcXG4gIEBpbmNsdWRlIGZvbnQtYigkZnc6IDQwMCk7XFxyXFxufVxcclxcblxcclxcbi50b2dnbGUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtc2VjIHtcXHJcXG4gIC5hYm91dC1zZWN0aW9uX19jb250YWluZXIge1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNjV2aDtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICBtYXJnaW46IGF1dG8gYXV0byA4MHB4O1xcclxcblxcclxcbiAgICAgIEBpbmNsdWRlIGZvbnQtaCgkZnM6IDRyZW0sICRmdzogYm9sZCwgJGxoOiAxKTtcXHJcXG5cXHJcXG4gICAgICBjb2xvcjogJGFjY2VudDtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9U3BlY3RyYWw6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiRmZi1oOiAnS2FybGEnLCBzYW5zLXNlcmlmO1xcclxcbiRmZi1iOiAnU3BlY3RyYWwnLCBzZXJpZjtcXHJcXG4kYmFzZTogIzAyMzA0NztcXHJcXG4kYWNjZW50OiAjZmYzODQ3O1xcclxcbiRncmF5LWxpZ2h0OiAjZGVlMmU2O1xcclxcbiRncmF5LWRhcms6ICNiZmM1Y2E7XFxyXFxuJHJlZDogI2ZmMDIwMjtcXHJcXG4kZ3JlZW46ICMwMmE1OGE7XFxyXFxuXFxyXFxuQG1peGluIGZvbnQtaCgkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuNnJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0OnVwcGVyY2FzZSkge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmZi1oO1xcclxcbiAgZm9udC1zaXplOiAkZnM7XFxyXFxuICBmb250LXdlaWdodDogJGZ3O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZvbnQtYigkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuMnJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0Om5vcm1hbCkge1xcclxcbiAgZm9udC1mYW1pbHk6ICRmZi1iO1xcclxcbiAgZm9udC1zaXplOiAkZnM7XFxyXFxuICBmb250LXdlaWdodDogJGZ3O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxyXFxuICBjb2xvcjogJGNvbG9yO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXHJcXG59XFxyXFxuXCIsXCJAbWl4aW4gZmxleC1jb2x1bSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleC1yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1xICgkbXc6NTByZW0pIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbXcpIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgdG90YWxJdGVtcyA9IChhcnIsIGRvbUVsZW1lbnQpID0+IHtcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIHdoaWxlIChhcnJbbGVuZ3RoXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoICs9IDE7XG4gIH1cbiAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSBgKCR7bGVuZ3RofSlgO1xuICByZXR1cm4gbGVuZ3RoO1xufTtcblxuZXhwb3J0IHsgdG90YWxJdGVtcyBhcyBkZWZhdWx0IH07XG4iLCJjb25zdCBpQmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xubGV0IHJlbnRlZERhdGUgPSAnJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAobW92aWVJZCwgYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfSR7YXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHttb3ZpZUlkfWApO1xuICBjb25zdCBjb21tZW50c0xpc3QgPSBhd2FpdCBjb25uZWN0Lmpzb24oKTtcbiAgaWYgKGNvbW1lbnRzTGlzdC5lcnJvcikgcmV0dXJuIFtdO1xuICByZXR1cm4gY29tbWVudHNMaXN0O1xufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChtb3ZpZUlkLCB1c2VybmFtZSwgY29tbWVudCwgYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfSR7YXBwSUR9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IG1vdmllSWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0LnRleHQoKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRDb21tZW50cyA9IChhcnIpID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb3VudCArPSAxO1xuICB9XG4gIHJldHVybiBgQ29tbWVudHMgKCR7Y291bnR9KWA7XG59O1xuXG5jb25zdCBnZXRSZXNlcnZhdGlvbnMgPSBhc3luYyAobW92aWVJZCwgYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfSR7YXBwSUR9L3Jlc2VydmF0aW9ucz9pdGVtX2lkPSR7bW92aWVJZH1gKTtcbiAgY29uc3QgcmVzZXJ2YXRpb25zTGlzdCA9IGF3YWl0IGNvbm5lY3QuanNvbigpO1xuICBpZiAocmVzZXJ2YXRpb25zTGlzdC5lcnJvcikgcmV0dXJuIFtdO1xuICByZXR1cm4gcmVzZXJ2YXRpb25zTGlzdDtcbn07XG5cbmNvbnN0IGlzUmVzZXJ2ZWQgPSBhc3luYyAobW92aWVJZCwgZGF0ZVN0YXJ0LCBkYXRlRW5kLCBhcHBJRCkgPT4ge1xuICBjb25zdCBjZFMgPSBuZXcgRGF0ZShkYXRlU3RhcnQpO1xuICBjb25zdCBjZEUgPSBuZXcgRGF0ZShkYXRlRW5kKTtcbiAgY29uc3QgcmVzZXJ2YXRpb25zTGlzdCA9IGF3YWl0IGdldFJlc2VydmF0aW9ucyhtb3ZpZUlkLCBhcHBJRCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzZXJ2YXRpb25zTGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGFwaVMgPSBuZXcgRGF0ZShyZXNlcnZhdGlvbnNMaXN0W2ldLmRhdGVfc3RhcnQpO1xuICAgIGNvbnN0IGFwaUUgPSBuZXcgRGF0ZShyZXNlcnZhdGlvbnNMaXN0W2ldLmRhdGVfZW5kKTtcbiAgICByZW50ZWREYXRlID0gYGZyb20gJHthcGlTLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApfSB0byAke2FwaUUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCl9YDtcbiAgICBpZiAoY2RTID49IGFwaVMgJiYgY2RTIDw9IGFwaUUpIHJldHVybiB0cnVlO1xuICAgIGlmIChjZEUgPj0gYXBpUyAmJiBjZEUgPD0gYXBpRSkgcmV0dXJuIHRydWU7XG4gICAgaWYgKGNkUyA8PSBhcGlTICYmIGNkRSA+PSBhcGlFKSByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBhZGRSZXNlcnZhdGlvbiA9IGFzeW5jIChtb3ZpZUlkLCB1c2VybmFtZSwgZGF0ZVN0YXJ0LCBkYXRlRW5kLCBhcHBJRCkgPT4ge1xuICBsZXQgcmVzcG9uc2UgPSAnJztcbiAgY29uc3QgaXNSZXNldiA9IGF3YWl0IGlzUmVzZXJ2ZWQobW92aWVJZCwgZGF0ZVN0YXJ0LCBkYXRlRW5kLCBhcHBJRCk7XG4gIGlmICghaXNSZXNldikge1xuICAgIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtpQmFzZVVSTH0ke2FwcElEfS9yZXNlcnZhdGlvbnMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IG1vdmllSWQsXG4gICAgICAgIHVzZXJuYW1lLFxuICAgICAgICBkYXRlX3N0YXJ0OiBkYXRlU3RhcnQsXG4gICAgICAgIGRhdGVfZW5kOiBkYXRlRW5kLFxuICAgICAgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzcG9uc2UgPSBgVGhpcyBtb3ZpZSBpcyBhbHJlYWR5IHJlbnRlZCAke3JlbnRlZERhdGV9LmA7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRSZXNlcnZhdGlvbnMgPSAoYXJyKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY291bnQgKz0gMTtcbiAgfVxuICByZXR1cm4gYFJlc2VydmF0aW9ucyAoJHtjb3VudH0pYDtcbn07XG5cbmV4cG9ydCB7XG4gIGdldENvbW1lbnRzLFxuICBhZGRDb21tZW50LFxuICBjb3VudENvbW1lbnRzLFxuICBnZXRSZXNlcnZhdGlvbnMsXG4gIGFkZFJlc2VydmF0aW9uLFxuICBjb3VudFJlc2VydmF0aW9ucyxcbn07XG4iLCJjb25zdCBiYXNlVVJMID0gJyBodHRwczovL2FwaS50dm1hemUuY29tJztcblxuY29uc3QgZ2V0TW92aWVEYXRhID0gYXN5bmMgKGluZGV4LCBxdWVyeSwgdG90YWwpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L3Nob3dzP3E9JHtxdWVyeX1gKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0Lmpzb24oKS50aGVuKChkYXRhTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNob3J0TGlzdCA9IGRhdGFMaXN0LnNsaWNlKGluZGV4LCBpbmRleCArIHRvdGFsKTtcbiAgICBzaG9ydExpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIGdlbnJlczogaXRlbS5nZW5yZXMsXG4gICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxuICAgICAgICBlbmQ6IGl0ZW0uZW5kZWQsXG4gICAgICAgIHJhdGluZzogaXRlbS5yYXRpbmcsXG4gICAgICAgIHN1bW1hcnk6IGl0ZW0uc3VtbWFyeSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pO1xuICAgIHJldHVybiBzaG9ydExpc3Q7XG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBnZXRNb3ZpZURhdGEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0ICogYXMgQ0lBUEkgZnJvbSAnLi9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94Jyk7XG5jb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2NvbW1lbnQnKTtcbmNvbnN0IHJlc2VydmF0aW9uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX19yZXNlcnZhdGlvbicpO1xuY29uc3QgZm9ybU1lc3NhZ2VDb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9fbWVzc2FnZS1jb20nKTtcbmNvbnN0IGZvcm1NZXNzYWdlUmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX21lc3NhZ2UtcmVzJyk7XG5sZXQgdGltZXJJZCA9ICcnO1xubGV0IG5ld0lEID0gJyc7XG5cbmNvbnN0IGFyckludG9TdHJpbmcgPSAoYXJyKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgc3RyICs9IGAke2VsfSB8IGA7XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgYnVpbGRNb3ZpZURlc2NyaXB0aW9uID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbW92aWVEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX19kZXRhaWxzJyk7XG4gIG1vdmllRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVpZCcsIGRhdGEuaWQpO1xuICBtb3ZpZURldGFpbHMuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke2RhdGEubmFtZX0gbW92aWUgaW1hZ2VcIj5cbiAgICAgICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vdmllX19tb3JlXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+R2VucmU6PC9zcGFuPlxuICAgICAgICAgICAgPHA+JHthcnJJbnRvU3RyaW5nKGRhdGEuZ2VucmVzKX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5FbmRlZDo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2RhdGEuZW5kZWR9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+UmF0aW5nOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5yYXRpbmcuYXZlcmFnZX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgJHtkYXRhLnN1bW1hcnl9YDtcbn07XG5cbmNvbnN0IGJ1aWxkTW92aWVDb21tZW50cyA9IChhcnIpID0+IHtcbiAgY29uc3QgbW92aWVDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fY29tbWVudHMnKTtcbiAgbW92aWVDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IENJQVBJLmNvdW50Q29tbWVudHMoYXJyKTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29tbWVudExpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHNfX2xpc3QnKTtcbiAgYXJyLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwib3duZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XG59O1xuXG5jb25zdCBidWlsZE1vdmllUmVzZXJ2YXRpb25zID0gKGFycikgPT4ge1xuICBjb25zdCBtb3ZpZVJlc2VydmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fcmVzZXJ2YXRpb25zJyk7XG4gIG1vdmllUmVzZXJ2YXRpb25zLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gQ0lBUEkuY291bnRSZXNlcnZhdGlvbnMoYXJyKTtcbiAgbW92aWVSZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCByZXNlcnZhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICByZXNlcnZhdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHNfX2xpc3QnKTtcbiAgYXJyLmZvckVhY2goKHJlc2VydmUpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiaXRlbS1kYXRlXCI+JHtyZXNlcnZlLmRhdGVfc3RhcnR9IHRvICR7cmVzZXJ2ZS5kYXRlX2VuZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPmJ5ICR7cmVzZXJ2ZS51c2VybmFtZX08L3NwYW4+YDtcbiAgICByZXNlcnZhdGlvbkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbiAgbW92aWVSZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25MaXN0KTtcbn07XG5cbmNvbnN0IGNsb3NlQm94ID0gKGlkZW50KSA9PiB7XG4gIGNvbnN0IGVsRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7aWRlbnR9YCk7XG4gIGVsRG9tLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYm94X19oaWRlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheU1vdmllQ29tbWVudHMgPSAobW92aWUsIGFwcElEKSA9PiB7XG4gIGJ1aWxkTW92aWVEZXNjcmlwdGlvbihtb3ZpZSk7XG4gIG5ld0lEID0gYXBwSUQ7XG4gIENJQVBJLmdldENvbW1lbnRzKG1vdmllLmlkLCBhcHBJRCkudGhlbigobGlzdCkgPT4ge1xuICAgIGJ1aWxkTW92aWVDb21tZW50cyhsaXN0KTtcbiAgICBjbG9zZUJveCgncmVzZXJ2YXRpb25rJyk7XG4gICAgbW9kYWxCb3guY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2JveC1kaXNwbGF5Jyk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheU1vdmllUmVzZXJ2YXRpb25zID0gKG1vdmllLCBhcHBJRCkgPT4ge1xuICBidWlsZE1vdmllRGVzY3JpcHRpb24obW92aWUpO1xuICBuZXdJRCA9IGFwcElEO1xuICBDSUFQSS5nZXRSZXNlcnZhdGlvbnMobW92aWUuaWQsIGFwcElEKS50aGVuKChsaXN0KSA9PiB7XG4gICAgYnVpbGRNb3ZpZVJlc2VydmF0aW9ucyhsaXN0KTtcbiAgICBjbG9zZUJveCgnY29tbWVudGsnKTtcbiAgICBtb2RhbEJveC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYm94LWRpc3BsYXknKTtcbiAgfSk7XG59O1xuXG5tb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjb21Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudGsnKTtcbiAgY29tQm94LmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYm94X19oaWRlJyk7XG4gIH0pO1xuICBjb25zdCByZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXJ2YXRpb25rJyk7XG4gIHJlc0JveC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JveF9faGlkZScpO1xuICB9KTtcbiAgbW9kYWxCb3guY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2JveC1kaXNwbGF5Jyk7XG59KTtcblxuY29uc3QgZGlzcGxheU1lc3NhZ2UgPSAoZWxkb20sIG1zZykgPT4ge1xuICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gIGlmIChtc2cpIHtcbiAgICBlbGRvbS50ZXh0Q29udGVudCA9IG1zZztcbiAgICBlbGRvbS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gIH1cbiAgZWxkb20uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxkb20uY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItbWVzc2FnZScsICd2aXNpYmxlJyk7XG4gIH0sIDEwMDAwKTtcbn07XG5cbmNvbnN0IHZhbGlkU3RyaW5nID0gKHN0cikgPT4ge1xuICBpZiAoc3RyLm1hdGNoKC9eW2EtekEtWjAtOcOALcO/XFx1MDBmMVxcdTAwZDFcXHUwMEUwXFx1MDBGQ19cXC0gXXsxLDMwfSQvKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHZhbGlkRm9ybUNvbW1lbnQgPSAobmFtZSwgY29tbWVudCkgPT4ge1xuICBuYW1lLnZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XG4gIGNvbW1lbnQudmFsdWUgPSBjb21tZW50LnZhbHVlLnRyaW0oKTtcbiAgaWYgKCF2YWxpZFN0cmluZyhuYW1lLnZhbHVlKSkge1xuICAgIG5hbWUuZm9jdXMoKTtcbiAgICBkaXNwbGF5TWVzc2FnZShmb3JtTWVzc2FnZUNvbSwgJ05hbWUgZmllbGQgb25seSBhbGxvd3MgYWxwaGFudW1lcmljLCBoeXBoZW5zLCB1bmRlcnNjb3JlcywgYW5kIG1heCAzMCBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoY29tbWVudC52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZS5sZW5ndGggPiAyNTApIHtcbiAgICBjb21tZW50LmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoZm9ybU1lc3NhZ2VDb20sICdJbnNpZ2h0cyBmaWVsZCBhbGxvd3MgMSB0byAyNTAgY2hhcmFjdGVycy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCB2YWxpZEZvcm1SZXNlcnZhdGlvbiA9IChuYW1lLCBkYXRlU3RhciwgZGF0ZUVuZCkgPT4ge1xuICBuYW1lLnZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XG4gIGlmICghdmFsaWRTdHJpbmcobmFtZS52YWx1ZSkpIHtcbiAgICBuYW1lLmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoZm9ybU1lc3NhZ2VSZXMsICdOYW1lIGZpZWxkIG9ubHkgYWxsb3dzIGFscGhhbnVtZXJpYywgaHlwaGVucywgdW5kZXJzY29yZXMsIGFuZCBtYXggMzAgY2hhcmFjdGVycy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRhdGVTdGFyLnZhbHVlID49IGRhdGVFbmQudmFsdWUpIHtcbiAgICBkYXRlU3Rhci5mb2N1cygpO1xuICAgIGRpc3BsYXlNZXNzYWdlKGZvcm1NZXNzYWdlUmVzLCAnSW52YWxpZCBkYXRlIHJhbmdlLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNlbmRDb21tZW50ID0gKGFwcElEKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX191c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9faW5zaWdodHMnKTtcbiAgY29uc3QgbW92aWVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fZGV0YWlscycpLmdldEF0dHJpYnV0ZSgnZGF0YS1tb3ZpZUlkJyk7XG5cbiAgaWYgKHZhbGlkRm9ybUNvbW1lbnQobmFtZSwgY29tbWVudCkpIHtcbiAgICBDSUFQSS5hZGRDb21tZW50KG1vdmllSWQsIG5hbWUudmFsdWUsIGNvbW1lbnQudmFsdWUsIGFwcElEKS50aGVuKChhbnMpID0+IHtcbiAgICAgIGlmIChhbnMgPT09ICdDcmVhdGVkJykge1xuICAgICAgICBDSUFQSS5nZXRDb21tZW50cyhtb3ZpZUlkLCBhcHBJRCkudGhlbigobGlzdCkgPT4ge1xuICAgICAgICAgIGJ1aWxkTW92aWVDb21tZW50cyhsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgbmFtZS5mb2N1cygpO1xuICAgICAgICBjb21tZW50LnZhbHVlID0gJyc7XG4gICAgICAgIGZvcm1NZXNzYWdlQ29tLnRleHRDb250ZW50ID0gJ0NvbW1lbnQgc2VudCBzdWNjZXNzZnVsbHknO1xuICAgICAgICBkaXNwbGF5TWVzc2FnZShmb3JtTWVzc2FnZUNvbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5TWVzc2FnZShmb3JtTWVzc2FnZUNvbSwgJ0NvbW1lbnRzIGFyZSBub3QgYXZhaWxhYmxlIGZvciBub3cuIFRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3Qgc2VuZFJlc2VydmF0aW9uID0gKGFwcElEKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX191c2VybmFtZS1yZXMnKTtcbiAgY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9fc3RhcnQtZGF0ZScpO1xuICBjb25zdCBlbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9fZW5kLWRhdGUnKTtcbiAgY29uc3QgbW92aWVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fZGV0YWlscycpLmdldEF0dHJpYnV0ZSgnZGF0YS1tb3ZpZUlkJyk7XG5cbiAgaWYgKHZhbGlkRm9ybVJlc2VydmF0aW9uKG5hbWUsIHN0YXJ0RGF0ZSwgZW5kRGF0ZSkpIHtcbiAgICBDSUFQSS5hZGRSZXNlcnZhdGlvbihtb3ZpZUlkLCBuYW1lLnZhbHVlLCBzdGFydERhdGUudmFsdWUsIGVuZERhdGUudmFsdWUsIGFwcElEKS50aGVuKChhbnMpID0+IHtcbiAgICAgIGlmIChhbnMgPT09ICdDcmVhdGVkJykge1xuICAgICAgICBDSUFQSS5nZXRSZXNlcnZhdGlvbnMobW92aWVJZCwgYXBwSUQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgICAgICBidWlsZE1vdmllUmVzZXJ2YXRpb25zKGxpc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBzdGFydERhdGUudmFsdWUgPSAnJztcbiAgICAgICAgZW5kRGF0ZS52YWx1ZSA9ICcnO1xuICAgICAgICBuYW1lLmZvY3VzKCk7XG4gICAgICAgIGZvcm1NZXNzYWdlUmVzLnRleHRDb250ZW50ID0gJ1Jlc2VydmVkIHN1Y2Nlc3NmdWxseSc7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKGZvcm1NZXNzYWdlUmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKGZvcm1NZXNzYWdlUmVzLCBhbnMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb21tZW50Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNlbmRDb21tZW50KG5ld0lEKTtcbn0pO1xuXG5yZXNlcnZhdGlvbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzZW5kUmVzZXJ2YXRpb24obmV3SUQpO1xufSk7XG5cbmV4cG9ydCB7IGRpc3BsYXlNb3ZpZUNvbW1lbnRzLCBkaXNwbGF5TW92aWVSZXNlcnZhdGlvbnMgfTtcbiIsImltcG9ydCB7IHVwZGF0ZUxpa2VzLCBzZXRMaWtlIH0gZnJvbSAnLi9saWtlRnVuY3Rpb25hbGl0eS5qcyc7XG5pbXBvcnQgeyBkaXNwbGF5TW92aWVDb21tZW50cywgZGlzcGxheU1vdmllUmVzZXJ2YXRpb25zIH0gZnJvbSAnLi9kaXNwbGF5TW92aWVEZXRhaWxzLmpzJztcblxuY29uc3QgZGlzcGxheU1vdmllcyA9IGFzeW5jIChtb3ZpZUxpc3QsIGFwcElkLCBzZWN0aW9uKSA9PiB7XG4gIGNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3NlY3Rpb259LXNlY3Rpb25gKTtcbiAgbW92aWVTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBtb3ZpZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyJztcbiAgICBtYWluRGl2LmlkID0gYCR7c2VjdGlvbn0ke2l0ZW0uaWR9YDtcbiAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGV0YWlscy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fdGl0bGUnO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9faW1nJztcbiAgICBpbWcuc3JjID0gaXRlbS5pbWFnZS5tZWRpdW07XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbmFtZS5pbm5lckhUTUwgPSBgJHtpdGVtLm5hbWV9YDtcbiAgICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxpa2VzLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19saWtlcyc7XG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBsaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGxpa2UuY2xhc3NOYW1lID0gJ2ZhcyBmYS1oZWFydCc7XG4gICAgbGlrZXMuYXBwZW5kKGxpa2UsIHNwYW4pO1xuICAgIGRldGFpbHMuYXBwZW5kKG5hbWUsIGxpa2VzKTtcbiAgICBjb25zdCBjb21tZW50QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tbWVudEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29tbWVudEJ1dHRvbi5pbm5lckhUTUwgPSAnQ29tbWVudHMnO1xuICAgIGNvbW1lbnRCdXR0b24uY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uJztcbiAgICBjb21tZW50QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheU1vdmllQ29tbWVudHMoaXRlbSwgYXBwSWQpO1xuICAgIH0pO1xuICAgIG1haW5EaXYuYXBwZW5kKGltZywgZGV0YWlscywgY29tbWVudEJ1dHRvbik7XG4gICAgY29uc3QgcmVzZXJ2ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc2VydmVCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIHJlc2VydmVCdXR0b24uaW5uZXJIVE1MID0gJ1Jlc2VydmF0aW9ucyc7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24nO1xuICAgIHJlc2VydmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5TW92aWVSZXNlcnZhdGlvbnMoaXRlbSwgYXBwSWQpO1xuICAgIH0pO1xuICAgIG1haW5EaXYuYXBwZW5kKHJlc2VydmVCdXR0b24pO1xuICAgIG1vdmllU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgICBsaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2V0TGlrZShgJHtzZWN0aW9ufSR7aXRlbS5pZH1gLCBhcHBJZCk7XG4gICAgICBjb25zdCBudW1iZXIgPSBsaWtlLnBhcmVudE5vZGUubGFzdENoaWxkLnRleHRDb250ZW50LnNwbGl0KCcgJyk7XG4gICAgICBsaWtlLnBhcmVudE5vZGUubGFzdENoaWxkLmlubmVySFRNTCA9IGAke051bWJlcihudW1iZXJbMF0pICsgMX0gbGlrZXNgO1xuICAgIH0pO1xuICB9KTtcbiAgdXBkYXRlTGlrZXMoYXBwSWQpO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheU1vdmllcyBhcyBkZWZhdWx0IH07XG4iLCJjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XG5cbmNvbnN0IHNldExpa2UgPSBhc3luYyAoaWQsIGFwcElEKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfSR7YXBwSUR9L2xpa2VzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkIH0pLFxuICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9KU09OJyB9LFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0LnRleHQoKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgZ2V0TGlrZSA9IGFzeW5jIChhcHBJRCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElEfS9saWtlcy9gKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0Lmpzb24oKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgdXBkYXRlTGlrZXMgPSAoYXBwSUQpID0+IHtcbiAgZ2V0TGlrZShhcHBJRCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlbGVtZW50Lml0ZW1faWR9YCk7XG4gICAgICBjb250YWluZXIuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMV0uaW5uZXJIVE1MID0gYCR7ZWxlbWVudC5saWtlc30gbGlrZXNgO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZUxpa2VzLCBzZXRMaWtlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zY3NzL3N0eWxlLnNjc3MnO1xuaW1wb3J0IGdldE1vdmllRGF0YSBmcm9tICcuL21vZHVsZXMvY29uc3VtZVRWTWF6ZUFQSS5qcyc7XG5pbXBvcnQgZGlzcGxheU1vdmllcyBmcm9tICcuL21vZHVsZXMvZGlzcGxheU1vdmllcy5qcyc7XG5pbXBvcnQgdG90YWxJdGVtcyBmcm9tICcuL21vZHVsZXMvYWxsSXRlbXNDb3VudGVyLmpzJztcblxuY29uc3QgZHZkSUQgPSAnemdnRUJYenBGY1FxakR4dk1oTXonO1xuY29uc3QgYmx1SUQgPSAnRGl1Zlc3Njhza3hoZU11MlhPM3knO1xuY29uc3QgbW92aWVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmllX19saW5rJyk7XG5jb25zdCBibHVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsdS1yYXlfX2xpbmsnKTtcbmNvbnN0IGFib3V0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dF9fbGluaycpO1xuY29uc3QgbW92aWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmllLXNlY3Rpb24nKTtcbmNvbnN0IGFib3V0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC1zZWN0aW9uJyk7XG5jb25zdCBibHVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JsdVJheS1zZWN0aW9uJyk7XG5jb25zdCBoZWFkZXJOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyLW5hdicpO1xuY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51X19idXR0b24nKTtcbmNvbnN0IGR2ZCA9ICdhY3Rpb24nO1xuY29uc3QgYmx1cmF5ID0gJ2dpcmxzJztcblxuY29uc3QgaG9tZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXNlY3Rpb25fX2l0ZW1zJyk7XG5nZXRNb3ZpZURhdGEoMCwgZHZkLCA1MCkudGhlbigobW92aWVMaXN0KSA9PiB7XG4gIGRpc3BsYXlNb3ZpZXMobW92aWVMaXN0LCBkdmRJRCwgJ21vdmllJyk7XG4gIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtb3ZpZS1zZWN0aW9uID4gLm1vdmllLXdyYXBwZXInKTtcbiAgdG90YWxJdGVtcyhhbGwsIGhvbWVJdGVtcyk7XG59KTtcblxuY29uc3QgYmx1SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmx1UmF5LXNlY3Rpb25fX2l0ZW1zJyk7XG5nZXRNb3ZpZURhdGEoNTEsIGJsdXJheSwgMjUpLnRoZW4oKG1vdmllTGlzdCkgPT4ge1xuICBkaXNwbGF5TW92aWVzKG1vdmllTGlzdCwgYmx1SUQsICdibHVSYXknKTtcbiAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2JsdVJheS1zZWN0aW9uID4gLm1vdmllLXdyYXBwZXInKTtcbiAgdG90YWxJdGVtcyhhbGwsIGJsdUl0ZW1zKTtcbn0pO1xuXG5tb3ZpZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vdmllTGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgYmx1TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgYWJvdXRMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XG4gIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgYmx1U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbn0pO1xuXG5hYm91dExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vdmllTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgYmx1TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgYWJvdXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbiAgYmx1U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbn0pO1xuXG5ibHVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb3ZpZUxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIGJsdUxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIGFib3V0TGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgbW92aWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gIGJsdVNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgndG9nZ2xlJyk7XG59KTtcblxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbWVudUJ0bkNsb3NlID0gbWVudUJ0bi5xdWVyeVNlbGVjdG9yKCcjbWVudV9faWNvbi1jbG9zZScpO1xuICBpZiAobWVudUJ0bkNsb3NlLmNsYXNzTGlzdC5jb250YWlucygnYm94X19oaWRlJykpIHtcbiAgICBtZW51QnRuQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnYm94X19oaWRlJyk7XG4gICAgbWVudUJ0bi5xdWVyeVNlbGVjdG9yKCcjbWVudV9faWNvbi1iYXJzJykuY2xhc3NMaXN0LmFkZCgnYm94X19oaWRlJyk7XG4gIH0gZWxzZSB7XG4gICAgbWVudUJ0bkNsb3NlLmNsYXNzTGlzdC5hZGQoJ2JveF9faGlkZScpO1xuICAgIG1lbnVCdG4ucXVlcnlTZWxlY3RvcignI21lbnVfX2ljb24tYmFycycpLmNsYXNzTGlzdC5yZW1vdmUoJ2JveF9faGlkZScpO1xuICB9XG4gIGhlYWRlck5hdi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXItbmF2LW1vZGFsJyk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNjAwICYmIGhlYWRlck5hdi5jbGFzc0xpc3QuY29udGFpbnMoJ2hlYWRlci1uYXYtbW9kYWwnKSkge1xuICAgIGhlYWRlck5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXItbmF2LW1vZGFsJyk7XG4gICAgbWVudUJ0bi5xdWVyeVNlbGVjdG9yKCcjbWVudV9faWNvbi1jbG9zZScpLmNsYXNzTGlzdC5hZGQoJ2JveF9faGlkZScpO1xuICAgIG1lbnVCdG4ucXVlcnlTZWxlY3RvcignI21lbnVfX2ljb24tYmFycycpLmNsYXNzTGlzdC5yZW1vdmUoJ2JveF9faGlkZScpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==