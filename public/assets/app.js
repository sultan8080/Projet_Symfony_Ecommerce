"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/styles.scss */ "./assets/scss/styles.scss");





document.addEventListener("DOMContentLoaded", function () {
  var tabLinks = document.querySelectorAll(".nav-link");
  tabLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      tabLinks.forEach(function (link) {
        return link.classList.remove("active", "bg-warning", "text-info");
      });
      this.classList.add("active", "bg-warning", "text-info");
    });
  });
});

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_for-each_js-node_modules_core-js_modules_es_obj-7bb33f"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNHO0FBRTVCQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBTUMsUUFBUSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztFQUN2REQsUUFBUSxDQUFDRSxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO0lBQ3JCQSxJQUFJLENBQUNKLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFZO01BQ3ZDQyxRQUFRLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDQyxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztNQUFBLEVBQUM7TUFDcEYsSUFBSSxDQUFDRCxTQUFTLENBQUNFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQztJQUMzRCxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7O0FDWEY7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9hcHAuc2Nzcz8xYjFlIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzP2IwODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3Njc3MvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc2Nzcy9zdHlsZXMuc2Nzcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0YWJMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2LWxpbmtcIik7XHJcbiAgICB0YWJMaW5rcy5mb3JFYWNoKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFiTGlua3MuZm9yRWFjaChsaW5rID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiLCBcImJnLXdhcm5pbmdcIiwgXCJ0ZXh0LWluZm9cIikpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIiwgXCJiZy13YXJuaW5nXCIsIFwidGV4dC1pbmZvXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJMaW5rcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibGluayIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=