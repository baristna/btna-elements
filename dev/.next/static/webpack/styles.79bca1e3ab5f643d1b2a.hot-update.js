webpackHotUpdate("styles",{

/***/ "./styleguide/icons.scss":
/*!*******************************!*\
  !*** ./styleguide/icons.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"icons":"icons__1g7V4XE5L6","search":"search__15VGFUe9mR","row":"row__3wNR-DRfgX","col":"col__3IfSN6SNpC","icon":"icon__3JjnUU5BAA","text":"text__2de_Fim8BM","name":"name__2KrJEOImmH","code":"code__30cifPhpCM"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1578176440558");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.79bca1e3ab5f643d1b2a.hot-update.js.map