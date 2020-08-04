module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth/auth.jsx":
/*!**********************************!*\
  !*** ./components/auth/auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Auth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/authContext */ \"./context/authContext.js\");\n/* harmony import */ var _auth_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.module.scss */ \"./components/auth/auth.module.scss\");\n/* harmony import */ var _auth_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth_module_scss__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/orrymevorach/Desktop/pga-next/components/auth/auth.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction Auth() {\n  const {\n    user: {\n      isLoggedIn,\n      displayName\n    },\n    signOut,\n    signIn\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_authContext__WEBPACK_IMPORTED_MODULE_1__[\"AuthContext\"]);\n  return __jsx(\"div\", {\n    className: _auth_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.auth,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, isLoggedIn ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 11\n    }\n  }, displayName), __jsx(\"button\", {\n    onClick: signOut,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  }, \"Sign Out\")) : __jsx(\"button\", {\n    onClick: signIn,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Sign In\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC5qc3g/YWYxZiJdLCJuYW1lcyI6WyJBdXRoIiwidXNlciIsImlzTG9nZ2VkSW4iLCJkaXNwbGF5TmFtZSIsInNpZ25PdXQiLCJzaWduSW4iLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJzdHlsZXMiLCJhdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFFBQU07QUFDSkMsUUFBSSxFQUFFO0FBQUVDLGdCQUFGO0FBQWNDO0FBQWQsS0FERjtBQUVKQyxXQUZJO0FBR0pDO0FBSEksTUFJRkMsd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FKZDtBQUtBLFNBQ0U7QUFBSyxhQUFTLEVBQUVDLHdEQUFNLENBQUNDLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsVUFBVSxHQUNULG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUMsV0FBSixDQURGLEVBRUU7QUFBUSxXQUFPLEVBQUVDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsQ0FEUyxHQU1UO0FBQVEsV0FBTyxFQUFFQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosQ0FERjtBQVlEIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hdXRoL2F1dGguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEF1dGhDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXV0aENvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYXV0aC5tb2R1bGUuc2Nzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xuICBjb25zdCB7XG4gICAgdXNlcjogeyBpc0xvZ2dlZEluLCBkaXNwbGF5TmFtZSB9LFxuICAgIHNpZ25PdXQsXG4gICAgc2lnbkluLFxuICB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRofT5cbiAgICAgIHtpc0xvZ2dlZEluID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxwPntkaXNwbGF5TmFtZX08L3A+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzaWduT3V0fT5TaWduIE91dDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c2lnbklufT5TaWduIEluPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/auth.jsx\n");

/***/ }),

/***/ "./components/auth/auth.module.scss":
/*!******************************************!*\
  !*** ./components/auth/auth.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"auth\": \"auth_auth__3QGeh\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2F1dGgvYXV0aC5tb2R1bGUuc2Nzcz9kMjA4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9hdXRoL2F1dGgubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhdXRoXCI6IFwiYXV0aF9hdXRoX18zUUdlaFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/auth/auth.module.scss\n");

/***/ }),

/***/ "./components/home/home.jsx":
/*!**********************************!*\
  !*** ./components/home/home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module.scss */ \"./components/home/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth */ \"./components/auth/auth.jsx\");\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/authContext */ \"./context/authContext.js\");\n/* harmony import */ var _utils_airtableUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/airtableUtils */ \"./utils/airtableUtils.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/orrymevorach/Desktop/pga-next/components/home/home.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Home() {\n  const {\n    user: {\n      isLoggedIn,\n      oAuthId\n    }\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_context_authContext__WEBPACK_IMPORTED_MODULE_3__[\"AuthContext\"]);\n  const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (isLoggedIn) {\n      Object(_utils_airtableUtils__WEBPACK_IMPORTED_MODULE_4__[\"getAirtableData\"])(\"Draft Selections\", checkForTeam);\n    }\n  }, [isLoggedIn]);\n\n  function checkForTeam(records) {\n    if (records.length === 0) {\n      console.log(\"No teams exist\");\n      Router.push(\"/draftBoard\");\n    }\n\n    let hasTeam = false;\n\n    for (let i = 0; i < records.length; i++) {\n      const record = records[i];\n\n      if (record.fields.userId === oAuthId) {\n        hasTeam = true;\n      }\n    }\n\n    if (hasTeam === true) {\n      console.log(\"User has a team\");\n      Router.push({\n        pathname: \"/team\",\n        query: {\n          userId: oAuthId\n        }\n      });\n    } else {\n      Router.push(\"/draftBoard\");\n    }\n  }\n\n  return __jsx(\"div\", {\n    className: _home_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.app,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(_auth_auth__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, \"Welcome to the Golf Pool\"));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvaG9tZS5qc3g/Yjk2YyJdLCJuYW1lcyI6WyJIb21lIiwidXNlciIsImlzTG9nZ2VkSW4iLCJvQXV0aElkIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiUm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZ2V0QWlydGFibGVEYXRhIiwiY2hlY2tGb3JUZWFtIiwicmVjb3JkcyIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiaGFzVGVhbSIsImkiLCJyZWNvcmQiLCJmaWVsZHMiLCJ1c2VySWQiLCJwYXRobmFtZSIsInF1ZXJ5Iiwic3R5bGVzIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixRQUFNO0FBQ0pDLFFBQUksRUFBRTtBQUFFQyxnQkFBRjtBQUFjQztBQUFkO0FBREYsTUFFRkMsd0RBQVUsQ0FBQ0MsZ0VBQUQsQ0FGZDtBQUlBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSU4sVUFBSixFQUFnQjtBQUNkTyxrRkFBZSxDQUFDLGtCQUFELEVBQXFCQyxZQUFyQixDQUFmO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ1IsVUFBRCxDQUpNLENBQVQ7O0FBTUEsV0FBU1EsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDN0IsUUFBSUEsT0FBTyxDQUFDQyxNQUFSLEtBQW1CLENBQXZCLEVBQTBCO0FBQ3hCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBUixZQUFNLENBQUNTLElBQVAsQ0FBWSxhQUFaO0FBQ0Q7O0FBQ0QsUUFBSUMsT0FBTyxHQUFHLEtBQWQ7O0FBQ0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixPQUFPLENBQUNDLE1BQTVCLEVBQW9DSyxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDLFlBQU1DLE1BQU0sR0FBR1AsT0FBTyxDQUFDTSxDQUFELENBQXRCOztBQUNBLFVBQUlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxNQUFkLEtBQXlCakIsT0FBN0IsRUFBc0M7QUFDcENhLGVBQU8sR0FBRyxJQUFWO0FBQ0Q7QUFDRjs7QUFDRCxRQUFJQSxPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDcEJILGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FSLFlBQU0sQ0FBQ1MsSUFBUCxDQUFZO0FBQ1ZNLGdCQUFRLEVBQUUsT0FEQTtBQUVWQyxhQUFLLEVBQUU7QUFBRUYsZ0JBQU0sRUFBRWpCO0FBQVY7QUFGRyxPQUFaO0FBSUQsS0FORCxNQU1PO0FBQ0xHLFlBQU0sQ0FBQ1MsSUFBUCxDQUFZLGFBQVo7QUFDRDtBQUNGOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUVRLHdEQUFNLENBQUNDLEdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRkYsQ0FERjtBQU1EIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2hvbWUuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9ob21lLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vYXV0aC9hdXRoXCI7XG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L2F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBnZXRBaXJ0YWJsZURhdGEgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYWlydGFibGVVdGlsc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHtcbiAgICB1c2VyOiB7IGlzTG9nZ2VkSW4sIG9BdXRoSWQgfSxcbiAgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xuXG4gIGNvbnN0IFJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgIGdldEFpcnRhYmxlRGF0YShcIkRyYWZ0IFNlbGVjdGlvbnNcIiwgY2hlY2tGb3JUZWFtKTtcbiAgICB9XG4gIH0sIFtpc0xvZ2dlZEluXSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tGb3JUZWFtKHJlY29yZHMpIHtcbiAgICBpZiAocmVjb3Jkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiTm8gdGVhbXMgZXhpc3RcIik7XG4gICAgICBSb3V0ZXIucHVzaChcIi9kcmFmdEJvYXJkXCIpO1xuICAgIH1cbiAgICBsZXQgaGFzVGVhbSA9IGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVjb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcmVjb3JkID0gcmVjb3Jkc1tpXTtcbiAgICAgIGlmIChyZWNvcmQuZmllbGRzLnVzZXJJZCA9PT0gb0F1dGhJZCkge1xuICAgICAgICBoYXNUZWFtID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1RlYW0gPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVXNlciBoYXMgYSB0ZWFtXCIpO1xuICAgICAgUm91dGVyLnB1c2goe1xuICAgICAgICBwYXRobmFtZTogXCIvdGVhbVwiLFxuICAgICAgICBxdWVyeTogeyB1c2VySWQ6IG9BdXRoSWQgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBSb3V0ZXIucHVzaChcIi9kcmFmdEJvYXJkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hcHB9PlxuICAgICAgPEF1dGggLz5cbiAgICAgIDxoMT5XZWxjb21lIHRvIHRoZSBHb2xmIFBvb2w8L2gxPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/home.jsx\n");

