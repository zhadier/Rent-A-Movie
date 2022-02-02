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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n}\nheader .header-brand {\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  text-decoration: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  height: 50px;\n  width: 110px;\n}\nheader nav ul {\n  list-style: none;\n  gap: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nheader nav ul li a {\n  text-decoration: none;\n  padding: 1px;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n}\nheader nav ul li a:hover {\n  border: 1px solid #ff3847;\n  color: #ff3847;\n}\n\n.movie-sec,\n.bluRay-sec {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n}\n.movie-sec .movie-wrapper,\n.bluRay-sec .movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  gap: 5px;\n  background-color: #111;\n}\n.movie-sec .movie-wrapper .movie-wrapper__img,\n.bluRay-sec .movie-wrapper .movie-wrapper__img {\n  width: 250px;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title,\n.bluRay-sec .movie-wrapper .movie-wrapper__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  width: 240px;\n  height: 48px;\n  line-height: 1.2;\n  color: #fff;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  width: 55px;\n  gap: 3px;\n  margin-left: 1rem;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i {\n  color: #ff3847;\n  cursor: pointer;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover {\n  color: #fd3f3f;\n  transform: scale(1.2);\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active {\n  color: #ff0202;\n  text-shadow: 0 0 7px red;\n}\n.movie-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span,\n.bluRay-sec .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span {\n  font-size: 0.75rem;\n}\n.movie-sec .movie-wrapper .movie-wrapper__comment-button,\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button {\n  width: 240px;\n  border: none;\n  outline: 1px solid #ff3847;\n  background-color: transparent;\n  color: #ff3847;\n  padding: 0.25rem 0;\n  cursor: pointer;\n  transition: background-color ease-out 250ms;\n  margin-bottom: 5px;\n}\n.movie-sec .movie-wrapper .movie-wrapper__comment-button:hover,\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button:hover {\n  background-color: #ff3847;\n  color: white;\n}\n.movie-sec .movie-wrapper .movie-wrapper__comment-button:active,\n.bluRay-sec .movie-wrapper .movie-wrapper__comment-button:active {\n  box-shadow: inset 0 0 5px;\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(32, 32, 32, 0.9);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\n.modal__box .modal__container {\n  height: 90%;\n  width: 90%;\n  max-width: 48rem;\n  background-color: #fff;\n  border-radius: 5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-clip: border-box;\n  background-size: cover;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .modal__container .modal__btn {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 1px solid #ff3847;\n  transition: background-color ease-out 250ms;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 11;\n}\n.modal__box .modal__container .modal__btn .btn__close-modal {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.modal__box .modal__container .modal__btn:hover {\n  background-color: #ff3847;\n}\n.modal__box .modal__container .modal__btn:hover .btn__close-modal {\n  color: #fff;\n}\n.modal__box .movie__container {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  overflow-y: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  position: relative;\n  scrollbar-width: thin;\n  scrollbar-color: #bfc5ca #dee2e6;\n}\n.modal__box .movie__container > * {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__container h2 {\n  font-family: \"Karla\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container h3 {\n  margin-bottom: 1rem;\n}\n.modal__box .movie__container ul {\n  list-style: none;\n}\n.modal__box .movie__container ul li {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n}\n.modal__box .movie__container .btn {\n  padding: 0.5rem;\n  background: transparent;\n  border: 1px solid #ff3847;\n  cursor: pointer;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n.modal__box .movie__container .btn:hover {\n  border: 1px solid #ff3847;\n  background-color: #ff3847;\n  color: #fff;\n}\n.modal__box .movie__container::-webkit-scrollbar-thumb {\n  background-color: #bfc5ca;\n  border-radius: 20px;\n}\n.modal__box .movie__container::-webkit-scrollbar {\n  width: 6px;\n}\n.modal__box .movie__container::-webkit-scrollbar-track {\n  background: #dee2e6;\n}\n@media (min-width: 48rem) {\n  .modal__box .movie__container {\n    padding: 1.5rem;\n  }\n}\n.modal__box .movie__details > * {\n  width: auto;\n}\n.modal__box .movie__details img {\n  width: 210px;\n  height: auto;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.modal__box .movie__details .movie__more {\n  margin: 0;\n  width: auto;\n  margin-bottom: 1rem;\n}\n.modal__box .movie__details .movie__more .item-category {\n  margin-right: 0.5rem;\n  font-weight: 600;\n}\n.modal__box .movie__comments,\n.modal__box .movie__reservations {\n  clear: both;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__comments .item-name,\n.modal__box .movie__reservations .item-date,\n.modal__box .movie__reservations .item-name {\n  margin-right: 0.5rem;\n}\n.modal__box .movie__comments .item-name,\n.modal__box .movie__reservations .item-name {\n  font-weight: 600;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__reservations .item-date {\n  font-weight: 400;\n}\n.modal__box .movie__add-comment {\n  /* FORM VALIDATION */\n}\n.modal__box .movie__add-comment form {\n  width: 100%;\n  max-width: 31.25rem;\n  padding-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .movie__add-comment form > * {\n  margin-bottom: 0.75rem;\n}\n.modal__box .movie__add-comment form > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__add-comment form .input__field {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  background-color: transparent;\n  outline: 1px solid #bfc5ca;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}\n.modal__box .movie__add-comment form .input__field:focus {\n  outline: 1px solid #ff3847;\n}\n.modal__box .movie__add-comment .form__message {\n  padding: 0.3rem;\n  font-size: 0.9rem;\n  color: #04bd9e;\n}\n.modal__box .movie__add-comment .error-message {\n  color: #fd3f3f;\n}\n.modal__box .movie__add-comment .visible {\n  display: block;\n}\n\n.modal__box-display {\n  display: flex;\n}\n\n.box__hide {\n  display: none;\n}\n\nfooter {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto 10px;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}\n\n.toggle {\n  display: none;\n}\n\n.active {\n  font-style: italic;\n  font-weight: 900;\n  padding: 2px;\n}\n\n.about-sec .about-section__container {\n  border: 5px solid white;\n  width: 90%;\n  max-width: 700px;\n  min-height: 65vh;\n  padding: 50px;\n  margin: auto;\n  text-align: center;\n}\n.about-sec .about-section__container h2 {\n  margin: auto auto 80px;\n  font-family: \"Karla\", sans-serif;\n  font-size: 4rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1;\n  color: #023047;\n  text-transform: uppercase;\n  color: #ff3847;\n  background-color: white;\n  border: 1px solid;\n}\n.about-sec .about-section__container p {\n  font-size: 1.2rem;\n  line-height: 1.7;\n  color: white;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'typography';\n@import 'mixins';\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  @include font-b;\n\n  background: url(../images/b1.png);\n}\n\nheader {\n  @include flex-row;\n\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto;\n  background-color: $gray-light;\n  padding: 30px;\n  height: 50px;\n\n  .header-brand {\n    @include font-h;\n\n    text-decoration: none;\n    background-image: url(../images/logo.svg);\n    background-repeat: no-repeat;\n    height: 50px;\n    width: 110px;\n  }\n\n  nav {\n    ul {\n      list-style: none;\n      gap: 20px;\n\n      @include flex-row;\n\n      li {\n        a {\n          text-decoration: none;\n          padding: 1px;\n\n          &:hover {\n            border: 1px solid $accent;\n            color: $accent;\n          }\n\n          @include font-h($fw: 600);\n        }\n      }\n    }\n  }\n}\n\n.movie-sec,\n.bluRay-sec {\n  @include flex-row;\n\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n\n  .movie-wrapper {\n    @include flex-colum;\n\n    align-items: center;\n    gap: 5px;\n    background-color: #111;\n\n    .movie-wrapper__img {\n      width: 250px;\n    }\n\n    .movie-wrapper__title {\n      @include flex-row;\n\n      justify-content: space-between;\n      align-items: center;\n      gap: 5px;\n      width: 240px;\n      height: 48px;\n      line-height: 1.2;\n      color: #fff;\n\n      .movie-wrapper__likes {\n        @include flex-colum;\n\n        align-items: center;\n        width: 55px;\n        gap: 3px;\n        margin-left: 1rem;\n\n        i {\n          color: $accent;\n          cursor: pointer;\n\n          &:hover {\n            color: #fd3f3f;\n            transform: scale(1.2);\n          }\n\n          &:active {\n            color: rgb(255, 2, 2);\n            text-shadow: 0 0 7px red;\n          }\n        }\n\n        span {\n          font-size: 0.75rem;\n        }\n      }\n    }\n\n    .movie-wrapper__comment-button {\n      width: 240px;\n      border: none;\n      outline: 1px solid $accent;\n      background-color: transparent;\n      color: $accent;\n      padding: 0.25rem 0;\n      cursor: pointer;\n      transition: background-color ease-out 250ms;\n      margin-bottom: 5px;\n\n      &:hover {\n        background-color: $accent;\n        color: white;\n      }\n\n      &:active {\n        box-shadow: inset 0 0 5px;\n      }\n    }\n  }\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(32, 32, 32, 0.9);\n  display: none;\n\n  @include flex-center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n\n  .modal__container {\n    height: 90%;\n    width: 90%;\n    max-width: 48rem;\n    background-color: #fff;\n    border-radius: 5px;\n    background-image: url('../images/bg-movies.svg');\n    background-repeat: no-repeat;\n    background-position: top right;\n    background-clip: border-box;\n    background-size: cover;\n    position: relative;\n\n    @include flex-colum;\n\n    .modal__btn {\n      width: 2rem;\n      height: 2rem;\n      border-radius: 50%;\n      background-color: transparent;\n      border: 1px solid $accent;\n      transition: background-color ease-out 250ms;\n      display: flex;\n\n      @include flex-center;\n\n      position: absolute;\n      top: 0.5rem;\n      right: 0.5rem;\n      z-index: 11;\n\n      .btn__close-modal {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        background-color: transparent;\n\n        @include font-h($fs: 1.25rem, $color: $accent);\n\n        cursor: pointer;\n      }\n\n      &:hover {\n        background-color: $accent;\n\n        .btn__close-modal {\n          color: #fff;\n        }\n      }\n    }\n  }\n\n  .movie__container {\n    width: 100%;\n    height: 100%;\n    padding: 1rem;\n    overflow-y: auto;\n    background-color: rgba($color: #fff, $alpha: 0.8);\n    position: relative;\n\n    > * {\n      width: 100%;\n      margin-bottom: 2rem;\n    }\n\n    > :last-child {\n      margin-bottom: 0;\n    }\n\n    h2 {\n      @include font-h($fs: 2rem, $fw: bold, $tt: uppercase);\n\n      margin-bottom: 2rem;\n    }\n\n    h3 {\n      margin-bottom: 1rem;\n    }\n\n    ul {\n      list-style: none;\n\n      li {\n        @include flex-row;\n\n        flex-wrap: wrap;\n        padding: 0.5rem 0;\n      }\n    }\n\n    .btn {\n      padding: 0.5rem;\n      background: transparent;\n      border: 1px solid $accent;\n      cursor: pointer;\n\n      @include font-h($color: $accent);\n\n      background-color: transparent;\n      transition: background-color ease-out 250ms;\n\n      &:hover {\n        border: 1px solid $accent;\n        background-color: $accent;\n        color: #fff;\n      }\n    }\n\n    scrollbar-width: thin;\n    scrollbar-color: $gray-dark $gray-light;\n\n    &::-webkit-scrollbar-thumb {\n      background-color: $gray-dark;\n      border-radius: 20px;\n    }\n\n    &::-webkit-scrollbar {\n      width: 6px;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: $gray-light;\n    }\n\n    @include mq($mw: 48rem) {\n      padding: 1.5rem;\n    }\n  }\n\n  .movie__details {\n    > * {\n      width: auto;\n    }\n\n    img {\n      width: 210px;\n      height: auto;\n      margin-right: 1rem;\n      margin-bottom: 1rem;\n      float: left;\n    }\n\n    .movie__more {\n      margin: 0;\n      width: auto;\n      margin-bottom: 1rem;\n\n      .item-category {\n        margin-right: 0.5rem;\n        font-weight: 600;\n      }\n    }\n  }\n\n  .movie__comments,\n  .movie__reservations {\n    clear: both;\n\n    .item-date,\n    .item-name {\n      margin-right: 0.5rem;\n    }\n\n    .item-name {\n      font-weight: 600;\n    }\n\n    .item-date {\n      font-weight: 400;\n    }\n  }\n\n  .movie__add-comment {\n    form {\n      width: 100%;\n      max-width: 31.25rem;\n      padding-top: 0.5rem;\n\n      @include flex-colum;\n\n      > * {\n        margin-bottom: 0.75rem;\n      }\n\n      > :last-child {\n        margin-bottom: 0;\n      }\n\n      .input__field {\n        width: 100%;\n        padding: 0.5rem;\n        border: none;\n        background-color: transparent;\n        outline: 1px solid $gray-dark;\n\n        @include font-b;\n\n        &:focus {\n          outline: 1px solid $accent;\n        }\n      }\n    }\n\n    /* FORM VALIDATION */\n    .form__message {\n      // display: none;\n      padding: 0.3rem;\n      font-size: 0.9rem;\n      color: #04bd9e;\n    }\n\n    .error-message {\n      color: #fd3f3f;\n    }\n\n    .visible {\n      display: block;\n    }\n  }\n}\n\n.modal__box-display {\n  display: flex;\n}\n\n.box__hide {\n  display: none;\n}\n\nfooter {\n  @include flex-row;\n\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto 10px;\n  background-color: $gray-light;\n  padding: 30px;\n  height: 50px;\n\n  @include font-b($fw: 400);\n}\n\n.toggle {\n  display: none;\n}\n\n.active {\n  font-style: italic;\n  font-weight: 900;\n  padding: 2px;\n}\n\n.about-sec {\n  .about-section__container {\n    border: 5px solid white;\n    width: 90%;\n    max-width: 700px;\n    min-height: 65vh;\n    padding: 50px;\n    margin: auto;\n    text-align: center;\n\n    h2 {\n      margin: auto auto 80px;\n\n      @include font-h($fs: 4rem, $fw: bold, $lh: 1);\n\n      color: $accent;\n      background-color: white;\n      border: 1px solid;\n    }\n\n    p {\n      font-size: 1.2rem;\n      line-height: 1.7;\n      color: white;\n    }\n  }\n}\n","@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\n\n$ff-h: 'Karla', sans-serif;\n$ff-b: 'Spectral', serif;\n$base: #023047;\n$accent: #ff3847;\n$pink: #e68ab4;\n$gray-light: #dee2e6;\n$gray-dark: #bfc5ca;\n\n@mixin font-h($fs:1rem, $fw:300, $lh:1.6rem, $ls:normal, $color: $base, $tt:uppercase) {\n  font-family: $ff-h;\n  font-size: $fs;\n  font-weight: $fw;\n  letter-spacing: $ls;\n  line-height: $lh;\n  color: $color;\n  text-transform: $tt;\n}\n\n@mixin font-b($fs:1rem, $fw:300, $lh:1.2rem, $ls:normal, $color: $base, $tt:normal) {\n  font-family: $ff-b;\n  font-size: $fs;\n  font-weight: $fw;\n  letter-spacing: $ls;\n  line-height: $lh;\n  color: $color;\n  text-transform: $tt;\n}\n","@mixin flex-colum {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n@mixin flex-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n@mixin flex-center {\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin mq ($mw:50rem) {\n  @media (min-width: $mw) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);
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
  const commentsList = await connect.json();
  if (commentsList.error) return [];
  return commentsList;
};

const addReservation = async (movieId, username, dateStart, dateEnd, appID) => {
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
  }, 5000);
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
    displayMessage(
      'Name field only allows alphanumeric, hyphens, underscores, and max 30 characters.',
    );
    return false;
  }
  if (comment.value === '' || comment.value.length > 250) {
    comment.focus();
    displayMessage('Insights field allows 1 to 250 characters.');
    return false;
  }
  return true;
};

const validFormReservation = (name) => {
  name.value = name.value.trim();
  if (!validString(name.value)) {
    name.focus();
    displayMessage(
      'Name field only allows alphanumeric, hyphens, underscores, and max 30 characters.',
    );
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

  if (validFormReservation(name)) {
    _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.addReservation(movieId, name.value, startDate.value, endDate.value, appID).then((ans) => {
      if (ans === 'Created') {
        _consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.getReservations(movieId, appID).then((list) => {
          buildMovieReservations(list);
        });
        name.value = '';
        name.focus();
        formMessageRes.textContent = 'Comment sent successfully';
        displayMessage(formMessageRes);
      } else {
        displayMessage(formMessageRes, 'Comments are not available for now. Try again later.');
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
      (0,_displayMovieDetails_js__WEBPACK_IMPORTED_MODULE_1__.displayMovieReservations)(item);
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

module.exports = __webpack_require__.p + "fedbf7a42abc92e6dda9.svg";

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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxlQUFlLGNBQWMsYUFBYSxXQUFXLGFBQWEsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxh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Q0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JCMkI7QUFDOEI7QUFDRjtBQUNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdFQUFZO0FBQ1osRUFBRSxxRUFBYTtBQUNmO0FBQ0EsRUFBRSx1RUFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQSx3RUFBWTtBQUNaLEVBQUUscUVBQWE7QUFDZjtBQUNBLEVBQUUsdUVBQVU7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvYWxsSXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnN1bWVUVk1hemVBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VGdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2IxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iZy1tb3ZpZXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJsYTppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVNwZWN0cmFsOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5oZWFkZXIgLmhlYWRlci1icmFuZCB7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDExMHB4O1xcbn1cXG5oZWFkZXIgbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBnYXA6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbmhlYWRlciBuYXYgdWwgbGkgYTpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzODQ3O1xcbiAgY29sb3I6ICNmZjM4NDc7XFxufVxcblxcbi5tb3ZpZS1zZWMsXFxuLmJsdVJheS1zZWMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDMwcHggMyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlcixcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9faW1nLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19pbWcge1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSxcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogNDhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTVweDtcXG4gIGdhcDogM3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgaSB7XFxuICBjb2xvcjogI2ZmMzg0NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6aG92ZXIsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmQzZjNmO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgaTphY3RpdmUsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpOmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZmMDIwMjtcXG4gIHRleHQtc2hhZG93OiAwIDAgN3B4IHJlZDtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIHNwYW4sXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24sXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uIHtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmYzODQ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogI2ZmMzg0NztcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmhvdmVyLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODQ3O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbjphY3RpdmUsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmFjdGl2ZSB7XFxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4O1xcbn1cXG5cXG4ubW9kYWxfX2JveCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzIsIDMyLCAzMiwgMC45KTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vZGFsX19jb250YWluZXIge1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA0OHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcXG4gIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0biB7XFxuICB3aWR0aDogMnJlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzg0NztcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwLjVyZW07XFxuICByaWdodDogMC41cmVtO1xcbiAgei1pbmRleDogMTE7XFxufVxcbi5tb2RhbF9fYm94IC5tb2RhbF9fY29udGFpbmVyIC5tb2RhbF9fYnRuIC5idG5fX2Nsb3NlLW1vZGFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODQ3O1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0bjpob3ZlciAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gIHNjcm9sbGJhci1jb2xvcjogI2JmYzVjYSAjZGVlMmU2O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+ICoge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHVsIGxpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBwYWRkaW5nOiAwLjVyZW0gMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgLmJ0biB7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjM4NDc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgLmJ0bjpob3ZlciB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzODQ3O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzg0NztcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzVjYTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNnB4O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2RlZTJlNjtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDQ4cmVtKSB7XFxuICAubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXG4gIH1cXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzID4gKiB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIGltZyB7XFxuICB3aWR0aDogMjEwcHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyAubW92aWVfX21vcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgLm1vdmllX19tb3JlIC5pdGVtLWNhdGVnb3J5IHtcXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyxcXG4ubW9kYWxfX2JveCAubW92aWVfX3Jlc2VydmF0aW9ucyB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1kYXRlLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tbmFtZSxcXG4ubW9kYWxfX2JveCAubW92aWVfX3Jlc2VydmF0aW9ucyAuaXRlbS1kYXRlLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIC5pdGVtLW5hbWUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tbmFtZSxcXG4ubW9kYWxfX2JveCAubW92aWVfX3Jlc2VydmF0aW9ucyAuaXRlbS1uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tZGF0ZSxcXG4ubW9kYWxfX2JveCAubW92aWVfX3Jlc2VydmF0aW9ucyAuaXRlbS1kYXRlIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQge1xcbiAgLyogRk9STSBWQUxJREFUSU9OICovXFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMzEuMjVyZW07XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gLmlucHV0X19maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNiZmM1Y2E7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSAuaW5wdXRfX2ZpZWxkOmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjZmYzODQ3O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IC5mb3JtX19tZXNzYWdlIHtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6ICMwNGJkOWU7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLmVycm9yLW1lc3NhZ2Uge1xcbiAgY29sb3I6ICNmZDNmM2Y7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLnZpc2libGUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5tb2RhbF9fYm94LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJveF9faGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmFib3V0LXNlYyAuYWJvdXQtc2VjdGlvbl9fY29udGFpbmVyIHtcXG4gIGJvcmRlcjogNXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNzAwcHg7XFxuICBtaW4taGVpZ2h0OiA2NXZoO1xcbiAgcGFkZGluZzogNTBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmFib3V0LXNlYyAuYWJvdXQtc2VjdGlvbl9fY29udGFpbmVyIGgyIHtcXG4gIG1hcmdpbjogYXV0byBhdXRvIDgwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG4uYWJvdXQtc2VjIC5hYm91dC1zZWN0aW9uX19jb250YWluZXIgcCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxuICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUNTRSw4QkFsQks7RUFtQkwsZUFGZ0I7RUFHaEIsZ0JBSDBCO0VBSTFCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0F0Qks7RUF1Qkwsc0JBUDBFO0VETDFFLG1EQUFBO0FBSUY7O0FBREE7RUVWRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VGVUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ2xCVztFRG1CWCxhQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSkU7RUNsQkEsZ0NBVEs7RUFVTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQVpLO0VBYUwseUJBUDBFO0VEc0J4RSxxQkFBQTtFQUNBLHlEQUFBO0VBQ0Es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NmFILHVCQUFBO0VBQ0EsaUJBQUE7QUFrQk47QUFmSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaUJOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcbkBpbXBvcnQgJ21peGlucyc7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBAaW5jbHVkZSBmb250LWI7XFxuXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2IxLnBuZyk7XFxufVxcblxcbmhlYWRlciB7XFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAuaGVhZGVyLWJyYW5kIHtcXG4gICAgQGluY2x1ZGUgZm9udC1oO1xcblxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvbG9nby5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHVsIHtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgIGdhcDogMjBweDtcXG5cXG4gICAgICBAaW5jbHVkZSBmbGV4LXJvdztcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBhIHtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgICBwYWRkaW5nOiAxcHg7XFxuXFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQ7XFxuICAgICAgICAgICAgY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgQGluY2x1ZGUgZm9udC1oKCRmdzogNjAwKTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1vdmllLXNlYyxcXG4uYmx1UmF5LXNlYyB7XFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXG5cXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IGF1dG87XFxuICBnYXA6IDMwcHggMyU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG5cXG4gIC5tb3ZpZS13cmFwcGVyIHtcXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bTtcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XFxuXFxuICAgIC5tb3ZpZS13cmFwcGVyX19pbWcge1xcbiAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgfVxcblxcbiAgICAubW92aWUtd3JhcHBlcl9fdGl0bGUge1xcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogNXB4O1xcbiAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICBoZWlnaHQ6IDQ4cHg7XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG5cXG4gICAgICAubW92aWUtd3JhcHBlcl9fbGlrZXMge1xcbiAgICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bTtcXG5cXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICB3aWR0aDogNTVweDtcXG4gICAgICAgIGdhcDogM3B4O1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuXFxuICAgICAgICBpIHtcXG4gICAgICAgICAgY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6ICNmZDNmM2Y7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDI1NSwgMiwgMik7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCA3cHggcmVkO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICBzcGFuIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24ge1xcbiAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRhY2NlbnQ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgcGFkZGluZzogMC4yNXJlbSAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgfVxcblxcbiAgICAgICY6YWN0aXZlIHtcXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHg7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbi5tb2RhbF9fYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAwLjkpO1xcbiAgZGlzcGxheTogbm9uZTtcXG5cXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMTA7XFxuXFxuICAubW9kYWxfX2NvbnRhaW5lciB7XFxuICAgIGhlaWdodDogOTAlO1xcbiAgICB3aWR0aDogOTAlO1xcbiAgICBtYXgtd2lkdGg6IDQ4cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JnLW1vdmllcy5zdmcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgQGluY2x1ZGUgZmxleC1jb2x1bTtcXG5cXG4gICAgLm1vZGFsX19idG4ge1xcbiAgICAgIHdpZHRoOiAycmVtO1xcbiAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgICAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxuXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHRvcDogMC41cmVtO1xcbiAgICAgIHJpZ2h0OiAwLjVyZW07XFxuICAgICAgei1pbmRleDogMTE7XFxuXFxuICAgICAgLmJ0bl9fY2xvc2UtbW9kYWwge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgb3V0bGluZTogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAgICAgQGluY2x1ZGUgZm9udC1oKCRmczogMS4yNXJlbSwgJGNvbG9yOiAkYWNjZW50KTtcXG5cXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcblxcbiAgICAgICAgLmJ0bl9fY2xvc2UtbW9kYWwge1xcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb3ZpZV9fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmYsICRhbHBoYTogMC44KTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICA+ICoge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICAgIH1cXG5cXG4gICAgPiA6bGFzdC1jaGlsZCB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICBoMiB7XFxuICAgICAgQGluY2x1ZGUgZm9udC1oKCRmczogMnJlbSwgJGZ3OiBib2xkLCAkdHQ6IHVwcGVyY2FzZSk7XFxuXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICBoMyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgfVxcblxcbiAgICB1bCB7XFxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gICAgICBsaSB7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4LXJvdztcXG5cXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYnRuIHtcXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgQGluY2x1ZGUgZm9udC1oKCRjb2xvcjogJGFjY2VudCk7XFxuXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRhY2NlbnQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYWNjZW50O1xcbiAgICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHNjcm9sbGJhci13aWR0aDogdGhpbjtcXG4gICAgc2Nyb2xsYmFyLWNvbG9yOiAkZ3JheS1kYXJrICRncmF5LWxpZ2h0O1xcblxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktZGFyaztcXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB9XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICB3aWR0aDogNnB4O1xcbiAgICB9XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JheS1saWdodDtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBtcSgkbXc6IDQ4cmVtKSB7XFxuICAgICAgcGFkZGluZzogMS41cmVtO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW92aWVfX2RldGFpbHMge1xcbiAgICA+ICoge1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDIxMHB4O1xcbiAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICBmbG9hdDogbGVmdDtcXG4gICAgfVxcblxcbiAgICAubW92aWVfX21vcmUge1xcbiAgICAgIG1hcmdpbjogMDtcXG4gICAgICB3aWR0aDogYXV0bztcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcbiAgICAgIC5pdGVtLWNhdGVnb3J5IHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb3ZpZV9fY29tbWVudHMsXFxuICAubW92aWVfX3Jlc2VydmF0aW9ucyB7XFxuICAgIGNsZWFyOiBib3RoO1xcblxcbiAgICAuaXRlbS1kYXRlLFxcbiAgICAuaXRlbS1uYW1lIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1uYW1lIHtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLWRhdGUge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb3ZpZV9fYWRkLWNvbW1lbnQge1xcbiAgICBmb3JtIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXgtd2lkdGg6IDMxLjI1cmVtO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuXFxuICAgICAgQGluY2x1ZGUgZmxleC1jb2x1bTtcXG5cXG4gICAgICA+ICoge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG4gICAgICB9XFxuXFxuICAgICAgPiA6bGFzdC1jaGlsZCB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIH1cXG5cXG4gICAgICAuaW5wdXRfX2ZpZWxkIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgJGdyYXktZGFyaztcXG5cXG4gICAgICAgIEBpbmNsdWRlIGZvbnQtYjtcXG5cXG4gICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLyogRk9STSBWQUxJREFUSU9OICovXFxuICAgIC5mb3JtX19tZXNzYWdlIHtcXG4gICAgICAvLyBkaXNwbGF5OiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDAuM3JlbTtcXG4gICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICBjb2xvcjogIzA0YmQ5ZTtcXG4gICAgfVxcblxcbiAgICAuZXJyb3ItbWVzc2FnZSB7XFxuICAgICAgY29sb3I6ICNmZDNmM2Y7XFxuICAgIH1cXG5cXG4gICAgLnZpc2libGUge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5tb2RhbF9fYm94LWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmJveF9faGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgQGluY2x1ZGUgZmxleC1yb3c7XFxuXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogNTBweCBhdXRvIDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuXFxuICBAaW5jbHVkZSBmb250LWIoJGZ3OiA0MDApO1xcbn1cXG5cXG4udG9nZ2xlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLmFib3V0LXNlYyB7XFxuICAuYWJvdXQtc2VjdGlvbl9fY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDY1dmg7XFxuICAgIHBhZGRpbmc6IDUwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBoMiB7XFxuICAgICAgbWFyZ2luOiBhdXRvIGF1dG8gODBweDtcXG5cXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiA0cmVtLCAkZnc6IGJvbGQsICRsaDogMSk7XFxuXFxuICAgICAgY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQ7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNztcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJsYTppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVNwZWN0cmFsOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kZmYtaDogJ0thcmxhJywgc2Fucy1zZXJpZjtcXG4kZmYtYjogJ1NwZWN0cmFsJywgc2VyaWY7XFxuJGJhc2U6ICMwMjMwNDc7XFxuJGFjY2VudDogI2ZmMzg0NztcXG4kcGluazogI2U2OGFiNDtcXG4kZ3JheS1saWdodDogI2RlZTJlNjtcXG4kZ3JheS1kYXJrOiAjYmZjNWNhO1xcblxcbkBtaXhpbiBmb250LWgoJGZzOjFyZW0sICRmdzozMDAsICRsaDoxLjZyZW0sICRsczpub3JtYWwsICRjb2xvcjogJGJhc2UsICR0dDp1cHBlcmNhc2UpIHtcXG4gIGZvbnQtZmFtaWx5OiAkZmYtaDtcXG4gIGZvbnQtc2l6ZTogJGZzO1xcbiAgZm9udC13ZWlnaHQ6ICRmdztcXG4gIGxldHRlci1zcGFjaW5nOiAkbHM7XFxuICBsaW5lLWhlaWdodDogJGxoO1xcbiAgY29sb3I6ICRjb2xvcjtcXG4gIHRleHQtdHJhbnNmb3JtOiAkdHQ7XFxufVxcblxcbkBtaXhpbiBmb250LWIoJGZzOjFyZW0sICRmdzozMDAsICRsaDoxLjJyZW0sICRsczpub3JtYWwsICRjb2xvcjogJGJhc2UsICR0dDpub3JtYWwpIHtcXG4gIGZvbnQtZmFtaWx5OiAkZmYtYjtcXG4gIGZvbnQtc2l6ZTogJGZzO1xcbiAgZm9udC13ZWlnaHQ6ICRmdztcXG4gIGxldHRlci1zcGFjaW5nOiAkbHM7XFxuICBsaW5lLWhlaWdodDogJGxoO1xcbiAgY29sb3I6ICRjb2xvcjtcXG4gIHRleHQtdHJhbnNmb3JtOiAkdHQ7XFxufVxcblwiLFwiQG1peGluIGZsZXgtY29sdW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuQG1peGluIGZsZXgtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbkBtaXhpbiBmbGV4LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBtcSAoJG13OjUwcmVtKSB7XFxuICBAbWVkaWEgKG1pbi13aWR0aDogJG13KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHRvdGFsSXRlbXMgPSAoYXJyLCBkb21FbGVtZW50KSA9PiB7XG4gIGxldCBsZW5ndGggPSAwO1xuICB3aGlsZSAoYXJyW2xlbmd0aF0gIT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCArPSAxO1xuICB9XG4gIGRvbUVsZW1lbnQuaW5uZXJIVE1MID0gYCgke2xlbmd0aH0pYDtcbiAgcmV0dXJuIGxlbmd0aDtcbn07XG5cbmV4cG9ydCB7IHRvdGFsSXRlbXMgYXMgZGVmYXVsdCB9O1xuIiwiY29uc3QgaUJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAobW92aWVJZCwgYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfSR7YXBwSUR9L2NvbW1lbnRzP2l0ZW1faWQ9JHttb3ZpZUlkfWApO1xuICBjb25zdCBjb21tZW50c0xpc3QgPSBhd2FpdCBjb25uZWN0Lmpzb24oKTtcbiAgaWYgKGNvbW1lbnRzTGlzdC5lcnJvcikgcmV0dXJuIFtdO1xuICByZXR1cm4gY29tbWVudHNMaXN0O1xufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChtb3ZpZUlkLCB1c2VybmFtZSwgY29tbWVudCwgYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfSR7YXBwSUR9L2NvbW1lbnRzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IG1vdmllSWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0LnRleHQoKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRDb21tZW50cyA9IChhcnIpID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb3VudCArPSAxO1xuICB9XG4gIHJldHVybiBgQ29tbWVudHMgKCR7Y291bnR9KWA7XG59O1xuXG5jb25zdCBnZXRSZXNlcnZhdGlvbnMgPSBhc3luYyAobW92aWVJZCwgYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfSR7YXBwSUR9L3Jlc2VydmF0aW9ucz9pdGVtX2lkPSR7bW92aWVJZH1gKTtcbiAgY29uc3QgY29tbWVudHNMaXN0ID0gYXdhaXQgY29ubmVjdC5qc29uKCk7XG4gIGlmIChjb21tZW50c0xpc3QuZXJyb3IpIHJldHVybiBbXTtcbiAgcmV0dXJuIGNvbW1lbnRzTGlzdDtcbn07XG5cbmNvbnN0IGFkZFJlc2VydmF0aW9uID0gYXN5bmMgKG1vdmllSWQsIHVzZXJuYW1lLCBkYXRlU3RhcnQsIGRhdGVFbmQsIGFwcElEKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtpQmFzZVVSTH0ke2FwcElEfS9yZXNlcnZhdGlvbnMvYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IG1vdmllSWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGRhdGVfc3RhcnQ6IGRhdGVTdGFydCxcbiAgICAgIGRhdGVfZW5kOiBkYXRlRW5kLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGNvdW50UmVzZXJ2YXRpb25zID0gKGFycikgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGBSZXNlcnZhdGlvbnMgKCR7Y291bnR9KWA7XG59O1xuXG5leHBvcnQge1xuICBnZXRDb21tZW50cyxcbiAgYWRkQ29tbWVudCxcbiAgY291bnRDb21tZW50cyxcbiAgZ2V0UmVzZXJ2YXRpb25zLFxuICBhZGRSZXNlcnZhdGlvbixcbiAgY291bnRSZXNlcnZhdGlvbnMsXG59O1xuIiwiY29uc3QgYmFzZVVSTCA9ICcgaHR0cHM6Ly9hcGkudHZtYXplLmNvbSc7XG5cbmNvbnN0IGdldE1vdmllRGF0YSA9IGFzeW5jIChpbmRleCwgcXVlcnksIHRvdGFsKSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9zaG93cz9xPSR7cXVlcnl9YCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC5qc29uKCkudGhlbigoZGF0YUxpc3QpID0+IHtcbiAgICBjb25zdCBzaG9ydExpc3QgPSBkYXRhTGlzdC5zbGljZShpbmRleCwgaW5kZXggKyB0b3RhbCk7XG4gICAgc2hvcnRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBnZW5yZXM6IGl0ZW0uZ2VucmVzLFxuICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgZW5kOiBpdGVtLmVuZGVkLFxuICAgICAgICByYXRpbmc6IGl0ZW0ucmF0aW5nLFxuICAgICAgICBzdW1tYXJ5OiBpdGVtLnN1bW1hcnksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hvcnRMaXN0O1xuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgZ2V0TW92aWVEYXRhIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCAqIGFzIENJQVBJIGZyb20gJy4vY29uc3VtZUludm9sdmVtZW50QVBJLmpzJztcblxuY29uc3QgbW9kYWxCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2JveCcpO1xuY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5fX2Nsb3NlLW1vZGFsJyk7XG5jb25zdCBjb21tZW50Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX19jb21tZW50Jyk7XG5jb25zdCByZXNlcnZhdGlvbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9fcmVzZXJ2YXRpb24nKTtcbmNvbnN0IGZvcm1NZXNzYWdlQ29tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX21lc3NhZ2UtY29tJyk7XG5jb25zdCBmb3JtTWVzc2FnZVJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX19tZXNzYWdlLXJlcycpO1xubGV0IHRpbWVySWQgPSAnJztcbmxldCBuZXdJRCA9ICcnO1xuXG5jb25zdCBhcnJJbnRvU3RyaW5nID0gKGFycikgPT4ge1xuICBsZXQgc3RyID0gJyc7XG4gIGFyci5mb3JFYWNoKChlbCkgPT4ge1xuICAgIHN0ciArPSBgJHtlbH0gfCBgO1xuICB9KTtcbiAgcmV0dXJuIHN0cjtcbn07XG5cbmNvbnN0IGJ1aWxkTW92aWVEZXNjcmlwdGlvbiA9IChkYXRhKSA9PiB7XG4gIGNvbnN0IG1vdmllRGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fZGV0YWlscycpO1xuICBtb3ZpZURldGFpbHMuc2V0QXR0cmlidXRlKCdkYXRhLW1vdmllaWQnLCBkYXRhLmlkKTtcbiAgbW92aWVEZXRhaWxzLmlubmVySFRNTCA9IGA8aW1nIHNyYz1cIiR7ZGF0YS5pbWFnZS5tZWRpdW19XCIgYWx0PVwiJHtkYXRhLm5hbWV9IG1vdmllIGltYWdlXCI+XG4gICAgICAgIDxoMj4ke2RhdGEubmFtZX08L2gyPlxuICAgICAgICA8dWwgY2xhc3M9XCJtb3ZpZV9fbW9yZVwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiPkdlbnJlOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7YXJySW50b1N0cmluZyhkYXRhLmdlbnJlcyl9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+RW5kZWQ6PC9zcGFuPlxuICAgICAgICAgICAgPHA+JHtkYXRhLmVuZGVkfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1jYXRlZ29yeVwiPlJhdGluZzo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2RhdGEucmF0aW5nLmF2ZXJhZ2V9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgICR7ZGF0YS5zdW1tYXJ5fWA7XG59O1xuXG5jb25zdCBidWlsZE1vdmllQ29tbWVudHMgPSAoYXJyKSA9PiB7XG4gIGNvbnN0IG1vdmllQ29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVfX2NvbW1lbnRzJyk7XG4gIG1vdmllQ29tbWVudHMuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBDSUFQSS5jb3VudENvbW1lbnRzKGFycik7XG4gIG1vdmllQ29tbWVudHMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCBjb21tZW50TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGNvbW1lbnRMaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzX19saXN0Jyk7XG4gIGFyci5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGAgPGRpdiBjbGFzcz1cIm93bmVyXCI+XG4gICAgICAgICAgICAgIDxzcGFuPiR7Y29tbWVudC5jcmVhdGlvbl9kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLW5hbWVcIj4ke2NvbW1lbnQudXNlcm5hbWV9Ojwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbW1lbnRcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWNvbW1lbnRcIj4ke2NvbW1lbnQuY29tbWVudH08L3A+XG4gICAgICAgICAgICA8L2Rpdj5gO1xuICAgIGNvbW1lbnRMaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG4gIG1vdmllQ29tbWVudHMuYXBwZW5kQ2hpbGQoY29tbWVudExpc3QpO1xufTtcblxuY29uc3QgYnVpbGRNb3ZpZVJlc2VydmF0aW9ucyA9IChhcnIpID0+IHtcbiAgY29uc3QgbW92aWVSZXNlcnZhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVfX3Jlc2VydmF0aW9ucycpO1xuICBtb3ZpZVJlc2VydmF0aW9ucy5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IENJQVBJLmNvdW50UmVzZXJ2YXRpb25zKGFycik7XG4gIG1vdmllUmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29uc3QgcmVzZXJ2YXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgcmVzZXJ2YXRpb25MaXN0LmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRzX19saXN0Jyk7XG4gIGFyci5mb3JFYWNoKChyZXNlcnZlKSA9PiB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpc3RJdGVtLmlubmVySFRNTCA9IGA8c3BhbiBjbGFzcz1cIml0ZW0tZGF0ZVwiPiR7cmVzZXJ2ZS5kYXRlX3N0YXJ0fSB0byAke3Jlc2VydmUuZGF0ZV9lbmR9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5ieSAke3Jlc2VydmUudXNlcm5hbWV9PC9zcGFuPmA7XG4gICAgcmVzZXJ2YXRpb25MaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtKTtcbiAgfSk7XG4gIG1vdmllUmVzZXJ2YXRpb25zLmFwcGVuZENoaWxkKHJlc2VydmF0aW9uTGlzdCk7XG59O1xuXG5jb25zdCBjbG9zZUJveCA9IChpZGVudCkgPT4ge1xuICBjb25zdCBlbERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2lkZW50fWApO1xuICBlbERvbS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2JveF9faGlkZScpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZUNvbW1lbnRzID0gKG1vdmllLCBhcHBJRCkgPT4ge1xuICBidWlsZE1vdmllRGVzY3JpcHRpb24obW92aWUpO1xuICBuZXdJRCA9IGFwcElEO1xuICBDSUFQSS5nZXRDb21tZW50cyhtb3ZpZS5pZCwgYXBwSUQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICBidWlsZE1vdmllQ29tbWVudHMobGlzdCk7XG4gICAgY2xvc2VCb3goJ3Jlc2VydmF0aW9uaycpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19ib3gtZGlzcGxheScpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZVJlc2VydmF0aW9ucyA9IChtb3ZpZSwgYXBwSUQpID0+IHtcbiAgYnVpbGRNb3ZpZURlc2NyaXB0aW9uKG1vdmllKTtcbiAgQ0lBUEkuZ2V0UmVzZXJ2YXRpb25zKG1vdmllLmlkLCBhcHBJRCkudGhlbigobGlzdCkgPT4ge1xuICAgIGJ1aWxkTW92aWVSZXNlcnZhdGlvbnMobGlzdCk7XG4gICAgY2xvc2VCb3goJ2NvbW1lbnRrJyk7XG4gICAgbW9kYWxCb3guY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2JveC1kaXNwbGF5Jyk7XG4gIH0pO1xufTtcblxubW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgY29tQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbW1lbnRrJyk7XG4gIGNvbUJveC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JveF9faGlkZScpO1xuICB9KTtcbiAgY29uc3QgcmVzQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2VydmF0aW9uaycpO1xuICByZXNCb3guZm9yRWFjaCgoZWwpID0+IHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdib3hfX2hpZGUnKTtcbiAgfSk7XG4gIG1vZGFsQm94LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ib3gtZGlzcGxheScpO1xufSk7XG5cbmNvbnN0IGRpc3BsYXlNZXNzYWdlID0gKGVsZG9tLCBtc2cpID0+IHtcbiAgY2xlYXJUaW1lb3V0KHRpbWVySWQpO1xuICBpZiAobXNnKSB7XG4gICAgZWxkb20udGV4dENvbnRlbnQgPSBtc2c7XG4gICAgZWxkb20uY2xhc3NMaXN0LmFkZCgnZXJyb3ItbWVzc2FnZScpO1xuICB9XG4gIGVsZG9tLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGVsZG9tLmNsYXNzTGlzdC5yZW1vdmUoJ2Vycm9yLW1lc3NhZ2UnLCAndmlzaWJsZScpO1xuICB9LCA1MDAwKTtcbn07XG5cbmNvbnN0IHZhbGlkU3RyaW5nID0gKHN0cikgPT4ge1xuICBpZiAoc3RyLm1hdGNoKC9eW2EtekEtWjAtOcOALcO/XFx1MDBmMVxcdTAwZDFcXHUwMEUwXFx1MDBGQ19cXC0gXXsxLDMwfSQvKSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IHZhbGlkRm9ybUNvbW1lbnQgPSAobmFtZSwgY29tbWVudCkgPT4ge1xuICBuYW1lLnZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XG4gIGNvbW1lbnQudmFsdWUgPSBjb21tZW50LnZhbHVlLnRyaW0oKTtcbiAgaWYgKCF2YWxpZFN0cmluZyhuYW1lLnZhbHVlKSkge1xuICAgIG5hbWUuZm9jdXMoKTtcbiAgICBkaXNwbGF5TWVzc2FnZShcbiAgICAgICdOYW1lIGZpZWxkIG9ubHkgYWxsb3dzIGFscGhhbnVtZXJpYywgaHlwaGVucywgdW5kZXJzY29yZXMsIGFuZCBtYXggMzAgY2hhcmFjdGVycy4nLFxuICAgICk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChjb21tZW50LnZhbHVlID09PSAnJyB8fCBjb21tZW50LnZhbHVlLmxlbmd0aCA+IDI1MCkge1xuICAgIGNvbW1lbnQuZm9jdXMoKTtcbiAgICBkaXNwbGF5TWVzc2FnZSgnSW5zaWdodHMgZmllbGQgYWxsb3dzIDEgdG8gMjUwIGNoYXJhY3RlcnMuJyk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgdmFsaWRGb3JtUmVzZXJ2YXRpb24gPSAobmFtZSkgPT4ge1xuICBuYW1lLnZhbHVlID0gbmFtZS52YWx1ZS50cmltKCk7XG4gIGlmICghdmFsaWRTdHJpbmcobmFtZS52YWx1ZSkpIHtcbiAgICBuYW1lLmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoXG4gICAgICAnTmFtZSBmaWVsZCBvbmx5IGFsbG93cyBhbHBoYW51bWVyaWMsIGh5cGhlbnMsIHVuZGVyc2NvcmVzLCBhbmQgbWF4IDMwIGNoYXJhY3RlcnMuJyxcbiAgICApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNlbmRDb21tZW50ID0gKGFwcElEKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX191c2VybmFtZScpO1xuICBjb25zdCBjb21tZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9faW5zaWdodHMnKTtcbiAgY29uc3QgbW92aWVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fZGV0YWlscycpLmdldEF0dHJpYnV0ZSgnZGF0YS1tb3ZpZUlkJyk7XG5cbiAgaWYgKHZhbGlkRm9ybUNvbW1lbnQobmFtZSwgY29tbWVudCkpIHtcbiAgICBDSUFQSS5hZGRDb21tZW50KG1vdmllSWQsIG5hbWUudmFsdWUsIGNvbW1lbnQudmFsdWUsIGFwcElEKS50aGVuKChhbnMpID0+IHtcbiAgICAgIGlmIChhbnMgPT09ICdDcmVhdGVkJykge1xuICAgICAgICBDSUFQSS5nZXRDb21tZW50cyhtb3ZpZUlkLCBhcHBJRCkudGhlbigobGlzdCkgPT4ge1xuICAgICAgICAgIGJ1aWxkTW92aWVDb21tZW50cyhsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgbmFtZS5mb2N1cygpO1xuICAgICAgICBjb21tZW50LnZhbHVlID0gJyc7XG4gICAgICAgIGZvcm1NZXNzYWdlQ29tLnRleHRDb250ZW50ID0gJ0NvbW1lbnQgc2VudCBzdWNjZXNzZnVsbHknO1xuICAgICAgICBkaXNwbGF5TWVzc2FnZShmb3JtTWVzc2FnZUNvbSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwbGF5TWVzc2FnZShmb3JtTWVzc2FnZUNvbSwgJ0NvbW1lbnRzIGFyZSBub3QgYXZhaWxhYmxlIGZvciBub3cuIFRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3Qgc2VuZFJlc2VydmF0aW9uID0gKGFwcElEKSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX191c2VybmFtZS1yZXMnKTtcbiAgY29uc3Qgc3RhcnREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9fc3RhcnQtZGF0ZScpO1xuICBjb25zdCBlbmREYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9fZW5kLWRhdGUnKTtcbiAgY29uc3QgbW92aWVJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fZGV0YWlscycpLmdldEF0dHJpYnV0ZSgnZGF0YS1tb3ZpZUlkJyk7XG5cbiAgaWYgKHZhbGlkRm9ybVJlc2VydmF0aW9uKG5hbWUpKSB7XG4gICAgQ0lBUEkuYWRkUmVzZXJ2YXRpb24obW92aWVJZCwgbmFtZS52YWx1ZSwgc3RhcnREYXRlLnZhbHVlLCBlbmREYXRlLnZhbHVlLCBhcHBJRCkudGhlbigoYW5zKSA9PiB7XG4gICAgICBpZiAoYW5zID09PSAnQ3JlYXRlZCcpIHtcbiAgICAgICAgQ0lBUEkuZ2V0UmVzZXJ2YXRpb25zKG1vdmllSWQsIGFwcElEKS50aGVuKChsaXN0KSA9PiB7XG4gICAgICAgICAgYnVpbGRNb3ZpZVJlc2VydmF0aW9ucyhsaXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgbmFtZS5mb2N1cygpO1xuICAgICAgICBmb3JtTWVzc2FnZVJlcy50ZXh0Q29udGVudCA9ICdDb21tZW50IHNlbnQgc3VjY2Vzc2Z1bGx5JztcbiAgICAgICAgZGlzcGxheU1lc3NhZ2UoZm9ybU1lc3NhZ2VSZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGxheU1lc3NhZ2UoZm9ybU1lc3NhZ2VSZXMsICdDb21tZW50cyBhcmUgbm90IGF2YWlsYWJsZSBmb3Igbm93LiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2VuZENvbW1lbnQobmV3SUQpO1xufSk7XG5cbnJlc2VydmF0aW9uRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIHNlbmRSZXNlcnZhdGlvbihuZXdJRCk7XG59KTtcblxuZXhwb3J0IHsgZGlzcGxheU1vdmllQ29tbWVudHMsIGRpc3BsYXlNb3ZpZVJlc2VydmF0aW9ucyB9O1xuIiwiaW1wb3J0IHsgdXBkYXRlTGlrZXMsIHNldExpa2UgfSBmcm9tICcuL2xpa2VGdW5jdGlvbmFsaXR5LmpzJztcbmltcG9ydCB7IGRpc3BsYXlNb3ZpZUNvbW1lbnRzLCBkaXNwbGF5TW92aWVSZXNlcnZhdGlvbnMgfSBmcm9tICcuL2Rpc3BsYXlNb3ZpZURldGFpbHMuanMnO1xuXG5jb25zdCBkaXNwbGF5TW92aWVzID0gYXN5bmMgKG1vdmllTGlzdCwgYXBwSWQsIHNlY3Rpb24pID0+IHtcbiAgY29uc3QgbW92aWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7c2VjdGlvbn0tc2VjdGlvbmApO1xuICBtb3ZpZVNlY3Rpb24uaW5uZXJIVE1MID0gJyc7XG4gIG1vdmllTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW5EaXYuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXInO1xuICAgIG1haW5EaXYuaWQgPSBgJHtzZWN0aW9ufSR7aXRlbS5pZH1gO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX190aXRsZSc7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19pbWcnO1xuICAgIGltZy5zcmMgPSBpdGVtLmltYWdlLm1lZGl1bTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBuYW1lLmlubmVySFRNTCA9IGAke2l0ZW0ubmFtZX1gO1xuICAgIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGlrZXMuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX2xpa2VzJztcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZS5jbGFzc05hbWUgPSAnZmFzIGZhLWhlYXJ0JztcbiAgICBsaWtlcy5hcHBlbmQobGlrZSwgc3Bhbik7XG4gICAgZGV0YWlscy5hcHBlbmQobmFtZSwgbGlrZXMpO1xuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21tZW50QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjb21tZW50QnV0dG9uLmlubmVySFRNTCA9ICdDb21tZW50cyc7XG4gICAgY29tbWVudEJ1dHRvbi5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24nO1xuICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBkaXNwbGF5TW92aWVDb21tZW50cyhpdGVtLCBhcHBJZCk7XG4gICAgfSk7XG4gICAgbWFpbkRpdi5hcHBlbmQoaW1nLCBkZXRhaWxzLCBjb21tZW50QnV0dG9uKTtcbiAgICBjb25zdCByZXNlcnZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXJ2ZUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5pbm5lckhUTUwgPSAnUmVzZXJ2YXRpb25zJztcbiAgICByZXNlcnZlQnV0dG9uLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbic7XG4gICAgcmVzZXJ2ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRpc3BsYXlNb3ZpZVJlc2VydmF0aW9ucyhpdGVtKTtcbiAgICB9KTtcbiAgICBtYWluRGl2LmFwcGVuZChyZXNlcnZlQnV0dG9uKTtcbiAgICBtb3ZpZVNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNldExpa2UoYCR7c2VjdGlvbn0ke2l0ZW0uaWR9YCwgYXBwSWQpO1xuICAgICAgY29uc3QgbnVtYmVyID0gbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC50ZXh0Q29udGVudC5zcGxpdCgnICcpO1xuICAgICAgbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC5pbm5lckhUTUwgPSBgJHtOdW1iZXIobnVtYmVyWzBdKSArIDF9IGxpa2VzYDtcbiAgICB9KTtcbiAgfSk7XG4gIHVwZGF0ZUxpa2VzKGFwcElkKTtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlNb3ZpZXMgYXMgZGVmYXVsdCB9O1xuIiwiY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCBzZXRMaWtlID0gYXN5bmMgKGlkLCBhcHBJRCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElEfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vSlNPTicgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldExpa2UgPSBhc3luYyAoYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHthcHBJRH0vbGlrZXMvYCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpa2VzID0gKGFwcElEKSA9PiB7XG4gIGdldExpa2UoYXBwSUQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudC5pdGVtX2lkfWApO1xuICAgICAgY29udGFpbmVyLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IGAke2VsZW1lbnQubGlrZXN9IGxpa2VzYDtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVMaWtlcywgc2V0TGlrZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBnZXRNb3ZpZURhdGEgZnJvbSAnLi9tb2R1bGVzL2NvbnN1bWVUVk1hemVBUEkuanMnO1xuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMnO1xuaW1wb3J0IHRvdGFsSXRlbXMgZnJvbSAnLi9tb2R1bGVzL2FsbEl0ZW1zQ291bnRlci5qcyc7XG5cbmNvbnN0IGR2ZElEID0gJ3pnZ0VCWHpwRmNRcWpEeHZNaE16JztcbmNvbnN0IGJsdUlEID0gJ0RpdWZXNzY4c2t4aGVNdTJYTzN5JztcbmNvbnN0IG1vdmllTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZV9fbGluaycpO1xuY29uc3QgYmx1TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibHUtcmF5X19saW5rJyk7XG5jb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRfX2xpbmsnKTtcbmNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZS1zZWN0aW9uJyk7XG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtc2VjdGlvbicpO1xuY29uc3QgYmx1U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibHVSYXktc2VjdGlvbicpO1xuY29uc3QgZHZkID0gJ2FjdGlvbic7XG5jb25zdCBibHVyYXkgPSAnZ2lybHMnO1xuXG5jb25zdCBob21lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtc2VjdGlvbl9faXRlbXMnKTtcbmdldE1vdmllRGF0YSgwLCBkdmQsIDUwKS50aGVuKChtb3ZpZUxpc3QpID0+IHtcbiAgZGlzcGxheU1vdmllcyhtb3ZpZUxpc3QsIGR2ZElELCAnbW92aWUnKTtcbiAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21vdmllLXNlY3Rpb24gPiAubW92aWUtd3JhcHBlcicpO1xuICB0b3RhbEl0ZW1zKGFsbCwgaG9tZUl0ZW1zKTtcbn0pO1xuXG5jb25zdCBibHVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVSYXktc2VjdGlvbl9faXRlbXMnKTtcbmdldE1vdmllRGF0YSg1MSwgYmx1cmF5LCAyNSkudGhlbigobW92aWVMaXN0KSA9PiB7XG4gIGRpc3BsYXlNb3ZpZXMobW92aWVMaXN0LCBibHVJRCwgJ2JsdVJheScpO1xuICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmx1UmF5LXNlY3Rpb24gPiAubW92aWUtd3JhcHBlcicpO1xuICB0b3RhbEl0ZW1zKGFsbCwgYmx1SXRlbXMpO1xufSk7XG5cbm1vdmllTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW92aWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBibHVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBhYm91dExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbiAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuICBibHVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xufSk7XG5cbmFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW92aWVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBibHVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpO1xuICBibHVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xufSk7XG5cbmJsdUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vdmllTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgYmx1TGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgYWJvdXRMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgYmx1U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9