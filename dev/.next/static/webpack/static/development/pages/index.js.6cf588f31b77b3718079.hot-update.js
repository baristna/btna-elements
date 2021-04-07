webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NavBar.js":
/*!******************************!*\
  !*** ./components/NavBar.js ***!
  \******************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavBar.scss */ "./components/NavBar.scss");
/* harmony import */ var _NavBar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_NavBar_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../elements */ "./elements/index.js");
/* harmony import */ var _btna_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @btna/helpers */ "../node_modules/@btna/helpers/index.js");
/* harmony import */ var _btna_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_btna_helpers__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/baristna/Projects/tna/elements/dev/components/NavBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Style

 // Elements

 // Helpers

 // Default List

var defaultList = [{
  display: 'Home',
  url: '/'
}, {
  display: 'Style',
  url: '/styleguide'
}, {
  display: 'Time',
  url: '/time'
}]; // Code

var NavBar = function NavBar(_ref) {
  var list = _ref.list;
  var buttonList = list || defaultList;

  var genButtons = function genButtons() {
    return buttonList.map(function (item, index) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: item.url,
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(_elements__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        text: item.display,
        height: "fill",
        type: "ghost",
        width: "wide",
        className: _NavBar_scss__WEBPACK_IMPORTED_MODULE_1___default.a.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    });
  };

  return __jsx("div", {
    className: Object(_btna_helpers__WEBPACK_IMPORTED_MODULE_4__["classes"])(_NavBar_scss__WEBPACK_IMPORTED_MODULE_1___default.a.navbar),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, genButtons());
};

/***/ })

})
//# sourceMappingURL=index.js.6cf588f31b77b3718079.hot-update.js.map