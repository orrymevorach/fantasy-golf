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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/authContext */ \"./context/authContext.js\");\nvar _jsxFileName = \"/Users/orrymevorach/Desktop/pga-next/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return __jsx(_context_authContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsU0FDRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtEOztBQUVjRixvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gXCIuLi9jb250ZXh0L2F1dGhDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9BdXRoUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "firebase":
/*!***************************!*\
  !*** external "firebase" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZVwiPzYyNDIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase\n");

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