/***/ }),

/***/ "./components/home/home.module.scss":
/*!******************************************!*\
  !*** ./components/home/home.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"app\": \"home_app__3SB2F\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvaG9tZS5tb2R1bGUuc2Nzcz82M2VmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob21lL2hvbWUubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhcHBcIjogXCJob21lX2FwcF9fM1NCMkZcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/home/home.module.scss\n");

/***/ }),

/***/ "./context/authContext.js":
/*!********************************!*\
  !*** ./context/authContext.js ***!
  \********************************/
/*! exports provided: AuthContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthContext\", function() { return AuthContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AuthProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useAuth */ \"./hooks/useAuth.js\");\nvar _jsxFileName = \"/Users/orrymevorach/Desktop/pga-next/context/authContext.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst AuthContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])();\nfunction AuthProvider({\n  children\n}) {\n  const auth = Object(_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  return __jsx(AuthContext.Provider, {\n    value: _objectSpread({}, auth),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, children);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L2F1dGhDb250ZXh0LmpzPzYwZDQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJhdXRoIiwidXNlQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLFdBQVcsR0FBR0MsMkRBQWEsRUFBakM7QUFFUSxTQUFTQyxZQUFULENBQXNCO0FBQUVDO0FBQUYsQ0FBdEIsRUFBb0M7QUFDakQsUUFBTUMsSUFBSSxHQUFHQyw4REFBTyxFQUFwQjtBQUNBLFNBQ0UsTUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLG9CQUFPRCxJQUFQLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkNELFFBQTNDLENBREY7QUFHRCIsImZpbGUiOiIuL2NvbnRleHQvYXV0aENvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUF1dGggZnJvbSBcIi4uL2hvb2tzL3VzZUF1dGhcIjtcblxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGF1dGggPSB1c2VBdXRoKCk7XG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IC4uLmF1dGggfX0+e2NoaWxkcmVufTwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/authContext.js\n");

/***/ }),

