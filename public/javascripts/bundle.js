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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/bundle.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/apple.jpeg":
/*!*******************************!*\
  !*** ./src/images/apple.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/apple.jpeg";

/***/ }),

/***/ "./src/images/lenna.jpeg":
/*!*******************************!*\
  !*** ./src/images/lenna.jpeg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/lenna.jpeg";

/***/ }),

/***/ "./src/javascripts/GrayScale.ts":
/*!**************************************!*\
  !*** ./src/javascripts/GrayScale.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var GrayScale = document.getElementById('GrayScale');
GrayScale.addEventListener('click', function () {
    var canvas = document.getElementById('canvas3');
    if (!canvas) {
        console.log('Canvas要素の取得に失敗');
        return;
    }
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = "../images/lenna.jpeg";
    image.onload = function () {
        context.drawImage(image, 0, 0);
        var imageData = context.getImageData(0, 0, image.width, image.height);
        var length = imageData.data.length;
        var pixel = imageData.data;
        for (var i = 0; i < length; i += 4) {
            var r = pixel[i + 0];
            var g = pixel[i + 1];
            var b = pixel[i + 2];
            var gray = 0.30 * r + 0.59 * g + 0.11 * b;
            pixel[i + 0] = gray;
            pixel[i + 1] = gray;
            pixel[i + 2] = gray;
            pixel[i + 3] = pixel[i + 3];
        }
        context.putImageData(imageData, 0, 0);
    };
}, false);


/***/ }),

/***/ "./src/javascripts/ImageLoder.ts":
/*!***************************************!*\
  !*** ./src/javascripts/ImageLoder.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ../images/lenna.jpeg */ "./src/images/lenna.jpeg");
__webpack_require__(/*! ../images/apple.jpeg */ "./src/images/apple.jpeg");


/***/ }),

/***/ "./src/javascripts/OtsuBinary.ts":
/*!***************************************!*\
  !*** ./src/javascripts/OtsuBinary.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var OtsuBinary = document.getElementById('OtsuBinary');
OtsuBinary.addEventListener('click', function () {
    var canvas = document.getElementById('canvas4');
    if (!canvas) {
        console.log('Canvas要素の取得に失敗');
        return;
    }
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = "../images/lenna.jpeg";
    image.onload = function () {
        context.drawImage(image, 0, 0);
        var imageData = context.getImageData(0, 0, image.width, image.height);
        var width = imageData.width;
        var height = imageData.height;
        var length = imageData.data.length;
        var pixel = imageData.data;
        var hist = new Array(256);
        for (var i = 0; i < 256; i++)
            hist[i] = 0;
        for (var i = 0; i < length; i += 4) {
            var r = pixel[i + 0];
            var g = pixel[i + 1];
            var b = pixel[i + 2];
            var gray = Math.round(0.30 * r + 0.59 * g + 0.11 * b);
            pixel[i + 0] = gray;
            pixel[i + 1] = gray;
            pixel[i + 2] = gray;
            pixel[i + 3] = pixel[i + 3];
            hist[gray] += 1;
        }
        var thresh = getThreshold(hist, 256);
        //const thresh = 120;
        for (var i = 0; i < length; i += 4) {
            var r = pixel[i + 0];
            var binary = void 0;
            if (r <= thresh) {
                binary = 255;
            }
            else {
                binary = 0;
            }
            pixel[i + 0] = binary;
            pixel[i + 1] = binary;
            pixel[i + 2] = binary;
            pixel[i + 3] = pixel[i + 3];
        }
        context.putImageData(imageData, 0, 0);
    };
}, false);
var getThreshold = function (hist, n) {
    var max = (1000.0);
    var thresh = 0;
    var sa, sb, da, db;
    var ma, mb, mt;
    var wa, wb, wt;
    var kai;
    for (var i = 1; i < n - 1; i++) {
        da = 0;
        sa = 0;
        for (var j = 0; j < i; j++) {
            da += (hist[j] * j);
            sa += hist[j];
        }
        db = 0;
        sb = 0;
        for (var j = i; j < n; j++) {
            db += (hist[j] * j);
            sb += hist[j];
        }
        if (sa != 0.0) {
            ma = da / sa;
        }
        else {
            ma = 0.0;
        }
        if (sb != 0.0) {
            mb = db / sb;
        }
        else {
            mb = 0.0;
        }
        mt = (da + db) / (sa + sb);
        wa = sa / (sa + sb);
        wb = sb / (sa + sb);
        kai = wa * (ma - mt) * (ma - mt) + (wb * (mb - mt) * (mb - mt));
        if (max < kai) {
            max = kai;
            thresh = i;
        }
    }
    return thresh;
};


/***/ }),

/***/ "./src/javascripts/Reverse.ts":
/*!************************************!*\
  !*** ./src/javascripts/Reverse.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Reverse = document.getElementById('Reverse');
Reverse.addEventListener('click', function () {
    var canvas = document.getElementById('canvas2');
    if (!canvas) {
        console.log('Canvas要素の取得に失敗');
        return;
    }
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = "../images/lenna.jpeg";
    image.onload = function () {
        context.drawImage(image, 0, 0);
        var imageData = context.getImageData(0, 0, image.width, image.height);
        var length = imageData.data.length;
        var pixel = imageData.data;
        for (var i = 0; i < length; i += 4) {
            pixel[i + 0] = 255 - pixel[i + 0];
            pixel[i + 1] = 255 - pixel[i + 1];
            pixel[i + 2] = 255 - pixel[i + 2];
        }
        context.putImageData(imageData, 0, 0);
    };
}, false);


/***/ }),

/***/ "./src/javascripts/ShowImage.ts":
/*!**************************************!*\
  !*** ./src/javascripts/ShowImage.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ShowImage = document.getElementById('ShowImage');
ShowImage.addEventListener('click', function () {
    var canvas = document.getElementById('canvas1');
    if (!canvas) {
        console.log('Canvas要素の取得に失敗');
        return;
    }
    var context = canvas.getContext('2d');
    var image = new Image();
    image.src = "../images/lenna.jpeg";
    image.onload = function () {
        context.drawImage(image, 0, 0);
    };
}, false);


/***/ }),

/***/ "./src/javascripts/bundle.ts":
/*!***********************************!*\
  !*** ./src/javascripts/bundle.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./ShowImage */ "./src/javascripts/ShowImage.ts");
__webpack_require__(/*! ./Reverse */ "./src/javascripts/Reverse.ts");
__webpack_require__(/*! ./GrayScale */ "./src/javascripts/GrayScale.ts");
__webpack_require__(/*! ./OtsuBinary */ "./src/javascripts/OtsuBinary.ts");
__webpack_require__(/*! ./ImageLoder */ "./src/javascripts/ImageLoder.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map