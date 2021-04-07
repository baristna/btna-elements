webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _styleguide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styleguide */ "./styleguide/index.js");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts */ "./layouts/index.js");
/* harmony import */ var _btna_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @btna/helpers */ "../node_modules/@btna/helpers/index.js");
/* harmony import */ var _btna_helpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_btna_helpers__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/baristna/Projects/tna/elements/dev/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// Components
 // StyleGuide

 // Layout

 // Helpers


var defaultTab = 'select'; // Code

var Index = function Index(_ref) {
  var query = _ref.query;
  var DynamicComponent = _styleguide__WEBPACK_IMPORTED_MODULE_2__["default"][Object(_btna_helpers__WEBPACK_IMPORTED_MODULE_4__["capitalize"])(query.cat || defaultTab)];

  var genLinks = function genLinks() {
    return [{
      name: 'Base',
      target: '/?cat=base'
    }, {
      name: 'Typography',
      target: '/?cat=typography'
    }, {
      name: 'Icons',
      target: '/?cat=icons'
    }, {
      name: 'Inputs',
      target: '/?cat=inputs'
    }, {
      name: 'Buttons',
      target: '/?cat=buttons'
    }, {
      name: 'Checkbox and Radio',
      target: '/?cat=checkboxradio'
    }, {
      name: 'Select',
      target: '/?cat=select'
    }, {
      name: 'List',
      target: '/?cat=list'
    }, {
      name: 'Grid',
      target: '/?cat=grid'
    }, {
      name: 'Media',
      target: '/?cat=media'
    }, {
      name: 'Others',
      target: '/?cat=others'
    }, {
      name: 'Sub Menu',
      child: [{
        name: 'a',
        target: '/'
      }, {
        name: 'b',
        target: '/'
      }]
    }];
  };

  return __jsx(_layouts__WEBPACK_IMPORTED_MODULE_3__["DefaultLayout"], {
    pageTitle: "TNA Elements",
    leftPanel: __jsx(_components__WEBPACK_IMPORTED_MODULE_1__["ListMenu"], {
      list: genLinks(),
      query: query,
      queryTarget: "cat",
      queryDefault: defaultTab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, DynamicComponent && __jsx(DynamicComponent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }));
}; // Initial Props


Index.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return {
    query: query
  };
}; // Connect and export


/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.21b28eabb5da663a2c10.hot-update.js.map