/***/ "./hooks/useAuth.js":
/*!**************************!*\
  !*** ./hooks/useAuth.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);\n\n // import { useRouter } from \"next/router\";\n\nconst defaultUser = {\n  isLoggedIn: false,\n  displayName: \"\"\n};\nconst firebaseConfig = {\"apiKey\":\"AIzaSyAxzP3rrdQYUxWO8JvAkuao8R2Q3lTu93Q\",\"authDomain\":\"golf-draft-fdf5b.firebaseapp.com\",\"databaseURL\":\"https://golf-draft-fdf5b.firebaseio.com\",\"projectId\":\"golf-draft-fdf5b\",\"storageBucket\":\"golf-draft-fdf5b.appspot.com\",\"messagingSenderId\":\"696363008338\",\"appId\":\"1:696363008338:web:38f1894846cdf9bd66ba8b\",\"measurementId\":\"G-SLHJKPLPH6\"};\n\ntry {\n  Object(firebase__WEBPACK_IMPORTED_MODULE_1__[\"initializeApp\"])(firebaseConfig);\n} catch (err) {\n  console.log(\"err\", err);\n}\n\nfunction useAuth() {\n  // const Router = useRouter();\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultUser); // const { isLoggedIn } = user;\n  // const query = Router.query;\n  // useEffect(() => {\n  //   if (!isLoggedIn && !query) {\n  //     Router.push(\"/\");\n  //   }\n  // }, [isLoggedIn, query]);\n\n  function signIn() {\n    const provider = new firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].GoogleAuthProvider();\n    Object(firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"])().signInWithPopup(provider).then(res => {\n      console.log(\"signed in\");\n      setUser({\n        isLoggedIn: true,\n        displayName: res.user.displayName,\n        oAuthId: res.user.uid\n      });\n    }).catch(err => {\n      console.error(err);\n      setUser({\n        isLoggedIn: false,\n        displayName: \"\"\n      });\n    });\n  }\n\n  function signOut() {\n    Object(firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"])().signOut().then(function () {\n      console.log(\"sign out\");\n      setUser({\n        isLoggedIn: false,\n        displayName: \"\"\n      });\n    }).catch(function (error) {\n      console.error(error);\n    });\n  }\n\n  return {\n    user,\n    signIn,\n    signOut\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBdXRoLmpzP2RiZTAiXSwibmFtZXMiOlsiZGVmYXVsdFVzZXIiLCJpc0xvZ2dlZEluIiwiZGlzcGxheU5hbWUiLCJmaXJlYmFzZUNvbmZpZyIsInByb2Nlc3MiLCJpbml0aWFsaXplQXBwIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZUF1dGgiLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwic2lnbkluIiwicHJvdmlkZXIiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbkluV2l0aFBvcHVwIiwidGhlbiIsInJlcyIsIm9BdXRoSWQiLCJ1aWQiLCJjYXRjaCIsImVycm9yIiwic2lnbk91dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUc7QUFDbEJDLFlBQVUsRUFBRSxLQURNO0FBRWxCQyxhQUFXLEVBQUU7QUFGSyxDQUFwQjtBQUtBLE1BQU1DLGNBQWMsR0FBR0MsZ1dBQXZCOztBQUVBLElBQUk7QUFDRkMsZ0VBQWEsQ0FBQ0YsY0FBRCxDQUFiO0FBQ0QsQ0FGRCxDQUVFLE9BQU9HLEdBQVAsRUFBWTtBQUNaQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CRixHQUFuQjtBQUNEOztBQUVjLFNBQVNHLE9BQVQsR0FBbUI7QUFDaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUNaLFdBQUQsQ0FBaEMsQ0FGZ0MsQ0FHaEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBU2EsTUFBVCxHQUFrQjtBQUNoQixVQUFNQyxRQUFRLEdBQUcsSUFBSUMsNkNBQUksQ0FBQ0Msa0JBQVQsRUFBakI7QUFDQUQseURBQUksR0FDREUsZUFESCxDQUNtQkgsUUFEbkIsRUFFR0ksSUFGSCxDQUVRQyxHQUFHLElBQUk7QUFDWFosYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRyxhQUFPLENBQUM7QUFDTlYsa0JBQVUsRUFBRSxJQUROO0FBRU5DLG1CQUFXLEVBQUVpQixHQUFHLENBQUNULElBQUosQ0FBU1IsV0FGaEI7QUFHTmtCLGVBQU8sRUFBRUQsR0FBRyxDQUFDVCxJQUFKLENBQVNXO0FBSFosT0FBRCxDQUFQO0FBS0QsS0FUSCxFQVVHQyxLQVZILENBVVNoQixHQUFHLElBQUk7QUFDWkMsYUFBTyxDQUFDZ0IsS0FBUixDQUFjakIsR0FBZDtBQUNBSyxhQUFPLENBQUM7QUFDTlYsa0JBQVUsRUFBRSxLQUROO0FBRU5DLG1CQUFXLEVBQUU7QUFGUCxPQUFELENBQVA7QUFJRCxLQWhCSDtBQWlCRDs7QUFFRCxXQUFTc0IsT0FBVCxHQUFtQjtBQUNqQlQseURBQUksR0FDRFMsT0FESCxHQUVHTixJQUZILENBRVEsWUFBWTtBQUNoQlgsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRyxhQUFPLENBQUM7QUFDTlYsa0JBQVUsRUFBRSxLQUROO0FBRU5DLG1CQUFXLEVBQUU7QUFGUCxPQUFELENBQVA7QUFJRCxLQVJILEVBU0dvQixLQVRILENBU1MsVUFBVUMsS0FBVixFQUFpQjtBQUN0QmhCLGFBQU8sQ0FBQ2dCLEtBQVIsQ0FBY0EsS0FBZDtBQUNELEtBWEg7QUFZRDs7QUFFRCxTQUFPO0FBQ0xiLFFBREs7QUFFTEcsVUFGSztBQUdMVztBQUhLLEdBQVA7QUFLRCIsImZpbGUiOiIuL2hvb2tzL3VzZUF1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhdXRoLCBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlXCI7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgZGVmYXVsdFVzZXIgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBkaXNwbGF5TmFtZTogXCJcIixcbn07XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ09ORklHO1xuXG50cnkge1xuICBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbn0gY2F0Y2ggKGVycikge1xuICBjb25zb2xlLmxvZyhcImVyclwiLCBlcnIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICAvLyBjb25zdCBSb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoZGVmYXVsdFVzZXIpO1xuICAvLyBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZXI7XG4gIC8vIGNvbnN0IHF1ZXJ5ID0gUm91dGVyLnF1ZXJ5O1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKCFpc0xvZ2dlZEluICYmICFxdWVyeSkge1xuICAvLyAgICAgUm91dGVyLnB1c2goXCIvXCIpO1xuICAvLyAgIH1cbiAgLy8gfSwgW2lzTG9nZ2VkSW4sIHF1ZXJ5XSk7XG5cbiAgZnVuY3Rpb24gc2lnbkluKCkge1xuICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG4gICAgYXV0aCgpXG4gICAgICAuc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduZWQgaW5cIik7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IHJlcy51c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgIG9BdXRoSWQ6IHJlcy51c2VyLnVpZCxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaWduT3V0KCkge1xuICAgIGF1dGgoKVxuICAgICAgLnNpZ25PdXQoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNpZ24gb3V0XCIpO1xuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgICBkaXNwbGF5TmFtZTogXCJcIixcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1c2VyLFxuICAgIHNpZ25JbixcbiAgICBzaWduT3V0LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/useAuth.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/home/home */ \"./components/home/home.jsx\");\nvar _jsxFileName = \"/Users/orrymevorach/Desktop/pga-next/pages/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction App() {\n  return __jsx(_components_home_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 10\n    }\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJBcHAiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxHQUFlO0FBQ2IsU0FBTyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEOztBQUVjQSxrRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuLi9jb21wb25lbnRzL2hvbWUvaG9tZVwiO1xuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiA8SG9tZSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "./utils/airtableUtils.js":
