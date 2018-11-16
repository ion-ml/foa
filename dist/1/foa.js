!function(n){var t={};function e(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)e.d(i,s,function(t){return n[t]}.bind(null,s));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// PARAMS\nvar CHAOTIC_MAP_TYPE = exports.CHAOTIC_MAP_TYPE = 'chebyshev';\nvar CHAOTIC_MAP_DIMENSION = exports.CHAOTIC_MAP_DIMENSION = 1;\nvar NUM_FRUIT_FLIES = exports.NUM_FRUIT_FLIES = 30;\nvar NUM_ITERATIONS = exports.NUM_ITERATIONS = 300;\nvar NUM_TRIALS = exports.NUM_TRIALS = 50;\nvar WIDTH_LOWER_BOUND = exports.WIDTH_LOWER_BOUND = 0;\nvar WIDTH_UPPER_BOUND = exports.WIDTH_UPPER_BOUND = 100;\n\n// Misc\nvar DISTANCE_TO_FOOD_DEFAULT = exports.DISTANCE_TO_FOOD_DEFAULT = 0;\nvar ROOT_POWER = exports.ROOT_POWER = 0.5;\nvar SQUARED_POWER = exports.SQUARED_POWER = 2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvMS9jb25maWcuanM/OGI2ZSJdLCJuYW1lcyI6WyJDSEFPVElDX01BUF9UWVBFIiwiQ0hBT1RJQ19NQVBfRElNRU5TSU9OIiwiTlVNX0ZSVUlUX0ZMSUVTIiwiTlVNX0lURVJBVElPTlMiLCJOVU1fVFJJQUxTIiwiV0lEVEhfTE9XRVJfQk9VTkQiLCJXSURUSF9VUFBFUl9CT1VORCIsIkRJU1RBTkNFX1RPX0ZPT0RfREVGQVVMVCIsIlJPT1RfUE9XRVIiLCJTUVVBUkVEX1BPV0VSIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ08sSUFBTUEsOENBQW1CLFdBQXpCO0FBQ0EsSUFBTUMsd0RBQXdCLENBQTlCO0FBQ0EsSUFBTUMsNENBQWtCLEVBQXhCO0FBQ0EsSUFBTUMsMENBQWlCLEdBQXZCO0FBQ0EsSUFBTUMsa0NBQWEsRUFBbkI7QUFDQSxJQUFNQyxnREFBb0IsQ0FBMUI7QUFDQSxJQUFNQyxnREFBb0IsR0FBMUI7O0FBRVA7QUFDTyxJQUFNQyw4REFBMkIsQ0FBakM7QUFDQSxJQUFNQyxrQ0FBYSxHQUFuQjtBQUNBLElBQU1DLHdDQUFnQixDQUF0QiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUEFSQU1TXG5leHBvcnQgY29uc3QgQ0hBT1RJQ19NQVBfVFlQRSA9ICdjaGVieXNoZXYnOyBcbmV4cG9ydCBjb25zdCBDSEFPVElDX01BUF9ESU1FTlNJT04gPSAxOyBcbmV4cG9ydCBjb25zdCBOVU1fRlJVSVRfRkxJRVMgPSAzMDtcbmV4cG9ydCBjb25zdCBOVU1fSVRFUkFUSU9OUyA9IDMwMDtcbmV4cG9ydCBjb25zdCBOVU1fVFJJQUxTID0gNTA7XG5leHBvcnQgY29uc3QgV0lEVEhfTE9XRVJfQk9VTkQgPSAwO1xuZXhwb3J0IGNvbnN0IFdJRFRIX1VQUEVSX0JPVU5EID0gMTAwO1xuXG4vLyBNaXNjXG5leHBvcnQgY29uc3QgRElTVEFOQ0VfVE9fRk9PRF9ERUZBVUxUID0gMDtcbmV4cG9ydCBjb25zdCBST09UX1BPV0VSID0gMC41O1xuZXhwb3J0IGNvbnN0IFNRVUFSRURfUE9XRVIgPSAyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.run = exports.foa = exports.vision = exports.smell = undefined;\n\nvar _food = __webpack_require__(2);\n\nvar _swarm = __webpack_require__(3);\n\nvar smell = exports.smell = function smell(food, swarm) {\n  swarm.calculateDistanceToFood(food);\n\n  var bestPosition = swarm.findFruitFlyClosestToFood(food);\n  swarm.smell(bestPosition);\n\n  var fruitFlies = swarm.fruitFlies;\n\n  return { fruitFlies: fruitFlies };\n};\n\nvar vision = exports.vision = function vision(food, swarm) {\n  swarm.calculateDistanceToFood(food);\n  var bestPosition = swarm.findFruitFlyClosestToFood(food);\n  var centre = swarm.findCentre();\n  var distance = swarm.calculateDistance(bestPosition, centre);\n\n  swarm.moveSwarm(distance);\n\n  var fruitFlies = swarm.fruitFlies;\n\n  return { fruitFlies: fruitFlies };\n};\n\nvar foa = exports.foa = function foa(food, swarm) {\n  var numIterations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NUM_ITERATIONS;\n\n  var results = [];\n\n  for (var i = 0; i < numIterations; i++) {\n    results[i] = {\n      smell: smell(food, swarm),\n      vision: vision(food, swarm)\n    };\n  }\n\n  return results;\n};\n\nvar run = exports.run = function run() {\n  var numFruitFlies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NUM_FRUIT_FLIES;\n  var numIterations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : NUM_ITERATIONS;\n\n  var food = new _food.Food();\n  var swarm = new _swarm.Swarm(numFruitFlies);\n\n  return foa(food, swarm, numIterations);\n};\n\nconsole.log(run());//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvMS9tYWluLmpzP2Q1N2IiXSwibmFtZXMiOlsic21lbGwiLCJmb29kIiwic3dhcm0iLCJjYWxjdWxhdGVEaXN0YW5jZVRvRm9vZCIsImJlc3RQb3NpdGlvbiIsImZpbmRGcnVpdEZseUNsb3Nlc3RUb0Zvb2QiLCJmcnVpdEZsaWVzIiwidmlzaW9uIiwiY2VudHJlIiwiZmluZENlbnRyZSIsImRpc3RhbmNlIiwiY2FsY3VsYXRlRGlzdGFuY2UiLCJtb3ZlU3dhcm0iLCJmb2EiLCJudW1JdGVyYXRpb25zIiwiTlVNX0lURVJBVElPTlMiLCJyZXN1bHRzIiwiaSIsInJ1biIsIm51bUZydWl0RmxpZXMiLCJOVU1fRlJVSVRfRkxJRVMiLCJGb29kIiwiU3dhcm0iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRU8sSUFBTUEsd0JBQVEsU0FBUkEsS0FBUSxDQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDcENBLFFBQU1DLHVCQUFOLENBQThCRixJQUE5Qjs7QUFFQSxNQUFNRyxlQUFlRixNQUFNRyx5QkFBTixDQUFnQ0osSUFBaEMsQ0FBckI7QUFDQUMsUUFBTUYsS0FBTixDQUFZSSxZQUFaOztBQUpvQyxNQU01QkUsVUFONEIsR0FNYkosS0FOYSxDQU01QkksVUFONEI7O0FBT3BDLFNBQU8sRUFBRUEsc0JBQUYsRUFBUDtBQUNELENBUk07O0FBVUEsSUFBTUMsMEJBQVMsU0FBVEEsTUFBUyxDQUFDTixJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDckNBLFFBQU1DLHVCQUFOLENBQThCRixJQUE5QjtBQUNBLE1BQU1HLGVBQWVGLE1BQU1HLHlCQUFOLENBQWdDSixJQUFoQyxDQUFyQjtBQUNBLE1BQU1PLFNBQVNOLE1BQU1PLFVBQU4sRUFBZjtBQUNBLE1BQU1DLFdBQVdSLE1BQU1TLGlCQUFOLENBQXdCUCxZQUF4QixFQUFzQ0ksTUFBdEMsQ0FBakI7O0FBRUFOLFFBQU1VLFNBQU4sQ0FBZ0JGLFFBQWhCOztBQU5xQyxNQVE3QkosVUFSNkIsR0FRZEosS0FSYyxDQVE3QkksVUFSNkI7O0FBU3JDLFNBQU8sRUFBRUEsc0JBQUYsRUFBUDtBQUNELENBVk07O0FBWUEsSUFBTU8sb0JBQU0sU0FBTkEsR0FBTSxDQUFDWixJQUFELEVBQU9DLEtBQVAsRUFBaUQ7QUFBQSxNQUFuQ1ksYUFBbUMsdUVBQW5CQyxjQUFtQjs7QUFDbEUsTUFBTUMsVUFBVSxFQUFoQjs7QUFFQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUgsYUFBcEIsRUFBbUNHLEdBQW5DLEVBQXdDO0FBQ3RDRCxZQUFRQyxDQUFSLElBQWE7QUFDWGpCLGFBQU9BLE1BQU1DLElBQU4sRUFBWUMsS0FBWixDQURJO0FBRVhLLGNBQVFBLE9BQU9OLElBQVAsRUFBYUMsS0FBYjtBQUZHLEtBQWI7QUFJRDs7QUFFRCxTQUFPYyxPQUFQO0FBQ0QsQ0FYTTs7QUFhQSxJQUFNRSxvQkFBTSxTQUFOQSxHQUFNLEdBR2Q7QUFBQSxNQUZIQyxhQUVHLHVFQUZhQyxlQUViO0FBQUEsTUFESE4sYUFDRyx1RUFEYUMsY0FDYjs7QUFDSCxNQUFNZCxPQUFPLElBQUlvQixVQUFKLEVBQWI7QUFDQSxNQUFNbkIsUUFBUSxJQUFJb0IsWUFBSixDQUFVSCxhQUFWLENBQWQ7O0FBRUEsU0FBT04sSUFBSVosSUFBSixFQUFVQyxLQUFWLEVBQWlCWSxhQUFqQixDQUFQO0FBQ0QsQ0FSTTs7QUFVUFMsUUFBUUMsR0FBUixDQUFZTixLQUFaIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb29kIH0gZnJvbSAnLi9mb29kJztcbmltcG9ydCB7IFN3YXJtIH0gZnJvbSAnLi9zd2FybSc7XG5cbmV4cG9ydCBjb25zdCBzbWVsbCA9IChmb29kLCBzd2FybSkgPT4ge1xuICBzd2FybS5jYWxjdWxhdGVEaXN0YW5jZVRvRm9vZChmb29kKTtcbiAgXG4gIGNvbnN0IGJlc3RQb3NpdGlvbiA9IHN3YXJtLmZpbmRGcnVpdEZseUNsb3Nlc3RUb0Zvb2QoZm9vZCk7XG4gIHN3YXJtLnNtZWxsKGJlc3RQb3NpdGlvbik7XG5cbiAgY29uc3QgeyBmcnVpdEZsaWVzIH0gPSBzd2FybTtcbiAgcmV0dXJuIHsgZnJ1aXRGbGllcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHZpc2lvbiA9IChmb29kLCBzd2FybSkgPT4ge1xuICBzd2FybS5jYWxjdWxhdGVEaXN0YW5jZVRvRm9vZChmb29kKTtcbiAgY29uc3QgYmVzdFBvc2l0aW9uID0gc3dhcm0uZmluZEZydWl0Rmx5Q2xvc2VzdFRvRm9vZChmb29kKTtcbiAgY29uc3QgY2VudHJlID0gc3dhcm0uZmluZENlbnRyZSgpO1xuICBjb25zdCBkaXN0YW5jZSA9IHN3YXJtLmNhbGN1bGF0ZURpc3RhbmNlKGJlc3RQb3NpdGlvbiwgY2VudHJlKTtcbiBcbiAgc3dhcm0ubW92ZVN3YXJtKGRpc3RhbmNlKTtcblxuICBjb25zdCB7IGZydWl0RmxpZXMgfSA9IHN3YXJtO1xuICByZXR1cm4geyBmcnVpdEZsaWVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgZm9hID0gKGZvb2QsIHN3YXJtLCBudW1JdGVyYXRpb25zID0gTlVNX0lURVJBVElPTlMpID0+IHtcbiAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICBcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1JdGVyYXRpb25zOyBpKyspIHtcbiAgICByZXN1bHRzW2ldID0ge1xuICAgICAgc21lbGw6IHNtZWxsKGZvb2QsIHN3YXJtKSxcbiAgICAgIHZpc2lvbjogdmlzaW9uKGZvb2QsIHN3YXJtKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59O1xuXG5leHBvcnQgY29uc3QgcnVuID0gKFxuICBudW1GcnVpdEZsaWVzID0gTlVNX0ZSVUlUX0ZMSUVTLCBcbiAgbnVtSXRlcmF0aW9ucyA9IE5VTV9JVEVSQVRJT05TXG4pID0+IHtcbiAgY29uc3QgZm9vZCA9IG5ldyBGb29kKCk7XG4gIGNvbnN0IHN3YXJtID0gbmV3IFN3YXJtKG51bUZydWl0RmxpZXMpO1xuICBcbiAgcmV0dXJuIGZvYShmb29kLCBzd2FybSwgbnVtSXRlcmF0aW9ucyk7XG59O1xuXG5jb25zb2xlLmxvZyhydW4oKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Food = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(0);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Food = exports.Food = function () {\n  _createClass(Food, [{\n    key: 'coordinates',\n\n\n    /**\n     * @property coordinates\n     * @type {Object<string, number>}\n     * @description The x, y coordinates the Food.\n     * @access public\n     */\n    get: function get() {\n      return this._coordinates;\n    }\n\n    /**\n     * @property max\n     * @type {number}\n     * @description The max random value.\n     * @access public\n     */\n\n  }, {\n    key: 'max',\n    get: function get() {\n      return this._max;\n    }\n\n    /**\n     * @property min\n     * @type {number}\n     * @description The min random value.\n     * @access public\n     */\n\n  }, {\n    key: 'min',\n    get: function get() {\n      return this._min;\n    }\n    /**\n     * @constructor\n     * @access public\n     */\n\n  }]);\n\n  function Food() {\n    var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config.WIDTH_UPPER_BOUND;\n    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.WIDTH_LOWER_BOUND;\n\n    _classCallCheck(this, Food);\n\n    this._max = max;\n    this._min = min;\n    this._coordinates = this._generateFoodCoordinates();\n  }\n\n  /**\n   * A protected method that generates the coordinates of the Food.\n   *\n   * @returns {null}\n   * @access protected\n   */\n\n\n  _createClass(Food, [{\n    key: '_generateFoodCoordinates',\n    value: function _generateFoodCoordinates() {\n      return {\n        x: this._generateRandomInt(),\n        y: this._generateRandomInt()\n      };\n    }\n\n    /**\n     * A protected method that generates a random int.\n     *\n     * @returns {number}\n     * @access protected\n     */\n\n  }, {\n    key: '_generateRandomInt',\n    value: function _generateRandomInt() {\n      return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);\n    }\n  }]);\n\n  return Food;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvMS9mb29kLmpzPzZkM2QiXSwibmFtZXMiOlsiRm9vZCIsIl9jb29yZGluYXRlcyIsIl9tYXgiLCJfbWluIiwibWF4IiwiV0lEVEhfVVBQRVJfQk9VTkQiLCJtaW4iLCJXSURUSF9MT1dFUl9CT1VORCIsIl9nZW5lcmF0ZUZvb2RDb29yZGluYXRlcyIsIngiLCJfZ2VuZXJhdGVSYW5kb21JbnQiLCJ5IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztJQUthQSxJLFdBQUFBLEk7Ozs7O0FBRVg7Ozs7Ozt3QkFNa0I7QUFDaEIsYUFBTyxLQUFLQyxZQUFaO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozt3QkFNVTtBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7d0JBTVU7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDtBQUNEOzs7Ozs7O0FBSUEsa0JBQThEO0FBQUEsUUFBbERDLEdBQWtELHVFQUE1Q0MseUJBQTRDO0FBQUEsUUFBekJDLEdBQXlCLHVFQUFuQkMseUJBQW1COztBQUFBOztBQUM1RCxTQUFLTCxJQUFMLEdBQVlFLEdBQVo7QUFDQSxTQUFLRCxJQUFMLEdBQVlHLEdBQVo7QUFDQSxTQUFLTCxZQUFMLEdBQW9CLEtBQUtPLHdCQUFMLEVBQXBCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7K0NBTTJCO0FBQ3pCLGFBQU87QUFDTEMsV0FBRyxLQUFLQyxrQkFBTCxFQURFO0FBRUxDLFdBQUcsS0FBS0Qsa0JBQUw7QUFGRSxPQUFQO0FBSUQ7O0FBRUQ7Ozs7Ozs7Ozt5Q0FNcUI7QUFDbkIsYUFBT0UsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLE1BQWlCLEtBQUtWLEdBQUwsR0FBVyxLQUFLRSxHQUFoQixHQUFzQixDQUF2QyxJQUE0QyxLQUFLQSxHQUE1RCxDQUFQO0FBQ0QiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFdJRFRIX0xPV0VSX0JPVU5ELFxuICBXSURUSF9VUFBFUl9CT1VORCxcbn0gZnJvbSAnLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgRm9vZCB7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBjb29yZGluYXRlc1xuICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgbnVtYmVyPn1cbiAgICogQGRlc2NyaXB0aW9uIFRoZSB4LCB5IGNvb3JkaW5hdGVzIHRoZSBGb29kLlxuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgZ2V0IGNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb29yZGluYXRlcztcbiAgfVxuICBcbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBtYXhcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlc2NyaXB0aW9uIFRoZSBtYXggcmFuZG9tIHZhbHVlLlxuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgZ2V0IG1heCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBtaW5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlc2NyaXB0aW9uIFRoZSBtaW4gcmFuZG9tIHZhbHVlLlxuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgZ2V0IG1pbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluO1xuICB9XG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1heCA9IFdJRFRIX1VQUEVSX0JPVU5ELCBtaW4gPSBXSURUSF9MT1dFUl9CT1VORCkge1xuICAgIHRoaXMuX21heCA9IG1heDtcbiAgICB0aGlzLl9taW4gPSBtaW47XG4gICAgdGhpcy5fY29vcmRpbmF0ZXMgPSB0aGlzLl9nZW5lcmF0ZUZvb2RDb29yZGluYXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgcHJvdGVjdGVkIG1ldGhvZCB0aGF0IGdlbmVyYXRlcyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIEZvb2QuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudWxsfVxuICAgKiBAYWNjZXNzIHByb3RlY3RlZFxuICAgKi9cbiAgX2dlbmVyYXRlRm9vZENvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLl9nZW5lcmF0ZVJhbmRvbUludCgpLFxuICAgICAgeTogdGhpcy5fZ2VuZXJhdGVSYW5kb21JbnQoKSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEEgcHJvdGVjdGVkIG1ldGhvZCB0aGF0IGdlbmVyYXRlcyBhIHJhbmRvbSBpbnQuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAqIEBhY2Nlc3MgcHJvdGVjdGVkXG4gICAqL1xuICBfZ2VuZXJhdGVSYW5kb21JbnQoKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heCAtIHRoaXMubWluICsgMSkgKyB0aGlzLm1pbik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n")},function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\nexports.Swarm = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _fruitFly = __webpack_require__(4);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nvar Swarm = exports.Swarm = function () {\n  _createClass(Swarm, [{\n    key: \'coordinates\',\n    get: function get() {\n      return this._coordinates;\n    }\n\n    /**\n     * @constructor\n     * @param {number} numFruitFlies - The number of FruitFlies in the swarm.\n     * @access public\n     */\n\n  }]);\n\n  function Swarm(bestPosition) {\n    _classCallCheck(this, Swarm);\n\n    var coordinates = bestPosition.coordinates;\n\n    this._coordinates = coordinates;\n  }\n\n  _createClass(Swarm, [{\n    key: \'vision\',\n    value: function vision(bestPosition) {\n      var coordinates = bestPosition.coordinates;\n\n      this._coordinates = coordinates;\n    }\n  }]);\n\n  return Swarm;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvMS9zd2FybS5qcz9kMGVlIl0sIm5hbWVzIjpbIlN3YXJtIiwiX2Nvb3JkaW5hdGVzIiwiYmVzdFBvc2l0aW9uIiwiY29vcmRpbmF0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7O0lBRWFBLEssV0FBQUEsSzs7O3dCQUVPO0FBQ2hCLGFBQU8sS0FBS0MsWUFBWjtBQUNEOztBQUVEOzs7Ozs7OztBQUtBLGlCQUFZQyxZQUFaLEVBQTBCO0FBQUE7O0FBQUEsUUFDaEJDLFdBRGdCLEdBQ0FELFlBREEsQ0FDaEJDLFdBRGdCOztBQUV4QixTQUFLRixZQUFMLEdBQW9CRSxXQUFwQjtBQUNEOzs7OzJCQUVNRCxZLEVBQWM7QUFBQSxVQUNYQyxXQURXLEdBQ0tELFlBREwsQ0FDWEMsV0FEVzs7QUFFbkIsV0FBS0YsWUFBTCxHQUFvQkUsV0FBcEI7QUFDRCIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJ1aXRGbHkgfSBmcm9tICcuL2ZydWl0Rmx5JztcblxuZXhwb3J0IGNsYXNzIFN3YXJtIHtcblxuICBnZXQgY29vcmRpbmF0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Nvb3JkaW5hdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtRnJ1aXRGbGllcyAtIFRoZSBudW1iZXIgb2YgRnJ1aXRGbGllcyBpbiB0aGUgc3dhcm0uXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqL1xuICBjb25zdHJ1Y3RvcihiZXN0UG9zaXRpb24pIHtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSBiZXN0UG9zaXRpb247XG4gICAgdGhpcy5fY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxuXG4gIHZpc2lvbihiZXN0UG9zaXRpb24pIHtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzIH0gPSBiZXN0UG9zaXRpb247XG4gICAgdGhpcy5fY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n')},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.FruitFly = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(0);\n\nvar _alpha = __webpack_require__(5);\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FruitFly = exports.FruitFly = function () {\n  _createClass(FruitFly, [{\n    key: 'coordinates',\n\n\n    /**\n     * @property coordinates\n     * @type {Object<string, number>}\n     * @description The x, y coordinates the current FruitFly.\n     * @access public\n     */\n    get: function get() {\n      return this._coordinates;\n    }\n\n    /**\n     * @property distanceToFood\n     * @type {number}\n     * @description The 'distance' from the current FruitFly to the food.\n     * @access public\n     */\n\n  }, {\n    key: 'distanceToFood',\n    get: function get() {\n      return this._distanceToFood || _config.DISTANCE_TO_FOOD_DEFAULT;\n    }\n\n    /**\n     * @property index\n     * @type {number}\n     * @description The identifying number of the current FruitFly.\n     * @access public\n     */\n\n  }, {\n    key: 'index',\n    get: function get() {\n      return this._index;\n    }\n\n    /**\n     * @property lowerBound\n     * @type {number}\n     * @description The lower bound of the X dimension.\n     * @access public\n     */\n\n  }, {\n    key: 'lowerBound',\n    get: function get() {\n      return this._lowerBound;\n    }\n\n    /**\n     * @property upperBound\n     * @type {number}\n     * @description The upper bound of the X dimension.\n     * @access public\n     */\n\n  }, {\n    key: 'upperBound',\n    get: function get() {\n      return this._upperBound;\n    }\n\n    /**\n     * @constructor\n     * @param {number} index - The identifying number of the current FruitFly.\n     * @access public\n     */\n\n  }]);\n\n  function FruitFly(index) {\n    var lowerBound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.WIDTH_LOWER_BOUND;\n    var upperBound = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config.WIDTH_UPPER_BOUND;\n\n    _classCallCheck(this, FruitFly);\n\n    this._distanceToFood = 0;\n    this._index = index;\n    this._lowerBound = lowerBound;\n    this._upperBound = upperBound;\n\n    this._coordinates = this._generateStartingCoordinates();\n  }\n\n  /**\n   * Calculates the distance between the current FruitFly and the food.\n   *\n   * @param {Food} food - A class that contains the coordinates of the food.\n   * @returns {null}\n   * @access public\n   */\n\n\n  _createClass(FruitFly, [{\n    key: 'calculateDistanceToFood',\n    value: function calculateDistanceToFood(food) {\n      var distanceToFood = void 0;\n      var coordinates = food.coordinates;\n      var xFood = coordinates.x,\n          yFood = coordinates.y;\n      var _coordinates = this.coordinates,\n          xCurrent = _coordinates.x,\n          yCurrent = _coordinates.y;\n\n\n      var xDiffSquared = Math.pow(xCurrent - xFood, _config.SQUARED_POWER);\n\n      var yDiffSquared = Math.pow(yCurrent - yFood, _config.SQUARED_POWER);\n\n      var total = xDiffSquared + yDiffSquared;\n      distanceToFood = Math.pow(total, _config.ROOT_POWER);\n\n      this._distanceToFood = distanceToFood;\n    }\n\n    /**\n     * Move the current FruitFly by the received 'distancesToMove'.\n     *\n     * @param {Object, <string, number>} distanceToMove\n     * @returns {null}\n     * @access public\n     */\n\n  }, {\n    key: 'move',\n    value: function move(distanceToMove) {\n      var xMove = distanceToMove.x,\n          yMove = distanceToMove.y;\n      var _coordinates2 = this.coordinates,\n          xCurrent = _coordinates2.x,\n          yCurrent = _coordinates2.y;\n\n\n      this._coordinates = {\n        x: xCurrent + xMove,\n        y: yCurrent + yMove\n      };\n    }\n\n    /**\n     * Smell phase. Move the fruit fly with regard to\n     * the 'bestPosition' and a random factor.\n     *\n     * @param {Object, <string, number>} bestPosition\n     *\n     * @returns {null}\n     * @access public\n     * @since 0.1\n     */\n\n  }, {\n    key: 'smell',\n    value: function smell(bestPosition) {\n      var bestCoordinates = bestPosition.coordinates;\n      var xBest = bestCoordinates.x,\n          yBest = bestCoordinates.y;\n      var _coordinates3 = this.coordinates,\n          xCurrent = _coordinates3.x,\n          yCurrent = _coordinates3.y;\n\n\n      var xDiff = xCurrent - xBest;\n      var yDiff = yCurrent - yBest;\n\n      var xUpdated = xCurrent + (0, _alpha.alpha)(xDiff / _config.WIDTH_UPPER_BOUND);\n      var yUpdated = yCurrent + (0, _alpha.alpha)(yDiff / _config.WIDTH_UPPER_BOUND);\n\n      // Enforce upper bound\n      if (xUpdated > _config.WIDTH_UPPER_BOUND) {\n        xUpdated = _config.WIDTH_UPPER_BOUND;\n      }\n\n      // Enforce lower bound\n      if (xUpdated < _config.WIDTH_LOWER_BOUND) {\n        xUpdated = _config.WIDTH_LOWER_BOUND;\n      }\n\n      // Enforce upper bound\n      if (yUpdated > _config.WIDTH_UPPER_BOUND) {\n        yUpdated = _config.WIDTH_UPPER_BOUND;\n      }\n\n      // Enforce lower bound\n      if (yUpdated < _config.WIDTH_LOWER_BOUND) {\n        yUpdated = _config.WIDTH_LOWER_BOUND;\n      }\n\n      var updatedCoordinates = {\n        x: xUpdated,\n        y: yUpdated\n      };\n\n      console.log('updatedCoordinates');\n      console.log(updatedCoordinates);\n\n      this._coordinates = updatedCoordinates;\n    }\n\n    /**\n     * A protected method that generates the starting coordinates of the FruitFly.\n     *\n     * @param {number} index - The identifying number of the current FruitFly.\n     * @returns {Objecy<string, number>}\n     * @access protected\n     */\n\n  }, {\n    key: '_generateStartingCoordinates',\n    value: function _generateStartingCoordinates() {\n      var rand = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      rand = rand === false ? Math.random() : rand;\n\n      return {\n        x: this.lowerBound + (this.upperBound - this.lowerBound) * rand,\n        y: this.lowerBound + (this.upperBound - this.lowerBound) * rand\n      };\n    }\n  }]);\n\n  return FruitFly;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvMS9mcnVpdEZseS5qcz82ZjNlIl0sIm5hbWVzIjpbIkZydWl0Rmx5IiwiX2Nvb3JkaW5hdGVzIiwiX2Rpc3RhbmNlVG9Gb29kIiwiRElTVEFOQ0VfVE9fRk9PRF9ERUZBVUxUIiwiX2luZGV4IiwiX2xvd2VyQm91bmQiLCJfdXBwZXJCb3VuZCIsImluZGV4IiwibG93ZXJCb3VuZCIsIldJRFRIX0xPV0VSX0JPVU5EIiwidXBwZXJCb3VuZCIsIldJRFRIX1VQUEVSX0JPVU5EIiwiX2dlbmVyYXRlU3RhcnRpbmdDb29yZGluYXRlcyIsImZvb2QiLCJkaXN0YW5jZVRvRm9vZCIsImNvb3JkaW5hdGVzIiwieEZvb2QiLCJ4IiwieUZvb2QiLCJ5IiwieEN1cnJlbnQiLCJ5Q3VycmVudCIsInhEaWZmU3F1YXJlZCIsIk1hdGgiLCJwb3ciLCJTUVVBUkVEX1BPV0VSIiwieURpZmZTcXVhcmVkIiwidG90YWwiLCJST09UX1BPV0VSIiwiZGlzdGFuY2VUb01vdmUiLCJ4TW92ZSIsInlNb3ZlIiwiYmVzdFBvc2l0aW9uIiwiYmVzdENvb3JkaW5hdGVzIiwieEJlc3QiLCJ5QmVzdCIsInhEaWZmIiwieURpZmYiLCJ4VXBkYXRlZCIsInlVcGRhdGVkIiwidXBkYXRlZENvb3JkaW5hdGVzIiwiY29uc29sZSIsImxvZyIsInJhbmQiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQVFBOzs7O0lBRWFBLFEsV0FBQUEsUTs7Ozs7QUFFWDs7Ozs7O3dCQU1rQjtBQUNoQixhQUFPLEtBQUtDLFlBQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7O3dCQU1xQjtBQUNuQixhQUFPLEtBQUtDLGVBQUwsSUFBd0JDLGdDQUEvQjtBQUNEOztBQUVEOzs7Ozs7Ozs7d0JBTVk7QUFDVixhQUFPLEtBQUtDLE1BQVo7QUFDRDs7QUFFRDs7Ozs7Ozs7O3dCQU1pQjtBQUNmLGFBQU8sS0FBS0MsV0FBWjtBQUNEOztBQUVEOzs7Ozs7Ozs7d0JBTWlCO0FB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QyxHQUFSLENBQVksb0JBQVo7QUFDQUQsY0FBUUMsR0FBUixDQUFZRixrQkFBWjs7QUFFQSxXQUFLdkMsWUFBTCxHQUFvQnVDLGtCQUFwQjtBQUNEOztBQUVEOzs7Ozs7Ozs7O21EQU8yQztBQUFBLFVBQWRHLElBQWMsdUVBQVAsS0FBTzs7QUFDekNBLGFBQVFBLFNBQVMsS0FBVCxHQUFpQnBCLEtBQUtxQixNQUFMLEVBQWpCLEdBQWlDRCxJQUF6Qzs7QUFFQSxhQUFPO0FBQ0wxQixXQUFHLEtBQUtULFVBQUwsR0FBa0IsQ0FBQyxLQUFLRSxVQUFMLEdBQWtCLEtBQUtGLFVBQXhCLElBQXVDbUMsSUFEdkQ7QUFFTHhCLFdBQUcsS0FBS1gsVUFBTCxHQUFrQixDQUFDLEtBQUtFLFVBQUwsR0FBa0IsS0FBS0YsVUFBeEIsSUFBdUNtQztBQUZ2RCxPQUFQO0FBSUQiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERJU1RBTkNFX1RPX0ZPT0RfREVGQVVMVCxcbiAgUk9PVF9QT1dFUixcbiAgU1FVQVJFRF9QT1dFUixcbiAgV0lEVEhfTE9XRVJfQk9VTkQsXG4gIFdJRFRIX1VQUEVSX0JPVU5ELFxufSBmcm9tICcuL2NvbmZpZyc7XG5cbmltcG9ydCB7IGFscGhhIH0gZnJvbSAnLi9hbHBoYSc7XG5cbmV4cG9ydCBjbGFzcyBGcnVpdEZseSB7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBjb29yZGluYXRlc1xuICAgKiBAdHlwZSB7T2JqZWN0PHN0cmluZywgbnVtYmVyPn1cbiAgICogQGRlc2NyaXB0aW9uIFRoZSB4LCB5IGNvb3JkaW5hdGVzIHRoZSBjdXJyZW50IEZydWl0Rmx5LlxuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgZ2V0IGNvb3JkaW5hdGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9jb29yZGluYXRlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgZGlzdGFuY2VUb0Zvb2RcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlc2NyaXB0aW9uIFRoZSAnZGlzdGFuY2UnIGZyb20gdGhlIGN1cnJlbnQgRnJ1aXRGbHkgdG8gdGhlIGZvb2QuXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqL1xuICBnZXQgZGlzdGFuY2VUb0Zvb2QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3RhbmNlVG9Gb29kIHx8IERJU1RBTkNFX1RPX0ZPT0RfREVGQVVMVDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgaW5kZXhcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlc2NyaXB0aW9uIFRoZSBpZGVudGlmeWluZyBudW1iZXIgb2YgdGhlIGN1cnJlbnQgRnJ1aXRGbHkuXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqL1xuICBnZXQgaW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBsb3dlckJvdW5kXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqIEBkZXNjcmlwdGlvbiBUaGUgbG93ZXIgYm91bmQgb2YgdGhlIFggZGltZW5zaW9uLlxuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgZ2V0IGxvd2VyQm91bmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xvd2VyQm91bmQ7XG4gIH1cblxuICAvKipcbiAgICogQHByb3BlcnR5IHVwcGVyQm91bmRcbiAgICogQHR5cGUge251bWJlcn1cbiAgICogQGRlc2NyaXB0aW9uIFRoZSB1cHBlciBib3VuZCBvZiB0aGUgWCBkaW1lbnNpb24uXG4gICAqIEBhY2Nlc3MgcHVibGljXG4gICAqL1xuICBnZXQgdXBwZXJCb3VuZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXBwZXJCb3VuZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gVGhlIGlkZW50aWZ5aW5nIG51bWJlciBvZiB0aGUgY3VycmVudCBGcnVpdEZseS5cbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIGluZGV4LFxuICAgIGxvd2VyQm91bmQgPSBXSURUSF9MT1dFUl9CT1VORCxcbiAgICB1cHBlckJvdW5kID0gV0lEVEhfVVBQRVJfQk9VTkRcbiAgKSB7XG4gICAgdGhpcy5fZGlzdGFuY2VUb0Zvb2QgPSAwO1xuICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5fbG93ZXJCb3VuZCA9IGxvd2VyQm91bmQ7XG4gICAgdGhpcy5fdXBwZXJCb3VuZCA9IHVwcGVyQm91bmQ7XG5cbiAgICB0aGlzLl9jb29yZGluYXRlcyA9IHRoaXMuX2dlbmVyYXRlU3RhcnRpbmdDb29yZGluYXRlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGN1cnJlbnQgRnJ1aXRGbHkgYW5kIHRoZSBmb29kLlxuICAgKlxuICAgKiBAcGFyYW0ge0Zvb2R9IGZvb2QgLSBBIGNsYXNzIHRoYXQgY29udGFpbnMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBmb29kLlxuICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICogQGFjY2VzcyBwdWJsaWNcbiAgICovXG4gIGNhbGN1bGF0ZURpc3RhbmNlVG9Gb29kKGZvb2QpIHtcbiAgICBsZXQgZGlzdGFuY2VUb0Zvb2Q7XG4gICAgY29uc3QgeyBjb29yZGluYXRlcyB9ID0gZm9vZDtcbiAgICBjb25zdCB7IHg6IHhGb29kLCB5OiB5Rm9vZCB9ID0gY29vcmRpbmF0ZXM7XG4gICAgY29uc3QgeyB4OiB4Q3VycmVudCwgeTogeUN1cnJlbnQgfSA9IHRoaXMuY29vcmRpbmF0ZXM7XG5cbiAgICBjb25zdCB4RGlmZlNxdWFyZWQgPSBNYXRoLnBvdyhcbiAgICAgICh4Q3VycmVudCAtIHhGb29kKSxcbiAgICAgIFNRVUFSRURfUE9XRVJcbiAgICApO1xuXG4gICAgY29uc3QgeURpZmZTcXVhcmVkID0gTWF0aC5wb3coXG4gICAgICAoeUN1cnJlbnQgLSB5Rm9vZCksXG4gICAgICBTUVVBUkVEX1BPV0VSXG4gICAgKTtcblxuICAgIGNvbnN0IHRvdGFsID0geERpZmZTcXVhcmVkICsgeURpZmZTcXVhcmVkO1xuICAgIGRpc3RhbmNlVG9Gb29kID0gTWF0aC5wb3codG90YWwsIFJPT1RfUE9XRVIpO1xuXG4gICAgdGhpcy5fZGlzdGFuY2VUb0Zvb2QgPSBkaXN0YW5jZVRvRm9vZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSBjdXJyZW50IEZydWl0Rmx5IGJ5IHRoZSByZWNlaXZlZCAnZGlzdGFuY2VzVG9Nb3ZlJy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3QsIDxzdHJpbmcsIG51bWJlcj59IGRpc3RhbmNlVG9Nb3ZlXG4gICAqIEByZXR1cm5zIHtudWxsfVxuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKi9cbiAgbW92ZShkaXN0YW5jZVRvTW92ZSkge1xuICAgIGNvbnN0IHsgeDogeE1vdmUsIHk6IHlNb3ZlIH0gPSBkaXN0YW5jZVRvTW92ZTtcbiAgICBjb25zdCB7IHg6IHhDdXJyZW50LCB5OiB5Q3VycmVudCB9ID0gdGhpcy5jb29yZGluYXRlcztcblxuICAgIHRoaXMuX2Nvb3JkaW5hdGVzID0ge1xuICAgICAgeDogeEN1cnJlbnQgKyB4TW92ZSxcbiAgICAgIHk6IHlDdXJyZW50ICsgeU1vdmUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTbWVsbCBwaGFzZS4gTW92ZSB0aGUgZnJ1aXQgZmx5IHdpdGggcmVnYXJkIHRvXG4gICAqIHRoZSAnYmVzdFBvc2l0aW9uJyBhbmQgYSByYW5kb20gZmFjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdCwgPHN0cmluZywgbnVtYmVyPn0gYmVzdFBvc2l0aW9uXG4gICAqXG4gICAqIEByZXR1cm5zIHtudWxsfVxuICAgKiBAYWNjZXNzIHB1YmxpY1xuICAgKiBAc2luY2UgMC4xXG4gICAqL1xuICBzbWVsbChiZXN0UG9zaXRpb24pIHtcbiAgICBjb25zdCB7IGNvb3JkaW5hdGVzOiBiZXN0Q29vcmRpbmF0ZXMgfSA9IGJlc3RQb3NpdGlvbjtcbiAgICBjb25zdCB7IHg6IHhCZXN0LCB5OiB5QmVzdCB9ID0gYmVzdENvb3JkaW5hdGVzO1xuICAgIGNvbnN0IHsgeDogeEN1cnJlbnQsIHk6IHlDdXJyZW50IH0gPSB0aGlzLmNvb3JkaW5hdGVzO1xuXG4gICAgY29uc3QgeERpZmYgPSB4Q3VycmVudCAtIHhCZXN0O1xuICAgIGNvbnN0IHlEaWZmID0geUN1cnJlbnQgLSB5QmVzdDtcblxuICAgIGxldCB4VXBkYXRlZCA9IHhDdXJyZW50ICsgYWxwaGEoeERpZmYgLyBXSURUSF9VUFBFUl9CT1VORCk7XG4gICAgbGV0IHlVcGRhdGVkID0geUN1cnJlbnQgKyBhbHBoYSh5RGlmZiAvIFdJRFRIX1VQUEVSX0JPVU5EKTtcbiAgICBcbiAgICAvLyBFbmZvcmNlIHVwcGVyIGJvdW5kXG4gICAgaWYgKHhVcGRhdGVkID4gV0lEVEhfVVBQRVJfQk9VTkQpIHtcbiAgICAgIHhVcGRhdGVkID0gV0lEVEhfVVBQRVJfQk9VTkQ7XG4gICAgfVxuXG4gICAgLy8gRW5mb3JjZSBsb3dlciBib3VuZFxuICAgIGlmICh4VXBkYXRlZCA8IFdJRFRIX0xPV0VSX0JPVU5EKSB7XG4gICAgICB4VXBkYXRlZCA9IFdJRFRIX0xPV0VSX0JPVU5EO1xuICAgIH1cbiAgICBcbiAgICAvLyBFbmZvcmNlIHVwcGVyIGJvdW5kXG4gICAgaWYgKHlVcGRhdGVkID4gV0lEVEhfVVBQRVJfQk9VTkQpIHtcbiAgICAgIHlVcGRhdGVkID0gV0lEVEhfVVBQRVJfQk9VTkQ7XG4gICAgfVxuXG4gICAgLy8gRW5mb3JjZSBsb3dlciBib3VuZFxuICAgIGlmICh5VXBkYXRlZCA8IFdJRFRIX0xPV0VSX0JPVU5EKSB7XG4gICAgICB5VXBkYXRlZCA9IFdJRFRIX0xPV0VSX0JPVU5EO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCB1cGRhdGVkQ29vcmRpbmF0ZXMgPSB7XG4gICAgICB4OiB4VXBkYXRlZCxcbiAgICAgIHk6IHlVcGRhdGVkLFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZygndXBkYXRlZENvb3JkaW5hdGVzJyk7XG4gICAgY29uc29sZS5sb2codXBkYXRlZENvb3JkaW5hdGVzKTtcblxuICAgIHRoaXMuX2Nvb3JkaW5hdGVzID0gdXBkYXRlZENvb3JkaW5hdGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEEgcHJvdGVjdGVkIG1ldGhvZCB0aGF0IGdlbmVyYXRlcyB0aGUgc3RhcnRpbmcgY29vcmRpbmF0ZXMgb2YgdGhlIEZydWl0Rmx5LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgaWRlbnRpZnlpbmcgbnVtYmVyIG9mIHRoZSBjdXJyZW50IEZydWl0Rmx5LlxuICAgKiBAcmV0dXJucyB7T2JqZWN5PHN0cmluZywgbnVtYmVyPn1cbiAgICogQGFjY2VzcyBwcm90ZWN0ZWRcbiAgICovXG4gIF9nZW5lcmF0ZVN0YXJ0aW5nQ29vcmRpbmF0ZXMocmFuZCA9IGZhbHNlKSB7XG4gICAgcmFuZCA9IChyYW5kID09PSBmYWxzZSA/IE1hdGgucmFuZG9tKCkgOiByYW5kKTtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLmxvd2VyQm91bmQgKyAodGhpcy51cHBlckJvdW5kIC0gdGhpcy5sb3dlckJvdW5kKSAqICByYW5kLFxuICAgICAgeTogdGhpcy5sb3dlckJvdW5kICsgKHRoaXMudXBwZXJCb3VuZCAtIHRoaXMubG93ZXJCb3VuZCkgKiAgcmFuZCxcbiAgICB9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n")},function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.alpha = undefined;\n\nvar _config = __webpack_require__(0);\n\nvar alpha = exports.alpha = function alpha(diff) {\n  var chaoticMapDimension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.CHAOTIC_MAP_DIMENSION;\n\n  var alpha = Math.random();\n\n  if (_config.CHAOTIC_MAP_TYPE === 'chebyshev') {\n    var dimensionDiff = chaoticMapDimension * Math.acos(diff);\n    alpha = Math.cos(dimensionDiff);\n  }\n\n  return alpha;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvMS9hbHBoYS5qcz8xZTE1Il0sIm5hbWVzIjpbImFscGhhIiwiZGlmZiIsImNoYW90aWNNYXBEaW1lbnNpb24iLCJDSEFPVElDX01BUF9ESU1FTlNJT04iLCJNYXRoIiwicmFuZG9tIiwiQ0hBT1RJQ19NQVBfVFlQRSIsImRpbWVuc2lvbkRpZmYiLCJhY29zIiwiY29zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRU8sSUFBTUEsd0JBQVEsZUFBQ0MsSUFBRCxFQUF1RDtBQUFBLE1BQWhEQyxtQkFBZ0QsdUVBQTFCQyw2QkFBMEI7O0FBQzFFLE1BQUlILFFBQVFJLEtBQUtDLE1BQUwsRUFBWjs7QUFFQSxNQUFJQyw2QkFBcUIsV0FBekIsRUFBc0M7QUFDcEMsUUFBTUMsZ0JBQWdCTCxzQkFBc0JFLEtBQUtJLElBQUwsQ0FBVVAsSUFBVixDQUE1QztBQUNBRCxZQUFRSSxLQUFLSyxHQUFMLENBQVNGLGFBQVQsQ0FBUjtBQUNEOztBQUVELFNBQU9QLEtBQVA7QUFDRCxDQVRNIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDSEFPVElDX01BUF9UWVBFLCBDSEFPVElDX01BUF9ESU1FTlNJT04gfSBmcm9tICcuL2NvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBhbHBoYSA9IChkaWZmLCBjaGFvdGljTWFwRGltZW5zaW9uID0gQ0hBT1RJQ19NQVBfRElNRU5TSU9OKSA9PiB7XG4gIGxldCBhbHBoYSA9IE1hdGgucmFuZG9tKCk7XG5cbiAgaWYgKENIQU9USUNfTUFQX1RZUEUgPT09ICdjaGVieXNoZXYnKSB7XG4gICAgY29uc3QgZGltZW5zaW9uRGlmZiA9IGNoYW90aWNNYXBEaW1lbnNpb24gKiBNYXRoLmFjb3MoZGlmZik7IFxuICAgIGFscGhhID0gTWF0aC5jb3MoZGltZW5zaW9uRGlmZik7IFxuICB9XG5cbiAgcmV0dXJuIGFscGhhO1xufTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n")}]);