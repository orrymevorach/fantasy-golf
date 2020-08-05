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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return useAuth; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ \"firebase\");\n/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst {\n  publicRuntimeConfig\n} = next_config__WEBPACK_IMPORTED_MODULE_2___default()(); // import { useRouter } from \"next/router\";\n\nconst defaultUser = {\n  isLoggedIn: false,\n  displayName: \"\"\n};\nconst firebaseConfig = {\n  apiKey: publicRuntimeConfig.FIREBASE_API_KEY,\n  authDomain: \"golf-draft-fdf5b.firebaseapp.com\",\n  databaseURL: \"https://golf-draft-fdf5b.firebaseio.com\",\n  projectId: \"golf-draft-fdf5b\",\n  storageBucket: \"golf-draft-fdf5b.appspot.com\",\n  messagingSenderId: \"696363008338\",\n  appId: \"1:696363008338:web:38f1894846cdf9bd66ba8b\",\n  measurementId: \"G-SLHJKPLPH6\"\n};\n\ntry {\n  Object(firebase__WEBPACK_IMPORTED_MODULE_1__[\"initializeApp\"])(firebaseConfig);\n} catch (err) {\n  console.log(\"err\", err);\n}\n\nfunction useAuth() {\n  // const Router = useRouter();\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(defaultUser); // const { isLoggedIn } = user;\n  // const query = Router.query;\n  // useEffect(() => {\n  //   if (!isLoggedIn && !query) {\n  //     Router.push(\"/\");\n  //   }\n  // }, [isLoggedIn, query]);\n\n  function signIn() {\n    const provider = new firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"].GoogleAuthProvider();\n    Object(firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"])().signInWithPopup(provider).then(res => {\n      console.log(\"signed in\");\n      setUser({\n        isLoggedIn: true,\n        displayName: res.user.displayName,\n        oAuthId: res.user.uid\n      });\n    }).catch(err => {\n      console.error(err);\n      setUser({\n        isLoggedIn: false,\n        displayName: \"\"\n      });\n    });\n  }\n\n  function signOut() {\n    Object(firebase__WEBPACK_IMPORTED_MODULE_1__[\"auth\"])().signOut().then(function () {\n      console.log(\"sign out\");\n      setUser({\n        isLoggedIn: false,\n        displayName: \"\"\n      });\n    }).catch(function (error) {\n      console.error(error);\n    });\n  }\n\n  return {\n    user,\n    signIn,\n    signOut\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBdXRoLmpzP2RiZTAiXSwibmFtZXMiOlsicHVibGljUnVudGltZUNvbmZpZyIsImdldENvbmZpZyIsImRlZmF1bHRVc2VyIiwiaXNMb2dnZWRJbiIsImRpc3BsYXlOYW1lIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJGSVJFQkFTRV9BUElfS0VZIiwiYXV0aERvbWFpbiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiaW5pdGlhbGl6ZUFwcCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ1c2VBdXRoIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsInNpZ25JbiIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInRoZW4iLCJyZXMiLCJvQXV0aElkIiwidWlkIiwiY2F0Y2giLCJlcnJvciIsInNpZ25PdXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQUVBO0FBQUYsSUFBMEJDLGtEQUFTLEVBQXpDLEMsQ0FDQTs7QUFFQSxNQUFNQyxXQUFXLEdBQUc7QUFDbEJDLFlBQVUsRUFBRSxLQURNO0FBRWxCQyxhQUFXLEVBQUU7QUFGSyxDQUFwQjtBQUtBLE1BQU1DLGNBQWMsR0FBRztBQUNyQkMsUUFBTSxFQUFFTixtQkFBbUIsQ0FBQ08sZ0JBRFA7QUFFckJDLFlBQVUsRUFBRSxrQ0FGUztBQUdyQkMsYUFBVyxFQUFFLHlDQUhRO0FBSXJCQyxXQUFTLEVBQUUsa0JBSlU7QUFLckJDLGVBQWEsRUFBRSw4QkFMTTtBQU1yQkMsbUJBQWlCLEVBQUUsY0FORTtBQU9yQkMsT0FBSyxFQUFFLDJDQVBjO0FBUXJCQyxlQUFhLEVBQUU7QUFSTSxDQUF2Qjs7QUFXQSxJQUFJO0FBQ0ZDLGdFQUFhLENBQUNWLGNBQUQsQ0FBYjtBQUNELENBRkQsQ0FFRSxPQUFPVyxHQUFQLEVBQVk7QUFDWkMsU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkYsR0FBbkI7QUFDRDs7QUFFYyxTQUFTRyxPQUFULEdBQW1CO0FBQ2hDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDcEIsV0FBRCxDQUFoQyxDQUZnQyxDQUdoQztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFTcUIsTUFBVCxHQUFrQjtBQUNoQixVQUFNQyxRQUFRLEdBQUcsSUFBSUMsNkNBQUksQ0FBQ0Msa0JBQVQsRUFBakI7QUFDQUQseURBQUksR0FDREUsZUFESCxDQUNtQkgsUUFEbkIsRUFFR0ksSUFGSCxDQUVRQyxHQUFHLElBQUk7QUFDWFosYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBRyxhQUFPLENBQUM7QUFDTmxCLGtCQUFVLEVBQUUsSUFETjtBQUVOQyxtQkFBVyxFQUFFeUIsR0FBRyxDQUFDVCxJQUFKLENBQVNoQixXQUZoQjtBQUdOMEIsZUFBTyxFQUFFRCxHQUFHLENBQUNULElBQUosQ0FBU1c7QUFIWixPQUFELENBQVA7QUFLRCxLQVRILEVBVUdDLEtBVkgsQ0FVU2hCLEdBQUcsSUFBSTtBQUNaQyxhQUFPLENBQUNnQixLQUFSLENBQWNqQixHQUFkO0FBQ0FLLGFBQU8sQ0FBQztBQUNObEIsa0JBQVUsRUFBRSxLQUROO0FBRU5DLG1CQUFXLEVBQUU7QUFGUCxPQUFELENBQVA7QUFJRCxLQWhCSDtBQWlCRDs7QUFFRCxXQUFTOEIsT0FBVCxHQUFtQjtBQUNqQlQseURBQUksR0FDRFMsT0FESCxHQUVHTixJQUZILENBRVEsWUFBWTtBQUNoQlgsYUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRyxhQUFPLENBQUM7QUFDTmxCLGtCQUFVLEVBQUUsS0FETjtBQUVOQyxtQkFBVyxFQUFFO0FBRlAsT0FBRCxDQUFQO0FBSUQsS0FSSCxFQVNHNEIsS0FUSCxDQVNTLFVBQVVDLEtBQVYsRUFBaUI7QUFDdEJoQixhQUFPLENBQUNnQixLQUFSLENBQWNBLEtBQWQ7QUFDRCxLQVhIO0FBWUQ7O0FBRUQsU0FBTztBQUNMYixRQURLO0FBRUxHLFVBRks7QUFHTFc7QUFISyxHQUFQO0FBS0QiLCJmaWxlIjoiLi9ob29rcy91c2VBdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCwgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZVwiO1xuaW1wb3J0IGdldENvbmZpZyBmcm9tIFwibmV4dC9jb25maWdcIjtcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgZGVmYXVsdFVzZXIgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBkaXNwbGF5TmFtZTogXCJcIixcbn07XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHB1YmxpY1J1bnRpbWVDb25maWcuRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogXCJnb2xmLWRyYWZ0LWZkZjViLmZpcmViYXNlYXBwLmNvbVwiLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2dvbGYtZHJhZnQtZmRmNWIuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBcImdvbGYtZHJhZnQtZmRmNWJcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJnb2xmLWRyYWZ0LWZkZjViLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjY5NjM2MzAwODMzOFwiLFxuICBhcHBJZDogXCIxOjY5NjM2MzAwODMzODp3ZWI6MzhmMTg5NDg0NmNkZjliZDY2YmE4YlwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctU0xISktQTFBINlwiLFxufTtcblxudHJ5IHtcbiAgaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG59IGNhdGNoIChlcnIpIHtcbiAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXV0aCgpIHtcbiAgLy8gY29uc3QgUm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKGRlZmF1bHRVc2VyKTtcbiAgLy8gY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VyO1xuICAvLyBjb25zdCBxdWVyeSA9IFJvdXRlci5xdWVyeTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghaXNMb2dnZWRJbiAmJiAhcXVlcnkpIHtcbiAgLy8gICAgIFJvdXRlci5wdXNoKFwiL1wiKTtcbiAgLy8gICB9XG4gIC8vIH0sIFtpc0xvZ2dlZEluLCBxdWVyeV0pO1xuXG4gIGZ1bmN0aW9uIHNpZ25JbigpIHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBhdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgIGF1dGgoKVxuICAgICAgLnNpZ25JbldpdGhQb3B1cChwcm92aWRlcilcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic2lnbmVkIGluXCIpO1xuICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICBpc0xvZ2dlZEluOiB0cnVlLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiByZXMudXNlci5kaXNwbGF5TmFtZSxcbiAgICAgICAgICBvQXV0aElkOiByZXMudXNlci51aWQsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHNldFVzZXIoe1xuICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgICAgICAgIGRpc3BsYXlOYW1lOiBcIlwiLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2lnbk91dCgpIHtcbiAgICBhdXRoKClcbiAgICAgIC5zaWduT3V0KClcbiAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzaWduIG91dFwiKTtcbiAgICAgICAgc2V0VXNlcih7XG4gICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgZGlzcGxheU5hbWU6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXNlcixcbiAgICBzaWduSW4sXG4gICAgc2lnbk91dCxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useAuth.js\n");

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

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/config\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2NvbmZpZ1wiP2Y4NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2NvbmZpZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/config\n");

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