/*!********************************!*\
  !*** ./utils/airtableUtils.js ***!
  \********************************/
/*! exports provided: base, getAirtableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"base\", function() { return base; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAirtableData\", function() { return getAirtableData; });\n/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! airtable */ \"airtable\");\n/* harmony import */ var airtable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(airtable__WEBPACK_IMPORTED_MODULE_0__);\n\nconst apiKey = \"keyv1sz0w4PkRBufa\";\nairtable__WEBPACK_IMPORTED_MODULE_0___default.a.configure({\n  endpointUrl: \"https://api.airtable.com\",\n  apiKey\n});\nconst base = new airtable__WEBPACK_IMPORTED_MODULE_0___default.a({\n  apiKey\n}).base(\"appMTP6wCJqbTzZj2\");\nconst getAirtableData = (table, callback) => {\n  base(table).select({\n    view: \"Grid view\"\n  }).eachPage(function page(records) {\n    callback(records);\n  }, function done(err) {\n    if (err) {\n      console.error(err);\n      return;\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9haXJ0YWJsZVV0aWxzLmpzP2NkMGUiXSwibmFtZXMiOlsiYXBpS2V5IiwicHJvY2VzcyIsIkFpcnRhYmxlIiwiY29uZmlndXJlIiwiZW5kcG9pbnRVcmwiLCJiYXNlIiwiZ2V0QWlydGFibGVEYXRhIiwidGFibGUiLCJjYWxsYmFjayIsInNlbGVjdCIsInZpZXciLCJlYWNoUGFnZSIsInBhZ2UiLCJyZWNvcmRzIiwiZG9uZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBZjtBQUVBQywrQ0FBUSxDQUFDQyxTQUFULENBQW1CO0FBQ2pCQyxhQUFXLEVBQUUsMEJBREk7QUFFakJKO0FBRmlCLENBQW5CO0FBS08sTUFBTUssSUFBSSxHQUFHLElBQUlILCtDQUFKLENBQWE7QUFBRUY7QUFBRixDQUFiLEVBQXlCSyxJQUF6QixDQUE4QixtQkFBOUIsQ0FBYjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxDQUFDQyxLQUFELEVBQVFDLFFBQVIsS0FBcUI7QUFDbERILE1BQUksQ0FBQ0UsS0FBRCxDQUFKLENBQ0dFLE1BREgsQ0FDVTtBQUNOQyxRQUFJLEVBQUU7QUFEQSxHQURWLEVBSUdDLFFBSkgsQ0FLSSxTQUFTQyxJQUFULENBQWNDLE9BQWQsRUFBdUI7QUFDckJMLFlBQVEsQ0FBQ0ssT0FBRCxDQUFSO0FBQ0QsR0FQTCxFQVFJLFNBQVNDLElBQVQsQ0FBY0MsR0FBZCxFQUFtQjtBQUNqQixRQUFJQSxHQUFKLEVBQVM7QUFDUEMsYUFBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQTtBQUNEO0FBQ0YsR0FiTDtBQWVELENBaEJNIiwiZmlsZSI6Ii4vdXRpbHMvYWlydGFibGVVdGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBaXJ0YWJsZSBmcm9tIFwiYWlydGFibGVcIjtcblxuY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuQUlSVEFCTEVfQVBJX0tFWTtcblxuQWlydGFibGUuY29uZmlndXJlKHtcbiAgZW5kcG9pbnRVcmw6IFwiaHR0cHM6Ly9hcGkuYWlydGFibGUuY29tXCIsXG4gIGFwaUtleSxcbn0pO1xuXG5leHBvcnQgY29uc3QgYmFzZSA9IG5ldyBBaXJ0YWJsZSh7IGFwaUtleSB9KS5iYXNlKFwiYXBwTVRQNndDSnFiVHpaajJcIik7XG5cbmV4cG9ydCBjb25zdCBnZXRBaXJ0YWJsZURhdGEgPSAodGFibGUsIGNhbGxiYWNrKSA9PiB7XG4gIGJhc2UodGFibGUpXG4gICAgLnNlbGVjdCh7XG4gICAgICB2aWV3OiBcIkdyaWQgdmlld1wiLFxuICAgIH0pXG4gICAgLmVhY2hQYWdlKFxuICAgICAgZnVuY3Rpb24gcGFnZShyZWNvcmRzKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlY29yZHMpO1xuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/airtableUtils.js\n");

/***/ }),

/***/ "airtable":
/*!***************************!*\
  !*** external "airtable" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"airtable\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhaXJ0YWJsZVwiPzQxYzgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYWlydGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhaXJ0YWJsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///airtable\n");

/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });