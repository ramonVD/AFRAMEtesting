/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/testComponent.js":
/*!*****************************************!*\
  !*** ./src/components/testComponent.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var animationCounter = 0;\nAFRAME.registerComponent('boxtest', {\n  schema: {\n    width: {\n      type: 'number',\n      \"default\": 1\n    },\n    height: {\n      type: 'number',\n      \"default\": 1\n    },\n    depth: {\n      type: 'number',\n      \"default\": 1\n    }\n  },\n  init: function init() {\n    var data = this.data;\n    var el = this.el;\n    this.geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);\n    this.material = new THREE.MeshStandardMaterial({\n      color: data.color\n    });\n    this.mesh = new THREE.Mesh(this.geometry, this.material);\n    el.setObject3D('mesh', this.mesh);\n  },\n\n  /**\n   * Update the mesh in response to property updates.\n   */\n  update: function update(oldData) {\n    var data = this.data;\n    var el = this.el; // If `oldData` is empty, then this means we're in the initialization process.\n    // No need to update.\n\n    if (Object.keys(oldData).length === 0) {\n      return;\n    } // Geometry-related properties changed. Update the geometry.\n\n\n    if (data.width !== oldData.width || data.height !== oldData.height || data.depth !== oldData.depth) {\n      el.getObject3D('mesh').geometry = new THREE.BoxBufferGeometry(data.width, data.height, data.depth);\n    } // Material-related properties changed. Update the material.\n\n\n    if (data.color !== oldData.color) {\n      el.getObject3D('mesh').material.color = new THREE.Color(data.color);\n    }\n  },\n  remove: function remove() {\n    this.el.removeObject3D('mesh');\n  }\n});\nAFRAME.registerComponent(\"scale-on-mouseenter\", {\n  schema: {\n    to: {\n      \"default\": \"3 3 3\",\n      type: \"vec3\"\n    },\n    from: {\n      \"default\": \"2.0 2.0 2.0\",\n      type: \"vec3\"\n    },\n    counter: {\n      \"default\": 0,\n      type: \"int\"\n    },\n    bigPulse: {\n      \"default\": \"5 5 5\",\n      type: \"vec3\"\n    }\n  },\n  init: function init() {\n    var data = this.data;\n    var me = this.el;\n    me.addEventListener(\"mouseenter\", function () {\n      me.object3D.scale.copy(data.to);\n    });\n    me.addEventListener(\"mouseleave\", function () {\n      me.object3D.scale.copy(data.from);\n    });\n  }\n}); //Need to acount for framerate I guess...\n\nAFRAME.registerComponent(\"beating-heart\", {\n  schema: {},\n  tick: function tick() {\n    animationCounter += 1;\n\n    if (animationCounter % 60 == 0) {\n      this.el.object3D.scale.copy(new THREE.Vector3(2.5, 2.5, 2.5));\n    } else if (animationCounter % 80 == 0) {\n      this.el.object3D.scale.copy(new THREE.Vector3(2, 2, 2));\n      animationCounter = 0;\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/testComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./components/testComponent */ \"./src/components/testComponent.js\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });