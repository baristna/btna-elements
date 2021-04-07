webpackHotUpdate("static/development/pages/index.js",{

/***/ "./layouts/default.js":
/*!****************************!*\
  !*** ./layouts/default.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _default_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default.scss */ "./layouts/default.scss");
/* harmony import */ var _default_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_default_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _btna_styles_base_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @btna/styles/base.scss */ "../node_modules/@btna/styles/base.scss");
/* harmony import */ var _btna_styles_base_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_btna_styles_base_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _btna_styles_grid_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @btna/styles/grid.scss */ "../node_modules/@btna/styles/grid.scss");
/* harmony import */ var _btna_styles_grid_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_btna_styles_grid_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _sections__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sections */ "./sections/index.js");
/* harmony import */ var _btna_helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @btna/helpers */ "../node_modules/@btna/helpers/index.js");
/* harmony import */ var _btna_helpers__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_btna_helpers__WEBPACK_IMPORTED_MODULE_13__);





var _jsxFileName = "/Users/baristna/Projects/tna/elements/dev/layouts/default.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;
// Styles
 // import { sBase } from '../sass'


 // Packages



 // Components

 // Sections

 // Helpers


[{
  display: 'Home',
  url: '/'
}, {
  display: 'Style',
  url: '/styleguide'
}, {
  display: 'Time',
  url: '/time'
}]; // Code

var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  function Layout(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          pageTitle = _this$props.pageTitle,
          leftPanel = _this$props.leftPanel,
          corner = _this$props.corner,
          navbar = _this$props.navbar;
      return __jsx("div", {
        theme: this.props.theme,
        className: Object(_btna_helpers__WEBPACK_IMPORTED_MODULE_13__["classes"])(_btna_styles_base_scss__WEBPACK_IMPORTED_MODULE_6___default.a.app, _default_scss__WEBPACK_IMPORTED_MODULE_5___default.a.full),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, pageTitle)), __jsx(_sections__WEBPACK_IMPORTED_MODULE_12__["Header"], {
        className: _default_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
        navbar: navbar || __jsx(_components__WEBPACK_IMPORTED_MODULE_11__["NavBar"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }),
        corner: corner || __jsx(_components__WEBPACK_IMPORTED_MODULE_11__["ThemeButton"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(_sections__WEBPACK_IMPORTED_MODULE_12__["Panel"], {
        className: _default_scss__WEBPACK_IMPORTED_MODULE_5___default.a.panel,
        leftPanel: leftPanel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, children));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]); // State to Props


var mapStateToProps = function mapStateToProps(_ref) {
  var theme = _ref.theme;
  return {
    theme: theme
  };
}; // Dispatch to Props


var mapDispatchToProps = {}; // Connect and export

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Layout));

/***/ })

})
//# sourceMappingURL=index.js.65a638e7680a6bf0e3a2.hot-update.js.map