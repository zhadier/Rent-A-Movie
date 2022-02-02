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
        formMessageRes.textContent = 'Reserved successfully';
        displayMessage(formMessageRes);
      } else {
        displayMessage(formMessageRes, 'Reservations are not available for now. Try again later.');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFdBQVcsS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFVBQVUsVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLFdBQVcsTUFBTSxPQUFPLFVBQVUsV0FBVyxNQUFNLE9BQU8sVUFBVSxXQUFXLE1BQU0sT0FBTyxXQUFXLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLE9BQU8sWUFBWSxXQUFXLE1BQU0sT0FBTyxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLFlBQVksWUFBWSxlQUFlLGNBQWMsYUFBYSxXQUFXLGFBQWEsWUFBWSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxh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RUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckIyQjtBQUM4QjtBQUNGO0FBQ0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0VBQVk7QUFDWixFQUFFLHFFQUFhO0FBQ2Y7QUFDQSxFQUFFLHVFQUFVO0FBQ1osQ0FBQzs7QUFFRDtBQUNBLHdFQUFZO0FBQ1osRUFBRSxxRUFBYTtBQUNmO0FBQ0EsRUFBRSx1RUFBVTtBQUNaLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/MmU0ZCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9hbGxJdGVtc0NvdW50ZXIuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnN1bWVJbnZvbHZlbWVudEFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY29uc3VtZVRWTWF6ZUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvZGlzcGxheU1vdmllcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZUZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvYjEucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2xvZ28uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2JnLW1vdmllcy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9U3BlY3RyYWw6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogNTBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcbmhlYWRlciAuaGVhZGVyLWJyYW5kIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogMTEwcHg7XFxufVxcbmhlYWRlciBuYXYgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGdhcDogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbmhlYWRlciBuYXYgdWwgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuaGVhZGVyIG5hdiB1bCBsaSBhOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjM4NDc7XFxuICBjb2xvcjogI2ZmMzg0NztcXG59XFxuXFxuLm1vdmllLXNlYyxcXG4uYmx1UmF5LXNlYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMzBweCAzJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19pbWcsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2ltZyB7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlLFxcbi5ibHVSYXktc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA1NXB4O1xcbiAgZ2FwOiAzcHg7XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGksXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpIHtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgaTpob3ZlcixcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6aG92ZXIge1xcbiAgY29sb3I6ICNmZDNmM2Y7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpOmFjdGl2ZSxcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjZmYwMjAyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggcmVkO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgc3BhbixcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIHNwYW4ge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4ubW92aWUtc2VjIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbixcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24ge1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZjM4NDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLm1vdmllLXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b246aG92ZXIsXFxuLmJsdVJheS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NDc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5tb3ZpZS1zZWMgLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmFjdGl2ZSxcXG4uYmx1UmF5LXNlYyAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b246YWN0aXZlIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHg7XFxufVxcblxcbi5tb2RhbF9fYm94IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMiwgMzIsIDMyLCAwLjkpO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXgtd2lkdGg6IDQ4cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2RhbF9fYm94IC5tb2RhbF9fY29udGFpbmVyIC5tb2RhbF9fYnRuIHtcXG4gIHdpZHRoOiAycmVtO1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzODQ3O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDAuNXJlbTtcXG4gIHJpZ2h0OiAwLjVyZW07XFxuICB6LWluZGV4OiAxMTtcXG59XFxuLm1vZGFsX19ib3ggLm1vZGFsX19jb250YWluZXIgLm1vZGFsX19idG4gLmJ0bl9fY2xvc2UtbW9kYWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBjb2xvcjogI2ZmMzg0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tb2RhbF9fYm94IC5tb2RhbF9fY29udGFpbmVyIC5tb2RhbF9fYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NDc7XFxufVxcbi5tb2RhbF9fYm94IC5tb2RhbF9fY29udGFpbmVyIC5tb2RhbF9fYnRuOmhvdmVyIC5idG5fX2Nsb3NlLW1vZGFsIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjYmZjNWNhICNkZWUyZTY7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyID4gKiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyID4gOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgdWwgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciAuYnRuIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzg0NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS42cmVtO1xcbiAgY29sb3I6ICNmZjM4NDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciAuYnRuOmhvdmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjM4NDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODQ3O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjNWNhO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA2cHg7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZGVlMmU2O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNDhyZW0pIHtcXG4gIC5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMS41cmVtO1xcbiAgfVxcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgPiAqIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgaW1nIHtcXG4gIHdpZHRoOiAyMTBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIC5tb3ZpZV9fbW9yZSB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyAubW92aWVfX21vcmUgLml0ZW0tY2F0ZWdvcnkge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzIC5pdGVtLWRhdGUsXFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1uYW1lLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIC5pdGVtLWRhdGUsXFxuLm1vZGFsX19ib3ggLm1vdmllX19yZXNlcnZhdGlvbnMgLml0ZW0tbmFtZSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1uYW1lLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIC5pdGVtLW5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb21tZW50cyAuaXRlbS1kYXRlLFxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fcmVzZXJ2YXRpb25zIC5pdGVtLWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCB7XFxuICAvKiBGT1JNIFZBTElEQVRJT04gKi9cXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAzMS4yNXJlbTtcXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gPiAqIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSA+IDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSAuaW5wdXRfX2ZpZWxkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2JmYzVjYTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5pbnB1dF9fZmllbGQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZjM4NDc7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgLmZvcm1fX21lc3NhZ2Uge1xcbiAgcGFkZGluZzogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogIzA0YmQ5ZTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCAuZXJyb3ItbWVzc2FnZSB7XFxuICBjb2xvcjogI2ZkM2YzZjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCAudmlzaWJsZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsX19ib3gtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm94X19oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDUwcHggYXV0byAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVxcblxcbi50b2dnbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uYWJvdXQtc2VjIC5hYm91dC1zZWN0aW9uX19jb250YWluZXIge1xcbiAgYm9yZGVyOiA1cHggc29saWQgd2hpdGU7XFxuICB3aWR0aDogOTAlO1xcbiAgbWF4LXdpZHRoOiA3MDBweDtcXG4gIG1pbi1oZWlnaHQ6IDY1dmg7XFxuICBwYWRkaW5nOiA1MHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWJvdXQtc2VjIC5hYm91dC1zZWN0aW9uX19jb250YWluZXIgaDIge1xcbiAgbWFyZ2luOiBhdXRvIGF1dG8gODBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS2FybGFcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogI2ZmMzg0NztcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQ7XFxufVxcbi5hYm91dC1zZWMgLmFib3V0LXNlY3Rpb25fX2NvbnRhaW5lciBwIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX3R5cG9ncmFwaHkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7RUFHRSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQ1NFLDhCQWxCSztFQW1CTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQXRCSztFQXVCTCxzQkFQMEU7RURMMUUsbURBQUE7QUFJRjs7QUFEQTtFRVZFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUZVQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJDbEJXO0VEbUJYLGFBQUE7RUFDQSxZQUFBO0FBTUY7QUFKRTtFQ2xCQSxnQ0FUSztFQVVMLGVBRmdCO0VBR2hCLGdCQUgwQjtFQUkxQixzQkFKK0M7RUFLL0MsbUJBTG1DO0VBTW5DLGNBWks7RUFhTCx5QkFQMEU7RURzQnhFLHFCQUFBO0VBQ0EseURBQUE7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YUc7RUQ2YUgsdUJBQUE7RUFDQSxpQkFBQTtBQWtCTjtBQWZJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFpQk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndHlwb2dyYXBoeSc7XFxuQGltcG9ydCAnbWl4aW5zJztcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIEBpbmNsdWRlIGZvbnQtYjtcXG5cXG4gIGJhY2tncm91bmQ6IHVybCguLi9pbWFnZXMvYjEucG5nKTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogNTBweDtcXG5cXG4gIC5oZWFkZXItYnJhbmQge1xcbiAgICBAaW5jbHVkZSBmb250LWg7XFxuXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltYWdlcy9sb2dvLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDExMHB4O1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgdWwge1xcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgZ2FwOiAyMHB4O1xcblxcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgICAgIHBhZGRpbmc6IDFweDtcXG5cXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICAgICAgICBjb2xvcjogJGFjY2VudDtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICBAaW5jbHVkZSBmb250LWgoJGZ3OiA2MDApO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubW92aWUtc2VjLFxcbi5ibHVSYXktc2VjIHtcXG4gIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMzBweCAzJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcbiAgLm1vdmllLXdyYXBwZXIge1xcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG5cXG4gICAgLm1vdmllLXdyYXBwZXJfX2ltZyB7XFxuICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxuICAgICAgQGluY2x1ZGUgZmxleC1yb3c7XFxuXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcblxcbiAgICAgIC5tb3ZpZS13cmFwcGVyX19saWtlcyB7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcblxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG5cXG4gICAgICAgIGkge1xcbiAgICAgICAgICBjb2xvcjogJGFjY2VudDtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZkM2YzZjtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyLCAyKTtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDdweCByZWQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBjb2xvcjogJGFjY2VudDtcXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1vZGFsX19ib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuOSk7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDtcXG5cXG4gIC5tb2RhbF9fY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmctbW92aWVzLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcblxcbiAgICAubW9kYWxfX2J0biB7XFxuICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50O1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXG5cXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwLjVyZW07XFxuICAgICAgcmlnaHQ6IDAuNXJlbTtcXG4gICAgICB6LWluZGV4OiAxMTtcXG5cXG4gICAgICAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAxLjI1cmVtLCAkY29sb3I6ICRhY2NlbnQpO1xcblxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxuXFxuICAgICAgICAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vdmllX19jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjgpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgID4gKiB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICA+IDpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAycmVtLCAkZnc6IGJvbGQsICR0dDogdXBwZXJjYXNlKTtcXG5cXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idG4ge1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGNvbG9yOiAkYWNjZW50KTtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICBzY3JvbGxiYXItY29sb3I6ICRncmF5LWRhcmsgJGdyYXktbGlnaHQ7XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1kYXJrO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIHdpZHRoOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1xKCRtdzogNDhyZW0pIHtcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb3ZpZV9fZGV0YWlscyB7XFxuICAgID4gKiB7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogMjEwcHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZV9fbW9yZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgICAgLml0ZW0tY2F0ZWdvcnkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vdmllX19jb21tZW50cyxcXG4gIC5tb3ZpZV9fcmVzZXJ2YXRpb25zIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuXFxuICAgIC5pdGVtLWRhdGUsXFxuICAgIC5pdGVtLW5hbWUge1xcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pdGVtLW5hbWUge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG5cXG4gICAgLml0ZW0tZGF0ZSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vdmllX19hZGQtY29tbWVudCB7XFxuICAgIGZvcm0ge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1heC13aWR0aDogMzEuMjVyZW07XFxuICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG5cXG4gICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcblxcbiAgICAgID4gKiB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcbiAgICAgIH1cXG5cXG4gICAgICA+IDpsYXN0LWNoaWxkIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgfVxcblxcbiAgICAgIC5pbnB1dF9fZmllbGQge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAkZ3JheS1kYXJrO1xcblxcbiAgICAgICAgQGluY2x1ZGUgZm9udC1iO1xcblxcbiAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgIG91dGxpbmU6IDFweCBzb2xpZCAkYWNjZW50O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAvKiBGT1JNIFZBTElEQVRJT04gKi9cXG4gICAgLmZvcm1fX21lc3NhZ2Uge1xcbiAgICAgIC8vIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgcGFkZGluZzogMC4zcmVtO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgIGNvbG9yOiAjMDRiZDllO1xcbiAgICB9XFxuXFxuICAgIC5lcnJvci1tZXNzYWdlIHtcXG4gICAgICBjb2xvcjogI2ZkM2YzZjtcXG4gICAgfVxcblxcbiAgICAudmlzaWJsZSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1vZGFsX19ib3gtZGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYm94X19oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmZvb3RlciB7XFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogNTBweDtcXG5cXG4gIEBpbmNsdWRlIGZvbnQtYigkZnc6IDQwMCk7XFxufVxcblxcbi50b2dnbGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4uYWJvdXQtc2VjIHtcXG4gIC5hYm91dC1zZWN0aW9uX19jb250YWluZXIge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgbWluLWhlaWdodDogNjV2aDtcXG4gICAgcGFkZGluZzogNTBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGgyIHtcXG4gICAgICBtYXJnaW46IGF1dG8gYXV0byA4MHB4O1xcblxcbiAgICAgIEBpbmNsdWRlIGZvbnQtaCgkZnM6IDRyZW0sICRmdzogYm9sZCwgJGxoOiAxKTtcXG5cXG4gICAgICBjb2xvcjogJGFjY2VudDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICBsaW5lLWhlaWdodDogMS43O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUthcmxhOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMCZmYW1pbHk9U3BlY3RyYWw6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzEsMjAwOzEsMzAwOzEsNDAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRmZi1oOiAnS2FybGEnLCBzYW5zLXNlcmlmO1xcbiRmZi1iOiAnU3BlY3RyYWwnLCBzZXJpZjtcXG4kYmFzZTogIzAyMzA0NztcXG4kYWNjZW50OiAjZmYzODQ3O1xcbiRwaW5rOiAjZTY4YWI0O1xcbiRncmF5LWxpZ2h0OiAjZGVlMmU2O1xcbiRncmF5LWRhcms6ICNiZmM1Y2E7XFxuXFxuQG1peGluIGZvbnQtaCgkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuNnJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0OnVwcGVyY2FzZSkge1xcbiAgZm9udC1mYW1pbHk6ICRmZi1oO1xcbiAgZm9udC1zaXplOiAkZnM7XFxuICBmb250LXdlaWdodDogJGZ3O1xcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxuICBjb2xvcjogJGNvbG9yO1xcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXG59XFxuXFxuQG1peGluIGZvbnQtYigkZnM6MXJlbSwgJGZ3OjMwMCwgJGxoOjEuMnJlbSwgJGxzOm5vcm1hbCwgJGNvbG9yOiAkYmFzZSwgJHR0Om5vcm1hbCkge1xcbiAgZm9udC1mYW1pbHk6ICRmZi1iO1xcbiAgZm9udC1zaXplOiAkZnM7XFxuICBmb250LXdlaWdodDogJGZ3O1xcbiAgbGV0dGVyLXNwYWNpbmc6ICRscztcXG4gIGxpbmUtaGVpZ2h0OiAkbGg7XFxuICBjb2xvcjogJGNvbG9yO1xcbiAgdGV4dC10cmFuc2Zvcm06ICR0dDtcXG59XFxuXCIsXCJAbWl4aW4gZmxleC1jb2x1bSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5AbWl4aW4gZmxleC1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIG1xICgkbXc6NTByZW0pIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkbXcpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgdG90YWxJdGVtcyA9IChhcnIsIGRvbUVsZW1lbnQpID0+IHtcbiAgbGV0IGxlbmd0aCA9IDA7XG4gIHdoaWxlIChhcnJbbGVuZ3RoXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoICs9IDE7XG4gIH1cbiAgZG9tRWxlbWVudC5pbm5lckhUTUwgPSBgKCR7bGVuZ3RofSlgO1xuICByZXR1cm4gbGVuZ3RoO1xufTtcblxuZXhwb3J0IHsgdG90YWxJdGVtcyBhcyBkZWZhdWx0IH07XG4iLCJjb25zdCBpQmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChtb3ZpZUlkLCBhcHBJRCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9JHthcHBJRH0vY29tbWVudHM/aXRlbV9pZD0ke21vdmllSWR9YCk7XG4gIGNvbnN0IGNvbW1lbnRzTGlzdCA9IGF3YWl0IGNvbm5lY3QuanNvbigpO1xuICBpZiAoY29tbWVudHNMaXN0LmVycm9yKSByZXR1cm4gW107XG4gIHJldHVybiBjb21tZW50c0xpc3Q7XG59O1xuXG5jb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKG1vdmllSWQsIHVzZXJuYW1lLCBjb21tZW50LCBhcHBJRCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9JHthcHBJRH0vY29tbWVudHNgLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogbW92aWVJZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgY29tbWVudCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3QudGV4dCgpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBjb3VudENvbW1lbnRzID0gKGFycikgPT4ge1xuICBsZXQgY291bnQgPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvdW50ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGBDb21tZW50cyAoJHtjb3VudH0pYDtcbn07XG5cbmNvbnN0IGdldFJlc2VydmF0aW9ucyA9IGFzeW5jIChtb3ZpZUlkLCBhcHBJRCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9JHthcHBJRH0vcmVzZXJ2YXRpb25zP2l0ZW1faWQ9JHttb3ZpZUlkfWApO1xuICBjb25zdCBjb21tZW50c0xpc3QgPSBhd2FpdCBjb25uZWN0Lmpzb24oKTtcbiAgaWYgKGNvbW1lbnRzTGlzdC5lcnJvcikgcmV0dXJuIFtdO1xuICByZXR1cm4gY29tbWVudHNMaXN0O1xufTtcblxuY29uc3QgYWRkUmVzZXJ2YXRpb24gPSBhc3luYyAobW92aWVJZCwgdXNlcm5hbWUsIGRhdGVTdGFydCwgZGF0ZUVuZCwgYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2lCYXNlVVJMfSR7YXBwSUR9L3Jlc2VydmF0aW9ucy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogbW92aWVJZCxcbiAgICAgIHVzZXJuYW1lLFxuICAgICAgZGF0ZV9zdGFydDogZGF0ZVN0YXJ0LFxuICAgICAgZGF0ZV9lbmQ6IGRhdGVFbmQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0LnRleHQoKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRSZXNlcnZhdGlvbnMgPSAoYXJyKSA9PiB7XG4gIGxldCBjb3VudCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY291bnQgKz0gMTtcbiAgfVxuICByZXR1cm4gYFJlc2VydmF0aW9ucyAoJHtjb3VudH0pYDtcbn07XG5cbmV4cG9ydCB7XG4gIGdldENvbW1lbnRzLFxuICBhZGRDb21tZW50LFxuICBjb3VudENvbW1lbnRzLFxuICBnZXRSZXNlcnZhdGlvbnMsXG4gIGFkZFJlc2VydmF0aW9uLFxuICBjb3VudFJlc2VydmF0aW9ucyxcbn07XG4iLCJjb25zdCBiYXNlVVJMID0gJyBodHRwczovL2FwaS50dm1hemUuY29tJztcblxuY29uc3QgZ2V0TW92aWVEYXRhID0gYXN5bmMgKGluZGV4LCBxdWVyeSwgdG90YWwpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9L3Nob3dzP3E9JHtxdWVyeX1gKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0Lmpzb24oKS50aGVuKChkYXRhTGlzdCkgPT4ge1xuICAgIGNvbnN0IHNob3J0TGlzdCA9IGRhdGFMaXN0LnNsaWNlKGluZGV4LCBpbmRleCArIHRvdGFsKTtcbiAgICBzaG9ydExpc3QubWFwKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSB7XG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIGdlbnJlczogaXRlbS5nZW5yZXMsXG4gICAgICAgIGltYWdlOiBpdGVtLmltYWdlLFxuICAgICAgICBlbmQ6IGl0ZW0uZW5kZWQsXG4gICAgICAgIHJhdGluZzogaXRlbS5yYXRpbmcsXG4gICAgICAgIHN1bW1hcnk6IGl0ZW0uc3VtbWFyeSxcbiAgICAgIH07XG4gICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH0pO1xuICAgIHJldHVybiBzaG9ydExpc3Q7XG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5leHBvcnQgeyBnZXRNb3ZpZURhdGEgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0ICogYXMgQ0lBUEkgZnJvbSAnLi9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94Jyk7XG5jb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2NvbW1lbnQnKTtcbmNvbnN0IHJlc2VydmF0aW9uRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX19yZXNlcnZhdGlvbicpO1xuY29uc3QgZm9ybU1lc3NhZ2VDb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9fbWVzc2FnZS1jb20nKTtcbmNvbnN0IGZvcm1NZXNzYWdlUmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX21lc3NhZ2UtcmVzJyk7XG5sZXQgdGltZXJJZCA9ICcnO1xubGV0IG5ld0lEID0gJyc7XG5cbmNvbnN0IGFyckludG9TdHJpbmcgPSAoYXJyKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgc3RyICs9IGAke2VsfSB8IGA7XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgYnVpbGRNb3ZpZURlc2NyaXB0aW9uID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbW92aWVEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX19kZXRhaWxzJyk7XG4gIG1vdmllRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVpZCcsIGRhdGEuaWQpO1xuICBtb3ZpZURldGFpbHMuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke2RhdGEubmFtZX0gbW92aWUgaW1hZ2VcIj5cbiAgICAgICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vdmllX19tb3JlXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+R2VucmU6PC9zcGFuPlxuICAgICAgICAgICAgPHA+JHthcnJJbnRvU3RyaW5nKGRhdGEuZ2VucmVzKX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5FbmRlZDo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2RhdGEuZW5kZWR9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+UmF0aW5nOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5yYXRpbmcuYXZlcmFnZX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgJHtkYXRhLnN1bW1hcnl9YDtcbn07XG5cbmNvbnN0IGJ1aWxkTW92aWVDb21tZW50cyA9IChhcnIpID0+IHtcbiAgY29uc3QgbW92aWVDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fY29tbWVudHMnKTtcbiAgbW92aWVDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IENJQVBJLmNvdW50Q29tbWVudHMoYXJyKTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29tbWVudExpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHNfX2xpc3QnKTtcbiAgYXJyLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwib3duZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XG59O1xuXG5jb25zdCBidWlsZE1vdmllUmVzZXJ2YXRpb25zID0gKGFycikgPT4ge1xuICBjb25zdCBtb3ZpZVJlc2VydmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fcmVzZXJ2YXRpb25zJyk7XG4gIG1vdmllUmVzZXJ2YXRpb25zLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gQ0lBUEkuY291bnRSZXNlcnZhdGlvbnMoYXJyKTtcbiAgbW92aWVSZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCByZXNlcnZhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICByZXNlcnZhdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHNfX2xpc3QnKTtcbiAgYXJyLmZvckVhY2goKHJlc2VydmUpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYDxzcGFuIGNsYXNzPVwiaXRlbS1kYXRlXCI+JHtyZXNlcnZlLmRhdGVfc3RhcnR9IHRvICR7cmVzZXJ2ZS5kYXRlX2VuZH08L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPmJ5ICR7cmVzZXJ2ZS51c2VybmFtZX08L3NwYW4+YDtcbiAgICByZXNlcnZhdGlvbkxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbiAgbW92aWVSZXNlcnZhdGlvbnMuYXBwZW5kQ2hpbGQocmVzZXJ2YXRpb25MaXN0KTtcbn07XG5cbmNvbnN0IGNsb3NlQm94ID0gKGlkZW50KSA9PiB7XG4gIGNvbnN0IGVsRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7aWRlbnR9YCk7XG4gIGVsRG9tLmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnYm94X19oaWRlJyk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheU1vdmllQ29tbWVudHMgPSAobW92aWUsIGFwcElEKSA9PiB7XG4gIGJ1aWxkTW92aWVEZXNjcmlwdGlvbihtb3ZpZSk7XG4gIG5ld0lEID0gYXBwSUQ7XG4gIENJQVBJLmdldENvbW1lbnRzKG1vdmllLmlkLCBhcHBJRCkudGhlbigobGlzdCkgPT4ge1xuICAgIGJ1aWxkTW92aWVDb21tZW50cyhsaXN0KTtcbiAgICBjbG9zZUJveCgncmVzZXJ2YXRpb25rJyk7XG4gICAgbW9kYWxCb3guY2xhc3NMaXN0LmFkZCgnbW9kYWxfX2JveC1kaXNwbGF5Jyk7XG4gIH0pO1xufTtcblxuY29uc3QgZGlzcGxheU1vdmllUmVzZXJ2YXRpb25zID0gKG1vdmllLCBhcHBJRCkgPT4ge1xuICBidWlsZE1vdmllRGVzY3JpcHRpb24obW92aWUpO1xuICBuZXdJRCA9IGFwcElEO1xuICBDSUFQSS5nZXRSZXNlcnZhdGlvbnMobW92aWUuaWQsIGFwcElEKS50aGVuKChsaXN0KSA9PiB7XG4gICAgYnVpbGRNb3ZpZVJlc2VydmF0aW9ucyhsaXN0KTtcbiAgICBjbG9zZUJveCgnY29tbWVudGsnKTtcbiAgICBtb2RhbEJveC5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fYm94LWRpc3BsYXknKTtcbiAgfSk7XG59O1xuXG5tb2RhbENsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBjb21Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY29tbWVudGsnKTtcbiAgY29tQm94LmZvckVhY2goKGVsKSA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYm94X19oaWRlJyk7XG4gIH0pO1xuICBjb25zdCByZXNCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzZXJ2YXRpb25rJyk7XG4gIHJlc0JveC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JveF9faGlkZScpO1xuICB9KTtcbiAgbW9kYWxCb3guY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX2JveC1kaXNwbGF5Jyk7XG59KTtcblxuY29uc3QgZGlzcGxheU1lc3NhZ2UgPSAoZWxkb20sIG1zZykgPT4ge1xuICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gIGlmIChtc2cpIHtcbiAgICBlbGRvbS50ZXh0Q29udGVudCA9IG1zZztcbiAgICBlbGRvbS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gIH1cbiAgZWxkb20uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZWxkb20uY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItbWVzc2FnZScsICd2aXNpYmxlJyk7XG4gIH0sIDUwMDApO1xufTtcblxuY29uc3QgdmFsaWRTdHJpbmcgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIubWF0Y2goL15bYS16QS1aMC05w4Atw79cXHUwMGYxXFx1MDBkMVxcdTAwRTBcXHUwMEZDX1xcLSBdezEsMzB9JC8pKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdmFsaWRGb3JtQ29tbWVudCA9IChuYW1lLCBjb21tZW50KSA9PiB7XG4gIG5hbWUudmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcbiAgY29tbWVudC52YWx1ZSA9IGNvbW1lbnQudmFsdWUudHJpbSgpO1xuICBpZiAoIXZhbGlkU3RyaW5nKG5hbWUudmFsdWUpKSB7XG4gICAgbmFtZS5mb2N1cygpO1xuICAgIGRpc3BsYXlNZXNzYWdlKFxuICAgICAgJ05hbWUgZmllbGQgb25seSBhbGxvd3MgYWxwaGFudW1lcmljLCBoeXBoZW5zLCB1bmRlcnNjb3JlcywgYW5kIG1heCAzMCBjaGFyYWN0ZXJzLicsXG4gICAgKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGNvbW1lbnQudmFsdWUgPT09ICcnIHx8IGNvbW1lbnQudmFsdWUubGVuZ3RoID4gMjUwKSB7XG4gICAgY29tbWVudC5mb2N1cygpO1xuICAgIGRpc3BsYXlNZXNzYWdlKCdJbnNpZ2h0cyBmaWVsZCBhbGxvd3MgMSB0byAyNTAgY2hhcmFjdGVycy4nKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCB2YWxpZEZvcm1SZXNlcnZhdGlvbiA9IChuYW1lKSA9PiB7XG4gIG5hbWUudmFsdWUgPSBuYW1lLnZhbHVlLnRyaW0oKTtcbiAgaWYgKCF2YWxpZFN0cmluZyhuYW1lLnZhbHVlKSkge1xuICAgIG5hbWUuZm9jdXMoKTtcbiAgICBkaXNwbGF5TWVzc2FnZShcbiAgICAgICdOYW1lIGZpZWxkIG9ubHkgYWxsb3dzIGFscGhhbnVtZXJpYywgaHlwaGVucywgdW5kZXJzY29yZXMsIGFuZCBtYXggMzAgY2hhcmFjdGVycy4nLFxuICAgICk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3Qgc2VuZENvbW1lbnQgPSAoYXBwSUQpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBfX3VzZXJuYW1lJyk7XG4gIGNvbnN0IGNvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX19pbnNpZ2h0cycpO1xuICBjb25zdCBtb3ZpZUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX19kZXRhaWxzJykuZ2V0QXR0cmlidXRlKCdkYXRhLW1vdmllSWQnKTtcblxuICBpZiAodmFsaWRGb3JtQ29tbWVudChuYW1lLCBjb21tZW50KSkge1xuICAgIENJQVBJLmFkZENvbW1lbnQobW92aWVJZCwgbmFtZS52YWx1ZSwgY29tbWVudC52YWx1ZSwgYXBwSUQpLnRoZW4oKGFucykgPT4ge1xuICAgICAgaWYgKGFucyA9PT0gJ0NyZWF0ZWQnKSB7XG4gICAgICAgIENJQVBJLmdldENvbW1lbnRzKG1vdmllSWQsIGFwcElEKS50aGVuKChsaXN0KSA9PiB7XG4gICAgICAgICAgYnVpbGRNb3ZpZUNvbW1lbnRzKGxpc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBuYW1lLmZvY3VzKCk7XG4gICAgICAgIGNvbW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgZm9ybU1lc3NhZ2VDb20udGV4dENvbnRlbnQgPSAnQ29tbWVudCBzZW50IHN1Y2Nlc3NmdWxseSc7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKGZvcm1NZXNzYWdlQ29tKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKGZvcm1NZXNzYWdlQ29tLCAnQ29tbWVudHMgYXJlIG5vdCBhdmFpbGFibGUgZm9yIG5vdy4gVHJ5IGFnYWluIGxhdGVyLicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBzZW5kUmVzZXJ2YXRpb24gPSAoYXBwSUQpID0+IHtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBfX3VzZXJuYW1lLXJlcycpO1xuICBjb25zdCBzdGFydERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX19zdGFydC1kYXRlJyk7XG4gIGNvbnN0IGVuZERhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wX19lbmQtZGF0ZScpO1xuICBjb25zdCBtb3ZpZUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX19kZXRhaWxzJykuZ2V0QXR0cmlidXRlKCdkYXRhLW1vdmllSWQnKTtcblxuICBpZiAodmFsaWRGb3JtUmVzZXJ2YXRpb24obmFtZSkpIHtcbiAgICBDSUFQSS5hZGRSZXNlcnZhdGlvbihtb3ZpZUlkLCBuYW1lLnZhbHVlLCBzdGFydERhdGUudmFsdWUsIGVuZERhdGUudmFsdWUsIGFwcElEKS50aGVuKChhbnMpID0+IHtcbiAgICAgIGlmIChhbnMgPT09ICdDcmVhdGVkJykge1xuICAgICAgICBDSUFQSS5nZXRSZXNlcnZhdGlvbnMobW92aWVJZCwgYXBwSUQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgICAgICBidWlsZE1vdmllUmVzZXJ2YXRpb25zKGxpc3QpO1xuICAgICAgICB9KTtcbiAgICAgICAgbmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICBuYW1lLmZvY3VzKCk7XG4gICAgICAgIGZvcm1NZXNzYWdlUmVzLnRleHRDb250ZW50ID0gJ1Jlc2VydmVkIHN1Y2Nlc3NmdWxseSc7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKGZvcm1NZXNzYWdlUmVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKGZvcm1NZXNzYWdlUmVzLCAnUmVzZXJ2YXRpb25zIGFyZSBub3QgYXZhaWxhYmxlIGZvciBub3cuIFRyeSBhZ2FpbiBsYXRlci4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuY29tbWVudEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBzZW5kQ29tbWVudChuZXdJRCk7XG59KTtcblxucmVzZXJ2YXRpb25Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2VuZFJlc2VydmF0aW9uKG5ld0lEKTtcbn0pO1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVDb21tZW50cywgZGlzcGxheU1vdmllUmVzZXJ2YXRpb25zIH07XG4iLCJpbXBvcnQgeyB1cGRhdGVMaWtlcywgc2V0TGlrZSB9IGZyb20gJy4vbGlrZUZ1bmN0aW9uYWxpdHkuanMnO1xuaW1wb3J0IHsgZGlzcGxheU1vdmllQ29tbWVudHMsIGRpc3BsYXlNb3ZpZVJlc2VydmF0aW9ucyB9IGZyb20gJy4vZGlzcGxheU1vdmllRGV0YWlscy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlNb3ZpZXMgPSBhc3luYyAobW92aWVMaXN0LCBhcHBJZCwgc2VjdGlvbikgPT4ge1xuICBjb25zdCBtb3ZpZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtzZWN0aW9ufS1zZWN0aW9uYCk7XG4gIG1vdmllU2VjdGlvbi5pbm5lckhUTUwgPSAnJztcbiAgbW92aWVMaXN0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbkRpdi5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcic7XG4gICAgbWFpbkRpdi5pZCA9IGAke3NlY3Rpb259JHtpdGVtLmlkfWA7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX3RpdGxlJztcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX2ltZyc7XG4gICAgaW1nLnNyYyA9IGl0ZW0uaW1hZ2UubWVkaXVtO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaWtlcy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fbGlrZXMnO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBsaWtlLmNsYXNzTmFtZSA9ICdmYXMgZmEtaGVhcnQnO1xuICAgIGxpa2VzLmFwcGVuZChsaWtlLCBzcGFuKTtcbiAgICBkZXRhaWxzLmFwcGVuZChuYW1lLCBsaWtlcyk7XG4gICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbW1lbnRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbW1lbnRCdXR0b24uaW5uZXJIVE1MID0gJ0NvbW1lbnRzJztcbiAgICBjb21tZW50QnV0dG9uLmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbic7XG4gICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRpc3BsYXlNb3ZpZUNvbW1lbnRzKGl0ZW0sIGFwcElkKTtcbiAgICB9KTtcbiAgICBtYWluRGl2LmFwcGVuZChpbWcsIGRldGFpbHMsIGNvbW1lbnRCdXR0b24pO1xuICAgIGNvbnN0IHJlc2VydmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNlcnZlQnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICByZXNlcnZlQnV0dG9uLmlubmVySFRNTCA9ICdSZXNlcnZhdGlvbnMnO1xuICAgIHJlc2VydmVCdXR0b24uY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uJztcbiAgICByZXNlcnZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZGlzcGxheU1vdmllUmVzZXJ2YXRpb25zKGl0ZW0sIGFwcElkKTtcbiAgICB9KTtcbiAgICBtYWluRGl2LmFwcGVuZChyZXNlcnZlQnV0dG9uKTtcbiAgICBtb3ZpZVNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNldExpa2UoYCR7c2VjdGlvbn0ke2l0ZW0uaWR9YCwgYXBwSWQpO1xuICAgICAgY29uc3QgbnVtYmVyID0gbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC50ZXh0Q29udGVudC5zcGxpdCgnICcpO1xuICAgICAgbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC5pbm5lckhUTUwgPSBgJHtOdW1iZXIobnVtYmVyWzBdKSArIDF9IGxpa2VzYDtcbiAgICB9KTtcbiAgfSk7XG4gIHVwZGF0ZUxpa2VzKGFwcElkKTtcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlNb3ZpZXMgYXMgZGVmYXVsdCB9O1xuIiwiY29uc3QgYmFzZVVSTCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCBzZXRMaWtlID0gYXN5bmMgKGlkLCBhcHBJRCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElEfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vSlNPTicgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldExpa2UgPSBhc3luYyAoYXBwSUQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHthcHBJRH0vbGlrZXMvYCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC5qc29uKCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpa2VzID0gKGFwcElEKSA9PiB7XG4gIGdldExpa2UoYXBwSUQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZWxlbWVudC5pdGVtX2lkfWApO1xuICAgICAgY29udGFpbmVyLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzFdLmlubmVySFRNTCA9IGAke2VsZW1lbnQubGlrZXN9IGxpa2VzYDtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyB1cGRhdGVMaWtlcywgc2V0TGlrZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc2Nzcy9zdHlsZS5zY3NzJztcbmltcG9ydCBnZXRNb3ZpZURhdGEgZnJvbSAnLi9tb2R1bGVzL2NvbnN1bWVUVk1hemVBUEkuanMnO1xuaW1wb3J0IGRpc3BsYXlNb3ZpZXMgZnJvbSAnLi9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMnO1xuaW1wb3J0IHRvdGFsSXRlbXMgZnJvbSAnLi9tb2R1bGVzL2FsbEl0ZW1zQ291bnRlci5qcyc7XG5cbmNvbnN0IGR2ZElEID0gJ3pnZ0VCWHpwRmNRcWpEeHZNaE16JztcbmNvbnN0IGJsdUlEID0gJ0RpdWZXNzY4c2t4aGVNdTJYTzN5JztcbmNvbnN0IG1vdmllTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZV9fbGluaycpO1xuY29uc3QgYmx1TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibHUtcmF5X19saW5rJyk7XG5jb25zdCBhYm91dExpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXRfX2xpbmsnKTtcbmNvbnN0IG1vdmllU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3ZpZS1zZWN0aW9uJyk7XG5jb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtc2VjdGlvbicpO1xuY29uc3QgYmx1U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibHVSYXktc2VjdGlvbicpO1xuY29uc3QgZHZkID0gJ2FjdGlvbic7XG5jb25zdCBibHVyYXkgPSAnZ2lybHMnO1xuXG5jb25zdCBob21lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWUtc2VjdGlvbl9faXRlbXMnKTtcbmdldE1vdmllRGF0YSgwLCBkdmQsIDUwKS50aGVuKChtb3ZpZUxpc3QpID0+IHtcbiAgZGlzcGxheU1vdmllcyhtb3ZpZUxpc3QsIGR2ZElELCAnbW92aWUnKTtcbiAgY29uc3QgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI21vdmllLXNlY3Rpb24gPiAubW92aWUtd3JhcHBlcicpO1xuICB0b3RhbEl0ZW1zKGFsbCwgaG9tZUl0ZW1zKTtcbn0pO1xuXG5jb25zdCBibHVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVSYXktc2VjdGlvbl9faXRlbXMnKTtcbmdldE1vdmllRGF0YSg1MSwgYmx1cmF5LCAyNSkudGhlbigobW92aWVMaXN0KSA9PiB7XG4gIGRpc3BsYXlNb3ZpZXMobW92aWVMaXN0LCBibHVJRCwgJ2JsdVJheScpO1xuICBjb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmx1UmF5LXNlY3Rpb24gPiAubW92aWUtd3JhcHBlcicpO1xuICB0b3RhbEl0ZW1zKGFsbCwgYmx1SXRlbXMpO1xufSk7XG5cbm1vdmllTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW92aWVMaW5rLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICBibHVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBhYm91dExpbmsuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbiAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xuICBibHVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xufSk7XG5cbmFib3V0TGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW92aWVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBibHVMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBhYm91dExpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIG1vdmllU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZScpO1xuICBibHVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZScpO1xufSk7XG5cbmJsdUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vdmllTGluay5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgYmx1TGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgYWJvdXRMaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICBtb3ZpZVNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndG9nZ2xlJyk7XG4gIGFib3V0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2dnbGUnKTtcbiAgYmx1U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGUnKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9