(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom */ "./assets/custom.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_custom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/app.scss */ "./assets/scss/app.scss");
/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/styles.scss */ "./assets/scss/styles.scss");
 // Import your custom JavaScript file



/***/ }),

/***/ "./assets/custom.js":
/*!**************************!*\
  !*** ./assets/custom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// document.addEventListener("DOMContentLoaded", function () {
//     const tabLinksHome = document.querySelectorAll(".nav-active-1");
//     tabLinksHome.forEach(link => {
//         link.addEventListener("click", function () {
//             tabLinksHome.forEach(link => link.classList.remove("active", "bg-warning", "text-info"));
//             this.classList.add("active", "bg-warning", "text-info");
//         });
//     });
// });
// document.addEventListener("DOMContentLoaded", function () {
//     const tabLinksProducts = document.querySelectorAll(".nav-active-2");
//     tabLinksProducts.forEach(link => {
//         link.addEventListener("click", function () {
//             tabLinksProducts.forEach(link => link.classList.remove("active", "bg-info", "text-white"));
//             this.classList.add("active", "bg-info", "text-white");
//         });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  var tabLinksHome = document.querySelectorAll(".nav-active-1");
  var tabLinksProducts = document.querySelectorAll(".nav-active-2");
  function setActiveMenu(links, activeClass, bgClass, textClass) {
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        links.forEach(function (link) {
          return link.classList.remove(activeClass, bgClass, textClass);
        });
        this.classList.add(activeClass, bgClass, textClass);
      });
    });
  }
  setActiveMenu(tabLinksHome, "active", "bg-warning", "text-info");
  setActiveMenu(tabLinksProducts, "active", "bg-info", "text-white");
});

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWtCLENBQUM7QUFDTTs7Ozs7Ozs7Ozs7Ozs7QUNEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBQSxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7RUFDdEQsSUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztFQUMvRCxJQUFNQyxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7RUFFbkUsU0FBU0UsYUFBYUEsQ0FBQ0MsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFO0lBQzNESCxLQUFLLENBQUNJLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7TUFDbEJBLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVk7UUFDdkNLLEtBQUssQ0FBQ0ksT0FBTyxDQUFDLFVBQUFDLElBQUk7VUFBQSxPQUFJQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDTixXQUFXLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxDQUFDO1FBQUEsRUFBQztRQUM3RSxJQUFJLENBQUNHLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDUCxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxDQUFDO01BQ3ZELENBQUMsQ0FBQztJQUNOLENBQUMsQ0FBQztFQUNOO0VBRUFKLGFBQWEsQ0FBQ0gsWUFBWSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUFDO0VBQ2hFRyxhQUFhLENBQUNELGdCQUFnQixFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDO0FBQ3RFLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDbkNGOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3M/MWIxZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy9zdHlsZXMuc2Nzcz9iMDgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jdXN0b20nOyAvLyBJbXBvcnQgeW91ciBjdXN0b20gSmF2YVNjcmlwdCBmaWxlXHJcbmltcG9ydCAnLi9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0ICcuL3Njc3Mvc3R5bGVzLnNjc3MnO1xyXG5cclxuIiwiLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgY29uc3QgdGFiTGlua3NIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYWN0aXZlLTFcIik7XHJcbi8vICAgICB0YWJMaW5rc0hvbWUuZm9yRWFjaChsaW5rID0+IHtcclxuLy8gICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHRhYkxpbmtzSG9tZS5mb3JFYWNoKGxpbmsgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIsIFwiYmctd2FybmluZ1wiLCBcInRleHQtaW5mb1wiKSk7XHJcbi8vICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiLCBcImJnLXdhcm5pbmdcIiwgXCJ0ZXh0LWluZm9cIik7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGNvbnN0IHRhYkxpbmtzUHJvZHVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdi1hY3RpdmUtMlwiKTtcclxuLy8gICAgIHRhYkxpbmtzUHJvZHVjdHMuZm9yRWFjaChsaW5rID0+IHtcclxuLy8gICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgICAgIHRhYkxpbmtzUHJvZHVjdHMuZm9yRWFjaChsaW5rID0+IGxpbmsuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiLCBcImJnLWluZm9cIiwgXCJ0ZXh0LXdoaXRlXCIpKTtcclxuLy8gICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIsIFwiYmctaW5mb1wiLCBcInRleHQtd2hpdGVcIik7XHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9KTtcclxuLy8gfSk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdGFiTGlua3NIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYWN0aXZlLTFcIik7XHJcbiAgICBjb25zdCB0YWJMaW5rc1Byb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5uYXYtYWN0aXZlLTJcIik7XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0QWN0aXZlTWVudShsaW5rcywgYWN0aXZlQ2xhc3MsIGJnQ2xhc3MsIHRleHRDbGFzcykge1xyXG4gICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxpbmtzLmZvckVhY2gobGluayA9PiBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MsIGJnQ2xhc3MsIHRleHRDbGFzcykpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzLCBiZ0NsYXNzLCB0ZXh0Q2xhc3MpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3RpdmVNZW51KHRhYkxpbmtzSG9tZSwgXCJhY3RpdmVcIiwgXCJiZy13YXJuaW5nXCIsIFwidGV4dC1pbmZvXCIpO1xyXG4gICAgc2V0QWN0aXZlTWVudSh0YWJMaW5rc1Byb2R1Y3RzLCBcImFjdGl2ZVwiLCBcImJnLWluZm9cIiwgXCJ0ZXh0LXdoaXRlXCIpO1xyXG59KTtcclxuXHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0YWJMaW5rc0hvbWUiLCJxdWVyeVNlbGVjdG9yQWxsIiwidGFiTGlua3NQcm9kdWN0cyIsInNldEFjdGl2ZU1lbnUiLCJsaW5rcyIsImFjdGl2ZUNsYXNzIiwiYmdDbGFzcyIsInRleHRDbGFzcyIsImZvckVhY2giLCJsaW5rIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==