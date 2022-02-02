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
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n}\nheader .header-brand {\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  text-decoration: none;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  height: 50px;\n  width: 110px;\n}\nheader nav ul {\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\nheader nav ul li a {\n  text-decoration: none;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 600;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n}\n\n#movie-section {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n}\n#movie-section .movie-wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  gap: 5px;\n  background-color: #111;\n}\n#movie-section .movie-wrapper .movie-wrapper__img {\n  width: 250px;\n}\n#movie-section .movie-wrapper .movie-wrapper__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  width: 240px;\n  height: 48px;\n  line-height: 1.2;\n  color: #fff;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  align-items: center;\n  width: 55px;\n  gap: 3px;\n  margin-left: 1rem;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i {\n  color: #ff3847;\n  cursor: pointer;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:hover {\n  color: #fd3f3f;\n  transform: scale(1.2);\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes i:active {\n  color: #ff0202;\n  text-shadow: 0 0 7px red;\n}\n#movie-section .movie-wrapper .movie-wrapper__title .movie-wrapper__likes span {\n  font-size: 0.75rem;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button {\n  width: 240px;\n  border: none;\n  outline: 1px solid #ff3847;\n  background-color: transparent;\n  color: #ff3847;\n  padding: 0.25rem 0;\n  cursor: pointer;\n  transition: background-color ease-out 250ms;\n  margin-bottom: 5px;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button:hover {\n  background-color: #ff3847;\n  color: white;\n}\n#movie-section .movie-wrapper .movie-wrapper__comment-button:active {\n  box-shadow: inset 0 0 5px;\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(32, 32, 32, 0.9);\n  display: none;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n}\n.modal__box .modal__container {\n  height: 90%;\n  width: 90%;\n  max-width: 48rem;\n  background-color: #fff;\n  border-radius: 5px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  background-repeat: no-repeat;\n  background-position: top right;\n  background-clip: border-box;\n  background-size: cover;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .modal__container .modal__btn {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background-color: transparent;\n  border: 1px solid #ff3847;\n  transition: background-color ease-out 250ms;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n  z-index: 11;\n}\n.modal__box .modal__container .modal__btn .btn__close-modal {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  background-color: transparent;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1.25rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.modal__box .modal__container .modal__btn:hover {\n  background-color: #ff3847;\n}\n.modal__box .modal__container .modal__btn:hover .btn__close-modal {\n  color: #fff;\n}\n.modal__box .movie__container {\n  width: 100%;\n  height: 100%;\n  padding: 1rem;\n  overflow-y: auto;\n  background-color: rgba(255, 255, 255, 0.8);\n  position: relative;\n  scrollbar-width: thin;\n  scrollbar-color: #bfc5ca #dee2e6;\n}\n.modal__box .movie__container > * {\n  width: 100%;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__container h2 {\n  font-family: \"Karla\", sans-serif;\n  font-size: 2rem;\n  font-weight: bold;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #023047;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.modal__box .movie__container h3 {\n  margin-bottom: 1rem;\n}\n.modal__box .movie__container ul {\n  list-style: none;\n}\n.modal__box .movie__container ul li {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  padding: 0.5rem 0;\n}\n.modal__box .movie__container .btn {\n  padding: 0.5rem;\n  background: transparent;\n  border: 1px solid #ff3847;\n  cursor: pointer;\n  font-family: \"Karla\", sans-serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.6rem;\n  color: #ff3847;\n  text-transform: uppercase;\n  background-color: transparent;\n  transition: background-color ease-out 250ms;\n}\n.modal__box .movie__container .btn:hover {\n  border: 1px solid #ff3847;\n  background-color: #ff3847;\n  color: #fff;\n}\n.modal__box .movie__container::-webkit-scrollbar-thumb {\n  background-color: #bfc5ca;\n  border-radius: 20px;\n}\n.modal__box .movie__container::-webkit-scrollbar {\n  width: 6px;\n}\n.modal__box .movie__container::-webkit-scrollbar-track {\n  background: #dee2e6;\n}\n@media (min-width: 48rem) {\n  .modal__box .movie__container {\n    padding: 1.5rem;\n  }\n}\n.modal__box .movie__details > * {\n  width: auto;\n}\n.modal__box .movie__details img {\n  width: 210px;\n  height: auto;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  float: left;\n}\n.modal__box .movie__details .movie__more {\n  margin: 0;\n  width: auto;\n  margin-bottom: 1rem;\n}\n.modal__box .movie__details .movie__more .item-category {\n  margin-right: 0.5rem;\n  font-weight: 600;\n}\n.modal__box .movie__comments {\n  clear: both;\n}\n.modal__box .movie__comments .item-date,\n.modal__box .movie__comments .item-name {\n  margin-right: 0.5rem;\n}\n.modal__box .movie__comments .item-name {\n  font-weight: 600;\n}\n.modal__box .movie__add-comment {\n  /* FORM VALIDATION */\n}\n.modal__box .movie__add-comment form {\n  width: 100%;\n  max-width: 31.25rem;\n  padding-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n.modal__box .movie__add-comment form > * {\n  margin-bottom: 0.75rem;\n}\n.modal__box .movie__add-comment form > :last-child {\n  margin-bottom: 0;\n}\n.modal__box .movie__add-comment form .input__field {\n  width: 100%;\n  padding: 0.5rem;\n  border: none;\n  background-color: transparent;\n  outline: 1px solid #bfc5ca;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 300;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}\n.modal__box .movie__add-comment form .input__field:focus {\n  outline: 1px solid #ff3847;\n}\n.modal__box .movie__add-comment .form__message {\n  padding: 0.3rem;\n  font-size: 0.9rem;\n  color: #04bd9e;\n}\n.modal__box .movie__add-comment .error-message {\n  color: #fd3f3f;\n}\n.modal__box .movie__add-comment .visible {\n  display: block;\n}\n\n.modal__box-display {\n  display: flex;\n}\n\nfooter {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto 10px;\n  background-color: #dee2e6;\n  padding: 30px;\n  height: 50px;\n  font-family: \"Spectral\", serif;\n  font-size: 1rem;\n  font-weight: 400;\n  letter-spacing: normal;\n  line-height: 1.2rem;\n  color: #023047;\n  text-transform: normal;\n}", "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/_typography.scss","webpack://./src/scss/_mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import 'typography';\n@import 'mixins';\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  scroll-behavior: smooth;\n}\n\nbody {\n  @include font-b;\n\n  background: url(../images/b1.png);\n}\n\nheader {\n  @include flex-row;\n\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto;\n  background-color: $gray-light;\n  padding: 30px;\n  height: 50px;\n\n  .header-brand {\n    @include font-h;\n\n    text-decoration: none;\n    background-image: url(../images/logo.svg);\n    background-repeat: no-repeat;\n    height: 50px;\n    width: 110px;\n  }\n\n  nav {\n    ul {\n      list-style: none;\n\n      @include flex-row;\n\n      li {\n        a {\n          text-decoration: none;\n\n          @include font-h($fw: 600);\n        }\n      }\n    }\n  }\n}\n\n#movie-section {\n  @include flex-row;\n\n  flex-wrap: wrap;\n  width: 90%;\n  margin: auto;\n  gap: 30px 3%;\n  justify-content: center;\n  align-items: flex-end;\n\n  .movie-wrapper {\n    @include flex-colum;\n\n    align-items: center;\n    gap: 5px;\n    background-color: #111;\n\n    .movie-wrapper__img {\n      width: 250px;\n    }\n\n    .movie-wrapper__title {\n      @include flex-row;\n\n      justify-content: space-between;\n      align-items: center;\n      gap: 5px;\n      width: 240px;\n      height: 48px;\n      line-height: 1.2;\n      color: #fff;\n\n      .movie-wrapper__likes {\n        @include flex-colum;\n\n        align-items: center;\n        width: 55px;\n        gap: 3px;\n        margin-left: 1rem;\n\n        i {\n          color: $accent;\n          cursor: pointer;\n\n          &:hover {\n            color: #fd3f3f;\n            transform: scale(1.2);\n          }\n\n          &:active {\n            color: rgb(255, 2, 2);\n            text-shadow: 0 0 7px red;\n          }\n        }\n\n        span {\n          font-size: 0.75rem;\n        }\n      }\n    }\n\n    .movie-wrapper__comment-button {\n      width: 240px;\n      border: none;\n      outline: 1px solid $accent;\n      background-color: transparent;\n      color: $accent;\n      padding: 0.25rem 0;\n      cursor: pointer;\n      transition: background-color ease-out 250ms;\n      margin-bottom: 5px;\n\n      &:hover {\n        background-color: $accent;\n        color: white;\n      }\n\n      &:active {\n        box-shadow: inset 0 0 5px;\n      }\n    }\n  }\n}\n\n.modal__box {\n  width: 100%;\n  background-color: rgba(32, 32, 32, 0.9);\n  display: none;\n\n  @include flex-center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 10;\n\n  .modal__container {\n    height: 90%;\n    width: 90%;\n    max-width: 48rem;\n    background-color: #fff;\n    border-radius: 5px;\n    background-image: url('../images/bg-movies.svg');\n    background-repeat: no-repeat;\n    background-position: top right;\n    background-clip: border-box;\n    background-size: cover;\n    position: relative;\n\n    @include flex-colum;\n\n    .modal__btn {\n      width: 2rem;\n      height: 2rem;\n      border-radius: 50%;\n      background-color: transparent;\n      border: 1px solid $accent;\n      transition: background-color ease-out 250ms;\n      display: flex;\n\n      @include flex-center;\n\n      position: absolute;\n      top: 0.5rem;\n      right: 0.5rem;\n      z-index: 11;\n\n      .btn__close-modal {\n        width: 100%;\n        height: 100%;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        outline: 0;\n        background-color: transparent;\n\n        @include font-h($fs: 1.25rem, $color: $accent);\n\n        cursor: pointer;\n      }\n\n      &:hover {\n        background-color: $accent;\n\n        .btn__close-modal {\n          color: #fff;\n        }\n      }\n    }\n  }\n\n  .movie__container {\n    width: 100%;\n    height: 100%;\n    padding: 1rem;\n    overflow-y: auto;\n    background-color: rgba($color: #fff, $alpha: 0.8);\n    position: relative;\n\n    > * {\n      width: 100%;\n      margin-bottom: 2rem;\n    }\n\n    > :last-child {\n      margin-bottom: 0;\n    }\n\n    h2 {\n      @include font-h($fs: 2rem, $fw: bold, $tt: uppercase);\n\n      margin-bottom: 2rem;\n    }\n\n    h3 {\n      margin-bottom: 1rem;\n    }\n\n    ul {\n      list-style: none;\n\n      li {\n        @include flex-row;\n\n        flex-wrap: wrap;\n        padding: 0.5rem 0;\n      }\n    }\n\n    .btn {\n      padding: 0.5rem;\n      background: transparent;\n      border: 1px solid $accent;\n      cursor: pointer;\n\n      @include font-h($color: $accent);\n\n      background-color: transparent;\n      transition: background-color ease-out 250ms;\n\n      &:hover {\n        border: 1px solid $accent;\n        background-color: $accent;\n        color: #fff;\n      }\n    }\n\n    scrollbar-width: thin;\n    scrollbar-color: $gray-dark $gray-light;\n\n    &::-webkit-scrollbar-thumb {\n      background-color: $gray-dark;\n      border-radius: 20px;\n    }\n\n    &::-webkit-scrollbar {\n      width: 6px;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: $gray-light;\n    }\n\n    @include mq($mw: 48rem) {\n      padding: 1.5rem;\n    }\n  }\n\n  .movie__details {\n    > * {\n      width: auto;\n    }\n\n    img {\n      width: 210px;\n      height: auto;\n      margin-right: 1rem;\n      margin-bottom: 1rem;\n      float: left;\n    }\n\n    .movie__more {\n      margin: 0;\n      width: auto;\n      margin-bottom: 1rem;\n\n      .item-category {\n        margin-right: 0.5rem;\n        font-weight: 600;\n      }\n    }\n  }\n\n  .movie__comments {\n    clear: both;\n\n    .item-date,\n    .item-name {\n      margin-right: 0.5rem;\n    }\n\n    .item-name {\n      font-weight: 600;\n    }\n  }\n\n  .movie__add-comment {\n    form {\n      width: 100%;\n      max-width: 31.25rem;\n      padding-top: 0.5rem;\n\n      @include flex-colum;\n\n      > * {\n        margin-bottom: 0.75rem;\n      }\n\n      > :last-child {\n        margin-bottom: 0;\n      }\n\n      .input__field {\n        width: 100%;\n        padding: 0.5rem;\n        border: none;\n        background-color: transparent;\n        outline: 1px solid $gray-dark;\n\n        @include font-b;\n\n        &:focus {\n          outline: 1px solid $accent;\n        }\n      }\n    }\n\n    /* FORM VALIDATION */\n    .form__message {\n      // display: none;\n      padding: 0.3rem;\n      font-size: 0.9rem;\n      color: #04bd9e;\n    }\n\n    .error-message {\n      color: #fd3f3f;\n    }\n\n    .visible {\n      display: block;\n    }\n  }\n}\n\n.modal__box-display {\n  display: flex;\n}\n\nfooter {\n  @include flex-row;\n\n  justify-content: space-between;\n  align-items: center;\n  width: 90%;\n  margin: 50px auto 10px;\n  background-color: $gray-light;\n  padding: 30px;\n  height: 50px;\n\n  @include font-b($fw: 400);\n}\n","@import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Spectral:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&display=swap');\n\n$ff-h: 'Karla', sans-serif;\n$ff-b: 'Spectral', serif;\n$base: #023047;\n$accent: #ff3847;\n$pink: #e68ab4;\n$gray-light: #dee2e6;\n$gray-dark: #bfc5ca;\n\n@mixin font-h($fs:1rem, $fw:300, $lh:1.6rem, $ls:normal, $color: $base, $tt:uppercase) {\n  font-family: $ff-h;\n  font-size: $fs;\n  font-weight: $fw;\n  letter-spacing: $ls;\n  line-height: $lh;\n  color: $color;\n  text-transform: $tt;\n}\n\n@mixin font-b($fs:1rem, $fw:300, $lh:1.2rem, $ls:normal, $color: $base, $tt:normal) {\n  font-family: $ff-b;\n  font-size: $fs;\n  font-weight: $fw;\n  letter-spacing: $ls;\n  line-height: $lh;\n  color: $color;\n  text-transform: $tt;\n}\n","@mixin flex-colum {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n@mixin flex-row {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n@mixin flex-center {\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin mq ($mw:50rem) {\n  @media (min-width: $mw) {\n    @content;\n  }\n}\n"],"sourceRoot":""}]);
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
  for (let i = 0; i < arr.length; i += 1) {
    count += 1;
  }
  return `Comments (${count})`;
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
  title.textContent = (0,_consumeInvolvementAPI_js__WEBPACK_IMPORTED_MODULE_0__.countComments)(arr);
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
    modalBox.classList.add('modal__box-display');
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxZQUFZLFlBQVksZUFBZSxjQUFjLGFBQWEsV0FBVyxhQUFhLFlBQVksS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLEtBQUssTUFBTSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxX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akNoQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7O0FDckIyQjtBQUM4QjtBQUNGO0FBQ0Q7O0FBRXREO0FBQ0E7QUFDQSx3RUFBWTtBQUNaLEVBQUUscUVBQWE7QUFDZjtBQUNBLEVBQUUsdUVBQVU7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzPzJlNGQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvYWxsSXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnN1bWVUVk1hemVBUEkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2xpa2VGdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL2IxLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9sb2dvLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy9iZy1tb3ZpZXMuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1LYXJsYTppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDAmZmFtaWx5PVNwZWN0cmFsOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDsxLDIwMDsxLDMwMDsxLDQwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BlY3RyYWxcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vcm1hbDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDUwcHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWUyZTY7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5oZWFkZXIgLmhlYWRlci1icmFuZCB7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjMDIzMDQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDExMHB4O1xcbn1cXG5oZWFkZXIgbmF2IHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5oZWFkZXIgbmF2IHVsIGxpIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbiNtb3ZpZS1zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZ2FwOiAzMHB4IDMlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExO1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9faW1nIHtcXG4gIHdpZHRoOiAyNTBweDtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICB3aWR0aDogMjQwcHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNTVweDtcXG4gIGdhcDogM3B4O1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX190aXRsZSAubW92aWUtd3JhcHBlcl9fbGlrZXMgaSB7XFxuICBjb2xvcjogI2ZmMzg0NztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX3RpdGxlIC5tb3ZpZS13cmFwcGVyX19saWtlcyBpOmhvdmVyIHtcXG4gIGNvbG9yOiAjZmQzZjNmO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIGk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjZmYwMjAyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA3cHggcmVkO1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fdGl0bGUgLm1vdmllLXdyYXBwZXJfX2xpa2VzIHNwYW4ge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbn1cXG4jbW92aWUtc2VjdGlvbiAubW92aWUtd3JhcHBlciAubW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24ge1xcbiAgd2lkdGg6IDI0MHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkICNmZjM4NDc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgcGFkZGluZzogMC4yNXJlbSAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlLW91dCAyNTBtcztcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuI21vdmllLXNlY3Rpb24gLm1vdmllLXdyYXBwZXIgLm1vdmllLXdyYXBwZXJfX2NvbW1lbnQtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NDc7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbiNtb3ZpZS1zZWN0aW9uIC5tb3ZpZS13cmFwcGVyIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbjphY3RpdmUge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweDtcXG59XFxuXFxuLm1vZGFsX19ib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuOSk7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgei1pbmRleDogMTA7XFxufVxcbi5tb2RhbF9fYm94IC5tb2RhbF9fY29udGFpbmVyIHtcXG4gIGhlaWdodDogOTAlO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1heC13aWR0aDogNDhyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLm1vZGFsX19ib3ggLm1vZGFsX19jb250YWluZXIgLm1vZGFsX19idG4ge1xcbiAgd2lkdGg6IDJyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjM4NDc7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMC41cmVtO1xcbiAgcmlnaHQ6IDAuNXJlbTtcXG4gIHotaW5kZXg6IDExO1xcbn1cXG4ubW9kYWxfX2JveCAubW9kYWxfX2NvbnRhaW5lciAubW9kYWxfX2J0biAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xcbiAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcXG4gIGNvbG9yOiAjZmYzODQ3O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1vZGFsX19ib3ggLm1vZGFsX19jb250YWluZXIgLm1vZGFsX19idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzg0NztcXG59XFxuLm1vZGFsX19ib3ggLm1vZGFsX19jb250YWluZXIgLm1vZGFsX19idG46aG92ZXIgLmJ0bl9fY2xvc2UtbW9kYWwge1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XFxuICBzY3JvbGxiYXItY29sb3I6ICNiZmM1Y2EgI2RlZTJlNjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgPiAqIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIgPiA6bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIkthcmxhXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lciB1bCBsaSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIC5idG4ge1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmYzODQ3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLYXJsYVxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XFxuICBjb2xvcjogI2ZmMzg0NztcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29udGFpbmVyIC5idG46aG92ZXIge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmMzg0NztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjM4NDc7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZmM1Y2E7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDZweDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6ICNkZWUyZTY7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA0OHJlbSkge1xcbiAgLm1vZGFsX19ib3ggLm1vdmllX19jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICB9XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyA+ICoge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fZGV0YWlscyBpbWcge1xcbiAgd2lkdGg6IDIxMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2RldGFpbHMgLm1vdmllX19tb3JlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19kZXRhaWxzIC5tb3ZpZV9fbW9yZSAuaXRlbS1jYXRlZ29yeSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tZGF0ZSxcXG4ubW9kYWxfX2JveCAubW92aWVfX2NvbW1lbnRzIC5pdGVtLW5hbWUge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fY29tbWVudHMgLml0ZW0tbmFtZSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IHtcXG4gIC8qIEZPUk0gVkFMSURBVElPTiAqL1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDMxLjI1cmVtO1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5tb2RhbF9fYm94IC5tb3ZpZV9fYWRkLWNvbW1lbnQgZm9ybSA+ICoge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtID4gOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCBmb3JtIC5pbnB1dF9fZmllbGQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCAjYmZjNWNhO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGVjdHJhbFxcXCIsIHNlcmlmO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbiAgY29sb3I6ICMwMjMwNDc7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9ybWFsO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IGZvcm0gLmlucHV0X19maWVsZDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgI2ZmMzg0NztcXG59XFxuLm1vZGFsX19ib3ggLm1vdmllX19hZGQtY29tbWVudCAuZm9ybV9fbWVzc2FnZSB7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGNvbG9yOiAjMDRiZDllO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IC5lcnJvci1tZXNzYWdlIHtcXG4gIGNvbG9yOiAjZmQzZjNmO1xcbn1cXG4ubW9kYWxfX2JveCAubW92aWVfX2FkZC1jb21tZW50IC52aXNpYmxlIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWxfX2JveC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDUwcHggYXV0byAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZTJlNjtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBmb250LWZhbWlseTogXFxcIlNwZWN0cmFsXFxcIiwgc2VyaWY7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJyZW07XFxuICBjb2xvcjogIzAyMzA0NztcXG4gIHRleHQtdHJhbnNmb3JtOiBub3JtYWw7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTs7O0VBR0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUNTRSw4QkFsQks7RUFtQkwsZUFGZ0I7RUFHaEIsZ0JBSDBCO0VBSTFCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0F0Qks7RUF1Qkwsc0JBUDBFO0VETDFFLG1EQUFBO0FBSUY7O0FBREE7RUVWRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VGVUEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQ2xCVztFRG1CWCxhQUFBO0VBQ0EsWUFBQTtBQU1GO0FBSkU7RUNsQkEsZ0NBVEs7RUFVTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQVpLO0VBYUwseUJBUDBFO0VEc0J4RSxxQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVdKO0FBUEk7RUFDRSxnQkFBQTtFRWpDSixhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FGMkNGO0FBUlE7RUFDRSxxQkFBQTtFQ3BDUixnQ0FUSztFQVVMLGVBRmdCO0VBR2hCLGdCRG9DNkI7RUNuQzdCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0FaSztFQWFMLHlCQVAwRTtBRHNENUU7O0FBUkE7RUVoREUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFRmdEQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQWFGO0FBWEU7RUVqRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFRmlFRSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxzQkFBQTtBQWVKO0FBYkk7RUFDRSxZQUFBO0FBZU47QUFaSTtFRXJFRixhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VGcUVJLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFnQk47QUFkTTtFRXZGSixhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VGdUZNLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtBQWtCUjtBQWhCUTtFQUNFLGNDNUZEO0VENkZDLGVBQUE7QUFrQlY7QUFoQlU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFrQlo7QUFmVTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtBQWlCWjtBQWJRO0VBQ0Usa0JBQUE7QUFlVjtBQVZJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0NySEc7RURzSEgsa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQVlOO0FBVk07RUFDRSx5QkM1SEM7RUQ2SEQsWUFBQTtBQVlSO0FBVE07RUFDRSx5QkFBQTtBQVdSOztBQUxBO0VBQ0UsV0FBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFRWhJQSx1QkFBQTtFQUNBLG1CQUFBO0VGbUlBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQU9GO0FBTEU7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFRXBLRixhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FGNEtGO0FBUEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDJDQUFBO0VBQ0EsYUFBQTtFRWpLSix1QkFBQTtFQUNBLG1CQUFBO0VGb0tJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBUU47QUFOTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VDckxOLGdDQVRLO0VBVUwsa0JEc0wyQjtFQ3JMM0IsZ0JBSDBCO0VBSTFCLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0FYTztFQVlQLHlCQVAwRTtFRDBMcEUsZUFBQTtBQVlSO0FBVE07RUFDRSx5QkNuTUM7QUQ4TVQ7QUFUUTtFQUNFLFdBQUE7QUFXVjtBQUxFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBa0RBLHFCQUFBO0VBQ0EsZ0NBQUE7QUExQ0o7QUFQSTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQVNOO0FBTkk7RUFDRSxnQkFBQTtBQVFOO0FBTEk7RUN2TkYsZ0NBVEs7RUFVTCxlRHVOeUI7RUN0TnpCLGlCRHNOb0M7RUNyTnBDLHNCQUorQztFQUsvQyxtQkFMbUM7RUFNbkMsY0FaSztFQWFMLHlCRGtOK0M7RUFFM0MsbUJBQUE7QUFZTjtBQVRJO0VBQ0UsbUJBQUE7QUFXTjtBQVJJO0VBQ0UsZ0JBQUE7QUFVTjtBQVJNO0VFdk9KLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUZ1T00sZUFBQTtFQUNBLGlCQUFBO0FBWVI7QUFSSTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQ2hQSixnQ0FUSztFQVVMLGVBRmdCO0VBR2hCLGdCQUgwQjtFQUkxQixzQkFKK0M7RUFLL0MsbUJBTG1DO0VBTW5DLGNBWE87RUFZUCx5QkFQMEU7RURxUHRFLDZCQUFBO0VBQ0EsMkNBQUE7QUFjTjtBQVpNO0VBQ0UseUJBQUE7RUFDQSx5QkMvUEM7RURnUUQsV0FBQTtBQWNSO0FBUEk7RUFDRSx5QkNyUU07RURzUU4sbUJBQUE7QUFTTjtBQU5JO0VBQ0UsVUFBQTtBQVFOO0FBTEk7RUFDRSxtQkMvUU87QURzUmI7QUV6UUU7RUY2TEE7SUF5RUksZUFBQTtFQU9KO0FBQ0Y7QUFISTtFQUNFLFdBQUE7QUFLTjtBQUZJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUlOO0FBREk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBR047QUFETTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7QUFHUjtBQUVFO0VBQ0UsV0FBQTtBQUFKO0FBRUk7O0VBRUUsb0JBQUE7QUFBTjtBQUdJO0VBQ0UsZ0JBQUE7QUFETjtBQUtFO0VBK0JFLG9CQUFBO0FBakNKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFRXZVSixhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FGdVVGO0FBQ007RUFDRSxzQkFBQTtBQUNSO0FBRU07RUFDRSxnQkFBQTtBQUFSO0FBR007RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VDcFVOLDhCQWxCSztFQW1CTCxlQUZnQjtFQUdoQixnQkFIMEI7RUFJMUIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQXRCSztFQXVCTCxzQkFQMEU7QUQyVTVFO0FBRlE7RUFDRSwwQkFBQTtBQUlWO0FBRUk7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBRE47QUFJSTtFQUNFLGNBQUE7QUFGTjtBQUtJO0VBQ0UsY0FBQTtBQUhOOztBQVFBO0VBQ0UsYUFBQTtBQUxGOztBQVFBO0VFalhFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUZpWEEsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQ3pYVztFRDBYWCxhQUFBO0VBQ0EsWUFBQTtFQzdXQSw4QkFsQks7RUFtQkwsZUFGZ0I7RUFHaEIsZ0JENldxQjtFQzVXckIsc0JBSitDO0VBSy9DLG1CQUxtQztFQU1uQyxjQXRCSztFQXVCTCxzQkFQMEU7QURrWDVFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcbkBpbXBvcnQgJ21peGlucyc7XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSB7XFxuICBAaW5jbHVkZSBmb250LWI7XFxuXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vaW1hZ2VzL2IxLnBuZyk7XFxufVxcblxcbmhlYWRlciB7XFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1saWdodDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAuaGVhZGVyLWJyYW5kIHtcXG4gICAgQGluY2x1ZGUgZm9udC1oO1xcblxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWFnZXMvbG9nby5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHdpZHRoOiAxMTBweDtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHVsIHtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIGEge1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFxuICAgICAgICAgIEBpbmNsdWRlIGZvbnQtaCgkZnc6IDYwMCk7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbiNtb3ZpZS1zZWN0aW9uIHtcXG4gIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGdhcDogMzBweCAzJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcblxcbiAgLm1vdmllLXdyYXBwZXIge1xcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcXG5cXG4gICAgLm1vdmllLXdyYXBwZXJfX2ltZyB7XFxuICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZS13cmFwcGVyX190aXRsZSB7XFxuICAgICAgQGluY2x1ZGUgZmxleC1yb3c7XFxuXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiA1cHg7XFxuICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgIGhlaWdodDogNDhweDtcXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcblxcbiAgICAgIC5tb3ZpZS13cmFwcGVyX19saWtlcyB7XFxuICAgICAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcblxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHdpZHRoOiA1NXB4O1xcbiAgICAgICAgZ2FwOiAzcHg7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXG5cXG4gICAgICAgIGkge1xcbiAgICAgICAgICBjb2xvcjogJGFjY2VudDtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBjb2xvcjogI2ZkM2YzZjtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyLCAyKTtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDdweCByZWQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHNwYW4ge1xcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5tb3ZpZS13cmFwcGVyX19jb21tZW50LWJ1dHRvbiB7XFxuICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBjb2xvcjogJGFjY2VudDtcXG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjY2VudDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICB9XFxuXFxuICAgICAgJjphY3RpdmUge1xcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLm1vZGFsX19ib3gge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMyLCAzMiwgMzIsIDAuOSk7XFxuICBkaXNwbGF5OiBub25lO1xcblxcbiAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB6LWluZGV4OiAxMDtcXG5cXG4gIC5tb2RhbF9fY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiA5MCU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIG1heC13aWR0aDogNDhyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWFnZXMvYmctbW92aWVzLnN2ZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICBAaW5jbHVkZSBmbGV4LWNvbHVtO1xcblxcbiAgICAubW9kYWxfX2J0biB7XFxuICAgICAgd2lkdGg6IDJyZW07XFxuICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50O1xcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1vdXQgMjUwbXM7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG5cXG4gICAgICBAaW5jbHVkZSBmbGV4LWNlbnRlcjtcXG5cXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgdG9wOiAwLjVyZW07XFxuICAgICAgcmlnaHQ6IDAuNXJlbTtcXG4gICAgICB6LWluZGV4OiAxMTtcXG5cXG4gICAgICAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICBvdXRsaW5lOiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFxuICAgICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAxLjI1cmVtLCAkY29sb3I6ICRhY2NlbnQpO1xcblxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxuXFxuICAgICAgICAuYnRuX19jbG9zZS1tb2RhbCB7XFxuICAgICAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vdmllX19jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogI2ZmZiwgJGFscGhhOiAwLjgpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgID4gKiB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gICAgfVxcblxcbiAgICA+IDpsYXN0LWNoaWxkIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIGgyIHtcXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGZzOiAycmVtLCAkZnc6IGJvbGQsICR0dDogdXBwZXJjYXNlKTtcXG5cXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgICB9XFxuXFxuICAgIGgzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIHVsIHtcXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgICAgIGxpIHtcXG4gICAgICAgIEBpbmNsdWRlIGZsZXgtcm93O1xcblxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5idG4ge1xcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkYWNjZW50O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICBAaW5jbHVkZSBmb250LWgoJGNvbG9yOiAkYWNjZW50KTtcXG5cXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2Utb3V0IDI1MG1zO1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGFjY2VudDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY2NlbnQ7XFxuICAgICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xcbiAgICBzY3JvbGxiYXItY29sb3I6ICRncmF5LWRhcmsgJGdyYXktbGlnaHQ7XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS1kYXJrO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIH1cXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIHdpZHRoOiA2cHg7XFxuICAgIH1cXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5LWxpZ2h0O1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1xKCRtdzogNDhyZW0pIHtcXG4gICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5tb3ZpZV9fZGV0YWlscyB7XFxuICAgID4gKiB7XFxuICAgICAgd2lkdGg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICB3aWR0aDogMjEwcHg7XFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIGZsb2F0OiBsZWZ0O1xcbiAgICB9XFxuXFxuICAgIC5tb3ZpZV9fbW9yZSB7XFxuICAgICAgbWFyZ2luOiAwO1xcbiAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxuXFxuICAgICAgLml0ZW0tY2F0ZWdvcnkge1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLm1vdmllX19jb21tZW50cyB7XFxuICAgIGNsZWFyOiBib3RoO1xcblxcbiAgICAuaXRlbS1kYXRlLFxcbiAgICAuaXRlbS1uYW1lIHtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuaXRlbS1uYW1lIHtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAubW92aWVfX2FkZC1jb21tZW50IHtcXG4gICAgZm9ybSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWF4LXdpZHRoOiAzMS4yNXJlbTtcXG4gICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcbiAgICAgIEBpbmNsdWRlIGZsZXgtY29sdW07XFxuXFxuICAgICAgPiAqIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XFxuICAgICAgfVxcblxcbiAgICAgID4gOmxhc3QtY2hpbGQge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICB9XFxuXFxuICAgICAgLmlucHV0X19maWVsZCB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRncmF5LWRhcms7XFxuXFxuICAgICAgICBAaW5jbHVkZSBmb250LWI7XFxuXFxuICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkICRhY2NlbnQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC8qIEZPUk0gVkFMSURBVElPTiAqL1xcbiAgICAuZm9ybV9fbWVzc2FnZSB7XFxuICAgICAgLy8gZGlzcGxheTogbm9uZTtcXG4gICAgICBwYWRkaW5nOiAwLjNyZW07XFxuICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgY29sb3I6ICMwNGJkOWU7XFxuICAgIH1cXG5cXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xcbiAgICAgIGNvbG9yOiAjZmQzZjNmO1xcbiAgICB9XFxuXFxuICAgIC52aXNpYmxlIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ubW9kYWxfX2JveC1kaXNwbGF5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmZvb3RlciB7XFxuICBAaW5jbHVkZSBmbGV4LXJvdztcXG5cXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0O1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGhlaWdodDogNTBweDtcXG5cXG4gIEBpbmNsdWRlIGZvbnQtYigkZnc6IDQwMCk7XFxufVxcblwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FybGE6aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwJmZhbWlseT1TcGVjdHJhbDppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MSwyMDA7MSwzMDA7MSw0MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuJGZmLWg6ICdLYXJsYScsIHNhbnMtc2VyaWY7XFxuJGZmLWI6ICdTcGVjdHJhbCcsIHNlcmlmO1xcbiRiYXNlOiAjMDIzMDQ3O1xcbiRhY2NlbnQ6ICNmZjM4NDc7XFxuJHBpbms6ICNlNjhhYjQ7XFxuJGdyYXktbGlnaHQ6ICNkZWUyZTY7XFxuJGdyYXktZGFyazogI2JmYzVjYTtcXG5cXG5AbWl4aW4gZm9udC1oKCRmczoxcmVtLCAkZnc6MzAwLCAkbGg6MS42cmVtLCAkbHM6bm9ybWFsLCAkY29sb3I6ICRiYXNlLCAkdHQ6dXBwZXJjYXNlKSB7XFxuICBmb250LWZhbWlseTogJGZmLWg7XFxuICBmb250LXNpemU6ICRmcztcXG4gIGZvbnQtd2VpZ2h0OiAkZnc7XFxuICBsZXR0ZXItc3BhY2luZzogJGxzO1xcbiAgbGluZS1oZWlnaHQ6ICRsaDtcXG4gIGNvbG9yOiAkY29sb3I7XFxuICB0ZXh0LXRyYW5zZm9ybTogJHR0O1xcbn1cXG5cXG5AbWl4aW4gZm9udC1iKCRmczoxcmVtLCAkZnc6MzAwLCAkbGg6MS4ycmVtLCAkbHM6bm9ybWFsLCAkY29sb3I6ICRiYXNlLCAkdHQ6bm9ybWFsKSB7XFxuICBmb250LWZhbWlseTogJGZmLWI7XFxuICBmb250LXNpemU6ICRmcztcXG4gIGZvbnQtd2VpZ2h0OiAkZnc7XFxuICBsZXR0ZXItc3BhY2luZzogJGxzO1xcbiAgbGluZS1oZWlnaHQ6ICRsaDtcXG4gIGNvbG9yOiAkY29sb3I7XFxuICB0ZXh0LXRyYW5zZm9ybTogJHR0O1xcbn1cXG5cIixcIkBtaXhpbiBmbGV4LWNvbHVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbkBtaXhpbiBmbGV4LXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5AbWl4aW4gZmxleC1jZW50ZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gbXEgKCRtdzo1MHJlbSkge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRtdykge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCB0b3RhbEl0ZW1zID0gKGFyciwgZG9tRWxlbWVudCkgPT4ge1xuICBsZXQgbGVuZ3RoID0gMDtcbiAgd2hpbGUgKGFycltsZW5ndGhdICE9PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggKz0gMTtcbiAgfVxuICBkb21FbGVtZW50LmlubmVySFRNTCA9IGAoJHtsZW5ndGh9KWA7XG4gIHJldHVybiBsZW5ndGg7XG59O1xuXG5leHBvcnQgeyB0b3RhbEl0ZW1zIGFzIGRlZmF1bHQgfTtcbiIsImNvbnN0IGlCYXNlVVJMID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL3pnZ0VCWHpwRmNRcWpEeHZNaE16L2NvbW1lbnRzJztcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAobW92aWVJZCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9P2l0ZW1faWQ9JHttb3ZpZUlkfWApO1xuICBjb25zdCBjb21tZW50c0xpc3QgPSBhd2FpdCBjb25uZWN0Lmpzb24oKTtcbiAgaWYgKGNvbW1lbnRzTGlzdC5lcnJvcikgcmV0dXJuIFtdO1xuICByZXR1cm4gY29tbWVudHNMaXN0O1xufTtcblxuY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jIChtb3ZpZUlkLCB1c2VybmFtZSwgY29tbWVudCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7aUJhc2VVUkx9YCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGl0ZW1faWQ6IG1vdmllSWQsXG4gICAgICB1c2VybmFtZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb25uZWN0LnRleHQoKTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgY291bnRDb21tZW50cyA9IChhcnIpID0+IHtcbiAgbGV0IGNvdW50ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb3VudCArPSAxO1xuICB9XG4gIHJldHVybiBgQ29tbWVudHMgKCR7Y291bnR9KWA7XG59O1xuXG5leHBvcnQgeyBnZXRDb21tZW50cywgYWRkQ29tbWVudCwgY291bnRDb21tZW50cyB9OyIsImNvbnN0IGJhc2VVUkwgPSAnIGh0dHBzOi8vYXBpLnR2bWF6ZS5jb20nO1xuXG5jb25zdCBnZXRNb3ZpZURhdGEgPSBhc3luYyAoaW5kZXgsIHF1ZXJ5KSA9PiB7XG4gIGNvbnN0IGNvbm5lY3QgPSBhd2FpdCBmZXRjaChgJHtiYXNlVVJMfS9zaG93cz9xPSR7cXVlcnl9YCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC5qc29uKCkudGhlbigoZGF0YUxpc3QpID0+IHtcbiAgICBjb25zdCBzaG9ydExpc3QgPSBkYXRhTGlzdC5zbGljZShpbmRleCwgaW5kZXggKyA1MCk7XG4gICAgc2hvcnRMaXN0Lm1hcCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBnZW5yZXM6IGl0ZW0uZ2VucmVzLFxuICAgICAgICBpbWFnZTogaXRlbS5pbWFnZSxcbiAgICAgICAgZW5kOiBpdGVtLmVuZGVkLFxuICAgICAgICByYXRpbmc6IGl0ZW0ucmF0aW5nLFxuICAgICAgICBzdW1tYXJ5OiBpdGVtLnN1bW1hcnksXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgICByZXR1cm4gc2hvcnRMaXN0O1xuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlO1xufTtcblxuZXhwb3J0IHsgZ2V0TW92aWVEYXRhIGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCB7IGdldENvbW1lbnRzLCBhZGRDb21tZW50LCBjb3VudENvbW1lbnRzIH0gZnJvbSAnLi9jb25zdW1lSW52b2x2ZW1lbnRBUEkuanMnO1xuXG5jb25zdCBtb2RhbEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYm94Jyk7XG5jb25zdCBtb2RhbENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bl9fY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2NvbW1lbnQnKTtcbmNvbnN0IGZvcm1NZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX21lc3NhZ2UnKTtcbmxldCB0aW1lcklkID0gJyc7XG5cbmNvbnN0IGFyckludG9TdHJpbmcgPSAoYXJyKSA9PiB7XG4gIGxldCBzdHIgPSAnJztcbiAgYXJyLmZvckVhY2goKGVsKSA9PiB7XG4gICAgc3RyICs9IGAke2VsfSB8IGA7XG4gIH0pO1xuICByZXR1cm4gc3RyO1xufTtcblxuY29uc3QgYnVpbGRNb3ZpZURlc2NyaXB0aW9uID0gKGRhdGEpID0+IHtcbiAgY29uc3QgbW92aWVEZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllX19kZXRhaWxzJyk7XG4gIG1vdmllRGV0YWlscy5zZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVpZCcsIGRhdGEuaWQpO1xuICBtb3ZpZURldGFpbHMuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtkYXRhLmltYWdlLm1lZGl1bX1cIiBhbHQ9XCIke2RhdGEubmFtZX0gbW92aWUgaW1hZ2VcIj5cbiAgICAgICAgPGgyPiR7ZGF0YS5uYW1lfTwvaDI+XG4gICAgICAgIDx1bCBjbGFzcz1cIm1vdmllX19tb3JlXCI+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+R2VucmU6PC9zcGFuPlxuICAgICAgICAgICAgPHA+JHthcnJJbnRvU3RyaW5nKGRhdGEuZ2VucmVzKX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tY2F0ZWdvcnlcIj5FbmRlZDo8L3NwYW4+XG4gICAgICAgICAgICA8cD4ke2RhdGEuZW5kZWR9PC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLWNhdGVnb3J5XCI+UmF0aW5nOjwvc3Bhbj5cbiAgICAgICAgICAgIDxwPiR7ZGF0YS5yYXRpbmcuYXZlcmFnZX08L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgJHtkYXRhLnN1bW1hcnl9YDtcbn07XG5cbmNvbnN0IGJ1aWxkTW92aWVDb21tZW50cyA9IChhcnIpID0+IHtcbiAgY29uc3QgbW92aWVDb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb3ZpZV9fY29tbWVudHMnKTtcbiAgbW92aWVDb21tZW50cy5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGNvdW50Q29tbWVudHMoYXJyKTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IGNvbW1lbnRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgY29tbWVudExpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHNfX2xpc3QnKTtcbiAgYXJyLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwib3duZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4+JHtjb21tZW50LmNyZWF0aW9uX2RhdGV9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tbmFtZVwiPiR7Y29tbWVudC51c2VybmFtZX06PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tbWVudFwiPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tY29tbWVudFwiPiR7Y29tbWVudC5jb21tZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgY29tbWVudExpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuICB9KTtcbiAgbW92aWVDb21tZW50cy5hcHBlbmRDaGlsZChjb21tZW50TGlzdCk7XG59O1xuXG5jb25zdCBkaXNwbGF5TW92aWVEZXRhaWxzID0gKG1vdmllKSA9PiB7XG4gIGJ1aWxkTW92aWVEZXNjcmlwdGlvbihtb3ZpZSk7XG4gIGdldENvbW1lbnRzKG1vdmllLmlkKS50aGVuKChsaXN0KSA9PiB7XG4gICAgYnVpbGRNb3ZpZUNvbW1lbnRzKGxpc3QpO1xuICAgIG1vZGFsQm94LmNsYXNzTGlzdC5hZGQoJ21vZGFsX19ib3gtZGlzcGxheScpO1xuICB9KTtcbn07XG5cbm1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsQm94LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsX19ib3gtZGlzcGxheScpO1xufSk7XG5cbmNvbnN0IGRpc3BsYXlNZXNzYWdlID0gKG1zZykgPT4ge1xuICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gIGlmIChtc2cpIHtcbiAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9IG1zZztcbiAgICBmb3JtTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvci1tZXNzYWdlJyk7XG4gIH1cbiAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICB0aW1lcklkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZm9ybU1lc3NhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3ItbWVzc2FnZScsICd2aXNpYmxlJyk7XG4gIH0sIDUwMDApO1xufTtcblxuY29uc3QgdmFsaWRTdHJpbmcgPSAoc3RyKSA9PiB7XG4gIGlmIChzdHIubWF0Y2goL15bYS16QS1aMC05w4Atw79cXHUwMGYxXFx1MDBkMVxcdTAwRTBcXHUwMEZDX1xcLSBdezEsMzB9JC8pKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuY29uc3QgdmFsaWRGb3JtID0gKG5hbWUsIGNvbW1lbnQpID0+IHtcbiAgbmFtZS52YWx1ZSA9IG5hbWUudmFsdWUudHJpbSgpO1xuICBjb21tZW50LnZhbHVlID0gY29tbWVudC52YWx1ZS50cmltKCk7XG4gIGlmICghdmFsaWRTdHJpbmcobmFtZS52YWx1ZSkpIHtcbiAgICBuYW1lLmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoJ05hbWUgZmllbGQgb25seSBhbGxvd3MgYWxwaGFudW1lcmljLCBoeXBoZW5zLCB1bmRlcnNjb3JlcywgYW5kIG1heCAzMCBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoY29tbWVudC52YWx1ZSA9PT0gJycgfHwgY29tbWVudC52YWx1ZS5sZW5ndGggPiAyNTApIHtcbiAgICBjb21tZW50LmZvY3VzKCk7XG4gICAgZGlzcGxheU1lc3NhZ2UoJ0luc2lnaHRzIGZpZWxkIGFsbG93cyAxIHRvIDI1MCBjaGFyYWN0ZXJzLicpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IHNlbmRDb21tZW50ID0gKCkgPT4ge1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucF9fdXNlcm5hbWUnKTtcbiAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnBfX2luc2lnaHRzJyk7XG4gIGNvbnN0IG1vdmllSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW92aWVfX2RldGFpbHMnKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbW92aWVJZCcpO1xuXG4gIGlmICh2YWxpZEZvcm0obmFtZSwgY29tbWVudCkpIHtcbiAgICBhZGRDb21tZW50KG1vdmllSWQsIG5hbWUudmFsdWUsIGNvbW1lbnQudmFsdWUpLnRoZW4oKGFucykgPT4ge1xuICAgICAgaWYgKGFucyA9PT0gJ0NyZWF0ZWQnKSB7XG4gICAgICAgIGdldENvbW1lbnRzKG1vdmllSWQpLnRoZW4oKGxpc3QpID0+IHtcbiAgICAgICAgICBidWlsZE1vdmllQ29tbWVudHMobGlzdCk7XG4gICAgICAgIH0pO1xuICAgICAgICBuYW1lLnZhbHVlID0gJyc7XG4gICAgICAgIG5hbWUuZm9jdXMoKTtcbiAgICAgICAgY29tbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICBmb3JtTWVzc2FnZS50ZXh0Q29udGVudCA9ICdDb21tZW50IHNlbnQgc3VjY2Vzc2Z1bGx5JztcbiAgICAgICAgZGlzcGxheU1lc3NhZ2UoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlNZXNzYWdlKCdDb21tZW50cyBhcmUgbm90IGF2YWlsYWJsZSBmb3Igbm93LiBUcnkgYWdhaW4gbGF0ZXIuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgc2VuZENvbW1lbnQoKTtcbn0pO1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVEZXRhaWxzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgeyB1cGRhdGVMaWtlcywgc2V0TGlrZSB9IGZyb20gJy4vbGlrZUZ1bmN0aW9uYWxpdHkuanMnO1xuaW1wb3J0IGRpc3BsYXlNb3ZpZURldGFpbHMgZnJvbSAnLi9kaXNwbGF5TW92aWVEZXRhaWxzLmpzJztcblxuY29uc3QgZGlzcGxheU1vdmllcyA9IGFzeW5jIChtb3ZpZUxpc3QpID0+IHtcbiAgY29uc3QgbW92aWVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vdmllLXNlY3Rpb24nKTtcbiAgbW92aWVTZWN0aW9uLmlubmVySFRNTCA9ICcnO1xuICBtb3ZpZUxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluRGl2LmNsYXNzTmFtZSA9ICdtb3ZpZS13cmFwcGVyJztcbiAgICBtYWluRGl2LmlkID0gYG1vdmllJHtpdGVtLmlkfWA7XG4gICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRldGFpbHMuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX3RpdGxlJztcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWcuY2xhc3NOYW1lID0gJ21vdmllLXdyYXBwZXJfX2ltZyc7XG4gICAgaW1nLnNyYyA9IGl0ZW0uaW1hZ2UubWVkaXVtO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7aXRlbS5uYW1lfWA7XG4gICAgY29uc3QgbGlrZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaWtlcy5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fbGlrZXMnO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3QgbGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBsaWtlLmNsYXNzTmFtZSA9ICdmYXMgZmEtaGVhcnQnO1xuICAgIGNvbnN0IGNvbW1lbnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21tZW50QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICBjb21tZW50QnV0dG9uLmlubmVySFRNTCA9ICdDb21tZW50cyc7XG4gICAgY29tbWVudEJ1dHRvbi5jbGFzc05hbWUgPSAnbW92aWUtd3JhcHBlcl9fY29tbWVudC1idXR0b24nO1xuICAgIGxpa2VzLmFwcGVuZChsaWtlLCBzcGFuKTtcbiAgICBkZXRhaWxzLmFwcGVuZChuYW1lLCBsaWtlcyk7XG4gICAgY29tbWVudEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRpc3BsYXlNb3ZpZURldGFpbHMoaXRlbSk7XG4gICAgfSk7XG4gICAgbWFpbkRpdi5hcHBlbmQoaW1nLCBkZXRhaWxzLCBjb21tZW50QnV0dG9uKTtcbiAgICBtb3ZpZVNlY3Rpb24uYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHNldExpa2UoYG1vdmllJHtpdGVtLmlkfWApO1xuICAgICAgY29uc3QgbnVtYmVyID0gbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC50ZXh0Q29udGVudC5zcGxpdCgnICcpO1xuICAgICAgbGlrZS5wYXJlbnROb2RlLmxhc3RDaGlsZC5pbm5lckhUTUwgPSBgJHtOdW1iZXIobnVtYmVyWzBdKSArIDF9IGxpa2VzYDtcbiAgICB9KTtcbiAgfSk7XG4gIHVwZGF0ZUxpa2VzKCk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5TW92aWVzIGFzIGRlZmF1bHQgfTtcbiIsImNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcbmNvbnN0IGFwcElEID0gJ3pnZ0VCWHpwRmNRcWpEeHZNaE16JztcblxuY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb25uZWN0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVSTH0ke2FwcElEfS9saWtlcy9gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpZCB9KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vSlNPTicgfSxcbiAgfSk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY29ubmVjdC50ZXh0KCk7XG4gIHJldHVybiByZXNwb25zZTtcbn07XG5cbmNvbnN0IGdldExpa2UgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgY29ubmVjdCA9IGF3YWl0IGZldGNoKGAke2Jhc2VVUkx9JHthcHBJRH0vbGlrZXM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm5lY3QuanNvbigpO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuLy8gZmV0Y2goYmFzZVVSTCwge1xuLy8gICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgaGVhZGVyczogeyAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL0pTT04nIH0sXG4vLyB9KS50aGVuKChyZXNwb25zZSkgPT4gY29uc29sZS5sb2cocmVzcG9uc2UudGV4dCgpKSk7XG4vLyAvLyB9KTtcblxuY29uc3QgdXBkYXRlTGlrZXMgPSAoKSA9PiB7XG4gIGdldExpa2UoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2VsZW1lbnQuaXRlbV9pZH1gKTtcbiAgICAgIGNvbnRhaW5lci5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5jaGlsZHJlblsxXS5pbm5lckhUTUwgPSBgJHtlbGVtZW50Lmxpa2VzfSBsaWtlc2A7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgdXBkYXRlTGlrZXMsIHNldExpa2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG5pbXBvcnQgZ2V0TW92aWVEYXRhIGZyb20gJy4vbW9kdWxlcy9jb25zdW1lVFZNYXplQVBJLmpzJztcbmltcG9ydCBkaXNwbGF5TW92aWVzIGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5TW92aWVzLmpzJztcbmltcG9ydCB0b3RhbEl0ZW1zIGZyb20gJy4vbW9kdWxlcy9hbGxJdGVtc0NvdW50ZXIuanMnO1xuXG5jb25zdCBxdWVyeSA9ICdhY3Rpb24nO1xuY29uc3QgaG9tZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllLXNlY3Rpb25fX2l0ZW1zJyk7XG5nZXRNb3ZpZURhdGEoMCwgcXVlcnkpLnRoZW4oKG1vdmllTGlzdCkgPT4ge1xuICBkaXNwbGF5TW92aWVzKG1vdmllTGlzdCk7XG4gIGNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb3ZpZS13cmFwcGVyJyk7XG4gIHRvdGFsSXRlbXMoYWxsLCBob21lSXRlbXMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=