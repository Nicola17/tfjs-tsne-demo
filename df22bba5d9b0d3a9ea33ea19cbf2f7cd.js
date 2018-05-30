// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({49:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isMobile() {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i
        .test(a) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i
            .test(a.substr(0, 4));
}
exports.isMobile = isMobile;

},{}],35:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doc(info) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
}
exports.doc = doc;

},{}],26:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tensor_1 = require("./tensor");
function assertArgumentIsTensor(x, argName, functionName) {
    assert(x instanceof tensor_1.Tensor, "Argument '" + argName + "' passed to '" + functionName + "' must be a Tensor, " +
        ("but got " + typeof x + "."));
}
function assertArgumentsAreTensors(args, functionName) {
    var _loop_1 = function (argName) {
        var arg = args[argName];
        if (Array.isArray(arg)) {
            arg.forEach(function (t, i) {
                assertArgumentIsTensor(t, argName + "[" + i + "]", functionName);
            });
        }
        else {
            assertArgumentIsTensor(arg, argName, functionName);
        }
    };
    for (var argName in args) {
        _loop_1(argName);
    }
}
exports.assertArgumentsAreTensors = assertArgumentsAreTensors;
function shuffle(array) {
    var counter = array.length;
    var temp = 0;
    var index = 0;
    while (counter > 0) {
        index = (Math.random() * counter) | 0;
        counter--;
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
}
exports.shuffle = shuffle;
function clamp(min, x, max) {
    return Math.max(min, Math.min(x, max));
}
exports.clamp = clamp;
function randUniform(a, b) {
    return Math.random() * (b - a) + a;
}
exports.randUniform = randUniform;
function distSquared(a, b) {
    var result = 0;
    for (var i = 0; i < a.length; i++) {
        var diff = Number(a[i]) - Number(b[i]);
        result += diff * diff;
    }
    return result;
}
exports.distSquared = distSquared;
function assert(expr, msg) {
    if (!expr) {
        throw new Error(msg);
    }
}
exports.assert = assert;
function assertShapesMatch(shapeA, shapeB, errorMessagePrefix) {
    if (errorMessagePrefix === void 0) { errorMessagePrefix = ''; }
    assert(arraysEqual(shapeA, shapeB), errorMessagePrefix + (" Shapes " + shapeA + " and " + shapeB + " must match"));
}
exports.assertShapesMatch = assertShapesMatch;
function assertTypesMatch(a, b) {
    assert(a.dtype === b.dtype, " The dtypes of the first(" + a.dtype + ") and" +
        (" second(" + b.dtype + ") input must match"));
}
exports.assertTypesMatch = assertTypesMatch;
function flatten(arr, ret) {
    if (ret === void 0) { ret = []; }
    if (Array.isArray(arr)) {
        for (var i = 0; i < arr.length; ++i) {
            flatten(arr[i], ret);
        }
    }
    else {
        ret.push(arr);
    }
    return ret;
}
exports.flatten = flatten;
function inferShape(val) {
    if (isTypedArray(val)) {
        return [val.length];
    }
    if (!Array.isArray(val)) {
        return [];
    }
    var shape = [];
    while (val instanceof Array) {
        shape.push(val.length);
        val = val[0];
    }
    return shape;
}
exports.inferShape = inferShape;
function sizeFromShape(shape) {
    if (shape.length === 0) {
        return 1;
    }
    var size = shape[0];
    for (var i = 1; i < shape.length; i++) {
        size *= shape[i];
    }
    return size;
}
exports.sizeFromShape = sizeFromShape;
function isScalarShape(shape) {
    return shape.length === 0;
}
exports.isScalarShape = isScalarShape;
function arraysEqual(n1, n2) {
    if (n1.length !== n2.length) {
        return false;
    }
    for (var i = 0; i < n1.length; i++) {
        if (n1[i] !== n2[i]) {
            return false;
        }
    }
    return true;
}
exports.arraysEqual = arraysEqual;
function isInt(a) {
    return a % 1 === 0;
}
exports.isInt = isInt;
function tanh(x) {
    if (Math.tanh != null) {
        return Math.tanh(x);
    }
    if (x === Infinity) {
        return 1;
    }
    else if (x === -Infinity) {
        return -1;
    }
    else {
        var e2x = Math.exp(2 * x);
        return (e2x - 1) / (e2x + 1);
    }
}
exports.tanh = tanh;
function sizeToSquarishShape(size) {
    for (var a = Math.floor(Math.sqrt(size)); a > 1; --a) {
        if (size % a === 0) {
            return [a, size / a];
        }
    }
    return [1, size];
}
exports.sizeToSquarishShape = sizeToSquarishShape;
function createShuffledIndices(n) {
    var shuffledIndices = new Uint32Array(n);
    for (var i = 0; i < n; ++i) {
        shuffledIndices[i] = i;
    }
    shuffle(shuffledIndices);
    return shuffledIndices;
}
exports.createShuffledIndices = createShuffledIndices;
function rightPad(a, size) {
    if (size <= a.length) {
        return a;
    }
    return a + ' '.repeat(size - a.length);
}
exports.rightPad = rightPad;
function repeatedTry(checkFn, delayFn, maxCounter) {
    if (delayFn === void 0) { delayFn = function (counter) { return 0; }; }
    return new Promise(function (resolve, reject) {
        var tryCount = 0;
        var tryFn = function () {
            if (checkFn()) {
                resolve();
                return;
            }
            tryCount++;
            var nextBackoff = delayFn(tryCount);
            if (maxCounter != null && tryCount >= maxCounter) {
                reject();
                return;
            }
            setTimeout(tryFn, nextBackoff);
        };
        setTimeout(tryFn, 0);
    });
}
exports.repeatedTry = repeatedTry;
function getQueryParams(queryString) {
    var params = {};
    queryString.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g, function (s) {
        var t = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            t[_i - 1] = arguments[_i];
        }
        decodeParam(params, t[0], t[1]);
        return t.join('=');
    });
    return params;
}
exports.getQueryParams = getQueryParams;
function decodeParam(params, name, value) {
    params[decodeURIComponent(name)] = decodeURIComponent(value || '');
}
function inferFromImplicitShape(shape, size) {
    var shapeProd = 1;
    var implicitIdx = -1;
    for (var i = 0; i < shape.length; ++i) {
        if (shape[i] > 0) {
            shapeProd *= shape[i];
        }
        else if (shape[i] === -1) {
            if (implicitIdx !== -1) {
                throw Error("Shapes can only have 1 implicit size. " +
                    ("Found - 1 at dim " + implicitIdx + " and dim " + i));
            }
            implicitIdx = i;
        }
        else if (shape[i] <= 0) {
            throw Error("Shapes can not be <= 0. Found " + shape[i] + " at dim " + i);
        }
    }
    if (implicitIdx === -1) {
        if (size > 0 && size !== shapeProd) {
            throw Error("Size(" + size + ") must match the product of shape " + shape);
        }
        return shape;
    }
    if (size % shapeProd !== 0) {
        throw Error("The implicit shape can't be a fractional number. " +
            ("Got " + size + " / " + shapeProd));
    }
    var newShape = shape.slice();
    newShape[implicitIdx] = size / shapeProd;
    return newShape;
}
exports.inferFromImplicitShape = inferFromImplicitShape;
function squeezeShape(shape, axis) {
    var newShape = [];
    var keptDims = [];
    var j = 0;
    for (var i = 0; i < shape.length; ++i) {
        if (axis != null) {
            if (axis[j] === i && shape[i] > 1) {
                throw new Error("Can't squeeze axis " + i + " since its dim '" + shape[i] + "' is not 1");
            }
            if ((axis[j] == null || axis[j] > i) && shape[i] === 1) {
                newShape.push(shape[i]);
                keptDims.push(i);
            }
            if (axis[j] <= i) {
                j++;
            }
        }
        if (shape[i] > 1) {
            newShape.push(shape[i]);
            keptDims.push(i);
        }
    }
    return { newShape: newShape, keptDims: keptDims };
}
exports.squeezeShape = squeezeShape;
function getTypedArrayFromDType(dtype, size) {
    var values = null;
    if (dtype == null || dtype === 'float32') {
        values = new Float32Array(size);
    }
    else if (dtype === 'int32') {
        values = new Int32Array(size);
    }
    else if (dtype === 'bool') {
        values = new Uint8Array(size);
    }
    else {
        throw new Error("Unknown data type " + dtype);
    }
    return values;
}
exports.getTypedArrayFromDType = getTypedArrayFromDType;
function isTensorInList(tensor, tensorList) {
    for (var i = 0; i < tensorList.length; i++) {
        if (tensorList[i].id === tensor.id) {
            return true;
        }
    }
    return false;
}
exports.isTensorInList = isTensorInList;
function checkForNaN(vals, dtype, name) {
    if (dtype !== 'float32') {
        return;
    }
    for (var i = 0; i < vals.length; i++) {
        if (isNaN(vals[i])) {
            throw Error("The result of the '" + name + "' has NaNs.");
        }
    }
}
exports.checkForNaN = checkForNaN;
function flattenNameArrayMap(nameArrayMap, keys) {
    var xs = [];
    if (nameArrayMap instanceof tensor_1.Tensor) {
        xs.push(nameArrayMap);
    }
    else {
        var xMap = nameArrayMap;
        for (var i = 0; i < keys.length; i++) {
            xs.push(xMap[keys[i]]);
        }
    }
    return xs;
}
exports.flattenNameArrayMap = flattenNameArrayMap;
function unflattenToNameArrayMap(keys, flatArrays) {
    if (keys.length !== flatArrays.length) {
        throw new Error("Cannot unflatten Tensor[], keys and arrays are not of same length.");
    }
    var result = {};
    for (var i = 0; i < keys.length; i++) {
        result[keys[i]] = flatArrays[i];
    }
    return result;
}
exports.unflattenToNameArrayMap = unflattenToNameArrayMap;
function hasEncodingLoss(oldType, newType) {
    if (newType === 'float32') {
        return false;
    }
    if (newType === 'int32' && oldType !== 'float32') {
        return false;
    }
    if (newType === 'bool' && oldType === 'bool') {
        return false;
    }
    return true;
}
exports.hasEncodingLoss = hasEncodingLoss;
function copyTypedArray(array, dtype) {
    if (dtype == null || dtype === 'float32') {
        return new Float32Array(array);
    }
    else if (dtype === 'int32') {
        return new Int32Array(array);
    }
    else if (dtype === 'bool') {
        var bool = new Uint8Array(array.length);
        for (var i = 0; i < bool.length; ++i) {
            if (Math.round(array[i]) !== 0) {
                bool[i] = 1;
            }
        }
        return bool;
    }
    else {
        throw new Error("Unknown data type " + dtype);
    }
}
exports.copyTypedArray = copyTypedArray;
function isTypedArray(a) {
    return a instanceof Float32Array || a instanceof Int32Array ||
        a instanceof Uint8Array;
}
exports.isTypedArray = isTypedArray;
function bytesPerElement(dtype) {
    if (dtype === 'float32' || dtype === 'int32') {
        return 4;
    }
    else if (dtype === 'bool') {
        return 1;
    }
    else {
        throw new Error("Unknown dtype " + dtype);
    }
}
exports.bytesPerElement = bytesPerElement;
function isFunction(f) {
    return !!(f && f.constructor && f.call && f.apply);
}
exports.isFunction = isFunction;
function extractTensorsFromContainer(result) {
    return extractTensorsFromAny(result);
}
exports.extractTensorsFromContainer = extractTensorsFromContainer;
function extractTensorsFromAny(result) {
    if (result == null) {
        return [];
    }
    if (result instanceof tensor_1.Tensor) {
        return [result];
    }
    var list = [];
    var resultObj = result;
    if (!isIterable(resultObj)) {
        return [];
    }
    for (var k in resultObj) {
        var sublist = flatten(resultObj[k]).filter(function (x) { return x instanceof tensor_1.Tensor; });
        list.push.apply(list, sublist);
    }
    return list;
}
exports.extractTensorsFromAny = extractTensorsFromAny;
function isIterable(obj) {
    return Array.isArray(obj) || typeof obj === 'object';
}

},{"./tensor":32}],51:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var FORMAT_LIMIT_NUM_VALS = 20;
var FORMAT_NUM_FIRST_LAST_VALS = 3;
var FORMAT_NUM_SIG_DIGITS = 7;
function tensorToString(t, verbose) {
    var vals = t.dataSync();
    var padPerCol = computeMaxSizePerColumn(t);
    var valsLines = subTensorToString(vals, t.shape, t.strides, padPerCol);
    var lines = ['Tensor'];
    if (verbose) {
        lines.push("  dtype: " + t.dtype);
        lines.push("  rank: " + t.rank);
        lines.push("  shape: [" + t.shape + "]");
        lines.push("  values:");
    }
    lines.push(valsLines.map(function (l) { return '    ' + l; }).join('\n'));
    return lines.join('\n');
}
exports.tensorToString = tensorToString;
function computeMaxSizePerColumn(t) {
    var vals = t.dataSync();
    var n = t.size;
    var numCols = t.strides[t.strides.length - 1];
    var padPerCol = new Array(numCols).fill(0);
    if (t.rank > 1) {
        for (var row = 0; row < n / numCols; row++) {
            var offset = row * numCols;
            for (var j = 0; j < numCols; j++) {
                padPerCol[j] =
                    Math.max(padPerCol[j], valToString(vals[offset + j], 0).length);
            }
        }
    }
    return padPerCol;
}
function valToString(val, pad) {
    return util.rightPad(parseFloat(val.toFixed(FORMAT_NUM_SIG_DIGITS)).toString(), pad);
}
function subTensorToString(vals, shape, strides, padPerCol, isLast) {
    if (isLast === void 0) { isLast = true; }
    var size = shape[0];
    var rank = shape.length;
    if (rank === 0) {
        return [vals[0].toString()];
    }
    if (rank === 1) {
        if (size > FORMAT_LIMIT_NUM_VALS) {
            var firstVals = Array.from(vals.subarray(0, FORMAT_NUM_FIRST_LAST_VALS));
            var lastVals = Array.from(vals.subarray(size - FORMAT_NUM_FIRST_LAST_VALS, size));
            return [
                '[' + firstVals.map(function (x, i) { return valToString(x, padPerCol[i]); }).join(', ') +
                    ', ..., ' +
                    lastVals
                        .map(function (x, i) { return valToString(x, padPerCol[size - FORMAT_NUM_FIRST_LAST_VALS + i]); })
                        .join(', ') +
                    ']'
            ];
        }
        return [
            '[' +
                Array.from(vals).map(function (x, i) { return valToString(x, padPerCol[i]); }).join(', ') +
                ']'
        ];
    }
    var subshape = shape.slice(1);
    var substrides = strides.slice(1);
    var stride = strides[0];
    var lines = [];
    if (size > FORMAT_LIMIT_NUM_VALS) {
        for (var i = 0; i < FORMAT_NUM_FIRST_LAST_VALS; i++) {
            var start = i * stride;
            var end = start + stride;
            lines.push.apply(lines, subTensorToString(vals.subarray(start, end), subshape, substrides, padPerCol, false));
        }
        lines.push('...');
        for (var i = size - FORMAT_NUM_FIRST_LAST_VALS; i < size; i++) {
            var start = i * stride;
            var end = start + stride;
            lines.push.apply(lines, subTensorToString(vals.subarray(start, end), subshape, substrides, padPerCol, i === size - 1));
        }
    }
    else {
        for (var i = 0; i < size; i++) {
            var start = i * stride;
            var end = start + stride;
            lines.push.apply(lines, subTensorToString(vals.subarray(start, end), subshape, substrides, padPerCol, i === size - 1));
        }
    }
    var sep = rank === 2 ? ',' : '';
    lines[0] = '[' + lines[0] + sep;
    for (var i = 1; i < lines.length - 1; i++) {
        lines[i] = ' ' + lines[i] + sep;
    }
    var newLineSep = ',\n';
    for (var i = 2; i < rank; i++) {
        newLineSep += '\n';
    }
    lines[lines.length - 1] =
        ' ' + lines[lines.length - 1] + ']' + (isLast ? '' : newLineSep);
    return lines;
}

},{"./util":26}],58:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../util");
function axesAreInnerMostDims(axes, rank) {
    for (var i = 0; i < axes.length; ++i) {
        if (axes[axes.length - i - 1] !== rank - 1 - i) {
            return false;
        }
    }
    return true;
}
exports.axesAreInnerMostDims = axesAreInnerMostDims;
function combineLocations(outputLoc, reduceLoc, axes) {
    var rank = outputLoc.length + reduceLoc.length;
    var loc = [];
    var outIdx = 0;
    var reduceIdx = 0;
    for (var dim = 0; dim < rank; dim++) {
        if (axes.indexOf(dim) === -1) {
            loc.push(outputLoc[outIdx++]);
        }
        else {
            loc.push(reduceLoc[reduceIdx++]);
        }
    }
    return loc;
}
exports.combineLocations = combineLocations;
function computeOutAndReduceShapes(aShape, axes) {
    var outShape = [];
    var rank = aShape.length;
    for (var dim = 0; dim < rank; dim++) {
        if (axes.indexOf(dim) === -1) {
            outShape.push(aShape[dim]);
        }
    }
    var reduceShape = axes.map(function (dim) { return aShape[dim]; });
    return [outShape, reduceShape];
}
exports.computeOutAndReduceShapes = computeOutAndReduceShapes;
function expandShapeToKeepDim(shape, axes) {
    var reduceSubShape = axes.map(function (x) { return 1; });
    return combineLocations(shape, reduceSubShape, axes);
}
exports.expandShapeToKeepDim = expandShapeToKeepDim;
function parseAxisParam(axis, shape) {
    var rank = shape.length;
    axis = axis == null ? shape.map(function (s, i) { return i; }) : [].concat(axis);
    util.assert(axis.every(function (ax) { return ax >= -rank && ax < rank; }), "All values in axis param must be in range [-" + rank + ", " + rank + ") but " +
        ("got axis " + axis));
    util.assert(axis.every(function (ax) { return util.isInt(ax); }), "All values in axis param must be integers but " +
        ("got axis " + axis));
    return axis.map(function (a) { return a < 0 ? rank + a : a; });
}
exports.parseAxisParam = parseAxisParam;
function assertAxesAreInnerMostDims(msg, axes, rank) {
    util.assert(axesAreInnerMostDims(axes, rank), msg + " supports only inner-most axes for now. " +
        ("Got axes " + axes + " and rank-" + rank + " input."));
}
exports.assertAxesAreInnerMostDims = assertAxesAreInnerMostDims;
function getAxesPermutation(axes, rank) {
    if (axesAreInnerMostDims(axes, rank)) {
        return null;
    }
    var result = [];
    for (var i = 0; i < rank; ++i) {
        if (axes.indexOf(i) === -1) {
            result.push(i);
        }
    }
    axes.forEach(function (axis) { return result.push(axis); });
    return result;
}
exports.getAxesPermutation = getAxesPermutation;
function getUndoAxesPermutation(axes) {
    return axes.map(function (axis, i) { return [i, axis]; })
        .sort(function (a, b) { return a[1] - b[1]; })
        .map(function (x) { return x[0]; });
}
exports.getUndoAxesPermutation = getUndoAxesPermutation;
function getInnerMostAxes(numAxes, rank) {
    var res = [];
    for (var i = rank - numAxes; i < rank; ++i) {
        res.push(i);
    }
    return res;
}
exports.getInnerMostAxes = getInnerMostAxes;

},{"../util":26}],61:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../util");
function assertParams(aShape, bShape, axis) {
    var aRank = aShape.length;
    var bRank = bShape.length;
    util.assert(aShape.length === bShape.length, "Error in concat" + aRank + "D: rank of x1 (" + aRank + ") and x2 (" + bRank + ") " +
        "must be the same.");
    util.assert(axis >= 0 && axis < aRank, "Error in concat" + aRank + "D: axis must be " +
        ("between 0 and " + (aRank - 1) + "."));
    for (var i = 0; i < aRank; i++) {
        util.assert((i === axis) || (aShape[i] === bShape[i]), "Error in concat" + aRank + "D: Shape (" + aShape + ") does not match " +
            ("(" + bShape + ") along the non-concatenated axis " + i + "."));
    }
}
exports.assertParams = assertParams;
function computeOutShape1D(x1Shape, x2Shape) {
    util.assert(x1Shape.length === 1 && x2Shape.length === 1, 'x1 and x2 should be 1d array.');
    var outputShape = x1Shape.slice();
    outputShape[0] += x2Shape[0];
    return outputShape;
}
exports.computeOutShape1D = computeOutShape1D;
function computeOutShape(x1Shape, x2Shape, axis) {
    util.assert(x1Shape.length === x2Shape.length, 'x1 and x2 should have the same rank.');
    var outputShape = x1Shape.slice();
    outputShape[axis] += x2Shape[axis];
    return outputShape;
}
exports.computeOutShape = computeOutShape;
function computeGradientSliceShapes(aShape, bShape) {
    return {
        aBegin: [0, 0],
        aSize: aShape,
        bBegin: [0, aShape[1]],
        bSize: bShape
    };
}
exports.computeGradientSliceShapes = computeGradientSliceShapes;

},{"../util":26}],91:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globals_1 = require("../globals");
function operation(target, name, descriptor) {
    var fn = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return globals_1.tidy(name, function () { return fn.apply(void 0, args); });
    };
    return descriptor;
}
exports.operation = operation;

},{"../globals":34}],79:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var axis_util_1 = require("./axis_util");
var concat_util = require("./concat_util");
var operation_1 = require("./operation");
var ConcatOps = (function () {
    function ConcatOps() {
    }
    ConcatOps.concat1d = function (tensors) {
        return ConcatOps.concat(tensors, 0);
    };
    ConcatOps.concat2d = function (tensors, axis) {
        return ConcatOps.concat(tensors, axis);
    };
    ConcatOps.concat3d = function (tensors, axis) {
        return ConcatOps.concat(tensors, axis);
    };
    ConcatOps.concat4d = function (tensors, axis) {
        return ConcatOps.concat(tensors, axis);
    };
    ConcatOps.concat = function (tensors, axis) {
        if (axis === void 0) { axis = 0; }
        util.assert(tensors.length >= 1, 'Pass at least one tensor to concat');
        util.assertArgumentsAreTensors({ tensors: tensors }, 'concat');
        var result = tensors[0];
        if (tensors.length === 1) {
            return result;
        }
        var axes = axis_util_1.parseAxisParam(axis, result.shape);
        for (var i = 1; i < tensors.length; ++i) {
            result = concat2Tensors(result, tensors[i], axes[0]);
        }
        return result;
    };
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
        operation_1.operation
    ], ConcatOps, "concat", null);
    return ConcatOps;
}());
exports.ConcatOps = ConcatOps;
function concat2Tensors(a, b, axis) {
    concat_util.assertParams(a.shape, b.shape, axis);
    var outShape = concat_util.computeOutShape(a.shape, b.shape, axis);
    var a2D = a.as2D(-1, util.sizeFromShape(a.shape.slice(axis)));
    var b2D = b.as2D(-1, util.sizeFromShape(b.shape.slice(axis)));
    var _a = concat_util.computeGradientSliceShapes(a2D.shape, b2D.shape), aBegin = _a.aBegin, aSize = _a.aSize, bBegin = _a.bBegin, bSize = _a.bSize;
    var der = function (dy) {
        return { a: function () { return dy.slice(aBegin, aSize); }, b: function () { return dy.slice(bBegin, bSize); } };
    };
    var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.concat(a2D, b2D); }, { a: a2D, b: b2D }, der);
    return res.reshape(outShape);
}

},{"../doc":35,"../environment":24,"../util":26,"./axis_util":58,"./concat_util":61,"./operation":91}],134:[function(require,module,exports) {
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -

// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.



(function(global, module, define) {

function Alea(seed) {
  var me = this, mash = Mash();

  me.next = function() {
    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
    me.s0 = me.s1;
    me.s1 = me.s2;
    return me.s2 = t - (me.c = t | 0);
  };

  // Apply the seeding algorithm from Baagoe.
  me.c = 1;
  me.s0 = mash(' ');
  me.s1 = mash(' ');
  me.s2 = mash(' ');
  me.s0 -= mash(seed);
  if (me.s0 < 0) { me.s0 += 1; }
  me.s1 -= mash(seed);
  if (me.s1 < 0) { me.s1 += 1; }
  me.s2 -= mash(seed);
  if (me.s2 < 0) { me.s2 += 1; }
  mash = null;
}

function copy(f, t) {
  t.c = f.c;
  t.s0 = f.s0;
  t.s1 = f.s1;
  t.s2 = f.s2;
  return t;
}

function impl(seed, opts) {
  var xg = new Alea(seed),
      state = opts && opts.state,
      prng = xg.next;
  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
  prng.double = function() {
    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
  };
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

function Mash() {
  var n = 0xefc8249d;

  var mash = function(data) {
    data = data.toString();
    for (var i = 0; i < data.length; i++) {
      n += data.charCodeAt(i);
      var h = 0.02519603282416938 * n;
      n = h >>> 0;
      h -= n;
      h *= n;
      n = h >>> 0;
      h -= n;
      n += h * 0x100000000; // 2^32
    }
    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
  };

  return mash;
}


if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.alea = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],135:[function(require,module,exports) {
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;

  // Set up generator function.
  me.next = function() {
    var t = me.x ^ (me.x << 11);
    me.x = me.y;
    me.y = me.z;
    me.z = me.w;
    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
  };

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xor128 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],136:[function(require,module,exports) {
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var t = (me.x ^ (me.x >>> 2));
    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
    return (me.d = (me.d + 362437 | 0)) +
       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
  };

  me.x = 0;
  me.y = 0;
  me.z = 0;
  me.w = 0;
  me.v = 0;

  if (seed === (seed | 0)) {
    // Integer seed.
    me.x = seed;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 64; k++) {
    me.x ^= strseed.charCodeAt(k) | 0;
    if (k == strseed.length) {
      me.d = me.x << 10 ^ me.x >>> 4;
    }
    me.next();
  }
}

function copy(f, t) {
  t.x = f.x;
  t.y = f.y;
  t.z = f.z;
  t.w = f.w;
  t.v = f.v;
  t.d = f.d;
  return t;
}

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xorwow = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],137:[function(require,module,exports) {
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    // Update xor generator.
    var X = me.x, i = me.i, t, v, w;
    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
    X[i] = v;
    me.i = (i + 1) & 7;
    return v;
  };

  function init(me, seed) {
    var j, w, X = [];

    if (seed === (seed | 0)) {
      // Seed state array using a 32-bit integer.
      w = X[0] = seed;
    } else {
      // Seed state using a string.
      seed = '' + seed;
      for (j = 0; j < seed.length; ++j) {
        X[j & 7] = (X[j & 7] << 15) ^
            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
      }
    }
    // Enforce an array length of 8, not all zeroes.
    while (X.length < 8) X.push(0);
    for (j = 0; j < 8 && X[j] === 0; ++j);
    if (j == 8) w = X[7] = -1; else w = X[j];

    me.x = X;
    me.i = 0;

    // Discard an initial 256 values.
    for (j = 256; j > 0; --j) {
      me.next();
    }
  }

  init(me, seed);
}

function copy(f, t) {
  t.x = f.x.slice();
  t.i = f.i;
  return t;
}

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.x) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xorshift7 = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);


},{}],138:[function(require,module,exports) {
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().

(function(global, module, define) {

function XorGen(seed) {
  var me = this;

  // Set up generator function.
  me.next = function() {
    var w = me.w,
        X = me.X, i = me.i, t, v;
    // Update Weyl generator.
    me.w = w = (w + 0x61c88647) | 0;
    // Update xor generator.
    v = X[(i + 34) & 127];
    t = X[i = ((i + 1) & 127)];
    v ^= v << 13;
    t ^= t << 17;
    v ^= v >>> 15;
    t ^= t >>> 12;
    // Update Xor generator array state.
    v = X[i] = v ^ t;
    me.i = i;
    // Result is the combination.
    return (v + (w ^ (w >>> 16))) | 0;
  };

  function init(me, seed) {
    var t, v, i, j, w, X = [], limit = 128;
    if (seed === (seed | 0)) {
      // Numeric seeds initialize v, which is used to generates X.
      v = seed;
      seed = null;
    } else {
      // String seeds are mixed into v and X one character at a time.
      seed = seed + '\0';
      v = 0;
      limit = Math.max(limit, seed.length);
    }
    // Initialize circular array and weyl value.
    for (i = 0, j = -32; j < limit; ++j) {
      // Put the unicode characters into the array, and shuffle them.
      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
      // After 32 shuffles, take v as the starting w value.
      if (j === 0) w = v;
      v ^= v << 10;
      v ^= v >>> 15;
      v ^= v << 4;
      v ^= v >>> 13;
      if (j >= 0) {
        w = (w + 0x61c88647) | 0;     // Weyl.
        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
      }
    }
    // We have detected all zeroes; make the key nonzero.
    if (i >= 128) {
      X[(seed && seed.length || 0) & 127] = -1;
    }
    // Run the generator 512 times to further mix the state before using it.
    // Factoring this as a function slows the main generator, so it is just
    // unrolled here.  The weyl generator is not advanced while warming up.
    i = 127;
    for (j = 4 * 128; j > 0; --j) {
      v = X[(i + 34) & 127];
      t = X[i = ((i + 1) & 127)];
      v ^= v << 13;
      t ^= t << 17;
      v ^= v >>> 15;
      t ^= t >>> 12;
      X[i] = v ^ t;
    }
    // Storing state as object members is faster than using closure variables.
    me.w = w;
    me.X = X;
    me.i = i;
  }

  init(me, seed);
}

function copy(f, t) {
  t.i = f.i;
  t.w = f.w;
  t.X = f.X.slice();
  return t;
};

function impl(seed, opts) {
  if (seed == null) seed = +(new Date);
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (state.X) copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.xor4096 = impl;
}

})(
  this,                                     // window object or global
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);

},{}],139:[function(require,module,exports) {
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

(function(global, module, define) {

function XorGen(seed) {
  var me = this, strseed = '';

  // Set up generator function.
  me.next = function() {
    var b = me.b, c = me.c, d = me.d, a = me.a;
    b = (b << 25) ^ (b >>> 7) ^ c;
    c = (c - d) | 0;
    d = (d << 24) ^ (d >>> 8) ^ a;
    a = (a - b) | 0;
    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
    me.c = c = (c - d) | 0;
    me.d = (d << 16) ^ (c >>> 16) ^ a;
    return me.a = (a - b) | 0;
  };

  /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */

  me.a = 0;
  me.b = 0;
  me.c = 2654435769 | 0;
  me.d = 1367130551;

  if (seed === Math.floor(seed)) {
    // Integer seed.
    me.a = (seed / 0x100000000) | 0;
    me.b = seed | 0;
  } else {
    // String seed.
    strseed += seed;
  }

  // Mix in string seed, then discard an initial batch of 64 values.
  for (var k = 0; k < strseed.length + 20; k++) {
    me.b ^= strseed.charCodeAt(k) | 0;
    me.next();
  }
}

function copy(f, t) {
  t.a = f.a;
  t.b = f.b;
  t.c = f.c;
  t.d = f.d;
  return t;
};

function impl(seed, opts) {
  var xg = new XorGen(seed),
      state = opts && opts.state,
      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
  prng.double = function() {
    do {
      var top = xg.next() >>> 11,
          bot = (xg.next() >>> 0) / 0x100000000,
          result = (top + bot) / (1 << 21);
    } while (result === 0);
    return result;
  };
  prng.int32 = xg.next;
  prng.quick = prng;
  if (state) {
    if (typeof(state) == 'object') copy(state, xg);
    prng.state = function() { return copy(xg, {}); }
  }
  return prng;
}

if (module && module.exports) {
  module.exports = impl;
} else if (define && define.amd) {
  define(function() { return impl; });
} else {
  this.tychei = impl;
}

})(
  this,
  (typeof module) == 'object' && module,    // present in node.js
  (typeof define) == 'function' && define   // present with an AMD loader
);



},{}],140:[function(require,module,exports) {

},{}],133:[function(require,module,exports) {
var global = (1,eval)("this");
/*
Copyright 2014 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/

(function (pool, math) {
//
// The following constants are related to IEEE 754 limits.
//
var global = this,
    width = 256,        // each RC4 output is 0 <= x < 256
    chunks = 6,         // at least six RC4 outputs for each double
    digits = 52,        // there are 52 significant digits in a double
    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
    startdenom = math.pow(width, chunks),
    significance = math.pow(2, digits),
    overflow = significance * 2,
    mask = width - 1,
    nodecrypto;         // node.js crypto module, initialized at the bottom.

//
// seedrandom()
// This is the seedrandom function described above.
//
function seedrandom(seed, options, callback) {
  var key = [];
  options = (options == true) ? { entropy: true } : (options || {});

  // Flatten the seed string or build one from local entropy if needed.
  var shortseed = mixkey(flatten(
    options.entropy ? [seed, tostring(pool)] :
    (seed == null) ? autoseed() : seed, 3), key);

  // Use the seed to initialize an ARC4 generator.
  var arc4 = new ARC4(key);

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.
  var prng = function() {
    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
        d = startdenom,                 //   and denominator d = 2 ^ 48.
        x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  prng.int32 = function() { return arc4.g(4) | 0; }
  prng.quick = function() { return arc4.g(4) / 0x100000000; }
  prng.double = prng;

  // Mix the randomness into accumulated entropy.
  mixkey(tostring(arc4.S), pool);

  // Calling convention: what to return as a function of prng, seed, is_math.
  return (options.pass || callback ||
      function(prng, seed, is_math_call, state) {
        if (state) {
          // Load the arc4 state from the given state if it has an S array.
          if (state.S) { copy(state, arc4); }
          // Only provide the .state method if requested via options.state.
          prng.state = function() { return copy(arc4, {}); }
        }

        // If called as a method of Math (Math.seedrandom()), mutate
        // Math.random because that is how seedrandom.js has worked since v1.0.
        if (is_math_call) { math[rngname] = prng; return seed; }

        // Otherwise, it is a newer calling convention, so return the
        // prng directly.
        else return prng;
      })(
  prng,
  shortseed,
  'global' in options ? options.global : (this == math),
  options.state);
}
math['seed' + rngname] = seedrandom;

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
function ARC4(key) {
  var t, keylen = key.length,
      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) {
    s[i] = i++;
  }
  for (i = 0; i < width; i++) {
    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
    s[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  (me.g = function(count) {
    // Using instance members instead of closure state nearly doubles speed.
    var t, r = 0,
        i = me.i, j = me.j, s = me.S;
    while (count--) {
      t = s[i = mask & (i + 1)];
      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
    }
    me.i = i; me.j = j;
    return r;
    // For robust unpredictability, the function call below automatically
    // discards an initial batch of values.  This is called RC4-drop[256].
    // See http://google.com/search?q=rsa+fluhrer+response&btnI
  })(width);
}

//
// copy()
// Copies internal state of ARC4 to or from a plain object.
//
function copy(f, t) {
  t.i = f.i;
  t.j = f.j;
  t.S = f.S.slice();
  return t;
};

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
function flatten(obj, depth) {
  var result = [], typ = (typeof obj), prop;
  if (depth && typ == 'object') {
    for (prop in obj) {
      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
    }
  }
  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
function mixkey(seed, key) {
  var stringseed = seed + '', smear, j = 0;
  while (j < stringseed.length) {
    key[mask & j] =
      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
  }
  return tostring(key);
}

//
// autoseed()
// Returns an object for autoseeding, using window.crypto and Node crypto
// module if available.
//
function autoseed() {
  try {
    var out;
    if (nodecrypto && (out = nodecrypto.randomBytes)) {
      // The use of 'out' to remember randomBytes makes tight minified code.
      out = out(width);
    } else {
      out = new Uint8Array(width);
      (global.crypto || global.msCrypto).getRandomValues(out);
    }
    return tostring(out);
  } catch (e) {
    var browser = global.navigator,
        plugins = browser && browser.plugins;
    return [+new Date, global, plugins, global.screen, tostring(pool)];
  }
}

//
// tostring()
// Converts an array of charcodes to a string
//
function tostring(a) {
  return String.fromCharCode.apply(0, a);
}

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to interfere with deterministic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

//
// Nodejs and AMD support: export the implementation as a module using
// either convention.
//
if ((typeof module) == 'object' && module.exports) {
  module.exports = seedrandom;
  // When in node.js, try using crypto package for autoseeding.
  try {
    nodecrypto = require('crypto');
  } catch (ex) {}
} else if ((typeof define) == 'function' && define.amd) {
  define(function() { return seedrandom; });
}

// End anonymous scope, and pass initial values.
})(
  [],     // pool: entropy pool starts empty
  Math    // math: package containing random, pow, and seedrandom
);

},{"crypto":140}],132:[function(require,module,exports) {
// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = require('./lib/alea');

// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = require('./lib/xor128');

// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = require('./lib/xorwow');

// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = require('./lib/xorshift7');

// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = require('./lib/xor4096');

// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = require('./lib/tychei');

// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = require('./seedrandom');

sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;

module.exports = sr;

},{"./lib/alea":134,"./lib/xor128":135,"./lib/xorwow":136,"./lib/xorshift7":137,"./lib/xor4096":138,"./lib/tychei":139,"./seedrandom":133}],128:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var seedrandom = require("seedrandom");
var MPRandGauss = (function () {
    function MPRandGauss(mean, stdDeviation, dtype, truncated, seed) {
        this.mean = mean;
        this.stdDev = stdDeviation;
        this.dtype = dtype;
        this.nextVal = NaN;
        this.truncated = truncated;
        if (this.truncated) {
            this.upper = this.mean + this.stdDev * 2;
            this.lower = this.mean - this.stdDev * 2;
        }
        var seedValue = seed ? seed : Math.random();
        this.random = seedrandom.alea(seedValue.toString());
    }
    MPRandGauss.prototype.nextValue = function () {
        if (!isNaN(this.nextVal)) {
            var value = this.nextVal;
            this.nextVal = NaN;
            return value;
        }
        var resultX, resultY;
        var isValid = false;
        while (!isValid) {
            var v1 = void 0, v2 = void 0, s = void 0;
            do {
                v1 = 2 * this.random() - 1;
                v2 = 2 * this.random() - 1;
                s = v1 * v1 + v2 * v2;
            } while (s >= 1 || s === 0);
            var mul = Math.sqrt(-2.0 * Math.log(s) / s);
            resultX = this.mean + this.stdDev * v1 * mul;
            resultY = this.mean + this.stdDev * v2 * mul;
            if (!this.truncated || this.isValidTruncated(resultX)) {
                isValid = true;
            }
        }
        if (!this.truncated || this.isValidTruncated(resultY)) {
            this.nextVal = this.convertValue(resultY);
        }
        return this.convertValue(resultX);
    };
    MPRandGauss.prototype.convertValue = function (value) {
        if (this.dtype == null || this.dtype === 'float32') {
            return value;
        }
        return Math.round(value);
    };
    MPRandGauss.prototype.isValidTruncated = function (value) {
        return value <= this.upper && value >= this.lower;
    };
    return MPRandGauss;
}());
exports.MPRandGauss = MPRandGauss;

},{"seedrandom":132}],86:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var util = require("../util");
var axis_util = require("./axis_util");
var operation_1 = require("./operation");
var ops = require("./ops");
var ReductionOps = (function () {
    function ReductionOps() {
    }
    ReductionOps.logSumExp = function (x, axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        util.assertArgumentsAreTensors({ x: x }, 'logSumExp');
        var axes = axis_util.parseAxisParam(axis, x.shape);
        var xMax = x.max(axes, true);
        var a = x.sub(xMax);
        var b = a.exp();
        var c = b.sum(axes);
        var d = c.log();
        var res = xMax.reshape(d.shape).add(d);
        if (keepDims) {
            var newShape = axis_util.expandShapeToKeepDim(res.shape, axes);
            return res.reshape(newShape);
        }
        return res;
    };
    ReductionOps.sum = function (x, axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        util.assertArgumentsAreTensors({ x: x }, 'sum');
        if (x.dtype === 'bool') {
            x = x.toInt();
        }
        var axes = axis_util.parseAxisParam(axis, x.shape);
        var customOp = globals_1.customGrad(function (x) {
            var permutation = axis_util.getAxesPermutation(axes, x.rank);
            var reductionAxes = axes;
            var permutedX = x;
            if (permutation != null) {
                permutedX = x.transpose(permutation);
                reductionAxes =
                    axis_util.getInnerMostAxes(reductionAxes.length, x.rank);
            }
            var value = environment_1.ENV.engine.runKernel(function (backend) { return backend.sum(permutedX, reductionAxes); }, { permutedX: permutedX });
            if (keepDims) {
                var newShape = axis_util.expandShapeToKeepDim(value.shape, axes);
                value = value.reshape(newShape);
            }
            var gradFunc = function (dy) {
                var expandedDyShape = x.shape.slice();
                axes.forEach(function (axis) {
                    expandedDyShape[axis] = 1;
                });
                var expandedDy = dy.reshape(expandedDyShape);
                var derX = expandedDy.mul(ops.ones(x.shape, 'float32'));
                return derX;
            };
            return { value: value, gradFunc: gradFunc };
        });
        return customOp(x);
    };
    ReductionOps.mean = function (x, axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        util.assertArgumentsAreTensors({ x: x }, 'mean');
        var axes = axis_util.parseAxisParam(axis, x.shape);
        var shapes = axis_util.computeOutAndReduceShapes(x.shape, axes);
        var reduceShape = shapes[1];
        var reduceSize = util.sizeFromShape(reduceShape);
        var customOp = globals_1.customGrad(function (x) {
            var reduceSizeScalar = ops.scalar(reduceSize);
            var xReduce = reduceSizeScalar.dtype === x.dtype ?
                x :
                x.cast(reduceSizeScalar.dtype);
            var res = xReduce.div(reduceSizeScalar);
            var value = res.sum(axis, keepDims);
            var gradFunc = function (dy) {
                var expandedDyShape = x.shape.slice();
                axes.forEach(function (axis) {
                    expandedDyShape[axis] = 1;
                });
                var expandedDy = dy.reshape(expandedDyShape);
                var derX = expandedDy.mul(ops.ones(x.shape, 'float32')).div(reduceSizeScalar);
                return derX;
            };
            return { value: value, gradFunc: gradFunc };
        });
        return customOp(x);
    };
    ReductionOps.min = function (x, axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        util.assertArgumentsAreTensors({ x: x }, 'min');
        var origAxes = axis_util.parseAxisParam(axis, x.shape);
        var axes = origAxes;
        var permutedAxes = axis_util.getAxesPermutation(axes, x.rank);
        if (permutedAxes != null) {
            x = x.transpose(permutedAxes);
            axes = axis_util.getInnerMostAxes(axes.length, x.rank);
        }
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.min(x, axes); }, { x: x });
        if (keepDims) {
            var newShape = axis_util.expandShapeToKeepDim(res.shape, origAxes);
            return res.reshape(newShape);
        }
        return res;
    };
    ReductionOps.max = function (x, axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        util.assertArgumentsAreTensors({ x: x }, 'max');
        var origAxes = axis_util.parseAxisParam(axis, x.shape);
        var axes = origAxes;
        var permutedAxes = axis_util.getAxesPermutation(axes, x.rank);
        if (permutedAxes != null) {
            x = x.transpose(permutedAxes);
            axes = axis_util.getInnerMostAxes(axes.length, x.rank);
        }
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.max(x, axes); }, { x: x });
        if (keepDims) {
            var newShape = axis_util.expandShapeToKeepDim(res.shape, origAxes);
            return res.reshape(newShape);
        }
        return res;
    };
    ReductionOps.argMin = function (x, axis) {
        if (axis === void 0) { axis = 0; }
        util.assertArgumentsAreTensors({ x: x }, 'argMin');
        if (axis == null) {
            axis = 0;
        }
        var axes = axis_util.parseAxisParam(axis, x.shape);
        var permutedAxes = axis_util.getAxesPermutation(axes, x.rank);
        if (permutedAxes != null) {
            x = x.transpose(permutedAxes);
            axes = axis_util.getInnerMostAxes(axes.length, x.rank);
        }
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.argMin(x, axes[0]); }, { x: x });
    };
    ReductionOps.argMax = function (x, axis) {
        if (axis === void 0) { axis = 0; }
        util.assertArgumentsAreTensors({ x: x }, 'argMax');
        if (axis == null) {
            axis = 0;
        }
        var axes = axis_util.parseAxisParam(axis, x.shape);
        var permutedAxes = axis_util.getAxesPermutation(axes, x.rank);
        if (permutedAxes != null) {
            x = x.transpose(permutedAxes);
            axes = axis_util.getInnerMostAxes(axes.length, x.rank);
        }
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.argMax(x, axes[0]); }, { x: x });
    };
    ReductionOps.moments = function (x, axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        util.assertArgumentsAreTensors({ x: x }, 'moments');
        var axes = axis_util.parseAxisParam(axis, x.shape);
        var mean = x.mean(axes, keepDims);
        var keepDimsShape = mean.shape;
        if (!keepDims) {
            keepDimsShape = axis_util.expandShapeToKeepDim(mean.shape, axes);
        }
        var devSquared = x.toFloat().sub(mean.reshape(keepDimsShape)).square();
        var variance = devSquared.mean(axes, keepDims);
        return { mean: mean, variance: variance };
    };
    ReductionOps.unsortedSegmentSum = function (x, segmentIds, numSegments, axis) {
        if (axis === void 0) { axis = 0; }
        util.assertArgumentsAreTensors({ x: x, segmentIds: segmentIds }, 'unsortedSegmentSum');
        util.assert(segmentIds.dtype === 'int32', 'Segment Ids must be of dtype `int32`');
        axis = axis_util.parseAxisParam(axis, x.shape)[0];
        var res = [];
        var dim = segmentIds.shape[0];
        var newShape = [];
        for (var i = 0; i < x.shape.length; i++) {
            if (i === axis) {
                newShape.push(dim);
            }
            else {
                newShape.push(1);
            }
        }
        var reshapedSegmentIds = ops.reshape(segmentIds, newShape);
        for (var i = 0; i < numSegments; i++) {
            var segmentId = ops.scalar(i, 'int32');
            var mask = ops.equal(segmentId, reshapedSegmentIds).asType('float32');
            var sum = mask.mul(x).sum(axis);
            res.push(sum);
        }
        return ops.stack(res, axis);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "logSumExp", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "sum", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "mean", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "min", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "max", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "argMin", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "argMax", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Normalization' }),
        operation_1.operation
    ], ReductionOps, "moments", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Reduction' }),
        operation_1.operation
    ], ReductionOps, "unsortedSegmentSum", null);
    return ReductionOps;
}());
exports.ReductionOps = ReductionOps;

},{"../doc":35,"../environment":24,"../globals":34,"../util":26,"./axis_util":58,"./operation":91,"./ops":47}],73:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var tensor_1 = require("../tensor");
var tensor_util = require("../tensor_util");
var util = require("../util");
var axis_util_1 = require("./axis_util");
var concat_1 = require("./concat");
var operation_1 = require("./operation");
var rand_1 = require("./rand");
var reduction_ops_1 = require("./reduction_ops");
var ArrayOps = (function () {
    function ArrayOps() {
    }
    ArrayOps.tensor = function (values, shape, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        var inferredShape = util.inferShape(values);
        if (shape != null && inferredShape.length !== 1) {
            util.assertShapesMatch(shape, inferredShape, "Error creating a new Tensor. " +
                ("Inferred shape (" + inferredShape + ") does not match the ") +
                ("provided shape (" + shape + "). "));
        }
        if (!util.isTypedArray(values) && !Array.isArray(values)) {
            values = [values];
        }
        shape = shape || inferredShape;
        return tensor_1.Tensor.make(shape, { values: toTypedArray(values, dtype) }, dtype);
    };
    ArrayOps.scalar = function (value, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        if (util.isTypedArray(value) || Array.isArray(value)) {
            throw new Error('Error creating a new Scalar: value must be a primitive ' +
                '(number|boolean)');
        }
        return ArrayOps.tensor(value, [], dtype);
    };
    ArrayOps.tensor1d = function (values, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        var inferredShape = util.inferShape(values);
        if (inferredShape.length !== 1) {
            throw new Error('tensor1d() requires values to be a flat/TypedArray');
        }
        return ArrayOps.tensor(values, inferredShape, dtype);
    };
    ArrayOps.tensor2d = function (values, shape, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        if (shape != null && shape.length !== 2) {
            throw new Error('tensor2d() requires shape to have two numbers');
        }
        var inferredShape = util.inferShape(values);
        if (inferredShape.length !== 2 && inferredShape.length !== 1) {
            throw new Error('tensor2d() requires values to be number[][] or flat/TypedArray');
        }
        if (inferredShape.length === 1 && shape == null) {
            throw new Error('tensor2d() requires shape to be provided when `values` ' +
                'are a flat/TypedArray');
        }
        shape = shape || inferredShape;
        return ArrayOps.tensor(values, shape, dtype);
    };
    ArrayOps.tensor3d = function (values, shape, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        if (shape != null && shape.length !== 3) {
            throw new Error('tensor3d() requires shape to have three numbers');
        }
        var inferredShape = util.inferShape(values);
        if (inferredShape.length !== 3 && inferredShape.length !== 1) {
            throw new Error('tensor3d() requires values to be number[][][] or flat/TypedArray');
        }
        if (inferredShape.length === 1 && shape == null) {
            throw new Error('tensor3d() requires shape to be provided when `values` ' +
                'are a flat array');
        }
        shape = shape || inferredShape;
        return ArrayOps.tensor(values, shape, dtype);
    };
    ArrayOps.tensor4d = function (values, shape, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        if (shape != null && shape.length !== 4) {
            throw new Error('tensor4d() requires shape to have four numbers');
        }
        var inferredShape = util.inferShape(values);
        if (inferredShape.length !== 4 && inferredShape.length !== 1) {
            throw new Error('tensor4d() requires values to be number[][][][] or flat/TypedArray');
        }
        if (inferredShape.length === 1 && shape == null) {
            throw new Error('tensor4d() requires shape to be provided when `values` ' +
                'are a flat array');
        }
        shape = shape || inferredShape;
        return ArrayOps.tensor(values, shape, dtype);
    };
    ArrayOps.ones = function (shape, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        var values = makeOnesTypedArray(util.sizeFromShape(shape), dtype);
        return tensor_1.Tensor.make(shape, { values: values }, dtype);
    };
    ArrayOps.zeros = function (shape, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        var values = makeZerosTypedArray(util.sizeFromShape(shape), dtype);
        return tensor_1.Tensor.make(shape, { values: values }, dtype);
    };
    ArrayOps.fill = function (shape, value, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        var values = util.getTypedArrayFromDType(dtype, util.sizeFromShape(shape));
        values.fill(value);
        return tensor_1.Tensor.make(shape, { values: values }, dtype);
    };
    ArrayOps.onesLike = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'onesLike');
        return ArrayOps.ones(x.shape, x.dtype);
    };
    ArrayOps.zerosLike = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'zerosLike');
        return ArrayOps.zeros(x.shape, x.dtype);
    };
    ArrayOps.clone = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'clone');
        var der = function (dy) {
            return { x: function () { return dy.toFloat(); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) {
            return tensor_1.Tensor.make(x.shape, { dataId: x.dataId }, x.dtype);
        }, { x: x }, der);
    };
    ArrayOps.eye = function (numRows, numColumns, batchShape, dtype) {
        if (dtype === void 0) { dtype = 'float32'; }
        if (numColumns == null) {
            numColumns = numRows;
        }
        var buffer = ArrayOps.buffer([numRows, numColumns], dtype);
        var n = numRows <= numColumns ? numRows : numColumns;
        for (var i = 0; i < n; ++i) {
            buffer.set(1, i, i);
        }
        var out = buffer.toTensor().as2D(numRows, numColumns);
        if (batchShape == null) {
            return out;
        }
        else {
            if (batchShape.length === 1) {
                return ArrayOps.tile(ArrayOps.expandDims(out, 0), [batchShape[0], 1, 1]);
            }
            else if (batchShape.length === 2) {
                return ArrayOps.tile(ArrayOps.expandDims(ArrayOps.expandDims(out, 0), 0), [batchShape[0], batchShape[1], 1, 1]);
            }
            else {
                throw new Error("eye() currently supports only 1D and 2D " +
                    ("batchShapes, but received " + batchShape.length + "D."));
            }
        }
    };
    ArrayOps.randomNormal = function (shape, mean, stdDev, dtype, seed) {
        if (mean === void 0) { mean = 0; }
        if (stdDev === void 0) { stdDev = 1; }
        if (dtype != null && dtype === 'bool') {
            throw new Error("Unsupported data type " + dtype);
        }
        var randGauss = new rand_1.MPRandGauss(mean, stdDev, dtype, false, seed);
        var res = ArrayOps.buffer(shape, dtype);
        for (var i = 0; i < res.values.length; i++) {
            res.values[i] = randGauss.nextValue();
        }
        return res.toTensor();
    };
    ArrayOps.truncatedNormal = function (shape, mean, stdDev, dtype, seed) {
        if (mean === void 0) { mean = 0; }
        if (stdDev === void 0) { stdDev = 1; }
        if (dtype != null && dtype === 'bool') {
            throw new Error("Unsupported data type " + dtype);
        }
        var randGauss = new rand_1.MPRandGauss(mean, stdDev, dtype, true, seed);
        var res = ArrayOps.buffer(shape, dtype);
        for (var i = 0; i < res.values.length; i++) {
            res.values[i] = randGauss.nextValue();
        }
        return res.toTensor();
    };
    ArrayOps.randomUniform = function (shape, minval, maxval, dtype) {
        if (minval === void 0) { minval = 0; }
        if (maxval === void 0) { maxval = 1; }
        if (dtype === void 0) { dtype = 'float32'; }
        var res = ArrayOps.buffer(shape, dtype);
        for (var i = 0; i < res.values.length; i++) {
            res.values[i] = util.randUniform(minval, maxval);
        }
        return res.toTensor();
    };
    ArrayOps.rand = function (shape, randFunction, dtype) {
        var size = util.sizeFromShape(shape);
        var values = null;
        if (dtype == null || dtype === 'float32') {
            values = new Float32Array(size);
        }
        else if (dtype === 'int32') {
            values = new Int32Array(size);
        }
        else if (dtype === 'bool') {
            values = new Uint8Array(size);
        }
        else {
            throw new Error("Unknown data type " + dtype);
        }
        for (var i = 0; i < size; i++) {
            values[i] = randFunction();
        }
        return tensor_1.Tensor.make(shape, { values: values }, dtype);
    };
    ArrayOps.multinomial = function (logits, numSamples, seed, normalized) {
        if (normalized === void 0) { normalized = false; }
        util.assertArgumentsAreTensors({ logits: logits }, 'multinomial');
        var numOutcomes = logits.size;
        var origRank = logits.rank;
        if (numOutcomes < 2) {
            throw new Error("Error in multinomial: you need at least 2 outcomes, but got " +
                (numOutcomes + "."));
        }
        if (origRank > 2) {
            throw new Error("Rank of probabilities must be 1 or 2, but is " + origRank);
        }
        seed = seed || Math.random();
        var logits2D = origRank === 1 ? logits.as2D(1, -1) : logits;
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.multinomial(logits2D, normalized, numSamples, seed); }, { logits2D: logits2D });
        return origRank === 1 ? res.as1D() : res;
    };
    ArrayOps.oneHot = function (indices, depth, onValue, offValue) {
        if (onValue === void 0) { onValue = 1; }
        if (offValue === void 0) { offValue = 0; }
        util.assert(indices.dtype === 'int32', 'Indices must be of dtype `int32`');
        if (depth < 2) {
            throw new Error("Error in oneHot: depth must be >=2, but it is " + depth);
        }
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.oneHot(indices, depth, onValue, offValue); }, { indices: indices });
    };
    ArrayOps.fromPixels = function (pixels, numChannels) {
        if (numChannels === void 0) { numChannels = 3; }
        if (numChannels > 4) {
            throw new Error('Cannot construct Tensor with more than 4 channels from pixels.');
        }
        return environment_1.ENV.engine.fromPixels(pixels, numChannels);
    };
    ArrayOps.toPixels = function (img, canvas) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, height, width, depth, minTensor, maxTensor, min, max, data, multiplier, bytes, i, r, g, b, a, j, ctx, imageData;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        util.assertArgumentsAreTensors({ img: img }, 'toPixels');
                        if (img.rank !== 2 && img.rank !== 3) {
                            throw new Error("toPixels only supports rank 2 or 3 tensors, got rank " + img.rank + ".");
                        }
                        _a = img.shape.slice(0, 2), height = _a[0], width = _a[1];
                        depth = img.rank === 2 ? 1 : img.shape[2];
                        if (depth > 4 || depth === 2) {
                            throw new Error("toPixels only supports depth of size " +
                                ("1, 3 or 4 but got " + depth));
                        }
                        minTensor = img.min();
                        maxTensor = img.max();
                        return [4, minTensor.data()];
                    case 1:
                        min = (_b.sent())[0];
                        return [4, maxTensor.data()];
                    case 2:
                        max = (_b.sent())[0];
                        minTensor.dispose();
                        maxTensor.dispose();
                        if (img.dtype === 'float32') {
                            if (min < 0 || max > 1) {
                                throw new Error("Tensor values for a float32 Tensor must be in the " +
                                    ("range [0 - 1] but got range [" + min + " - " + max + "]."));
                            }
                        }
                        else if (img.dtype === 'int32') {
                            if (min < 0 || max > 255) {
                                throw new Error("Tensor values for a int32 Tensor must be in the " +
                                    ("range [0 - 255] but got range [" + min + " - " + max + "]."));
                            }
                        }
                        else {
                            throw new Error("Unsupported type for toPixels: " + img.dtype + "." +
                                " Please use float32 or int32 tensors.");
                        }
                        return [4, img.data()];
                    case 3:
                        data = _b.sent();
                        multiplier = img.dtype === 'float32' ? 255 : 1;
                        bytes = new Uint8ClampedArray(width * height * 4);
                        for (i = 0; i < height * width; ++i) {
                            r = void 0, g = void 0, b = void 0, a = void 0;
                            if (depth === 1) {
                                r = data[i] * multiplier;
                                g = data[i] * multiplier;
                                b = data[i] * multiplier;
                                a = 255;
                            }
                            else if (depth === 3) {
                                r = data[i * 3] * multiplier;
                                g = data[i * 3 + 1] * multiplier;
                                b = data[i * 3 + 2] * multiplier;
                                a = 255;
                            }
                            else if (depth === 4) {
                                r = data[i * 4] * multiplier;
                                g = data[i * 4 + 1] * multiplier;
                                b = data[i * 4 + 2] * multiplier;
                                a = data[i * 4 + 3] * multiplier;
                            }
                            j = i * 4;
                            bytes[j + 0] = Math.round(r);
                            bytes[j + 1] = Math.round(g);
                            bytes[j + 2] = Math.round(b);
                            bytes[j + 3] = Math.round(a);
                        }
                        if (canvas != null) {
                            canvas.width = width;
                            canvas.height = height;
                            ctx = canvas.getContext('2d');
                            imageData = new ImageData(bytes, width, height);
                            ctx.putImageData(imageData, 0, 0);
                        }
                        return [2, bytes];
                }
            });
        });
    };
    ArrayOps.reshape = function (x, shape) {
        util.assertArgumentsAreTensors({ x: x }, 'reshape');
        shape = util.inferFromImplicitShape(shape, x.size);
        util.assert(x.size === util.sizeFromShape(shape), 'new shape and old shape must have the same number of elements.');
        var grad = function (dy) {
            return { x: function () { return dy.reshape(x.shape); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.reshape(x, shape); }, { x: x }, grad);
    };
    ArrayOps.squeeze = function (x, axis) {
        util.assertArgumentsAreTensors({ x: x }, 'squeeze');
        return ArrayOps.reshape(x, util.squeezeShape(x.shape, axis).newShape);
    };
    ArrayOps.cast = function (x, dtype) {
        util.assertArgumentsAreTensors({ x: x }, 'cast');
        var grad = function (dy) {
            return { x: function () { return dy.clone(); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.cast(x, dtype); }, { x: x }, grad);
    };
    ArrayOps.tile = function (x, reps) {
        util.assertArgumentsAreTensors({ x: x }, 'tile');
        util.assert(x.rank === reps.length, "Error in transpose: rank of input " + x.rank + " " +
            ("must match length of reps " + reps + "."));
        var grad = function (dy) {
            var derX = function () {
                var xGrad = ArrayOps.zerosLike(x);
                if (x.rank === 1) {
                    for (var i = 0; i < reps[0]; ++i) {
                        xGrad = xGrad.add(dy.slice([i * x.shape[0]], [x.shape[0]]));
                    }
                }
                else if (x.rank === 2) {
                    for (var i = 0; i < reps[0]; ++i) {
                        for (var j = 0; j < reps[1]; ++j) {
                            xGrad = xGrad.add(dy.slice([i * x.shape[0], j * x.shape[1]], [x.shape[0], x.shape[1]]));
                        }
                    }
                }
                else if (x.rank === 3) {
                    for (var i = 0; i < reps[0]; ++i) {
                        for (var j = 0; j < reps[1]; ++j) {
                            for (var k = 0; k < reps[2]; ++k) {
                                xGrad = xGrad.add(dy.slice([i * x.shape[0], j * x.shape[1], k * x.shape[2]], [x.shape[0], x.shape[1], x.shape[2]]));
                            }
                        }
                    }
                }
                else if (x.rank === 4) {
                    for (var i = 0; i < reps[0]; ++i) {
                        for (var j = 0; j < reps[1]; ++j) {
                            for (var k = 0; k < reps[2]; ++k) {
                                for (var l = 0; l < reps[3]; ++l) {
                                    xGrad = xGrad.add(dy.slice([
                                        i * x.shape[0], j * x.shape[1], k * x.shape[2],
                                        l * x.shape[3]
                                    ], [x.shape[0], x.shape[1], x.shape[2], x.shape[3]]));
                                }
                            }
                        }
                    }
                }
                else {
                    throw new Error("Gradient for tile operation is not implemented for rank-" +
                        (x.rank + " tensors yet."));
                }
                return xGrad;
            };
            return { x: derX };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.tile(x, reps); }, { x: x }, grad);
    };
    ArrayOps.gather = function (x, indices, axis) {
        if (axis === void 0) { axis = 0; }
        util.assertArgumentsAreTensors({ x: x, indices: indices }, 'gather');
        util.assert(indices.dtype === 'int32', 'Indices must be of dtype `int32`');
        axis = axis_util_1.parseAxisParam(axis, x.shape)[0];
        var grad = function (dy) {
            var derX = function () {
                return reduction_ops_1.ReductionOps.unsortedSegmentSum(dy, indices, x.shape[axis], axis);
            };
            return { x: derX };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.gather(x, indices, axis); }, { x: x }, grad);
    };
    ArrayOps.pad1d = function (x, paddings, constantValue) {
        if (constantValue === void 0) { constantValue = 0; }
        util.assert(paddings.length === 2, 'Invalid number of paddings. Must be length of 2.');
        return ArrayOps.pad(x, [paddings], constantValue);
    };
    ArrayOps.pad2d = function (x, paddings, constantValue) {
        if (constantValue === void 0) { constantValue = 0; }
        util.assert(paddings.length === 2 && paddings[0].length === 2 &&
            paddings[1].length === 2, 'Invalid number of paddings. Must be length of 2 each.');
        return ArrayOps.pad(x, paddings, constantValue);
    };
    ArrayOps.pad3d = function (x, paddings, constantValue) {
        if (constantValue === void 0) { constantValue = 0; }
        util.assert(paddings.length === 3 && paddings[0].length === 2 &&
            paddings[1].length === 2 && paddings[2].length === 2, 'Invalid number of paddings. Must be length of 2 each.');
        return ArrayOps.pad(x, paddings, constantValue);
    };
    ArrayOps.pad4d = function (x, paddings, constantValue) {
        if (constantValue === void 0) { constantValue = 0; }
        util.assert(paddings.length === 4 && paddings[0].length === 2 &&
            paddings[1].length === 2 && paddings[2].length === 2 &&
            paddings[3].length === 2, 'Invalid number of paddings. Must be length of 2 each.');
        return ArrayOps.pad(x, paddings, constantValue);
    };
    ArrayOps.pad = function (x, paddings, constantValue) {
        if (constantValue === void 0) { constantValue = 0; }
        util.assertArgumentsAreTensors({ x: x }, 'pad');
        if (x.rank === 0) {
            throw new Error('pad(scalar) is not defined. Pass non-scalar to pad');
        }
        var begin = paddings.map(function (p) { return p[0]; });
        var grad = function (dy) {
            return { x: function () { return dy.slice(begin, x.shape); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.pad(x, paddings, constantValue); }, { x: x }, grad);
    };
    ArrayOps.stack = function (tensors, axis) {
        if (axis === void 0) { axis = 0; }
        util.assertArgumentsAreTensors({ tensors: tensors }, 'stack');
        util.assert(tensors.length >= 1, 'Pass at least one tensor to tf.stack');
        if (tensors.length === 1) {
            return tensors[0].expandDims(axis);
        }
        var rank = tensors[0].rank;
        var shape = tensors[0].shape;
        var dtype = tensors[0].dtype;
        util.assert(axis <= rank, 'Axis must be <= rank of the tensor');
        tensors.forEach(function (t) {
            util.assertShapesMatch(shape, t.shape, 'All tensors passed to stack must have matching shapes');
        });
        tensors.forEach(function (t) {
            util.assert(dtype === t.dtype, 'All tensors passed to stack must have matching dtypes');
        });
        var expandedTensors = tensors.map(function (t) { return t.expandDims(axis); });
        return concat_1.ConcatOps.concat(expandedTensors, axis);
    };
    ArrayOps.split = function (x, numOrSizeSplits, axis) {
        if (axis === void 0) { axis = 0; }
        util.assertArgumentsAreTensors({ x: x }, 'split');
        axis = axis_util_1.parseAxisParam(axis, x.shape)[0];
        var splitSizes;
        if (typeof (numOrSizeSplits) === 'number') {
            util.assert(x.shape[axis] % numOrSizeSplits === 0, 'Number of splits must evenly divide the axis.');
            splitSizes = Array(numOrSizeSplits).fill(x.shape[axis] / numOrSizeSplits);
        }
        else {
            util.assert(x.shape[axis] === numOrSizeSplits.reduce(function (a, b) { return a + b; }), 'The sum of sizes must match the size of the axis dimension.');
            splitSizes = numOrSizeSplits;
        }
        var begin = Array(x.rank).fill(0);
        var size = x.shape.slice();
        return splitSizes.map(function (s) {
            size[axis] = s;
            var slice = x.slice(begin, size);
            begin[axis] += s;
            return slice;
        });
    };
    ArrayOps.expandDims = function (x, axis) {
        if (axis === void 0) { axis = 0; }
        util.assertArgumentsAreTensors({ x: x }, 'expandDims');
        util.assert(axis <= x.rank, 'Axis must be <= rank of the tensor');
        var newShape = x.shape.slice();
        newShape.splice(axis, 0, 1);
        return ArrayOps.reshape(x, newShape);
    };
    ArrayOps.linspace = function (start, stop, num) {
        if (num === 0) {
            throw new Error('Cannot request zero samples');
        }
        var step = (stop - start) / (num - 1);
        var values = makeZerosTypedArray(num, 'float32');
        values[0] = start;
        for (var i = 1; i < values.length; i++) {
            values[i] = values[i - 1] + step;
        }
        return ArrayOps.tensor1d(values, 'float32');
    };
    ArrayOps.range = function (start, stop, step, dtype) {
        if (step === void 0) { step = 1; }
        if (dtype === void 0) { dtype = 'float32'; }
        if (step === 0) {
            throw new Error('Cannot have a step of zero');
        }
        var sameStartStop = start === stop;
        var increasingRangeNegativeStep = start < stop && step < 0;
        var decreasingRangePositiveStep = stop < start && step > 1;
        if (sameStartStop || increasingRangeNegativeStep ||
            decreasingRangePositiveStep) {
            return ArrayOps.zeros([0], dtype);
        }
        var numElements = Math.abs(Math.ceil((stop - start) / step));
        var values = makeZerosTypedArray(numElements, dtype);
        if (stop < start && step === 1) {
            step = -1;
        }
        values[0] = start;
        for (var i = 1; i < values.length; i++) {
            values[i] = values[i - 1] + step;
        }
        return ArrayOps.tensor1d(values, dtype);
    };
    ArrayOps.buffer = function (shape, dtype, values) {
        if (dtype === void 0) { dtype = 'float32'; }
        return new tensor_1.TensorBuffer(shape, dtype, values);
    };
    ArrayOps.print = function (x, verbose) {
        if (verbose === void 0) { verbose = false; }
        console.log(tensor_util.tensorToString(x, verbose));
    };
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "tensor", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "scalar", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "tensor1d", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "tensor2d", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "tensor3d", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "tensor4d", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "ones", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "zeros", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "fill", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "onesLike", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "zerosLike", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "clone", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "eye", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "randomNormal", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "truncatedNormal", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "randomUniform", null);
    __decorate([
        operation_1.operation
    ], ArrayOps, "rand", null);
    __decorate([
        operation_1.operation
    ], ArrayOps, "multinomial", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "oneHot", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' }),
        operation_1.operation
    ], ArrayOps, "fromPixels", null);
    __decorate([
        doc_1.doc({ heading: 'Visualization' })
    ], ArrayOps, "toPixels", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Transformations' }),
        operation_1.operation
    ], ArrayOps, "reshape", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Transformations' })
    ], ArrayOps, "squeeze", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Transformations' }),
        operation_1.operation
    ], ArrayOps, "cast", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
        operation_1.operation
    ], ArrayOps, "tile", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
        operation_1.operation
    ], ArrayOps, "gather", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Transformations' }),
        operation_1.operation
    ], ArrayOps, "pad", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
        operation_1.operation
    ], ArrayOps, "stack", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
        operation_1.operation
    ], ArrayOps, "split", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Transformations' }),
        operation_1.operation
    ], ArrayOps, "expandDims", null);
    __decorate([
        operation_1.operation,
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "linspace", null);
    __decorate([
        operation_1.operation,
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "range", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "buffer", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], ArrayOps, "print", null);
    return ArrayOps;
}());
exports.ArrayOps = ArrayOps;
function makeZerosTypedArray(size, dtype) {
    if (dtype == null || dtype === 'float32') {
        return new Float32Array(size);
    }
    else if (dtype === 'int32') {
        return new Int32Array(size);
    }
    else if (dtype === 'bool') {
        return new Uint8Array(size);
    }
    else {
        throw new Error("Unknown data type $ {dtype}");
    }
}
function makeOnesTypedArray(size, dtype) {
    var array = makeZerosTypedArray(size, dtype);
    for (var i = 0; i < array.length; i++) {
        array[i] = 1;
    }
    return array;
}
function toTypedArray(a, dtype) {
    if (noConversionNeeded(a, dtype)) {
        return a;
    }
    if (Array.isArray(a)) {
        a = util.flatten(a);
    }
    return util.copyTypedArray(a, dtype);
}
function noConversionNeeded(a, dtype) {
    return (a instanceof Float32Array && dtype === 'float32') ||
        (a instanceof Int32Array && dtype === 'int32') ||
        (a instanceof Uint8Array && dtype === 'bool');
}

},{"../doc":35,"../environment":24,"../tensor":32,"../tensor_util":51,"../util":26,"./axis_util":58,"./concat":79,"./operation":91,"./rand":128,"./reduction_ops":86}],62:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getBroadcastDims(inShape, outShape) {
    var inRank = inShape.length;
    var dims = [];
    for (var i = 0; i < inRank; i++) {
        var dim = inRank - 1 - i;
        var a = inShape[dim] || 1;
        var b = outShape[outShape.length - 1 - i] || 1;
        if (b > 1 && a === 1) {
            dims.unshift(dim);
        }
    }
    return dims;
}
exports.getBroadcastDims = getBroadcastDims;
function getReductionAxes(inShape, outShape) {
    var result = [];
    for (var i = 0; i < outShape.length; i++) {
        var inDim = inShape[inShape.length - i - 1];
        var outAxis = outShape.length - i - 1;
        var outDim = outShape[outAxis];
        if (inDim == null || (inDim === 1 && outDim > 1)) {
            result.unshift(outAxis);
        }
    }
    return result;
}
exports.getReductionAxes = getReductionAxes;
function broadcastDimsAreOuter(dims) {
    for (var i = 0; i < dims.length; i++) {
        if (dims[i] !== i) {
            return false;
        }
    }
    return true;
}
exports.broadcastDimsAreOuter = broadcastDimsAreOuter;
function assertAndGetBroadcastShape(shapeA, shapeB) {
    var result = [];
    var errMsg = "Operands could not be broadcast together with shapes " +
        (shapeA + " and " + shapeB + ".");
    var l = Math.max(shapeA.length, shapeB.length);
    for (var i = 0; i < l; i++) {
        var a = shapeA[shapeA.length - i - 1] || 1;
        var b = shapeB[shapeB.length - i - 1] || 1;
        if (a > 1 && b > 1 && a !== b) {
            throw Error(errMsg);
        }
        result.unshift(Math.max(a, b));
    }
    return result;
}
exports.assertAndGetBroadcastShape = assertAndGetBroadcastShape;

},{}],74:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var array_ops_1 = require("./array_ops");
var broadcast_util_1 = require("./broadcast_util");
var operation_1 = require("./operation");
var ops_1 = require("./ops");
var BatchNormOps = (function () {
    function BatchNormOps() {
    }
    BatchNormOps.batchNormalization2d = function (x, mean, variance, varianceEpsilon, scale, offset) {
        if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
        util.assert(x.rank === 2, "Error in batchNormalization3D: x must be rank 3 but got rank " +
            (x.rank + "."));
        util.assert(mean.rank === 2 || mean.rank === 1, "Error in batchNormalization2D: mean must be rank 2 or rank 1 but " +
            ("got rank " + mean.rank + "."));
        util.assert(variance.rank === 2 || variance.rank === 1, "Error in batchNormalization2D: variance must be rank 2 or rank 1 " +
            ("but got rank " + variance.rank + "."));
        if (scale != null) {
            util.assert(scale.rank === 2 || scale.rank === 1, "Error in batchNormalization2D: scale must be rank 2 or rank 1 " +
                ("but got rank " + scale.rank + "."));
        }
        if (offset != null) {
            util.assert(offset.rank === 2 || offset.rank === 1, "Error in batchNormalization2D: offset must be rank 2 or rank 1 " +
                ("but got rank " + offset.rank + "."));
        }
        return BatchNormOps.batchNormalization(x, mean, variance, varianceEpsilon, scale, offset);
    };
    BatchNormOps.batchNormalization3d = function (x, mean, variance, varianceEpsilon, scale, offset) {
        if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
        util.assert(x.rank === 3, "Error in batchNormalization3D: x must be rank 3 but got rank " +
            (x.rank + "."));
        util.assert(mean.rank === 3 || mean.rank === 1, "Error in batchNormalization3D: mean must be rank 3 or rank 1 but " +
            ("got rank " + mean.rank + "."));
        util.assert(variance.rank === 3 || variance.rank === 1, "Error in batchNormalization3D: variance must be rank 3 or rank 1 " +
            ("but got rank " + variance.rank + "."));
        if (scale != null) {
            util.assert(scale.rank === 3 || scale.rank === 1, "Error in batchNormalization3D: scale must be rank 3 or rank 1 " +
                ("but got rank " + scale.rank + "."));
        }
        if (offset != null) {
            util.assert(offset.rank === 3 || offset.rank === 1, "Error in batchNormalization3D: offset must be rank 3 or rank 1 " +
                ("but got rank " + offset.rank + "."));
        }
        return BatchNormOps.batchNormalization(x, mean, variance, varianceEpsilon, scale, offset);
    };
    BatchNormOps.batchNormalization4d = function (x, mean, variance, varianceEpsilon, scale, offset) {
        if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
        util.assert(x.rank === 4, "Error in batchNormalization4D: x must be rank 4 but got rank " +
            (x.rank + "."));
        util.assert(mean.rank === 4 || mean.rank === 1, "Error in batchNormalization4D: mean must be rank 4 or rank 1 but " +
            ("got rank " + mean.rank + "."));
        util.assert(variance.rank === 4 || variance.rank === 1, "Error in batchNormalization4D: variance must be rank 4 or rank 1 " +
            ("but got rank " + variance.rank + "."));
        if (scale != null) {
            util.assert(scale.rank === 4 || scale.rank === 1, "Error in batchNormalization4D: scale must be rank 4 or rank 1 " +
                ("but got rank " + scale.rank + "."));
        }
        if (offset != null) {
            util.assert(offset.rank === 4 || offset.rank === 1, "Error in batchNormalization4D: offset must be rank 4 or rank 1 " +
                ("but got rank " + offset.rank + "."));
        }
        return BatchNormOps.batchNormalization(x, mean, variance, varianceEpsilon, scale, offset);
    };
    BatchNormOps.batchNormalization = function (x, mean, variance, varianceEpsilon, scale, offset) {
        if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
        util.assertArgumentsAreTensors({ x: x, mean: mean, variance: variance }, 'batchNormalization');
        if (scale != null) {
            util.assertArgumentsAreTensors({ scale: scale }, 'batchNormalization');
        }
        if (offset != null) {
            util.assertArgumentsAreTensors({ offset: offset }, 'batchNormalization');
        }
        util.assert(mean.rank === variance.rank, 'Batch normalization gradient requires mean and variance to have ' +
            'equal ranks.');
        util.assert(offset == null || mean.rank === offset.rank, 'Batch normalization gradient requires mean and offset to have ' +
            'equal ranks.');
        util.assert(scale == null || mean.rank === scale.rank, 'Batch normalization gradient requires mean and scale to have ' +
            'equal ranks.');
        var x4D;
        if (x.rank === 0 || x.rank === 1) {
            x4D = x.as4D(1, 1, 1, x.size);
        }
        else if (x.rank === 2) {
            x4D = x.as4D(1, 1, x.shape[0], x.shape[1]);
        }
        else if (x.rank === 3) {
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        else {
            x4D = x;
        }
        var der = function (dy) {
            var scaleValue = scale == null ? array_ops_1.ArrayOps.scalar(1) : scale;
            var reductionAxes = broadcast_util_1.getReductionAxes(mean.shape, x4D.shape);
            var tileShape = [];
            if (mean.rank === 1) {
                for (var i = 0; i < x4D.shape.length - 1; ++i) {
                    tileShape.push(x4D.shape[i]);
                }
                tileShape.push(1);
            }
            var xMinusMean = x.sub(mean);
            var dyTimesScaleValue = dy.mul(scaleValue);
            var oneOverSqrtVariance = ops_1.rsqrt(variance.add(array_ops_1.ArrayOps.scalar(varianceEpsilon)));
            var minusHalfRCube = oneOverSqrtVariance.mul(oneOverSqrtVariance)
                .mul(oneOverSqrtVariance)
                .mul(array_ops_1.ArrayOps.scalar(-0.5));
            var derX = function () {
                if (mean.rank === 1) {
                    return dy
                        .mul(array_ops_1.ArrayOps.tile(oneOverSqrtVariance.as4D(1, 1, 1, mean.shape[0]), tileShape))
                        .mul(scaleValue)
                        .reshape(x.shape);
                }
                else {
                    return dy.mul(oneOverSqrtVariance).mul(scaleValue).reshape(x.shape);
                }
            };
            var derMean = function () {
                var meanDer = oneOverSqrtVariance.mul(array_ops_1.ArrayOps.scalar(-1)).mul(dyTimesScaleValue);
                if (mean.rank === 1) {
                    meanDer = meanDer.sum(reductionAxes);
                }
                return meanDer.reshape(mean.shape);
            };
            var derVariance = function () {
                var varianceDer = minusHalfRCube.mul(xMinusMean).mul(dyTimesScaleValue);
                if (mean.rank === 1) {
                    varianceDer = varianceDer.sum(reductionAxes);
                }
                return varianceDer.reshape(mean.shape);
            };
            var derScale = function () {
                var xMinusMean2TimesRsqrt = xMinusMean.mul(oneOverSqrtVariance);
                var scaleDer = dy.mul(xMinusMean2TimesRsqrt);
                if (mean.rank === 1) {
                    scaleDer = scaleDer.sum(reductionAxes);
                }
                return scaleDer.reshape(mean.shape);
            };
            var derOffset = function () {
                var offsetDer = dy;
                if (mean.rank === 1) {
                    offsetDer = offsetDer.sum(reductionAxes);
                }
                return offsetDer.reshape(mean.shape);
            };
            return {
                x: derX,
                mean: derMean,
                variance: derVariance,
                scale: derScale,
                offset: derOffset
            };
        };
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.batchNormalization(x4D, batchnormReshape4D(mean), batchnormReshape4D(variance), varianceEpsilon, batchnormReshape4D(scale), batchnormReshape4D(offset)); }, { x: x, mean: mean, variance: variance, scale: scale, offset: offset }, der);
        return res.reshape(x.shape);
    };
    __decorate([
        operation_1.operation
    ], BatchNormOps, "batchNormalization2d", null);
    __decorate([
        operation_1.operation
    ], BatchNormOps, "batchNormalization3d", null);
    __decorate([
        operation_1.operation
    ], BatchNormOps, "batchNormalization4d", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Normalization' })
    ], BatchNormOps, "batchNormalization", null);
    return BatchNormOps;
}());
exports.BatchNormOps = BatchNormOps;
function batchnormReshape4D(x) {
    if (x == null) {
        return null;
    }
    if (x.rank === 0) {
        return x.as1D();
    }
    else if (x.rank === 1) {
        return x;
    }
    else if (x.rank === 2) {
        return x.as4D(1, 1, x.shape[0], x.shape[1]);
    }
    else if (x.rank === 3) {
        return x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
    }
    return x;
}

},{"../doc":35,"../environment":24,"../util":26,"./array_ops":73,"./broadcast_util":62,"./operation":91,"./ops":47}],31:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DType;
(function (DType) {
    DType["float32"] = "float32";
    DType["int32"] = "int32";
    DType["bool"] = "bool";
})(DType = exports.DType || (exports.DType = {}));
var Rank;
(function (Rank) {
    Rank["R0"] = "R0";
    Rank["R1"] = "R1";
    Rank["R2"] = "R2";
    Rank["R3"] = "R3";
    Rank["R4"] = "R4";
})(Rank = exports.Rank || (exports.Rank = {}));
var UpcastInt32AndMap;
(function (UpcastInt32AndMap) {
    UpcastInt32AndMap["float32"] = "float32";
    UpcastInt32AndMap["int32"] = "int32";
    UpcastInt32AndMap["bool"] = "int32";
})(UpcastInt32AndMap || (UpcastInt32AndMap = {}));
var UpcastBoolAndMap;
(function (UpcastBoolAndMap) {
    UpcastBoolAndMap["float32"] = "float32";
    UpcastBoolAndMap["int32"] = "int32";
    UpcastBoolAndMap["bool"] = "bool";
})(UpcastBoolAndMap || (UpcastBoolAndMap = {}));
var UpcastFloat32AndMap;
(function (UpcastFloat32AndMap) {
    UpcastFloat32AndMap["float32"] = "float32";
    UpcastFloat32AndMap["int32"] = "float32";
    UpcastFloat32AndMap["bool"] = "float32";
})(UpcastFloat32AndMap || (UpcastFloat32AndMap = {}));
var upcastTypeMap = {
    float32: UpcastFloat32AndMap,
    int32: UpcastInt32AndMap,
    bool: UpcastBoolAndMap
};
function upcastType(typeA, typeB) {
    return upcastTypeMap[typeA][typeB];
}
exports.upcastType = upcastType;
function sumOutType(type) {
    return upcastType(type, 'int32');
}
exports.sumOutType = sumOutType;

},{}],72:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var types_1 = require("../types");
var util = require("../util");
var broadcast_util = require("./broadcast_util");
var operation_1 = require("./operation");
var ops_1 = require("./ops");
var BinaryOps = (function () {
    function BinaryOps() {
    }
    BinaryOps.add = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'add');
        util.assertTypesMatch(a, b);
        var outShape = broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () {
                var res = dy;
                var reduceAxes = broadcast_util.getReductionAxes(a.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.reshape(a.shape);
            };
            var derB = function () {
                var res = dy;
                var reduceAxes = broadcast_util.getReductionAxes(b.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.reshape(b.shape);
            };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.add(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.addStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in addStrict: ');
        return a.add(b);
    };
    BinaryOps.sub = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'sub');
        util.assertTypesMatch(a, b);
        var outShape = broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () {
                var res = dy;
                var reduceAxes = broadcast_util.getReductionAxes(a.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.reshape(a.shape);
            };
            var derB = function () {
                var res = dy;
                var reduceAxes = broadcast_util.getReductionAxes(b.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.neg().reshape(b.shape);
            };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.subtract(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.subStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in subStrict: ');
        return a.sub(b);
    };
    BinaryOps.pow = function (base, exp) {
        util.assertArgumentsAreTensors({ base: base, exp: exp }, 'pow');
        var outShape = broadcast_util.assertAndGetBroadcastShape(base.shape, exp.shape);
        base = base.cast(types_1.upcastType(base.dtype, exp.dtype));
        exp = exp.cast(types_1.upcastType(base.dtype, exp.dtype));
        var grad = function (dy, saved) {
            var y = saved[0];
            var derBase = function () {
                var res = dy.mul(exp.toFloat().mul(y.div(base)));
                var reduceAxes = broadcast_util.getReductionAxes(base.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.reshape(base.shape);
            };
            var derExp = function () {
                var res = dy.mul(y.mul(base.log()).toFloat());
                var reduceAxes = broadcast_util.getReductionAxes(exp.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.reshape(exp.shape);
            };
            return { base: derBase, exp: derExp };
        };
        return environment_1.ENV.engine.runKernel(function (backend, save) { return save(backend.pow(base, exp)); }, { base: base, exp: exp }, grad);
    };
    BinaryOps.powStrict = function (base, exp) {
        util.assertShapesMatch(base.shape, exp.shape, 'Error in powStrict: ');
        return base.pow(exp);
    };
    BinaryOps.mul = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'mul');
        util.assertTypesMatch(a, b);
        var outShape = broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () {
                var res = dy.mul(b.toFloat());
                var reduceAxes = broadcast_util.getReductionAxes(a.shape, outShape);
                if (reduceAxes.length > 0) {
                    return res.sum(reduceAxes).reshape(a.shape);
                }
                return res;
            };
            var derB = function () {
                var res = dy.mul(a.toFloat());
                var reduceAxes = broadcast_util.getReductionAxes(b.shape, outShape);
                if (reduceAxes.length > 0) {
                    return res.sum(reduceAxes).reshape(b.shape);
                }
                return res;
            };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.multiply(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.mulStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in multiplyStrict: ');
        return a.mul(b);
    };
    BinaryOps.div = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'div');
        util.assertTypesMatch(a, b);
        var outShape = broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () {
                var res = dy.div(b.toFloat());
                var reduceAxes = broadcast_util.getReductionAxes(a.shape, outShape);
                if (reduceAxes.length > 0) {
                    return res.sum(reduceAxes).reshape(a.shape);
                }
                return res;
            };
            var derB = function () {
                var res = dy.mul(a.toFloat());
                var reduceAxes = broadcast_util.getReductionAxes(b.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes).reshape(b.shape);
                }
                var tmp = b.square();
                return res.div(tmp.toFloat()).neg();
            };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.divide(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.divStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in divideStrict: ');
        return a.div(b);
    };
    BinaryOps.mod = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'mod');
        util.assertTypesMatch(a, b);
        var outShape = broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () {
                var reduceAxes = broadcast_util.getReductionAxes(a.shape, outShape);
                if (reduceAxes.length > 0) {
                    return dy.sum(reduceAxes).reshape(a.shape);
                }
                return dy;
            };
            var derB = function () {
                var res = dy.mul(a.div(b).floor().neg());
                var reduceAxes = broadcast_util.getReductionAxes(b.shape, outShape);
                if (reduceAxes.length > 0) {
                    return res.sum(reduceAxes).reshape(b.shape);
                }
                return res;
            };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.mod(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.modStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in modStrict: ');
        return a.mod(b);
    };
    BinaryOps.minimum = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'minimum');
        util.assertTypesMatch(a, b);
        if (a.dtype === 'bool') {
            a = a.toInt();
        }
        if (b.dtype === 'bool') {
            b = b.toInt();
        }
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () { return dy.mul(a.lessEqual(b).toFloat()); };
            var derB = function () { return dy.mul(a.greater(b).toFloat()); };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.minimum(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.minimumStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in minimumStrict: ');
        return a.minimum(b);
    };
    BinaryOps.maximum = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'maximum');
        util.assertTypesMatch(a, b);
        if (a.dtype === 'bool') {
            a = a.toInt();
        }
        if (b.dtype === 'bool') {
            b = b.toInt();
        }
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () { return dy.mul(a.greaterEqual(b).toFloat()); };
            var derB = function () { return dy.mul(a.less(b).toFloat()); };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.maximum(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.maximumStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in minimumStrict: ');
        return a.maximum(b);
    };
    BinaryOps.squaredDifference = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'squaredDifference');
        util.assertTypesMatch(a, b);
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var two = ops_1.scalar(2);
            var derA = function () { return dy.mul(a.sub(b).mul(two)); };
            var derB = function () { return dy.mul(b.sub(a).mul(two)); };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.squaredDifference(a, b); }, { a: a, b: b }, der);
    };
    BinaryOps.squaredDifferenceStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in squaredDifferenceStrict: ');
        return a.squaredDifference(b);
    };
    BinaryOps.atan2 = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'atan2');
        util.assertTypesMatch(a, b);
        var outShape = broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var der = function (dy) {
            var derA = function () {
                var d = BinaryOps.add(ops_1.square(a), ops_1.square(b));
                var res = dy.mul(b.div(d));
                var reduceAxes = broadcast_util.getReductionAxes(a.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.reshape(a.shape);
            };
            var derB = function () {
                var d = BinaryOps.add(ops_1.square(a), ops_1.square(b));
                var res = ops_1.neg(dy.mul(a.div(d)));
                var reduceAxes = broadcast_util.getReductionAxes(b.shape, outShape);
                if (reduceAxes.length > 0) {
                    res = res.sum(reduceAxes);
                }
                return res.reshape(b.shape);
            };
            return { a: derA, b: derB };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.atan2(a, b); }, { a: a, b: b }, der);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "add", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "addStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "sub", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "subStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "pow", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "powStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "mul", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "mulStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "div", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "divStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "mod", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "modStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "minimum", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "minimumStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "maximum", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "maximumStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Arithmetic' }),
        operation_1.operation
    ], BinaryOps, "squaredDifference", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "squaredDifferenceStrict", null);
    __decorate([
        operation_1.operation
    ], BinaryOps, "atan2", null);
    return BinaryOps;
}());
exports.BinaryOps = BinaryOps;

},{"../doc":35,"../environment":24,"../types":31,"../util":26,"./broadcast_util":62,"./operation":91,"./ops":47}],76:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var broadcast_util = require("./broadcast_util");
var operation_1 = require("./operation");
var CompareOps = (function () {
    function CompareOps() {
    }
    CompareOps.notEqual = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'notEqual');
        util.assertTypesMatch(a, b);
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.notEqual(a, b); }, { a: a, b: b });
    };
    CompareOps.notEqualStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in notEqualStrict: ');
        return a.notEqual(b);
    };
    CompareOps.less = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'less');
        util.assertTypesMatch(a, b);
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.less(a, b); }, { a: a, b: b });
    };
    CompareOps.lessStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in lessStrict: ');
        return a.less(b);
    };
    CompareOps.equal = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'equal');
        util.assertTypesMatch(a, b);
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.equal(a, b); }, { a: a, b: b });
    };
    CompareOps.equalStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in equalStrict: ');
        return a.equal(b);
    };
    CompareOps.lessEqual = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'lessEqual');
        util.assertTypesMatch(a, b);
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.lessEqual(a, b); }, { a: a, b: b });
    };
    CompareOps.lessEqualStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in lessEqualStrict: ');
        return a.lessEqual(b);
    };
    CompareOps.greater = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'greater');
        util.assertTypesMatch(a, b);
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.greater(a, b); }, { a: a, b: b });
    };
    CompareOps.greaterStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in greaterStrict: ');
        return a.greater(b);
    };
    CompareOps.greaterEqual = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'greaterEqual');
        util.assertTypesMatch(a, b);
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.greaterEqual(a, b); }, { a: a, b: b });
    };
    CompareOps.greaterEqualStrict = function (a, b) {
        util.assertShapesMatch(a.shape, b.shape, 'Error in greaterEqualStrict: ');
        return a.greaterEqual(b);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], CompareOps, "notEqual", null);
    __decorate([
        operation_1.operation
    ], CompareOps, "notEqualStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], CompareOps, "less", null);
    __decorate([
        operation_1.operation
    ], CompareOps, "lessStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], CompareOps, "equal", null);
    __decorate([
        operation_1.operation
    ], CompareOps, "equalStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], CompareOps, "lessEqual", null);
    __decorate([
        operation_1.operation
    ], CompareOps, "lessEqualStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], CompareOps, "greater", null);
    __decorate([
        operation_1.operation
    ], CompareOps, "greaterStrict", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], CompareOps, "greaterEqual", null);
    __decorate([
        operation_1.operation
    ], CompareOps, "greaterEqualStrict", null);
    return CompareOps;
}());
exports.CompareOps = CompareOps;

},{"../doc":35,"../environment":24,"../util":26,"./broadcast_util":62,"./operation":91}],129:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../util");
function computePool2DInfo(inShape, filterSize, strides, pad, roundingMode, dataFormat) {
    if (dataFormat === void 0) { dataFormat = 'channelsLast'; }
    var _a = parseTupleParam(filterSize), filterHeight = _a[0], filterWidth = _a[1];
    var filterShape;
    if (dataFormat === 'channelsLast') {
        filterShape = [filterHeight, filterWidth, inShape[3], inShape[3]];
    }
    else if (dataFormat === 'channelsFirst') {
        filterShape = [filterHeight, filterWidth, inShape[1], inShape[1]];
    }
    else {
        throw new Error("Unknown dataFormat " + dataFormat);
    }
    var dilations = 1;
    return computeConv2DInfo(inShape, filterShape, strides, dilations, pad, roundingMode, false, dataFormat);
}
exports.computePool2DInfo = computePool2DInfo;
function computeConv2DInfo(inShape, filterShape, strides, dilations, pad, roundingMode, depthwise, dataFormat) {
    if (depthwise === void 0) { depthwise = false; }
    if (dataFormat === void 0) { dataFormat = 'channelsLast'; }
    var _a = [-1, -1, -1, -1], batchSize = _a[0], inHeight = _a[1], inWidth = _a[2], inChannels = _a[3];
    if (dataFormat === 'channelsLast') {
        batchSize = inShape[0], inHeight = inShape[1], inWidth = inShape[2], inChannels = inShape[3];
    }
    else if (dataFormat === 'channelsFirst') {
        batchSize = inShape[0], inChannels = inShape[1], inHeight = inShape[2], inWidth = inShape[3];
    }
    else {
        throw new Error("Unknown dataFormat " + dataFormat);
    }
    var filterHeight = filterShape[0], filterWidth = filterShape[1], filterChannels = filterShape[3];
    var _b = parseTupleParam(strides), strideHeight = _b[0], strideWidth = _b[1];
    var _c = parseTupleParam(dilations), dilationHeight = _c[0], dilationWidth = _c[1];
    var effectiveFilterHeight = getEffectiveFilterSize(filterHeight, dilationHeight);
    var effectiveFilterWidth = getEffectiveFilterSize(filterWidth, dilationWidth);
    var _d = getPadAndOutInfo(pad, inHeight, inWidth, strideHeight, strideWidth, effectiveFilterHeight, effectiveFilterWidth, roundingMode), padInfo = _d.padInfo, outHeight = _d.outHeight, outWidth = _d.outWidth;
    var outChannels = depthwise ? filterChannels * inChannels : filterChannels;
    var outShape;
    if (dataFormat === 'channelsFirst') {
        outShape = [batchSize, outChannels, outHeight, outWidth];
    }
    else if (dataFormat === 'channelsLast') {
        outShape = [batchSize, outHeight, outWidth, outChannels];
    }
    return {
        batchSize: batchSize,
        dataFormat: dataFormat,
        inHeight: inHeight,
        inWidth: inWidth,
        inChannels: inChannels,
        outHeight: outHeight,
        outWidth: outWidth,
        outChannels: outChannels,
        padInfo: padInfo,
        strideHeight: strideHeight,
        strideWidth: strideWidth,
        filterHeight: filterHeight,
        filterWidth: filterWidth,
        dilationHeight: dilationHeight,
        dilationWidth: dilationWidth,
        inShape: inShape,
        outShape: outShape,
        filterShape: filterShape
    };
}
exports.computeConv2DInfo = computeConv2DInfo;
function computeOutputShape3D(inShape, fieldSize, outDepth, stride, zeroPad, roundingMode) {
    if (zeroPad == null) {
        zeroPad = computeDefaultPad(inShape, fieldSize, stride);
    }
    var inputRows = inShape[0];
    var inputCols = inShape[1];
    var outputRows = conditionalRound((inputRows - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
    util.assert(util.isInt(outputRows), "The output # of rows (" + outputRows + ") must be an integer. Change the " +
        "stride and/or zero pad parameters");
    var outputCols = conditionalRound((inputCols - fieldSize + 2 * zeroPad) / stride + 1, roundingMode);
    util.assert(util.isInt(outputCols), "The output # of columns (" + outputCols + ") must be an integer. Change " +
        "the stride and/or zero pad parameters");
    return [outputRows, outputCols, outDepth];
}
function computeDefaultPad(inputShape, fieldSize, stride, dilation) {
    if (dilation === void 0) { dilation = 1; }
    var effectiveFieldSize = getEffectiveFilterSize(fieldSize, dilation);
    return Math.floor((inputShape[0] * (stride - 1) - stride + effectiveFieldSize) / 2);
}
exports.computeDefaultPad = computeDefaultPad;
function parseTupleParam(param) {
    return typeof param === 'number' ? [param, param] : param;
}
function getEffectiveFilterSize(filterSize, dilation) {
    if (dilation <= 1) {
        return filterSize;
    }
    return filterSize + (filterSize - 1) * (dilation - 1);
}
function getPadAndOutInfo(pad, inHeight, inWidth, strideHeight, strideWidth, filterHeight, filterWidth, roundingMode) {
    var padInfo;
    var outHeight;
    var outWidth;
    if (typeof pad === 'number') {
        var padType = (pad === 0) ? 'VALID' : 'NUMBER';
        padInfo = { top: pad, bottom: pad, left: pad, right: pad, type: padType };
        var outShape = computeOutputShape3D([inHeight, inWidth, 1], filterHeight, 1, strideHeight, pad, roundingMode);
        outHeight = outShape[0];
        outWidth = outShape[1];
    }
    else if (pad === 'same') {
        outHeight = Math.ceil(inHeight / strideHeight);
        outWidth = Math.ceil(inWidth / strideWidth);
        var padAlongHeight = (outHeight - 1) * strideHeight + filterHeight - inHeight;
        var padAlongWidth = (outWidth - 1) * strideWidth + filterWidth - inWidth;
        var top_1 = Math.floor(padAlongHeight / 2);
        var bottom = padAlongHeight - top_1;
        var left = Math.floor(padAlongWidth / 2);
        var right = padAlongWidth - left;
        padInfo = { top: top_1, bottom: bottom, left: left, right: right, type: 'SAME' };
    }
    else if (pad === 'valid') {
        padInfo = { top: 0, bottom: 0, left: 0, right: 0, type: 'VALID' };
        outHeight = Math.ceil((inHeight - filterHeight + 1) / strideHeight);
        outWidth = Math.ceil((inWidth - filterWidth + 1) / strideWidth);
    }
    else {
        throw Error("Unknown padding parameter: " + pad);
    }
    return { padInfo: padInfo, outHeight: outHeight, outWidth: outWidth };
}
function conditionalRound(value, roundingMode) {
    if (!roundingMode) {
        return value;
    }
    switch (roundingMode) {
        case 'round':
            return Math.round(value);
        case 'ceil':
            return Math.ceil(value);
        case 'floor':
            return Math.floor(value);
        default:
            throw new Error("Unknown roundingMode " + roundingMode);
    }
}

},{"../util":26}],78:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var conv_util = require("./conv_util");
var operation_1 = require("./operation");
var ConvOps = (function () {
    function ConvOps() {
    }
    ConvOps.conv1d = function (x, filter, stride, pad, dataFormat, dilation, dimRoundingMode) {
        if (dataFormat === void 0) { dataFormat = 'NWC'; }
        if (dilation === void 0) { dilation = 1; }
        util.assertArgumentsAreTensors({ x: x, filter: filter }, 'conv1d');
        var x3D = x;
        var reshapedTo3D = false;
        if (x.rank === 2) {
            reshapedTo3D = true;
            x3D = x.as3D(1, x.shape[0], x.shape[1]);
        }
        util.assert(x3D.rank === 3, "Error in conv1d: input must be rank 3, but got rank " + x3D.rank + ".");
        util.assert(filter.rank === 3, "Error in conv1d: filter must be rank 3, but got rank " +
            (filter.rank + "."));
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in conv1d: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        util.assert(x3D.shape[2] === filter.shape[1], "Error in conv1d: depth of input (" + x3D.shape[2] + ") must match  " +
            ("input depth for filter " + filter.shape[1] + "."));
        util.assert(eitherStridesOrDilationsAreOne(stride, dilation), 'Error in conv1D: Either stride or dilation must be 1.' +
            ("Got stride " + stride + " and dilation '" + dilation + "'"));
        util.assert(dataFormat === 'NWC', "Error in conv1d: got dataFormat of " + dataFormat + " but only NWC is currently supported.");
        var filter4D = filter.as4D(1, filter.shape[0], filter.shape[1], filter.shape[2]);
        var input4D = x3D.as4D(x3D.shape[0], 1, x3D.shape[1], x3D.shape[2]);
        var strides = [1, stride];
        var dilations = [1, dilation];
        var conv2dDataFormat = 'NHWC';
        var res = ConvOps.conv2d(input4D, filter4D, strides, pad, conv2dDataFormat, dilations, dimRoundingMode);
        if (reshapedTo3D) {
            return res.as2D(res.shape[2], res.shape[3]);
        }
        return res.as3D(res.shape[0], res.shape[2], res.shape[3]);
    };
    ConvOps.conv2d = function (x, filter, strides, pad, dataFormat, dilations, dimRoundingMode) {
        if (dataFormat === void 0) { dataFormat = 'NHWC'; }
        if (dilations === void 0) { dilations = [1, 1]; }
        util.assertArgumentsAreTensors({ x: x, filter: filter }, 'conv2d');
        var x4D = x;
        var reshapedTo4D = false;
        if (x.rank === 3) {
            reshapedTo4D = true;
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        util.assert(x4D.rank === 4, "Error in conv2d: input must be rank 4, but got rank " + x4D.rank + ".");
        util.assert(filter.rank === 4, "Error in conv2d: filter must be rank 4, but got rank " +
            (filter.rank + "."));
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in conv2d: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        util.assert(x4D.shape[3] === filter.shape[2], "Error in conv2d: depth of input (" + x4D.shape[3] + ") must match  " +
            ("input depth for filter " + filter.shape[2] + "."));
        util.assert(eitherStridesOrDilationsAreOne(strides, dilations), 'Error in conv2D: Either strides or dilations must be 1.' +
            ("Got strides " + strides + " and dilations '" + dilations + "'"));
        util.assert(dataFormat === 'NHWC', "Error in conv2d: got dataFormat of " + dataFormat + " but only NHWC is currently supported.");
        var convInfo = conv_util.computeConv2DInfo(x4D.shape, filter.shape, strides, dilations, pad, dimRoundingMode);
        var grad = function (dy) {
            util.assert(tupleValuesAreOne(dilations), 'Error in gradient of conv2D: dilation rates greater than 1 are not' +
                ("yet supported in gradients. Got dilations '" + dilations + "'"));
            return {
                x: function () { return ConvOps.conv2dDerInput(x4D.shape, dy, filter, strides, pad); },
                filter: function () {
                    return ConvOps.conv2dDerFilter(x4D, dy, filter.shape, strides, pad);
                }
            };
        };
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.conv2d(x4D, filter, convInfo); }, { x: x4D, filter: filter }, grad);
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    ConvOps.conv2dDerInput = function (xShape, dy, filter, strides, pad, dimRoundingMode) {
        util.assertArgumentsAreTensors({ dy: dy, filter: filter }, 'conv2dDerInput');
        util.assert(xShape.length === dy.rank, "Length of inShape " +
            ("(" + xShape.length + ") and rank of dy (" + dy.rank + ") must match"));
        var xShape4D = xShape;
        var dy4D = dy;
        var reshapedTo4D = false;
        if (dy.rank === 3) {
            reshapedTo4D = true;
            dy4D = dy.as4D(1, dy.shape[0], dy.shape[1], dy.shape[2]);
            xShape4D = [1, xShape[0], xShape[1], xShape[2]];
        }
        var inDepth = xShape4D[3];
        var outDepth = dy4D.shape[3];
        util.assert(xShape4D.length === 4, "Error in conv2dDerInput: inShape must be length 4, but got length " +
            (xShape4D.length + "."));
        util.assert(dy4D.rank === 4, "Error in conv2dDerInput: dy must be rank 4, but got " +
            ("rank " + dy4D.rank));
        util.assert(filter.rank === 4, "Error in conv2dDerInput: filter must be rank 4, but got " +
            ("rank " + filter.rank));
        util.assert(inDepth === filter.shape[2], "Error in conv2dDerInput: depth of input (" + inDepth + ") must " +
            ("match input depth for filter " + filter.shape[2] + "."));
        util.assert(outDepth === filter.shape[3], "Error in conv2dDerInput: depth of output (" + outDepth + ") must" +
            ("match output depth for filter " + filter.shape[3] + "."));
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in conv2dDerInput: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        var dilations = 1;
        var convInfo = conv_util.computeConv2DInfo(xShape4D, filter.shape, strides, dilations, pad, dimRoundingMode);
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.conv2dDerInput(dy4D, filter, convInfo); }, { dy4D: dy4D });
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    ConvOps.conv2dDerFilter = function (x, dy, filterShape, strides, pad, dimRoundingMode) {
        util.assertArgumentsAreTensors({ x: x, dy: dy }, 'conv2dDerFilter');
        var x4D = x;
        if (x.rank === 3) {
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        var dy4D = dy;
        if (dy4D.rank === 3) {
            dy4D = dy.as4D(1, dy.shape[0], dy.shape[1], dy.shape[2]);
        }
        util.assert(x4D.rank === 4, "Error in conv2dDerFilter: input must be rank 4, but got shape " +
            (x4D.shape + "."));
        util.assert(dy4D.rank === 4, "Error in conv2dDerFilter: dy must be rank 4, but got shape " +
            (dy4D.shape + "."));
        util.assert(filterShape.length === 4, "Error in conv2dDerFilter: filterShape must be length 4, but got " +
            (filterShape + "."));
        util.assert(x4D.shape[3] === filterShape[2], "Error in conv2dDerFilter: depth of input " + x4D.shape[3] + ") must " +
            ("match input depth in filter (" + filterShape[2] + "."));
        util.assert(dy4D.shape[3] === filterShape[3], "Error in conv2dDerFilter: depth of dy (" + dy4D.shape[3] + ") must " +
            ("match output depth for filter (" + filterShape[3] + ")."));
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in conv2dDerFilter: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        var dilations = 1;
        var convInfo = conv_util.computeConv2DInfo(x4D.shape, filterShape, strides, dilations, pad, dimRoundingMode);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.conv2dDerFilter(x4D, dy4D, convInfo); }, { x4D: x4D, dy4D: dy4D });
    };
    ConvOps.conv2dTranspose = function (x, filter, outputShape, strides, pad, dimRoundingMode) {
        util.assertArgumentsAreTensors({ x: x, filter: filter }, 'conv2dTranspose');
        return ConvOps.conv2dDerInput(outputShape, x, filter, strides, pad, dimRoundingMode);
    };
    ConvOps.depthwiseConv2d = function (x, filter, strides, pad, dataFormat, dilations, dimRoundingMode) {
        if (dataFormat === void 0) { dataFormat = 'NHWC'; }
        if (dilations === void 0) { dilations = [1, 1]; }
        util.assertArgumentsAreTensors({ x: x, filter: filter }, 'depthwiseConv2d');
        var x4D = x;
        var reshapedTo4D = false;
        if (x.rank === 3) {
            reshapedTo4D = true;
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        util.assert(x4D.rank === 4, "Error in depthwiseConv2D: input must be rank 4, but got " +
            ("rank " + x4D.rank + "."));
        util.assert(filter.rank === 4, "Error in depthwiseConv2D: filter must be rank 4, but got rank " +
            (filter.rank + "."));
        util.assert(x4D.shape[3] === filter.shape[2], "Error in depthwiseConv2D: number of input channels " +
            ("(" + x4D.shape[3] + ") must match the inChannels dimension in ") +
            ("filter " + filter.shape[2] + "."));
        if (dilations == null) {
            dilations = [1, 1];
        }
        util.assert(eitherStridesOrDilationsAreOne(strides, dilations), 'Error in depthwiseConv2d: Either strides or dilations must be 1.' +
            ("Got strides " + strides + " and dilations '" + dilations + "'"));
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in depthwiseConv2D: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        var convInfo = conv_util.computeConv2DInfo(x4D.shape, filter.shape, strides, dilations, pad, dimRoundingMode, true);
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.depthwiseConv2D(x4D, filter, convInfo); }, { x4D: x4D, filter: filter });
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    ConvOps.separableConv2d = function (x, depthwiseFilter, pointwiseFilter, strides, pad, dilation, dataFormat) {
        if (dilation === void 0) { dilation = [1, 1]; }
        if (dataFormat === void 0) { dataFormat = 'NHWC'; }
        util.assertArgumentsAreTensors({ x: x, depthwiseFilter: depthwiseFilter, pointwiseFilter: pointwiseFilter }, 'separableConv2d');
        var x4D = x;
        var reshapedTo4D = false;
        if (x.rank === 3) {
            reshapedTo4D = true;
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        if (dataFormat === 'NCHW') {
            throw new Error('separableConv2d currently does not support dataFormat NCHW; only ' +
                'NHWC is supported');
        }
        util.assert(x4D.rank === 4, "Error in separableConv2d: input must be rank 4, but got " +
            ("rank " + x4D.rank + "."));
        util.assert(depthwiseFilter.rank === 4, "Error in separableConv2d: depthwise filter must be rank 4, but got " +
            ("rank " + depthwiseFilter.rank + "."));
        util.assert(pointwiseFilter.rank === 4, "Error in separableConv2d: pointwise filter must be rank 4, but got " +
            ("rank " + depthwiseFilter.rank + "."));
        util.assert(pointwiseFilter.shape[0] === 1, "Error in separableConv2d: the first dimension of pointwise filter " +
            (" must be 1, but got " + pointwiseFilter.shape[0] + "."));
        util.assert(pointwiseFilter.shape[1] === 1, "Error in separableConv2d: the second dimension of pointwise filter " +
            (" must be 1, but got " + pointwiseFilter.shape[1] + "."));
        var inChannels = depthwiseFilter.shape[2];
        var channelMultiplier = depthwiseFilter.shape[3];
        util.assert(pointwiseFilter.shape[2] === inChannels * channelMultiplier, "Error in separableConv2d: the third dimension of pointwise filter " +
            ("must be " + inChannels * channelMultiplier + ", ") +
            ("but got " + pointwiseFilter.shape[2] + "."));
        var depthwise = ConvOps.depthwiseConv2d(x4D, depthwiseFilter, strides, pad, dataFormat, dilation);
        var pointwiseStride = 1;
        var res = ConvOps.conv2d(depthwise, pointwiseFilter, pointwiseStride, 'valid', dataFormat);
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Convolution' }),
        operation_1.operation
    ], ConvOps, "conv1d", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Convolution' }),
        operation_1.operation
    ], ConvOps, "conv2d", null);
    __decorate([
        operation_1.operation
    ], ConvOps, "conv2dDerInput", null);
    __decorate([
        operation_1.operation
    ], ConvOps, "conv2dDerFilter", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Convolution' }),
        operation_1.operation
    ], ConvOps, "conv2dTranspose", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Convolution' }),
        operation_1.operation
    ], ConvOps, "depthwiseConv2d", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Convolution' }),
        operation_1.operation
    ], ConvOps, "separableConv2d", null);
    return ConvOps;
}());
exports.ConvOps = ConvOps;
function parseTupleParam(param) {
    return typeof param === 'number' ? [param, param] : param;
}
function tupleValuesAreOne(param) {
    var _a = parseTupleParam(param), dimA = _a[0], dimB = _a[1];
    return dimA === 1 && dimB === 1;
}
function eitherStridesOrDilationsAreOne(strides, dilations) {
    return tupleValuesAreOne(strides) || tupleValuesAreOne(dilations);
}

},{"../doc":35,"../environment":24,"../util":26,"./conv_util":129,"./operation":91}],75:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var operation_1 = require("./operation");
var ImageOps = (function () {
    function ImageOps() {
    }
    ImageOps.resizeBilinear = function (images, size, alignCorners) {
        if (alignCorners === void 0) { alignCorners = false; }
        util.assertArgumentsAreTensors({ images: images }, 'resizeBilinear');
        util.assert(images.rank === 3 || images.rank === 4, "Error in resizeBilinear: x must be rank 3 or 4, but got " +
            ("rank " + images.rank + "."));
        util.assert(size.length === 2, "Error in resizeBilinear: new shape must 2D, but got shape " +
            (size + "."));
        var batchImages = images;
        var reshapedTo4D = false;
        if (images.rank === 3) {
            reshapedTo4D = true;
            batchImages =
                images.as4D(1, images.shape[0], images.shape[1], images.shape[2]);
        }
        var newHeight = size[0], newWidth = size[1];
        var forward = function (backend, save) {
            return backend.resizeBilinear(batchImages, newHeight, newWidth, alignCorners);
        };
        var backward = function (dy, saved) {
            return {
                batchImages: function () { return environment_1.ENV.engine.runKernel(function (backend) {
                    return backend.resizeBilinearBackprop(dy, batchImages, alignCorners);
                }, {}); }
            };
        };
        var res = environment_1.ENV.engine.runKernel(forward, { batchImages: batchImages }, backward);
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    ImageOps.resizeNearestNeighbor = function (images, size, alignCorners) {
        if (alignCorners === void 0) { alignCorners = false; }
        util.assertArgumentsAreTensors({ images: images }, 'resizeNearestNeighbor');
        util.assert(images.rank === 3 || images.rank === 4, "Error in resizeNearestNeighbor: x must be rank 3 or 4, but got " +
            ("rank " + images.rank + "."));
        util.assert(size.length === 2, "Error in resizeNearestNeighbor: new shape must 2D, but got shape " +
            (size + "."));
        util.assert(images.dtype === 'float32' || images.dtype === 'int32', '`images` must have `int32` or `float32` as dtype');
        var batchImages = images;
        var reshapedTo4D = false;
        if (images.rank === 3) {
            reshapedTo4D = true;
            batchImages =
                images.as4D(1, images.shape[0], images.shape[1], images.shape[2]);
        }
        var newHeight = size[0], newWidth = size[1];
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.resizeNearestNeighbor(batchImages, newHeight, newWidth, alignCorners); }, { batchImages: batchImages });
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Images', namespace: 'image' }),
        operation_1.operation
    ], ImageOps, "resizeBilinear", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Images', namespace: 'image' }),
        operation_1.operation
    ], ImageOps, "resizeNearestNeighbor", null);
    return ImageOps;
}());
exports.ImageOps = ImageOps;

},{"../doc":35,"../environment":24,"../util":26,"./operation":91}],53:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("./doc");
var environment_1 = require("./environment");
var util_1 = require("./util");
var Tracking = (function () {
    function Tracking() {
    }
    Tracking.tidy = function (nameOrFn, fn, gradMode) {
        if (gradMode === void 0) { gradMode = false; }
        var name = null;
        if (fn == null) {
            if (typeof nameOrFn !== 'function') {
                throw new Error('Please provide a function to tidy()');
            }
            fn = nameOrFn;
        }
        else {
            if (typeof nameOrFn !== 'string' && !(nameOrFn instanceof String)) {
                throw new Error('When calling with two arguments, the first argument ' +
                    'to tidy() must be a string');
            }
            if (typeof fn !== 'function') {
                throw new Error('When calling with two arguments, the 2nd argument ' +
                    'to tidy() must be a function');
            }
            name = nameOrFn;
        }
        environment_1.ENV.engine.startScope(name, gradMode);
        var result = fn();
        if (result instanceof Promise) {
            console.error('Cannot return a Promise inside of tidy.');
        }
        environment_1.ENV.engine.endScope(result, gradMode);
        return result;
    };
    Tracking.dispose = function (container) {
        var tensors = util_1.extractTensorsFromAny(container);
        tensors.forEach(function (tensor) { return tensor.dispose(); });
    };
    Tracking.keep = function (result) {
        return environment_1.ENV.engine.keep(result);
    };
    Tracking.time = function (f) {
        return environment_1.ENV.engine.time(f);
    };
    __decorate([
        doc_1.doc({ heading: 'Performance', subheading: 'Memory' })
    ], Tracking, "tidy", null);
    __decorate([
        doc_1.doc({ heading: 'Performance', subheading: 'Memory' })
    ], Tracking, "keep", null);
    __decorate([
        doc_1.doc({ heading: 'Performance', subheading: 'Timing' })
    ], Tracking, "time", null);
    return Tracking;
}());
exports.Tracking = Tracking;

},{"./doc":35,"./environment":24,"./util":26}],77:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var tracking_1 = require("../tracking");
var util_1 = require("../util");
var operation_1 = require("./operation");
var ops_1 = require("./ops");
var LinalgOps = (function () {
    function LinalgOps() {
    }
    LinalgOps.gramSchmidt = function (xs) {
        var inputIsTensor2D;
        if (Array.isArray(xs)) {
            inputIsTensor2D = false;
            util_1.assert(xs != null && xs.length > 0, 'Gram-Schmidt process: input must not be null, undefined, or empty');
            var dim = xs[0].shape[0];
            for (var i = 1; i < xs.length; ++i) {
                util_1.assert(xs[i].shape[0] === dim, 'Gram-Schmidt: Non-unique lengths found in the input vectors: ' +
                    ("(" + xs[i].shape[0] + " vs. " + dim + ")"));
            }
        }
        else {
            inputIsTensor2D = true;
            xs = ops_1.split(xs, xs.shape[0], 0).map(function (x) { return ops_1.squeeze(x, [0]); });
        }
        util_1.assert(xs.length <= xs[0].shape[0], "Gram-Schmidt: Number of vectors (" + xs.length + ") exceeds " +
            ("number of dimensions (" + xs[0].shape[0] + ")."));
        var ys = [];
        var xs1d = xs;
        var _loop_1 = function (i) {
            ys.push(tracking_1.Tracking.tidy(function () {
                var x = xs1d[i];
                if (i > 0) {
                    for (var j = 0; j < i; ++j) {
                        var proj = ops_1.sum(ys[j].mulStrict(x)).mul(ys[j]);
                        x = x.sub(proj);
                    }
                }
                return x.div(ops_1.norm(x, 'euclidean'));
            }));
        };
        for (var i = 0; i < xs.length; ++i) {
            _loop_1(i);
        }
        if (inputIsTensor2D) {
            return ops_1.stack(ys, 0);
        }
        else {
            return ys;
        }
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Linear Algebra' }),
        operation_1.operation
    ], LinalgOps, "gramSchmidt", null);
    return LinalgOps;
}());
exports.LinalgOps = LinalgOps;

},{"../doc":35,"../tracking":53,"../util":26,"./operation":91,"./ops":47}],80:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var types = require("../types");
var util = require("../util");
var broadcast_util = require("./broadcast_util");
var operation_1 = require("./operation");
var LogicalOps = (function () {
    function LogicalOps() {
    }
    LogicalOps.logicalNot = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'logicalNot');
        util.assert(x.dtype === 'bool', 'Error Array must be of type bool.');
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.logicalNot(x); }, { x: x });
    };
    LogicalOps.logicalAnd = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'logicalAnd');
        util.assert(a.dtype === 'bool' && b.dtype === 'bool', 'Error Array must be of type bool.');
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.logicalAnd(a, b); }, { a: a, b: b });
    };
    LogicalOps.logicalOr = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'logicalOr');
        util.assert(a.dtype === 'bool' && b.dtype === 'bool', 'Error Array must be of type bool.');
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.logicalOr(a, b); }, { a: a, b: b });
    };
    LogicalOps.logicalXor = function (a, b) {
        util.assertArgumentsAreTensors({ a: a, b: b }, 'logicalXor');
        util.assert(a.dtype === 'bool' && b.dtype === 'bool', 'Error Array must be of type bool.');
        broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        return LogicalOps.logicalOr(a, b).logicalAnd(LogicalOps.logicalAnd(a, b).logicalNot());
    };
    LogicalOps.where = function (condition, a, b) {
        util.assertArgumentsAreTensors({ condition: condition, a: a, b: b }, 'where');
        util.assert(condition.dtype === 'bool' || a.dtype === 'bool' || b.dtype === 'bool', 'Error Array must be of type bool.');
        util.assertShapesMatch(a.shape, b.shape, 'Error in where: ');
        if (condition.rank === 1) {
            util.assert(condition.shape[0] === a.shape[0], 'The first dimension of `a` must match the size of `condition`.');
        }
        else {
            util.assertShapesMatch(condition.shape, b.shape, 'Error in where: ');
        }
        var dtype = types.upcastType(a.dtype, b.dtype);
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.where(condition, a, b, dtype); }, { condition: condition, a: a, b: b });
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], LogicalOps, "logicalNot", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], LogicalOps, "logicalAnd", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], LogicalOps, "logicalOr", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], LogicalOps, "logicalXor", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Logical' }),
        operation_1.operation
    ], LogicalOps, "where", null);
    return LogicalOps;
}());
exports.LogicalOps = LogicalOps;

},{"../doc":35,"../environment":24,"../types":31,"../util":26,"./broadcast_util":62,"./operation":91}],48:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var util = require("../util");
var operation_1 = require("./operation");
var ops = require("./ops");
var Reduction;
(function (Reduction) {
    Reduction[Reduction["NONE"] = 0] = "NONE";
    Reduction[Reduction["MEAN"] = 1] = "MEAN";
    Reduction[Reduction["SUM"] = 2] = "SUM";
    Reduction[Reduction["SUM_BY_NONZERO_WEIGHTS"] = 3] = "SUM_BY_NONZERO_WEIGHTS";
})(Reduction = exports.Reduction || (exports.Reduction = {}));
var LossOps = (function () {
    function LossOps() {
    }
    LossOps.computeWeightedLoss = function (losses, weights, reduction) {
        if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
        util.assertArgumentsAreTensors({ losses: losses }, 'computeWeightedLoss');
        if (weights != null) {
            util.assertArgumentsAreTensors({ weights: weights }, 'computeWeightedLoss');
        }
        var weightedLoss = (weights == null) ? losses : losses.mul(weights);
        if (reduction === Reduction.NONE) {
            return weightedLoss;
        }
        if (reduction === Reduction.SUM) {
            return weightedLoss.sum();
        }
        if (reduction === Reduction.MEAN) {
            return (weights == null) ? weightedLoss.mean() :
                weightedLoss.sum().div(weights.sum());
        }
        if (reduction === Reduction.SUM_BY_NONZERO_WEIGHTS) {
            if (weights == null) {
                return weightedLoss.sum().div(ops.scalar(losses.size));
            }
            else {
                var numNonZeros = weights.notEqual(ops.scalar(0)).sum().toFloat();
                return weightedLoss.sum().div(numNonZeros);
            }
        }
        throw Error("Unknown reduction: " + reduction);
    };
    LossOps.absoluteDifference = function (labels, predictions, weights, reduction) {
        if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
        util.assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'absoluteDifference');
        if (weights != null) {
            util.assertArgumentsAreTensors({ weights: weights }, 'absoluteDifference');
        }
        util.assertShapesMatch(labels.shape, predictions.shape, 'Error in absoluteDifference: ');
        var losses = labels.sub(predictions).abs();
        return LossOps.computeWeightedLoss(losses, weights, reduction);
    };
    LossOps.meanSquaredError = function (labels, predictions, weights, reduction) {
        if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
        util.assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'meanSquaredError');
        if (weights != null) {
            util.assertArgumentsAreTensors({ weights: weights }, 'meanSquaredError');
        }
        util.assertShapesMatch(labels.shape, predictions.shape, 'Error in meanSquaredError: ');
        var losses = labels.squaredDifference(predictions);
        return LossOps.computeWeightedLoss(losses, weights, reduction);
    };
    LossOps.cosineDistance = function (labels, predictions, axis, weights, reduction) {
        if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
        util.assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'cosineDistance');
        if (weights != null) {
            util.assertArgumentsAreTensors({ weights: weights }, 'cosineDistance');
        }
        util.assertShapesMatch(labels.shape, predictions.shape, 'Error in cosineDistance: ');
        var one = ops.scalar(1);
        var losses = one.sub(labels.mul(predictions).sum(axis, true));
        return LossOps.computeWeightedLoss(losses, weights, reduction);
    };
    LossOps.hingeLoss = function (labels, predictions, weights, reduction) {
        if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
        util.assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'hingeLoss');
        if (weights != null) {
            util.assertArgumentsAreTensors({ weights: weights }, 'hingeLoss');
        }
        util.assertShapesMatch(labels.shape, predictions.shape, 'Error in hingeLoss: ');
        var one = ops.scalar(1);
        labels = ops.scalar(2).mul(labels).sub(one);
        var losses = one.sub(labels.mul(predictions)).relu();
        return LossOps.computeWeightedLoss(losses, weights, reduction);
    };
    LossOps.logLoss = function (labels, predictions, weights, epsilon, reduction) {
        if (epsilon === void 0) { epsilon = 1e-7; }
        if (reduction === void 0) { reduction = Reduction.SUM_BY_NONZERO_WEIGHTS; }
        util.assertArgumentsAreTensors({ labels: labels, predictions: predictions }, 'logLoss');
        if (weights != null) {
            util.assertArgumentsAreTensors({ weights: weights }, 'logLoss');
        }
        util.assertShapesMatch(labels.shape, predictions.shape, 'Error in logLoss: ');
        var one = ops.scalar(1);
        var epsilonScalar = ops.scalar(epsilon);
        var losses = labels.mul(predictions.add(epsilonScalar).log())
            .neg()
            .sub(one.sub(labels).mul(one.sub(predictions).add(epsilonScalar).log()));
        return LossOps.computeWeightedLoss(losses, weights, reduction);
    };
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
        operation_1.operation
    ], LossOps, "computeWeightedLoss", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
        operation_1.operation
    ], LossOps, "absoluteDifference", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
        operation_1.operation
    ], LossOps, "meanSquaredError", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
        operation_1.operation
    ], LossOps, "cosineDistance", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
        operation_1.operation
    ], LossOps, "hingeLoss", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
        operation_1.operation
    ], LossOps, "logLoss", null);
    return LossOps;
}());
exports.LossOps = LossOps;

},{"../doc":35,"../util":26,"./operation":91,"./ops":47}],84:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var operation_1 = require("./operation");
var LRNOps = (function () {
    function LRNOps() {
    }
    LRNOps.localResponseNormalization = function (x, radius, bias, alpha, beta) {
        if (radius === void 0) { radius = 5; }
        if (bias === void 0) { bias = 1; }
        if (alpha === void 0) { alpha = 1; }
        if (beta === void 0) { beta = 0.5; }
        util.assertArgumentsAreTensors({ x: x }, 'localResponseNormalization');
        util.assert(x.rank === 4 || x.rank === 3, "Error in localResponseNormalization: x must be rank 3 or 4 but got\n               rank " + x.rank + ".");
        util.assert(util.isInt(radius), "Error in localResponseNormalization3D: radius must be an integer\n                     but got radius " + radius + ".");
        var x4D = x;
        var reshapedTo4D = false;
        if (x.rank === 3) {
            reshapedTo4D = true;
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.localResponseNormalization4D(x4D, radius, bias, alpha, beta); }, { x4D: x4D });
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        else {
            return res;
        }
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Normalization' }),
        operation_1.operation
    ], LRNOps, "localResponseNormalization", null);
    return LRNOps;
}());
exports.LRNOps = LRNOps;

},{"../doc":35,"../environment":24,"../util":26,"./operation":91}],81:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var util = require("../util");
var operation_1 = require("./operation");
var LSTMOps = (function () {
    function LSTMOps() {
    }
    LSTMOps.multiRNNCell = function (lstmCells, data, c, h) {
        util.assertArgumentsAreTensors({ data: data, c: c, h: h }, 'multiRNNCell');
        var input = data;
        var newStates = [];
        for (var i = 0; i < lstmCells.length; i++) {
            var output = lstmCells[i](input, c[i], h[i]);
            newStates.push(output[0]);
            newStates.push(output[1]);
            input = output[1];
        }
        var newC = [];
        var newH = [];
        for (var i = 0; i < newStates.length; i += 2) {
            newC.push(newStates[i]);
            newH.push(newStates[i + 1]);
        }
        return [newC, newH];
    };
    LSTMOps.basicLSTMCell = function (forgetBias, lstmKernel, lstmBias, data, c, h) {
        util.assertArgumentsAreTensors({ forgetBias: forgetBias, lstmKernel: lstmKernel, lstmBias: lstmBias, data: data, c: c, h: h }, 'basicLSTMCell');
        var combined = data.concat(h, 1);
        var weighted = combined.matMul(lstmKernel);
        var res = weighted.add(lstmBias);
        var batchSize = res.shape[0];
        var sliceCols = res.shape[1] / 4;
        var sliceSize = [batchSize, sliceCols];
        var i = res.slice([0, 0], sliceSize);
        var j = res.slice([0, sliceCols], sliceSize);
        var f = res.slice([0, sliceCols * 2], sliceSize);
        var o = res.slice([0, sliceCols * 3], sliceSize);
        var newC = i.sigmoid().mulStrict(j.tanh()).addStrict(c.mulStrict(forgetBias.add(f).sigmoid()));
        var newH = newC.tanh().mulStrict(o.sigmoid());
        return [newC, newH];
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'RNN' }),
        operation_1.operation
    ], LSTMOps, "multiRNNCell", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'RNN' }),
        operation_1.operation
    ], LSTMOps, "basicLSTMCell", null);
    return LSTMOps;
}());
exports.LSTMOps = LSTMOps;

},{"../doc":35,"../util":26,"./operation":91}],82:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var operation_1 = require("./operation");
var MatmulOps = (function () {
    function MatmulOps() {
    }
    MatmulOps.matMul = function (a, b, transposeA, transposeB) {
        if (transposeA === void 0) { transposeA = false; }
        if (transposeB === void 0) { transposeB = false; }
        util.assertArgumentsAreTensors({ a: a, b: b }, 'matMul');
        var innerShapeA = transposeA ? a.shape[0] : a.shape[1];
        var innerShapeB = transposeB ? b.shape[1] : b.shape[0];
        util.assert(a.rank === 2 && b.rank === 2, "Error in matMul: inputs must be rank 2, got ranks " + a.rank +
            (" and " + b.rank + "."));
        util.assert(innerShapeA === innerShapeB, "Error in matMul: inner shapes (" + innerShapeA + ") and (" +
            (innerShapeB + ") of Tensors with shapes " + a.shape + " and ") +
            (b.shape + " and transposeA=" + transposeA) +
            (" and transposeB=" + transposeB + " must match."));
        var grad = function (dy) {
            if (!transposeA && !transposeB) {
                return {
                    a: function () { return dy.matMul(b.toFloat(), false, true); },
                    b: function () { return a.toFloat().matMul(dy, true, false); }
                };
            }
            else if (!transposeA && transposeB) {
                return {
                    a: function () { return dy.matMul(b.toFloat(), false, false); },
                    b: function () { return dy.matMul(a.toFloat(), true, false); }
                };
            }
            else if (transposeA && !transposeB) {
                return {
                    a: function () { return b.toFloat().matMul(dy, false, true); },
                    b: function () { return a.toFloat().matMul(dy, false, false); }
                };
            }
            else {
                return {
                    a: function () { return b.toFloat().matMul(dy, true, true); },
                    b: function () { return dy.matMul(a.toFloat(), true, true); }
                };
            }
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.matMul(a, b, transposeA, transposeB); }, { a: a, b: b }, grad);
    };
    MatmulOps.vectorTimesMatrix = function (v, matrix) {
        util.assert(v.rank === 1, "Error in vectorTimesMatrix: first input must be rank 1, but got " +
            ("rank " + v.rank + "."));
        util.assert(matrix.rank === 2, "Error in vectorTimesMatrix: second input must be rank 2, but got " +
            ("rank " + matrix.rank + "."));
        util.assert(v.size === matrix.shape[0], "Error in vectorTimesMatrix: size of vector (" + v.size + ") " +
            ("must match first dimension of matrix (" + matrix.shape[0] + ")"));
        return v.as2D(1, -1).matMul(matrix).as1D();
    };
    MatmulOps.matrixTimesVector = function (matrix, v) {
        util.assert(v.rank === 1, "Error in matrixTimesVector: second input must rank 1, but got " +
            ("rank " + v.rank + "."));
        util.assert(matrix.rank === 2, "Error in matrixTimesVector: first input must be a rank 2, but got " +
            ("rank " + matrix.rank + "."));
        util.assert(v.size === matrix.shape[1], "Error in matrixTimesVector: size of first rank 1 input " + v.size + " " +
            "must match inner dimension of second rank 2 input, but got " +
            ("shape " + matrix.shape + "."));
        return matrix.matMul(v.as2D(-1, 1)).as1D();
    };
    MatmulOps.dotProduct = function (v1, v2) {
        util.assert(v1.rank === 1 && v2.rank === 1, "Error in dotProduct: inputs must be rank 1, but got ranks " +
            (v1.rank + " and " + v2.rank + "."));
        util.assert(v1.size === v2.size, "Error in dotProduct: size of inputs (" + v1.size + ") and (" +
            (v2.size + ") must match."));
        return v1.as2D(1, -1).matMul(v2.as2D(-1, 1)).asScalar();
    };
    MatmulOps.outerProduct = function (v1, v2) {
        util.assert(v1.rank === 1 && v2.rank === 1, "Error in outerProduct: inputs must be rank 1, but got ranks " +
            (v1.rank + " and " + v2.rank + "."));
        return v1.as2D(-1, 1).matMul(v2.as2D(1, -1));
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Matrices' }),
        operation_1.operation
    ], MatmulOps, "matMul", null);
    __decorate([
        operation_1.operation
    ], MatmulOps, "vectorTimesMatrix", null);
    __decorate([
        operation_1.operation
    ], MatmulOps, "matrixTimesVector", null);
    __decorate([
        operation_1.operation
    ], MatmulOps, "dotProduct", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Matrices' }),
        operation_1.operation
    ], MatmulOps, "outerProduct", null);
    return MatmulOps;
}());
exports.MatmulOps = MatmulOps;

},{"../doc":35,"../environment":24,"../util":26,"./operation":91}],83:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var util = require("../util");
var array_ops_1 = require("./array_ops");
var binary_ops_1 = require("./binary_ops");
var operation_1 = require("./operation");
var MovingAverageOps = (function () {
    function MovingAverageOps() {
    }
    MovingAverageOps.movingAverage = function (v, x, decay, step, zeroDebias) {
        if (zeroDebias === void 0) { zeroDebias = true; }
        util.assertArgumentsAreTensors({ v: v, x: x }, 'movingAverage');
        util.assertTypesMatch(v, x);
        util.assert(util.arraysEqual(v.shape, x.shape), 'Shape mismatch in v and x');
        var one = array_ops_1.ArrayOps.scalar(1);
        decay = typeof decay === 'number' ? array_ops_1.ArrayOps.scalar(decay) : decay;
        var oneMinusDecay = one.sub(decay);
        var update = x.sub(v).mul(oneMinusDecay);
        if (zeroDebias) {
            util.assert(step != null, 'When using zeroDebias: true, step is required.');
            step = typeof step === 'number' ? array_ops_1.ArrayOps.scalar(step) : step;
            update = update.div(one.sub(binary_ops_1.BinaryOps.pow(decay, step)));
        }
        return v.add(update);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Moving Average' }),
        operation_1.operation
    ], MovingAverageOps, "movingAverage", null);
    return MovingAverageOps;
}());
exports.MovingAverageOps = MovingAverageOps;

},{"../doc":35,"../util":26,"./array_ops":73,"./binary_ops":72,"./operation":91}],88:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var util = require("../util");
var axis_util = require("./axis_util");
var operation_1 = require("./operation");
var ops = require("./ops");
var NormOps = (function () {
    function NormOps() {
    }
    NormOps.norm = function (x, ord, axis, keepDims) {
        if (ord === void 0) { ord = 'euclidean'; }
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        util.assertArgumentsAreTensors({ x: x }, 'norm');
        var norm = normImpl(x, ord, axis);
        var keepDimsShape = norm.shape;
        if (keepDims) {
            var axes = axis_util.parseAxisParam(axis, x.shape);
            keepDimsShape = axis_util.expandShapeToKeepDim(norm.shape, axes);
        }
        return norm.reshape(keepDimsShape);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Matrices' }),
        operation_1.operation
    ], NormOps, "norm", null);
    return NormOps;
}());
exports.NormOps = NormOps;
function normImpl(x, p, axis) {
    if (axis === void 0) { axis = null; }
    if (x.rank === 0) {
        return x.abs();
    }
    if (x.rank !== 1 && axis === null) {
        return normImpl(x.reshape([-1]), p, axis);
    }
    if (x.rank === 1 || typeof axis === 'number' ||
        axis instanceof Array && axis.length === 1) {
        if (p === 1) {
            return x.abs().sum(axis);
        }
        if (p === Infinity) {
            return x.abs().max(axis);
        }
        if (p === -Infinity) {
            return x.abs().min(axis);
        }
        if (p === 'euclidean' || p === 2) {
            return x.abs().pow(ops.scalar(2, 'int32')).sum(axis).sqrt();
        }
        throw new Error("Error in norm: invalid ord value: " + p);
    }
    if (axis instanceof Array && axis.length === 2) {
        if (p === 1) {
            return x.abs().sum(axis[0]).max(axis[1] - 1);
        }
        if (p === Infinity) {
            return x.abs().sum(axis[1]).max(axis[0]);
        }
        if (p === -Infinity) {
            return x.abs().sum(axis[1]).min(axis[0]);
        }
        if (p === 'fro' || p === 'euclidean') {
            return x.square().sum(axis).sqrt();
        }
        throw new Error("Error in norm: invalid ord value: " + p);
    }
    throw new Error("Error in norm: invalid axis: " + axis);
}

},{"../doc":35,"../util":26,"./axis_util":58,"./operation":91,"./ops":47}],85:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var conv_util = require("./conv_util");
var operation_1 = require("./operation");
var PoolOps = (function () {
    function PoolOps() {
    }
    PoolOps.maxPool = function (x, filterSize, strides, pad, dimRoundingMode) {
        util.assertArgumentsAreTensors({ x: x }, 'maxPool');
        var x4D = x;
        var reshapedTo4D = false;
        if (x.rank === 3) {
            reshapedTo4D = true;
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        util.assert(x4D.rank === 4, "Error in maxPool: input must be rank 4 but got rank " + x4D.rank + ".");
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in maxPool: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        var convInfo = conv_util.computePool2DInfo(x4D.shape, filterSize, strides, pad, dimRoundingMode);
        var grad = function (dy, saved) {
            var y4D = saved[0];
            return {
                x: function () { return PoolOps.maxPoolBackprop(dy, x4D, y4D, filterSize, strides, pad); }
            };
        };
        var res = environment_1.ENV.engine.runKernel(function (backend, save) { return save(backend.maxPool(x4D, convInfo)); }, { x: x4D }, grad);
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    PoolOps.maxPoolBackprop = function (dy, input, output, filterSize, strides, pad, dimRoundingMode) {
        util.assertArgumentsAreTensors({ dy: dy, input: input, output: output }, 'maxPoolBackprop');
        util.assert(input.rank === dy.rank, "Rank of input (" + input.rank + ") does not match rank of dy (" + dy.rank + ")");
        util.assert(dy.rank === 4, "Error in maxPoolBackprop: dy must be rank 4 but got rank " +
            (dy.rank + "."));
        util.assert(input.rank === 4, "Error in maxPoolBackprop: input must be rank 4 but got rank " +
            (input.rank + "."));
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in maxPoolBackprop: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        var convInfo = conv_util.computePool2DInfo(input.shape, filterSize, strides, pad, dimRoundingMode);
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.maxPoolBackprop(dy, input, output, convInfo); }, { dy: dy, input: input });
        return res;
    };
    PoolOps.avgPool = function (x, filterSize, strides, pad, dimRoundingMode) {
        util.assertArgumentsAreTensors({ x: x }, 'avgPool');
        util.assert(x.dtype === 'float32', 'The input dtype to avgPool must be float32');
        var x4D = x;
        var reshapedTo4D = false;
        if (x.rank === 3) {
            reshapedTo4D = true;
            x4D = x.as4D(1, x.shape[0], x.shape[1], x.shape[2]);
        }
        util.assert(x4D.rank === 4, "Error in avgPool: x must be rank 4 but got rank " + x4D.rank + ".");
        if (dimRoundingMode != null) {
            util.assert(util.isInt(pad), "Error in avgPool: pad must be an integer when using, " +
                ("dimRoundingMode " + dimRoundingMode + " but got pad " + pad + "."));
        }
        var convInfo = conv_util.computePool2DInfo(x4D.shape, filterSize, strides, pad);
        var grad = function (dy) {
            return {
                x: function () { return PoolOps.avgPoolBackprop(dy, x4D, filterSize, strides, pad); }
            };
        };
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.avgPool(x4D, convInfo); }, { x: x4D }, grad);
        res = res.cast(x.dtype);
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    PoolOps.avgPoolBackprop = function (dy, input, filterSize, strides, pad) {
        util.assertArgumentsAreTensors({ dy: dy, input: input }, 'avgPoolBackprop');
        util.assert(input.rank === dy.rank, "Rank of input (" + input.rank + ") does not match rank of dy (" + dy.rank + ")");
        var input4D = input;
        var dy4D = dy;
        var reshapedTo4D = false;
        if (input.rank === 3) {
            reshapedTo4D = true;
            input4D = input.as4D(1, input.shape[0], input.shape[1], input.shape[2]);
            dy4D = dy.as4D(1, dy.shape[0], dy.shape[1], dy.shape[2]);
        }
        util.assert(dy4D.rank === 4, "Error in avgPoolBackprop: dy must be rank 4 but got rank " +
            (dy4D.rank + "."));
        util.assert(input4D.rank === 4, "Error in avgPoolBackprop: input must be rank 4 but got rank " +
            (input4D.rank + "."));
        var convInfo = conv_util.computePool2DInfo(input4D.shape, filterSize, strides, pad);
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.avgPoolBackprop(dy4D, input4D, convInfo); }, { dy4D: dy4D, input4D: input4D });
        if (reshapedTo4D) {
            return res.as3D(res.shape[1], res.shape[2], res.shape[3]);
        }
        return res;
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Convolution' }),
        operation_1.operation
    ], PoolOps, "maxPool", null);
    __decorate([
        operation_1.operation
    ], PoolOps, "maxPoolBackprop", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Convolution' }),
        operation_1.operation
    ], PoolOps, "avgPool", null);
    __decorate([
        operation_1.operation
    ], PoolOps, "avgPoolBackprop", null);
    return PoolOps;
}());
exports.PoolOps = PoolOps;

},{"../doc":35,"../environment":24,"../util":26,"./conv_util":129,"./operation":91}],92:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var axis_util_1 = require("./axis_util");
var operation_1 = require("./operation");
var ReverseOps = (function () {
    function ReverseOps() {
    }
    ReverseOps.reverse1d = function (x) {
        util.assert(x.rank === 1, "Error in reverse1D: x must be rank 1 but got\n             rank " + x.rank + ".");
        return ReverseOps.reverse(x, 0);
    };
    ReverseOps.reverse2d = function (x, axis) {
        util.assert(x.rank === 2, "Error in reverse2D: x must be rank 2 but got\n             rank " + x.rank + ".");
        return ReverseOps.reverse(x, axis);
    };
    ReverseOps.reverse3d = function (x, axis) {
        util.assert(x.rank === 3, "Error in reverse3D: x must be rank 3 but got\n             rank " + x.rank + ".");
        return ReverseOps.reverse(x, axis);
    };
    ReverseOps.reverse4d = function (x, axis) {
        util.assert(x.rank === 4, "Error in reverse4D: x must be rank 4 but got\n             rank " + x.rank + ".");
        return ReverseOps.reverse(x, axis);
    };
    ReverseOps.reverse = function (x, axis) {
        util.assertArgumentsAreTensors({ x: x }, 'reverse');
        if (x.rank === 0) {
            return x.clone();
        }
        var axes = axis_util_1.parseAxisParam(axis, x.shape);
        var grad = function (dy) {
            return { x: function () { return dy.reverse(axes); } };
        };
        var res = environment_1.ENV.engine.runKernel(function (backend) { return backend.reverse(x, axes); }, { x: x }, grad);
        return res.reshapeAs(x);
    };
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
        operation_1.operation
    ], ReverseOps, "reverse", null);
    return ReverseOps;
}());
exports.ReverseOps = ReverseOps;

},{"../doc":35,"../environment":24,"../util":26,"./axis_util":58,"./operation":91}],130:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("../util");
function assertParamsValid(input, begin, size) {
    util.assert(input.rank === begin.length, "Error in slice" + input.rank + "D: Length of begin " + begin + " must " +
        ("match the rank of the array (" + input.rank + ")."));
    util.assert(input.rank === size.length, "Error in slice" + input.rank + "D: Length of size " + size + " must " +
        ("match the rank of the array (" + input.rank + ")."));
    for (var i = 0; i < input.rank; ++i) {
        util.assert(begin[i] + size[i] <= input.shape[i], "Error in slice" + input.rank + "D: begin[" + i + "] + size[" + i + "] " +
            ("(" + (begin[i] + size[i]) + ") would overflow input.shape[" + i + "] (" + input.shape[i] + ")"));
    }
}
exports.assertParamsValid = assertParamsValid;

},{"../util":26}],93:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var operation_1 = require("./operation");
var slice_util = require("./slice_util");
var SliceOps = (function () {
    function SliceOps() {
    }
    SliceOps.slice1d = function (x, begin, size) {
        util.assert(x.rank === 1, "slice1d expects a rank-1 tensor, but got a rank-" + x.rank + " tensor");
        return SliceOps.slice(x, [begin], [size]);
    };
    SliceOps.slice2d = function (x, begin, size) {
        util.assert(x.rank === 2, "slice1d expects a rank-2 tensor, but got a rank-" + x.rank + " tensor");
        return SliceOps.slice(x, begin, size);
    };
    SliceOps.slice3d = function (x, begin, size) {
        util.assert(x.rank === 3, "slice1d expects a rank-3 tensor, but got a rank-" + x.rank + " tensor");
        return SliceOps.slice(x, begin, size);
    };
    SliceOps.slice4d = function (x, begin, size) {
        util.assert(x.rank === 4, "slice1d expects a rank-4 tensor, but got a rank-" + x.rank + " tensor");
        return SliceOps.slice(x, begin, size);
    };
    SliceOps.slice = function (x, begin, size) {
        util.assertArgumentsAreTensors({ x: x }, 'slice');
        if (x.rank === 0) {
            throw new Error('Slicing scalar is not possible');
        }
        var begin_;
        if (typeof begin === 'number') {
            begin_ = [begin].concat(new Array(x.rank - 1).fill(0));
        }
        else if (begin.length < x.rank) {
            begin_ = begin.concat(new Array(x.rank - begin.length).fill(0));
        }
        else {
            begin_ = begin;
        }
        var size_;
        if (size == null) {
            size_ = new Array(x.rank).fill(-1);
        }
        else if (typeof size === 'number') {
            size_ = [size].concat(new Array(x.rank - 1).fill(-1));
        }
        else if (size.length < x.rank) {
            size_ = size.concat(new Array(x.rank - size.length).fill(-1));
        }
        else {
            size_ = size;
        }
        size_ = size_.map(function (d, i) {
            if (d >= 0) {
                return d;
            }
            else {
                util.assert(d === -1, 'Bad value in size');
                return x.shape[i] - begin_[i];
            }
        });
        slice_util.assertParamsValid(x, begin_, size_);
        var inputShape = x.shape;
        var grad = function (dy) {
            var paddings = [];
            for (var i = 0; i < dy.rank; i++) {
                paddings.push([begin_[i], inputShape[i] - begin_[i] - size_[i]]);
            }
            return { x: function () { return dy.pad(paddings); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.slice(x, begin_, size_); }, { x: x }, grad);
    };
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Slicing and Joining' }),
        operation_1.operation
    ], SliceOps, "slice", null);
    return SliceOps;
}());
exports.SliceOps = SliceOps;

},{"../doc":35,"../environment":24,"../util":26,"./operation":91,"./slice_util":130}],87:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var globals_1 = require("../globals");
var util = require("../util");
var axis_util = require("./axis_util");
var operation_1 = require("./operation");
var ops = require("./ops");
var SoftmaxOps = (function () {
    function SoftmaxOps() {
    }
    SoftmaxOps.softmax = function (logits, dim) {
        if (dim === void 0) { dim = -1; }
        util.assertArgumentsAreTensors({ logits: logits }, 'softmax');
        if (dim === -1) {
            dim = logits.rank - 1;
        }
        if (dim !== logits.rank - 1) {
            throw Error('Softmax along a non-last dimension is not yet supported. ' +
                ("Logits was rank " + logits.rank + " and dim was " + dim));
        }
        var customOp = globals_1.customGrad(function (logits) {
            var keepDims = true;
            var lse = logits.logSumExp([dim], keepDims);
            var logResult = logits.toFloat().sub(lse);
            var y = logResult.exp();
            var gradFunc = function (dy) {
                var dyTimesY = dy.mul(y);
                var keepDims = true;
                return dyTimesY.sub(dyTimesY.sum([dim], keepDims).mul(y));
            };
            return { value: y, gradFunc: gradFunc };
        });
        return customOp(logits);
    };
    SoftmaxOps.softmaxCrossEntropy = function (labels, logits, dim) {
        if (dim === void 0) { dim = -1; }
        util.assertArgumentsAreTensors({ labels: labels, logits: logits }, 'softmaxCrossEntropy');
        util.assertShapesMatch(labels.shape, logits.shape, 'Error in softmaxCrossEntropy: ');
        if (dim === -1) {
            dim = logits.rank - 1;
        }
        if (dim !== logits.rank - 1) {
            throw Error("Softmax cross entropy along a non-last dimension is not yet " +
                ("supported. Labels / logits was rank " + logits.rank + " ") +
                ("and dim was " + dim));
        }
        var customOp = globals_1.customGrad(function (labels, logits) {
            var predictedProbs = logits.softmax(dim);
            var costVector = ops.scalar(1e-5).add(predictedProbs).log().mul(labels).neg();
            var value = costVector.sum([dim]);
            var gradFunc = function (dy) {
                var dyShape = axis_util.expandShapeToKeepDim(dy.shape, [dim]);
                return [
                    dy.reshape(dyShape).mul(labels.toFloat().sub(predictedProbs)),
                    dy.reshape(dyShape).mul(predictedProbs.sub(labels.toFloat())),
                ];
            };
            return { value: value, gradFunc: gradFunc };
        });
        return customOp(labels, logits);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Normalization' }),
        operation_1.operation
    ], SoftmaxOps, "softmax", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Losses', namespace: 'losses' }),
        operation_1.operation
    ], SoftmaxOps, "softmaxCrossEntropy", null);
    return SoftmaxOps;
}());
exports.SoftmaxOps = SoftmaxOps;

},{"../doc":35,"../globals":34,"../util":26,"./axis_util":58,"./operation":91,"./ops":47}],89:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var axis_util = require("./axis_util");
var operation_1 = require("./operation");
var TransposeOps = (function () {
    function TransposeOps() {
    }
    TransposeOps.transpose = function (x, perm) {
        util.assertArgumentsAreTensors({ x: x }, 'transpose');
        if (perm == null) {
            perm = x.shape.map(function (s, i) { return i; }).reverse();
        }
        util.assert(x.rank === perm.length, "Error in transpose: rank of input " + x.rank + " " +
            ("must match length of perm " + perm + "."));
        perm.forEach(function (axis) {
            util.assert(axis >= 0 && axis < x.rank, "All entries in 'perm' must be between 0 and " + (x.rank - 1) +
                (" but got " + perm));
        });
        if (x.rank <= 1) {
            return x.clone();
        }
        var der = function (dy) {
            var undoPerm = axis_util.getUndoAxesPermutation(perm);
            return { x: function () { return dy.transpose(undoPerm); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.transpose(x, perm); }, { x: x }, der);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Matrices' }),
        operation_1.operation
    ], TransposeOps, "transpose", null);
    return TransposeOps;
}());
exports.TransposeOps = TransposeOps;

},{"../doc":35,"../environment":24,"../util":26,"./axis_util":58,"./operation":91}],64:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SELU_SCALEALPHA = 1.7580993408473768599402175208123;
exports.SELU_SCALE = 1.0507009873554804934193349852946;

},{}],90:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var environment_1 = require("../environment");
var util = require("../util");
var operation_1 = require("./operation");
var ops = require("./ops");
var ops_1 = require("./ops");
var selu_util = require("./selu_util");
var UnaryOps = (function () {
    function UnaryOps() {
    }
    UnaryOps.neg = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'neg');
        var grad = function (dy) {
            return { x: function () { return dy.neg(); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.neg(x); }, { x: x }, grad);
    };
    UnaryOps.ceil = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'ceil');
        var grad = function (dy) {
            return { x: function () { return ops.zerosLike(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.ceil(x); }, { x: x }, grad);
    };
    UnaryOps.floor = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'floor');
        var grad = function (dy) {
            return { x: function () { return ops.zerosLike(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.floor(x); }, { x: x }, grad);
    };
    UnaryOps.sign = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'sign');
        var grad = function (dy) {
            return { x: function () { return ops.zerosLike(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.sign(x); }, { x: x }, grad);
    };
    UnaryOps.round = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'round');
        var grad = function (dy) {
            return { x: function () { return ops.zerosLike(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.round(x); }, { x: x }, grad);
    };
    UnaryOps.exp = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'exp');
        var bck = function (dy, saved) {
            var y = saved[0];
            return { x: function () { return dy.mulStrict(y); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend, save) { return save(backend.exp(x)); }, { x: x }, bck);
    };
    UnaryOps.expm1 = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'expm1');
        var grad = function (dy) {
            return { x: function () { return dy.mulStrict(x.exp()); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.expm1(x); }, { x: x }, grad);
    };
    UnaryOps.log = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'log');
        var grad = function (dy) {
            return { x: function () { return dy.divStrict(x.toFloat()); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.log(x); }, { x: x }, grad);
    };
    UnaryOps.log1p = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'log1p');
        var grad = function (dy) {
            return { x: function () { return dy.divStrict(x.add(ops.scalar(1))); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.log1p(x); }, { x: x }, grad);
    };
    UnaryOps.sqrt = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'sqrt');
        var grad = function (dy) {
            return { x: function () { return dy.divStrict(x.toFloat().sqrt().mul(ops.scalar(2))); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.sqrt(x); }, { x: x }, grad);
    };
    UnaryOps.rsqrt = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'rsqrt');
        var grad = function (dy) {
            return {
                x: function () { return dy.divStrict(x.pow(ops.scalar(1.5)).mul(ops.scalar(2))).neg(); }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.rsqrt(x); }, { x: x }, grad);
    };
    UnaryOps.square = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'square');
        var grad = function (dy) {
            return { x: function () { return dy.mulStrict(x.toFloat().mul(ops.scalar(2))); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.square(x); }, { x: x }, grad);
    };
    UnaryOps.reciprocal = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'reciprocal');
        var grad = function (dy) {
            return { x: function () { return dy.divStrict(x.square().neg()); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.reciprocal(x); }, { x: x }, grad);
    };
    UnaryOps.abs = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'abs');
        var grad = function (dy) {
            return { x: function () { return dy.mulStrict(x.toFloat().step(-1)); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.abs(x); }, { x: x }, grad);
    };
    UnaryOps.clipByValue = function (x, clipValueMin, clipValueMax) {
        util.assertArgumentsAreTensors({ x: x }, 'clipByValue');
        util.assert((clipValueMin <= clipValueMax), "Error in clip: min (" + clipValueMin + ") must be " +
            ("less than or equal to max (" + clipValueMax + ")."));
        var grad = function (dy) {
            return {
                x: function () { return dy.where(x.greater(ops.scalar(clipValueMin))
                    .logicalAnd(x.less(ops.scalar(clipValueMax))), ops_1.zerosLike(dy)); },
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.clip(x, clipValueMin, clipValueMax); }, { x: x }, grad);
    };
    UnaryOps.relu = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'relu');
        if (x.dtype === 'bool') {
            return x.toInt();
        }
        var grad = function (dy) {
            var stepRes = x.step();
            return { x: function () { return dy.mulStrict(stepRes.toFloat()); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.relu(x); }, { x: x }, grad);
    };
    UnaryOps.elu = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'elu');
        var grad = function (dy, saved) {
            var y = saved[0];
            return {
                x: function () {
                    return environment_1.ENV.engine.runKernel(function (backend) { return backend.eluDer(dy, y); }, { dy: dy, y: y });
                }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend, save) { return save(backend.elu(x)); }, { x: x }, grad);
    };
    UnaryOps.selu = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'selu');
        var grad = function (dy) {
            return {
                x: function () {
                    var mask = x.greater(ops.scalar(0));
                    var scaleAlpha = ops.scalar(selu_util.SELU_SCALEALPHA);
                    var scale = ops.scalar(selu_util.SELU_SCALE);
                    var greaterThanZeroDer = dy.mul(scale);
                    var lessEqualZeroDer = dy.mul(scaleAlpha).mul(x.toFloat().exp());
                    return ops.where(mask, greaterThanZeroDer, lessEqualZeroDer);
                }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.selu(x); }, { x: x }, grad);
    };
    UnaryOps.leakyRelu = function (x, alpha) {
        if (alpha === void 0) { alpha = 0.2; }
        util.assertArgumentsAreTensors({ x: x }, 'leakyRelu');
        return ops.maximum(ops.scalar(alpha).mul(x), x);
    };
    UnaryOps.prelu = function (x, alpha) {
        util.assertArgumentsAreTensors({ x: x, alpha: alpha }, 'prelu');
        var zero = ops.scalar(0);
        return ops.maximum(zero, x).add(alpha.mul(ops.minimum(zero, x)));
    };
    UnaryOps.sigmoid = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'sigmoid');
        var grad = function (dy, saved) {
            var y = saved[0];
            return { x: function () { return dy.mulStrict(y.mul(ops.scalar(1).sub(y))); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend, save) { return save(backend.sigmoid(x)); }, { x: x }, grad);
    };
    UnaryOps.logSigmoid = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'logSigmoid');
        var grad = function (dy) {
            return { x: function () { return dy.mulStrict(x.neg().sigmoid()); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.softplus(x.neg()).neg(); }, { x: x }, grad);
    };
    UnaryOps.softplus = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'softplus');
        var grad = function (dy) {
            return { x: function () { return dy.mulStrict(x.sigmoid()); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.softplus(x); }, { x: x }, grad);
    };
    UnaryOps.sin = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'sin');
        var grad = function (dy) {
            return { x: function () { return x.toFloat().cos().mulStrict(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.sin(x); }, { x: x }, grad);
    };
    UnaryOps.cos = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'cos');
        var grad = function (dy) {
            return { x: function () { return x.toFloat().sin().neg().mulStrict(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.cos(x); }, { x: x }, grad);
    };
    UnaryOps.tan = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'tan');
        var grad = function (dy) {
            return { x: function () { return dy.divStrict(x.cos().square()); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.tan(x); }, { x: x }, grad);
    };
    UnaryOps.asin = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'asin');
        var grad = function (dy) {
            return {
                x: function () {
                    return dy.divStrict(UnaryOps.sqrt(ops.scalar(1).sub(x.toFloat().square())));
                }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.asin(x); }, { x: x }, grad);
    };
    UnaryOps.acos = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'acos');
        var grad = function (dy) {
            return {
                x: function () {
                    return dy.divStrict(UnaryOps.sqrt(ops.scalar(1).sub(x.toFloat().square())))
                        .neg();
                }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.acos(x); }, { x: x }, grad);
    };
    UnaryOps.atan = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'atan');
        var grad = function (dy) {
            return { x: function () { return dy.divStrict(ops.scalar(1).add(x.toFloat().square())); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.atan(x); }, { x: x }, grad);
    };
    UnaryOps.sinh = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'sinh');
        var grad = function (dy) {
            return { x: function () { return x.toFloat().cosh().mulStrict(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.sinh(x); }, { x: x }, grad);
    };
    UnaryOps.cosh = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'cosh');
        var grad = function (dy) {
            return { x: function () { return x.toFloat().sinh().mulStrict(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.cosh(x); }, { x: x }, grad);
    };
    UnaryOps.tanh = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'tanh');
        var grad = function (dy, saved) {
            var y = saved[0];
            return { x: function () { return ops.scalar(1).sub(y.square()).mulStrict(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend, save) { return save(backend.tanh(x)); }, { x: x }, grad);
    };
    UnaryOps.asinh = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'asinh');
        var grad = function (dy) {
            return {
                x: function () {
                    return dy.divStrict(UnaryOps.sqrt(ops.scalar(1).add(x.toFloat().square())));
                }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.asinh(x); }, { x: x }, grad);
    };
    UnaryOps.acosh = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'acosh');
        var grad = function (dy) {
            return {
                x: function () {
                    return dy.divStrict(UnaryOps.sqrt(x.toFloat().square().sub(ops.scalar(1))));
                }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.acosh(x); }, { x: x }, grad);
    };
    UnaryOps.atanh = function (x) {
        util.assertArgumentsAreTensors({ x: x }, 'atanh');
        var grad = function (dy) {
            return { x: function () { return dy.divStrict(ops.scalar(1).sub(x.toFloat().square())); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.atanh(x); }, { x: x }, grad);
    };
    UnaryOps.erf = function (x) {
        util.assert(x.dtype === 'int32' || x.dtype === 'float32', 'Input dtype must be `int32` or `float32`.');
        if (x.dtype === 'int32') {
            x = x.toFloat();
        }
        var grad = function (dy) {
            return {
                x: function () {
                    return dy.mulStrict(ops.scalar(2 / Math.sqrt(Math.PI))
                        .mul(x.square().neg().exp()));
                }
            };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.erf(x); }, { x: x }, grad);
    };
    UnaryOps.step = function (x, alpha) {
        if (alpha === void 0) { alpha = 0.0; }
        util.assertArgumentsAreTensors({ x: x }, 'step');
        var grad = function (dy) {
            return { x: function () { return ops.zerosLike(dy); } };
        };
        return environment_1.ENV.engine.runKernel(function (backend) { return backend.step(x, alpha); }, { x: x }, grad);
    };
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "neg", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "ceil", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "floor", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "sign", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "round", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "exp", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "expm1", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "log", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "log1p", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "sqrt", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "rsqrt", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "square", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "reciprocal", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "abs", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "clipByValue", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "relu", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "elu", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "selu", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "leakyRelu", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "prelu", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "sigmoid", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "logSigmoid", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "softplus", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "sin", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "cos", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "tan", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "asin", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "acos", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "atan", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "sinh", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "cosh", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "tanh", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "asinh", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "acosh", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "atanh", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "erf", null);
    __decorate([
        doc_1.doc({ heading: 'Operations', subheading: 'Basic math' }),
        operation_1.operation
    ], UnaryOps, "step", null);
    return UnaryOps;
}());
exports.UnaryOps = UnaryOps;

},{"../doc":35,"../environment":24,"../util":26,"./operation":91,"./ops":47,"./selu_util":64}],47:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_ops_1 = require("./array_ops");
var batchnorm_1 = require("./batchnorm");
var binary_ops_1 = require("./binary_ops");
var compare_1 = require("./compare");
var concat_1 = require("./concat");
var conv_1 = require("./conv");
var image_ops_1 = require("./image_ops");
var linalg_ops_1 = require("./linalg_ops");
var logical_ops_1 = require("./logical_ops");
var loss_ops_1 = require("./loss_ops");
var lrn_1 = require("./lrn");
var lstm_1 = require("./lstm");
var matmul_1 = require("./matmul");
var moving_average_1 = require("./moving_average");
var norm_1 = require("./norm");
var pool_1 = require("./pool");
var reduction_ops_1 = require("./reduction_ops");
var reverse_1 = require("./reverse");
var slice_1 = require("./slice");
var softmax_1 = require("./softmax");
var transpose_1 = require("./transpose");
var unary_ops_1 = require("./unary_ops");
exports.batchNormalization = batchnorm_1.BatchNormOps.batchNormalization;
exports.batchNormalization2d = batchnorm_1.BatchNormOps.batchNormalization2d;
exports.batchNormalization3d = batchnorm_1.BatchNormOps.batchNormalization3d;
exports.batchNormalization4d = batchnorm_1.BatchNormOps.batchNormalization4d;
exports.concat = concat_1.ConcatOps.concat;
exports.concat1d = concat_1.ConcatOps.concat1d;
exports.concat2d = concat_1.ConcatOps.concat2d;
exports.concat3d = concat_1.ConcatOps.concat3d;
exports.concat4d = concat_1.ConcatOps.concat4d;
exports.conv1d = conv_1.ConvOps.conv1d;
exports.conv2d = conv_1.ConvOps.conv2d;
exports.conv2dTranspose = conv_1.ConvOps.conv2dTranspose;
exports.depthwiseConv2d = conv_1.ConvOps.depthwiseConv2d;
exports.separableConv2d = conv_1.ConvOps.separableConv2d;
exports.matMul = matmul_1.MatmulOps.matMul;
exports.matrixTimesVector = matmul_1.MatmulOps.matrixTimesVector;
exports.outerProduct = matmul_1.MatmulOps.outerProduct;
exports.vectorTimesMatrix = matmul_1.MatmulOps.vectorTimesMatrix;
exports.avgPool = pool_1.PoolOps.avgPool;
exports.maxPool = pool_1.PoolOps.maxPool;
exports.transpose = transpose_1.TransposeOps.transpose;
exports.reverse = reverse_1.ReverseOps.reverse;
exports.reverse1d = reverse_1.ReverseOps.reverse1d;
exports.reverse2d = reverse_1.ReverseOps.reverse2d;
exports.reverse3d = reverse_1.ReverseOps.reverse3d;
exports.reverse4d = reverse_1.ReverseOps.reverse4d;
exports.slice = slice_1.SliceOps.slice;
exports.slice1d = slice_1.SliceOps.slice1d;
exports.slice2d = slice_1.SliceOps.slice2d;
exports.slice3d = slice_1.SliceOps.slice3d;
exports.slice4d = slice_1.SliceOps.slice4d;
exports.argMax = reduction_ops_1.ReductionOps.argMax;
exports.argMin = reduction_ops_1.ReductionOps.argMin;
exports.logSumExp = reduction_ops_1.ReductionOps.logSumExp;
exports.max = reduction_ops_1.ReductionOps.max;
exports.mean = reduction_ops_1.ReductionOps.mean;
exports.min = reduction_ops_1.ReductionOps.min;
exports.moments = reduction_ops_1.ReductionOps.moments;
exports.sum = reduction_ops_1.ReductionOps.sum;
exports.unsortedSegmentSum = reduction_ops_1.ReductionOps.unsortedSegmentSum;
exports.equal = compare_1.CompareOps.equal;
exports.equalStrict = compare_1.CompareOps.equalStrict;
exports.greater = compare_1.CompareOps.greater;
exports.greaterStrict = compare_1.CompareOps.greaterStrict;
exports.greaterEqual = compare_1.CompareOps.greaterEqual;
exports.greaterEqualStrict = compare_1.CompareOps.greaterEqualStrict;
exports.less = compare_1.CompareOps.less;
exports.lessStrict = compare_1.CompareOps.lessStrict;
exports.lessEqual = compare_1.CompareOps.lessEqual;
exports.lessEqualStrict = compare_1.CompareOps.lessEqualStrict;
exports.notEqual = compare_1.CompareOps.notEqual;
exports.notEqualStrict = compare_1.CompareOps.notEqualStrict;
exports.logicalNot = logical_ops_1.LogicalOps.logicalNot;
exports.logicalAnd = logical_ops_1.LogicalOps.logicalAnd;
exports.logicalOr = logical_ops_1.LogicalOps.logicalOr;
exports.logicalXor = logical_ops_1.LogicalOps.logicalXor;
exports.where = logical_ops_1.LogicalOps.where;
exports.abs = unary_ops_1.UnaryOps.abs;
exports.acos = unary_ops_1.UnaryOps.acos;
exports.acosh = unary_ops_1.UnaryOps.acosh;
exports.asin = unary_ops_1.UnaryOps.asin;
exports.asinh = unary_ops_1.UnaryOps.asinh;
exports.atan = unary_ops_1.UnaryOps.atan;
exports.atanh = unary_ops_1.UnaryOps.atanh;
exports.ceil = unary_ops_1.UnaryOps.ceil;
exports.clipByValue = unary_ops_1.UnaryOps.clipByValue;
exports.cos = unary_ops_1.UnaryOps.cos;
exports.cosh = unary_ops_1.UnaryOps.cosh;
exports.elu = unary_ops_1.UnaryOps.elu;
exports.exp = unary_ops_1.UnaryOps.exp;
exports.expm1 = unary_ops_1.UnaryOps.expm1;
exports.floor = unary_ops_1.UnaryOps.floor;
exports.sign = unary_ops_1.UnaryOps.sign;
exports.leakyRelu = unary_ops_1.UnaryOps.leakyRelu;
exports.log = unary_ops_1.UnaryOps.log;
exports.log1p = unary_ops_1.UnaryOps.log1p;
exports.logSigmoid = unary_ops_1.UnaryOps.logSigmoid;
exports.neg = unary_ops_1.UnaryOps.neg;
exports.prelu = unary_ops_1.UnaryOps.prelu;
exports.relu = unary_ops_1.UnaryOps.relu;
exports.reciprocal = unary_ops_1.UnaryOps.reciprocal;
exports.round = unary_ops_1.UnaryOps.round;
exports.selu = unary_ops_1.UnaryOps.selu;
exports.sigmoid = unary_ops_1.UnaryOps.sigmoid;
exports.sin = unary_ops_1.UnaryOps.sin;
exports.sinh = unary_ops_1.UnaryOps.sinh;
exports.softplus = unary_ops_1.UnaryOps.softplus;
exports.sqrt = unary_ops_1.UnaryOps.sqrt;
exports.rsqrt = unary_ops_1.UnaryOps.rsqrt;
exports.square = unary_ops_1.UnaryOps.square;
exports.step = unary_ops_1.UnaryOps.step;
exports.tan = unary_ops_1.UnaryOps.tan;
exports.tanh = unary_ops_1.UnaryOps.tanh;
exports.erf = unary_ops_1.UnaryOps.erf;
exports.add = binary_ops_1.BinaryOps.add;
exports.addStrict = binary_ops_1.BinaryOps.addStrict;
exports.atan2 = binary_ops_1.BinaryOps.atan2;
exports.div = binary_ops_1.BinaryOps.div;
exports.divStrict = binary_ops_1.BinaryOps.divStrict;
exports.maximum = binary_ops_1.BinaryOps.maximum;
exports.maximumStrict = binary_ops_1.BinaryOps.maximumStrict;
exports.minimum = binary_ops_1.BinaryOps.minimum;
exports.minimumStrict = binary_ops_1.BinaryOps.minimumStrict;
exports.mod = binary_ops_1.BinaryOps.mod;
exports.modStrict = binary_ops_1.BinaryOps.modStrict;
exports.mul = binary_ops_1.BinaryOps.mul;
exports.mulStrict = binary_ops_1.BinaryOps.mulStrict;
exports.pow = binary_ops_1.BinaryOps.pow;
exports.powStrict = binary_ops_1.BinaryOps.powStrict;
exports.sub = binary_ops_1.BinaryOps.sub;
exports.subStrict = binary_ops_1.BinaryOps.subStrict;
exports.squaredDifference = binary_ops_1.BinaryOps.squaredDifference;
exports.squaredDifferenceStrict = binary_ops_1.BinaryOps.squaredDifferenceStrict;
exports.norm = norm_1.NormOps.norm;
exports.cast = array_ops_1.ArrayOps.cast;
exports.clone = array_ops_1.ArrayOps.clone;
exports.fromPixels = array_ops_1.ArrayOps.fromPixels;
exports.toPixels = array_ops_1.ArrayOps.toPixels;
exports.ones = array_ops_1.ArrayOps.ones;
exports.onesLike = array_ops_1.ArrayOps.onesLike;
exports.zeros = array_ops_1.ArrayOps.zeros;
exports.zerosLike = array_ops_1.ArrayOps.zerosLike;
exports.eye = array_ops_1.ArrayOps.eye;
exports.rand = array_ops_1.ArrayOps.rand;
exports.randomNormal = array_ops_1.ArrayOps.randomNormal;
exports.truncatedNormal = array_ops_1.ArrayOps.truncatedNormal;
exports.randomUniform = array_ops_1.ArrayOps.randomUniform;
exports.multinomial = array_ops_1.ArrayOps.multinomial;
exports.reshape = array_ops_1.ArrayOps.reshape;
exports.squeeze = array_ops_1.ArrayOps.squeeze;
exports.tile = array_ops_1.ArrayOps.tile;
exports.gather = array_ops_1.ArrayOps.gather;
exports.oneHot = array_ops_1.ArrayOps.oneHot;
exports.linspace = array_ops_1.ArrayOps.linspace;
exports.range = array_ops_1.ArrayOps.range;
exports.buffer = array_ops_1.ArrayOps.buffer;
exports.fill = array_ops_1.ArrayOps.fill;
exports.tensor = array_ops_1.ArrayOps.tensor;
exports.scalar = array_ops_1.ArrayOps.scalar;
exports.tensor1d = array_ops_1.ArrayOps.tensor1d;
exports.tensor2d = array_ops_1.ArrayOps.tensor2d;
exports.tensor3d = array_ops_1.ArrayOps.tensor3d;
exports.tensor4d = array_ops_1.ArrayOps.tensor4d;
exports.print = array_ops_1.ArrayOps.print;
exports.expandDims = array_ops_1.ArrayOps.expandDims;
exports.stack = array_ops_1.ArrayOps.stack;
exports.split = array_ops_1.ArrayOps.split;
exports.pad = array_ops_1.ArrayOps.pad;
exports.pad1d = array_ops_1.ArrayOps.pad1d;
exports.pad2d = array_ops_1.ArrayOps.pad2d;
exports.pad3d = array_ops_1.ArrayOps.pad3d;
exports.pad4d = array_ops_1.ArrayOps.pad4d;
exports.movingAverage = moving_average_1.MovingAverageOps.movingAverage;
exports.basicLSTMCell = lstm_1.LSTMOps.basicLSTMCell;
exports.multiRNNCell = lstm_1.LSTMOps.multiRNNCell;
exports.softmax = softmax_1.SoftmaxOps.softmax;
exports.localResponseNormalization = lrn_1.LRNOps.localResponseNormalization;
exports.linalg = linalg_ops_1.LinalgOps;
var operation_1 = require("./operation");
exports.operation = operation_1.operation;
var tensor_1 = require("../tensor");
var types_1 = require("../types");
[tensor_1.Tensor, types_1.Rank];
[loss_ops_1.Reduction];
exports.losses = {
    absoluteDifference: loss_ops_1.LossOps.absoluteDifference,
    computeWeightedLoss: loss_ops_1.LossOps.computeWeightedLoss,
    cosineDistance: loss_ops_1.LossOps.cosineDistance,
    hingeLoss: loss_ops_1.LossOps.hingeLoss,
    logLoss: loss_ops_1.LossOps.logLoss,
    meanSquaredError: loss_ops_1.LossOps.meanSquaredError,
    softmaxCrossEntropy: softmax_1.SoftmaxOps.softmaxCrossEntropy
};
exports.image = {
    resizeBilinear: image_ops_1.ImageOps.resizeBilinear,
    resizeNearestNeighbor: image_ops_1.ImageOps.resizeNearestNeighbor,
};

},{"./array_ops":73,"./batchnorm":74,"./binary_ops":72,"./compare":76,"./concat":79,"./conv":78,"./image_ops":75,"./linalg_ops":77,"./logical_ops":80,"./loss_ops":48,"./lrn":84,"./lstm":81,"./matmul":82,"./moving_average":83,"./norm":88,"./pool":85,"./reduction_ops":86,"./reverse":92,"./slice":93,"./softmax":87,"./transpose":89,"./unary_ops":90,"./operation":91,"../tensor":32,"../types":31}],32:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("./doc");
var environment_1 = require("./environment");
var ops = require("./ops/ops");
var tensor_util = require("./tensor_util");
var util = require("./util");
var TensorBuffer = (function () {
    function TensorBuffer(shape, dtype, values) {
        this.dtype = dtype;
        if (values != null) {
            var n = values.length;
            var size = util.sizeFromShape(shape);
            util.assert(n === size, "Length of values '" + n + "' does not match the size " +
                ("inferred by the shape '" + size + "'"));
        }
        this.shape = shape.slice();
        this.values =
            values || util.getTypedArrayFromDType(dtype, util.sizeFromShape(shape));
        this.strides = computeStrides(shape);
        this.size = util.sizeFromShape(shape);
    }
    TensorBuffer.prototype.set = function (value) {
        var locs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            locs[_i - 1] = arguments[_i];
        }
        if (locs.length === 0) {
            locs = [0];
        }
        util.assert(locs.length === this.rank, "The number of provided coordinates (" + locs.length + ") must " +
            ("match the rank (" + this.rank + ")"));
        var index = this.locToIndex(locs);
        this.values[index] = value;
    };
    TensorBuffer.prototype.get = function () {
        var locs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            locs[_i] = arguments[_i];
        }
        if (locs.length === 0) {
            locs = [0];
        }
        var index = locs[locs.length - 1];
        for (var i = 0; i < locs.length - 1; ++i) {
            index += this.strides[i] * locs[i];
        }
        return this.values[index];
    };
    TensorBuffer.prototype.locToIndex = function (locs) {
        if (this.rank === 0) {
            return 0;
        }
        else if (this.rank === 1) {
            return locs[0];
        }
        var index = locs[locs.length - 1];
        for (var i = 0; i < locs.length - 1; ++i) {
            index += this.strides[i] * locs[i];
        }
        return index;
    };
    TensorBuffer.prototype.indexToLoc = function (index) {
        if (this.rank === 0) {
            return [];
        }
        else if (this.rank === 1) {
            return [index];
        }
        var locs = new Array(this.shape.length);
        for (var i = 0; i < locs.length - 1; ++i) {
            locs[i] = Math.floor(index / this.strides[i]);
            index -= locs[i] * this.strides[i];
        }
        locs[locs.length - 1] = index;
        return locs;
    };
    Object.defineProperty(TensorBuffer.prototype, "rank", {
        get: function () {
            return this.shape.length;
        },
        enumerable: true,
        configurable: true
    });
    TensorBuffer.prototype.toTensor = function () {
        return Tensor.make(this.shape, { values: this.values }, this.dtype);
    };
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], TensorBuffer.prototype, "set", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], TensorBuffer.prototype, "get", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], TensorBuffer.prototype, "toTensor", null);
    TensorBuffer = __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], TensorBuffer);
    return TensorBuffer;
}());
exports.TensorBuffer = TensorBuffer;
var Tensor = (function () {
    function Tensor(shape, dtype, values, dataId) {
        this.isDisposed = false;
        this.size = util.sizeFromShape(shape);
        if (values != null) {
            util.assert(this.size === values.length, "Constructing tensor of shape (" + this.size + ") should match the " +
                ("length of values (" + values.length + ")"));
        }
        this.shape = shape.slice();
        this.dtype = dtype || 'float32';
        this.strides = computeStrides(shape);
        this.dataId = dataId != null ? dataId : {};
        this.id = Tensor_1.nextId++;
        this.rankType = (this.rank < 5 ? this.rank.toString() : 'higher');
        environment_1.ENV.engine.registerTensor(this);
        if (values != null) {
            environment_1.ENV.engine.write(this.dataId, values);
        }
    }
    Tensor_1 = Tensor;
    Tensor.make = function (shape, data, dtype) {
        return new Tensor_1(shape, dtype, data.values, data.dataId);
    };
    Tensor.prototype.flatten = function () {
        this.throwIfDisposed();
        return this.as1D();
    };
    Tensor.prototype.asScalar = function () {
        this.throwIfDisposed();
        util.assert(this.size === 1, 'The array must have only 1 element.');
        return this.reshape([]);
    };
    Tensor.prototype.as1D = function () {
        this.throwIfDisposed();
        return this.reshape([this.size]);
    };
    Tensor.prototype.as2D = function (rows, columns) {
        this.throwIfDisposed();
        return this.reshape([rows, columns]);
    };
    Tensor.prototype.as3D = function (rows, columns, depth) {
        this.throwIfDisposed();
        return this.reshape([rows, columns, depth]);
    };
    Tensor.prototype.as4D = function (rows, columns, depth, depth2) {
        this.throwIfDisposed();
        return this.reshape([rows, columns, depth, depth2]);
    };
    Tensor.prototype.asType = function (dtype) {
        this.throwIfDisposed();
        return ops.cast(this, dtype);
    };
    Object.defineProperty(Tensor.prototype, "rank", {
        get: function () {
            return this.shape.length;
        },
        enumerable: true,
        configurable: true
    });
    Tensor.prototype.get = function () {
        var locs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            locs[_i] = arguments[_i];
        }
        util.assert(locs.length === this.rank, 'Number of coordinates in get() must match the rank of the tensor');
        this.throwIfDisposed();
        if (locs.length === 0) {
            locs = [0];
        }
        var index = locs[locs.length - 1];
        for (var i = 0; i < locs.length - 1; ++i) {
            index += this.strides[i] * locs[i];
        }
        return this.dataSync()[index];
    };
    Tensor.prototype.buffer = function () {
        return ops.buffer(this.shape, this.dtype, this.dataSync());
    };
    Tensor.prototype.data = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.throwIfDisposed();
                return [2, environment_1.ENV.engine.read(this.dataId)];
            });
        });
    };
    Tensor.prototype.dataSync = function () {
        this.throwIfDisposed();
        return environment_1.ENV.engine.readSync(this.dataId);
    };
    Tensor.prototype.dispose = function () {
        if (this.isDisposed) {
            return;
        }
        this.isDisposed = true;
        environment_1.ENV.engine.disposeTensor(this);
    };
    Tensor.prototype.throwIfDisposed = function () {
        if (this.isDisposed) {
            throw new Error("Tensor is disposed.");
        }
    };
    Tensor.prototype.toFloat = function () {
        return this.asType('float32');
    };
    Tensor.prototype.toInt = function () {
        return this.asType('int32');
    };
    Tensor.prototype.toBool = function () {
        return this.asType('bool');
    };
    Tensor.prototype.print = function (verbose) {
        if (verbose === void 0) { verbose = false; }
        return ops.print(this, verbose);
    };
    Tensor.prototype.reshape = function (newShape) {
        this.throwIfDisposed();
        return ops.reshape(this, newShape);
    };
    Tensor.prototype.reshapeAs = function (x) {
        this.throwIfDisposed();
        return this.reshape(x.shape);
    };
    Tensor.prototype.expandDims = function (axis) {
        if (axis === void 0) { axis = 0; }
        return ops.expandDims(this, axis);
    };
    Tensor.prototype.squeeze = function (axis) {
        this.throwIfDisposed();
        return ops.squeeze(this, axis);
    };
    Tensor.prototype.clone = function () {
        this.throwIfDisposed();
        return ops.clone(this);
    };
    Tensor.prototype.toString = function (verbose) {
        if (verbose === void 0) { verbose = false; }
        return tensor_util.tensorToString(this, verbose);
    };
    Tensor.prototype.tile = function (reps) {
        this.throwIfDisposed();
        return ops.tile(this, reps);
    };
    Tensor.prototype.gather = function (indices, axis) {
        if (axis === void 0) { axis = 0; }
        this.throwIfDisposed();
        return ops.gather(this, indices, axis);
    };
    Tensor.prototype.matMul = function (b, transposeA, transposeB) {
        if (transposeA === void 0) { transposeA = false; }
        if (transposeB === void 0) { transposeB = false; }
        this.throwIfDisposed();
        return ops.matMul(this, b, transposeA, transposeB);
    };
    Tensor.prototype.norm = function (ord, axis, keepDims) {
        if (ord === void 0) { ord = 'euclidean'; }
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        this.throwIfDisposed();
        return ops.norm(this, ord, axis, keepDims);
    };
    Tensor.prototype.slice = function (begin, size) {
        this.throwIfDisposed();
        return ops.slice(this, begin, size);
    };
    Tensor.prototype.reverse = function (axis) {
        this.throwIfDisposed();
        return ops.reverse(this, axis);
    };
    Tensor.prototype.concat = function (x, axis) {
        if (axis === void 0) { axis = 0; }
        this.throwIfDisposed();
        return ops.concat([this, x], axis);
    };
    Tensor.prototype.stack = function (x, axis) {
        if (axis === void 0) { axis = 0; }
        return ops.stack([this, x], axis);
    };
    Tensor.prototype.pad = function (paddings, constantValue) {
        if (constantValue === void 0) { constantValue = 0; }
        return ops.pad(this, paddings, constantValue);
    };
    Tensor.prototype.batchNormalization = function (mean, variance, varianceEpsilon, scale, offset) {
        if (varianceEpsilon === void 0) { varianceEpsilon = .001; }
        this.throwIfDisposed();
        return ops.batchNormalization(this, mean, variance, varianceEpsilon, scale, offset);
    };
    Tensor.prototype.logSumExp = function (axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        this.throwIfDisposed();
        return ops.logSumExp(this, axis, keepDims);
    };
    Tensor.prototype.sum = function (axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        this.throwIfDisposed();
        return ops.sum(this, axis, keepDims);
    };
    Tensor.prototype.mean = function (axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        this.throwIfDisposed();
        return ops.mean(this, axis, keepDims);
    };
    Tensor.prototype.min = function (axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        this.throwIfDisposed();
        return ops.min(this, axis, keepDims);
    };
    Tensor.prototype.max = function (axis, keepDims) {
        if (axis === void 0) { axis = null; }
        if (keepDims === void 0) { keepDims = false; }
        this.throwIfDisposed();
        return ops.max(this, axis, keepDims);
    };
    Tensor.prototype.argMin = function (axis) {
        if (axis === void 0) { axis = null; }
        this.throwIfDisposed();
        return ops.argMin(this, axis);
    };
    Tensor.prototype.argMax = function (axis) {
        if (axis === void 0) { axis = null; }
        this.throwIfDisposed();
        return ops.argMax(this, axis);
    };
    Tensor.prototype.cast = function (dtype) {
        this.throwIfDisposed();
        return ops.cast(this, dtype);
    };
    Tensor.prototype.add = function (x) {
        this.throwIfDisposed();
        return ops.add(this, x);
    };
    Tensor.prototype.addStrict = function (x) {
        this.throwIfDisposed();
        return ops.addStrict(this, x);
    };
    Tensor.prototype.sub = function (x) {
        this.throwIfDisposed();
        return ops.sub(this, x);
    };
    Tensor.prototype.subStrict = function (x) {
        this.throwIfDisposed();
        return ops.subStrict(this, x);
    };
    Tensor.prototype.pow = function (exp) {
        this.throwIfDisposed();
        return ops.pow(this, exp);
    };
    Tensor.prototype.powStrict = function (exp) {
        this.throwIfDisposed();
        return ops.powStrict(this, exp);
    };
    Tensor.prototype.mul = function (x) {
        this.throwIfDisposed();
        return ops.mul(this, x);
    };
    Tensor.prototype.mulStrict = function (x) {
        this.throwIfDisposed();
        return ops.mulStrict(this, x);
    };
    Tensor.prototype.div = function (x) {
        this.throwIfDisposed();
        return ops.div(this, x);
    };
    Tensor.prototype.divStrict = function (x) {
        this.throwIfDisposed();
        return ops.divStrict(this, x);
    };
    Tensor.prototype.minimum = function (x) {
        this.throwIfDisposed();
        return ops.minimum(this, x);
    };
    Tensor.prototype.minimumStrict = function (x) {
        this.throwIfDisposed();
        return ops.minimumStrict(this, x);
    };
    Tensor.prototype.maximum = function (x) {
        this.throwIfDisposed();
        return ops.maximum(this, x);
    };
    Tensor.prototype.maximumStrict = function (x) {
        this.throwIfDisposed();
        return ops.maximumStrict(this, x);
    };
    Tensor.prototype.mod = function (x) {
        this.throwIfDisposed();
        return ops.mod(this, x);
    };
    Tensor.prototype.modStrict = function (x) {
        this.throwIfDisposed();
        return ops.modStrict(this, x);
    };
    Tensor.prototype.squaredDifference = function (x) {
        this.throwIfDisposed();
        return ops.squaredDifference(this, x);
    };
    Tensor.prototype.squaredDifferenceStrict = function (x) {
        this.throwIfDisposed();
        return ops.squaredDifferenceStrict(this, x);
    };
    Tensor.prototype.transpose = function (perm) {
        this.throwIfDisposed();
        return ops.transpose(this, perm);
    };
    Tensor.prototype.notEqual = function (x) {
        this.throwIfDisposed();
        return ops.notEqual(this, x);
    };
    Tensor.prototype.notEqualStrict = function (x) {
        this.throwIfDisposed();
        return ops.notEqualStrict(this, x);
    };
    Tensor.prototype.less = function (x) {
        this.throwIfDisposed();
        return ops.less(this, x);
    };
    Tensor.prototype.lessStrict = function (x) {
        this.throwIfDisposed();
        return ops.lessStrict(this, x);
    };
    Tensor.prototype.equal = function (x) {
        this.throwIfDisposed();
        return ops.equal(this, x);
    };
    Tensor.prototype.equalStrict = function (x) {
        this.throwIfDisposed();
        return ops.equalStrict(this, x);
    };
    Tensor.prototype.lessEqual = function (x) {
        this.throwIfDisposed();
        return ops.lessEqual(this, x);
    };
    Tensor.prototype.lessEqualStrict = function (x) {
        this.throwIfDisposed();
        return ops.lessEqualStrict(this, x);
    };
    Tensor.prototype.greater = function (x) {
        this.throwIfDisposed();
        return ops.greater(this, x);
    };
    Tensor.prototype.greaterStrict = function (x) {
        this.throwIfDisposed();
        return ops.greaterStrict(this, x);
    };
    Tensor.prototype.greaterEqual = function (x) {
        this.throwIfDisposed();
        return ops.greaterEqual(this, x);
    };
    Tensor.prototype.greaterEqualStrict = function (x) {
        this.throwIfDisposed();
        return ops.greaterEqualStrict(this, x);
    };
    Tensor.prototype.logicalAnd = function (x) {
        this.throwIfDisposed();
        return ops.logicalAnd(this, x);
    };
    Tensor.prototype.logicalOr = function (x) {
        this.throwIfDisposed();
        return ops.logicalOr(this, x);
    };
    Tensor.prototype.logicalNot = function () {
        this.throwIfDisposed();
        return ops.logicalNot(this);
    };
    Tensor.prototype.logicalXor = function (x) {
        this.throwIfDisposed();
        return ops.logicalXor(this, x);
    };
    Tensor.prototype.where = function (condition, x) {
        this.throwIfDisposed();
        return ops.where(condition, this, x);
    };
    Tensor.prototype.neg = function () {
        this.throwIfDisposed();
        return ops.neg(this);
    };
    Tensor.prototype.ceil = function () {
        this.throwIfDisposed();
        return ops.ceil(this);
    };
    Tensor.prototype.floor = function () {
        this.throwIfDisposed();
        return ops.floor(this);
    };
    Tensor.prototype.sign = function () {
        this.throwIfDisposed();
        return ops.sign(this);
    };
    Tensor.prototype.exp = function () {
        this.throwIfDisposed();
        return ops.exp(this);
    };
    Tensor.prototype.expm1 = function () {
        this.throwIfDisposed();
        return ops.expm1(this);
    };
    Tensor.prototype.log = function () {
        this.throwIfDisposed();
        return ops.log(this);
    };
    Tensor.prototype.log1p = function () {
        this.throwIfDisposed();
        return ops.log1p(this);
    };
    Tensor.prototype.sqrt = function () {
        this.throwIfDisposed();
        return ops.sqrt(this);
    };
    Tensor.prototype.rsqrt = function () {
        this.throwIfDisposed();
        return ops.rsqrt(this);
    };
    Tensor.prototype.square = function () {
        this.throwIfDisposed();
        return ops.square(this);
    };
    Tensor.prototype.reciprocal = function () {
        this.throwIfDisposed();
        return ops.reciprocal(this);
    };
    Tensor.prototype.abs = function () {
        this.throwIfDisposed();
        return ops.abs(this);
    };
    Tensor.prototype.clipByValue = function (min, max) {
        this.throwIfDisposed();
        return ops.clipByValue(this, min, max);
    };
    Tensor.prototype.relu = function () {
        this.throwIfDisposed();
        return ops.relu(this);
    };
    Tensor.prototype.elu = function () {
        this.throwIfDisposed();
        return ops.elu(this);
    };
    Tensor.prototype.selu = function () {
        this.throwIfDisposed();
        return ops.selu(this);
    };
    Tensor.prototype.leakyRelu = function (alpha) {
        if (alpha === void 0) { alpha = 0.2; }
        this.throwIfDisposed();
        return ops.leakyRelu(this, alpha);
    };
    Tensor.prototype.prelu = function (alpha) {
        this.throwIfDisposed();
        return ops.prelu(this, alpha);
    };
    Tensor.prototype.sigmoid = function () {
        this.throwIfDisposed();
        return ops.sigmoid(this);
    };
    Tensor.prototype.logSigmoid = function () {
        this.throwIfDisposed();
        return ops.logSigmoid(this);
    };
    Tensor.prototype.softplus = function () {
        this.throwIfDisposed();
        return ops.softplus(this);
    };
    Tensor.prototype.sin = function () {
        this.throwIfDisposed();
        return ops.sin(this);
    };
    Tensor.prototype.cos = function () {
        this.throwIfDisposed();
        return ops.cos(this);
    };
    Tensor.prototype.tan = function () {
        this.throwIfDisposed();
        return ops.tan(this);
    };
    Tensor.prototype.asin = function () {
        this.throwIfDisposed();
        return ops.asin(this);
    };
    Tensor.prototype.acos = function () {
        this.throwIfDisposed();
        return ops.acos(this);
    };
    Tensor.prototype.atan = function () {
        this.throwIfDisposed();
        return ops.atan(this);
    };
    Tensor.prototype.sinh = function () {
        this.throwIfDisposed();
        return ops.sinh(this);
    };
    Tensor.prototype.cosh = function () {
        this.throwIfDisposed();
        return ops.cosh(this);
    };
    Tensor.prototype.tanh = function () {
        this.throwIfDisposed();
        return ops.tanh(this);
    };
    Tensor.prototype.asinh = function () {
        this.throwIfDisposed();
        return ops.asinh(this);
    };
    Tensor.prototype.acosh = function () {
        this.throwIfDisposed();
        return ops.acosh(this);
    };
    Tensor.prototype.atanh = function () {
        this.throwIfDisposed();
        return ops.atanh(this);
    };
    Tensor.prototype.erf = function () {
        this.throwIfDisposed();
        return ops.erf(this);
    };
    Tensor.prototype.round = function () {
        this.throwIfDisposed();
        return ops.round(this);
    };
    Tensor.prototype.step = function (alpha) {
        if (alpha === void 0) { alpha = 0.0; }
        this.throwIfDisposed();
        return ops.step(this, alpha);
    };
    Tensor.prototype.softmax = function (dim) {
        if (dim === void 0) { dim = -1; }
        this.throwIfDisposed();
        return ops.softmax(this, dim);
    };
    Tensor.prototype.resizeBilinear = function (newShape2D, alignCorners) {
        if (alignCorners === void 0) { alignCorners = false; }
        this.throwIfDisposed();
        return ops.image.resizeBilinear(this, newShape2D, alignCorners);
    };
    Tensor.prototype.resizeNearestNeighbor = function (newShape2D, alignCorners) {
        if (alignCorners === void 0) { alignCorners = false; }
        this.throwIfDisposed();
        return ops.image.resizeNearestNeighbor(this, newShape2D, alignCorners);
    };
    Tensor.prototype.conv1d = function (filter, stride, pad, dataFormat, dilation, dimRoundingMode) {
        if (dataFormat === void 0) { dataFormat = 'NWC'; }
        if (dilation === void 0) { dilation = 1; }
        this.throwIfDisposed();
        return ops.conv1d(this, filter, stride, pad, dataFormat, dilation, dimRoundingMode);
    };
    Tensor.prototype.conv2d = function (filter, strides, pad, dataFormat, dilations, dimRoundingMode) {
        if (dataFormat === void 0) { dataFormat = 'NHWC'; }
        if (dilations === void 0) { dilations = [1, 1]; }
        this.throwIfDisposed();
        return ops.conv2d(this, filter, strides, pad, dataFormat, dilations, dimRoundingMode);
    };
    Tensor.prototype.conv2dTranspose = function (filter, outputShape, strides, pad, dimRoundingMode) {
        this.throwIfDisposed();
        return ops.conv2dTranspose(this, filter, outputShape, strides, pad, dimRoundingMode);
    };
    Tensor.prototype.depthwiseConv2D = function (filter, strides, pad, dataFormat, dilations, dimRoundingMode) {
        if (dataFormat === void 0) { dataFormat = 'NHWC'; }
        if (dilations === void 0) { dilations = [1, 1]; }
        this.throwIfDisposed();
        return ops.depthwiseConv2d(this, filter, strides, pad, dataFormat, dilations, dimRoundingMode);
    };
    Tensor.prototype.avgPool = function (filterSize, strides, pad, dimRoundingMode) {
        this.throwIfDisposed();
        return ops.avgPool(this, filterSize, strides, pad, dimRoundingMode);
    };
    Tensor.prototype.maxPool = function (filterSize, strides, pad, dimRoundingMode) {
        this.throwIfDisposed();
        return ops.maxPool(this, filterSize, strides, pad, dimRoundingMode);
    };
    Tensor.prototype.localResponseNormalization = function (radius, bias, alpha, beta) {
        if (radius === void 0) { radius = 5; }
        if (bias === void 0) { bias = 1; }
        if (alpha === void 0) { alpha = 1; }
        if (beta === void 0) { beta = 0.5; }
        return ops.localResponseNormalization(this, radius, bias, alpha, beta);
    };
    Tensor.prototype.variable = function (trainable, name, dtype) {
        if (trainable === void 0) { trainable = true; }
        this.throwIfDisposed();
        return Variable.variable(this, trainable, name, dtype);
    };
    Tensor.prototype.unsortedSegmentSum = function (segmentIds, numSegments, axis) {
        if (axis === void 0) { axis = 0; }
        this.throwIfDisposed();
        return ops.unsortedSegmentSum(this, segmentIds, numSegments, axis);
    };
    Tensor.nextId = 0;
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "flatten", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "asScalar", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "as1D", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "as2D", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "as3D", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "as4D", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "asType", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "buffer", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "data", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "dataSync", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "dispose", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "toFloat", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "toInt", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "toBool", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "print", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "reshape", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "reshapeAs", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "expandDims", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "squeeze", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "clone", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor.prototype, "toString", null);
    Tensor = Tensor_1 = __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Tensor);
    return Tensor;
    var Tensor_1;
}());
exports.Tensor = Tensor;
var Variable = (function (_super) {
    __extends(Variable, _super);
    function Variable(initialValue, trainable, name) {
        if (trainable === void 0) { trainable = true; }
        var _this = _super.call(this, initialValue.shape, initialValue.dtype, null, initialValue.dataId) || this;
        _this.trainable = trainable;
        _this.name = name;
        if (_this.name == null) {
            _this.name = Variable_1.nextVarId.toString();
            Variable_1.nextVarId++;
        }
        environment_1.ENV.engine.registerVariable(_this);
        return _this;
    }
    Variable_1 = Variable;
    Variable.variable = function (initialValue, trainable, name, dtype) {
        if (trainable === void 0) { trainable = true; }
        if (dtype != null && dtype !== initialValue.dtype) {
            initialValue = initialValue.asType(dtype);
        }
        return new Variable_1(initialValue, trainable, name);
    };
    Variable.prototype.assign = function (newValue) {
        if (newValue.dtype !== this.dtype) {
            throw new Error("dtype of the new value (" + newValue.dtype + ") and " +
                ("previous value (" + this.dtype + ") must match"));
        }
        if (!util.arraysEqual(newValue.shape, this.shape)) {
            throw new Error("shape of the new value (" + newValue.shape + ") and " +
                ("previous value (" + this.shape + ") must match"));
        }
        environment_1.ENV.engine.disposeTensor(this);
        this.dataId = newValue.dataId;
        environment_1.ENV.engine.registerTensor(this);
    };
    Variable.nextVarId = 0;
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Variable.prototype, "assign", null);
    __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Creation' })
    ], Variable, "variable", null);
    Variable = Variable_1 = __decorate([
        doc_1.doc({ heading: 'Tensors', subheading: 'Classes' })
    ], Variable);
    return Variable;
    var Variable_1;
}(Tensor));
exports.Variable = Variable;
var variable = Variable.variable;
exports.variable = variable;
function computeStrides(shape) {
    var rank = shape.length;
    if (rank < 2) {
        return [];
    }
    var strides = new Array(rank - 1);
    strides[rank - 2] = shape[rank - 1];
    for (var i = rank - 3; i >= 0; --i) {
        strides[i] = strides[i + 1] * shape[i + 1];
    }
    return strides;
}

},{"./doc":35,"./environment":24,"./ops/ops":47,"./tensor_util":51,"./util":26}],52:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("./doc");
var environment_1 = require("./environment");
var globals_1 = require("./globals");
var tensor_1 = require("./tensor");
var util = require("./util");
var Gradients = (function () {
    function Gradients() {
    }
    Gradients.gradScope = function (nameOrScopeFn, scopeFn) {
        return globals_1.tidy(nameOrScopeFn, scopeFn, true);
    };
    Gradients.grad = function (f) {
        util.assert(util.isFunction(f), 'The f passed in grad(f) must be a function');
        return function (x, dy) {
            util.assert(x instanceof tensor_1.Tensor, 'The x passed in grad(f)(x) must be a tensor');
            util.assert(dy == null || dy instanceof tensor_1.Tensor, 'The dy passed in grad(f)(x, dy) must be a tensor');
            return globals_1.tidy(function () {
                var _a = environment_1.ENV.engine.gradients(function () { return f(x); }, [x], dy), value = _a.value, grads = _a.grads;
                if (dy != null) {
                    util.assertShapesMatch(value.shape, dy.shape, 'The shape of dy passed in grad(f)(x, dy) must match the shape ' +
                        'returned by f(x)');
                }
                checkGrads(grads);
                return grads[0];
            });
        };
    };
    Gradients.grads = function (f) {
        util.assert(util.isFunction(f), 'The f passed in grads(f) must be a function');
        return function (args, dy) {
            util.assert(Array.isArray(args) && args.every(function (arg) { return arg instanceof tensor_1.Tensor; }), 'The args passed in grads(f)(args) must be an array of tensors');
            util.assert(dy == null || dy instanceof tensor_1.Tensor, 'The dy passed in grads(f)(args, dy) must be a tensor');
            return globals_1.tidy(function () {
                var _a = environment_1.ENV.engine.gradients(function () { return f.apply(void 0, args); }, args, dy), value = _a.value, grads = _a.grads;
                if (dy != null) {
                    util.assertShapesMatch(value.shape, dy.shape, 'The shape of dy passed in grads(f)([x1,...], dy) must ' +
                        'match the shape returned by f([x1,...])');
                }
                checkGrads(grads);
                return grads;
            });
        };
    };
    Gradients.valueAndGrad = function (f) {
        util.assert(util.isFunction(f), 'The f passed in valueAndGrad(f) must be a function');
        return function (x, dy) {
            util.assert(x instanceof tensor_1.Tensor, 'The x passed in valueAndGrad(f)(x) must be a tensor');
            util.assert(dy == null || dy instanceof tensor_1.Tensor, 'The dy passed in valueAndGrad(f)(x, dy) must be a tensor');
            var _a = environment_1.ENV.engine.gradients(function () { return f(x); }, [x], dy), grads = _a.grads, value = _a.value;
            checkGrads(grads);
            return { grad: grads[0], value: value };
        };
    };
    Gradients.valueAndGrads = function (f) {
        util.assert(util.isFunction(f), 'The f passed in valueAndGrads(f) must be a function');
        return function (args, dy) {
            util.assert(Array.isArray(args) && args.every(function (arg) { return arg instanceof tensor_1.Tensor; }), 'The args passed in valueAndGrads(f)(args) must be array of tensors');
            util.assert(dy == null || dy instanceof tensor_1.Tensor, 'The dy passed in valueAndGrads(f)(args, dy) must be a tensor');
            var res = environment_1.ENV.engine.gradients(function () { return f.apply(void 0, args); }, args, dy);
            if (dy != null) {
                util.assertShapesMatch(res.value.shape, dy.shape, 'The shape of dy passed in valueAndGrads(f)([x1,...], dy) must ' +
                    'match the shape returned by f([x1,...])');
            }
            checkGrads(res.grads);
            return res;
        };
    };
    Gradients.variableGrads = function (f, varList) {
        util.assert(util.isFunction(f), 'The f passed in variableGrads(f) must be a function');
        util.assert(varList == null ||
            Array.isArray(varList) && varList.every(function (v) { return v instanceof tensor_1.Variable; }), 'The varList passed in variableGrads(f, varList) must be an array ' +
            'of variables');
        if (varList == null) {
            varList = [];
            for (var varName in environment_1.ENV.engine.registeredVariables) {
                varList.push(environment_1.ENV.engine.registeredVariables[varName]);
            }
        }
        var originalVarCount = varList.length;
        varList = varList.filter(function (variable) { return variable.trainable; });
        util.assert(varList.length > 0, "variableGrads() expects at least one of the input variables to be " +
            ("trainable, but none of the " + originalVarCount + " variables is ") +
            "trainable.");
        var allowNoGradients = true;
        var _a = environment_1.ENV.engine.gradients(f, varList, null, allowNoGradients), value = _a.value, grads = _a.grads;
        util.assert(grads.some(function (g) { return g != null; }), 'Cannot find a connection between any variable and the result of the ' +
            'loss function y=f(x). Please make sure the operations that use ' +
            'variables are inside the function f passed to minimize().');
        util.assert(value.rank === 0, "The f passed in variableGrads(f) must return a scalar, but it " +
            ("returned a rank-" + value.rank + " tensor"));
        var namedGrads = {};
        varList.forEach(function (v, i) {
            if (grads[i] != null) {
                namedGrads[v.name] = grads[i];
            }
        });
        return { value: value, grads: namedGrads };
    };
    Gradients.customGrad = function (f) {
        return environment_1.ENV.engine.customGrad(f);
    };
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Gradients' })
    ], Gradients, "grad", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Gradients' })
    ], Gradients, "grads", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Gradients' })
    ], Gradients, "valueAndGrad", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Gradients' })
    ], Gradients, "valueAndGrads", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Gradients' })
    ], Gradients, "variableGrads", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Gradients' })
    ], Gradients, "customGrad", null);
    return Gradients;
}());
exports.Gradients = Gradients;
function checkGrads(grads) {
    var numNullGradients = grads.filter(function (g) { return g == null; }).length;
    if (numNullGradients > 0) {
        throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that\n    the f you passed encloses all operations that lead from x to y.");
    }
}

},{"./doc":35,"./environment":24,"./globals":34,"./tensor":32,"./util":26}],34:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gradients_1 = require("./gradients");
var tracking_1 = require("./tracking");
exports.tidy = tracking_1.Tracking.tidy;
exports.keep = tracking_1.Tracking.keep;
exports.dispose = tracking_1.Tracking.dispose;
exports.time = tracking_1.Tracking.time;
exports.grad = gradients_1.Gradients.grad;
exports.valueAndGrad = gradients_1.Gradients.valueAndGrad;
exports.grads = gradients_1.Gradients.grads;
exports.valueAndGrads = gradients_1.Gradients.valueAndGrads;
exports.variableGrads = gradients_1.Gradients.variableGrads;
exports.customGrad = gradients_1.Gradients.customGrad;

},{"./gradients":52,"./tracking":53}],125:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
var Profiler = (function () {
    function Profiler(backendTimer, logger) {
        this.backendTimer = backendTimer;
        this.logger = logger;
        if (logger == null) {
            this.logger = new Logger();
        }
    }
    Profiler.prototype.profileKernel = function (name, f) {
        var _this = this;
        var result;
        var holdResultWrapperFn = function () {
            result = f();
        };
        var timer = this.backendTimer.time(holdResultWrapperFn);
        var vals = result.dataSync();
        util.checkForNaN(vals, result.dtype, name);
        timer.then(function (timing) {
            _this.logger.logKernelProfile(name, result, vals, timing.kernelMs);
        });
        return result;
    };
    return Profiler;
}());
exports.Profiler = Profiler;
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.logKernelProfile = function (name, result, vals, timeMs) {
        var time = util.rightPad(timeMs + "ms", 9);
        var paddedName = util.rightPad(name, 25);
        var rank = result.rank;
        var size = result.size;
        var shape = util.rightPad(result.shape.toString(), 14);
        console.log("%c" + paddedName + "\t%c" + time + "\t%c" + rank + "D " + shape + "\t%c" + size, 'font-weight:bold', 'color:red', 'color:blue', 'color: orange');
    };
    return Logger;
}());
exports.Logger = Logger;

},{"./util":26}],126:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util = require("./util");
function getFilteredNodesXToY(tape, xs, y) {
    var tensorsFromX = {};
    var nodesFromX = {};
    for (var i = 0; i < xs.length; i++) {
        tensorsFromX[xs[i].id] = true;
    }
    for (var i = 0; i < tape.length; i++) {
        var node = tape[i];
        var nodeInputs = node.inputs;
        for (var inputName in nodeInputs) {
            var input = nodeInputs[inputName];
            var anyInputFromX = false;
            for (var j = 0; j < xs.length; j++) {
                if (tensorsFromX[input.id]) {
                    tensorsFromX[node.output.id] = true;
                    anyInputFromX = true;
                    nodesFromX[node.id] = true;
                    break;
                }
            }
            if (anyInputFromX) {
                break;
            }
        }
    }
    var tensorsLeadToY = {};
    tensorsLeadToY[y.id] = true;
    var nodesToY = {};
    for (var i = tape.length - 1; i >= 0; i--) {
        var node = tape[i];
        var nodeInputs = node.inputs;
        var outputs = [];
        outputs.push(node.output);
        for (var j = 0; j < outputs.length; j++) {
            if (tensorsLeadToY[outputs[j].id]) {
                for (var inputName in nodeInputs) {
                    tensorsLeadToY[nodeInputs[inputName].id] = true;
                    nodesToY[node.id] = true;
                }
                break;
            }
        }
    }
    var filteredTape = [];
    for (var i = 0; i < tape.length; i++) {
        var node = tape[i];
        if (nodesFromX[node.id] && nodesToY[node.id]) {
            var prunedInputs = {};
            for (var inputName in node.inputs) {
                var nodeInput = node.inputs[inputName];
                if (tensorsFromX[nodeInput.id]) {
                    prunedInputs[inputName] = nodeInput;
                }
            }
            var prunedNode = Object.assign({}, node);
            prunedNode.inputs = prunedInputs;
            prunedNode.output = node.output;
            filteredTape.push(prunedNode);
        }
    }
    return filteredTape;
}
exports.getFilteredNodesXToY = getFilteredNodesXToY;
function backpropagateGradients(tensorAccumulatedGradientMap, filteredTape) {
    for (var i = filteredTape.length - 1; i >= 0; i--) {
        var node = filteredTape[i];
        var dy = tensorAccumulatedGradientMap[node.output.id];
        if (node.gradient == null) {
            throw new Error("Cannot compute gradient: gradient function not found " +
                ("for " + node.name + "."));
        }
        var inputGradients = node.gradient(dy);
        for (var inputName in node.inputs) {
            if (!(inputName in inputGradients)) {
                throw new Error("Cannot backprop through input " + inputName + ". " +
                    ("Available gradients found: " + Object.keys(inputGradients) + "."));
            }
            var dx = inputGradients[inputName]();
            var x = node.inputs[inputName];
            if (!util.arraysEqual(dx.shape, x.shape)) {
                throw new Error("Error in gradient for op " + node.name + ". The gradient of input " +
                    ("'" + inputName + "' has shape '" + dx.shape + "', which does not match ") +
                    ("the shape of the input '" + x.shape + "'"));
            }
            if (tensorAccumulatedGradientMap[x.id] == null) {
                tensorAccumulatedGradientMap[x.id] = dx;
            }
            else {
                var curGradient = tensorAccumulatedGradientMap[x.id];
                tensorAccumulatedGradientMap[x.id] = curGradient.add(dx);
                curGradient.dispose();
            }
        }
    }
}
exports.backpropagateGradients = backpropagateGradients;

},{"./util":26}],50:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("./environment");
var globals_1 = require("./globals");
var ops = require("./ops/ops");
var profiler_1 = require("./profiler");
var tape_1 = require("./tape");
var tensor_1 = require("./tensor");
var util = require("./util");
var Engine = (function () {
    function Engine(backend, safeMode) {
        this.backend = backend;
        this.safeMode = safeMode;
        this.registeredVariables = {};
        this.refCounter = new WeakMap();
        this.nextTapeNodeId = 0;
        this.numBytes = 0;
        this.numTensors = 0;
        this.numDataBuffers = 0;
        this.gradientScopeCount = 0;
        this.customGradientDepth = 0;
        this.activeScope = { keep: [], track: [] };
        this.scopeStack = [this.activeScope];
        this.profiler = new profiler_1.Profiler(backend);
    }
    Engine.prototype.runKernel = function (forwardFunc, inputs, backwardsFunc) {
        var _this = this;
        var result;
        var saved = [];
        var saveFunc = function (x) {
            saved.push(x);
            return x;
        };
        var scopeName = this.activeScope.name;
        this.customGradientDepth++;
        if (!environment_1.ENV.get('DEBUG')) {
            result = forwardFunc(this.backend, saveFunc);
        }
        else {
            result = this.profiler.profileKernel(scopeName, function () { return forwardFunc(_this.backend, saveFunc); });
        }
        this.customGradientDepth--;
        if (this.shouldRecord()) {
            var tapeNode = {
                id: this.nextTapeNodeId++,
                name: scopeName,
                inputs: inputs,
                output: result,
            };
            if (backwardsFunc != null) {
                tapeNode.gradient = function (dy) { return backwardsFunc(dy, saved); };
            }
            this.activeTape.push(tapeNode);
        }
        return result;
    };
    Engine.prototype.registerTensor = function (a) {
        var refCount = this.refCounter.has(a.dataId) ? this.refCounter.get(a.dataId) : 0;
        this.numTensors++;
        if (refCount === 0) {
            this.numDataBuffers++;
            this.numBytes +=
                util.sizeFromShape(a.shape) * util.bytesPerElement(a.dtype);
            this.backend.register(a.dataId, a.shape, a.dtype);
        }
        this.refCounter.set(a.dataId, refCount + 1);
        if (!(a instanceof tensor_1.Variable)) {
            this.track(a);
        }
    };
    Engine.prototype.registerVariable = function (v) {
        if (this.registeredVariables[v.name] != null) {
            throw new Error("Variable with name " + v.name + " was already registered");
        }
        this.registeredVariables[v.name] = v;
    };
    Engine.prototype.disposeTensor = function (a) {
        if (!this.refCounter.has(a.dataId)) {
            return;
        }
        this.numTensors--;
        var refCount = this.refCounter.get(a.dataId);
        if (refCount <= 1) {
            this.refCounter.delete(a.dataId);
            this.backend.disposeData(a.dataId);
            this.numDataBuffers--;
            this.numBytes -=
                util.sizeFromShape(a.shape) * util.bytesPerElement(a.dtype);
        }
        else {
            this.refCounter.set(a.dataId, refCount - 1);
        }
    };
    Engine.prototype.disposeVariables = function () {
        for (var varName in this.registeredVariables) {
            var v = this.registeredVariables[varName];
            this.disposeTensor(v);
            delete this.registeredVariables[varName];
        }
    };
    Engine.prototype.memory = function () {
        var info = this.backend.memory();
        info.numTensors = this.numTensors;
        info.numDataBuffers = this.numDataBuffers;
        info.numBytes = this.numBytes;
        return info;
    };
    Engine.prototype.shouldRecord = function () {
        return this.activeTape != null && this.customGradientDepth === 0;
    };
    Engine.prototype.addTapeNode = function (inputs, result, gradientsFunc) {
        var inputsMap = {};
        inputs.forEach(function (input, idx) {
            inputsMap[idx] = input;
        });
        var gradient = function (dy) {
            var res = gradientsFunc(dy);
            var resMap = {};
            res.forEach(function (r, idx) {
                resMap[idx] = function () { return r; };
            });
            return resMap;
        };
        var tapeNode = {
            id: this.nextTapeNodeId++,
            name: this.activeScope.name,
            inputs: inputsMap,
            output: result,
            gradient: gradient
        };
        this.activeTape.push(tapeNode);
    };
    Engine.prototype.keep = function (result) {
        if (this.scopeStack.length === 1 && environment_1.ENV.engine.safeMode) {
            throw new Error('Safe mode is ON. Enclose all tensor operations inside tf.tidy(): ' +
                'tf.tidy(() => {...}) to avoid memory leaks.');
        }
        this.activeScope.keep.push(result);
        return result;
    };
    Engine.prototype.startScope = function (name, gradientsMode) {
        if (gradientsMode === void 0) { gradientsMode = false; }
        if (gradientsMode && this.gradientScopeCount === 0) {
            this.activeTape = [];
        }
        if (gradientsMode) {
            this.gradientScopeCount++;
        }
        var scopeInfo = { keep: [], track: [] };
        if (name) {
            scopeInfo.name = name;
        }
        this.scopeStack.push(scopeInfo);
        this.activeScope = scopeInfo;
    };
    Engine.prototype.endScope = function (result, gradientsMode) {
        var _this = this;
        if (gradientsMode === void 0) { gradientsMode = false; }
        if (gradientsMode) {
            this.gradientScopeCount--;
            if (this.gradientScopeCount === 0) {
                this.activeTape = null;
            }
        }
        var tensorsToKeep = this.activeScope.keep;
        var tensorsToTrackInParent = util.extractTensorsFromContainer(result);
        tensorsToKeep = tensorsToKeep.concat(tensorsToTrackInParent);
        for (var i = 0; i < this.activeScope.track.length; i++) {
            var tensor = this.activeScope.track[i];
            if (util.isTensorInList(tensor, tensorsToKeep)) {
                continue;
            }
            if (this.activeTape != null) {
                tensorsToTrackInParent.push(tensor);
            }
            else {
                tensor.dispose();
            }
        }
        this.scopeStack.pop();
        this.activeScope = this.scopeStack.length === 0 ?
            { keep: [], track: [] } :
            this.scopeStack[this.scopeStack.length - 1];
        tensorsToTrackInParent.forEach(function (tensor) {
            if (!util.isTensorInList(tensor, _this.activeScope.keep)) {
                _this.track(tensor);
            }
        });
    };
    Engine.prototype.dispose = function () { };
    Engine.prototype.gradients = function (f, xs, dy, allowNoGradients) {
        var _this = this;
        if (allowNoGradients === void 0) { allowNoGradients = false; }
        util.assert(xs.length > 0, 'gradients() received an empty list of xs.');
        return globals_1.tidy('gradients', function () {
            var y = f();
            util.assert(y instanceof tensor_1.Tensor, 'The result y returned by f() must be a tensor.');
            var filteredTape = tape_1.getFilteredNodesXToY(_this.activeTape, xs, y);
            if (!allowNoGradients && filteredTape.length === 0 && xs.length > 0) {
                throw new Error('Cannot compute gradient of y=f(x) with respect to x. Make sure ' +
                    'that the f you passed encloses all operations that lead from x ' +
                    'to y.');
            }
            var accumulatedGradientMap = {};
            accumulatedGradientMap[y.id] = (dy == null) ? ops.ones(y.shape) : dy;
            tape_1.backpropagateGradients(accumulatedGradientMap, filteredTape);
            var grads = xs.map(function (x) { return accumulatedGradientMap[x.id]; });
            return { value: y, grads: grads };
        }, true);
    };
    Engine.prototype.customGrad = function (f) {
        var _this = this;
        util.assert(util.isFunction(f), 'The f passed in customGrad(f) must be a function.');
        return function () {
            var inputs = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                inputs[_i] = arguments[_i];
            }
            util.assert(inputs.every(function (t) { return t instanceof tensor_1.Tensor; }), 'The args passed in customGrad(f)(x1, x2,...) must all be tensors');
            _this.customGradientDepth++;
            var gradientsFunc;
            var gradientsMode = true;
            var result = globals_1.tidy(f.name, function () {
                var _a = f.apply(void 0, inputs), value = _a.value, gradFunc = _a.gradFunc;
                util.assert(value instanceof tensor_1.Tensor, 'The function f passed in customGrad(f) must return an object ' +
                    'where `obj.value` is a tensor');
                util.assert(util.isFunction(gradFunc), 'The function f passed in customGrad(f) must return an object ' +
                    'where `obj.gradFunc` is a function.');
                gradientsFunc = gradFunc;
                return value;
            }, gradientsMode);
            _this.customGradientDepth--;
            if (_this.shouldRecord()) {
                var gradFunc = function (dy) {
                    var res = gradientsFunc(dy);
                    var grads = Array.isArray(res) ? res : [res];
                    util.assert(grads.length === inputs.length, 'The function f passed in customGrad(f) must return an object ' +
                        'where `obj.gradFunc` is a function that returns the same ' +
                        'number of tensors as inputs passed to f(...).');
                    util.assert(grads.every(function (t) { return t instanceof tensor_1.Tensor; }), 'The function f passed in customGrad(f) must return an object ' +
                        'where `obj.gradFunc` is a function that returns a list of ' +
                        'only tensors.');
                    return grads;
                };
                _this.addTapeNode(inputs, result, gradFunc);
            }
            return result;
        };
    };
    Engine.prototype.write = function (dataId, values) {
        this.backend.write(dataId, values);
    };
    Engine.prototype.readSync = function (dataId) {
        return this.backend.readSync(dataId);
    };
    Engine.prototype.read = function (dataId) {
        return this.backend.read(dataId);
    };
    Engine.prototype.fromPixels = function (pixels, numChannels) {
        return this.backend.fromPixels(pixels, numChannels);
    };
    Engine.prototype.time = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var start, timingInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        start = performance.now();
                        return [4, this.backend.time(query)];
                    case 1:
                        timingInfo = _a.sent();
                        timingInfo.wallMs = performance.now() - start;
                        return [2, timingInfo];
                }
            });
        });
    };
    Engine.prototype.track = function (result) {
        if (this.scopeStack.length === 1 && this.safeMode) {
            throw new Error('Safe mode is ON. Enclose all tensor operations inside tf.tidy(): ' +
                'tf.tidy(() => {op();...}); to avoid memory leaks.');
        }
        this.activeScope.track.push(result);
        return result;
    };
    return Engine;
}());
exports.Engine = Engine;

},{"./environment":24,"./globals":34,"./ops/ops":47,"./profiler":125,"./tape":126,"./tensor":32,"./util":26}],24:[function(require,module,exports) {
var global = (1,eval)("this");
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var device_util = require("./device_util");
var doc_1 = require("./doc");
var engine_1 = require("./engine");
var util = require("./util");
var Type;
(function (Type) {
    Type[Type["NUMBER"] = 0] = "NUMBER";
    Type[Type["BOOLEAN"] = 1] = "BOOLEAN";
    Type[Type["STRING"] = 2] = "STRING";
})(Type = exports.Type || (exports.Type = {}));
exports.URL_PROPERTIES = [
    { name: 'DEBUG', type: Type.BOOLEAN }, { name: 'IS_BROWSER', type: Type.BOOLEAN },
    { name: 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION', type: Type.NUMBER },
    { name: 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE', type: Type.BOOLEAN },
    { name: 'WEBGL_VERSION', type: Type.NUMBER },
    { name: 'WEBGL_FLOAT_TEXTURE_ENABLED', type: Type.BOOLEAN }, {
        name: 'WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED',
        type: Type.BOOLEAN
    },
    { name: 'BACKEND', type: Type.STRING }
];
function hasExtension(gl, extensionName) {
    var ext = gl.getExtension(extensionName);
    return ext != null;
}
function getWebGLRenderingContext(webGLVersion) {
    if (webGLVersion === 0) {
        throw new Error('Cannot get WebGL rendering context, WebGL is disabled.');
    }
    var tempCanvas = document.createElement('canvas');
    if (webGLVersion === 1) {
        return (tempCanvas.getContext('webgl') ||
            tempCanvas.getContext('experimental-webgl'));
    }
    return tempCanvas.getContext('webgl2');
}
function loseContext(gl) {
    if (gl != null) {
        var loseContextExtension = gl.getExtension('WEBGL_lose_context');
        if (loseContextExtension == null) {
            throw new Error('Extension WEBGL_lose_context not supported on this browser.');
        }
        loseContextExtension.loseContext();
    }
}
function isWebGLVersionEnabled(webGLVersion) {
    var gl = getWebGLRenderingContext(webGLVersion);
    if (gl != null) {
        loseContext(gl);
        return true;
    }
    return false;
}
function getWebGLDisjointQueryTimerVersion(webGLVersion) {
    if (webGLVersion === 0) {
        return 0;
    }
    var queryTimerVersion;
    var gl = getWebGLRenderingContext(webGLVersion);
    if (hasExtension(gl, 'EXT_disjoint_timer_query_webgl2') &&
        webGLVersion === 2) {
        queryTimerVersion = 2;
    }
    else if (hasExtension(gl, 'EXT_disjoint_timer_query')) {
        queryTimerVersion = 1;
    }
    else {
        queryTimerVersion = 0;
    }
    if (gl != null) {
        loseContext(gl);
    }
    return queryTimerVersion;
}
function isFloatTextureReadPixelsEnabled(webGLVersion) {
    if (webGLVersion === 0) {
        return false;
    }
    var gl = getWebGLRenderingContext(webGLVersion);
    if (webGLVersion === 1) {
        if (!hasExtension(gl, 'OES_texture_float')) {
            return false;
        }
    }
    else {
        if (!hasExtension(gl, 'EXT_color_buffer_float')) {
            return false;
        }
    }
    var frameBuffer = gl.createFramebuffer();
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    var internalFormat = webGLVersion === 2 ? gl.RGBA32F : gl.RGBA;
    gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 1, 1, 0, gl.RGBA, gl.FLOAT, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
    var frameBufferComplete = (gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE);
    gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.FLOAT, new Float32Array(4));
    var readPixelsNoError = gl.getError() === gl.NO_ERROR;
    loseContext(gl);
    return frameBufferComplete && readPixelsNoError;
}
function isWebGLGetBufferSubDataAsyncExtensionEnabled(webGLVersion) {
    if (webGLVersion > 0) {
        return false;
    }
    if (webGLVersion !== 2) {
        return false;
    }
    var gl = getWebGLRenderingContext(webGLVersion);
    var isEnabled = hasExtension(gl, 'WEBGL_get_buffer_sub_data_async');
    loseContext(gl);
    return isEnabled;
}
var Environment = (function () {
    function Environment(features) {
        this.features = {};
        this.registry = {};
        if (features != null) {
            this.features = features;
        }
        if (this.get('DEBUG')) {
            console.warn('Debugging mode is ON. The output of every math call will ' +
                'be downloaded to CPU and checked for NaNs. ' +
                'This significantly impacts performance.');
        }
    }
    Environment.setBackend = function (backendType, safeMode) {
        if (safeMode === void 0) { safeMode = false; }
        if (!(backendType in exports.ENV.registry)) {
            throw new Error("Backend type '" + backendType + "' not found in registry");
        }
        exports.ENV.initBackend(backendType, safeMode);
    };
    Environment.getBackend = function () {
        exports.ENV.initDefaultBackend();
        return exports.ENV.currentBackend;
    };
    Environment.disposeVariables = function () {
        exports.ENV.engine.disposeVariables();
    };
    Environment.memory = function () {
        return exports.ENV.engine.memory();
    };
    Environment.prototype.get = function (feature) {
        if (feature in this.features) {
            return this.features[feature];
        }
        this.features[feature] = this.evaluateFeature(feature);
        return this.features[feature];
    };
    Environment.prototype.set = function (feature, value) {
        this.features[feature] = value;
    };
    Environment.prototype.getBestBackendType = function () {
        var _this = this;
        if (Object.keys(this.registry).length === 0) {
            throw new Error('No backend found in registry.');
        }
        var sortedBackends = Object.keys(this.registry)
            .map(function (name) {
            return { name: name, entry: _this.registry[name] };
        })
            .sort(function (a, b) {
            return b.entry.priority - a.entry.priority;
        });
        return sortedBackends[0].name;
    };
    Environment.prototype.evaluateFeature = function (feature) {
        if (feature === 'DEBUG') {
            return false;
        }
        else if (feature === 'IS_BROWSER') {
            return typeof window !== 'undefined';
        }
        else if (feature === 'BACKEND') {
            return this.getBestBackendType();
        }
        else if (feature === 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') {
            var webGLVersion = this.get('WEBGL_VERSION');
            if (webGLVersion === 0) {
                return 0;
            }
            return getWebGLDisjointQueryTimerVersion(webGLVersion);
        }
        else if (feature === 'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE') {
            return this.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0 &&
                !device_util.isMobile();
        }
        else if (feature === 'WEBGL_VERSION') {
            if (isWebGLVersionEnabled(2)) {
                return 2;
            }
            else if (isWebGLVersionEnabled(1)) {
                return 1;
            }
            return 0;
        }
        else if (feature === 'WEBGL_FLOAT_TEXTURE_ENABLED') {
            return isFloatTextureReadPixelsEnabled(this.get('WEBGL_VERSION'));
        }
        else if (feature === 'WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED') {
            return isWebGLGetBufferSubDataAsyncExtensionEnabled(this.get('WEBGL_VERSION'));
        }
        throw new Error("Unknown feature " + feature + ".");
    };
    Environment.prototype.setFeatures = function (features) {
        this.features = features;
    };
    Environment.prototype.reset = function () {
        this.features = getFeaturesFromURL();
        if (this.globalEngine != null) {
            this.globalEngine.dispose();
            this.globalEngine = null;
        }
    };
    Environment.prototype.initBackend = function (backendType, safeMode) {
        if (safeMode === void 0) { safeMode = false; }
        this.currentBackend = backendType;
        if (this.globalEngine != null) {
            this.globalEngine.dispose();
        }
        var backend = exports.ENV.findBackend(backendType);
        this.globalEngine = new engine_1.Engine(backend, safeMode);
    };
    Environment.prototype.findBackend = function (name) {
        if (!(name in this.registry)) {
            return null;
        }
        return this.registry[name].backend;
    };
    Environment.prototype.registerBackend = function (name, factory, priority) {
        if (priority === void 0) { priority = 1; }
        if (name in this.registry) {
            console.warn(name + " backend was already registered");
        }
        try {
            var backend = factory();
            this.registry[name] = { backend: backend, priority: priority };
            return true;
        }
        catch (err) {
            console.warn(err.message);
            return false;
        }
    };
    Environment.prototype.removeBackend = function (name) {
        if (!(name in this.registry)) {
            throw new Error(name + " backend not found in registry");
        }
        this.registry[name].backend.dispose();
        delete this.registry[name];
    };
    Object.defineProperty(Environment.prototype, "engine", {
        get: function () {
            this.initDefaultBackend();
            return this.globalEngine;
        },
        enumerable: true,
        configurable: true
    });
    Environment.prototype.initDefaultBackend = function () {
        if (this.globalEngine == null) {
            this.initBackend(exports.ENV.get('BACKEND'), false);
        }
    };
    __decorate([
        doc_1.doc({ heading: 'Environment' })
    ], Environment, "setBackend", null);
    __decorate([
        doc_1.doc({ heading: 'Environment' })
    ], Environment, "getBackend", null);
    __decorate([
        doc_1.doc({ heading: 'Environment' })
    ], Environment, "disposeVariables", null);
    __decorate([
        doc_1.doc({ heading: 'Performance', subheading: 'Memory' })
    ], Environment, "memory", null);
    return Environment;
}());
exports.Environment = Environment;
var TENSORFLOWJS_FLAGS_PREFIX = 'tfjsflags';
function getFeaturesFromURL() {
    var features = {};
    if (typeof window === 'undefined' || typeof window.location === 'undefined') {
        return features;
    }
    var urlParams = util.getQueryParams(window.location.search);
    if (TENSORFLOWJS_FLAGS_PREFIX in urlParams) {
        var urlFlags_1 = {};
        var keyValues = urlParams[TENSORFLOWJS_FLAGS_PREFIX].split(',');
        keyValues.forEach(function (keyValue) {
            var _a = keyValue.split(':'), key = _a[0], value = _a[1];
            urlFlags_1[key] = value;
        });
        exports.URL_PROPERTIES.forEach(function (urlProperty) {
            if (urlProperty.name in urlFlags_1) {
                console.log("Setting feature override from URL " + urlProperty.name + ": " +
                    ("" + urlFlags_1[urlProperty.name]));
                if (urlProperty.type === Type.NUMBER) {
                    features[urlProperty.name] = +urlFlags_1[urlProperty.name];
                }
                else if (urlProperty.type === Type.BOOLEAN) {
                    features[urlProperty.name] = urlFlags_1[urlProperty.name] === 'true';
                }
                else if (urlProperty.type === Type.STRING) {
                    features[urlProperty.name] = urlFlags_1[urlProperty.name];
                }
                else {
                    console.warn("Unknown URL param: " + urlProperty.name + ".");
                }
            }
        });
    }
    return features;
}
function getGlobalNamespace() {
    var ns;
    if (typeof (window) !== 'undefined') {
        ns = window;
    }
    else if (typeof (global) !== 'undefined') {
        ns = global;
    }
    else {
        throw new Error('Could not find a global object');
    }
    return ns;
}
function getOrMakeEnvironment() {
    var ns = getGlobalNamespace();
    ns.ENV = ns.ENV || new Environment(getFeaturesFromURL());
    return ns.ENV;
}
exports.ENV = getOrMakeEnvironment();

},{"./device_util":49,"./doc":35,"./engine":50,"./util":26}],59:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PARALLELIZE_THRESHOLD = 30;
function computeOptimalWindowSize(inSize) {
    if (inSize <= exports.PARALLELIZE_THRESHOLD) {
        return inSize;
    }
    return nearestDivisor(inSize, Math.floor(Math.sqrt(inSize)));
}
exports.computeOptimalWindowSize = computeOptimalWindowSize;
function nearestDivisor(size, start) {
    for (var i = start; i < size; ++i) {
        if (size % i === 0) {
            return i;
        }
    }
    return size;
}

},{}],60:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
var array_ops_1 = require("../ops/array_ops");
function castTensor(x, dtype, backend) {
    if (!__1.util.hasEncodingLoss(x.dtype, dtype)) {
        return __1.Tensor.make(x.shape, { dataId: x.dataId }, dtype);
    }
    if (dtype === 'int32') {
        return backend.int(x);
    }
    else if (dtype === 'bool') {
        return backend.notEqual(x, array_ops_1.ArrayOps.scalar(0, x.dtype));
    }
    else {
        throw new Error("Error in Cast: unknown dtype argument (" + dtype + ")");
    }
}
exports.castTensor = castTensor;
function reshapeTensor(x, shape) {
    return __1.Tensor.make(shape, { dataId: x.dataId }, x.dtype);
}
exports.reshapeTensor = reshapeTensor;

},{"..":23,"../ops/array_ops":73}],94:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArgMinMaxProgram = (function () {
    function ArgMinMaxProgram(reduceInfo, op, firstPass) {
        this.variableNames = ['A'];
        var windowSize = reduceInfo.windowSize;
        var batchSize = reduceInfo.batchSize;
        var inSize = reduceInfo.inSize;
        var outSize = Math.ceil(inSize / windowSize);
        if (!firstPass) {
            this.variableNames.push('bestIndicesA');
        }
        this.outputShape = [batchSize, outSize];
        var compOp = (op === 'max') ? '>' : '<';
        var indexSnippet = firstPass ?
            'inOffset + i;' :
            'round(getBestIndicesA(batch, inOffset + i));';
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + windowSize + ";\n\n        int bestIndex = 0;\n        float bestValue = getA(batch, inOffset);\n\n        for (int i = 0; i < " + windowSize + "; i++) {\n          int inIdx = " + indexSnippet + ";\n          float candidate = getA(batch, inIdx);\n          if (candidate " + compOp + " bestValue) {\n            bestValue = candidate;\n            bestIndex = inIdx;\n          }\n        }\n        setOutput(float(bestIndex));\n      }\n    ";
    }
    return ArgMinMaxProgram;
}());
exports.ArgMinMaxProgram = ArgMinMaxProgram;

},{}],96:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AvgPool2DBackpropProgram = (function () {
    function AvgPool2DBackpropProgram(convInfo) {
        this.variableNames = ['dy'];
        this.outputShape = convInfo.inShape;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        var avgMultiplier = 1 / (filterHeight * filterWidth);
        this.userCode = "\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n      const float avgMultiplier = float(" + avgMultiplier + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + convInfo.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + convInfo.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n\n            dotProd += dyValue * avgMultiplier;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
    }
    return AvgPool2DBackpropProgram;
}());
exports.AvgPool2DBackpropProgram = AvgPool2DBackpropProgram;

},{}],95:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var broadcast_util = require("../../ops/broadcast_util");
var BatchNormProgram = (function () {
    function BatchNormProgram(xShape, meanShape, varianceShape, offsetShape, scaleShape, varianceEpsilon) {
        this.outputShape = [];
        this.supportsBroadcasting = true;
        this.variableNames = ['x', 'mean', 'variance'];
        broadcast_util.assertAndGetBroadcastShape(xShape, meanShape);
        broadcast_util.assertAndGetBroadcastShape(xShape, varianceShape);
        var offsetSnippet = '0.0';
        if (offsetShape != null) {
            broadcast_util.assertAndGetBroadcastShape(xShape, offsetShape);
            this.variableNames.push('offset');
            offsetSnippet = 'getOffsetAtOutCoords()';
        }
        var scaleSnippet = '1.0';
        if (scaleShape != null) {
            broadcast_util.assertAndGetBroadcastShape(xShape, scaleShape);
            this.variableNames.push('scale');
            scaleSnippet = 'getScaleAtOutCoords()';
        }
        this.outputShape = xShape;
        this.userCode = "\n      void main() {\n        float x = getXAtOutCoords();\n        float mean = getMeanAtOutCoords();\n        float variance = getVarianceAtOutCoords();\n        float offset = " + offsetSnippet + ";\n        float scale = " + scaleSnippet + ";\n        float inv = scale * inversesqrt(variance + float(" + varianceEpsilon + "));\n        setOutput((x - mean) * inv + offset);\n      }\n    ";
    }
    return BatchNormProgram;
}());
exports.BatchNormProgram = BatchNormProgram;

},{"../../ops/broadcast_util":62}],97:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var broadcast_util = require("../../ops/broadcast_util");
var CHECK_NAN_SNIPPET = "\n  if (isNaN(a)) return a;\n  if (isNaN(b)) return b;\n";
exports.ADD = 'return a + b;';
exports.SUB = 'return a - b;';
exports.MUL = 'return a * b;';
exports.DIV = 'return a / b;';
exports.INT_DIV = "\n  float resultSign = sign(a) * sign(b);\n  int ia = round(a);\n  int ib = round(b);\n  int result = ia / ib;\n  int amodb = ia - ib * result;\n\n  if (resultSign < 0.0 && amodb != 0) {\n    result -= 1;\n  }\n  return float(result);\n";
exports.POW = "\n  return (round(mod(b, 2.0)) == 0 || round(mod(b, 2.0)) == 2) ?\n      pow(abs(a), b) : sign(a) * pow(abs(a), b);\n";
exports.SQUARED_DIFFERENCE = 'return (a - b) * (a - b);';
exports.EQUAL = "return float(a == b);";
exports.NOT_EQUAL = "return float(a != b);";
exports.LESS = "return float(a < b);";
exports.LESS_EQUAL = "return float(a <= b);";
exports.GREATER = "return float(a > b);";
exports.GREATER_EQUAL = "return float(a >= b);";
exports.LOGICAL_AND = "return float(a >= 1.0 && b >= 1.0);";
exports.LOGICAL_OR = "return float(a >= 1.0 || b >= 1.0);";
exports.MAX = CHECK_NAN_SNIPPET + "\n  return max(a, b);\n";
exports.MIN = CHECK_NAN_SNIPPET + "\n  return min(a, b);\n";
exports.MOD = "return mod(a, b);";
exports.ATAN2 = CHECK_NAN_SNIPPET + "\n  return atan(a, b);\n";
exports.ELU_DER = "return (b >= 1.0) ? a : a * (b + 1.0);";
var BinaryOpProgram = (function () {
    function BinaryOpProgram(op, aShape, bShape) {
        this.variableNames = ['A', 'B'];
        this.supportsBroadcasting = true;
        this.outputShape =
            broadcast_util.assertAndGetBroadcastShape(aShape, bShape);
        this.userCode = "\n      float binaryOperation(float a, float b) {\n        " + op + "\n      }\n\n      void main() {\n        float a = getAAtOutCoords();\n        float b = getBAtOutCoords();\n        setOutput(binaryOperation(a, b));\n      }\n    ";
    }
    return BinaryOpProgram;
}());
exports.BinaryOpProgram = BinaryOpProgram;

},{"../../ops/broadcast_util":62}],98:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ClipProgram = (function () {
    function ClipProgram(aShape, min, max) {
        this.variableNames = ['A'];
        this.outputShape = aShape;
        var minFixed = min.toFixed(20);
        var maxFixed = max.toFixed(20);
        this.userCode = "\n      void main() {\n        float value = getAAtOutCoords();\n        if (isNaN(value)) {\n          setOutput(value);\n          return;\n        }\n\n        setOutput(clamp(value, " + minFixed + ", " + maxFixed + "));\n      }\n    ";
    }
    return ClipProgram;
}());
exports.ClipProgram = ClipProgram;

},{}],99:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concat_util = require("../../ops/concat_util");
var ConcatProgram = (function () {
    function ConcatProgram(aShape, bShape) {
        this.variableNames = ['A', 'B'];
        this.outputShape = [];
        this.outputShape =
            concat_util.computeOutShape(aShape, bShape, 1);
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int yR = coords.x;\n        int yC = coords.y;\n\n        float value = 0.0;\n        if (yC < " + aShape[1] + ") {\n          value = getA(yR, yC);\n        } else {\n          yC -= " + aShape[1] + ";\n          value = getB(yR, yC);\n        }\n\n        setOutput(value);\n      }\n    ";
    }
    return ConcatProgram;
}());
exports.ConcatProgram = ConcatProgram;

},{"../../ops/concat_util":61}],101:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conv2DDerFilterProgram = (function () {
    function Conv2DDerFilterProgram(convInfo) {
        this.variableNames = ['x', 'dy'];
        this.outputShape = convInfo.filterShape;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int wR = coords.x;\n        int wC = coords.y;\n        int d1 = coords.z;\n        int d2 = coords.w;\n\n        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n\n        for (int b = 0; b < " + convInfo.batchSize + "; b++) {\n          for (int yR = 0; yR < " + convInfo.outHeight + "; yR++) {\n            int xR = wR + yR * " + strideHeight + " - " + padTop + ";\n\n            if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n              continue;\n            }\n\n            for (int yC = 0; yC < " + convInfo.outWidth + "; yC++) {\n              int xC = wC + yC * " + strideWidth + " - " + padLeft + ";\n\n              if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n                continue;\n              }\n\n              float dyValue = getDy(b, yR, yC, d2);\n              float xValue = getX(b, xR, xC, d1);\n              dotProd += (xValue * dyValue);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
    }
    return Conv2DDerFilterProgram;
}());
exports.Conv2DDerFilterProgram = Conv2DDerFilterProgram;
var Conv2DDerInputProgram = (function () {
    function Conv2DDerInputProgram(convInfo) {
        this.variableNames = ['dy', 'W'];
        this.outputShape = convInfo.inShape;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        this.userCode = "\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d1 = coords[3];\n\n        ivec2 dyCorner = coords.yz - pads;\n        int dyRCorner = dyCorner.x;\n        int dyCCorner = dyCorner.y;\n\n        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + convInfo.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          int wRPerm = " + filterHeight + " - 1 - wR;\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + convInfo.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            int wCPerm = " + filterWidth + " - 1 - wC;\n\n            for (int d2 = 0; d2 < " + convInfo.outChannels + "; d2++) {\n              float xValue = getDy(batch, idyR, idyC, d2);\n              float wValue = getW(wRPerm, wCPerm, d1, d2);\n              dotProd += xValue * wValue;\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
    }
    return Conv2DDerInputProgram;
}());
exports.Conv2DDerInputProgram = Conv2DDerInputProgram;

},{}],103:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conv2DProgram = (function () {
    function Conv2DProgram(convInfo) {
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var inputDepthNearestVec4 = Math.floor(convInfo.inChannels / 4) * 4;
        var inputDepthVec4Remainder = convInfo.inChannels % 4;
        this.userCode = "\n      const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d2 = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          int xR = xRCorner + wR * " + dilationHeight + ";\n\n          if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            int xC = xCCorner + wC * " + dilationWidth + ";\n\n            if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n              continue;\n            }\n\n            for (int d1 = 0; d1 < " + inputDepthNearestVec4 + "; d1 += 4) {\n              vec4 xValues = vec4(\n                getX(batch, xR, xC, d1),\n                getX(batch, xR, xC, d1 + 1),\n                getX(batch, xR, xC, d1 + 2),\n                getX(batch, xR, xC, d1 + 3)\n              );\n              vec4 wValues = vec4(\n                getW(wR, wC, d1, d2),\n                getW(wR, wC, d1 + 1, d2),\n                getW(wR, wC, d1 + 2, d2),\n                getW(wR, wC, d1 + 3, d2)\n              );\n\n              dotProd += dot(xValues, wValues);\n            }\n\n            if (" + (inputDepthVec4Remainder === 1) + ") {\n              dotProd +=\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + ") *\n                getW(wR, wC, " + inputDepthNearestVec4 + ", d2);\n            } else if (" + (inputDepthVec4Remainder === 2) + ") {\n              vec2 xValues = vec2(\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + "),\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + " + 1)\n              );\n              vec2 wValues = vec2(\n                getW(wR, wC, " + inputDepthNearestVec4 + ", d2),\n                getW(wR, wC, " + inputDepthNearestVec4 + " + 1, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            } else if (" + (inputDepthVec4Remainder === 3) + ") {\n              vec3 xValues = vec3(\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + "),\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + " + 1),\n                getX(batch, xR, xC, " + inputDepthNearestVec4 + " + 2)\n              );\n              vec3 wValues = vec3(\n                getW(wR, wC, " + inputDepthNearestVec4 + ", d2),\n                getW(wR, wC, " + inputDepthNearestVec4 + " + 1, d2),\n                getW(wR, wC, " + inputDepthNearestVec4 + " + 2, d2)\n              );\n              dotProd += dot(xValues, wValues);\n            }\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
    }
    return Conv2DProgram;
}());
exports.Conv2DProgram = Conv2DProgram;

},{}],100:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DepthwiseConv2DProgram = (function () {
    function DepthwiseConv2DProgram(convInfo) {
        this.variableNames = ['x', 'W'];
        this.outputShape = convInfo.outShape;
        var xNumRows = convInfo.inHeight;
        var xNumCols = convInfo.inWidth;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var channelMul = convInfo.outChannels / convInfo.inChannels;
        this.userCode = "\n      const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords.x;\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int d2 = coords.w;\n        int d1 = d2 / " + channelMul + ";\n        int q = d2 - d1 * " + channelMul + ";\n\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        // TODO(dsmilkov): Flatten the two for loops and vec4 the operations.\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          int xR = xRCorner + wR * " + dilationHeight + ";\n\n          if (xR < 0 || xR >= " + xNumRows + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            int xC = xCCorner + wC * " + dilationWidth + ";\n\n            if (xC < 0 || xC >= " + xNumCols + ") {\n              continue;\n            }\n\n            float xVal = getX(batch, xR, xC, d1);\n            float wVal = getW(wR, wC, d1, q);\n            dotProd += xVal * wVal;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
    }
    return DepthwiseConv2DProgram;
}());
exports.DepthwiseConv2DProgram = DepthwiseConv2DProgram;

},{}],102:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FromPixelsProgram = (function () {
    function FromPixelsProgram(outputShape) {
        this.variableNames = ['A'];
        var height = outputShape[0], width = outputShape[1];
        this.outputShape = outputShape;
        this.userCode = "\n      void main() {\n        ivec3 coords = getOutputCoords();\n        int texR = coords[0];\n        int texC = coords[1];\n        int depth = coords[2];\n        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + width + ".0, " + height + ".0);\n\n        vec4 values = texture2D(A, uv);\n        float value;\n        if (depth == 0) {\n          value = values.r;\n        } else if (depth == 1) {\n          value = values.g;\n        } else if (depth == 2) {\n          value = values.b;\n        } else if (depth == 3) {\n          value = values.a;\n        }\n\n        setOutput(floor(value * 255.0 + 0.5));\n      }\n    ";
    }
    return FromPixelsProgram;
}());
exports.FromPixelsProgram = FromPixelsProgram;

},{}],119:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextureType;
(function (TextureType) {
    TextureType[TextureType["FLOAT"] = 0] = "FLOAT";
    TextureType[TextureType["UNSIGNED_BYTE"] = 1] = "UNSIGNED_BYTE";
})(TextureType = exports.TextureType || (exports.TextureType = {}));
function getUnpackedMatrixTextureShapeWidthHeight(rows, columns) {
    return [columns, rows];
}
exports.getUnpackedMatrixTextureShapeWidthHeight = getUnpackedMatrixTextureShapeWidthHeight;
function getUnpackedArraySizeFromMatrixSize(matrixSize, channelsPerTexture) {
    return matrixSize * channelsPerTexture;
}
exports.getUnpackedArraySizeFromMatrixSize = getUnpackedArraySizeFromMatrixSize;
function getColorMatrixTextureShapeWidthHeight(rows, columns) {
    return [columns * 4, rows];
}
exports.getColorMatrixTextureShapeWidthHeight = getColorMatrixTextureShapeWidthHeight;
function getMatrixSizeFromUnpackedArraySize(unpackedSize, channelsPerTexture) {
    if (unpackedSize % channelsPerTexture !== 0) {
        throw new Error("unpackedSize (" + unpackedSize + ") must be a multiple of " +
            ("" + channelsPerTexture));
    }
    return unpackedSize / channelsPerTexture;
}
exports.getMatrixSizeFromUnpackedArraySize = getMatrixSizeFromUnpackedArraySize;
function encodeMatrixToUnpackedArray(matrix, unpackedArray, channelsPerTexture) {
    var requiredSize = getUnpackedArraySizeFromMatrixSize(matrix.length, channelsPerTexture);
    if (unpackedArray.length < requiredSize) {
        throw new Error("unpackedArray length (" + unpackedArray.length + ") must be >= " +
            ("" + requiredSize));
    }
    var dst = 0;
    for (var src = 0; src < matrix.length; ++src) {
        unpackedArray[dst] = matrix[src];
        dst += channelsPerTexture;
    }
}
exports.encodeMatrixToUnpackedArray = encodeMatrixToUnpackedArray;
exports.FLOAT_MAX = 20000;
exports.FLOAT_MIN = -exports.FLOAT_MAX;
var FLOAT_RANGE = (exports.FLOAT_MAX - exports.FLOAT_MIN) / 255;
var FLOAT_DELTAS = [1, 1 / 255, 1 / (255 * 255), 1 / (255 * 255 * 255)];
var FLOAT_POWERS = [1, 255, 255 * 255];
exports.BYTE_NAN_VALUE = 0;
function encodeFloatArray(floatArray) {
    var uintArray = new Uint8Array(floatArray.length * 4);
    var _loop_1 = function (i) {
        var value = floatArray[i / 4];
        if (isNaN(value)) {
            uintArray[i] = exports.BYTE_NAN_VALUE;
            uintArray[i + 1] = exports.BYTE_NAN_VALUE;
            uintArray[i + 2] = exports.BYTE_NAN_VALUE;
            uintArray[i + 3] = exports.BYTE_NAN_VALUE;
            return "continue";
        }
        var normalizedValue = (value - exports.FLOAT_MIN) / FLOAT_RANGE;
        var enc = FLOAT_POWERS.map(function (pow) { return pow * normalizedValue; });
        var buckets = enc.map(function (value) { return Math.floor((value % 1) * 255); });
        uintArray[i] = Math.floor(normalizedValue);
        uintArray[i + 1] = buckets[0];
        uintArray[i + 2] = buckets[1];
        uintArray[i + 3] = buckets[2];
    };
    for (var i = 0; i < uintArray.length; i += 4) {
        _loop_1(i);
    }
    return uintArray;
}
exports.encodeFloatArray = encodeFloatArray;
function decodeToFloatArray(uintArray) {
    var floatArray = new Float32Array(uintArray.length / 4);
    var _loop_2 = function (i) {
        if (uintArray[i] === exports.BYTE_NAN_VALUE &&
            uintArray[i + 1] === exports.BYTE_NAN_VALUE &&
            uintArray[i + 2] === exports.BYTE_NAN_VALUE &&
            uintArray[i + 3] === exports.BYTE_NAN_VALUE) {
            floatArray[i / 4] = NaN;
            return "continue";
        }
        var dot = 0;
        FLOAT_DELTAS.forEach(function (delta, j) {
            dot += delta * uintArray[i + j];
        });
        var value = dot * FLOAT_RANGE + exports.FLOAT_MIN;
        floatArray[i / 4] = value;
    };
    for (var i = 0; i < uintArray.length; i += 4) {
        _loop_2(i);
    }
    return floatArray;
}
exports.decodeToFloatArray = decodeToFloatArray;
function decodeMatrixFromUnpackedArray(unpackedArray, matrix, channelsPerTexture) {
    var requiredSize = getMatrixSizeFromUnpackedArraySize(unpackedArray.length, channelsPerTexture);
    if (matrix.length < requiredSize) {
        throw new Error("matrix length (" + matrix.length + ") must be >= " + requiredSize);
    }
    var dst = 0;
    for (var src = 0; src < unpackedArray.length; src += channelsPerTexture) {
        matrix[dst++] = unpackedArray[src];
    }
}
exports.decodeMatrixFromUnpackedArray = decodeMatrixFromUnpackedArray;
function decodeMatrixFromUnpackedColorRGBAArray(unpackedArray, matrix, channels) {
    var requiredSize = unpackedArray.length * channels / 4;
    if (matrix.length < requiredSize) {
        throw new Error("matrix length (" + matrix.length + ") must be >= " + requiredSize);
    }
    var dst = 0;
    for (var src = 0; src < unpackedArray.length; src += 4) {
        for (var c = 0; c < channels; c++) {
            matrix[dst++] = unpackedArray[src + c];
        }
    }
}
exports.decodeMatrixFromUnpackedColorRGBAArray = decodeMatrixFromUnpackedColorRGBAArray;
function getPackedMatrixTextureShapeWidthHeight(rows, columns) {
    return [Math.ceil(columns / 2), Math.ceil(rows / 2)];
}
exports.getPackedMatrixTextureShapeWidthHeight = getPackedMatrixTextureShapeWidthHeight;
function getPackedRGBAArraySizeFromMatrixShape(rows, columns) {
    var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
    return w * h * 4;
}
exports.getPackedRGBAArraySizeFromMatrixShape = getPackedRGBAArraySizeFromMatrixShape;
function encodeMatrixToPackedRGBA(matrix, rows, columns, packedRGBA) {
    var requiredSize = getPackedRGBAArraySizeFromMatrixShape(rows, columns);
    if (packedRGBA.length < requiredSize) {
        throw new Error("packedRGBA length (" + packedRGBA.length + ") must be >= " + requiredSize);
    }
    var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), textureWidth = _a[0], textureHeight = _a[1];
    var oddWidth = (columns % 2) === 1;
    var oddHeight = (rows % 2) === 1;
    var widthInFullBlocks = Math.floor(columns / 2);
    var heightInFullBlocks = Math.floor(rows / 2);
    {
        var dstStride = (oddWidth ? 4 : 0);
        var oneRow = columns;
        var dst = 0;
        for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
            var matrixSrcRow = (blockY * 2 * columns);
            for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
                var matrixSrcCol = blockX * 2;
                var src = matrixSrcRow + matrixSrcCol;
                packedRGBA[dst] = matrix[src];
                packedRGBA[dst + 1] = matrix[src + 1];
                packedRGBA[dst + 2] = matrix[src + oneRow];
                packedRGBA[dst + 3] = matrix[src + oneRow + 1];
                dst += 4;
            }
            dst += dstStride;
        }
    }
    if (oddWidth) {
        var src = columns - 1;
        var dst = (textureWidth - 1) * 4;
        var srcStride = 2 * columns;
        var dstStride = textureWidth * 4;
        for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
            packedRGBA[dst] = matrix[src];
            packedRGBA[dst + 2] = matrix[src + columns];
            src += srcStride;
            dst += dstStride;
        }
    }
    if (oddHeight) {
        var src = (rows - 1) * columns;
        var dst = (textureHeight - 1) * textureWidth * 4;
        for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
            packedRGBA[dst++] = matrix[src++];
            packedRGBA[dst++] = matrix[src++];
            dst += 2;
        }
    }
    if (oddWidth && oddHeight) {
        packedRGBA[packedRGBA.length - 4] = matrix[matrix.length - 1];
    }
    return packedRGBA;
}
exports.encodeMatrixToPackedRGBA = encodeMatrixToPackedRGBA;
function decodeMatrixFromPackedRGBA(packedRGBA, rows, columns, matrix) {
    var requiredSize = rows * columns;
    if (requiredSize < matrix.length) {
        throw new Error("matrix length (" + matrix.length + ") must be >= " + requiredSize);
    }
    var oddWidth = (columns % 2) === 1;
    var oddHeight = (rows % 2) === 1;
    var widthInFullBlocks = Math.floor(columns / 2);
    var heightInFullBlocks = Math.floor(rows / 2);
    var _a = getPackedMatrixTextureShapeWidthHeight(rows, columns), textureWidth = _a[0], textureHeight = _a[1];
    {
        var srcStride = oddWidth ? 4 : 0;
        var dstStride = columns + (oddWidth ? 1 : 0);
        var src = 0;
        var dstRow1 = 0;
        var dstRow2 = columns;
        for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
            for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
                matrix[dstRow1++] = packedRGBA[src++];
                matrix[dstRow1++] = packedRGBA[src++];
                matrix[dstRow2++] = packedRGBA[src++];
                matrix[dstRow2++] = packedRGBA[src++];
            }
            src += srcStride;
            dstRow1 += dstStride;
            dstRow2 += dstStride;
        }
    }
    if (oddWidth) {
        var src = (textureWidth - 1) * 4;
        var dst = columns - 1;
        var srcStride = textureWidth * 4;
        var dstStride = 2 * columns;
        for (var blockY = 0; blockY < heightInFullBlocks; ++blockY) {
            matrix[dst] = packedRGBA[src];
            matrix[dst + columns] = packedRGBA[src + 2];
            src += srcStride;
            dst += dstStride;
        }
    }
    if (oddHeight) {
        var src = (textureHeight - 1) * textureWidth * 4;
        var dst = (rows - 1) * columns;
        for (var blockX = 0; blockX < widthInFullBlocks; ++blockX) {
            matrix[dst++] = packedRGBA[src++];
            matrix[dst++] = packedRGBA[src++];
            src += 2;
        }
    }
    if (oddWidth && oddHeight) {
        matrix[matrix.length - 1] = packedRGBA[packedRGBA.length - 4];
    }
    return matrix;
}
exports.decodeMatrixFromPackedRGBA = decodeMatrixFromPackedRGBA;

},{}],131:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
var util = require("../../util");
var broadcast_util = require("../../ops/broadcast_util");
var tex_util = require("./tex_util");
function makeShader(inputsInfo, outputShape, userCode, broadcast) {
    var sampleSnippet = getSampleSnippet();
    var setOutputSnippet = getSetOutputSnippet();
    var inputPrefixSnippet = inputsInfo.map(function (x) { return "uniform sampler2D " + x.name + ";"; }).join('\n');
    var inputSamplingSnippet = inputsInfo.map(function (x) { return getInputSamplingSnippet(x, outputShape, broadcast); })
        .join('\n');
    var outTexShape = outputShape.texShape;
    var outputSamplingSnippet = getOutputSamplingSnippet(outputShape.logicalShape, outTexShape);
    var source = [
        SHADER_PREFIX, sampleSnippet, setOutputSnippet, inputPrefixSnippet,
        outputSamplingSnippet, inputSamplingSnippet, userCode
    ].join('\n');
    return source;
}
exports.makeShader = makeShader;
function getSampleSnippet() {
    return environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED') ?
        FLOAT_TEXTURE_SAMPLE_SNIPPET :
        UNSIGNED_BYTE_TEXTURE_SAMPLE_SNIPPET;
}
function getSetOutputSnippet() {
    return environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED') ?
        FLOAT_TEXTURE_SETOUTPUT_SNIPPET :
        UNSIGNED_BYTE_TEXTURE_SETOUTPUT_SNIPPET;
}
function getSamplerFromInInfo(inInfo) {
    var shape = inInfo.shapeInfo.logicalShape;
    switch (shape.length) {
        case 0:
            return getSamplerScalar(inInfo);
        case 1:
            return getSampler1D(inInfo);
        case 2:
            return getSampler2D(inInfo);
        case 3:
            return getSampler3D(inInfo);
        case 4:
            return getSampler4D(inInfo);
        default:
            throw new Error(shape.length + "-D input sampling" +
                " is not yet supported");
    }
}
function getInputSamplingSnippet(inInfo, outShapeInfo, broadcast) {
    var res = getSamplerFlat(inInfo);
    res += getSamplerFromInInfo(inInfo);
    if (broadcast ||
        util.arraysEqual(inInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape)) {
        res += getSamplerAtOutputCoords(inInfo, outShapeInfo, broadcast);
    }
    return res;
}
function getOutputSamplingSnippet(outShape, outTexShape) {
    switch (outShape.length) {
        case 0:
            return getOutputScalarCoords();
        case 1:
            return getOutput1DCoords(outShape, outTexShape);
        case 2:
            return getOutput2DCoords(outShape, outTexShape);
        case 3:
            return getOutput3DCoords(outShape, outTexShape);
        case 4:
            return getOutput4DCoords(outShape, outTexShape);
        default:
            throw new Error(outShape.length + "-D output sampling is not yet supported");
    }
}
var SAMPLE_1D_SNIPPET = "\nvec2 UVfrom1D(int texNumR, int texNumC, int index) {\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var SAMPLE_2D_SNIPPET = "\nvec2 UVfrom2D(int texNumR, int texNumC, int numC, int row, int col) {\n  int index = row * numC + col;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var SAMPLE_3D_SNIPPET = "\nvec2 UVfrom3D(int texNumR, int texNumC, int stride0,\n    int stride1, int row, int col, int depth) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var SAMPLE_4D_SNIPPET = "\nvec2 UVfrom4D(int texNumR, int texNumC, int stride0,\n    int stride1, int stride2, int row, int col, int depth,\n    int depth2) {\n  // Explicitly use integer operations as dot() only works on floats.\n  int index = row * stride0 + col * stride1 + depth * stride2 + depth2;\n  int texR = index / texNumC;\n  int texC = index - texR * texNumC;\n  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);\n}\n";
var UNSIGNED_BYTE_TEXTURE_SAMPLE_SNIPPET = "\n  uniform float NaN;\n\n  const vec4 floatDeltas = vec4(\n      1.0,\n      1.0 / 255.0,\n      1.0 / (255.0 * 255.0),\n      1.0 / (255.0 * 255.0 * 255.0)\n  );\n  const float minValue = " + tex_util.FLOAT_MIN + ".0;\n  const float maxValue = " + tex_util.FLOAT_MAX + ".0;\n  const float range = (maxValue - minValue) / 255.0;\n  const vec2 dotRange = vec2(1.0, range);\n\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    vec4 sampleValue = texture2D(textureSampler, uv);\n    if (all(equal(sampleValue, vec4(" + tex_util.BYTE_NAN_VALUE + ")))) {\n      return NaN;\n    }\n\n    vec4 encValue = floor(sampleValue * 255.0 + 0.5);\n    float decodedValue = dot(encValue, floatDeltas);\n    return dot(vec2(minValue, decodedValue), dotRange);\n  }\n";
var UNSIGNED_BYTE_TEXTURE_SETOUTPUT_SNIPPET = "\n  const vec4 floatPowers = vec4(\n    1.0,\n    255.0,\n    255.0 * 255.0,\n    255.0 * 255.0 * 255.0\n  );\n  const vec2 recipRange = vec2(1.0/range);\n  const vec2 recipRange255 = vec2(1.0/(maxValue - minValue));\n\n  void setOutput(float decodedValue) {\n    if (isNaN(decodedValue)) {\n      gl_FragColor = vec4(" + tex_util.BYTE_NAN_VALUE + ");\n      return;\n    }\n\n    float a = dot(vec2(decodedValue, -minValue), recipRange);\n    float b = fract(a) * 255.0;\n    float c = fract(b) * 255.0;\n    float d = fract(c) * 255.0;\n    gl_FragColor = floor(vec4(a, b, c, d)) / 255.0;\n\n    // TODO(dsmilkov): Version above gets better accuracy but probably slower\n    // than the version below. Benchmark to determine if the accuracy is worth\n    // the cost.\n\n    // float normValue = dot(vec2(decodedValue, -minValue), recipRange255);\n    // vec4 f = normValue * floatPowers;\n    // gl_FragColor = floor(fract(f) * 255.0) / 255.0;\n  }\n";
var FLOAT_TEXTURE_SAMPLE_SNIPPET = "\n  float sampleTexture(sampler2D textureSampler, vec2 uv) {\n    return texture2D(textureSampler, uv).r;\n  }\n";
var FLOAT_TEXTURE_SETOUTPUT_SNIPPET = "\n  void setOutput(float val) {\n    gl_FragColor = vec4(val, 0, 0, 0);\n  }\n";
var SHADER_PREFIX = "\n  precision highp float;\n  precision highp int;\n  varying vec2 resultUV;\n  const vec2 halfCR = vec2(0.5, 0.5);\n\n  bool isNaN(float val) {\n    float v1 = val * val;\n    float v2 = val * val;\n    return v1 == v2 ? false : true;\n  }\n\n  bool hasNaN(vec4 values) {\n    vec4 v1 = values * values;\n    vec4 v2 = values * values;\n    return any(notEqual(v1, v2));\n  }\n\n  float getNaN(vec4 values) {\n    return dot(vec4(1), values);\n  }\n\n  int round(float value) {\n    return int(floor(value + 0.5));\n  }\n\n  int imod(int x, int y) {\n    return x - y * (x / y);\n  }\n\n  //Based on the work of Dave Hoskins\n  //https://www.shadertoy.com/view/4djSRW\n  #define HASHSCALE1 443.8975\n  float random(float seed){\n    vec2 p = resultUV * seed;\n    vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);\n    p3 += dot(p3, p3.yzx + 19.19);\n    return fract((p3.x + p3.y) * p3.z);\n  }\n\n  " + SAMPLE_1D_SNIPPET + "\n  " + SAMPLE_2D_SNIPPET + "\n  " + SAMPLE_3D_SNIPPET + "\n  " + SAMPLE_4D_SNIPPET + "\n";
function getOutputScalarCoords() {
    return "\n    int getOutputCoords() {\n      return 0;\n    }\n  ";
}
function getOutput1DCoords(shape, texShape) {
    if (texShape[0] === 1) {
        return "\n      int getOutputCoords() {\n        return int(resultUV.x * " + texShape[1] + ".0);\n      }\n    ";
    }
    if (texShape[1] === 1) {
        return "\n      int getOutputCoords() {\n        return int(resultUV.y * " + texShape[0] + ".0);\n      }\n    ";
    }
    return "\n    int getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + texShape[0] + ", " + texShape[1] + "));\n      return resTexRC.x * " + texShape[1] + " + resTexRC.y;\n    }\n  ";
}
function getOutput3DCoords(shape, texShape) {
    var stride0 = shape[1] * shape[2];
    var stride1 = shape[2];
    return "\n    ivec3 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + texShape[0] + ", " + texShape[1] + "));\n      int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n      int r = index / " + stride0 + ";\n      index -= r * " + stride0 + ";\n      int c = index / " + stride1 + ";\n      int d = index - c * " + stride1 + ";\n      return ivec3(r, c, d);\n    }\n  ";
}
function getOutput4DCoords(shape, texShape) {
    var stride2 = shape[3];
    var stride1 = shape[2] * stride2;
    var stride0 = shape[1] * stride1;
    return "\n    ivec4 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n        vec2(" + texShape[0] + ", " + texShape[1] + "));\n      int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n\n      int r = index / " + stride0 + ";\n      index -= r * " + stride0 + ";\n\n      int c = index / " + stride1 + ";\n      index -= c * " + stride1 + ";\n\n      int d = index / " + stride2 + ";\n      int d2 = index - d * " + stride2 + ";\n\n      return ivec4(r, c, d, d2);\n    }\n  ";
}
function getOutput2DCoords(shape, texShape) {
    if (util.arraysEqual(shape, texShape)) {
        return "\n      ivec2 getOutputCoords() {\n        return ivec2(resultUV.yx * vec2(" + texShape[0] + ", " + texShape[1] + "));\n      }\n    ";
    }
    if (shape[1] === 1) {
        return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + texShape[0] + ", " + texShape[1] + "));\n        int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n        return ivec2(index, 0);\n      }\n    ";
    }
    if (shape[0] === 1) {
        return "\n      ivec2 getOutputCoords() {\n        ivec2 resTexRC = ivec2(resultUV.yx *\n                               vec2(" + texShape[0] + ", " + texShape[1] + "));\n        int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n        return ivec2(0, index);\n      }\n    ";
    }
    return "\n    ivec2 getOutputCoords() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + texShape[0] + ", " + texShape[1] + "));\n      int index = resTexRC.x * " + texShape[1] + " + resTexRC.y;\n      int r = index / " + shape[1] + ";\n      int c = index - r * " + shape[1] + ";\n      return ivec2(r, c);\n    }\n  ";
}
function getSamplerScalar(inputInfo) {
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    return "\n    float " + funcName + "() {\n      return sampleTexture(" + texName + ", halfCR);\n    }\n  ";
}
function getSampler1D(inputInfo) {
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    return "\n    float " + funcName + "(int index) {\n      return " + funcName + "Flat(index);\n    }\n  ";
}
function getSampler2D(inputInfo) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texShape = inputInfo.shapeInfo.texShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    if (util.arraysEqual(shape, texShape)) {
        return "\n    float " + funcName + "(int row, int col) {\n      vec2 uv = (vec2(col, row) + halfCR) / vec2(" + texNumC + ".0, " + texNumR + ".0);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
    }
    var _a = util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    var squeezedShape = newShape;
    if (squeezedShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        var params = ['row', 'col'];
        return "\n      " + getSamplerFromInInfo(newInputInfo) + "\n      float " + funcName + "(int row, int col) {\n        return " + funcName + "(" + getSqueezedParams(params, keptDims) + ");\n      }\n    ";
    }
    if (texNumC === 1) {
        return "\n    float " + funcName + "(int row, int col) {\n      int index = row * " + shape[1] + " + col;\n      vec2 uv = vec2(0.5, (float(index) + 0.5) / " + texNumR + ".0);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
    }
    if (texNumR === 1) {
        return "\n    float " + funcName + "(int row, int col) {\n      int index = row * " + shape[1] + " + col;\n      vec2 uv = vec2((float(index) + 0.5) / " + texNumC + ".0, 0.5);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
    }
    return "\n  float " + funcName + "(int row, int col) {\n    vec2 uv = UVfrom2D(" + texNumR + ", " + texNumC + ", " + shape[1] + ", row, col);\n    return sampleTexture(" + texName + ", uv);\n  }\n";
}
function getSampler3D(inputInfo) {
    var texShape = inputInfo.shapeInfo.texShape;
    var shape = inputInfo.shapeInfo.logicalShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    var stride0 = shape[1] * shape[2];
    var stride1 = shape[2];
    var _a = util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    var squeezedShape = newShape;
    if (squeezedShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, squeezedShape);
        var params = ['row', 'col', 'depth'];
        return "\n        " + getSamplerFromInInfo(newInputInfo) + "\n        float " + funcName + "(int row, int col, int depth) {\n          return " + funcName + "(" + getSqueezedParams(params, keptDims) + ");\n        }\n      ";
    }
    if (texNumC === stride0) {
        return "\n        float " + funcName + "(int row, int col, int depth) {\n          int texR = row;\n          int texC = col * " + stride1 + " + depth;\n          vec2 uv = (vec2(texC, texR) + halfCR) /\n                     vec2(" + texNumC + ".0, " + texNumR + ".0);\n          return sampleTexture(" + texName + ", uv);\n        }\n      ";
    }
    if (texNumC === stride1) {
        return "\n    float " + funcName + "(int row, int col, int depth) {\n      int texR = row * " + shape[1] + " + col;\n      int texC = depth;\n      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(" + texNumC + ".0, " + texNumR + ".0);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
    }
    return "\n      float " + funcName + "(int row, int col, int depth) {\n        vec2 uv = UVfrom3D(\n            " + texNumR + ", " + texNumC + ", " + stride0 + ", " + stride1 + ", row, col, depth);\n        return sampleTexture(" + texName + ", uv);\n      }\n  ";
}
function getSampler4D(inputInfo) {
    var shape = inputInfo.shapeInfo.logicalShape;
    var texShape = inputInfo.shapeInfo.texShape;
    var texName = inputInfo.name;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1);
    var texNumR = texShape[0];
    var texNumC = texShape[1];
    var stride2 = shape[3];
    var stride1 = shape[2] * stride2;
    var stride0 = shape[1] * stride1;
    var _a = util.squeezeShape(shape), newShape = _a.newShape, keptDims = _a.keptDims;
    if (newShape.length < shape.length) {
        var newInputInfo = squeezeInputInfo(inputInfo, newShape);
        var params = ['row', 'col', 'depth', 'depth2'];
        return "\n      " + getSamplerFromInInfo(newInputInfo) + "\n      float " + funcName + "(int row, int col, int depth, int depth2) {\n        return " + funcName + "(" + getSqueezedParams(params, keptDims) + ");\n      }\n    ";
    }
    if (texNumC === stride0) {
        return "\n      float " + funcName + "(int row, int col, int depth, int depth2) {\n        int texR = row;\n        int texC = col * " + stride1 + " + depth * " + stride2 + " + depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                   vec2(" + texNumC + ".0, " + texNumR + ".0);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
    }
    if (texNumC === stride2) {
        return "\n      float " + funcName + "(int row, int col, int depth, int depth2) {\n        int texR = row * " + shape[1] * shape[2] + " + col * " + shape[2] + " + depth;\n        int texC = depth2;\n        vec2 uv = (vec2(texC, texR) + halfCR) /\n                  vec2(" + texNumC + ".0, " + texNumR + ".0);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
    }
    return "\n    float " + funcName + "(int row, int col, int depth, int depth2) {\n      vec2 uv = UVfrom4D(" + texNumR + ", " + texNumC + ", " + stride0 + ", " + stride1 + ",\n          " + stride2 + ", row, col, depth, depth2);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
}
function getSamplerFlat(inputInfo) {
    var texName = inputInfo.name;
    var texShape = inputInfo.shapeInfo.texShape;
    var funcName = 'get' + texName.charAt(0).toUpperCase() + texName.slice(1) + 'Flat';
    var tNumR = texShape[0];
    var tNumC = texShape[1];
    if (tNumC === 1 && tNumR === 1) {
        return "\n      float " + funcName + "(int index) {\n        return sampleTexture(" + texName + ", halfCR);\n      }\n    ";
    }
    if (tNumC === 1) {
        return "\n      float " + funcName + "(int index) {\n        vec2 uv = vec2(0.5, (float(index) + 0.5) / " + tNumR + ".0);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
    }
    if (tNumR === 1) {
        return "\n      float " + funcName + "(int index) {\n        vec2 uv = vec2((float(index) + 0.5) / " + tNumC + ".0, 0.5);\n        return sampleTexture(" + texName + ", uv);\n      }\n    ";
    }
    return "\n    float " + funcName + "(int index) {\n      vec2 uv = UVfrom1D(" + tNumR + ", " + tNumC + ", index);\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
}
function getBroadcastOutputCoordsSampler(inputInfo, outShapeInfo, texFuncSnippet, funcName) {
    var inRank = inputInfo.shapeInfo.logicalShape.length;
    var outRank = outShapeInfo.logicalShape.length;
    var type = 'int';
    if (outRank === 2) {
        type = 'ivec2';
    }
    else if (outRank === 3) {
        type = 'ivec3';
    }
    else if (outRank === 4) {
        type = 'ivec4';
    }
    var broadcastDims = broadcast_util.getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
    var rankDiff = outRank - inRank;
    var coordsSnippet;
    if (inRank === 0) {
        coordsSnippet = '';
    }
    else if (outRank < 2 && broadcastDims.length >= 1) {
        coordsSnippet = 'coords = 0;';
    }
    else {
        coordsSnippet =
            broadcastDims.map(function (d) { return "coords[" + (d + rankDiff) + "] = 0;"; }).join('\n');
    }
    var unpackedCoordsSnippet = '';
    if (outRank < 2 && inRank > 0) {
        unpackedCoordsSnippet = 'coords';
    }
    else {
        unpackedCoordsSnippet = inputInfo.shapeInfo.logicalShape
            .map(function (s, i) { return "coords[" + (i + rankDiff) + "]"; })
            .join(', ');
    }
    return "\n    float " + funcName + "() {\n      " + type + " coords = getOutputCoords();\n      " + coordsSnippet + "\n      return get" + texFuncSnippet + "(" + unpackedCoordsSnippet + ");\n    }\n  ";
}
function getSamplerAtOutputCoords(inputInfo, outShapeInfo, supportsBroadcasting) {
    var inTexShape = inputInfo.shapeInfo.texShape;
    var texName = inputInfo.name;
    var texFuncSnippet = texName.charAt(0).toUpperCase() + texName.slice(1);
    var funcName = 'get' + texFuncSnippet + 'AtOutCoords';
    var broadcastDims = broadcast_util.getBroadcastDims(inputInfo.shapeInfo.logicalShape, outShapeInfo.logicalShape);
    var inRank = inputInfo.shapeInfo.logicalShape.length;
    var outRank = outShapeInfo.logicalShape.length;
    var doBroadcast = supportsBroadcasting && ((outRank > inRank) || broadcastDims.length > 0);
    var broadcastOverOuter = broadcast_util.broadcastDimsAreOuter(broadcastDims);
    if (doBroadcast && !broadcastOverOuter) {
        return getBroadcastOutputCoordsSampler(inputInfo, outShapeInfo, texFuncSnippet, funcName);
    }
    var outTexShape = outShapeInfo.texShape;
    if (util.arraysEqual(inTexShape, outTexShape)) {
        return "\n      float " + funcName + "() {\n        return sampleTexture(" + texName + ", resultUV);\n      }\n    ";
    }
    var inSize = util.sizeFromShape(inTexShape);
    var broadcastSnippet = '';
    if (doBroadcast && broadcastOverOuter) {
        broadcastSnippet = "\n        int mainPart = index / " + inSize + ";\n        index -= mainPart * " + inSize + ";\n      ";
    }
    return "\n    float " + funcName + "() {\n      ivec2 resTexRC = ivec2(resultUV.yx *\n                             vec2(" + outTexShape[0] + ", " + outTexShape[1] + "));\n      int index = resTexRC.x * " + outTexShape[1] + " + resTexRC.y;\n      " + broadcastSnippet + "\n      int texR = index / " + inTexShape[1] + ";\n      int texC = index - texR * " + inTexShape[1] + ";\n      vec2 uv = (vec2(texC, texR) + halfCR) /\n                 vec2(" + inTexShape[1] + ".0, " + inTexShape[0] + ".0);\n\n      return sampleTexture(" + texName + ", uv);\n    }\n  ";
}
function getCoordsDataType(rank) {
    if (rank <= 1) {
        return 'int';
    }
    else if (rank === 2) {
        return 'ivec2';
    }
    else if (rank === 3) {
        return 'ivec3';
    }
    else if (rank === 4) {
        return 'ivec4';
    }
    else {
        throw Error("GPU for rank " + rank + " is not yet supported");
    }
}
exports.getCoordsDataType = getCoordsDataType;
function squeezeInputInfo(inInfo, squeezedShape) {
    var newInputInfo = JSON.parse(JSON.stringify(inInfo));
    newInputInfo.shapeInfo.logicalShape = squeezedShape;
    return newInputInfo;
}
function getSqueezedParams(params, keptDims) {
    return keptDims.map(function (d) { return params[d]; }).join(', ');
}

},{"../../environment":24,"../../util":26,"../../ops/broadcast_util":62,"./tex_util":119}],104:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shader_compiler_1 = require("./shader_compiler");
var GatherProgram = (function () {
    function GatherProgram(aShape, indicesLength, axis) {
        this.variableNames = ['A', 'indices'];
        var outputShape = aShape.slice();
        outputShape[axis] = indicesLength;
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        var dtype = shader_compiler_1.getCoordsDataType(this.rank);
        var sourceCoords = getSourceCoords(aShape, axis);
        this.userCode = "\n      void main() {\n        " + dtype + " resRC = getOutputCoords();\n        setOutput(getA(" + sourceCoords + "));\n      }\n    ";
    }
    return GatherProgram;
}());
exports.GatherProgram = GatherProgram;
function getSourceCoords(aShape, axis) {
    var rank = aShape.length;
    if (rank > 4) {
        throw Error("Gather for rank " + rank + " is not yet supported");
    }
    if (rank === 1) {
        return "int(getIndices(resRC))";
    }
    var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
    var sourceCoords = [];
    for (var i = 0; i < aShape.length; i++) {
        if (i === axis) {
            sourceCoords.push("int(getIndices(" + currentCoords[i] + "))");
        }
        else {
            sourceCoords.push("" + currentCoords[i]);
        }
    }
    return sourceCoords.join();
}

},{"./shader_compiler":131}],55:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MAX_TEXTURE_SIZE = null;
var util = require("../../util");
var environment_1 = require("../../environment");
function createWebGLRenderingContext(attributes) {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return createWebGLRenderingContextFromCanvas(canvas, attributes);
}
exports.createWebGLRenderingContext = createWebGLRenderingContext;
function createWebGLRenderingContextFromCanvas(canvas, attributes) {
    var gl;
    var webglVersion = environment_1.ENV.get('WEBGL_VERSION');
    if (webglVersion === 2) {
        gl = canvas.getContext('webgl2', attributes);
    }
    else if (webglVersion === 1) {
        gl = (canvas.getContext('webgl', attributes) ||
            canvas.getContext('experimental-webgl', attributes));
    }
    if (webglVersion === 0 || gl == null) {
        throw new Error('This browser does not support WebGL.');
    }
    return gl;
}
exports.createWebGLRenderingContextFromCanvas = createWebGLRenderingContextFromCanvas;
function callAndCheck(gl, func) {
    var returnValue = func();
    checkWebGLError(gl);
    return returnValue;
}
exports.callAndCheck = callAndCheck;
var webGLDebugErrorCheckingEnabled = false;
function enableDebugWebGLErrorChecking(enabled) {
    webGLDebugErrorCheckingEnabled = enabled;
}
exports.enableDebugWebGLErrorChecking = enableDebugWebGLErrorChecking;
function checkWebGLError(gl) {
    if (webGLDebugErrorCheckingEnabled) {
        var error = gl.getError();
        if (error !== gl.NO_ERROR) {
            throw new Error('WebGL Error: ' + getWebGLErrorMessage(gl, error));
        }
    }
}
exports.checkWebGLError = checkWebGLError;
function getWebGLErrorMessage(gl, status) {
    switch (status) {
        case gl.NO_ERROR:
            return 'NO_ERROR';
        case gl.INVALID_ENUM:
            return 'INVALID_ENUM';
        case gl.INVALID_VALUE:
            return 'INVALID_VALUE';
        case gl.INVALID_OPERATION:
            return 'INVALID_OPERATION';
        case gl.INVALID_FRAMEBUFFER_OPERATION:
            return 'INVALID_FRAMEBUFFER_OPERATION';
        case gl.OUT_OF_MEMORY:
            return 'OUT_OF_MEMORY';
        case gl.CONTEXT_LOST_WEBGL:
            return 'CONTEXT_LOST_WEBGL';
        default:
            return "Unknown error code " + status;
    }
}
exports.getWebGLErrorMessage = getWebGLErrorMessage;
function getExtensionOrThrow(gl, extensionName) {
    return throwIfNull(gl, function () { return gl.getExtension(extensionName); }, 'Extension "' + extensionName + '" not supported on this browser.');
}
exports.getExtensionOrThrow = getExtensionOrThrow;
function createVertexShader(gl, vertexShaderSource) {
    var vertexShader = throwIfNull(gl, function () { return gl.createShader(gl.VERTEX_SHADER); }, 'Unable to create vertex WebGLShader.');
    callAndCheck(gl, function () { return gl.shaderSource(vertexShader, vertexShaderSource); });
    callAndCheck(gl, function () { return gl.compileShader(vertexShader); });
    if (gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS) === false) {
        console.log(gl.getShaderInfoLog(vertexShader));
        throw new Error('Failed to compile vertex shader.');
    }
    return vertexShader;
}
exports.createVertexShader = createVertexShader;
function createFragmentShader(gl, fragmentShaderSource) {
    var fragmentShader = throwIfNull(gl, function () { return gl.createShader(gl.FRAGMENT_SHADER); }, 'Unable to create fragment WebGLShader.');
    callAndCheck(gl, function () { return gl.shaderSource(fragmentShader, fragmentShaderSource); });
    callAndCheck(gl, function () { return gl.compileShader(fragmentShader); });
    if (gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS) === false) {
        logShaderSourceAndInfoLog(fragmentShaderSource, gl.getShaderInfoLog(fragmentShader));
        throw new Error('Failed to compile fragment shader.');
    }
    return fragmentShader;
}
exports.createFragmentShader = createFragmentShader;
var lineNumberRegex = /ERROR: [0-9]+:([0-9]+):/g;
function logShaderSourceAndInfoLog(shaderSource, shaderInfoLog) {
    var lineNumberRegexResult = lineNumberRegex.exec(shaderInfoLog);
    if (lineNumberRegexResult == null) {
        console.log("Couldn't parse line number in error: " + shaderInfoLog);
        console.log(shaderSource);
        return;
    }
    var lineNumber = +lineNumberRegexResult[1];
    var shaderLines = shaderSource.split('\n');
    var pad = shaderLines.length.toString().length + 2;
    var linesWithLineNumbers = shaderLines.map(function (line, lineNumber) {
        return util.rightPad((lineNumber + 1).toString(), pad) + line;
    });
    var maxLineLength = 0;
    for (var i = 0; i < linesWithLineNumbers.length; i++) {
        maxLineLength = Math.max(linesWithLineNumbers[i].length, maxLineLength);
    }
    var beforeErrorLines = linesWithLineNumbers.slice(0, lineNumber - 1);
    var errorLine = linesWithLineNumbers.slice(lineNumber - 1, lineNumber);
    var afterErrorLines = linesWithLineNumbers.slice(lineNumber);
    console.log(beforeErrorLines.join('\n'));
    console.log(shaderInfoLog.split('\n')[0]);
    console.log("%c " + util.rightPad(errorLine[0], maxLineLength), 'border:1px solid red; background-color:#e3d2d2; color:#a61717');
    console.log(afterErrorLines.join('\n'));
}
function createProgram(gl) {
    return throwIfNull(gl, function () { return gl.createProgram(); }, 'Unable to create WebGLProgram.');
}
exports.createProgram = createProgram;
function linkProgram(gl, program) {
    callAndCheck(gl, function () { return gl.linkProgram(program); });
    if (gl.getProgramParameter(program, gl.LINK_STATUS) === false) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error('Failed to link vertex and fragment shaders.');
    }
}
exports.linkProgram = linkProgram;
function validateProgram(gl, program) {
    callAndCheck(gl, function () { return gl.validateProgram(program); });
    if (gl.getProgramParameter(program, gl.VALIDATE_STATUS) === false) {
        console.log(gl.getProgramInfoLog(program));
        throw new Error('Shader program validation failed.');
    }
}
exports.validateProgram = validateProgram;
function createStaticVertexBuffer(gl, data) {
    var buffer = throwIfNull(gl, function () { return gl.createBuffer(); }, 'Unable to create WebGLBuffer');
    callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, buffer); });
    callAndCheck(gl, function () { return gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); });
    return buffer;
}
exports.createStaticVertexBuffer = createStaticVertexBuffer;
function createStaticIndexBuffer(gl, data) {
    var buffer = throwIfNull(gl, function () { return gl.createBuffer(); }, 'Unable to create WebGLBuffer');
    callAndCheck(gl, function () { return gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, buffer); });
    callAndCheck(gl, function () { return gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, data, gl.STATIC_DRAW); });
    return buffer;
}
exports.createStaticIndexBuffer = createStaticIndexBuffer;
function queryMaxTextureSize(gl) {
    if (MAX_TEXTURE_SIZE != null) {
        return MAX_TEXTURE_SIZE;
    }
    MAX_TEXTURE_SIZE =
        callAndCheck(gl, function () { return gl.getParameter(gl.MAX_TEXTURE_SIZE); });
    return MAX_TEXTURE_SIZE;
}
exports.queryMaxTextureSize = queryMaxTextureSize;
function getChannelsPerTexture() {
    if (!environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
        return 4;
    }
    if (environment_1.ENV.get('WEBGL_VERSION') === 2) {
        return 1;
    }
    return 4;
}
exports.getChannelsPerTexture = getChannelsPerTexture;
function createTexture(gl) {
    return throwIfNull(gl, function () { return gl.createTexture(); }, 'Unable to create WebGLTexture.');
}
exports.createTexture = createTexture;
function validateTextureSize(gl, width, height) {
    var maxTextureSize = queryMaxTextureSize(gl);
    if ((width <= 0) || (height <= 0)) {
        var requested = "[" + width + "x" + height + "]";
        throw new Error('Requested texture size ' + requested + ' is invalid.');
    }
    if ((width > maxTextureSize) || (height > maxTextureSize)) {
        var requested = "[" + width + "x" + height + "]";
        var max = "[" + maxTextureSize + "x" + maxTextureSize + "]";
        throw new Error('Requested texture size ' + requested +
            ' greater than WebGL maximum on this browser / GPU ' + max + '.');
    }
}
exports.validateTextureSize = validateTextureSize;
function createFramebuffer(gl) {
    return throwIfNull(gl, function () { return gl.createFramebuffer(); }, 'Unable to create WebGLFramebuffer.');
}
exports.createFramebuffer = createFramebuffer;
function bindVertexBufferToProgramAttribute(gl, program, attribute, buffer, arrayEntriesPerItem, itemStrideInBytes, itemOffsetInBytes) {
    var loc = gl.getAttribLocation(program, attribute);
    if (loc === -1) {
        return false;
    }
    callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, buffer); });
    callAndCheck(gl, function () { return gl.vertexAttribPointer(loc, arrayEntriesPerItem, gl.FLOAT, false, itemStrideInBytes, itemOffsetInBytes); });
    callAndCheck(gl, function () { return gl.enableVertexAttribArray(loc); });
    return true;
}
exports.bindVertexBufferToProgramAttribute = bindVertexBufferToProgramAttribute;
function bindTextureUnit(gl, texture, textureUnit) {
    validateTextureUnit(gl, textureUnit);
    callAndCheck(gl, function () { return gl.activeTexture(gl.TEXTURE0 + textureUnit); });
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
}
exports.bindTextureUnit = bindTextureUnit;
function unbindTextureUnit(gl, textureUnit) {
    validateTextureUnit(gl, textureUnit);
    callAndCheck(gl, function () { return gl.activeTexture(gl.TEXTURE0 + textureUnit); });
    callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
}
exports.unbindTextureUnit = unbindTextureUnit;
function getProgramUniformLocationOrThrow(gl, program, uniformName) {
    return throwIfNull(gl, function () { return gl.getUniformLocation(program, uniformName); }, 'uniform "' + uniformName + '" not present in program.');
}
exports.getProgramUniformLocationOrThrow = getProgramUniformLocationOrThrow;
function getProgramUniformLocation(gl, program, uniformName) {
    return gl.getUniformLocation(program, uniformName);
}
exports.getProgramUniformLocation = getProgramUniformLocation;
function bindTextureToProgramUniformSampler(gl, program, texture, uniformSamplerLocation, textureUnit) {
    callAndCheck(gl, function () { return bindTextureUnit(gl, texture, textureUnit); });
    callAndCheck(gl, function () { return gl.uniform1i(uniformSamplerLocation, textureUnit); });
}
exports.bindTextureToProgramUniformSampler = bindTextureToProgramUniformSampler;
function bindCanvasToFramebuffer(gl) {
    callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, null); });
    callAndCheck(gl, function () { return gl.viewport(0, 0, gl.canvas.width, gl.canvas.height); });
    callAndCheck(gl, function () { return gl.scissor(0, 0, gl.canvas.width, gl.canvas.height); });
}
exports.bindCanvasToFramebuffer = bindCanvasToFramebuffer;
function bindColorTextureToFramebuffer(gl, texture, framebuffer) {
    callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); });
    callAndCheck(gl, function () { return gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0); });
}
exports.bindColorTextureToFramebuffer = bindColorTextureToFramebuffer;
function unbindColorTextureFromFramebuffer(gl, framebuffer) {
    callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); });
    callAndCheck(gl, function () { return gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, null, 0); });
}
exports.unbindColorTextureFromFramebuffer = unbindColorTextureFromFramebuffer;
function validateFramebuffer(gl) {
    var status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
    if (status !== gl.FRAMEBUFFER_COMPLETE) {
        throw new Error('Error binding framebuffer: ' + getFramebufferErrorMessage(gl, status));
    }
}
exports.validateFramebuffer = validateFramebuffer;
function getFramebufferErrorMessage(gl, status) {
    switch (status) {
        case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
            return 'FRAMEBUFFER_INCOMPLETE_ATTACHMENT';
        case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
            return 'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT';
        case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
            return 'FRAMEBUFFER_INCOMPLETE_DIMENSIONS';
        case gl.FRAMEBUFFER_UNSUPPORTED:
            return 'FRAMEBUFFER_UNSUPPORTED';
        default:
            return "unknown error " + status;
    }
}
exports.getFramebufferErrorMessage = getFramebufferErrorMessage;
function throwIfNull(gl, returnTOrNull, failureMessage) {
    var tOrNull = callAndCheck(gl, function () { return returnTOrNull(); });
    if (tOrNull == null) {
        throw new Error(failureMessage);
    }
    return tOrNull;
}
function validateTextureUnit(gl, textureUnit) {
    var maxTextureUnit = gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1;
    var glTextureUnit = textureUnit + gl.TEXTURE0;
    if (glTextureUnit < gl.TEXTURE0 || glTextureUnit > maxTextureUnit) {
        var textureUnitRange = "[gl.TEXTURE0, gl.TEXTURE" + maxTextureUnit + "]";
        throw new Error("textureUnit must be in " + textureUnitRange + ".");
    }
}
function getTextureShapeFromLogicalShape(gl, logShape) {
    if (logShape.length !== 2) {
        var squeezeResult = util.squeezeShape(logShape);
        logShape = squeezeResult.newShape;
    }
    var maxTexSize = queryMaxTextureSize(gl);
    var size = util.sizeFromShape(logShape);
    if (logShape.length <= 1 && size <= maxTexSize) {
        return [size, 1];
    }
    else if (logShape.length === 2 && logShape[0] <= maxTexSize &&
        logShape[1] <= maxTexSize) {
        return logShape;
    }
    else if (logShape.length === 3 && logShape[0] <= maxTexSize &&
        logShape[1] * logShape[2] <= maxTexSize) {
        return [logShape[0], logShape[1] * logShape[2]];
    }
    else if (logShape.length === 4 && logShape[0] <= maxTexSize &&
        logShape[1] * logShape[2] * logShape[3] <= maxTexSize) {
        return [logShape[0], logShape[1] * logShape[2] * logShape[3]];
    }
    else {
        return util.sizeToSquarishShape(size);
    }
}
exports.getTextureShapeFromLogicalShape = getTextureShapeFromLogicalShape;

},{"../../util":26,"../../environment":24}],56:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
var tex_util = require("./tex_util");
var webgl_util = require("./webgl_util");
function getWebGLContextAttributes() {
    return {
        alpha: false,
        antialias: false,
        premultipliedAlpha: false,
        preserveDrawingBuffer: false,
        depth: false,
        stencil: false,
        failIfMajorPerformanceCaveat: true
    };
}
exports.getWebGLContextAttributes = getWebGLContextAttributes;
function createWebGLContext(canvas) {
    var attributes = getWebGLContextAttributes();
    var gl;
    if (canvas != null) {
        gl = webgl_util.createWebGLRenderingContextFromCanvas(canvas, attributes);
    }
    else {
        gl = webgl_util.createWebGLRenderingContext(attributes);
    }
    webgl_util.callAndCheck(gl, function () { return gl.disable(gl.DEPTH_TEST); });
    webgl_util.callAndCheck(gl, function () { return gl.disable(gl.STENCIL_TEST); });
    webgl_util.callAndCheck(gl, function () { return gl.disable(gl.BLEND); });
    webgl_util.callAndCheck(gl, function () { return gl.disable(gl.DITHER); });
    webgl_util.callAndCheck(gl, function () { return gl.disable(gl.POLYGON_OFFSET_FILL); });
    webgl_util.callAndCheck(gl, function () { return gl.disable(gl.SAMPLE_COVERAGE); });
    webgl_util.callAndCheck(gl, function () { return gl.enable(gl.SCISSOR_TEST); });
    webgl_util.callAndCheck(gl, function () { return gl.enable(gl.CULL_FACE); });
    webgl_util.callAndCheck(gl, function () { return gl.cullFace(gl.BACK); });
    return gl;
}
exports.createWebGLContext = createWebGLContext;
function createVertexShader(gl) {
    var vertexShaderSource = "\n    precision highp float;\n    attribute vec3 clipSpacePos;\n    attribute vec2 uv;\n    varying vec2 resultUV;\n\n    void main() {\n      gl_Position = vec4(clipSpacePos, 1);\n      resultUV = uv;\n    }";
    return webgl_util.createVertexShader(gl, vertexShaderSource);
}
exports.createVertexShader = createVertexShader;
function createVertexBuffer(gl) {
    var vertexArray = new Float32Array([-1, 1, 0, 0, 1, -1, -1, 0, 0, 0, 1, 1, 0, 1, 1, 1, -1, 0, 1, 0]);
    return webgl_util.createStaticVertexBuffer(gl, vertexArray);
}
exports.createVertexBuffer = createVertexBuffer;
function createIndexBuffer(gl) {
    var triangleVertexIndices = new Uint16Array([0, 1, 2, 2, 1, 3]);
    return webgl_util.createStaticIndexBuffer(gl, triangleVertexIndices);
}
exports.createIndexBuffer = createIndexBuffer;
function getTextureInternalFormat(gl, numChannels) {
    if (!environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
        return gl.RGBA;
    }
    if (environment_1.ENV.get('WEBGL_VERSION') === 2) {
        if (numChannels === 4) {
            return gl.RGBA32F;
        }
        return gl.R32F;
    }
    return gl.RGBA;
}
function getTextureFormat(gl, numChannels) {
    if (!environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
        return gl.RGBA;
    }
    if (environment_1.ENV.get('WEBGL_VERSION') === 2) {
        if (numChannels === 4) {
            return gl.RGBA;
        }
        return gl.RED;
    }
    return gl.RGBA;
}
function getTextureType(gl) {
    if (!environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
        return gl.UNSIGNED_BYTE;
    }
    return gl.FLOAT;
}
function createAndConfigureTexture(gl, width, height, numChannels) {
    webgl_util.validateTextureSize(gl, width, height);
    var texture = webgl_util.createTexture(gl);
    var tex2d = gl.TEXTURE_2D;
    var internalFormat = getTextureInternalFormat(gl, numChannels);
    var format = getTextureFormat(gl, numChannels);
    webgl_util.callAndCheck(gl, function () { return gl.bindTexture(tex2d, texture); });
    webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); });
    webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); });
    webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST); });
    webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST); });
    webgl_util.callAndCheck(gl, function () { return gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, format, getTextureType(gl), null); });
    webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    return texture;
}
function createMatrixTexture(gl, rows, columns) {
    var _a = tex_util.getUnpackedMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
    var numChannels = 1;
    return createAndConfigureTexture(gl, width, height, numChannels);
}
exports.createMatrixTexture = createMatrixTexture;
function createColorMatrixTexture(gl, rows, columns) {
    var _a = tex_util.getColorMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
    var numChannels = 4;
    return createAndConfigureTexture(gl, width, height, numChannels);
}
exports.createColorMatrixTexture = createColorMatrixTexture;
function createPackedMatrixTexture(gl, rows, columns) {
    var _a = tex_util.getPackedMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
    var numChannels = 4;
    return createAndConfigureTexture(gl, width, height, numChannels);
}
exports.createPackedMatrixTexture = createPackedMatrixTexture;
function bindVertexProgramAttributeStreams(gl, program, vertexBuffer) {
    var posOffset = 0;
    var uvOffset = 3 * 4;
    var stride = (3 * 4) + (2 * 4);
    webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer); });
    var success = webgl_util.bindVertexBufferToProgramAttribute(gl, program, 'clipSpacePos', vertexBuffer, 3, stride, posOffset);
    return success &&
        webgl_util.bindVertexBufferToProgramAttribute(gl, program, 'uv', vertexBuffer, 2, stride, uvOffset);
}
exports.bindVertexProgramAttributeStreams = bindVertexProgramAttributeStreams;
function uploadPixelDataToTexture(gl, texture, pixels) {
    webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
    webgl_util.callAndCheck(gl, function () { return gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pixels); });
    webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
}
exports.uploadPixelDataToTexture = uploadPixelDataToTexture;
function uploadDataToTexture(gl, texture, width, height, data, numChannels) {
    var textureFormat = getTextureFormat(gl, numChannels);
    webgl_util.validateTextureSize(gl, width, height);
    webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, texture); });
    webgl_util.callAndCheck(gl, function () { return gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, width, height, textureFormat, getTextureType(gl), data); });
    webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
}
function uploadMatrixToTexture(gl, texture, rows, columns, matrix, numChannels) {
    var _a = tex_util.getUnpackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
    var unpackedArray;
    if (environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED')) {
        var channelsPerTexture = numChannels === 1 ? webgl_util.getChannelsPerTexture() : numChannels;
        if (channelsPerTexture === 1) {
            unpackedArray = matrix;
        }
        else {
            unpackedArray =
                new Float32Array(tex_util.getUnpackedArraySizeFromMatrixSize(matrix.length, channelsPerTexture));
            tex_util.encodeMatrixToUnpackedArray(matrix, unpackedArray, channelsPerTexture);
        }
    }
    else {
        unpackedArray = tex_util.encodeFloatArray(matrix);
    }
    uploadDataToTexture(gl, texture, w, h, unpackedArray, numChannels);
}
exports.uploadMatrixToTexture = uploadMatrixToTexture;
function uploadMatrixToPackedTexture(gl, texture, rows, columns, matrix) {
    var _a = tex_util.getPackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
    var packedRGBA = new Float32Array(tex_util.getPackedRGBAArraySizeFromMatrixShape(rows, columns));
    tex_util.encodeMatrixToPackedRGBA(matrix, rows, columns, packedRGBA);
    var numChannels = 4;
    uploadDataToTexture(gl, texture, w, h, packedRGBA, numChannels);
}
exports.uploadMatrixToPackedTexture = uploadMatrixToPackedTexture;
function getDownloadTargetArrayBuffer(rows, columns, channelsPerTexture) {
    var isFloatTexture = environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED');
    var downloadTarget;
    if (isFloatTexture) {
        downloadTarget =
            new Float32Array(tex_util.getUnpackedArraySizeFromMatrixSize(rows * columns, channelsPerTexture));
    }
    else {
        downloadTarget = new Uint8Array(rows * columns * channelsPerTexture);
    }
    return downloadTarget;
}
function decodeDownloadTargetArrayBuffer(downloadTarget, rows, columns, channelsPerPixel) {
    var isFloatTexture = environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED');
    if (isFloatTexture) {
        var matrix = new Float32Array(rows * columns);
        tex_util.decodeMatrixFromUnpackedArray(downloadTarget, matrix, channelsPerPixel);
        return matrix;
    }
    else {
        return tex_util.decodeToFloatArray(downloadTarget);
    }
}
function downloadMatrixFromOutputTextureAsync(gl, getBufferSubDataAsyncExtension, rows, columns) {
    return __awaiter(this, void 0, void 0, function () {
        var gl2, channelsPerPixel, downloadTarget, bufferSizeBytes, buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gl2 = gl;
                    channelsPerPixel = 4;
                    downloadTarget = getDownloadTargetArrayBuffer(rows, columns, channelsPerPixel);
                    bufferSizeBytes = downloadTarget instanceof Float32Array ?
                        downloadTarget.length * 4 :
                        downloadTarget;
                    buffer = gl.createBuffer();
                    webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl2.PIXEL_PACK_BUFFER, buffer); });
                    webgl_util.callAndCheck(gl, function () { return gl.bufferData(gl2.PIXEL_PACK_BUFFER, bufferSizeBytes, gl.STATIC_DRAW); });
                    webgl_util.callAndCheck(gl, function () {
                        return gl2.readPixels(0, 0, columns, rows, gl.RGBA, getTextureType(gl), 0);
                    });
                    return [4, getBufferSubDataAsyncExtension.getBufferSubDataAsync(gl2.PIXEL_PACK_BUFFER, 0, downloadTarget)];
                case 1:
                    _a.sent();
                    return [2, decodeDownloadTargetArrayBuffer(downloadTarget, rows, columns, channelsPerPixel)];
            }
        });
    });
}
exports.downloadMatrixFromOutputTextureAsync = downloadMatrixFromOutputTextureAsync;
function downloadMatrixFromOutputTexture(gl, rows, columns) {
    var _a = tex_util.getUnpackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
    var channelsPerPixel = 4;
    var downloadTarget = getDownloadTargetArrayBuffer(rows, columns, channelsPerPixel);
    webgl_util.callAndCheck(gl, function () { return gl.readPixels(0, 0, w, h, gl.RGBA, getTextureType(gl), downloadTarget); });
    return decodeDownloadTargetArrayBuffer(downloadTarget, rows, columns, channelsPerPixel);
}
exports.downloadMatrixFromOutputTexture = downloadMatrixFromOutputTexture;
function downloadMatrixFromRGBAColorTexture(gl, rows, columns, channels) {
    var size = rows * columns * 4;
    var downloadTarget = new Uint8Array(size);
    webgl_util.callAndCheck(gl, function () { return gl.readPixels(0, 0, columns, rows, gl.RGBA, gl.UNSIGNED_BYTE, downloadTarget); });
    var packedRGBA = new Float32Array(size);
    for (var i = 0; i < downloadTarget.length; i++) {
        packedRGBA[i] = downloadTarget[i];
    }
    var matrix = new Float32Array(rows * columns * channels);
    tex_util.decodeMatrixFromUnpackedColorRGBAArray(packedRGBA, matrix, channels);
    return matrix;
}
exports.downloadMatrixFromRGBAColorTexture = downloadMatrixFromRGBAColorTexture;
function downloadMatrixFromPackedOutputTexture(gl, rows, columns) {
    var _a = tex_util.getPackedMatrixTextureShapeWidthHeight(rows, columns), w = _a[0], h = _a[1];
    var packedRGBA = new Float32Array(tex_util.getPackedRGBAArraySizeFromMatrixShape(rows, columns));
    webgl_util.callAndCheck(gl, function () { return gl.readPixels(0, 0, w, h, gl.RGBA, getTextureType(gl), packedRGBA); });
    var matrix = new Float32Array(rows * columns);
    return tex_util.decodeMatrixFromPackedRGBA(packedRGBA, rows, columns, matrix);
}
exports.downloadMatrixFromPackedOutputTexture = downloadMatrixFromPackedOutputTexture;

},{"../../environment":24,"./tex_util":119,"./webgl_util":55}],57:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
var util = require("../../util");
var gpgpu_util = require("./gpgpu_util");
var tex_util = require("./tex_util");
var webgl_util = require("./webgl_util");
var GPGPUContext = (function () {
    function GPGPUContext(gl) {
        this.outputTexture = null;
        this.program = null;
        this.disposed = false;
        this.autoDebugValidate = false;
        this.vertexAttrsAreBound = false;
        if (gl != null) {
            this.gl = gl;
        }
        else {
            this.gl = gpgpu_util.createWebGLContext();
        }
        if (environment_1.ENV.get('WEBGL_VERSION') === 1) {
            this.textureFloatExtension =
                webgl_util.getExtensionOrThrow(this.gl, 'OES_texture_float');
            this.colorBufferFloatExtension =
                this.gl.getExtension('WEBGL_color_buffer_float');
        }
        else {
            this.colorBufferFloatExtension =
                webgl_util.getExtensionOrThrow(this.gl, 'EXT_color_buffer_float');
        }
        this.loseContextExtension =
            webgl_util.getExtensionOrThrow(this.gl, 'WEBGL_lose_context');
        if (environment_1.ENV.get('WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED')) {
            this.getBufferSubDataAsyncExtension =
                this.gl.getExtension('WEBGL_get_buffer_sub_data_async');
        }
        this.vertexBuffer = gpgpu_util.createVertexBuffer(this.gl);
        this.indexBuffer = gpgpu_util.createIndexBuffer(this.gl);
        this.framebuffer = webgl_util.createFramebuffer(this.gl);
    }
    GPGPUContext.prototype.dispose = function () {
        var _this = this;
        if (this.disposed) {
            return;
        }
        if (this.program != null) {
            console.warn('Disposing a GPGPUContext that still has a bound WebGLProgram.' +
                ' This is probably a resource leak, delete the program with ' +
                'GPGPUContext.deleteProgram before disposing.');
        }
        if (this.outputTexture != null) {
            console.warn('Disposing a GPGPUContext that still has a bound output matrix ' +
                'texture.  This is probably a resource leak, delete the output ' +
                'matrix texture with GPGPUContext.deleteMatrixTexture before ' +
                'disposing.');
        }
        var gl = this.gl;
        webgl_util.callAndCheck(gl, function () { return gl.finish(); });
        webgl_util.callAndCheck(gl, function () { return gl.bindFramebuffer(gl.FRAMEBUFFER, null); });
        webgl_util.callAndCheck(gl, function () { return gl.deleteFramebuffer(_this.framebuffer); });
        webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, null); });
        webgl_util.callAndCheck(gl, function () { return gl.deleteBuffer(_this.vertexBuffer); });
        webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null); });
        webgl_util.callAndCheck(gl, function () { return gl.deleteBuffer(_this.indexBuffer); });
        this.loseContextExtension.loseContext();
        this.disposed = true;
    };
    GPGPUContext.prototype.enableAutomaticDebugValidation = function (enabled) {
        this.autoDebugValidate = enabled;
        webgl_util.enableDebugWebGLErrorChecking(enabled);
    };
    GPGPUContext.prototype.createMatrixTexture = function (rows, columns) {
        this.throwIfDisposed();
        return gpgpu_util.createMatrixTexture(this.gl, rows, columns);
    };
    GPGPUContext.prototype.uploadPixelDataToTexture = function (texture, pixels) {
        this.throwIfDisposed();
        gpgpu_util.uploadPixelDataToTexture(this.gl, texture, pixels);
    };
    GPGPUContext.prototype.createPackedMatrixTexture = function (rows, columns) {
        this.throwIfDisposed();
        return gpgpu_util.createPackedMatrixTexture(this.gl, rows, columns);
    };
    GPGPUContext.prototype.deleteMatrixTexture = function (texture) {
        var _this = this;
        this.throwIfDisposed();
        if (this.outputTexture === texture) {
            webgl_util.unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
            this.outputTexture = null;
        }
        webgl_util.callAndCheck(this.gl, function () { return _this.gl.deleteTexture(texture); });
    };
    GPGPUContext.prototype.uploadMatrixToTexture = function (texture, rows, columns, matrix) {
        this.throwIfDisposed();
        var numChannels = 1;
        return gpgpu_util.uploadMatrixToTexture(this.gl, texture, rows, columns, matrix, numChannels);
    };
    GPGPUContext.prototype.uploadMatrixToPackedTexture = function (texture, rows, columns, matrix) {
        this.throwIfDisposed();
        return gpgpu_util.uploadMatrixToPackedTexture(this.gl, texture, rows, columns, matrix);
    };
    GPGPUContext.prototype.downloadMatrixFromTexture = function (texture, rows, columns) {
        var _this = this;
        return this.downloadMatrixDriver(texture, function () {
            return gpgpu_util.downloadMatrixFromOutputTexture(_this.gl, rows, columns);
        });
    };
    GPGPUContext.prototype.downloadMatrixFromTextureAsync = function (texture, rows, columns) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.getBufferSubDataAsyncExtension == null) {
                    throw new Error("Cannot download matrix from output texture asynchronously, " +
                        "WEBGL_get_buffer_sub_data_async is not enabled.");
                }
                return [2, this.downloadMatrixDriverAsync(texture, function () { return gpgpu_util.downloadMatrixFromOutputTextureAsync(_this.gl, _this.getBufferSubDataAsyncExtension, rows, columns); })];
            });
        });
    };
    GPGPUContext.prototype.downloadMatrixFromRGBAColorTexture = function (texture, rows, columns, channels) {
        var _this = this;
        return this.downloadMatrixDriver(texture, function () { return gpgpu_util.downloadMatrixFromRGBAColorTexture(_this.gl, rows, columns, channels); });
    };
    GPGPUContext.prototype.downloadMatrixFromPackedTexture = function (texture, rows, columns) {
        var _this = this;
        return this.downloadMatrixDriver(texture, function () { return gpgpu_util.downloadMatrixFromPackedOutputTexture(_this.gl, rows, columns); });
    };
    GPGPUContext.prototype.createProgram = function (fragmentShaderSource) {
        this.throwIfDisposed();
        var gl = this.gl;
        var fragmentShader = webgl_util.createFragmentShader(gl, fragmentShaderSource);
        var vertexShader = gpgpu_util.createVertexShader(gl);
        var program = webgl_util.createProgram(gl);
        webgl_util.callAndCheck(gl, function () { return gl.attachShader(program, vertexShader); });
        webgl_util.callAndCheck(gl, function () { return gl.attachShader(program, fragmentShader); });
        webgl_util.linkProgram(gl, program);
        if (this.autoDebugValidate) {
            webgl_util.validateProgram(gl, program);
        }
        if (!this.vertexAttrsAreBound) {
            this.setProgram(program);
            this.vertexAttrsAreBound = gpgpu_util.bindVertexProgramAttributeStreams(gl, this.program, this.vertexBuffer);
        }
        return program;
    };
    GPGPUContext.prototype.deleteProgram = function (program) {
        var _this = this;
        this.throwIfDisposed();
        if (program === this.program) {
            this.program = null;
        }
        if (program != null) {
            webgl_util.callAndCheck(this.gl, function () { return _this.gl.deleteProgram(program); });
        }
    };
    GPGPUContext.prototype.setProgram = function (program) {
        var _this = this;
        this.throwIfDisposed();
        this.program = program;
        if ((this.program != null) && this.autoDebugValidate) {
            webgl_util.validateProgram(this.gl, this.program);
        }
        webgl_util.callAndCheck(this.gl, function () { return _this.gl.useProgram(program); });
    };
    GPGPUContext.prototype.getUniformLocation = function (program, uniformName, shouldThrow) {
        if (shouldThrow === void 0) { shouldThrow = true; }
        this.throwIfDisposed();
        if (shouldThrow) {
            return webgl_util.getProgramUniformLocationOrThrow(this.gl, program, uniformName);
        }
        else {
            return webgl_util.getProgramUniformLocation(this.gl, program, uniformName);
        }
    };
    GPGPUContext.prototype.getAttributeLocation = function (program, attribute) {
        var _this = this;
        this.throwIfDisposed();
        return webgl_util.callAndCheck(this.gl, function () { return _this.gl.getAttribLocation(program, attribute); });
    };
    GPGPUContext.prototype.getUniformLocationNoThrow = function (program, uniformName) {
        this.throwIfDisposed();
        return this.gl.getUniformLocation(program, uniformName);
    };
    GPGPUContext.prototype.setInputMatrixTexture = function (inputMatrixTexture, uniformLocation, textureUnit) {
        this.throwIfDisposed();
        this.throwIfNoProgram();
        webgl_util.bindTextureToProgramUniformSampler(this.gl, this.program, inputMatrixTexture, uniformLocation, textureUnit);
    };
    GPGPUContext.prototype.setOutputMatrixTexture = function (outputMatrixTexture, rows, columns) {
        this.setOutputMatrixTextureDriver(outputMatrixTexture, columns, rows);
    };
    GPGPUContext.prototype.setOutputPackedMatrixTexture = function (outputPackedMatrixTexture, rows, columns) {
        this.throwIfDisposed();
        var _a = tex_util.getPackedMatrixTextureShapeWidthHeight(rows, columns), width = _a[0], height = _a[1];
        this.setOutputMatrixTextureDriver(outputPackedMatrixTexture, width, height);
    };
    GPGPUContext.prototype.setOutputMatrixWriteRegion = function (startRow, numRows, startColumn, numColumns) {
        this.setOutputMatrixWriteRegionDriver(startColumn, startRow, numColumns, numRows);
    };
    GPGPUContext.prototype.setOutputPackedMatrixWriteRegion = function (startRow, numRows, startColumn, numColumns) {
        throw new Error('setOutputPackedMatrixWriteRegion not implemented.');
    };
    GPGPUContext.prototype.debugValidate = function () {
        if (this.program != null) {
            webgl_util.validateProgram(this.gl, this.program);
        }
        webgl_util.validateFramebuffer(this.gl);
    };
    GPGPUContext.prototype.executeProgram = function () {
        this.throwIfDisposed();
        this.throwIfNoProgram();
        var gl = this.gl;
        if (this.autoDebugValidate) {
            this.debugValidate();
        }
        webgl_util.callAndCheck(gl, function () { return gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0); });
    };
    GPGPUContext.prototype.blockUntilAllProgramsCompleted = function () {
        var _this = this;
        this.throwIfDisposed();
        webgl_util.callAndCheck(this.gl, function () { return _this.gl.finish(); });
    };
    GPGPUContext.prototype.getQueryTimerExtension = function () {
        if (this.disjointQueryTimerExtension == null) {
            this.disjointQueryTimerExtension =
                webgl_util.getExtensionOrThrow(this.gl, environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2 ?
                    'EXT_disjoint_timer_query_webgl2' :
                    'EXT_disjoint_timer_query');
        }
        return this.disjointQueryTimerExtension;
    };
    GPGPUContext.prototype.getQueryTimerExtensionWebGL2 = function () {
        return this.getQueryTimerExtension();
    };
    GPGPUContext.prototype.getQueryTimerExtensionWebGL1 = function () {
        return this.getQueryTimerExtension();
    };
    GPGPUContext.prototype.runQuery = function (queryFn) {
        var query = this.beginQuery();
        queryFn();
        this.endQuery();
        return this.pollQueryTime(query);
    };
    GPGPUContext.prototype.beginQuery = function () {
        if (environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
            var gl2 = this.gl;
            var ext_1 = this.getQueryTimerExtensionWebGL2();
            var query_1 = gl2.createQuery();
            gl2.beginQuery(ext_1.TIME_ELAPSED_EXT, query_1);
            return query_1;
        }
        var ext = this.getQueryTimerExtensionWebGL1();
        var query = ext.createQueryEXT();
        ext.beginQueryEXT(ext.TIME_ELAPSED_EXT, query);
        return query;
    };
    GPGPUContext.prototype.endQuery = function () {
        if (environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 2) {
            var gl2 = this.gl;
            var ext_2 = this.getQueryTimerExtensionWebGL2();
            gl2.endQuery(ext_2.TIME_ELAPSED_EXT);
            return;
        }
        var ext = this.getQueryTimerExtensionWebGL1();
        ext.endQueryEXT(ext.TIME_ELAPSED_EXT);
    };
    GPGPUContext.prototype.isQueryAvailable = function (query, queryTimerVersion) {
        if (queryTimerVersion === 0) {
            return true;
        }
        if (queryTimerVersion === 2) {
            var gl2 = this.gl;
            var ext = this.getQueryTimerExtensionWebGL2();
            var available = gl2.getQueryParameter(query, gl2.QUERY_RESULT_AVAILABLE);
            var disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
            return available && !disjoint;
        }
        else {
            var ext = this.getQueryTimerExtensionWebGL1();
            var available = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_AVAILABLE_EXT);
            var disjoint = this.gl.getParameter(ext.GPU_DISJOINT_EXT);
            return available && !disjoint;
        }
    };
    GPGPUContext.prototype.pollQueryTime = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var resolveWithWarning = function () {
                console.warn('Disjoint query timer never available.');
                resolve(-1);
            };
            var queryTimerVersion = environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION');
            util.repeatedTry(function () { return _this.isQueryAvailable(query, queryTimerVersion); })
                .then(function () { return resolve(_this.getQueryTime(query, queryTimerVersion)); })
                .catch(resolveWithWarning);
        });
    };
    GPGPUContext.prototype.getQueryTime = function (query, queryTimerVersion) {
        if (queryTimerVersion === 0) {
            return null;
        }
        if (queryTimerVersion === 2) {
            var gl2 = this.gl;
            var timeElapsedNanos = gl2.getQueryParameter(query, gl2.QUERY_RESULT);
            return timeElapsedNanos / 1000000;
        }
        else {
            var ext = this.getQueryTimerExtensionWebGL1();
            var timeElapsedNanos = ext.getQueryObjectEXT(query, ext.QUERY_RESULT_EXT);
            return timeElapsedNanos / 1000000;
        }
    };
    GPGPUContext.prototype.downloadMatrixDriverSetup = function (texture) {
        this.throwIfDisposed();
        webgl_util.bindColorTextureToFramebuffer(this.gl, texture, this.framebuffer);
        if (this.autoDebugValidate) {
            webgl_util.validateFramebuffer(this.gl);
        }
    };
    GPGPUContext.prototype.downloadMatrixDriverTeardown = function () {
        if (this.outputTexture != null) {
            webgl_util.bindColorTextureToFramebuffer(this.gl, this.outputTexture, this.framebuffer);
            if (this.autoDebugValidate) {
                webgl_util.validateFramebuffer(this.gl);
            }
        }
        else {
            webgl_util.unbindColorTextureFromFramebuffer(this.gl, this.framebuffer);
        }
    };
    GPGPUContext.prototype.downloadMatrixDriver = function (texture, downloadAndDecode) {
        this.downloadMatrixDriverSetup(texture);
        var result = downloadAndDecode();
        this.downloadMatrixDriverTeardown();
        return result;
    };
    GPGPUContext.prototype.downloadMatrixDriverAsync = function (texture, downloadAndDecode) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.downloadMatrixDriverSetup(texture);
                        return [4, downloadAndDecode()];
                    case 1:
                        result = _a.sent();
                        this.downloadMatrixDriverTeardown();
                        return [2, result];
                }
            });
        });
    };
    GPGPUContext.prototype.setOutputMatrixTextureDriver = function (outputMatrixTextureMaybePacked, width, height) {
        this.throwIfDisposed();
        var gl = this.gl;
        webgl_util.bindColorTextureToFramebuffer(gl, outputMatrixTextureMaybePacked, this.framebuffer);
        if (this.autoDebugValidate) {
            webgl_util.validateFramebuffer(gl);
        }
        this.outputTexture = outputMatrixTextureMaybePacked;
        webgl_util.callAndCheck(gl, function () { return gl.viewport(0, 0, width, height); });
        webgl_util.callAndCheck(gl, function () { return gl.scissor(0, 0, width, height); });
    };
    GPGPUContext.prototype.setOutputMatrixWriteRegionDriver = function (x, y, width, height) {
        var _this = this;
        this.throwIfDisposed();
        webgl_util.callAndCheck(this.gl, function () { return _this.gl.scissor(x, y, width, height); });
    };
    GPGPUContext.prototype.throwIfDisposed = function () {
        if (this.disposed) {
            throw new Error('Attempted to use disposed GPGPUContext.');
        }
    };
    GPGPUContext.prototype.throwIfNoProgram = function () {
        if (this.program == null) {
            throw new Error('No GPU program is currently set.');
        }
    };
    return GPGPUContext;
}());
exports.GPGPUContext = GPGPUContext;

},{"../../environment":24,"../../util":26,"./gpgpu_util":56,"./tex_util":119,"./webgl_util":55}],105:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../../environment");
var util = require("../../util");
var shader_compiler = require("./shader_compiler");
var NAN_UNIFORM_NAME = 'NaN';
function shouldUploadNaNUniform() {
    return !environment_1.ENV.get('WEBGL_FLOAT_TEXTURE_ENABLED');
}
function compileProgram(gpgpu, program, inputs, output) {
    var userCode = program.userCode;
    var inputInfos = inputs.map(function (input, i) {
        var shapeInfo = {
            logicalShape: input.tensor.shape,
            texShape: input.texData.texShape
        };
        return { name: program.variableNames[i], shapeInfo: shapeInfo };
    });
    var inShapeInfos = inputInfos.map(function (x) { return x.shapeInfo; });
    var outShapeInfo = {
        logicalShape: output.tensor.shape,
        texShape: output.texData.texShape
    };
    var source = shader_compiler.makeShader(inputInfos, outShapeInfo, userCode, program.supportsBroadcasting === true);
    var webGLProgram = gpgpu.createProgram(source);
    var uniformLocations = {};
    for (var i = 0; i < program.variableNames.length; i++) {
        var uniformName = program.variableNames[i];
        uniformLocations[uniformName] =
            gpgpu.getUniformLocation(webGLProgram, uniformName);
    }
    if (shouldUploadNaNUniform()) {
        var throwIfNaNUniformIsNotUsed = false;
        uniformLocations[NAN_UNIFORM_NAME] = gpgpu.getUniformLocation(webGLProgram, NAN_UNIFORM_NAME, throwIfNaNUniformIsNotUsed);
    }
    return {
        program: program,
        source: source,
        webGLProgram: webGLProgram,
        uniformLocations: uniformLocations,
        gpgpu: gpgpu,
        inShapeInfos: inShapeInfos,
        outShapeInfo: outShapeInfo
    };
}
exports.compileProgram = compileProgram;
function validateBinaryAndProgram(shapeInfos, inputs) {
    if (shapeInfos.length !== inputs.length) {
        throw Error("Binary was compiled with " + shapeInfos.length + " inputs, but " +
            ("was executed with " + inputs.length + " inputs"));
    }
    shapeInfos.forEach(function (s, i) {
        var shapeA = s.logicalShape;
        var texShapeA = s.texShape;
        var shapeB = inputs[i].tensor.shape;
        var texShapeB = inputs[i].texData.texShape;
        if (!util.arraysEqual(shapeA, shapeB)) {
            throw Error("Binary was compiled with different shapes than " +
                ("the current args. Shapes " + shapeA + " and " + shapeB + " must match"));
        }
        if (!util.arraysEqual(texShapeA, texShapeB)) {
            throw Error("Binary was compiled with different texture shapes than the" +
                (" current args. Shape " + texShapeA + " and " + texShapeB + " must match"));
        }
    });
}
function runProgram(binary, inputs, output, customSetup) {
    validateBinaryAndProgram(binary.inShapeInfos, inputs);
    validateBinaryAndProgram([binary.outShapeInfo], [output]);
    var outTex = output.texData.texture;
    var outTexShape = output.texData.texShape;
    var gpgpu = binary.gpgpu;
    gpgpu.setOutputMatrixTexture(outTex, outTexShape[0], outTexShape[1]);
    gpgpu.setProgram(binary.webGLProgram);
    inputs.forEach(function (input, i) {
        var tex = input.texData.texture;
        var variableName = binary.program.variableNames[i];
        var variableUniformLocation = binary.uniformLocations[variableName];
        gpgpu.setInputMatrixTexture(tex, variableUniformLocation, i);
    });
    if (shouldUploadNaNUniform()) {
        gpgpu.gl.uniform1f(binary.uniformLocations[NAN_UNIFORM_NAME], NaN);
    }
    if (customSetup != null) {
        customSetup(gpgpu, binary.webGLProgram);
    }
    gpgpu.executeProgram();
}
exports.runProgram = runProgram;
function makeShaderKey(program, inputs, output) {
    var keyInputs = '';
    inputs.concat(output).forEach(function (x) {
        keyInputs += x.tensor.shape + "_" + x.texData.texShape;
    });
    var keyUserCode = program.userCode;
    var keyBroadcast = (program.supportsBroadcasting === true).toString();
    var key = program.constructor.name;
    key += '_' + keyBroadcast + '_' + keyInputs + '_' + keyUserCode;
    return key;
}
exports.makeShaderKey = makeShaderKey;

},{"../../environment":24,"../../util":26,"./shader_compiler":131}],106:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shader_compiler_1 = require("./shader_compiler");
var WhereProgram = (function () {
    function WhereProgram(cRank, shape, rank) {
        this.variableNames = ['c', 'a', 'b'];
        this.outputShape = shape;
        var cCoords;
        var abCoords;
        if (rank > 4) {
            throw Error("Where for rank " + rank + " is not yet supported");
        }
        if (rank === 1) {
            abCoords = "resRC";
            cCoords = "resRC";
        }
        else {
            var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
            var cCoordVars = [];
            var abCoordVars = [];
            for (var i = 0; i < shape.length; i++) {
                abCoordVars.push("" + currentCoords[i]);
                if (i < cRank) {
                    cCoordVars.push("" + currentCoords[i]);
                }
            }
            cCoords = cCoordVars.join();
            abCoords = abCoordVars.join();
        }
        var dtype = shader_compiler_1.getCoordsDataType(rank);
        this.userCode = "\n      void main() {\n        " + dtype + " resRC = getOutputCoords();\n        float cVal = getC(" + cCoords + ");\n        if (cVal >= 1.0) {\n          setOutput(getA(" + abCoords + "));\n        } else {\n          setOutput(getB(" + abCoords + "));\n        }\n      }\n    ";
    }
    return WhereProgram;
}());
exports.WhereProgram = WhereProgram;

},{"./shader_compiler":131}],107:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LRNProgram = (function () {
    function LRNProgram(xShape, radius, bias, alpha, beta) {
        this.variableNames = ['x'];
        this.outputShape = [];
        var rad = radius;
        var maxD = xShape[3] - 1;
        this.outputShape = xShape;
        var powOperator;
        var basis = "float(" + bias + ") + float(" + alpha + ") * sum";
        if (beta === 0.5) {
            powOperator = "inversesqrt(" + basis + ")";
        }
        else if (beta === 1.0) {
            powOperator = "1.0/(" + basis + ")";
        }
        else {
            powOperator = "exp(log(" + basis + ") * float(-" + beta + "));";
        }
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int r = coords[1];\n        int c = coords[2];\n        int d = coords[3];\n        float x = getX(b, r, c, d);\n        float sum = 0.0;\n        for (int j = -" + rad + "; j <= " + rad + "; j++) {\n          int idx = d + j;\n          if (idx >= 0 && idx <=  " + maxD + ") {\n            float z = getX(b, r, c, idx);\n            sum += z * z;\n          }\n        }\n        float val = x * " + powOperator + ";\n        setOutput(val);\n      }\n    ";
    }
    return LRNProgram;
}());
exports.LRNProgram = LRNProgram;

},{}],110:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxPool2DBackpropProgram = (function () {
    function MaxPool2DBackpropProgram(convInfo) {
        this.variableNames = ['dy', 'maxPos'];
        this.outputShape = convInfo.inShape;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        var lastIndex = filterHeight * filterWidth - 1;
        this.userCode = "\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n\n        ivec2 dyRCCorner = coords.yz - pads;\n        int dyRCorner = dyRCCorner.x;\n        int dyCCorner = dyRCCorner.y;\n\n        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).\n        // ? = to be determined. : = across all values in that axis.\n        float dotProd = 0.0;\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          float dyR = float(dyRCorner + wR) / " + strideHeight + ".0;\n\n          if (dyR < 0.0 || dyR >= " + convInfo.outHeight + ".0 || fract(dyR) > 0.0) {\n            continue;\n          }\n          int idyR = int(dyR);\n\n          for (int wC = 0; wC < " + filterWidth + "; wC++) {\n            float dyC = float(dyCCorner + wC) / " + strideWidth + ".0;\n\n            if (dyC < 0.0 || dyC >= " + convInfo.outWidth + ".0 ||\n                fract(dyC) > 0.0) {\n              continue;\n            }\n            int idyC = int(dyC);\n\n            float dyValue = getDy(b, idyR, idyC, d);\n            int maxPosValue = " + lastIndex + " - int(getMaxPos(b, idyR, idyC, d));\n\n            // Get the current value, check it against the value from the\n            // position matrix.\n            int curPosValue = wR * " + filterWidth + " + wC;\n            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);\n\n            dotProd += dyValue * mask;\n          }\n        }\n        setOutput(dotProd);\n      }\n    ";
    }
    return MaxPool2DBackpropProgram;
}());
exports.MaxPool2DBackpropProgram = MaxPool2DBackpropProgram;

},{}],108:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatMulProgram = (function () {
    function MatMulProgram(aShape, bShape, transposeA, transposeB) {
        if (transposeA === void 0) { transposeA = false; }
        if (transposeB === void 0) { transposeB = false; }
        this.variableNames = ['matrixA', 'matrixB'];
        var outerShapeA = transposeA ? aShape[1] : aShape[0];
        var outerShapeB = transposeB ? bShape[0] : bShape[1];
        var sharedDim = transposeA ? aShape[0] : aShape[1];
        this.outputShape = [outerShapeA, outerShapeB];
        var aSnippetFromOffset = function (vec4Offset, indexVar) {
            return transposeA ? indexVar + " + " + vec4Offset + ", aRow" :
                "aRow, " + indexVar + " + " + vec4Offset;
        };
        var bSnippetFromOffset = function (vec4Offset, indexVar) {
            return transposeB ? "bCol, " + indexVar + " + " + vec4Offset :
                indexVar + " + " + vec4Offset + ", bCol";
        };
        var sharedDimNearestVec4 = Math.floor(sharedDim / 4) * 4;
        var sharedDimVec4Remainder = sharedDim % 4;
        this.userCode = " float dotARowBCol(int aRow, int bCol) {\n      float result = 0.0;\n      for (int i = 0; i < " + sharedDimNearestVec4 + "; i += 4) {\n        vec4 a = vec4(\n          getMatrixA(" + aSnippetFromOffset(0, 'i') + "),\n          getMatrixA(" + aSnippetFromOffset(1, 'i') + "),\n          getMatrixA(" + aSnippetFromOffset(2, 'i') + "),\n          getMatrixA(" + aSnippetFromOffset(3, 'i') + ")\n        );\n        vec4 b = vec4(\n          getMatrixB(" + bSnippetFromOffset(0, 'i') + "),\n          getMatrixB(" + bSnippetFromOffset(1, 'i') + "),\n          getMatrixB(" + bSnippetFromOffset(2, 'i') + "),\n          getMatrixB(" + bSnippetFromOffset(3, 'i') + ")\n        );\n\n        result += dot(a, b);\n      }\n\n      if (" + (sharedDimVec4Remainder === 1) + ") {\n        result += getMatrixA(" + aSnippetFromOffset(0, sharedDimNearestVec4) + ") *\n          getMatrixB(" + bSnippetFromOffset(0, sharedDimNearestVec4) + ");\n      } else if (" + (sharedDimVec4Remainder === 2) + ") {\n        vec2 a = vec2(\n          getMatrixA(" + aSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixA(" + aSnippetFromOffset(1, sharedDimNearestVec4) + ")\n        );\n        vec2 b = vec2(\n          getMatrixB(" + bSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixB(" + bSnippetFromOffset(1, sharedDimNearestVec4) + ")\n        );\n        result += dot(a, b);\n      } else if (" + (sharedDimVec4Remainder === 3) + ") {\n        vec3 a = vec3(\n          getMatrixA(" + aSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixA(" + aSnippetFromOffset(1, sharedDimNearestVec4) + "),\n          getMatrixA(" + aSnippetFromOffset(2, sharedDimNearestVec4) + ")\n        );\n        vec3 b = vec3(\n          getMatrixB(" + bSnippetFromOffset(0, sharedDimNearestVec4) + "),\n          getMatrixB(" + bSnippetFromOffset(1, sharedDimNearestVec4) + "),\n          getMatrixB(" + bSnippetFromOffset(2, sharedDimNearestVec4) + ")\n        );\n        result += dot(a, b);\n      }\n\n      return result;\n    }\n\n    void main() {\n      ivec2 resRC = getOutputCoords();\n      setOutput(dotARowBCol(resRC.x, resRC.y));\n    }\n    ";
    }
    return MatMulProgram;
}());
exports.MatMulProgram = MatMulProgram;

},{}],109:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MultinomialProgram = (function () {
    function MultinomialProgram(batchSize, numOutcomes, numSamples) {
        this.variableNames = ['probs'];
        this.outputShape = [batchSize, numSamples];
        this.userCode = "\n      uniform float seed;\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n\n        float r = random(seed);\n        float cdf = 0.0;\n\n        for (int i = 0; i < " + (numOutcomes - 1) + "; i++) {\n          cdf += getProbs(batch, i);\n\n          if (r < cdf) {\n            setOutput(float(i));\n            return;\n          }\n        }\n\n        // If no other event happened, last event happened.\n        setOutput(float(" + (numOutcomes - 1) + "));\n      }\n    ";
    }
    MultinomialProgram.prototype.getCustomSetupFunc = function (seed) {
        var _this = this;
        return function (gpgpu, webGLProgram) {
            if (_this.seedLoc == null) {
                _this.seedLoc = gpgpu.getUniformLocation(webGLProgram, 'seed');
            }
            gpgpu.gl.uniform1f(_this.seedLoc, seed);
        };
    };
    return MultinomialProgram;
}());
exports.MultinomialProgram = MultinomialProgram;

},{}],111:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OneHotProgram = (function () {
    function OneHotProgram(numIndices, depth, onValue, offValue) {
        this.variableNames = ['indices'];
        this.outputShape = [numIndices, depth];
        this.userCode = "\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int index = round(getIndices(coords.x));\n        setOutput(mix(float(" + offValue + "), float(" + onValue + "),\n                      float(index == coords.y)));\n      }\n    ";
    }
    return OneHotProgram;
}());
exports.OneHotProgram = OneHotProgram;

},{}],112:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shader_compiler_1 = require("./shader_compiler");
var PadProgram = (function () {
    function PadProgram(xShape, paddings, constantValue) {
        this.variableNames = ['x'];
        this.outputShape = paddings.map(function (p, i) { return p[0] + xShape[i] + p[1]; });
        var rank = xShape.length;
        var type = shader_compiler_1.getCoordsDataType(rank);
        var start = paddings.map(function (p) { return p[0]; }).join(',');
        var end = paddings.map(function (p, i) { return p[0] + xShape[i]; }).join(',');
        var unpackedCoords = ['coords[0]', 'coords[1]', 'coords[2]', 'coords[3]'].slice(0, rank);
        if (rank === 1) {
            this.userCode = "\n        int start = " + start + ";\n        int end = " + end + ";\n\n        void main() {\n          int outC = getOutputCoords();\n          if (outC < start || outC >= end) {\n            setOutput(float(" + constantValue + "));\n          } else {\n            setOutput(getX(outC - start));\n          }\n        }\n      ";
            return;
        }
        this.userCode = "\n      " + type + " start = " + type + "(" + start + ");\n      " + type + " end = " + type + "(" + end + ");\n\n      void main() {\n        " + type + " outC = getOutputCoords();\n        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {\n          setOutput(float(" + constantValue + "));\n        } else {\n          " + type + " coords = outC - start;\n          setOutput(getX(" + unpackedCoords + "));\n        }\n      }\n    ";
    }
    return PadProgram;
}());
exports.PadProgram = PadProgram;

},{"./shader_compiler":131}],114:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pool2DProgram = (function () {
    function Pool2DProgram(convInfo, poolType, computePositions) {
        this.variableNames = ['x'];
        if (poolType === 'avg' && computePositions) {
            throw new Error('Cannot compute positions for average pool.');
        }
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        this.outputShape = convInfo.outShape;
        var isAvgPool = poolType === 'avg';
        var initializationValue = '0.0';
        if (!isAvgPool) {
            initializationValue = '-1.0 / 0.0';
        }
        if (computePositions) {
            var compareOp_1 = '>=';
            this.userCode = "\n        const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n        const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n\n        void main() {\n          ivec4 coords = getOutputCoords();\n          int batch = coords[0];\n          int d = coords[3];\n\n          ivec2 xRCCorner = coords.yz * strides - pads;\n          int xRCorner = xRCCorner.x;\n          int xCCorner = xRCCorner.y;\n\n          // max/min x(?, ?, d) to get y(yR, yC, d).\n          // ? = to be determined\n          float minMaxValue = 0.0;\n          float minMaxValueFound = 0.0;\n          int minMaxPosition = 0;\n          float avgValue = 0.0;\n\n          for (int wR = 0; wR < " + filterHeight + "; wR++) {\n            int xR = xRCorner + wR;\n\n            if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n              continue;\n            }\n\n            for (int wC = 0; wC < " + filterWidth + "; wC++) {\n              int xC = xCCorner + wC;\n\n              if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n                continue;\n              }\n\n              float value = getX(batch, xR, xC, d);\n\n              // If a min / max value has already been found, use it. If not,\n              // use the current value.\n              float currMinMaxValue = mix(\n                  value, minMaxValue, minMaxValueFound);\n              if (value " + compareOp_1 + " currMinMaxValue) {\n                minMaxValue = value;\n                minMaxValueFound = 1.0;\n                minMaxPosition = wR * " + filterWidth + " + wC;\n              }\n            }\n          }\n          setOutput(float(minMaxPosition));\n        }\n      ";
            return;
        }
        var compareOp = 'max';
        var returnValue = poolType + "(" + poolType + "(" + poolType + "(" +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (poolType === 'avg') {
            returnValue = "avgValue / count";
        }
        var filterWidthNearestVec4 = Math.floor(filterWidth / 4) * 4;
        var filterWidthVec4Remainder = filterWidth % 4;
        var updateSnippet = "\n      if (" + isAvgPool + ") {\n        avgValue += dot(values, ones);\n      } else {\n        minMaxValue = " + compareOp + "(values, minMaxValue);\n      }\n    ";
        this.userCode = "\n      const ivec2 strides = ivec2(" + strideHeight + ", " + strideWidth + ");\n      const ivec2 pads = ivec2(" + padTop + ", " + padLeft + ");\n      const float initializationValue = " + initializationValue + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float count = 0.0;\n\n      float getValue(int batch, int xR, int xC, int d) {\n        if (xC < 0 || xC >= " + convInfo.inWidth + ") {\n          return initializationValue;\n        }\n        count += 1.0;\n        return getX(batch, xR, xC, d);\n      }\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int batch = coords[0];\n        int d = coords[3];\n\n        ivec2 xRCCorner = coords.yz * strides - pads;\n        int xRCorner = xRCCorner.x;\n        int xCCorner = xRCCorner.y;\n\n        // max/min x(?, ?, d) to get y(yR, yC, d).\n        // ? = to be determined\n        vec4 minMaxValue = vec4(" + initializationValue + ");\n        float avgValue = 0.0;\n        count = 0.0;\n\n        for (int wR = 0; wR < " + filterHeight + "; wR++) {\n          int xR = xRCorner + wR;\n\n          if (xR < 0 || xR >= " + convInfo.inHeight + ") {\n            continue;\n          }\n\n          for (int wC = 0; wC < " + filterWidthNearestVec4 + "; wC += 4) {\n            int xC = xCCorner + wC;\n\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              getValue(batch, xR, xC + 3, d)\n            );\n\n            " + updateSnippet + "\n          }\n\n          int xC = xCCorner + " + filterWidthNearestVec4 + ";\n          if (" + (filterWidthVec4Remainder === 1) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              initializationValue,\n              initializationValue,\n              initializationValue\n            );\n\n            " + updateSnippet + "\n          } else if (" + (filterWidthVec4Remainder === 2) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              initializationValue,\n              initializationValue\n            );\n\n            " + updateSnippet + "\n          } else if (" + (filterWidthVec4Remainder === 3) + ") {\n            vec4 values = vec4(\n              getValue(batch, xR, xC, d),\n              getValue(batch, xR, xC + 1, d),\n              getValue(batch, xR, xC + 2, d),\n              initializationValue\n            );\n\n            " + updateSnippet + "\n          }\n        }\n        setOutput(" + returnValue + ");\n      }\n    ";
    }
    return Pool2DProgram;
}());
exports.Pool2DProgram = Pool2DProgram;

},{}],113:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReduceProgram = (function () {
    function ReduceProgram(reduceInfo, reduceType) {
        this.variableNames = ['x'];
        var windowSize = reduceInfo.windowSize;
        var batchSize = reduceInfo.batchSize;
        var inSize = reduceInfo.inSize;
        var outSize = Math.ceil(inSize / windowSize);
        this.outputShape = [batchSize, outSize];
        var isReduceSum = reduceType === 'sum';
        var initializationValue = '0.0';
        if (!isReduceSum) {
            if (reduceType === 'min') {
                initializationValue = '1.0 / 0.0';
            }
            else {
                initializationValue = '-1.0 / 0.0';
            }
        }
        var compareOp = reduceType === 'min' ? 'min' : 'max';
        var returnValue = reduceType + "(" + reduceType + "(" + reduceType + "(" +
            'minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])';
        if (reduceType === 'sum') {
            returnValue = "sumValue";
        }
        var windowSizeNearestVec4 = Math.floor(windowSize / 4) * 4;
        var windowSizeVec4Remainder = windowSize % 4;
        var updateSnippet = "\n      if (" + isReduceSum + ") {\n        sumValue += dot(values, ones);\n      } else {\n        minMaxValue = " + compareOp + "(values, minMaxValue);\n      }\n    ";
        var checkOutOfBounds = '';
        if (inSize % windowSize > 0) {
            checkOutOfBounds = "\n        if (inIdx < 0 || inIdx >= " + inSize + ") {\n          return initializationValue;\n        }\n      ";
        }
        this.userCode = "\n      const float initializationValue = " + initializationValue + ";\n      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);\n\n      float getValue(int batch, int inIdx) {\n        " + checkOutOfBounds + "\n        return getX(batch, inIdx);\n      }\n\n      void main() {\n        ivec2 coords = getOutputCoords();\n        int batch = coords[0];\n        int outIdx = coords[1];\n        int inOffset = outIdx * " + windowSize + ";\n\n        vec4 minMaxValue = vec4(" + initializationValue + ");\n        float sumValue = 0.0;\n\n        for (int i = 0; i < " + windowSizeNearestVec4 + "; i += 4) {\n          int inIdx = inOffset + i;\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            getValue(batch, inIdx + 3)\n          );\n\n          " + updateSnippet + "\n        }\n\n        int inIdx = inOffset + " + windowSizeNearestVec4 + ";\n        if (" + (windowSizeVec4Remainder === 1) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            initializationValue,\n            initializationValue,\n            initializationValue\n          );\n          " + updateSnippet + "\n        } else if (" + (windowSizeVec4Remainder === 2) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            initializationValue,\n            initializationValue\n          );\n          " + updateSnippet + "\n        } else if (" + (windowSizeVec4Remainder === 3) + ") {\n          vec4 values = vec4(\n            getValue(batch, inIdx),\n            getValue(batch, inIdx + 1),\n            getValue(batch, inIdx + 2),\n            initializationValue\n          );\n          " + updateSnippet + "\n        }\n        setOutput(" + returnValue + ");\n      }\n    ";
    }
    return ReduceProgram;
}());
exports.ReduceProgram = ReduceProgram;

},{}],118:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResizeBilinearBackpropProgram = (function () {
    function ResizeBilinearBackpropProgram(dy, x, alignCorners) {
        this.variableNames = ['dy'];
        this.outputShape = [];
        this.outputShape = x.shape;
        var _a = x.shape, xHeight = _a[1], xWidth = _a[2];
        var _b = dy.shape, yHeight = _b[1], yWidth = _b[2];
        var effectiveXSize = [
            (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
            (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
        ];
        var effectiveYSize = [
            (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
            (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
        ];
        var heightScale = effectiveXSize[0] / effectiveYSize[0];
        var widthScale = effectiveXSize[1] / effectiveYSize[1];
        var invHeightScale = 1 / heightScale;
        var invWidthScale = 1 / widthScale;
        var winHeight = (Math.ceil(invHeightScale) * 2) + 2;
        var winWidth = (Math.ceil(invWidthScale) * 2) + 2;
        this.userCode = "\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        int r = coords[1];\n        int c = coords[2];\n\n        float accumulator = 0.0;\n\n        const float heightScale = float(" + heightScale + ");\n        const float widthScale = float(" + widthScale + ");\n\n        const float invHeightScale = float(" + invHeightScale + ");\n        const float invWidthScale = float(" + invWidthScale + ");\n\n        const int winHeight = int(" + winHeight + ");\n        const int winWidth = int(" + winWidth + ");\n\n        // Compute bounds for where in dy we will look\n        float startRLerp = floor(float(r) * invHeightScale);\n        int startDyR = int(startRLerp - float(winHeight / 2));\n\n        float startCLerp = floor(float(c) * invWidthScale);\n        int startDyC = int(startCLerp - float(winWidth / 2));\n\n        // Loop over dy\n        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {\n          int dyR = dyROffset + startDyR;\n\n          // Guard against the window exceeding the bounds of dy\n          if (dyR < 0 || dyR >= " + yHeight + ") {\n            continue;\n          }\n\n          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {\n            int dyC = dyCOffset + startDyC;\n\n            // Guard against the window exceeding the bounds of dy\n            if (dyC < 0 || dyC >= " + yWidth + ") {\n              continue;\n            }\n\n            float dxR = float(dyR) * heightScale;\n            int topDxRIndex = int(floor(dxR));\n            int bottomDxRIndex = int(min(ceil(dxR), " + (xHeight - 1) + ".0));\n            float dxRLerp = dxR - float(topDxRIndex);\n            float inverseDxRLerp = 1.0 - dxRLerp;\n\n            float dxC = float(dyC) * widthScale;\n            int leftDxCIndex = int(floor(dxC));\n            int rightDxCIndex = int(min(ceil(dxC), " + (xWidth - 1) + ".0));\n            float dxCLerp = dxC - float(leftDxCIndex);\n            float inverseDxCLerp = 1.0 - dxCLerp;\n\n            if (r == topDxRIndex && c == leftDxCIndex) {\n              // topLeft\n              accumulator +=\n                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;\n            }\n\n            if (r == topDxRIndex && c == rightDxCIndex) {\n              // topRight\n              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == leftDxCIndex) {\n              // bottomLeft\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;\n            }\n\n            if (r == bottomDxRIndex && c == rightDxCIndex) {\n              // bottomRight\n              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;\n            }\n          }\n        }\n        // End loop over dy\n\n        setOutput(accumulator);\n      }\n    ";
    }
    return ResizeBilinearBackpropProgram;
}());
exports.ResizeBilinearBackpropProgram = ResizeBilinearBackpropProgram;

},{}],115:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResizeBilinearProgram = (function () {
    function ResizeBilinearProgram(inputShape, newHeight, newWidth, alignCorners) {
        this.variableNames = ['A'];
        this.outputShape = [];
        var batch = inputShape[0], oldHeight = inputShape[1], oldWidth = inputShape[2], depth = inputShape[3];
        this.outputShape = [batch, newHeight, newWidth, depth];
        var effectiveInSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        var effectiveOutSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + effectiveInSize[0] / effectiveOutSize[0] + ",\n          " + effectiveInSize[1] / effectiveOutSize[1] + ");\n      const vec2 inputShapeRC = vec2(" + oldHeight + ".0, " + oldWidth + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the four integer indices.\n        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);\n        ivec2 sourceCeilRC = ivec2(\n          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));\n\n        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);\n        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);\n        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);\n        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);\n\n        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);\n\n        float top = topLeft + (topRight - topLeft) * fracRC.y;\n        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;\n        float newValue = top + (bottom - top) * fracRC.x;\n\n        setOutput(newValue);\n      }\n    ";
    }
    return ResizeBilinearProgram;
}());
exports.ResizeBilinearProgram = ResizeBilinearProgram;

},{}],116:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResizeNearestNeighborProgram = (function () {
    function ResizeNearestNeighborProgram(inputShape, newHeight, newWidth, alignCorners) {
        this.variableNames = ['A'];
        this.outputShape = [];
        var batch = inputShape[0], oldHeight = inputShape[1], oldWidth = inputShape[2], depth = inputShape[3];
        this.outputShape = [batch, newHeight, newWidth, depth];
        var effectiveInSize = alignCorners ? [oldHeight - 1, oldWidth - 1] : [oldHeight, oldWidth];
        var effectiveOutSize = alignCorners ? [newHeight - 1, newWidth - 1] : [newHeight, newWidth];
        var roundBase = alignCorners ? '0.5' : '0.0';
        this.userCode = "\n      const vec2 effectiveInputOverOutputRatioRC = vec2(\n          " + effectiveInSize[0] / effectiveOutSize[0] + ",\n          " + effectiveInSize[1] / effectiveOutSize[1] + ");\n      const vec2 inputShapeRC = vec2(" + oldHeight + ".0, " + oldWidth + ".0);\n\n      void main() {\n        ivec4 coords = getOutputCoords();\n        int b = coords[0];\n        int d = coords[3];\n        ivec2 yRC = coords.yz;\n\n        // Fractional source index.\n        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;\n\n        // Compute the coordinators of nearest neighbor point.\n        ivec2 sourceNearestRC = ivec2(\n          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + " + roundBase + ")));\n\n        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);\n\n        setOutput(newValue);\n      }\n    ";
    }
    return ResizeNearestNeighborProgram;
}());
exports.ResizeNearestNeighborProgram = ResizeNearestNeighborProgram;

},{}],117:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shader_compiler_1 = require("./shader_compiler");
var ReverseProgram = (function () {
    function ReverseProgram(xShape, axis) {
        this.variableNames = ['x'];
        var rank = xShape.length;
        if (rank > 4) {
            throw new Error("WebGL backend: Reverse of rank-" + rank + " tensor is not yet supported");
        }
        this.outputShape = xShape;
        if (rank === 1) {
            this.userCode = "\n        void main() {\n          int coord = getOutputCoords();\n          setOutput(getX(" + xShape[0] + " - coord - 1));\n        }\n      ";
            return;
        }
        var getInCoord = function (i) {
            if (axis.indexOf(i) !== -1 && xShape[i] !== 1) {
                return xShape[i] + " - coords[" + i + "] - 1";
            }
            return "coords[" + i + "]";
        };
        var inCoords = xShape.map(function (_, i) { return getInCoord(i); }).join(',');
        var type = shader_compiler_1.getCoordsDataType(rank);
        this.userCode = "\n      void main() {\n        " + type + " coords = getOutputCoords();\n        setOutput(getX(" + inCoords + "));\n      }\n    ";
    }
    return ReverseProgram;
}());
exports.ReverseProgram = ReverseProgram;

},{"./shader_compiler":131}],121:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shader_compiler_1 = require("./shader_compiler");
var SliceProgram = (function () {
    function SliceProgram(destSize) {
        this.variableNames = ['source'];
        this.outputShape = destSize;
        this.rank = destSize.length;
        var dtype = shader_compiler_1.getCoordsDataType(this.rank);
        var sourceCoords = getCoords(this.rank);
        this.userCode = "\n      uniform " + dtype + " start;\n\n      void main() {\n        " + dtype + " sourceLoc = start + getOutputCoords();\n        setOutput(getSource(" + sourceCoords + "));\n      }\n    ";
    }
    SliceProgram.prototype.getCustomSetupFunc = function (start) {
        var _this = this;
        if (start.length !== this.rank) {
            throw Error("The rank (" + this.rank + ") of the program must match the " +
                ("length of start (" + start.length + ")"));
        }
        return function (gpgpu, webGLProgram) {
            if (_this.startLoc == null) {
                _this.startLoc = gpgpu.getUniformLocationNoThrow(webGLProgram, 'start');
                if (_this.startLoc == null) {
                    return;
                }
            }
            if (_this.rank === 1) {
                gpgpu.gl.uniform1i(_this.startLoc, start[0]);
            }
            else if (_this.rank === 2) {
                gpgpu.gl.uniform2i(_this.startLoc, start[0], start[1]);
            }
            else if (_this.rank === 3) {
                gpgpu.gl.uniform3i(_this.startLoc, start[0], start[1], start[2]);
            }
            else if (_this.rank === 4) {
                gpgpu.gl.uniform4i(_this.startLoc, start[0], start[1], start[2], start[3]);
            }
            else {
                throw Error("Slicing for rank " + _this.rank + " is not yet supported");
            }
        };
    };
    return SliceProgram;
}());
exports.SliceProgram = SliceProgram;
function getCoords(rank) {
    if (rank === 1) {
        return 'sourceLoc';
    }
    else if (rank === 2) {
        return 'sourceLoc.x, sourceLoc.y';
    }
    else if (rank === 3) {
        return 'sourceLoc.x, sourceLoc.y, sourceLoc.z';
    }
    else if (rank === 4) {
        return 'sourceLoc.x, sourceLoc.y, sourceLoc.z, sourceLoc.w';
    }
    else {
        throw Error("Slicing for rank " + rank + " is not yet supported");
    }
}

},{"./shader_compiler":131}],123:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tex_util_1 = require("./tex_util");
var TextureManager = (function () {
    function TextureManager(gpgpu) {
        this.gpgpu = gpgpu;
        this.numUsedTextures = 0;
        this.numFreeTextures = 0;
        this.freeTextures = {};
        this.logEnabled = false;
        this.allocatedTextures = [];
        this.usedTextureCount = {};
    }
    TextureManager.prototype.acquireTexture = function (shapeRC, texType) {
        if (texType === void 0) { texType = tex_util_1.TextureType.FLOAT; }
        var shapeKey = getKeyFromTextureShape(shapeRC, texType);
        if (!(shapeKey in this.freeTextures)) {
            this.freeTextures[shapeKey] = [];
        }
        if (!(shapeKey in this.usedTextureCount)) {
            this.usedTextureCount[shapeKey] = 0;
        }
        this.usedTextureCount[shapeKey]++;
        if (this.freeTextures[shapeKey].length > 0) {
            this.numFreeTextures--;
            this.numUsedTextures++;
            this.log();
            return this.freeTextures[shapeKey].shift();
        }
        this.numUsedTextures++;
        this.log();
        var newTexture = this.gpgpu.createMatrixTexture(shapeRC[0], shapeRC[1]);
        this.allocatedTextures.push(newTexture);
        return newTexture;
    };
    TextureManager.prototype.releaseTexture = function (texture, shape, texType) {
        if (texType === void 0) { texType = tex_util_1.TextureType.FLOAT; }
        var shapeKey = getKeyFromTextureShape(shape, texType);
        if (!(shapeKey in this.freeTextures)) {
            this.freeTextures[shapeKey] = [];
        }
        this.freeTextures[shapeKey].push(texture);
        this.numFreeTextures++;
        this.numUsedTextures--;
        this.usedTextureCount[shapeKey]--;
        this.log();
    };
    TextureManager.prototype.log = function () {
        if (!this.logEnabled) {
            return;
        }
        var total = this.numFreeTextures + this.numUsedTextures;
        console.log('Free/Used', this.numFreeTextures + " / " + this.numUsedTextures, "(" + total + ")");
    };
    TextureManager.prototype.getNumUsedTextures = function () {
        return this.numUsedTextures;
    };
    TextureManager.prototype.getNumFreeTextures = function () {
        return this.numFreeTextures;
    };
    TextureManager.prototype.dispose = function () {
        var _this = this;
        if (this.allocatedTextures == null) {
            return;
        }
        this.allocatedTextures.forEach(function (texture) {
            _this.gpgpu.deleteMatrixTexture(texture);
        });
        this.freeTextures = null;
        this.allocatedTextures = null;
        this.usedTextureCount = null;
        this.numUsedTextures = 0;
        this.numFreeTextures = 0;
    };
    return TextureManager;
}());
exports.TextureManager = TextureManager;
function getKeyFromTextureShape(shapeRowsCol, texType) {
    return shapeRowsCol[0] + "_" + shapeRowsCol[1] + "_" + texType;
}

},{"./tex_util":119}],120:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shader_compiler_1 = require("./shader_compiler");
var TileProgram = (function () {
    function TileProgram(aShape, reps) {
        this.variableNames = ['A'];
        var outputShape = new Array(aShape.length);
        for (var i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[i] * reps[i];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        var dtype = shader_compiler_1.getCoordsDataType(this.rank);
        var sourceCoords = getSourceCoords(aShape);
        this.userCode = "\n      void main() {\n        " + dtype + " resRC = getOutputCoords();\n        setOutput(getA(" + sourceCoords + "));\n      }\n    ";
    }
    return TileProgram;
}());
exports.TileProgram = TileProgram;
function getSourceCoords(aShape) {
    var rank = aShape.length;
    if (rank > 4) {
        throw Error("Tile for rank " + rank + " is not yet supported");
    }
    if (rank === 1) {
        return "imod(resRC, " + aShape[0] + ")";
    }
    var currentCoords = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
    var sourceCoords = [];
    for (var i = 0; i < aShape.length; i++) {
        sourceCoords.push("imod(" + currentCoords[i] + ", " + aShape[i] + ")");
    }
    return sourceCoords.join();
}

},{"./shader_compiler":131}],124:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shader_compiler_1 = require("./shader_compiler");
var TransposeProgram = (function () {
    function TransposeProgram(aShape, newDim) {
        this.variableNames = ['A'];
        var outputShape = new Array(aShape.length);
        for (var i = 0; i < outputShape.length; i++) {
            outputShape[i] = aShape[newDim[i]];
        }
        this.outputShape = outputShape;
        this.rank = outputShape.length;
        var dtype = shader_compiler_1.getCoordsDataType(this.rank);
        var switched = getSwitchedCoords(newDim);
        this.userCode = "\n    void main() {\n      " + dtype + " resRC = getOutputCoords();\n      setOutput(getA(" + switched + "));\n    }\n    ";
    }
    return TransposeProgram;
}());
exports.TransposeProgram = TransposeProgram;
function getSwitchedCoords(newDim) {
    var rank = newDim.length;
    if (rank > 4) {
        throw Error("Transpose for rank " + rank + " is not yet supported");
    }
    var originalOrder = ['resRC.x', 'resRC.y', 'resRC.z', 'resRC.w'];
    var switchedCoords = new Array(rank);
    for (var i = 0; i < newDim.length; i++) {
        switchedCoords[newDim[i]] = originalOrder[i];
    }
    return switchedCoords.join();
}

},{"./shader_compiler":131}],63:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERF_P = 0.3275911;
exports.ERF_A1 = 0.254829592;
exports.ERF_A2 = -0.284496736;
exports.ERF_A3 = 1.421413741;
exports.ERF_A4 = -1.453152027;
exports.ERF_A5 = 1.061405429;

},{}],122:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var erf_util = require("../../ops/erf_util");
var selu_util = require("../../ops/selu_util");
var UnaryOpProgram = (function () {
    function UnaryOpProgram(aShape, opSnippet) {
        this.variableNames = ['A'];
        this.outputShape = aShape;
        this.userCode = "\n      float unaryOperation(float x) {\n        " + opSnippet + "\n      }\n\n      void main() {\n        float x = getAAtOutCoords();\n        float y = unaryOperation(x);\n\n        setOutput(y);\n      }\n    ";
    }
    return UnaryOpProgram;
}());
exports.UnaryOpProgram = UnaryOpProgram;
var CHECK_NAN_SNIPPET = "if (isNaN(x)) return x;";
exports.ABS = "return abs(x);";
exports.RELU = CHECK_NAN_SNIPPET + "\n  return (x < 0.0) ? 0.0 : x;\n";
exports.ELU = "return (x >= 0.0) ? x : (exp(x) - 1.0);";
exports.SELU = "\n  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.\n  // see: https://arxiv.org/abs/1706.02515\n  float scaleAlpha = " + selu_util.SELU_SCALEALPHA + ";\n  float scale = " + selu_util.SELU_SCALE + ";\n  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);\n";
function STEP(alpha) {
    if (alpha === void 0) { alpha = 0.0; }
    return CHECK_NAN_SNIPPET + ("\n    return x > 0.0 ? 1.0 : float(" + alpha + ");\n  ");
}
exports.STEP = STEP;
exports.NEG = "return -x;";
exports.CEIL = "return ceil(x);";
exports.FLOOR = "return floor(x);";
exports.SIGN = "\n  if (isNaN(x)) { return 0.0; }\n  return sign(x);\n";
exports.ROUND = "\n  // OpenGL ES does not support round function.\n  // The algorithm is based on banker's rounding.\n  float base = floor(x);\n  if ((x - base) < 0.5) {\n    return floor(x);\n  } else if ((x - base) > 0.5) {\n    return ceil(x);\n  } else {\n    if (mod(base, 2.0) == 0.0) {\n      return base;\n    } else {\n      return base + 1.0;\n    }\n  }\n";
exports.EXP = "return exp(x);";
exports.EXPM1 = "return exp(x) - 1.0;";
exports.LOG = "return log(x);";
exports.LOG1P = "return log(1.0 + x);";
exports.SQRT = "return sqrt(x);";
exports.RSQRT = "return inversesqrt(x);";
exports.SIGMOID = "return 1.0 / (1.0 + exp(-1.0 * x));";
exports.SOFTPLUS = "\n  float epsilon = 1.1920928955078125e-7;\n  float threshold = log(epsilon) + 2.0;\n\n  bool too_large = x > -threshold;\n  bool too_small = x < threshold;\n\n  float result;\n  float exp_x = exp(x);\n\n  if (too_large){\n    result = x;\n  }\n  else if (too_small){\n    result = exp_x;\n  }\n  else{\n    result = log(exp_x + 1.0);\n  }\n  return result;\n";
exports.SIN = "return sin(x);";
exports.COS = "return cos(x);";
exports.TAN = "return tan(x);";
exports.ASIN = "return asin(x);";
exports.ACOS = "return acos(x);";
exports.ATAN = CHECK_NAN_SNIPPET + "\n  return atan(x);\n";
exports.SINH = "\n  float e2x = exp(x);\n  return (e2x - 1.0 / e2x) / 2.0;\n";
exports.COSH = "\n  float e2x = exp(-x);\n  return (e2x + 1.0 / e2x) / 2.0;\n";
exports.TANH = "\n  float e2x = exp(-2.0 * abs(x));\n  return sign(x) * (1.0 - e2x) / (1.0 + e2x);\n";
exports.ASINH = "return log(x + sqrt(x * x + 1.0));";
exports.ACOSH = "return log(x + sqrt(x * x - 1.0));";
exports.ATANH = "return (log(1.0 + x) - log(1.0 - x)) / 2.0;";
exports.ERF = "\n  // Error function is calculated approximately with elementary function.\n  // See \"Handbook of Mathematical Functions with Formulas,\n  // Graphs, and Mathematical Tables\", Abramowitz and Stegun.\n  float p = " + erf_util.ERF_P + ";\n  float a1 = " + erf_util.ERF_A1 + ";\n  float a2 = " + erf_util.ERF_A2 + ";\n  float a3 = " + erf_util.ERF_A3 + ";\n  float a4 = " + erf_util.ERF_A4 + ";\n  float a5 = " + erf_util.ERF_A5 + ";\n\n  float t = 1.0 / (1.0 + p * x);\n  return 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x);\n";
exports.SQUARE = "return x * x;";
exports.RECIPROCAL = "return 1.0 / x;";
exports.LOGICAL_NOT = "return float(!(x >= 1.0));";
exports.TO_INT = "return float(int(x));";

},{"../../ops/erf_util":63,"../../ops/selu_util":64}],36:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var axis_util = require("../ops/axis_util");
var ops = require("../ops/ops");
var reduce_util = require("../ops/reduce_util");
var tensor_1 = require("../tensor");
var types = require("../types");
var util = require("../util");
var backend_util = require("./backend_util");
var argminmax_gpu_1 = require("./webgl/argminmax_gpu");
var avg_pool_backprop_gpu_1 = require("./webgl/avg_pool_backprop_gpu");
var batchnorm_gpu_1 = require("./webgl/batchnorm_gpu");
var binaryop_gpu = require("./webgl/binaryop_gpu");
var binaryop_gpu_1 = require("./webgl/binaryop_gpu");
var clip_gpu_1 = require("./webgl/clip_gpu");
var concat_gpu_1 = require("./webgl/concat_gpu");
var conv_backprop_gpu_1 = require("./webgl/conv_backprop_gpu");
var conv_gpu_1 = require("./webgl/conv_gpu");
var conv_gpu_depthwise_1 = require("./webgl/conv_gpu_depthwise");
var from_pixels_gpu_1 = require("./webgl/from_pixels_gpu");
var gather_gpu_1 = require("./webgl/gather_gpu");
var gpgpu_context_1 = require("./webgl/gpgpu_context");
var gpgpu_math = require("./webgl/gpgpu_math");
var gpgpu_util = require("./webgl/gpgpu_util");
var logical_gpu_1 = require("./webgl/logical_gpu");
var lrn_gpu_1 = require("./webgl/lrn_gpu");
var max_pool_backprop_gpu_1 = require("./webgl/max_pool_backprop_gpu");
var mulmat_gpu_1 = require("./webgl/mulmat_gpu");
var multinomial_gpu_1 = require("./webgl/multinomial_gpu");
var onehot_gpu_1 = require("./webgl/onehot_gpu");
var pad_gpu_1 = require("./webgl/pad_gpu");
var pool_gpu_1 = require("./webgl/pool_gpu");
var reduce_gpu_1 = require("./webgl/reduce_gpu");
var resize_bilinear_backprop_gpu_1 = require("./webgl/resize_bilinear_backprop_gpu");
var resize_bilinear_gpu_1 = require("./webgl/resize_bilinear_gpu");
var resize_nearest_neighbor_gpu_1 = require("./webgl/resize_nearest_neighbor_gpu");
var reverse_gpu_1 = require("./webgl/reverse_gpu");
var slice_gpu_1 = require("./webgl/slice_gpu");
var tex_util_1 = require("./webgl/tex_util");
var texture_manager_1 = require("./webgl/texture_manager");
var tile_gpu_1 = require("./webgl/tile_gpu");
var transpose_gpu_1 = require("./webgl/transpose_gpu");
var unary_op = require("./webgl/unaryop_gpu");
var unaryop_gpu_1 = require("./webgl/unaryop_gpu");
var webgl_util = require("./webgl/webgl_util");
var MathBackendWebGL = (function () {
    function MathBackendWebGL(gpgpu, delayedStorage) {
        if (delayedStorage === void 0) { delayedStorage = true; }
        this.gpgpu = gpgpu;
        this.delayedStorage = delayedStorage;
        this.texData = new WeakMap();
        this.uploadWaitMs = 0;
        this.downloadWaitMs = 0;
        this.binaryCache = {};
        this.disposed = false;
        if (environment_1.ENV.get('WEBGL_VERSION') < 1) {
            throw new Error('WebGL is not supported on this device');
        }
        if (typeof document !== 'undefined') {
            this.canvas = document.createElement('canvas');
        }
        if (gpgpu == null) {
            this.gpgpu = new gpgpu_context_1.GPGPUContext(gpgpu_util.createWebGLContext(this.canvas));
            this.gpgpuCreatedLocally = true;
        }
        else {
            this.gpgpuCreatedLocally = false;
        }
        this.textureManager = new texture_manager_1.TextureManager(this.gpgpu);
    }
    MathBackendWebGL.prototype.register = function (dataId, shape, dtype) {
        if (this.texData.has(dataId)) {
            throw new Error('Data buffer is already registered');
        }
        this.texData.set(dataId, {
            shape: shape,
            dtype: dtype,
            values: null,
            texture: null,
            texShape: null,
            texType: tex_util_1.TextureType.FLOAT
        });
    };
    MathBackendWebGL.prototype.fromPixels = function (pixels, numChannels) {
        if (pixels == null) {
            throw new Error('MathBackendWebGL.writePixels(): pixels can not be null');
        }
        var texShape = [pixels.height, pixels.width];
        var outShape = [pixels.height, pixels.width, numChannels];
        if (pixels instanceof HTMLVideoElement) {
            if (this.canvas == null) {
                throw new Error('Can\'t read pixels from HTMLImageElement outside ' +
                    'the browser.');
            }
            this.canvas.width = pixels.width;
            this.canvas.height = pixels.height;
            this.canvas.getContext('2d').drawImage(pixels, 0, 0, pixels.width, pixels.height);
            pixels = this.canvas;
        }
        var tempPixelArray = tensor_1.Tensor.make(texShape, {}, 'int32');
        this.texData.get(tempPixelArray.dataId).texType = tex_util_1.TextureType.UNSIGNED_BYTE;
        this.gpgpu.uploadPixelDataToTexture(this.getTexture(tempPixelArray.dataId), pixels);
        var program = new from_pixels_gpu_1.FromPixelsProgram(outShape);
        var res = this.compileAndRun(program, [tempPixelArray]);
        tempPixelArray.dispose();
        return res;
    };
    MathBackendWebGL.prototype.write = function (dataId, values) {
        if (values == null) {
            throw new Error('MathBackendWebGL.write(): values can not be null');
        }
        this.throwIfNoData(dataId);
        var texData = this.texData.get(dataId);
        var texture = texData.texture, texShape = texData.texShape, texType = texData.texType;
        if (texture != null) {
            this.textureManager.releaseTexture(texture, texShape, texType);
            texData.texture = null;
            texData.texShape = null;
        }
        texData.values = values;
        if (!this.delayedStorage) {
            this.uploadToGPU(dataId);
        }
    };
    MathBackendWebGL.prototype.readSync = function (dataId) {
        this.throwIfNoData(dataId);
        var texData = this.texData.get(dataId);
        var texture = texData.texture, values = texData.values, texShape = texData.texShape;
        if (values != null) {
            this.cacheOnCPU(dataId);
            return values;
        }
        var shouldTimeProgram = this.activeTimers != null;
        var start;
        if (shouldTimeProgram) {
            start = performance.now();
        }
        var float32Values = this.gpgpu.downloadMatrixFromTexture(texture, texShape[0], texShape[1]);
        if (shouldTimeProgram) {
            this.downloadWaitMs += performance.now() - start;
        }
        this.cacheOnCPU(dataId, float32Values);
        return texData.values;
    };
    MathBackendWebGL.prototype.read = function (dataId) {
        return __awaiter(this, void 0, void 0, function () {
            var texData, texture, values, texShape, float32Values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.throwIfNoData(dataId);
                        texData = this.texData.get(dataId);
                        texture = texData.texture, values = texData.values, texShape = texData.texShape;
                        if (values != null) {
                            this.cacheOnCPU(dataId);
                            return [2, values];
                        }
                        if (!environment_1.ENV.get('WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED')) return [3, 2];
                        return [4, this.gpgpu.downloadMatrixFromTextureAsync(texture, texShape[0], texShape[1])];
                    case 1:
                        float32Values = _a.sent();
                        this.cacheOnCPU(dataId, float32Values);
                        return [2, texData.values];
                    case 2:
                        if (environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') === 0) {
                            return [2, this.readSync(dataId)];
                        }
                        return [4, this.gpgpu.runQuery(function () { })];
                    case 3:
                        _a.sent();
                        return [2, this.readSync(dataId)];
                }
            });
        });
    };
    MathBackendWebGL.prototype.time = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            var oldActiveTimers, newActiveTimers, outerMostTime, flattenedActiveTimers, kernelMs, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldActiveTimers = this.activeTimers;
                        newActiveTimers = [];
                        outerMostTime = false;
                        if (this.programTimersStack == null) {
                            this.programTimersStack = newActiveTimers;
                            outerMostTime = true;
                        }
                        else {
                            this.activeTimers.push(newActiveTimers);
                        }
                        this.activeTimers = newActiveTimers;
                        f();
                        flattenedActiveTimers = util.flatten(this.activeTimers);
                        this.activeTimers = oldActiveTimers;
                        if (outerMostTime) {
                            this.programTimersStack = null;
                        }
                        return [4, Promise.all(flattenedActiveTimers).then(function (results) {
                                var sum = 0;
                                results.forEach(function (result) { return sum += result; });
                                return sum;
                            })];
                    case 1:
                        kernelMs = _a.sent();
                        res = {
                            uploadWaitMs: this.uploadWaitMs,
                            downloadWaitMs: this.downloadWaitMs,
                            kernelMs: kernelMs,
                            wallMs: null
                        };
                        this.uploadWaitMs = 0;
                        this.downloadWaitMs = 0;
                        return [2, res];
                }
            });
        });
    };
    MathBackendWebGL.prototype.memory = function () {
        return { unreliable: false };
    };
    MathBackendWebGL.prototype.startTimer = function () {
        if (environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
            return this.gpgpu.beginQuery();
        }
        return { startMs: performance.now(), endMs: null };
    };
    MathBackendWebGL.prototype.endTimer = function (query) {
        if (environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
            this.gpgpu.endQuery();
            return query;
        }
        query.endMs = performance.now();
        return query;
    };
    MathBackendWebGL.prototype.getQueryTime = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var timerQuery;
            return __generator(this, function (_a) {
                if (environment_1.ENV.get('WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION') > 0) {
                    return [2, this.gpgpu.pollQueryTime(query)];
                }
                timerQuery = query;
                return [2, timerQuery.endMs - timerQuery.startMs];
            });
        });
    };
    MathBackendWebGL.prototype.disposeData = function (dataId) {
        if (this.texData.has(dataId)) {
            var _a = this.texData.get(dataId), texture = _a.texture, texShape = _a.texShape, texType = _a.texType;
            if (texture != null) {
                this.textureManager.releaseTexture(texture, texShape, texType);
            }
            this.texData.delete(dataId);
        }
    };
    MathBackendWebGL.prototype.getTexture = function (dataId) {
        this.uploadToGPU(dataId);
        return this.texData.get(dataId).texture;
    };
    MathBackendWebGL.prototype.getTextureData = function (dataId) {
        this.uploadToGPU(dataId);
        return this.texData.get(dataId);
    };
    MathBackendWebGL.prototype.getGPGPUContext = function () {
        return this.gpgpu;
    };
    MathBackendWebGL.prototype.getCanvas = function () {
        return this.canvas;
    };
    MathBackendWebGL.prototype.slice = function (x, begin, size) {
        var program = new slice_gpu_1.SliceProgram(size);
        var customSetup = program.getCustomSetupFunc(begin);
        return this.compileAndRun(program, [x], null, customSetup);
    };
    MathBackendWebGL.prototype.reverse = function (x, axis) {
        var program = new reverse_gpu_1.ReverseProgram(x.shape, axis);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.concat = function (a, b) {
        var program = new concat_gpu_1.ConcatProgram(a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    };
    MathBackendWebGL.prototype.neg = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.NEG);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.matMul = function (a, b, transposeA, transposeB) {
        var program = new mulmat_gpu_1.MatMulProgram(a.shape, b.shape, transposeA, transposeB);
        return this.compileAndRun(program, [a, b]);
    };
    MathBackendWebGL.prototype.multiply = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.MUL, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, types.upcastType(a.dtype, b.dtype));
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.batchNormalization = function (x, mean, variance, varianceEpsilon, scale, offset) {
        var inputs = [x, mean, variance];
        var offsetShape = null;
        if (offset != null) {
            offsetShape = offset.shape;
            inputs.push(offset);
        }
        var scaleShape = null;
        if (scale != null) {
            scaleShape = scale.shape;
            inputs.push(scale);
        }
        var program = new batchnorm_gpu_1.BatchNormProgram(x.shape, mean.shape, variance.shape, offsetShape, scaleShape, varianceEpsilon);
        return this.compileAndRun(program, inputs);
    };
    MathBackendWebGL.prototype.localResponseNormalization4D = function (x, radius, bias, alpha, beta) {
        var program = new lrn_gpu_1.LRNProgram(x.shape, radius, bias, alpha, beta);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.tile = function (x, reps) {
        var program = new tile_gpu_1.TileProgram(x.shape, reps);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.pad = function (x, paddings, constantValue) {
        var program = new pad_gpu_1.PadProgram(x.shape, paddings, constantValue);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.transpose = function (x, perm) {
        var program = new transpose_gpu_1.TransposeProgram(x.shape, perm);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.gather = function (x, indices, axis) {
        var program = new gather_gpu_1.GatherProgram(x.shape, indices.size, axis);
        return this.compileAndRun(program, [x, indices]);
    };
    MathBackendWebGL.prototype.reduce = function (x, reduceType, dtype) {
        var batchSize = x.shape[0];
        var inSize = x.shape[1];
        var windowSize = reduce_util.computeOptimalWindowSize(inSize);
        var reduceInfo = { windowSize: windowSize, inSize: inSize, batchSize: batchSize };
        var program = new reduce_gpu_1.ReduceProgram(reduceInfo, reduceType);
        var _a = program.outputShape, rows = _a[0], cols = _a[1];
        var output = this.makeOutputArray([rows, cols], dtype);
        this.compileAndRun(program, [x], output);
        if (output.shape[1] === 1) {
            return output;
        }
        return this.reduce(output, reduceType, dtype);
    };
    MathBackendWebGL.prototype.argReduce = function (x, reduceType, bestIndicesA) {
        if (bestIndicesA === void 0) { bestIndicesA = null; }
        var batchSize = x.shape[0];
        var inSize = x.shape[1];
        if (bestIndicesA != null) {
            batchSize = bestIndicesA.shape[0];
            inSize = bestIndicesA.shape[1];
        }
        var windowSize = reduce_util.computeOptimalWindowSize(inSize);
        var reduceInfo = { windowSize: windowSize, inSize: inSize, batchSize: batchSize };
        var program = new argminmax_gpu_1.ArgMinMaxProgram(reduceInfo, reduceType, bestIndicesA == null);
        var _a = program.outputShape, rows = _a[0], cols = _a[1];
        var output = this.makeOutputArray([rows, cols], 'int32');
        var inputs = [x];
        if (bestIndicesA != null) {
            inputs.push(bestIndicesA);
        }
        this.compileAndRun(program, inputs, output);
        if (output.shape[1] === 1) {
            return output;
        }
        return this.argReduce(x, reduceType, output);
    };
    MathBackendWebGL.prototype.sum = function (x, axes) {
        axis_util.assertAxesAreInnerMostDims('sum', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var inSize = util.sizeFromShape(reduceShape);
        var a2D = x.as2D(-1, inSize);
        var outputDType = types.sumOutType(x.dtype);
        return this.reduce(a2D, 'sum', outputDType).reshape(outShape);
    };
    MathBackendWebGL.prototype.argMin = function (x, axis) {
        var axes = [axis];
        axis_util.assertAxesAreInnerMostDims('argMin', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var inSize = util.sizeFromShape(reduceShape);
        var a2D = x.as2D(-1, inSize);
        return this.argReduce(a2D, 'min').reshape(outShape);
    };
    MathBackendWebGL.prototype.argMax = function (x, axis) {
        var axes = [axis];
        axis_util.assertAxesAreInnerMostDims('argMax', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var inSize = util.sizeFromShape(reduceShape);
        var a2D = x.as2D(-1, inSize);
        return this.argReduce(a2D, 'max').reshape(outShape);
    };
    MathBackendWebGL.prototype.equal = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.EQUAL, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.notEqual = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.NOT_EQUAL, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.less = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.LESS, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.lessEqual = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.LESS_EQUAL, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.greater = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.GREATER, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.greaterEqual = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.GREATER_EQUAL, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.logicalNot = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.LOGICAL_NOT);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.logicalAnd = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.LOGICAL_AND, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.logicalOr = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.LOGICAL_OR, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, 'bool');
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.where = function (condition, a, b, dtype) {
        var program = new logical_gpu_1.WhereProgram(condition.rank, a.shape, a.rank);
        var output = this.makeOutputArray(program.outputShape, dtype);
        return this.compileAndRun(program, [condition, a, b], output);
    };
    MathBackendWebGL.prototype.topKValues = function (x, k) {
        throw new Error('topKValues GPU not yet implemented!');
    };
    MathBackendWebGL.prototype.topKIndices = function (x, k) {
        throw new Error('topKIndices GPU not yet implemented!');
    };
    MathBackendWebGL.prototype.min = function (x, axes) {
        axis_util.assertAxesAreInnerMostDims('min', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var inSize = util.sizeFromShape(reduceShape);
        var a2D = x.as2D(-1, inSize);
        return this.reduce(a2D, 'min', a2D.dtype).reshape(outShape);
    };
    MathBackendWebGL.prototype.minimum = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.MIN, a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    };
    MathBackendWebGL.prototype.mod = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.MOD, a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    };
    MathBackendWebGL.prototype.max = function (x, axes) {
        axis_util.assertAxesAreInnerMostDims('max', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var inSize = util.sizeFromShape(reduceShape);
        var a2D = x.as2D(-1, inSize);
        return this.reduce(a2D, 'max', a2D.dtype).reshape(outShape);
    };
    MathBackendWebGL.prototype.maximum = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.MAX, a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    };
    MathBackendWebGL.prototype.squaredDifference = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.SQUARED_DIFFERENCE, a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    };
    MathBackendWebGL.prototype.divide = function (a, b) {
        var op;
        var outputDtype;
        if (a.dtype === 'int32' && b.dtype === 'int32') {
            op = binaryop_gpu.INT_DIV;
            outputDtype = 'int32';
        }
        else {
            op = binaryop_gpu.DIV;
            outputDtype = 'float32';
        }
        var program = new binaryop_gpu_1.BinaryOpProgram(op, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, outputDtype);
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.add = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.ADD, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, types.upcastType(a.dtype, b.dtype));
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.subtract = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.SUB, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, types.upcastType(a.dtype, b.dtype));
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.pow = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.POW, a.shape, b.shape);
        var output = this.makeOutputArray(program.outputShape, types.upcastType(a.dtype, b.dtype));
        return this.compileAndRun(program, [a, b], output);
    };
    MathBackendWebGL.prototype.ceil = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.CEIL);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.floor = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.FLOOR);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.sign = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SIGN);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.round = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ROUND);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.exp = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.EXP);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.expm1 = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.EXPM1);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.log = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.LOG);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.log1p = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.LOG1P);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.sqrt = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SQRT);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.rsqrt = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.RSQRT);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.square = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SQUARE);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.reciprocal = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.RECIPROCAL);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.relu = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.RELU);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.elu = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ELU);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.eluDer = function (dy, y) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.ELU_DER, dy.shape, y.shape);
        return this.compileAndRun(program, [dy, y]);
    };
    MathBackendWebGL.prototype.selu = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SELU);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.int = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.TO_INT);
        var output = this.makeOutputArray(program.outputShape, 'int32');
        return this.compileAndRun(program, [x], output);
    };
    MathBackendWebGL.prototype.clip = function (x, min, max) {
        var program = new clip_gpu_1.ClipProgram(x.shape, min, max);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.abs = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ABS);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.sigmoid = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SIGMOID);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.softplus = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SOFTPLUS);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.sin = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SIN);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.cos = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.COS);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.tan = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.TAN);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.asin = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ASIN);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.acos = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ACOS);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.atan = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ATAN);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.atan2 = function (a, b) {
        var program = new binaryop_gpu_1.BinaryOpProgram(binaryop_gpu.ATAN2, a.shape, b.shape);
        return this.compileAndRun(program, [a, b]);
    };
    MathBackendWebGL.prototype.sinh = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.SINH);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.cosh = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.COSH);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.tanh = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.TANH);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.asinh = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ASINH);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.acosh = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ACOSH);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.atanh = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ATANH);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.erf = function (x) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.ERF);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.step = function (x, alpha) {
        var program = new unaryop_gpu_1.UnaryOpProgram(x.shape, unary_op.STEP(alpha));
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.conv2d = function (x, filter, convInfo) {
        var program = new conv_gpu_1.Conv2DProgram(convInfo);
        return this.compileAndRun(program, [x, filter]);
    };
    MathBackendWebGL.prototype.conv2dDerInput = function (dy, filter, convInfo) {
        var program = new conv_backprop_gpu_1.Conv2DDerInputProgram(convInfo);
        return this.compileAndRun(program, [dy, filter]);
    };
    MathBackendWebGL.prototype.conv2dDerFilter = function (x, dy, convInfo) {
        var program = new conv_backprop_gpu_1.Conv2DDerFilterProgram(convInfo);
        return this.compileAndRun(program, [x, dy]);
    };
    MathBackendWebGL.prototype.depthwiseConv2D = function (x, filter, convInfo) {
        var program = new conv_gpu_depthwise_1.DepthwiseConv2DProgram(convInfo);
        return this.compileAndRun(program, [x, filter]);
    };
    MathBackendWebGL.prototype.maxPool = function (x, convInfo) {
        var program = new pool_gpu_1.Pool2DProgram(convInfo, 'max', false);
        var output = this.makeOutputArray(program.outputShape, x.dtype);
        return this.compileAndRun(program, [x], output);
    };
    MathBackendWebGL.prototype.avgPool = function (x, convInfo) {
        var program = new pool_gpu_1.Pool2DProgram(convInfo, 'avg', false);
        var output = this.makeOutputArray(program.outputShape, 'float32');
        return this.compileAndRun(program, [x], output);
    };
    MathBackendWebGL.prototype.maxPoolBackprop = function (dy, x, y, convInfo) {
        var getPositions = true;
        var maxPoolPositionsProgram = new pool_gpu_1.Pool2DProgram(convInfo, 'max', getPositions);
        var maxPoolPositions = this.compileAndRun(maxPoolPositionsProgram, [x]);
        var maxPoolBackPropProgram = new max_pool_backprop_gpu_1.MaxPool2DBackpropProgram(convInfo);
        var output = this.makeOutputArray(maxPoolBackPropProgram.outputShape, x.dtype);
        var result = this.compileAndRun(maxPoolBackPropProgram, [dy, maxPoolPositions], output);
        maxPoolPositions.dispose();
        return result;
    };
    MathBackendWebGL.prototype.avgPoolBackprop = function (dy, x, convInfo) {
        var avgPoolBackpropProgram = new avg_pool_backprop_gpu_1.AvgPool2DBackpropProgram(convInfo);
        var output = this.makeOutputArray(avgPoolBackpropProgram.outputShape, x.dtype);
        return this.compileAndRun(avgPoolBackpropProgram, [dy], output);
    };
    MathBackendWebGL.prototype.cast = function (x, dtype) {
        return backend_util.castTensor(x, dtype, this);
    };
    MathBackendWebGL.prototype.reshape = function (x, shape) {
        return backend_util.reshapeTensor(x, shape);
    };
    MathBackendWebGL.prototype.resizeBilinear = function (x, newHeight, newWidth, alignCorners) {
        var program = new resize_bilinear_gpu_1.ResizeBilinearProgram(x.shape, newHeight, newWidth, alignCorners);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.resizeBilinearBackprop = function (dy, x, alignCorners) {
        var program = new resize_bilinear_backprop_gpu_1.ResizeBilinearBackpropProgram(dy, x, alignCorners);
        return this.compileAndRun(program, [dy]);
    };
    MathBackendWebGL.prototype.resizeNearestNeighbor = function (x, newHeight, newWidth, alignCorners) {
        var program = new resize_nearest_neighbor_gpu_1.ResizeNearestNeighborProgram(x.shape, newHeight, newWidth, alignCorners);
        return this.compileAndRun(program, [x]);
    };
    MathBackendWebGL.prototype.multinomial = function (logits, normalized, numSamples, seed) {
        var probs = normalized ? logits : ops.softmax(logits);
        var batchSize = probs.shape[0];
        var numOutcomes = probs.shape[1];
        var program = new multinomial_gpu_1.MultinomialProgram(batchSize, numOutcomes, numSamples);
        var output = this.makeOutputArray(program.outputShape, 'int32');
        var customSetup = program.getCustomSetupFunc(seed);
        return this.compileAndRun(program, [probs], output, customSetup);
    };
    MathBackendWebGL.prototype.oneHot = function (indices, depth, onValue, offValue) {
        var program = new onehot_gpu_1.OneHotProgram(indices.size, depth, onValue, offValue);
        return this.compileAndRun(program, [indices]);
    };
    MathBackendWebGL.prototype.makeOutputArray = function (shape, dtype) {
        return tensor_1.Tensor.make(shape, {}, dtype);
    };
    MathBackendWebGL.prototype.compileAndRun = function (program, inputs, output, customSetup) {
        var _this = this;
        if (output == null) {
            output = this.makeOutputArray(program.outputShape, inputs[0].dtype);
        }
        var inputsData = inputs.map(function (input) {
            _this.uploadToGPU(input.dataId);
            return { tensor: input, texData: _this.texData.get(input.dataId) };
        });
        this.uploadToGPU(output.dataId);
        var outputData = {
            tensor: output,
            texData: this.texData.get(output.dataId)
        };
        var key = gpgpu_math.makeShaderKey(program, inputsData, outputData);
        var binary = this.getAndSaveBinary(key, function () {
            return gpgpu_math.compileProgram(_this.gpgpu, program, inputsData, outputData);
        });
        var shouldTimeProgram = this.activeTimers != null;
        var query;
        if (shouldTimeProgram) {
            query = this.startTimer();
        }
        gpgpu_math.runProgram(binary, inputsData, outputData, customSetup);
        if (shouldTimeProgram) {
            query = this.endTimer(query);
            this.activeTimers.push(this.getQueryTime(query));
        }
        return output;
    };
    MathBackendWebGL.prototype.getAndSaveBinary = function (key, getBinary) {
        if (!(key in this.binaryCache)) {
            this.binaryCache[key] = getBinary();
        }
        return this.binaryCache[key];
    };
    MathBackendWebGL.prototype.getTextureManager = function () {
        return this.textureManager;
    };
    MathBackendWebGL.prototype.dispose = function () {
        if (this.disposed) {
            return;
        }
        for (var key in this.binaryCache) {
            this.gpgpu.deleteProgram(this.binaryCache[key].webGLProgram);
        }
        this.textureManager.dispose();
        this.canvas.remove();
        if (this.gpgpuCreatedLocally) {
            this.gpgpu.dispose();
        }
        this.disposed = true;
    };
    MathBackendWebGL.prototype.throwIfNoData = function (dataId) {
        if (!this.texData.has(dataId)) {
            throw new Error("WebGL backend: No data found for this tensor. " +
                "Did you change your backend in the middle of the program? " +
                "New backends can't use Tensors created with previous backends");
        }
    };
    MathBackendWebGL.prototype.uploadToGPU = function (dataId) {
        this.throwIfNoData(dataId);
        var texData = this.texData.get(dataId);
        var shape = texData.shape, values = texData.values, texture = texData.texture, dtype = texData.dtype, texType = texData.texType;
        if (texture != null) {
            return;
        }
        var shouldTimeProgram = this.activeTimers != null;
        var start;
        if (shouldTimeProgram) {
            start = performance.now();
        }
        var texShape = webgl_util.getTextureShapeFromLogicalShape(this.gpgpu.gl, shape);
        texData.texShape = texShape;
        var newTexture = this.textureManager.acquireTexture(texShape, texType);
        texData.texture = newTexture;
        if (values != null) {
            this.gpgpu.uploadMatrixToTexture(newTexture, texShape[0], texShape[1], typedArrayToFloat32(values, dtype));
            texData.values = null;
            if (shouldTimeProgram) {
                this.uploadWaitMs += performance.now() - start;
            }
        }
    };
    MathBackendWebGL.prototype.cacheOnCPU = function (dataId, float32Values) {
        var dontKeepCopyOnGPU = this.delayedStorage;
        var texData = this.texData.get(dataId);
        var texture = texData.texture, texShape = texData.texShape, dtype = texData.dtype, texType = texData.texType;
        if (dontKeepCopyOnGPU && texture != null) {
            this.textureManager.releaseTexture(texture, texShape, texType);
            texData.texture = null;
            texData.texShape = null;
        }
        if (float32Values != null) {
            texData.values = float32ToTypedArray(float32Values, dtype);
        }
    };
    return MathBackendWebGL;
}());
exports.MathBackendWebGL = MathBackendWebGL;
environment_1.ENV.registerBackend('webgl', function () { return new MathBackendWebGL(); }, 2);
function float32ToTypedArray(a, dtype) {
    if (dtype === 'float32') {
        return a;
    }
    else if (dtype === 'int32' || dtype === 'bool') {
        var result = (dtype === 'int32') ? new Int32Array(a.length) :
            new Uint8Array(a.length);
        for (var i = 0; i < result.length; ++i) {
            result[i] = Math.round(a[i]);
        }
        return result;
    }
    else {
        throw new Error("Unknown dtype " + dtype);
    }
}
function typedArrayToFloat32(a, dtype) {
    return (a instanceof Float32Array) ? a : new Float32Array(a);
}

},{"../environment":24,"../ops/axis_util":58,"../ops/ops":47,"../ops/reduce_util":59,"../tensor":32,"../types":31,"../util":26,"./backend_util":60,"./webgl/argminmax_gpu":94,"./webgl/avg_pool_backprop_gpu":96,"./webgl/batchnorm_gpu":95,"./webgl/binaryop_gpu":97,"./webgl/clip_gpu":98,"./webgl/concat_gpu":99,"./webgl/conv_backprop_gpu":101,"./webgl/conv_gpu":103,"./webgl/conv_gpu_depthwise":100,"./webgl/from_pixels_gpu":102,"./webgl/gather_gpu":104,"./webgl/gpgpu_context":57,"./webgl/gpgpu_math":105,"./webgl/gpgpu_util":56,"./webgl/logical_gpu":106,"./webgl/lrn_gpu":107,"./webgl/max_pool_backprop_gpu":110,"./webgl/mulmat_gpu":108,"./webgl/multinomial_gpu":109,"./webgl/onehot_gpu":111,"./webgl/pad_gpu":112,"./webgl/pool_gpu":114,"./webgl/reduce_gpu":113,"./webgl/resize_bilinear_backprop_gpu":118,"./webgl/resize_bilinear_gpu":115,"./webgl/resize_nearest_neighbor_gpu":116,"./webgl/reverse_gpu":117,"./webgl/slice_gpu":121,"./webgl/tex_util":119,"./webgl/texture_manager":123,"./webgl/tile_gpu":120,"./webgl/transpose_gpu":124,"./webgl/unaryop_gpu":122,"./webgl/webgl_util":55}],37:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var seedrandom = require("seedrandom");
var environment_1 = require("../environment");
var axis_util = require("../ops/axis_util");
var broadcast_util = require("../ops/broadcast_util");
var concat_util = require("../ops/concat_util");
var erf_util = require("../ops/erf_util");
var ops = require("../ops/ops");
var ops_1 = require("../ops/ops");
var selu_util = require("../ops/selu_util");
var tensor_1 = require("../tensor");
var types = require("../types");
var util = require("../util");
var backend_util = require("./backend_util");
var MathBackendCPU = (function () {
    function MathBackendCPU() {
        this.data = new WeakMap();
        if (typeof document !== 'undefined') {
            this.canvas = document.createElement('canvas');
        }
    }
    MathBackendCPU.prototype.register = function (dataId, shape, dtype) {
        if (this.data.has(dataId)) {
            throw new Error("Data buffer is already registered");
        }
        this.data.set(dataId, null);
    };
    MathBackendCPU.prototype.write = function (dataId, values) {
        if (values == null) {
            throw new Error('MathBackendCPU.write(): values can not be null');
        }
        this.throwIfNoData(dataId);
        this.data.set(dataId, values);
    };
    MathBackendCPU.prototype.fromPixels = function (pixels, numChannels) {
        if (pixels == null) {
            throw new Error('MathBackendCPU.writePixels(): pixels can not be null');
        }
        var vals;
        if (pixels instanceof ImageData) {
            vals = pixels.data;
        }
        else if (pixels instanceof HTMLCanvasElement) {
            vals = pixels.getContext('2d')
                .getImageData(0, 0, pixels.width, pixels.height)
                .data;
        }
        else if (pixels instanceof HTMLImageElement ||
            pixels instanceof HTMLVideoElement) {
            if (this.canvas == null) {
                throw new Error('Can\'t read pixels from HTMLImageElement outside ' +
                    'the browser.');
            }
            this.canvas.width = pixels.width;
            this.canvas.height = pixels.height;
            this.canvas.getContext('2d').drawImage(pixels, 0, 0, pixels.width, pixels.height);
            vals = this.canvas.getContext('2d')
                .getImageData(0, 0, pixels.width, pixels.height)
                .data;
        }
        else {
            throw new Error("pixels is of unknown type: " + pixels.constructor.name);
        }
        var values;
        if (numChannels === 4) {
            values = new Int32Array(vals);
        }
        else {
            var numPixels = pixels.width * pixels.height;
            values = new Int32Array(numPixels * numChannels);
            for (var i = 0; i < numPixels; i++) {
                for (var channel = 0; channel < numChannels; ++channel) {
                    values[i * numChannels + channel] = vals[i * 4 + channel];
                }
            }
        }
        var outShape = [pixels.height, pixels.width, numChannels];
        return ops_1.tensor3d(values, outShape, 'int32');
    };
    MathBackendCPU.prototype.read = function (dataId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.readSync(dataId)];
            });
        });
    };
    MathBackendCPU.prototype.readSync = function (dataId) {
        this.throwIfNoData(dataId);
        return this.data.get(dataId);
    };
    MathBackendCPU.prototype.disposeData = function (dataId) {
        if (this.data.has(dataId)) {
            this.data.delete(dataId);
        }
    };
    MathBackendCPU.prototype.time = function (f) {
        return __awaiter(this, void 0, void 0, function () {
            var start, kernelMs;
            return __generator(this, function (_a) {
                start = performance.now();
                f();
                kernelMs = performance.now() - start;
                return [2, { kernelMs: kernelMs }];
            });
        });
    };
    MathBackendCPU.prototype.memory = function () {
        return {
            unreliable: true
        };
    };
    MathBackendCPU.prototype.throwIfNoData = function (dataId) {
        if (!this.data.has(dataId)) {
            throw new Error("CPU backend: No data found for this tensor. " +
                "Did you change your backend in the middle of the program? " +
                "New backends can't use Tensors created with previous backends");
        }
    };
    MathBackendCPU.prototype.slice = function (x, begin, size) {
        var buffer = ops.buffer(size, x.dtype);
        for (var i = 0; i < buffer.size; ++i) {
            var loc = buffer.indexToLoc(i);
            var xLoc = loc.map(function (idx, j) { return idx + begin[j]; });
            buffer.set.apply(buffer, [x.get.apply(x, xLoc)].concat(loc));
        }
        return buffer.toTensor();
    };
    MathBackendCPU.prototype.reverse = function (x, axis) {
        var buffer = ops.buffer(x.shape, x.dtype);
        var xBuffer = x.buffer();
        var _loop_1 = function (i) {
            var outLoc = buffer.indexToLoc(i);
            var inLoc = outLoc.slice();
            axis.forEach(function (ax) { return inLoc[ax] = x.shape[ax] - 1 - inLoc[ax]; });
            buffer.set.apply(buffer, [xBuffer.get.apply(xBuffer, inLoc)].concat(outLoc));
        };
        for (var i = 0; i < buffer.size; i++) {
            _loop_1(i);
        }
        return buffer.toTensor();
    };
    MathBackendCPU.prototype.concat = function (a, b) {
        var outShape = concat_util.computeOutShape(a.shape, b.shape, 1);
        var buffer = ops.buffer(outShape, a.dtype);
        if (a.shape[0] === 1 && b.shape[0] === 1) {
            var aVals = a.dataSync();
            var bVals = b.dataSync();
            var vals = buffer.values;
            vals.set(aVals, 0);
            vals.set(bVals, a.size);
            return buffer.toTensor();
        }
        for (var i = 0; i < outShape[0]; ++i) {
            for (var j = 0; j < a.shape[1]; ++j) {
                buffer.set(a.get(i, j), i, j);
            }
            for (var j = 0; j < b.shape[1]; ++j) {
                buffer.set(b.get(i, j), i, j + a.shape[1]);
            }
        }
        return buffer.toTensor();
    };
    MathBackendCPU.prototype.neg = function (x) {
        return this.multiply(ops.scalar(-1), x);
    };
    MathBackendCPU.prototype.add = function (a, b) {
        return this.broadcastedBinaryOp(a, b, types.upcastType(a.dtype, b.dtype), function (aValue, bValue) { return aValue + bValue; });
    };
    MathBackendCPU.prototype.subtract = function (a, b) {
        return this.broadcastedBinaryOp(a, b, types.upcastType(a.dtype, b.dtype), function (aValue, bValue) { return aValue - bValue; });
    };
    MathBackendCPU.prototype.pow = function (a, b) {
        return this.broadcastedBinaryOp(a, b, a.dtype, function (aValue, bValue) { return Math.pow(aValue, bValue); });
    };
    MathBackendCPU.prototype.matMul = function (a, b, transposeA, transposeB) {
        var sharedDim = transposeA ? a.shape[0] : a.shape[1];
        var leftDim = transposeA ? a.shape[1] : a.shape[0];
        var rightDim = transposeB ? b.shape[0] : b.shape[1];
        var aValues = a.dataSync();
        var bValues = b.dataSync();
        var _a = transposeA ? [1, a.strides[0]] : [a.strides[0], 1], aOuterStep = _a[0], aInnerStep = _a[1];
        var _b = transposeB ? [b.strides[0], 1] : [1, b.strides[0]], bOuterStep = _b[0], bInnerStep = _b[1];
        var aOuterEnd = leftDim * aOuterStep;
        var bOuterEnd = rightDim * bOuterStep;
        var result = new Float32Array(leftDim * rightDim);
        var resultIndex = 0;
        for (var aOuter = 0; aOuter < aOuterEnd; aOuter += aOuterStep) {
            for (var bOuter = 0; bOuter < bOuterEnd; bOuter += bOuterStep) {
                var aInner = aOuter;
                var bInner = bOuter;
                var sum = 0;
                for (var k = 0; k < sharedDim; ++k) {
                    sum += aValues[aInner] * bValues[bInner];
                    aInner += aInnerStep;
                    bInner += bInnerStep;
                }
                result[resultIndex++] = sum;
            }
        }
        return ops.tensor2d(result, [leftDim, rightDim]);
    };
    MathBackendCPU.prototype.multiply = function (a, b) {
        return this.broadcastedBinaryOp(a, b, types.upcastType(a.dtype, b.dtype), function (aValue, bValue) { return aValue * bValue; });
    };
    MathBackendCPU.prototype.divide = function (a, b) {
        var op;
        var outputDtype;
        if (a.dtype === 'int32' && b.dtype === 'int32') {
            outputDtype = 'int32';
            op = function (a, b) { return Math.floor(a / b); };
        }
        else {
            outputDtype = 'float32';
            op = function (a, b) { return a / b; };
        }
        return this.broadcastedBinaryOp(a, b, outputDtype, op);
    };
    MathBackendCPU.prototype.sum = function (x, axes) {
        axis_util.assertAxesAreInnerMostDims('sum', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var resultDtype = types.upcastType(x.dtype, 'int32');
        var result = ops.zeros(outShape, resultDtype);
        var reduceSize = util.sizeFromShape(reduceShape);
        var vals = result.dataSync();
        var aVals = x.dataSync();
        for (var i = 0; i < vals.length; ++i) {
            var offset = i * reduceSize;
            var sum = 0;
            for (var j = 0; j < reduceSize; ++j) {
                sum += aVals[offset + j];
            }
            vals[i] = sum;
        }
        return result;
    };
    MathBackendCPU.prototype.argMin = function (x, axis) {
        var axes = [axis];
        axis_util.assertAxesAreInnerMostDims('argMin', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var result = ops.zeros(outShape, 'int32');
        var reduceSize = util.sizeFromShape(reduceShape);
        var vals = result.dataSync();
        var aVals = x.dataSync();
        for (var i = 0; i < vals.length; ++i) {
            var offset = i * reduceSize;
            var min = aVals[offset];
            var minIndex = 0;
            for (var j = 0; j < reduceSize; ++j) {
                var value = aVals[offset + j];
                if (value < min) {
                    min = value;
                    minIndex = j;
                }
            }
            vals[i] = minIndex;
        }
        return result;
    };
    MathBackendCPU.prototype.argMax = function (x, axis) {
        var axes = [axis];
        axis_util.assertAxesAreInnerMostDims('argMax', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var result = ops.zeros(outShape, 'int32');
        var reduceSize = util.sizeFromShape(reduceShape);
        var vals = result.dataSync();
        var aVals = x.dataSync();
        for (var i = 0; i < vals.length; ++i) {
            var offset = i * reduceSize;
            var max = aVals[offset];
            var maxIndex = 0;
            for (var j = 0; j < reduceSize; ++j) {
                var value = aVals[offset + j];
                if (value > max) {
                    max = value;
                    maxIndex = j;
                }
            }
            vals[i] = maxIndex;
        }
        return result;
    };
    MathBackendCPU.prototype.equal = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return (aVal === bVal) ? 1 : 0;
        });
    };
    MathBackendCPU.prototype.notEqual = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return (aVal !== bVal) ? 1 : 0;
        });
    };
    MathBackendCPU.prototype.less = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return (aVal < bVal) ? 1 : 0;
        });
    };
    MathBackendCPU.prototype.lessEqual = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return (aVal <= bVal) ? 1 : 0;
        });
    };
    MathBackendCPU.prototype.greater = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return (aVal > bVal) ? 1 : 0;
        });
    };
    MathBackendCPU.prototype.greaterEqual = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return (aVal >= bVal) ? 1 : 0;
        });
    };
    MathBackendCPU.prototype.logicalNot = function (x) {
        var values = x.dataSync();
        var newValues = new Int32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            newValues[i] = values[i] ? 0 : 1;
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues }, 'bool');
    };
    MathBackendCPU.prototype.logicalAnd = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return aVal && bVal;
        });
    };
    MathBackendCPU.prototype.logicalOr = function (a, b) {
        return this.broadcastedBinaryOp(a, b, 'bool', function (aVal, bVal) {
            return aVal || bVal;
        });
    };
    MathBackendCPU.prototype.where = function (condition, a, b, dtype) {
        var values = condition.dataSync();
        var aValues = a.dataSync();
        var bValues = b.dataSync();
        var result = ops.zeros(a.shape, dtype);
        var newValues = result.dataSync();
        var index = 0;
        var offset = condition.rank === 0 || condition.rank > 1 || a.rank === 1 ?
            1 :
            a.shape[1];
        for (var i = 0; i < values.length; i++) {
            for (var j = 0; j < offset; j++) {
                if (values[i] === 1) {
                    newValues[index++] = aValues[i];
                }
                else {
                    newValues[index++] = bValues[i];
                }
            }
        }
        return result;
    };
    MathBackendCPU.prototype.topKValues = function (x, k) {
        return this.topK(x, k).values;
    };
    MathBackendCPU.prototype.topKIndices = function (x, k) {
        return this.topK(x, k).indices;
    };
    MathBackendCPU.prototype.topK = function (x, k) {
        var values = x.dataSync();
        var valuesAndIndices = [];
        for (var i = 0; i < values.length; i++) {
            valuesAndIndices.push({ value: values[i], index: i });
        }
        valuesAndIndices.sort(function (a, b) {
            return b.value - a.value;
        });
        var topkValues = util.getTypedArrayFromDType(x.dtype, k);
        var topkIndices = new Int32Array(k);
        for (var i = 0; i < k; i++) {
            topkValues[i] = valuesAndIndices[i].value;
            topkIndices[i] = valuesAndIndices[i].index;
        }
        return {
            values: ops.tensor1d(topkValues, x.dtype),
            indices: ops.tensor1d(topkIndices, 'int32')
        };
    };
    MathBackendCPU.prototype.min = function (x, axes) {
        axis_util.assertAxesAreInnerMostDims('min', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var result = ops.zeros(outShape, x.dtype);
        var reduceSize = util.sizeFromShape(reduceShape);
        var vals = result.dataSync();
        var aVals = x.dataSync();
        for (var i = 0; i < vals.length; ++i) {
            var offset = i * reduceSize;
            var min = aVals[0];
            for (var j = 0; j < reduceSize; ++j) {
                var value = aVals[offset + j];
                if (value < min) {
                    min = value;
                }
            }
            vals[i] = min;
        }
        return result;
    };
    MathBackendCPU.prototype.minimum = function (a, b) {
        return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) { return Math.min(aVal, bVal); });
    };
    MathBackendCPU.prototype.mod = function (a, b) {
        return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) {
            var rem = aVal % bVal;
            if ((aVal < 0 && bVal < 0) || (aVal >= 0 && bVal >= 0)) {
                return rem;
            }
            else {
                return (rem + bVal) % bVal;
            }
        });
    };
    MathBackendCPU.prototype.max = function (x, axes) {
        axis_util.assertAxesAreInnerMostDims('max', axes, x.rank);
        var _a = axis_util.computeOutAndReduceShapes(x.shape, axes), outShape = _a[0], reduceShape = _a[1];
        var result = ops.zeros(outShape, x.dtype);
        var reduceSize = util.sizeFromShape(reduceShape);
        var vals = result.dataSync();
        var aVals = x.dataSync();
        for (var i = 0; i < vals.length; ++i) {
            var offset = i * reduceSize;
            var max = aVals[offset];
            for (var j = 0; j < reduceSize; ++j) {
                var value = aVals[offset + j];
                if (value > max) {
                    max = value;
                }
            }
            vals[i] = max;
        }
        return result;
    };
    MathBackendCPU.prototype.maximum = function (a, b) {
        return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) { return Math.max(aVal, bVal); });
    };
    MathBackendCPU.prototype.squaredDifference = function (a, b) {
        return this.broadcastedBinaryOp(a, b, a.dtype, function (aVal, bVal) {
            var diff = aVal - bVal;
            return diff * diff;
        });
    };
    MathBackendCPU.prototype.ceil = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            newValues[i] = Math.ceil(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.floor = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            newValues[i] = Math.floor(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.sign = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            if (values[i] < 0) {
                newValues[i] = -1;
            }
            else if (values[i] > 0) {
                newValues[i] = 1;
            }
            else {
                newValues[i] = 0;
            }
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.round = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            var base = Math.floor(values[i]);
            if (values[i] - base < 0.5) {
                newValues[i] = Math.floor(values[i]);
            }
            else if (values[i] - base > 0.5) {
                newValues[i] = Math.ceil(values[i]);
            }
            else {
                if (base % 2.0 === 0.0) {
                    newValues[i] = base;
                }
                else {
                    newValues[i] = base + 1.0;
                }
            }
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.exp = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            newValues[i] = Math.exp(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.expm1 = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            newValues[i] = Math.expm1(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.log = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            var value = values[i];
            newValues[i] = Math.log(value);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.log1p = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            var value = values[i];
            newValues[i] = Math.log1p(value);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.sqrt = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            var value = values[i];
            newValues[i] = Math.sqrt(value);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.rsqrt = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            var value = values[i];
            newValues[i] = 1 / Math.sqrt(value);
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.square = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            var value = values[i];
            newValues[i] = value * value;
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.reciprocal = function (x) {
        var values = x.dataSync();
        var newValues = new Float32Array(values.length);
        for (var i = 0; i < values.length; ++i) {
            newValues[i] = 1 / values[i];
        }
        return tensor_1.Tensor.make(x.shape, { values: newValues });
    };
    MathBackendCPU.prototype.relu = function (x) {
        var res = ops.zeros(x.shape, x.dtype);
        var resVals = res.dataSync();
        var inVals = x.dataSync();
        for (var i = 0; i < inVals.length; ++i) {
            resVals[i] = Math.max(0, inVals[i]);
        }
        return res;
    };
    MathBackendCPU.prototype.elu = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            var v = values[i];
            if (v >= 0) {
                resultValues[i] = v;
            }
            else {
                resultValues[i] = (Math.exp(v) - 1);
            }
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.eluDer = function (dy, y) {
        var resultValues = new Float32Array(y.size);
        var values = y.dataSync();
        var dyValues = dy.dataSync();
        for (var i = 0; i < values.length; ++i) {
            var v = values[i];
            if (v >= 1) {
                resultValues[i] = dyValues[i];
            }
            else {
                resultValues[i] = dyValues[i] * (v + 1);
            }
        }
        return tensor_1.Tensor.make(y.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.selu = function (x) {
        var scaleAlpha = selu_util.SELU_SCALEALPHA;
        var scale = selu_util.SELU_SCALE;
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            var v = values[i];
            if (v >= 0) {
                resultValues[i] = scale * v;
            }
            else {
                resultValues[i] = scaleAlpha * (Math.exp(v) - 1);
            }
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.clip = function (x, min, max) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.min(max, Math.max(min, values[i]));
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.abs = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.abs(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.int = function (x) {
        var resultValues = new Int32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = values[i];
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues }, 'int32');
    };
    MathBackendCPU.prototype.sigmoid = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = 1 / (1 + Math.exp(-values[i]));
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.softplus = function (x) {
        var epsilon = 1.1920928955078125e-7;
        var threshold = Math.log(epsilon) + 2.0;
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            var tooLarge = values[i] > -threshold;
            var tooSmall = values[i] < threshold;
            var expX = Math.exp(values[i]);
            var result = void 0;
            if (tooSmall) {
                result = expX;
            }
            else if (tooLarge) {
                result = values[i];
            }
            else {
                result = Math.log(1.0 + expX);
            }
            resultValues[i] = result;
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.sin = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.sin(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.cos = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.cos(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.tan = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.tan(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.asin = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.asin(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.acos = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.acos(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.atan = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.atan(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.atan2 = function (a, b) {
        return this.broadcastedBinaryOp(a, b, a.dtype, function (aValue, bValue) { return Math.atan2(aValue, bValue); });
    };
    MathBackendCPU.prototype.sinh = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.sinh(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.cosh = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.cosh(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.tanh = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = util.tanh(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.asinh = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.asinh(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.acosh = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.acosh(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.atanh = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            resultValues[i] = Math.atanh(values[i]);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.erf = function (x) {
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        var p = erf_util.ERF_P;
        var a1 = erf_util.ERF_A1;
        var a2 = erf_util.ERF_A2;
        var a3 = erf_util.ERF_A3;
        var a4 = erf_util.ERF_A4;
        var a5 = erf_util.ERF_A5;
        for (var i = 0; i < values.length; ++i) {
            var v = values[i];
            var t = 1.0 / (1.0 + p * v);
            resultValues[i] = 1.0 -
                (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t *
                    Math.exp(-v * v);
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.step = function (x, alpha) {
        if (alpha === void 0) { alpha = 0; }
        var resultValues = new Float32Array(x.size);
        var values = x.dataSync();
        for (var i = 0; i < values.length; ++i) {
            var value = values[i];
            if (isNaN(value)) {
                resultValues[i] = NaN;
            }
            else {
                resultValues[i] = value > 0 ? 1 : alpha;
            }
        }
        return tensor_1.Tensor.make(x.shape, { values: resultValues });
    };
    MathBackendCPU.prototype.conv2d = function (x, filter, convInfo) {
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var padLeft = convInfo.padInfo.left;
        var padTop = convInfo.padInfo.top;
        var y = ops.buffer(convInfo.outShape, x.dtype);
        for (var b = 0; b < convInfo.batchSize; ++b) {
            for (var d2 = 0; d2 < convInfo.outChannels; ++d2) {
                for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                    var xRCorner = yR * convInfo.strideHeight - padLeft;
                    for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                        var xCCorner = yC * convInfo.strideWidth - padTop;
                        var dotProd = 0;
                        for (var wR = 0; wR < filterHeight; wR++) {
                            var xR = xRCorner + wR * dilationHeight;
                            if (xR < 0 || xR >= convInfo.inHeight) {
                                continue;
                            }
                            for (var wC = 0; wC < filterWidth; wC++) {
                                var xC = xCCorner + wC * dilationWidth;
                                if (xC < 0 || xC >= convInfo.inWidth) {
                                    continue;
                                }
                                for (var d1 = 0; d1 < convInfo.inChannels; ++d1) {
                                    var pixel = x.get(b, xR, xC, d1);
                                    var weight = filter.get(wR, wC, d1, d2);
                                    dotProd += pixel * weight;
                                }
                            }
                        }
                        y.set(dotProd, b, yR, yC, d2);
                    }
                }
            }
        }
        return y.toTensor();
    };
    MathBackendCPU.prototype.conv2dDerInput = function (dy, filter, convInfo) {
        var dx = ops.buffer(convInfo.inShape, 'float32');
        var dxValues = dx.values;
        var _a = dx.strides, dxS0 = _a[0], dxS1 = _a[1], dxS2 = _a[2];
        var dyValues = dy.dataSync();
        var _b = dy.strides, dyS0 = _b[0], dyS1 = _b[1], dyS2 = _b[2];
        var fltValues = filter.dataSync();
        var _c = filter.strides, fltS0 = _c[0], fltS1 = _c[1], fltS2 = _c[2];
        var batchSize = convInfo.batchSize, filterHeight = convInfo.filterHeight, filterWidth = convInfo.filterWidth, inChannels = convInfo.inChannels, inHeight = convInfo.inHeight, inWidth = convInfo.inWidth, outChannels = convInfo.outChannels, outHeight = convInfo.outHeight, outWidth = convInfo.outWidth, strideHeight = convInfo.strideHeight, strideWidth = convInfo.strideWidth;
        var topPad = filterHeight - 1 - convInfo.padInfo.top;
        var leftPad = filterWidth - 1 - convInfo.padInfo.left;
        for (var b = 0; b < batchSize; ++b) {
            for (var d1 = 0; d1 < inChannels; ++d1) {
                for (var xR = 0; xR < inHeight; ++xR) {
                    var xRCorner = xR - topPad;
                    var xRMin = Math.max(0, Math.ceil(xRCorner / strideHeight));
                    var yRMax = Math.min(outHeight, (filterHeight + xRCorner) / strideHeight);
                    for (var xC = 0; xC < inWidth; ++xC) {
                        var xCCorner = xC - leftPad;
                        var xCMin = Math.max(0, Math.ceil(xCCorner / strideWidth));
                        var yCMax = Math.min(outWidth, (filterWidth + xCCorner) / strideWidth);
                        var dotProd = 0;
                        for (var yR = xRMin; yR < yRMax; ++yR) {
                            var wR = yR * strideHeight - xRCorner;
                            for (var yC = xCMin; yC < yCMax; ++yC) {
                                var wC = yC * strideWidth - xCCorner;
                                var dyOffset = dyS0 * b + dyS1 * yR + dyS2 * yC;
                                var fltOffset = fltS0 * (filterHeight - 1 - wR) +
                                    fltS1 * (filterWidth - 1 - wC) + fltS2 * d1;
                                for (var d2 = 0; d2 < outChannels; ++d2) {
                                    var pixel = dyValues[dyOffset + d2];
                                    var weight = fltValues[fltOffset + d2];
                                    dotProd += pixel * weight;
                                }
                            }
                        }
                        dxValues[dxS0 * b + dxS1 * xR + dxS2 * xC + d1] = dotProd;
                    }
                }
            }
        }
        return dx.toTensor();
    };
    MathBackendCPU.prototype.conv2dDerFilter = function (x, dy, convInfo) {
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var dW = ops.buffer(convInfo.filterShape, 'float32');
        var leftPad = convInfo.padInfo.left;
        var topPad = convInfo.padInfo.top;
        for (var wR = 0; wR < filterHeight; ++wR) {
            var yRMin = Math.max(0, Math.ceil((topPad - wR) / strideHeight));
            var yRMax = Math.min(convInfo.outHeight, (convInfo.inHeight + topPad - wR) / strideHeight);
            for (var wC = 0; wC < filterWidth; ++wC) {
                var yCMin = Math.max(0, Math.ceil((leftPad - wC) / strideWidth));
                var yCMax = Math.min(convInfo.outWidth, (convInfo.inWidth + leftPad - wC) / strideWidth);
                for (var d1 = 0; d1 < convInfo.inChannels; ++d1) {
                    for (var d2 = 0; d2 < convInfo.outChannels; ++d2) {
                        var dotProd = 0;
                        for (var b = 0; b < convInfo.batchSize; ++b) {
                            for (var yR = yRMin; yR < yRMax; ++yR) {
                                var xR = wR + yR * strideHeight - topPad;
                                for (var yC = yCMin; yC < yCMax; ++yC) {
                                    var xC = wC + yC * strideWidth - leftPad;
                                    dotProd += x.get(b, xR, xC, d1) * dy.get(b, yR, yC, d2);
                                }
                            }
                        }
                        dW.set(dotProd, wR, wC, d1, d2);
                    }
                }
            }
        }
        return dW.toTensor();
    };
    MathBackendCPU.prototype.depthwiseConv2D = function (x, filter, convInfo) {
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var dilationHeight = convInfo.dilationHeight;
        var dilationWidth = convInfo.dilationWidth;
        var padLeft = convInfo.padInfo.left;
        var padTop = convInfo.padInfo.top;
        var chMul = convInfo.outChannels / convInfo.inChannels;
        var y = ops.buffer(convInfo.outShape, x.dtype);
        for (var b = 0; b < convInfo.batchSize; ++b) {
            for (var d1 = 0; d1 < convInfo.inChannels; ++d1) {
                for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                    var xRCorner = yR * convInfo.strideHeight - padLeft;
                    for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                        var xCCorner = yC * convInfo.strideWidth - padTop;
                        for (var q = 0; q < chMul; ++q) {
                            var dotProd = 0;
                            for (var wR = 0; wR < filterHeight; ++wR) {
                                var xR = xRCorner + wR * dilationHeight;
                                if (xR < 0 || xR >= convInfo.inHeight) {
                                    continue;
                                }
                                for (var wC = 0; wC < filterWidth; ++wC) {
                                    var xC = xCCorner + wC * dilationWidth;
                                    if (xC < 0 || xC >= convInfo.inWidth) {
                                        continue;
                                    }
                                    var pixel = x.get(b, xR, xC, d1);
                                    var weight = filter.get(wR, wC, d1, q);
                                    dotProd += pixel * weight;
                                }
                            }
                            y.set(dotProd, b, yR, yC, d1 * chMul + q);
                        }
                    }
                }
            }
        }
        return y.toTensor();
    };
    MathBackendCPU.prototype.tile = function (x, reps) {
        var newShape = new Array(x.rank);
        for (var i = 0; i < newShape.length; i++) {
            newShape[i] = x.shape[i] * reps[i];
        }
        var result = ops.buffer(newShape, x.dtype);
        var xBuf = x.buffer();
        for (var i = 0; i < result.values.length; ++i) {
            var newLoc = result.indexToLoc(i);
            var originalLoc = new Array(x.rank);
            for (var i_1 = 0; i_1 < originalLoc.length; i_1++) {
                originalLoc[i_1] = newLoc[i_1] % x.shape[i_1];
            }
            var originalIndex = xBuf.locToIndex(originalLoc);
            result.values[i] = xBuf.values[originalIndex];
        }
        return result.toTensor();
    };
    MathBackendCPU.prototype.pad = function (x, paddings, constantValue) {
        var outShape = paddings.map(function (p, i) { return p[0] + x.shape[i] + p[1]; });
        var start = paddings.map(function (p) { return p[0]; });
        var xBuffer = x.buffer();
        var buffer = ops.buffer(outShape, x.dtype);
        if (constantValue !== 0) {
            buffer.values.fill(constantValue);
        }
        for (var i = 0; i < x.size; i++) {
            var coords = xBuffer.indexToLoc(i);
            var outCoords = coords.map(function (c, i) { return c + start[i]; });
            buffer.set.apply(buffer, [x.get.apply(x, coords)].concat(outCoords));
        }
        return buffer.toTensor();
    };
    MathBackendCPU.prototype.transpose = function (x, perm) {
        var newShape = new Array(x.rank);
        for (var i = 0; i < newShape.length; i++) {
            newShape[i] = x.shape[perm[i]];
        }
        var values = x.dataSync();
        var result = ops_1.buffer(newShape, x.dtype);
        var xBuf = x.buffer();
        for (var i = 0; i < x.size; ++i) {
            var loc = xBuf.indexToLoc(i);
            var newLoc = new Array(loc.length);
            for (var i_2 = 0; i_2 < newLoc.length; i_2++) {
                newLoc[i_2] = loc[perm[i_2]];
            }
            var newIndex = result.locToIndex(newLoc);
            result.values[newIndex] = values[i];
        }
        return result.toTensor();
    };
    MathBackendCPU.prototype.gather = function (x, indices, axis) {
        var newShape = x.shape.slice();
        var indicesValues = indices.dataSync();
        newShape[axis] = indicesValues.length;
        var result = ops_1.buffer(newShape, x.dtype);
        var xBuf = x.buffer();
        for (var i = 0; i < result.size; ++i) {
            var newLoc = result.indexToLoc(i);
            var originalLoc = newLoc.slice();
            originalLoc[axis] = indicesValues[newLoc[axis]];
            var originalIndex = xBuf.locToIndex(originalLoc);
            result.values[i] = xBuf.values[originalIndex];
        }
        return result.toTensor();
    };
    MathBackendCPU.prototype.pool = function (x, convInfo, poolType) {
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var y = ops.buffer(convInfo.outShape, 'float32');
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        for (var b = 0; b < convInfo.batchSize; ++b) {
            for (var d = 0; d < convInfo.inChannels; ++d) {
                for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                    var xRCorner = yR * strideHeight - padTop;
                    var xRMin = Math.max(0, xRCorner);
                    var xRMax = Math.min(convInfo.inHeight, filterHeight + xRCorner);
                    for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                        var xCCorner = yC * strideWidth - padLeft;
                        var xCMin = Math.max(0, xCCorner);
                        var xCMax = Math.min(convInfo.inWidth, filterWidth + xCCorner);
                        var minMaxValue = (poolType === 'max' ? Number.NEGATIVE_INFINITY :
                            Number.POSITIVE_INFINITY);
                        var avgValue = 0;
                        var count = 0;
                        for (var xR = xRMin; xR < xRMax; ++xR) {
                            for (var xC = xCMin; xC < xCMax; ++xC) {
                                var pixel = x.get(b, xR, xC, d);
                                if ((poolType === 'max' && pixel > minMaxValue)) {
                                    minMaxValue = pixel;
                                }
                                else if (poolType === 'avg') {
                                    avgValue += pixel;
                                    count++;
                                }
                            }
                            if (isNaN(minMaxValue)) {
                                break;
                            }
                        }
                        y.set(poolType === 'avg' ? avgValue / count : minMaxValue, b, yR, yC, d);
                    }
                }
            }
        }
        return y.toTensor();
    };
    MathBackendCPU.prototype.maxPool = function (x, convInfo) {
        return this.pool(x, convInfo, 'max');
    };
    MathBackendCPU.prototype.maxPoolPositions = function (x, convInfo) {
        var maxPositions = ops.buffer(convInfo.outShape, 'int32');
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var padTop = convInfo.padInfo.top;
        var padLeft = convInfo.padInfo.left;
        for (var b = 0; b < convInfo.batchSize; ++b) {
            for (var d = 0; d < convInfo.inChannels; ++d) {
                for (var yR = 0; yR < convInfo.outHeight; ++yR) {
                    var xRCorner = yR * strideHeight - padTop;
                    var xRMin = Math.max(0, xRCorner);
                    var xRMax = Math.min(convInfo.inHeight, filterHeight + xRCorner);
                    for (var yC = 0; yC < convInfo.outWidth; ++yC) {
                        var xCCorner = yC * strideWidth - padLeft;
                        var xCMin = Math.max(0, xCCorner);
                        var xCMax = Math.min(convInfo.inWidth, filterWidth + xCCorner);
                        var maxValue = Number.NEGATIVE_INFINITY;
                        var maxPosition = -1;
                        for (var xR = xRMin; xR < xRMax; ++xR) {
                            var wR = xR - xRCorner;
                            for (var xC = xCMin; xC < xCMax; ++xC) {
                                var wC = xC - xCCorner;
                                var pixel = x.get(b, xR, xC, d);
                                if (pixel > maxValue) {
                                    maxValue = pixel;
                                    maxPosition = wR * filterWidth + wC;
                                }
                            }
                        }
                        maxPositions.set(maxPosition, b, yR, yC, d);
                    }
                }
            }
        }
        return maxPositions.toTensor();
    };
    MathBackendCPU.prototype.maxPoolBackprop = function (dy, x, y, convInfo) {
        var maxPositions = this.maxPoolPositions(x, convInfo);
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var dx = ops.buffer(x.shape, 'float32');
        for (var b = 0; b < convInfo.batchSize; ++b) {
            for (var d = 0; d < convInfo.inChannels; ++d) {
                for (var dxR = 0; dxR < convInfo.inHeight; ++dxR) {
                    for (var dxC = 0; dxC < convInfo.inWidth; ++dxC) {
                        var dyRCorner = dxR - padTop;
                        var dyCCorner = dxC - padLeft;
                        var dotProd = 0;
                        for (var wR = 0; wR < filterHeight; ++wR) {
                            var dyR = (dyRCorner + wR) / strideHeight;
                            if (dyR < 0 || dyR >= convInfo.outHeight ||
                                Math.floor(dyR) !== dyR) {
                                continue;
                            }
                            for (var wC = 0; wC < filterWidth; ++wC) {
                                var dyC = (dyCCorner + wC) / strideWidth;
                                if (dyC < 0 || dyC >= convInfo.outWidth ||
                                    Math.floor(dyC) !== dyC) {
                                    continue;
                                }
                                var maxPos = filterHeight * filterWidth - 1 -
                                    maxPositions.get(b, dyR, dyC, d);
                                var curPos = wR * filterWidth + wC;
                                var mask = maxPos === curPos ? 1 : 0;
                                if (mask === 0) {
                                    continue;
                                }
                                var pixel = dy.get(b, dyR, dyC, d);
                                dotProd += pixel * mask;
                            }
                        }
                        dx.set(dotProd, b, dxR, dxC, d);
                    }
                }
            }
        }
        return dx.toTensor();
    };
    MathBackendCPU.prototype.avgPoolBackprop = function (dy, x, convInfo) {
        var strideHeight = convInfo.strideHeight;
        var strideWidth = convInfo.strideWidth;
        var filterHeight = convInfo.filterHeight;
        var filterWidth = convInfo.filterWidth;
        var padLeft = filterWidth - 1 - convInfo.padInfo.left;
        var padTop = filterHeight - 1 - convInfo.padInfo.top;
        var dx = ops.buffer(x.shape, 'float32');
        var avgMultiplier = 1 / (filterHeight * filterWidth);
        for (var b = 0; b < convInfo.batchSize; ++b) {
            for (var d = 0; d < convInfo.inChannels; ++d) {
                for (var dxR = 0; dxR < convInfo.inHeight; ++dxR) {
                    for (var dxC = 0; dxC < convInfo.inWidth; ++dxC) {
                        var dyRCorner = dxR - padTop;
                        var dyCCorner = dxC - padLeft;
                        var dotProd = 0;
                        for (var wR = 0; wR < filterHeight; ++wR) {
                            var dyR = (dyRCorner + wR) / strideHeight;
                            if (dyR < 0 || dyR >= convInfo.outHeight ||
                                Math.floor(dyR) !== dyR) {
                                continue;
                            }
                            for (var wC = 0; wC < filterWidth; ++wC) {
                                var dyC = (dyCCorner + wC) / strideWidth;
                                if (dyC < 0 || dyC >= convInfo.outWidth ||
                                    Math.floor(dyC) !== dyC) {
                                    continue;
                                }
                                var pixel = dy.get(b, dyR, dyC, d);
                                dotProd += pixel;
                            }
                        }
                        dx.set(dotProd * avgMultiplier, b, dxR, dxC, d);
                    }
                }
            }
        }
        return dx.toTensor();
    };
    MathBackendCPU.prototype.cast = function (x, dtype) {
        return backend_util.castTensor(x, dtype, this);
    };
    MathBackendCPU.prototype.reshape = function (x, shape) {
        return backend_util.reshapeTensor(x, shape);
    };
    MathBackendCPU.prototype.avgPool = function (x, convInfo) {
        return this.pool(x, convInfo, 'avg').toFloat();
    };
    MathBackendCPU.prototype.resizeBilinear = function (x, newHeight, newWidth, alignCorners) {
        var _a = x.shape, batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], numChannels = _a[3];
        var output = ops.buffer([batch, newHeight, newWidth, numChannels], x.dtype);
        var effectiveInputSize = [
            (alignCorners && newHeight > 1) ? oldHeight - 1 : oldHeight,
            (alignCorners && newWidth > 1) ? oldWidth - 1 : oldWidth
        ];
        var effectiveOutputSize = [
            (alignCorners && newHeight > 1) ? newHeight - 1 : newHeight,
            (alignCorners && newWidth > 1) ? newWidth - 1 : newWidth
        ];
        for (var b = 0; b < batch; b++) {
            for (var r = 0; r < newHeight; r++) {
                for (var c = 0; c < newWidth; c++) {
                    for (var d = 0; d < numChannels; d++) {
                        var sourceFracRow = (effectiveInputSize[0]) * r / (effectiveOutputSize[0]);
                        var sourceFracCol = (effectiveInputSize[1]) * c / (effectiveOutputSize[1]);
                        var sourceRowFloor = Math.floor(sourceFracRow);
                        var sourceRowCeil = Math.min(oldHeight - 1, Math.ceil(sourceFracRow));
                        var sourceColFloor = Math.floor(sourceFracCol);
                        var sourceColCeil = Math.min(oldWidth - 1, Math.ceil(sourceFracCol));
                        var topLeft = x.get(b, sourceRowFloor, sourceColFloor, d);
                        var bottomLeft = x.get(b, sourceRowCeil, sourceColFloor, d);
                        var topRight = x.get(b, sourceRowFloor, sourceColCeil, d);
                        var bottomRight = x.get(b, sourceRowCeil, sourceColCeil, d);
                        var rowFrac = sourceFracRow - sourceRowFloor;
                        var colFrac = sourceFracCol - sourceColFloor;
                        var top_1 = topLeft + (topRight - topLeft) * colFrac;
                        var bottom = bottomLeft + (bottomRight - bottomLeft) * colFrac;
                        var newValue = top_1 + (bottom - top_1) * rowFrac;
                        output.set(newValue, b, r, c, d);
                    }
                }
            }
        }
        return output.toTensor();
    };
    MathBackendCPU.prototype.resizeBilinearBackprop = function (dy, x, alignCorners) {
        var _a = x.shape, batch = _a[0], xHeight = _a[1], xWidth = _a[2], depth = _a[3];
        var _b = dy.shape, yHeight = _b[1], yWidth = _b[2];
        var output = ops.buffer([batch, xHeight, xWidth, depth], x.dtype);
        var effectiveXSize = [
            (alignCorners && yHeight > 1) ? xHeight - 1 : xHeight,
            (alignCorners && yWidth > 1) ? xWidth - 1 : xWidth
        ];
        var effectiveYSize = [
            (alignCorners && yHeight > 1) ? yHeight - 1 : yHeight,
            (alignCorners && yWidth > 1) ? yWidth - 1 : yWidth
        ];
        var heightScale = effectiveXSize[0] / effectiveYSize[0];
        var widthScale = effectiveXSize[1] / effectiveYSize[1];
        for (var b = 0; b < batch; b++) {
            for (var r = 0; r < yHeight; r++) {
                var dxR = r * heightScale;
                var topDxRIndex = Math.floor(dxR);
                var bottomDxRIndex = Math.min(Math.ceil(dxR), xHeight - 1);
                var dxRLerp = dxR - topDxRIndex;
                var inverseDxRLerp = 1.0 - dxRLerp;
                for (var c = 0; c < yWidth; c++) {
                    var dxC = c * widthScale;
                    var leftDxCIndex = Math.floor(dxC);
                    var rightDxCIndex = Math.min(Math.ceil(dxC), xWidth - 1);
                    var dxCLerp = dxC - leftDxCIndex;
                    var inverseDxCLerp = 1.0 - dxCLerp;
                    for (var d = 0; d < depth; d++) {
                        var dyVal = dy.get(b, r, c, d);
                        var topLeft = output.get(b, topDxRIndex, leftDxCIndex, d);
                        topLeft += dyVal * inverseDxRLerp * inverseDxCLerp;
                        output.set(topLeft, b, topDxRIndex, leftDxCIndex, d);
                        var topRight = output.get(b, topDxRIndex, rightDxCIndex, d);
                        topRight += dyVal * inverseDxRLerp * dxCLerp;
                        output.set(topRight, b, topDxRIndex, rightDxCIndex, d);
                        var bottomLeft = output.get(b, bottomDxRIndex, leftDxCIndex, d);
                        bottomLeft += dyVal * dxRLerp * inverseDxCLerp;
                        output.set(bottomLeft, b, bottomDxRIndex, leftDxCIndex, d);
                        var bottomRight = output.get(b, bottomDxRIndex, rightDxCIndex, d);
                        bottomRight += dyVal * dxRLerp * dxCLerp;
                        output.set(bottomRight, b, bottomDxRIndex, rightDxCIndex, d);
                    }
                }
            }
        }
        return output.toTensor();
    };
    MathBackendCPU.prototype.resizeNearestNeighbor = function (x, newHeight, newWidth, alignCorners) {
        var _a = x.shape, batch = _a[0], oldHeight = _a[1], oldWidth = _a[2], numChannels = _a[3];
        var output = ops.buffer([batch, newHeight, newWidth, numChannels], x.dtype);
        var effectiveInputSize = alignCorners ? [oldHeight - 1, oldWidth - 1] : [oldHeight, oldWidth];
        var effectiveOutputSize = alignCorners ? [newHeight - 1, newWidth - 1] : [newHeight, newWidth];
        for (var b = 0; b < batch; b++) {
            for (var r = 0; r < newHeight; r++) {
                for (var c = 0; c < newWidth; c++) {
                    for (var d = 0; d < numChannels; d++) {
                        var sourceFracRow = (effectiveInputSize[0]) * r / (effectiveOutputSize[0]);
                        var sourceFracCol = (effectiveInputSize[1]) * c / (effectiveOutputSize[1]);
                        var sourceNearestRow = Math.min(oldHeight - 1, alignCorners ? Math.round(sourceFracRow) :
                            Math.floor(sourceFracRow));
                        var sourceNearestCol = Math.min(oldWidth - 1, alignCorners ? Math.round(sourceFracCol) :
                            Math.floor(sourceFracCol));
                        var newValue = x.get(b, sourceNearestRow, sourceNearestCol, d);
                        output.set(newValue, b, r, c, d);
                    }
                }
            }
        }
        return output.toTensor();
    };
    MathBackendCPU.prototype.batchNormalization = function (x, mean, variance, varianceEpsilon, scale, offset) {
        var xValues = x.dataSync();
        var meanValues = mean.dataSync();
        var varianceValues = variance.dataSync();
        var scaleValues = scale ? scale.dataSync() : new Float32Array([1]);
        var offsetValues = offset ? offset.dataSync() : new Float32Array([0]);
        var outValues = new Float32Array(xValues.length);
        for (var i = 0; i < xValues.length; i++) {
            outValues[i] = offsetValues[i % offsetValues.length] +
                (xValues[i] - meanValues[i % meanValues.length]) *
                    scaleValues[i % scaleValues.length] /
                    Math.sqrt(varianceValues[i % varianceValues.length] + varianceEpsilon);
        }
        return ops_1.tensor4d(outValues, x.shape);
    };
    MathBackendCPU.prototype.localResponseNormalization4D = function (x, radius, bias, alpha, beta) {
        var output = ops.buffer(x.shape, 'float32');
        var rad = radius;
        var maxD = output.shape[3] - 1;
        function sumAcrossChannels(b, r, c, d) {
            var sum = 0.0;
            for (var j = Math.max(0, d - rad); j <= Math.min(d + rad, maxD); j++) {
                var z = x.get(b, r, c, j);
                sum += z * z;
            }
            return sum;
        }
        for (var b = 0; b < output.shape[0]; b++) {
            for (var r = 0; r <= output.shape[1]; r++) {
                for (var c = 0; c < output.shape[2]; c++) {
                    for (var d = 0; d < output.shape[3]; d++) {
                        var sum = sumAcrossChannels(b, r, c, d);
                        var val = x.get(b, r, c, d) * Math.pow(bias + alpha * sum, -beta);
                        output.set(val, b, r, c, d);
                    }
                }
            }
        }
        return output.toTensor();
    };
    MathBackendCPU.prototype.multinomial = function (logits, normalized, numSamples, seed) {
        var probabilities = normalized ? logits : ops.softmax(logits);
        var batchSize = probabilities.shape[0];
        var numEvents = probabilities.shape[1];
        var res = ops.zeros([batchSize, numSamples], 'int32');
        var resVals = res.dataSync();
        var probVals = probabilities.dataSync();
        for (var b = 0; b < batchSize; ++b) {
            var offset = b * numEvents;
            var cdf = new Float32Array(numEvents - 1);
            cdf[0] = probVals[offset];
            for (var event_1 = 1; event_1 < cdf.length; ++event_1) {
                cdf[event_1] = cdf[event_1 - 1] + probVals[offset + event_1];
            }
            var random = seedrandom.alea(seed.toString());
            var outOffset = b * numSamples;
            for (var sampleId = 0; sampleId < numSamples; ++sampleId) {
                var r = random();
                resVals[outOffset + sampleId] = cdf.length;
                for (var event_2 = 0; event_2 < cdf.length; event_2++) {
                    if (r < cdf[event_2]) {
                        resVals[outOffset + sampleId] = event_2;
                        break;
                    }
                }
            }
        }
        return res;
    };
    MathBackendCPU.prototype.oneHot = function (indices, depth, onValue, offValue) {
        var res = new Float32Array(indices.size * depth);
        res.fill(offValue);
        for (var event_3 = 0; event_3 < indices.size; ++event_3) {
            res[event_3 * depth + indices.get(event_3)] = onValue;
        }
        return ops.tensor2d(res, [indices.size, depth]);
    };
    MathBackendCPU.prototype.broadcastedBinaryOp = function (a, b, dtype, op) {
        var newShape = broadcast_util.assertAndGetBroadcastShape(a.shape, b.shape);
        var result = ops.buffer(newShape, dtype);
        var aValues = a.dataSync();
        var bValues = b.dataSync();
        var aBroadcastDims = broadcast_util.getBroadcastDims(a.shape, newShape);
        var bBroadcastDims = broadcast_util.getBroadcastDims(b.shape, newShape);
        var aBuf = a.buffer();
        var bBuf = b.buffer();
        var _loop_2 = function (i) {
            var loc = result.indexToLoc(i);
            var aLoc = loc.slice(-a.rank);
            aBroadcastDims.forEach(function (d) { return aLoc[d] = 0; });
            var aIndex = aBuf.locToIndex(aLoc);
            var bLoc = loc.slice(-b.rank);
            bBroadcastDims.forEach(function (d) { return bLoc[d] = 0; });
            var bIndex = bBuf.locToIndex(bLoc);
            result.values[i] = op(aValues[aIndex], bValues[bIndex]);
        };
        for (var i = 0; i < result.values.length; ++i) {
            _loop_2(i);
        }
        return result.toTensor();
    };
    MathBackendCPU.prototype.dispose = function () { };
    return MathBackendCPU;
}());
exports.MathBackendCPU = MathBackendCPU;
environment_1.ENV.registerBackend('cpu', function () { return new MathBackendCPU(); }, 1);

},{"seedrandom":132,"../environment":24,"../ops/axis_util":58,"../ops/broadcast_util":62,"../ops/concat_util":61,"../ops/erf_util":63,"../ops/ops":47,"../ops/selu_util":64,"../tensor":32,"../types":31,"../util":26,"./backend_util":60}],25:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("./doc");
var BrowserUtil = (function () {
    function BrowserUtil() {
    }
    BrowserUtil.nextFrame = function () {
        return new Promise(function (resolve) { return requestAnimationFrame(function () { return resolve(); }); });
    };
    __decorate([
        doc_1.doc({ heading: 'Performance', subheading: 'Timing' })
    ], BrowserUtil, "nextFrame", null);
    return BrowserUtil;
}());
exports.BrowserUtil = BrowserUtil;

},{"./doc":35}],127:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DTYPE_VALUE_SIZE_MAP = {
    'float32': 4,
    'int32': 4,
    'uint16': 2,
    'uint8': 1,
    'bool': 1,
};

},{}],70:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var array_ops_1 = require("../ops/array_ops");
var util_1 = require("../util");
var types_1 = require("./types");
function encodeWeights(tensors) {
    return __awaiter(this, void 0, void 0, function () {
        var specs, dataPromises, name_1, t, tensorValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    specs = [];
                    dataPromises = [];
                    for (name_1 in tensors) {
                        t = tensors[name_1];
                        if (t.dtype !== 'float32' && t.dtype !== 'int32' && t.dtype !== 'bool') {
                            throw new Error("Unsupported dtype in weight '" + name_1 + "': " + t.dtype);
                        }
                        specs.push({ name: name_1, shape: t.shape, dtype: t.dtype });
                        dataPromises.push(t.data());
                    }
                    return [4, Promise.all(dataPromises)];
                case 1:
                    tensorValues = _a.sent();
                    return [2, { data: concatenateTypedArrays(tensorValues), specs: specs }];
            }
        });
    });
}
exports.encodeWeights = encodeWeights;
function decodeWeights(buffer, specs) {
    var out = {};
    var offset = 0;
    for (var _i = 0, specs_1 = specs; _i < specs_1.length; _i++) {
        var spec = specs_1[_i];
        var name_2 = spec.name;
        var dtype = spec.dtype;
        var shape = spec.shape;
        if (spec.quantization != null) {
            throw new Error("decodeWeights does not support quantization yet, but encountered " +
                ("weight '" + name_2 + " with quantization.'"));
        }
        var size = util_1.sizeFromShape(shape);
        var value = void 0;
        if (dtype === 'float32') {
            value = array_ops_1.ArrayOps.tensor(new Float32Array(buffer, offset, size), shape, 'float32');
        }
        else if (dtype === 'int32') {
            value =
                array_ops_1.ArrayOps.tensor(new Int32Array(buffer, offset, size), shape, 'int32');
        }
        else if (dtype === 'bool') {
            value =
                array_ops_1.ArrayOps.tensor(new Uint8Array(buffer, offset, size), shape, 'bool');
        }
        else {
            throw new Error("Unsupported dtype in weight '" + name_2 + "': " + dtype);
        }
        out[name_2] = value;
        offset += size * types_1.DTYPE_VALUE_SIZE_MAP[dtype];
    }
    return out;
}
exports.decodeWeights = decodeWeights;
function concatenateTypedArrays(xs) {
    if (xs === null) {
        throw new Error("Invalid input value: " + JSON.stringify(xs));
    }
    var totalByteLength = 0;
    xs.forEach(function (x) {
        if (x instanceof Float32Array || x instanceof Int32Array) {
            totalByteLength += x.length * 4;
        }
        else if (x instanceof Uint8Array) {
            totalByteLength += x.length;
        }
        else {
            throw new Error("Unsupported TypedArray subtype: " + x.constructor.name);
        }
    });
    var y = new Uint8Array(totalByteLength);
    var offset = 0;
    xs.forEach(function (x) {
        y.set(new Uint8Array(x.buffer), offset);
        if (x instanceof Float32Array || x instanceof Int32Array) {
            offset += x.length * 4;
        }
        else {
            offset += x.length;
        }
    });
    return y.buffer;
}
exports.concatenateTypedArrays = concatenateTypedArrays;
function stringByteLength(str) {
    return new Blob([str]).size;
}
exports.stringByteLength = stringByteLength;
function arrayBufferToBase64String(buffer) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(buffer)));
}
exports.arrayBufferToBase64String = arrayBufferToBase64String;
function base64StringToArrayBuffer(str) {
    var s = atob(str);
    var buffer = new Uint8Array(s.length);
    for (var i = 0; i < s.length; ++i) {
        buffer.set([s.charCodeAt(i)], i);
    }
    return buffer.buffer;
}
exports.base64StringToArrayBuffer = base64StringToArrayBuffer;
function concatenateArrayBuffers(buffers) {
    var totalByteLength = 0;
    buffers.forEach(function (buffer) {
        totalByteLength += buffer.byteLength;
    });
    var temp = new Uint8Array(totalByteLength);
    var offset = 0;
    buffers.forEach(function (buffer) {
        temp.set(new Uint8Array(buffer), offset);
        offset += buffer.byteLength;
    });
    return temp.buffer;
}
exports.concatenateArrayBuffers = concatenateArrayBuffers;
function basename(path) {
    var SEPARATOR = '/';
    path = path.trim();
    while (path.endsWith(SEPARATOR)) {
        path = path.slice(0, path.length - 1);
    }
    var items = path.split(SEPARATOR);
    return items[items.length - 1];
}
exports.basename = basename;
function getModelArtifactsInfoForKerasJSON(modelArtifacts) {
    if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
        throw new Error('Expected JSON model topology, received ArrayBuffer.');
    }
    return {
        dateSaved: new Date(),
        modelTopologyType: 'KerasJSON',
        modelTopologyBytes: modelArtifacts.modelTopology == null ?
            0 :
            stringByteLength(JSON.stringify(modelArtifacts.modelTopology)),
        weightSpecsBytes: modelArtifacts.weightSpecs == null ?
            0 :
            stringByteLength(JSON.stringify(modelArtifacts.weightSpecs)),
        weightDataBytes: modelArtifacts.weightData == null ?
            0 :
            modelArtifacts.weightData.byteLength,
    };
}
exports.getModelArtifactsInfoForKerasJSON = getModelArtifactsInfoForKerasJSON;

},{"../ops/array_ops":73,"../util":26,"./types":127}],71:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IORouterRegistry = (function () {
    function IORouterRegistry() {
        this.saveRouters = [];
        this.loadRouters = [];
    }
    IORouterRegistry.getInstance = function () {
        if (IORouterRegistry.instance == null) {
            IORouterRegistry.instance = new IORouterRegistry();
        }
        return IORouterRegistry.instance;
    };
    IORouterRegistry.registerSaveRouter = function (saveRouter) {
        IORouterRegistry.getInstance().saveRouters.push(saveRouter);
    };
    IORouterRegistry.registerLoadRouter = function (loadRouter) {
        IORouterRegistry.getInstance().loadRouters.push(loadRouter);
    };
    IORouterRegistry.getSaveHandlers = function (url) {
        return IORouterRegistry.getHandlers(url, 'save');
    };
    IORouterRegistry.getLoadHandlers = function (url) {
        return IORouterRegistry.getHandlers(url, 'load');
    };
    IORouterRegistry.getHandlers = function (url, handlerType) {
        var validHandlers = [];
        var routers = handlerType === 'load' ? this.getInstance().loadRouters :
            this.getInstance().saveRouters;
        routers.forEach(function (router) {
            var handler = router(url);
            if (handler !== null) {
                validHandlers.push(handler);
            }
        });
        return validHandlers;
    };
    return IORouterRegistry;
}());
exports.IORouterRegistry = IORouterRegistry;

},{}],65:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var io_utils_1 = require("./io_utils");
var router_registry_1 = require("./router_registry");
var DATABASE_NAME = 'tensorflowjs';
var DATABASE_VERSION = 1;
var OBJECT_STORE_NAME = 'models_store';
function deleteDatabase() {
    return __awaiter(this, void 0, void 0, function () {
        var idbFactory;
        return __generator(this, function (_a) {
            idbFactory = getIndexedDBFactory();
            return [2, new Promise(function (resolve, reject) {
                    var deleteRequest = idbFactory.deleteDatabase(DATABASE_NAME);
                    deleteRequest.onsuccess = function () { return resolve(); };
                    deleteRequest.onerror = function (error) { return reject(error); };
                })];
        });
    });
}
exports.deleteDatabase = deleteDatabase;
function getIndexedDBFactory() {
    if (!environment_1.ENV.get('IS_BROWSER')) {
        throw new Error('Failed to obtain IndexedDB factory because the current environment' +
            'is not a web browser.');
    }
    var theWindow = window;
    var factory = theWindow.indexedDB || theWindow.mozIndexedDB ||
        theWindow.webkitIndexedDB || theWindow.msIndexedDB ||
        theWindow.shimIndexedDB;
    if (factory == null) {
        throw new Error('The current browser does not appear to support IndexedDB.');
    }
    return factory;
}
var BrowserIndexedDB = (function () {
    function BrowserIndexedDB(modelPath) {
        this.indexedDB = getIndexedDBFactory();
        if (modelPath == null || !modelPath) {
            throw new Error('For IndexedDB, modelPath must not be null, undefined or empty.');
        }
        this.modelPath = modelPath;
    }
    BrowserIndexedDB.prototype.save = function (modelArtifacts) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                    throw new Error('BrowserLocalStorage.save() does not support saving model topology ' +
                        'in binary formats yet.');
                }
                return [2, this.databaseAction(this.modelPath, modelArtifacts)];
            });
        });
    };
    BrowserIndexedDB.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, this.databaseAction(this.modelPath)];
            });
        });
    };
    BrowserIndexedDB.prototype.databaseAction = function (modelPath, modelArtifacts) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var openRequest = _this.indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
            openRequest.onupgradeneeded = function () { return _this.setUpDatabase(openRequest); };
            openRequest.onsuccess = function () {
                var db = openRequest.result;
                var tx = db.transaction(OBJECT_STORE_NAME, modelArtifacts == null ? 'readonly' : 'readwrite');
                var store = tx.objectStore(OBJECT_STORE_NAME);
                if (modelArtifacts == null) {
                    var getRequest_1 = store.get(_this.modelPath);
                    getRequest_1.onsuccess = function () {
                        if (getRequest_1.result === undefined) {
                            reject(new Error("Cannot find model with path '" + _this.modelPath + "' " +
                                "in IndexedDB."));
                        }
                        else {
                            resolve(getRequest_1.result.modelArtifacts);
                        }
                    };
                    getRequest_1.onerror = function (error) { return reject(getRequest_1.error); };
                }
                else {
                    var modelArtifactsInfo_1 = io_utils_1.getModelArtifactsInfoForKerasJSON(modelArtifacts);
                    var putRequest_1 = store.put({ modelPath: _this.modelPath, modelArtifacts: modelArtifacts, modelArtifactsInfo: modelArtifactsInfo_1 });
                    putRequest_1.onsuccess = function () { return resolve({ modelArtifactsInfo: modelArtifactsInfo_1 }); };
                    putRequest_1.onerror = function (error) { return reject(putRequest_1.error); };
                    tx.oncomplete = function () { return db.close(); };
                }
                tx.oncomplete = function () { return db.close(); };
            };
            openRequest.onerror = function (error) { return reject(openRequest.error); };
        });
    };
    BrowserIndexedDB.prototype.setUpDatabase = function (openRequest) {
        var db = openRequest.result;
        db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'modelPath' });
    };
    BrowserIndexedDB.URL_SCHEME = 'indexeddb://';
    return BrowserIndexedDB;
}());
exports.BrowserIndexedDB = BrowserIndexedDB;
exports.indexedDBRouter = function (url) {
    if (!environment_1.ENV.get('IS_BROWSER')) {
        return null;
    }
    else {
        if (url.startsWith(BrowserIndexedDB.URL_SCHEME)) {
            return browserIndexedDB(url.slice(BrowserIndexedDB.URL_SCHEME.length));
        }
        else {
            return null;
        }
    }
};
router_registry_1.IORouterRegistry.registerSaveRouter(exports.indexedDBRouter);
router_registry_1.IORouterRegistry.registerLoadRouter(exports.indexedDBRouter);
function browserIndexedDB(modelPath) {
    return new BrowserIndexedDB(modelPath);
}
exports.browserIndexedDB = browserIndexedDB;

},{"../environment":24,"./io_utils":70,"./router_registry":71}],66:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var io_utils_1 = require("./io_utils");
var router_registry_1 = require("./router_registry");
var PATH_SEPARATOR = '/';
var PATH_PREFIX = 'tensorflowjs_models';
var INFO_SUFFIX = 'info';
var MODEL_TOPOLOGY_SUFFIX = 'model_topology';
var WEIGHT_SPECS_SUFFIX = 'weight_specs';
var WEIGHT_DATA_SUFFIX = 'weight_data';
function purgeLocalStorageArtifacts() {
    if (!environment_1.ENV.get('IS_BROWSER') || typeof window.localStorage === 'undefined') {
        throw new Error('purgeLocalStorageModels() cannot proceed because local storage is ' +
            'unavailable in the current environment.');
    }
    var LS = window.localStorage;
    var purgedModelPaths = [];
    for (var i = 0; i < LS.length; ++i) {
        var key = LS.key(i);
        var prefix = PATH_PREFIX + PATH_SEPARATOR;
        if (key.startsWith(prefix) && key.length > prefix.length) {
            var modelName = key.slice(prefix.length).split(PATH_PREFIX)[0];
            if (purgedModelPaths.indexOf(modelName) === -1) {
                purgedModelPaths.push(modelName);
            }
        }
    }
    return purgedModelPaths;
}
exports.purgeLocalStorageArtifacts = purgeLocalStorageArtifacts;
var BrowserLocalStorage = (function () {
    function BrowserLocalStorage(modelPath) {
        if (!environment_1.ENV.get('IS_BROWSER') || typeof window.localStorage === 'undefined') {
            throw new Error('The current environment does not support local storage.');
        }
        this.LS = window.localStorage;
        if (modelPath == null || !modelPath) {
            throw new Error('For local storage, modelPath must not be null, undefined or empty.');
        }
        this.modelPath = modelPath;
        var modelRoot = [PATH_PREFIX, this.modelPath].join(PATH_SEPARATOR);
        this.paths = {
            info: [modelRoot, INFO_SUFFIX].join(PATH_SEPARATOR),
            topology: [modelRoot, MODEL_TOPOLOGY_SUFFIX].join(PATH_SEPARATOR),
            weightSpecs: [modelRoot, WEIGHT_SPECS_SUFFIX].join(PATH_SEPARATOR),
            weightData: [modelRoot, WEIGHT_DATA_SUFFIX].join(PATH_SEPARATOR),
        };
    }
    BrowserLocalStorage.prototype.save = function (modelArtifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var topology, weightSpecs, modelArtifactsInfo, key;
            return __generator(this, function (_a) {
                if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                    throw new Error('BrowserLocalStorage.save() does not support saving model topology ' +
                        'in binary formats yet.');
                }
                else {
                    topology = JSON.stringify(modelArtifacts.modelTopology);
                    weightSpecs = JSON.stringify(modelArtifacts.weightSpecs);
                    modelArtifactsInfo = io_utils_1.getModelArtifactsInfoForKerasJSON(modelArtifacts);
                    try {
                        this.LS.setItem(this.paths.info, JSON.stringify(modelArtifactsInfo));
                        this.LS.setItem(this.paths.topology, topology);
                        this.LS.setItem(this.paths.weightSpecs, weightSpecs);
                        this.LS.setItem(this.paths.weightData, io_utils_1.arrayBufferToBase64String(modelArtifacts.weightData));
                        return [2, { modelArtifactsInfo: modelArtifactsInfo }];
                    }
                    catch (err) {
                        for (key in this.paths) {
                            this.LS.removeItem(this.paths[key]);
                        }
                        throw new Error("Failed to save model '" + this.modelPath + "' to local storage: " +
                            "size quota being exceeded is a possible cause of this failure: " +
                            ("modelTopologyBytes=" + modelArtifactsInfo.modelTopologyBytes + ", ") +
                            ("weightSpecsBytes=" + modelArtifactsInfo.weightSpecsBytes + ", ") +
                            ("weightDataBytes=" + modelArtifactsInfo.weightDataBytes + "."));
                    }
                }
                return [2];
            });
        });
    };
    BrowserLocalStorage.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var info, out, topology, weightSpecs, weightDataBase64;
            return __generator(this, function (_a) {
                info = JSON.parse(this.LS.getItem(this.paths.info));
                if (info == null) {
                    throw new Error("In local storage, there is no model with name '" + this.modelPath + "'");
                }
                if (info.modelTopologyType !== 'KerasJSON') {
                    throw new Error('BrowserLocalStorage does not support loading non-JSON model ' +
                        'topology yet.');
                }
                out = {};
                topology = JSON.parse(this.LS.getItem(this.paths.topology));
                if (topology == null) {
                    throw new Error("In local storage, the topology of model '" + this.modelPath + "' " +
                        "is missing.");
                }
                out.modelTopology = topology;
                weightSpecs = JSON.parse(this.LS.getItem(this.paths.weightSpecs));
                if (weightSpecs == null) {
                    throw new Error("In local storage, the weight specs of model '" + this.modelPath + "' " +
                        "are missing.");
                }
                out.weightSpecs = weightSpecs;
                weightDataBase64 = this.LS.getItem(this.paths.weightData);
                if (weightDataBase64 == null) {
                    throw new Error("In local storage, the binary weight values of model " +
                        ("'" + this.modelPath + "' are missing."));
                }
                out.weightData = io_utils_1.base64StringToArrayBuffer(weightDataBase64);
                return [2, out];
            });
        });
    };
    BrowserLocalStorage.URL_SCHEME = 'localstorage://';
    return BrowserLocalStorage;
}());
exports.BrowserLocalStorage = BrowserLocalStorage;
exports.localStorageRouter = function (url) {
    if (!environment_1.ENV.get('IS_BROWSER')) {
        return null;
    }
    else {
        if (url.startsWith(BrowserLocalStorage.URL_SCHEME)) {
            return browserLocalStorage(url.slice(BrowserLocalStorage.URL_SCHEME.length));
        }
        else {
            return null;
        }
    }
};
router_registry_1.IORouterRegistry.registerSaveRouter(exports.localStorageRouter);
router_registry_1.IORouterRegistry.registerLoadRouter(exports.localStorageRouter);
function browserLocalStorage(modelPath) {
    return new BrowserLocalStorage(modelPath);
}
exports.browserLocalStorage = browserLocalStorage;

},{"../environment":24,"./io_utils":70,"./router_registry":71}],68:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var io_utils_1 = require("./io_utils");
var router_registry_1 = require("./router_registry");
var DEFAULT_FILE_NAME_PREFIX = 'model';
var DEFAULT_JSON_EXTENSION_NAME = '.json';
var DEFAULT_WEIGHT_DATA_EXTENSION_NAME = '.weights.bin';
var BrowserDownloads = (function () {
    function BrowserDownloads(fileNamePrefix) {
        if (!environment_1.ENV.get('IS_BROWSER')) {
            throw new Error('triggerDownloads() cannot proceed because the current environment ' +
                'is not a browser.');
        }
        if (fileNamePrefix.startsWith(BrowserDownloads.URL_SCHEME)) {
            fileNamePrefix = fileNamePrefix.slice(BrowserDownloads.URL_SCHEME.length);
        }
        if (fileNamePrefix == null || fileNamePrefix.length === 0) {
            fileNamePrefix = DEFAULT_FILE_NAME_PREFIX;
        }
        this.modelTopologyFileName = fileNamePrefix + DEFAULT_JSON_EXTENSION_NAME;
        this.weightDataFileName =
            fileNamePrefix + DEFAULT_WEIGHT_DATA_EXTENSION_NAME;
    }
    BrowserDownloads.prototype.save = function (modelArtifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var weightsURL, weightsManifest, modelTopologyAndWeightManifest, modelTopologyAndWeightManifestURL, jsonAnchor, weightDataAnchor;
            return __generator(this, function (_a) {
                weightsURL = window.URL.createObjectURL(new Blob([modelArtifacts.weightData], { type: 'application/octet-stream' }));
                if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                    throw new Error('DownloadTrigger.save() does not support saving model topology ' +
                        'in binary formats yet.');
                }
                else {
                    weightsManifest = [{
                            paths: ['./' + this.weightDataFileName],
                            weights: modelArtifacts.weightSpecs
                        }];
                    modelTopologyAndWeightManifest = {
                        modelTopology: modelArtifacts.modelTopology,
                        weightsManifest: weightsManifest
                    };
                    modelTopologyAndWeightManifestURL = window.URL.createObjectURL(new Blob([JSON.stringify(modelTopologyAndWeightManifest)], { type: 'application/json' }));
                    jsonAnchor = this.jsonAnchor == null ? document.createElement('a') :
                        this.jsonAnchor;
                    jsonAnchor.download = this.modelTopologyFileName;
                    jsonAnchor.href = modelTopologyAndWeightManifestURL;
                    jsonAnchor.click();
                    if (modelArtifacts.weightData != null) {
                        weightDataAnchor = this.weightDataAnchor == null ?
                            document.createElement('a') :
                            this.weightDataAnchor;
                        weightDataAnchor.download = this.weightDataFileName;
                        weightDataAnchor.href = weightsURL;
                        weightDataAnchor.click();
                    }
                    return [2, {
                            modelArtifactsInfo: io_utils_1.getModelArtifactsInfoForKerasJSON(modelArtifacts)
                        }];
                }
                return [2];
            });
        });
    };
    BrowserDownloads.URL_SCHEME = 'downloads://';
    return BrowserDownloads;
}());
exports.BrowserDownloads = BrowserDownloads;
var BrowserFiles = (function () {
    function BrowserFiles(files) {
        if (files == null || files.length < 1) {
            throw new Error("When calling browserFiles, at least 1 file is required, " +
                ("but received " + files));
        }
        this.files = files;
    }
    BrowserFiles.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var jsonFile, weightFiles;
            return __generator(this, function (_a) {
                jsonFile = this.files[0];
                weightFiles = this.files.slice(1);
                return [2, new Promise(function (resolve, reject) {
                        var jsonReader = new FileReader();
                        jsonReader.onload = function (event) {
                            var modelJSON = JSON.parse(event.target.result);
                            var modelTopology = modelJSON.modelTopology;
                            if (modelTopology == null) {
                                reject(new Error("modelTopology field is missing from file " + jsonFile.name));
                                return;
                            }
                            if (weightFiles.length === 0) {
                                resolve({ modelTopology: modelTopology });
                            }
                            var weightsManifest = modelJSON.weightsManifest;
                            if (weightsManifest == null) {
                                reject(new Error("weightManifest field is missing from file " + jsonFile.name));
                                return;
                            }
                            var pathToFile;
                            try {
                                pathToFile =
                                    _this.checkManifestAndWeightFiles(weightsManifest, weightFiles);
                            }
                            catch (err) {
                                reject(err);
                                return;
                            }
                            var weightSpecs = [];
                            var paths = [];
                            var perFileBuffers = [];
                            weightsManifest.forEach(function (weightsGroup) {
                                weightsGroup.paths.forEach(function (path) {
                                    paths.push(path);
                                    perFileBuffers.push(null);
                                });
                                weightSpecs.push.apply(weightSpecs, weightsGroup.weights);
                            });
                            weightsManifest.forEach(function (weightsGroup) {
                                weightsGroup.paths.forEach(function (path) {
                                    var weightFileReader = new FileReader();
                                    weightFileReader.onload = function (event) {
                                        var weightData = event.target.result;
                                        var index = paths.indexOf(path);
                                        perFileBuffers[index] = weightData;
                                        if (perFileBuffers.indexOf(null) === -1) {
                                            resolve({
                                                modelTopology: modelTopology,
                                                weightSpecs: weightSpecs,
                                                weightData: io_utils_1.concatenateArrayBuffers(perFileBuffers),
                                            });
                                        }
                                    };
                                    weightFileReader.onerror = function (error) {
                                        reject("Failed to weights data from file of path '" + path + "'.");
                                        return;
                                    };
                                    weightFileReader.readAsArrayBuffer(pathToFile[path]);
                                });
                            });
                        };
                        jsonReader.onerror = function (error) {
                            reject("Failed to read model topology and weights manifest JSON " +
                                ("from file '" + jsonFile.name + "'. BrowserFiles supports loading ") +
                                "Keras-style tf.Model artifacts only.");
                            return;
                        };
                        jsonReader.readAsText(jsonFile);
                    })];
            });
        });
    };
    BrowserFiles.prototype.checkManifestAndWeightFiles = function (manifest, files) {
        var basenames = [];
        var fileNames = files.map(function (file) { return io_utils_1.basename(file.name); });
        var pathToFile = {};
        for (var _i = 0, manifest_1 = manifest; _i < manifest_1.length; _i++) {
            var group = manifest_1[_i];
            group.paths.forEach(function (path) {
                var pathBasename = io_utils_1.basename(path);
                if (basenames.indexOf(pathBasename) !== -1) {
                    throw new Error("Duplicate file basename found in weights manifest: " +
                        ("'" + pathBasename + "'"));
                }
                basenames.push(pathBasename);
                if (fileNames.indexOf(pathBasename) === -1) {
                    throw new Error("Weight file with basename '" + pathBasename + "' is not provided.");
                }
                else {
                    pathToFile[path] = files[fileNames.indexOf(pathBasename)];
                }
            });
        }
        if (basenames.length !== files.length) {
            throw new Error("Mismatch in the number of files in weights manifest " +
                ("(" + basenames.length + ") and the number of weight files provided ") +
                ("(" + files.length + ")."));
        }
        return pathToFile;
    };
    return BrowserFiles;
}());
exports.browserDownloadsRouter = function (url) {
    if (!environment_1.ENV.get('IS_BROWSER')) {
        return null;
    }
    else {
        if (url.startsWith(BrowserDownloads.URL_SCHEME)) {
            return browserDownloads(url.slice(BrowserDownloads.URL_SCHEME.length));
        }
        else {
            return null;
        }
    }
};
router_registry_1.IORouterRegistry.registerSaveRouter(exports.browserDownloadsRouter);
function browserDownloads(fileNamePrefix) {
    if (fileNamePrefix === void 0) { fileNamePrefix = 'model'; }
    return new BrowserDownloads(fileNamePrefix);
}
exports.browserDownloads = browserDownloads;
function browserFiles(files) {
    return new BrowserFiles(files);
}
exports.browserFiles = browserFiles;

},{"../environment":24,"./io_utils":70,"./router_registry":71}],67:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var util_1 = require("../util");
var io_utils_1 = require("./io_utils");
var router_registry_1 = require("./router_registry");
var BrowserHTTPRequest = (function () {
    function BrowserHTTPRequest(path, requestInit) {
        this.DEFAULT_METHOD = 'POST';
        if (!environment_1.ENV.get('IS_BROWSER')) {
            throw new Error('browserHTTPRequest is not supported outside the web browser.');
        }
        util_1.assert(path != null && path.length > 0, 'URL path for browserHTTPRequest must not be null, undefined or ' +
            'empty.');
        this.path = path;
        if (requestInit != null && requestInit.body != null) {
            throw new Error('requestInit is expected to have no pre-existing body, but has one.');
        }
        this.requestInit = requestInit || {};
    }
    BrowserHTTPRequest.prototype.save = function (modelArtifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var init, weightsManifest, modelTopologyAndWeightManifest, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (modelArtifacts.modelTopology instanceof ArrayBuffer) {
                            throw new Error('BrowserHTTPRequest.save() does not support saving model topology ' +
                                'in binary formats yet.');
                        }
                        init = Object.assign({ method: this.DEFAULT_METHOD }, this.requestInit);
                        init.body = new FormData();
                        weightsManifest = [{
                                paths: ['./model.weights.bin'],
                                weights: modelArtifacts.weightSpecs,
                            }];
                        modelTopologyAndWeightManifest = {
                            modelTopology: modelArtifacts.modelTopology,
                            weightsManifest: weightsManifest
                        };
                        init.body.append('model.json', new Blob([JSON.stringify(modelTopologyAndWeightManifest)], { type: 'application/json' }), 'model.json');
                        if (modelArtifacts.weightData != null) {
                            init.body.append('model.weights.bin', new Blob([modelArtifacts.weightData], { type: 'application/octet-stream' }), 'model.weights.bin');
                        }
                        return [4, fetch(this.path, init)];
                    case 1:
                        response = _a.sent();
                        if (response.status === 200) {
                            return [2, {
                                    modelArtifactsInfo: io_utils_1.getModelArtifactsInfoForKerasJSON(modelArtifacts),
                                    responses: [response],
                                }];
                        }
                        else {
                            throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status " +
                                (response.status + "."));
                        }
                        return [2];
                }
            });
        });
    };
    BrowserHTTPRequest.URL_SCHEMES = ['http://', 'https://'];
    return BrowserHTTPRequest;
}());
exports.BrowserHTTPRequest = BrowserHTTPRequest;
exports.httpRequestRouter = function (url) {
    if (!environment_1.ENV.get('IS_BROWSER')) {
        return null;
    }
    else {
        for (var _i = 0, _a = BrowserHTTPRequest.URL_SCHEMES; _i < _a.length; _i++) {
            var scheme = _a[_i];
            if (url.startsWith(scheme)) {
                return browserHTTPRequest(url);
            }
        }
        return null;
    }
};
router_registry_1.IORouterRegistry.registerSaveRouter(exports.httpRequestRouter);
function browserHTTPRequest(path, requestInit) {
    return new BrowserHTTPRequest(path, requestInit);
}
exports.browserHTTPRequest = browserHTTPRequest;

},{"../environment":24,"../util":26,"./io_utils":70,"./router_registry":71}],69:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ops_1 = require("../ops/ops");
var util = require("../util");
var types_1 = require("./types");
function loadWeights(manifest, filePathPrefix, weightNames, requestOptions) {
    if (filePathPrefix === void 0) { filePathPrefix = ''; }
    return __awaiter(this, void 0, void 0, function () {
        var groupIndicesToFetchMap, groupWeightsToFetch, weightsFound, allManifestWeightNames, weightsNotFound, groupIndicesToFetch, requests, responses, buffers, weightsTensorMap, bufferIndexOffset;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    groupIndicesToFetchMap = manifest.map(function () { return false; });
                    groupWeightsToFetch = {};
                    weightsFound = weightNames != null ? weightNames.map(function () { return false; }) : [];
                    allManifestWeightNames = [];
                    manifest.forEach(function (manifestGroupConfig, groupIndex) {
                        var groupOffset = 0;
                        manifestGroupConfig.weights.forEach(function (weightsEntry) {
                            var rawDtype = ('quantization' in weightsEntry) ?
                                weightsEntry.quantization.dtype :
                                weightsEntry.dtype;
                            var weightsBytes = types_1.DTYPE_VALUE_SIZE_MAP[rawDtype] *
                                util.sizeFromShape(weightsEntry.shape);
                            var enqueueWeightsForFetchingFn = function () {
                                groupIndicesToFetchMap[groupIndex] = true;
                                if (groupWeightsToFetch[groupIndex] == null) {
                                    groupWeightsToFetch[groupIndex] = [];
                                }
                                groupWeightsToFetch[groupIndex].push({
                                    manifestEntry: weightsEntry,
                                    groupOffset: groupOffset,
                                    sizeBytes: weightsBytes
                                });
                            };
                            if (weightNames != null) {
                                weightNames.forEach(function (weightName, weightIndex) {
                                    if (weightName === weightsEntry.name) {
                                        enqueueWeightsForFetchingFn();
                                        weightsFound[weightIndex] = true;
                                    }
                                });
                            }
                            else {
                                enqueueWeightsForFetchingFn();
                            }
                            allManifestWeightNames.push(weightsEntry.name);
                            groupOffset += weightsBytes;
                        });
                    });
                    if (!weightsFound.every(function (found) { return found; })) {
                        weightsNotFound = weightNames.filter(function (weight, i) { return !weightsFound[i]; });
                        throw new Error("Could not find weights in manifest with names: " +
                            (weightsNotFound.join(', ') + ". \n") +
                            "Manifest JSON has weights with names: " +
                            (allManifestWeightNames.join(', ') + "."));
                    }
                    groupIndicesToFetch = groupIndicesToFetchMap.reduce(function (accumulator, shouldFetch, i) {
                        if (shouldFetch) {
                            accumulator.push(i);
                        }
                        return accumulator;
                    }, []);
                    requests = [];
                    groupIndicesToFetch.forEach(function (i) {
                        manifest[i].paths.forEach(function (filepath) {
                            var fetchUrl = filePathPrefix +
                                (!filePathPrefix.endsWith('/') ? '/' : '') + filepath;
                            requests.push(fetch(fetchUrl, requestOptions));
                        });
                    });
                    return [4, Promise.all(requests)];
                case 1:
                    responses = _a.sent();
                    return [4, Promise.all(responses.map(function (response) { return response.arrayBuffer(); }))];
                case 2:
                    buffers = _a.sent();
                    weightsTensorMap = {};
                    bufferIndexOffset = 0;
                    groupIndicesToFetch.forEach(function (i) {
                        var numBuffers = manifest[i].paths.length;
                        var groupBytes = 0;
                        for (var i_1 = 0; i_1 < numBuffers; i_1++) {
                            groupBytes += buffers[bufferIndexOffset + i_1].byteLength;
                        }
                        var groupBuffer = new ArrayBuffer(groupBytes);
                        var groupByteBuffer = new Uint8Array(groupBuffer);
                        var groupBufferOffset = 0;
                        for (var i_2 = 0; i_2 < numBuffers; i_2++) {
                            var buffer = new Uint8Array(buffers[bufferIndexOffset + i_2]);
                            groupByteBuffer.set(buffer, groupBufferOffset);
                            groupBufferOffset += buffer.byteLength;
                        }
                        var weightsEntries = groupWeightsToFetch[i];
                        weightsEntries.forEach(function (weightsEntry) {
                            var byteBuffer = groupBuffer.slice(weightsEntry.groupOffset, weightsEntry.groupOffset + weightsEntry.sizeBytes);
                            var typedArray;
                            var dtype = weightsEntry.manifestEntry.dtype;
                            if ('quantization' in weightsEntry.manifestEntry) {
                                var quantization_1 = weightsEntry.manifestEntry.quantization;
                                if (quantization_1.dtype !== 'uint8' && quantization_1.dtype !== 'uint16') {
                                    throw new Error("Weight " + weightsEntry.manifestEntry.name + " has unknown " +
                                        ("quantization dtype " + quantization_1.dtype + "."));
                                }
                                var quantizedArray = (quantization_1.dtype === 'uint8') ?
                                    new Uint8Array(byteBuffer) :
                                    new Uint16Array(byteBuffer);
                                if (dtype === 'float32') {
                                    typedArray = Float32Array.from(quantizedArray, function (v) { return v * quantization_1.scale + quantization_1.min; });
                                }
                                else if (dtype === 'int32') {
                                    typedArray = Int32Array.from(quantizedArray, function (v) { return Math.round(v * quantization_1.scale + quantization_1.min); });
                                }
                                else {
                                    throw new Error("Weight " + weightsEntry.manifestEntry.name + " has a dtype not " +
                                        ("supported by quantization: " + dtype));
                                }
                            }
                            else {
                                if (dtype === 'float32') {
                                    typedArray = new Float32Array(byteBuffer);
                                }
                                else if (dtype === 'int32') {
                                    typedArray = new Int32Array(byteBuffer);
                                }
                                else {
                                    throw new Error("Weight " + weightsEntry.manifestEntry.name + " has unknown dtype " +
                                        (dtype + "."));
                                }
                            }
                            var weightName = weightsEntry.manifestEntry.name;
                            if (weightsTensorMap[weightName] != null) {
                                throw new Error("Duplicate weight with name " + weightName + ". " +
                                    "Please make sure weights names are unique in the manifest JSON.");
                            }
                            weightsTensorMap[weightName] = ops_1.tensor(typedArray, weightsEntry.manifestEntry.shape, weightsEntry.manifestEntry.dtype);
                        });
                        bufferIndexOffset += numBuffers;
                    });
                    return [2, weightsTensorMap];
            }
        });
    });
}
exports.loadWeights = loadWeights;

},{"../ops/ops":47,"../util":26,"./types":127}],38:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./indexed_db");
require("./local_storage");
var browser_files_1 = require("./browser_files");
exports.browserFiles = browser_files_1.browserFiles;
var browser_http_1 = require("./browser_http");
exports.browserHTTPRequest = browser_http_1.browserHTTPRequest;
var io_utils_1 = require("./io_utils");
exports.decodeWeights = io_utils_1.decodeWeights;
exports.encodeWeights = io_utils_1.encodeWeights;
var router_registry_1 = require("./router_registry");
var weights_loader_1 = require("./weights_loader");
exports.loadWeights = weights_loader_1.loadWeights;
var registerSaveRouter = router_registry_1.IORouterRegistry.registerSaveRouter;
exports.registerSaveRouter = registerSaveRouter;
var registerLoadRouter = router_registry_1.IORouterRegistry.registerLoadRouter;
exports.registerLoadRouter = registerLoadRouter;
var getSaveHandlers = router_registry_1.IORouterRegistry.getSaveHandlers;
exports.getSaveHandlers = getSaveHandlers;
var getLoadHandlers = router_registry_1.IORouterRegistry.getLoadHandlers;
exports.getLoadHandlers = getLoadHandlers;

},{"./indexed_db":65,"./local_storage":66,"./browser_files":68,"./browser_http":67,"./io_utils":70,"./router_registry":71,"./weights_loader":69}],29:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serializable = (function () {
    function Serializable() {
    }
    Serializable.prototype.getClassName = function () {
        return this.constructor
            .className;
    };
    Serializable.fromConfig = function (cls, config) {
        return new cls(config);
    };
    return Serializable;
}());
exports.Serializable = Serializable;
var SerializationMap = (function () {
    function SerializationMap() {
        this.classNameMap = {};
    }
    SerializationMap.getMap = function () {
        if (SerializationMap.instance == null) {
            SerializationMap.instance = new SerializationMap();
        }
        return SerializationMap.instance;
    };
    SerializationMap.register = function (cls) {
        this.getMap().classNameMap[cls.className] = [cls, cls.fromConfig];
    };
    return SerializationMap;
}());
exports.SerializationMap = SerializationMap;

},{}],27:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tensor_1 = require("./tensor");
var util = require("./util");
exports.WEBGL_ENVS = {
    'BACKEND': 'test-webgl'
};
exports.CPU_ENVS = {
    'BACKEND': 'test-cpu'
};
exports.ALL_ENVS = {};
exports.TEST_EPSILON = 1e-3;
function expectArraysClose(actual, expected, epsilon) {
    if (epsilon === void 0) { epsilon = exports.TEST_EPSILON; }
    if (!(actual instanceof tensor_1.Tensor) && !(expected instanceof tensor_1.Tensor)) {
        var aType = actual.constructor.name;
        var bType = expected.constructor.name;
        if (aType !== bType) {
            throw new Error("Arrays are of different type actual: " + aType + " " +
                ("vs expected: " + bType));
        }
    }
    else if (actual instanceof tensor_1.Tensor && expected instanceof tensor_1.Tensor) {
        if (actual.dtype !== expected.dtype) {
            throw new Error("Arrays are of different type actual: " + actual.dtype + " " +
                ("vs expected: " + expected.dtype + "."));
        }
        if (!util.arraysEqual(actual.shape, expected.shape)) {
            throw new Error("Arrays are of different shape actual: " + actual.shape + " " +
                ("vs expected: " + expected.shape + "."));
        }
    }
    var actualValues;
    var expectedValues;
    if (actual instanceof tensor_1.Tensor) {
        actualValues = actual.dataSync();
    }
    else {
        actualValues = actual;
    }
    if (expected instanceof tensor_1.Tensor) {
        expectedValues = expected.dataSync();
    }
    else {
        expectedValues = expected;
    }
    if (actualValues.length !== expectedValues.length) {
        throw new Error("Arrays have different lengths actual: " + actualValues.length + " vs " +
            ("expected: " + expectedValues.length + ".\n") +
            ("Actual:   " + actualValues + ".\n") +
            ("Expected: " + expectedValues + "."));
    }
    for (var i = 0; i < expectedValues.length; ++i) {
        var a = actualValues[i];
        var e = expectedValues[i];
        if (!areClose(a, Number(e), epsilon)) {
            throw new Error("Arrays differ: actual[" + i + "] = " + a + ", expected[" + i + "] = " + e + ".\n" +
                ("Actual:   " + actualValues + ".\n") +
                ("Expected: " + expectedValues + "."));
        }
    }
}
exports.expectArraysClose = expectArraysClose;
function expectPromiseToFail(fn, done) {
    fn().then(function () { return done.fail(); }, function () { return done(); });
}
exports.expectPromiseToFail = expectPromiseToFail;
function expectArraysEqual(actual, expected) {
    return expectArraysClose(actual, expected, 0);
}
exports.expectArraysEqual = expectArraysEqual;
function expectNumbersClose(a, e, epsilon) {
    if (epsilon === void 0) { epsilon = exports.TEST_EPSILON; }
    if (!areClose(a, e, epsilon)) {
        throw new Error("Numbers differ: actual === " + a + ", expected === " + e);
    }
}
exports.expectNumbersClose = expectNumbersClose;
function areClose(a, e, epsilon) {
    if (isNaN(a) && isNaN(e)) {
        return true;
    }
    if (isNaN(a) || isNaN(e) || Math.abs(a - e) > epsilon) {
        return false;
    }
    return true;
}
function expectValuesInRange(actual, low, high) {
    var actualVals;
    if (actual instanceof tensor_1.Tensor) {
        actualVals = actual.dataSync();
    }
    else {
        actualVals = actual;
    }
    for (var i = 0; i < actualVals.length; i++) {
        if (actualVals[i] < low || actualVals[i] > high) {
            throw new Error("Value out of range:" + actualVals[i] + " low: " + low + ", high: " + high);
        }
    }
}
exports.expectValuesInRange = expectValuesInRange;

},{"./tensor":32,"./util":26}],28:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var version = '0.10.1';
exports.version = version;

},{}],30:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webgl_util = require("./kernels/webgl/webgl_util");
exports.webgl_util = webgl_util;
var gpgpu_util = require("./kernels/webgl/gpgpu_util");
exports.gpgpu_util = gpgpu_util;
var backend_webgl_1 = require("./kernels/backend_webgl");
exports.MathBackendWebGL = backend_webgl_1.MathBackendWebGL;
var gpgpu_context_1 = require("./kernels/webgl/gpgpu_context");
exports.GPGPUContext = gpgpu_context_1.GPGPUContext;

},{"./kernels/webgl/webgl_util":55,"./kernels/webgl/gpgpu_util":56,"./kernels/backend_webgl":36,"./kernels/webgl/gpgpu_context":57}],44:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var globals_1 = require("../globals");
var serialization_1 = require("../serialization");
var Optimizer = (function (_super) {
    __extends(Optimizer, _super);
    function Optimizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Optimizer.prototype.minimize = function (f, returnCost, varList) {
        if (returnCost === void 0) { returnCost = false; }
        var _a = this.computeGradients(f, varList), value = _a.value, grads = _a.grads;
        this.applyGradients(grads);
        var varNames = Object.keys(grads);
        varNames.forEach(function (varName) { return grads[varName].dispose(); });
        if (returnCost) {
            return value;
        }
        else {
            value.dispose();
            return null;
        }
    };
    Optimizer.prototype.computeGradients = function (f, varList) {
        return globals_1.variableGrads(f, varList);
    };
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers' })
    ], Optimizer.prototype, "minimize", null);
    Optimizer = __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Classes', namespace: 'train' })
    ], Optimizer);
    return Optimizer;
}(serialization_1.Serializable));
exports.Optimizer = Optimizer;

},{"../doc":35,"../globals":34,"../serialization":29}],39:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var ops_1 = require("../ops/ops");
var serialization_1 = require("../serialization");
var optimizer_1 = require("./optimizer");
var AdadeltaOptimizer = (function (_super) {
    __extends(AdadeltaOptimizer, _super);
    function AdadeltaOptimizer(learningRate, rho, epsilon) {
        if (epsilon === void 0) { epsilon = 1e-8; }
        var _this = _super.call(this) || this;
        _this.learningRate = learningRate;
        _this.rho = rho;
        _this.epsilon = epsilon;
        _this.accumulatedGrads = {};
        _this.accumulatedUpdates = {};
        _this.c = globals_1.keep(ops_1.scalar(-learningRate));
        _this.epsilonScalar = globals_1.keep(ops_1.scalar(epsilon));
        _this.rhoScalar = globals_1.keep(ops_1.scalar(rho));
        _this.oneMinusRho = globals_1.keep(ops_1.scalar(1 - rho));
        return _this;
    }
    AdadeltaOptimizer.prototype.applyGradients = function (variableGradients) {
        var _this = this;
        var _loop_1 = function (variableName) {
            var value = environment_1.ENV.engine.registeredVariables[variableName];
            if (this_1.accumulatedGrads[variableName] == null) {
                var trainable_1 = false;
                globals_1.tidy(function () {
                    _this.accumulatedGrads[variableName] =
                        ops_1.zerosLike(value).variable(trainable_1);
                });
            }
            if (this_1.accumulatedUpdates[variableName] == null) {
                var trainable_2 = false;
                globals_1.tidy(function () {
                    _this.accumulatedUpdates[variableName] =
                        ops_1.zerosLike(value).variable(trainable_2);
                });
            }
            var gradient = variableGradients[variableName];
            var accumulatedGrad = this_1.accumulatedGrads[variableName];
            var accumulatedUpdate = this_1.accumulatedUpdates[variableName];
            globals_1.tidy(function () {
                var newAccumulatedGrad = _this.rhoScalar.mul(accumulatedGrad)
                    .add(_this.oneMinusRho.mul(gradient.square()));
                var updates = accumulatedUpdate.add(_this.epsilonScalar)
                    .sqrt()
                    .div(accumulatedGrad.add(_this.epsilonScalar).sqrt())
                    .mul(gradient);
                var newAccumulatedUpdate = _this.rhoScalar.mul(accumulatedUpdate)
                    .add(_this.oneMinusRho.mul(updates.square()));
                _this.accumulatedGrads[variableName].assign(newAccumulatedGrad);
                _this.accumulatedUpdates[variableName].assign(newAccumulatedUpdate);
                var newValue = _this.c.mul(updates).add(value);
                value.assign(newValue);
            });
        };
        var this_1 = this;
        for (var variableName in variableGradients) {
            _loop_1(variableName);
        }
    };
    AdadeltaOptimizer.prototype.dispose = function () {
        var _this = this;
        this.c.dispose();
        this.epsilonScalar.dispose();
        this.rhoScalar.dispose();
        this.oneMinusRho.dispose();
        if (this.accumulatedUpdates != null) {
            Object.keys(this.accumulatedUpdates)
                .forEach(function (name) { return _this.accumulatedUpdates[name].dispose(); });
            Object.keys(this.accumulatedGrads)
                .forEach(function (name) { return _this.accumulatedGrads[name].dispose(); });
        }
    };
    AdadeltaOptimizer.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            rho: this.rho,
            epsilon: this.epsilon
        };
    };
    AdadeltaOptimizer.fromConfig = function (cls, config) {
        return new cls(config.learningRate, config.rho, config.epsilon);
    };
    AdadeltaOptimizer.className = 'AdadeltaOptimizer';
    return AdadeltaOptimizer;
}(optimizer_1.Optimizer));
exports.AdadeltaOptimizer = AdadeltaOptimizer;
serialization_1.SerializationMap.register(AdadeltaOptimizer);

},{"../environment":24,"../globals":34,"../ops/ops":47,"../serialization":29,"./optimizer":44}],42:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var ops_1 = require("../ops/ops");
var serialization_1 = require("../serialization");
var optimizer_1 = require("./optimizer");
var AdagradOptimizer = (function (_super) {
    __extends(AdagradOptimizer, _super);
    function AdagradOptimizer(learningRate, initialAccumulatorValue) {
        if (initialAccumulatorValue === void 0) { initialAccumulatorValue = 0.1; }
        var _this = _super.call(this) || this;
        _this.learningRate = learningRate;
        _this.initialAccumulatorValue = initialAccumulatorValue;
        _this.accumulatedGrads = {};
        _this.c = globals_1.keep(ops_1.scalar(-learningRate));
        _this.epsilon = globals_1.keep(ops_1.scalar(1e-8));
        return _this;
    }
    AdagradOptimizer.prototype.applyGradients = function (variableGradients) {
        var _this = this;
        var _loop_1 = function (variableName) {
            var value = environment_1.ENV.engine.registeredVariables[variableName];
            if (this_1.accumulatedGrads[variableName] == null) {
                var trainable_1 = false;
                globals_1.tidy(function () {
                    _this.accumulatedGrads[variableName] =
                        ops_1.fill(value.shape, _this.initialAccumulatorValue)
                            .variable(trainable_1);
                });
            }
            var gradient = variableGradients[variableName];
            var accumulatedGrad = this_1.accumulatedGrads[variableName];
            globals_1.tidy(function () {
                var newAccumulatedGrad = accumulatedGrad.add(gradient.square());
                _this.accumulatedGrads[variableName].assign(newAccumulatedGrad);
                var newValue = _this.c
                    .mul(gradient.div(newAccumulatedGrad.add(_this.epsilon).sqrt()))
                    .add(value);
                value.assign(newValue);
            });
        };
        var this_1 = this;
        for (var variableName in variableGradients) {
            _loop_1(variableName);
        }
    };
    AdagradOptimizer.prototype.dispose = function () {
        var _this = this;
        this.epsilon.dispose();
        this.c.dispose();
        if (this.accumulatedGrads != null) {
            Object.keys(this.accumulatedGrads)
                .forEach(function (name) { return _this.accumulatedGrads[name].dispose(); });
        }
    };
    AdagradOptimizer.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            initialAccumulatorValue: this.initialAccumulatorValue,
        };
    };
    AdagradOptimizer.fromConfig = function (cls, config) {
        return new cls(config.learningRate, config.initialAccumulatorValue);
    };
    AdagradOptimizer.className = 'AdagradOptimizer';
    return AdagradOptimizer;
}(optimizer_1.Optimizer));
exports.AdagradOptimizer = AdagradOptimizer;
serialization_1.SerializationMap.register(AdagradOptimizer);

},{"../environment":24,"../globals":34,"../ops/ops":47,"../serialization":29,"./optimizer":44}],41:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var ops_1 = require("../ops/ops");
var serialization_1 = require("../serialization");
var optimizer_1 = require("./optimizer");
var AdamOptimizer = (function (_super) {
    __extends(AdamOptimizer, _super);
    function AdamOptimizer(learningRate, beta1, beta2, epsilon) {
        if (epsilon === void 0) { epsilon = 1e-8; }
        var _this = _super.call(this) || this;
        _this.learningRate = learningRate;
        _this.beta1 = beta1;
        _this.beta2 = beta2;
        _this.epsilon = epsilon;
        _this.accumulatedFirstMoment = {};
        _this.accumulatedSecondMoment = {};
        _this.c = globals_1.keep(ops_1.scalar(-learningRate));
        _this.epsScalar = globals_1.keep(ops_1.scalar(epsilon));
        _this.beta1Scalar = globals_1.keep(ops_1.scalar(beta1));
        _this.beta2Scalar = globals_1.keep(ops_1.scalar(beta2));
        globals_1.tidy(function () {
            _this.accBeta1 = ops_1.scalar(beta1).variable();
            _this.accBeta2 = ops_1.scalar(beta2).variable();
        });
        _this.oneMinusBeta1 = globals_1.keep(ops_1.scalar(1 - beta1));
        _this.oneMinusBeta2 = globals_1.keep(ops_1.scalar(1 - beta2));
        _this.one = globals_1.keep(ops_1.scalar(1));
        return _this;
    }
    AdamOptimizer.prototype.applyGradients = function (variableGradients) {
        var _this = this;
        globals_1.tidy(function () {
            var oneMinusAccBeta1 = _this.one.sub(_this.accBeta1);
            var oneMinusAccBeta2 = _this.one.sub(_this.accBeta2);
            for (var variableName in variableGradients) {
                var value = environment_1.ENV.engine.registeredVariables[variableName];
                if (_this.accumulatedFirstMoment[variableName] == null) {
                    var trainable = false;
                    _this.accumulatedFirstMoment[variableName] =
                        ops_1.zerosLike(value).variable(trainable);
                }
                if (_this.accumulatedSecondMoment[variableName] == null) {
                    var trainable = false;
                    _this.accumulatedSecondMoment[variableName] =
                        ops_1.zerosLike(value).variable(trainable);
                }
                var gradient = variableGradients[variableName];
                var firstMoment = _this.accumulatedFirstMoment[variableName];
                var secondMoment = _this.accumulatedSecondMoment[variableName];
                var newFirstMoment = _this.beta1Scalar.mul(firstMoment)
                    .add(_this.oneMinusBeta1.mul(gradient));
                var newSecondMoment = _this.beta2Scalar.mul(secondMoment)
                    .add(_this.oneMinusBeta2.mul(gradient.square()));
                var biasCorrectedFirstMoment = newFirstMoment.div(oneMinusAccBeta1);
                var biasCorrectedSecondMoment = newSecondMoment.div(oneMinusAccBeta2);
                _this.accumulatedFirstMoment[variableName].assign(newFirstMoment);
                _this.accumulatedSecondMoment[variableName].assign(newSecondMoment);
                var newValue = _this.c
                    .mul(biasCorrectedFirstMoment.div(_this.epsScalar.add(biasCorrectedSecondMoment.sqrt())))
                    .add(value);
                value.assign(newValue);
            }
            _this.accBeta1.assign(_this.accBeta1.mul(_this.beta1Scalar));
            _this.accBeta2.assign(_this.accBeta2.mul(_this.beta2Scalar));
        });
    };
    AdamOptimizer.prototype.dispose = function () {
        var _this = this;
        this.c.dispose();
        this.epsScalar.dispose();
        this.beta1Scalar.dispose();
        this.beta2Scalar.dispose();
        this.accBeta1.dispose();
        this.accBeta2.dispose();
        this.oneMinusBeta1.dispose();
        this.oneMinusBeta2.dispose();
        this.one.dispose();
        if (this.accumulatedFirstMoment != null) {
            Object.keys(this.accumulatedFirstMoment)
                .forEach(function (name) { return _this.accumulatedFirstMoment[name].dispose(); });
        }
        if (this.accumulatedSecondMoment != null) {
            Object.keys(this.accumulatedSecondMoment)
                .forEach(function (name) { return _this.accumulatedSecondMoment[name].dispose(); });
        }
    };
    AdamOptimizer.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            beta1: this.beta1,
            beta2: this.beta2,
            epsilon: this.epsilon,
        };
    };
    AdamOptimizer.fromConfig = function (cls, config) {
        return new cls(config.learningRate, config.beta1, config.beta2, config.epsilon);
    };
    AdamOptimizer.className = 'AdamOptimizer';
    return AdamOptimizer;
}(optimizer_1.Optimizer));
exports.AdamOptimizer = AdamOptimizer;
serialization_1.SerializationMap.register(AdamOptimizer);

},{"../environment":24,"../globals":34,"../ops/ops":47,"../serialization":29,"./optimizer":44}],40:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var ops_1 = require("../ops/ops");
var serialization_1 = require("../serialization");
var optimizer_1 = require("./optimizer");
var AdamaxOptimizer = (function (_super) {
    __extends(AdamaxOptimizer, _super);
    function AdamaxOptimizer(learningRate, beta1, beta2, epsilon, decay) {
        if (epsilon === void 0) { epsilon = 1e-8; }
        if (decay === void 0) { decay = 0.0; }
        var _this = _super.call(this) || this;
        _this.learningRate = learningRate;
        _this.beta1 = beta1;
        _this.beta2 = beta2;
        _this.epsilon = epsilon;
        _this.decay = decay;
        _this.accumulatedFirstMoment = {};
        _this.accumulatedWeightedInfNorm = {};
        _this.c = globals_1.keep(ops_1.scalar(-learningRate));
        _this.epsScalar = globals_1.keep(ops_1.scalar(epsilon));
        _this.beta1Scalar = globals_1.keep(ops_1.scalar(beta1));
        _this.beta2Scalar = globals_1.keep(ops_1.scalar(beta2));
        _this.decayScalar = globals_1.keep(ops_1.scalar(decay));
        globals_1.tidy(function () {
            _this.iteration = ops_1.scalar(0).variable();
            _this.accBeta1 = ops_1.scalar(beta1).variable();
        });
        _this.oneMinusBeta1 = globals_1.keep(ops_1.scalar(1 - beta1));
        _this.one = globals_1.keep(ops_1.scalar(1));
        return _this;
    }
    AdamaxOptimizer.prototype.applyGradients = function (variableGradients) {
        var _this = this;
        globals_1.tidy(function () {
            var oneMinusAccBeta1 = _this.one.sub(_this.accBeta1);
            var lr = _this.c.div(_this.one.add(_this.decayScalar.mul(_this.iteration)));
            for (var variableName in variableGradients) {
                var value = environment_1.ENV.engine.registeredVariables[variableName];
                if (_this.accumulatedFirstMoment[variableName] == null) {
                    var trainable = false;
                    _this.accumulatedFirstMoment[variableName] =
                        ops_1.zerosLike(value).variable(trainable);
                }
                if (_this.accumulatedWeightedInfNorm[variableName] == null) {
                    var trainable = false;
                    _this.accumulatedWeightedInfNorm[variableName] =
                        ops_1.zerosLike(value).variable(trainable);
                }
                var gradient = variableGradients[variableName];
                var firstMoment = _this.accumulatedFirstMoment[variableName];
                var weightedInfNorm = _this.accumulatedWeightedInfNorm[variableName];
                var newFirstMoment = _this.beta1Scalar.mul(firstMoment)
                    .add(_this.oneMinusBeta1.mul(gradient));
                var ut0 = _this.beta2Scalar.mul(weightedInfNorm);
                var ut1 = gradient.abs();
                var newWeightedInfNorm = ut0.maximum(ut1);
                _this.accumulatedFirstMoment[variableName].assign(newFirstMoment);
                _this.accumulatedWeightedInfNorm[variableName].assign(newWeightedInfNorm);
                var newValue = lr.div(oneMinusAccBeta1)
                    .mul(newFirstMoment.div(_this.epsScalar.add(newWeightedInfNorm)))
                    .add(value);
                value.assign(newValue);
            }
            _this.iteration.assign(_this.iteration.add(_this.one));
            _this.accBeta1.assign(_this.accBeta1.mul(_this.beta1Scalar));
        });
    };
    AdamaxOptimizer.prototype.dispose = function () {
        var _this = this;
        this.c.dispose();
        this.epsScalar.dispose();
        this.accBeta1.dispose();
        this.beta1Scalar.dispose();
        this.beta2Scalar.dispose();
        this.oneMinusBeta1.dispose();
        this.decayScalar.dispose();
        this.iteration.dispose();
        this.one.dispose();
        if (this.accumulatedFirstMoment != null) {
            Object.keys(this.accumulatedFirstMoment)
                .forEach(function (name) { return _this.accumulatedFirstMoment[name].dispose(); });
        }
        if (this.accumulatedWeightedInfNorm != null) {
            Object.keys(this.accumulatedWeightedInfNorm)
                .forEach(function (name) { return _this.accumulatedWeightedInfNorm[name].dispose(); });
        }
    };
    AdamaxOptimizer.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            beta1: this.beta1,
            beta2: this.beta2,
            epsilon: this.epsilon,
            decay: this.decay
        };
    };
    AdamaxOptimizer.fromConfig = function (cls, config) {
        return new cls(config.learningRate, config.beta1, config.beta2, config.epsilon, config.decay);
    };
    AdamaxOptimizer.className = 'AdamaxOptimizer';
    return AdamaxOptimizer;
}(optimizer_1.Optimizer));
exports.AdamaxOptimizer = AdamaxOptimizer;
serialization_1.SerializationMap.register(AdamaxOptimizer);

},{"../environment":24,"../globals":34,"../ops/ops":47,"../serialization":29,"./optimizer":44}],46:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var ops_1 = require("../ops/ops");
var serialization_1 = require("../serialization");
var optimizer_1 = require("./optimizer");
var SGDOptimizer = (function (_super) {
    __extends(SGDOptimizer, _super);
    function SGDOptimizer(learningRate) {
        var _this = _super.call(this) || this;
        _this.learningRate = learningRate;
        _this.setLearningRate(learningRate);
        return _this;
    }
    SGDOptimizer.prototype.applyGradients = function (variableGradients) {
        var _this = this;
        var varNames = Object.keys(variableGradients);
        varNames.forEach(function (varName) {
            var gradient = variableGradients[varName];
            var value = environment_1.ENV.engine.registeredVariables[varName];
            globals_1.tidy(function () {
                var newValue = _this.c.mul(gradient).add(value);
                value.assign(newValue);
            });
        });
    };
    SGDOptimizer.prototype.setLearningRate = function (learningRate) {
        this.learningRate = learningRate;
        if (this.c != null) {
            this.c.dispose();
        }
        this.c = globals_1.keep(ops_1.scalar(-learningRate));
    };
    SGDOptimizer.prototype.dispose = function () {
        this.c.dispose();
    };
    SGDOptimizer.prototype.getConfig = function () {
        return { learningRate: this.learningRate };
    };
    SGDOptimizer.fromConfig = function (cls, config) {
        return new cls(config.learningRate);
    };
    SGDOptimizer.className = 'SGDOptimizer';
    return SGDOptimizer;
}(optimizer_1.Optimizer));
exports.SGDOptimizer = SGDOptimizer;
serialization_1.SerializationMap.register(SGDOptimizer);

},{"../environment":24,"../globals":34,"../ops/ops":47,"../serialization":29,"./optimizer":44}],43:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var ops_1 = require("../ops/ops");
var serialization_1 = require("../serialization");
var sgd_optimizer_1 = require("./sgd_optimizer");
var MomentumOptimizer = (function (_super) {
    __extends(MomentumOptimizer, _super);
    function MomentumOptimizer(learningRate, momentum, useNesterov) {
        if (useNesterov === void 0) { useNesterov = false; }
        var _this = _super.call(this, learningRate) || this;
        _this.learningRate = learningRate;
        _this.momentum = momentum;
        _this.useNesterov = useNesterov;
        _this.m = ops_1.scalar(_this.momentum);
        _this.accumulations = {};
        return _this;
    }
    MomentumOptimizer.prototype.applyGradients = function (variableGradients) {
        var _this = this;
        var _loop_1 = function (variableName) {
            var value = environment_1.ENV.engine.registeredVariables[variableName];
            if (this_1.accumulations[variableName] == null) {
                var trainable_1 = false;
                globals_1.tidy(function () {
                    _this.accumulations[variableName] =
                        ops_1.zerosLike(value).variable(trainable_1);
                });
            }
            var accumulation = this_1.accumulations[variableName];
            var gradient = variableGradients[variableName];
            globals_1.tidy(function () {
                var newValue;
                var newAccumulation = _this.m.mul(accumulation).add(gradient);
                if (_this.useNesterov) {
                    newValue =
                        _this.c.mul(gradient.add(newAccumulation.mul(_this.m))).add(value);
                }
                else {
                    newValue = _this.c.mul(newAccumulation).add(value);
                }
                _this.accumulations[variableName].assign(newAccumulation);
                value.assign(newValue);
            });
        };
        var this_1 = this;
        for (var variableName in variableGradients) {
            _loop_1(variableName);
        }
    };
    MomentumOptimizer.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.m.dispose();
        if (this.accumulations != null) {
            for (var variableName in this.accumulations) {
                this.accumulations[variableName].dispose();
            }
        }
    };
    MomentumOptimizer.prototype.setMomentum = function (momentum) {
        this.momentum = momentum;
    };
    MomentumOptimizer.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            momentum: this.momentum,
            useNesterov: this.useNesterov
        };
    };
    MomentumOptimizer.fromConfig = function (cls, config) {
        return new cls(config.learningRate, config.momentum, config.useNesterov);
    };
    MomentumOptimizer.className = 'MomentumOptimizer';
    return MomentumOptimizer;
}(sgd_optimizer_1.SGDOptimizer));
exports.MomentumOptimizer = MomentumOptimizer;
serialization_1.SerializationMap.register(MomentumOptimizer);

},{"../environment":24,"../globals":34,"../ops/ops":47,"../serialization":29,"./sgd_optimizer":46}],45:[function(require,module,exports) {
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var environment_1 = require("../environment");
var globals_1 = require("../globals");
var ops_1 = require("../ops/ops");
var serialization_1 = require("../serialization");
var optimizer_1 = require("./optimizer");
var RMSPropOptimizer = (function (_super) {
    __extends(RMSPropOptimizer, _super);
    function RMSPropOptimizer(learningRate, decay, momentum, epsilon, centered) {
        if (decay === void 0) { decay = 0.9; }
        if (momentum === void 0) { momentum = 0.0; }
        if (epsilon === void 0) { epsilon = 1e-8; }
        if (centered === void 0) { centered = false; }
        var _this = _super.call(this) || this;
        _this.learningRate = learningRate;
        _this.decay = decay;
        _this.momentum = momentum;
        _this.epsilon = epsilon;
        _this.accumulatedMeanSquares = {};
        _this.accumulatedMeanGrads = {};
        _this.accumulatedMoments = {};
        _this.c = globals_1.keep(ops_1.scalar(learningRate));
        _this.epsilonScalar = globals_1.keep(ops_1.scalar(epsilon));
        _this.decayScalar = globals_1.keep(ops_1.scalar(decay));
        _this.momentumScalar = globals_1.keep(ops_1.scalar(momentum));
        _this.oneMinusDecay = globals_1.keep(ops_1.scalar(1 - decay));
        _this.centered = centered;
        return _this;
    }
    RMSPropOptimizer.prototype.applyGradients = function (variableGradients) {
        var _this = this;
        var _loop_1 = function (variableName) {
            var value = environment_1.ENV.engine.registeredVariables[variableName];
            if (this_1.accumulatedMeanSquares[variableName] == null) {
                var trainable_1 = false;
                globals_1.tidy(function () {
                    _this.accumulatedMeanSquares[variableName] =
                        ops_1.zerosLike(value).variable(trainable_1);
                });
            }
            if (this_1.accumulatedMeanGrads[variableName] == null && this_1.centered) {
                var trainable_2 = false;
                globals_1.tidy(function () {
                    _this.accumulatedMeanGrads[variableName] =
                        ops_1.zerosLike(value).variable(trainable_2);
                });
            }
            if (this_1.accumulatedMoments[variableName] == null) {
                var trainable_3 = false;
                globals_1.tidy(function () {
                    _this.accumulatedMoments[variableName] =
                        ops_1.zerosLike(value).variable(trainable_3);
                });
            }
            var accumulatedMeanSquare = this_1.accumulatedMeanSquares[variableName];
            var accumulatedMeanGrad = this_1.accumulatedMeanGrads[variableName];
            var accumulatedMoments = this_1.accumulatedMoments[variableName];
            var gradient = variableGradients[variableName];
            globals_1.tidy(function () {
                var newAccumulatedMeanSquare = _this.decayScalar.mul(accumulatedMeanSquare)
                    .add(_this.oneMinusDecay.mul(gradient.square()));
                if (_this.centered) {
                    var newAccumulatedMeanGrad = _this.decayScalar.mul(accumulatedMeanGrad)
                        .add(_this.oneMinusDecay.mul(gradient));
                    var newAccumulatedMoments = _this.momentumScalar.mul(accumulatedMoments)
                        .add(_this.c.mul(gradient).div(newAccumulatedMeanSquare
                        .sub(newAccumulatedMeanGrad.square().add(_this.epsilonScalar))
                        .sqrt()));
                    _this.accumulatedMeanSquares[variableName].assign(newAccumulatedMeanSquare);
                    _this.accumulatedMeanGrads[variableName].assign(newAccumulatedMeanGrad);
                    _this.accumulatedMoments[variableName].assign(newAccumulatedMoments);
                    var newValue = value.sub(newAccumulatedMoments);
                    value.assign(newValue);
                }
                else {
                    var newAccumulatedMeanSquare_1 = _this.decayScalar.mul(accumulatedMeanSquare)
                        .add(_this.oneMinusDecay.mul(gradient.square()));
                    var newAccumulatedMoments = _this.momentumScalar.mul(accumulatedMoments)
                        .add(_this.c.mul(gradient).div(newAccumulatedMeanSquare_1.add(_this.epsilonScalar).sqrt()));
                    _this.accumulatedMeanSquares[variableName].assign(newAccumulatedMeanSquare_1);
                    _this.accumulatedMoments[variableName].assign(newAccumulatedMoments);
                    var newValue = value.sub(newAccumulatedMoments);
                    value.assign(newValue);
                }
            });
        };
        var this_1 = this;
        for (var variableName in variableGradients) {
            _loop_1(variableName);
        }
    };
    RMSPropOptimizer.prototype.dispose = function () {
        var _this = this;
        this.c.dispose();
        this.epsilonScalar.dispose();
        this.decayScalar.dispose();
        this.momentumScalar.dispose();
        this.oneMinusDecay.dispose();
        if (this.accumulatedMeanSquares != null) {
            Object.keys(this.accumulatedMeanSquares)
                .forEach(function (name) { return _this.accumulatedMeanSquares[name].dispose(); });
        }
        if (this.accumulatedMeanGrads != null && this.centered) {
            Object.keys(this.accumulatedMeanGrads)
                .forEach(function (name) { return _this.accumulatedMeanGrads[name].dispose(); });
        }
        if (this.accumulatedMoments != null) {
            Object.keys(this.accumulatedMoments)
                .forEach(function (name) { return _this.accumulatedMoments[name].dispose(); });
        }
    };
    RMSPropOptimizer.prototype.getConfig = function () {
        return {
            learningRate: this.learningRate,
            decay: this.decay,
            momentum: this.momentum,
            epsilon: this.epsilon,
            centered: this.centered
        };
    };
    RMSPropOptimizer.fromConfig = function (cls, config) {
        return new cls(config.learningRate, config.decay, config.momentum, config.epsilon, config.centered);
    };
    RMSPropOptimizer.className = 'RMSPropOptimizer';
    return RMSPropOptimizer;
}(optimizer_1.Optimizer));
exports.RMSPropOptimizer = RMSPropOptimizer;
serialization_1.SerializationMap.register(RMSPropOptimizer);

},{"../environment":24,"../globals":34,"../ops/ops":47,"../serialization":29,"./optimizer":44}],54:[function(require,module,exports) {
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var doc_1 = require("../doc");
var adadelta_optimizer_1 = require("./adadelta_optimizer");
var adagrad_optimizer_1 = require("./adagrad_optimizer");
var adam_optimizer_1 = require("./adam_optimizer");
var adamax_optimizer_1 = require("./adamax_optimizer");
var momentum_optimizer_1 = require("./momentum_optimizer");
var rmsprop_optimizer_1 = require("./rmsprop_optimizer");
var sgd_optimizer_1 = require("./sgd_optimizer");
var OptimizerConstructors = (function () {
    function OptimizerConstructors() {
    }
    OptimizerConstructors.sgd = function (learningRate) {
        return new sgd_optimizer_1.SGDOptimizer(learningRate);
    };
    OptimizerConstructors.momentum = function (learningRate, momentum, useNesterov) {
        if (useNesterov === void 0) { useNesterov = false; }
        return new momentum_optimizer_1.MomentumOptimizer(learningRate, momentum, useNesterov);
    };
    OptimizerConstructors.rmsprop = function (learningRate, decay, momentum, epsilon, centered) {
        if (decay === void 0) { decay = .9; }
        if (momentum === void 0) { momentum = 0.0; }
        if (epsilon === void 0) { epsilon = 1e-8; }
        if (centered === void 0) { centered = false; }
        return new rmsprop_optimizer_1.RMSPropOptimizer(learningRate, decay, momentum, epsilon, centered);
    };
    OptimizerConstructors.adam = function (learningRate, beta1, beta2, epsilon) {
        if (learningRate === void 0) { learningRate = 0.001; }
        if (beta1 === void 0) { beta1 = 0.9; }
        if (beta2 === void 0) { beta2 = 0.999; }
        if (epsilon === void 0) { epsilon = 1e-8; }
        return new adam_optimizer_1.AdamOptimizer(learningRate, beta1, beta2, epsilon);
    };
    OptimizerConstructors.adadelta = function (learningRate, rho, epsilon) {
        if (learningRate === void 0) { learningRate = .001; }
        if (rho === void 0) { rho = .95; }
        if (epsilon === void 0) { epsilon = 1e-8; }
        return new adadelta_optimizer_1.AdadeltaOptimizer(learningRate, rho, epsilon);
    };
    OptimizerConstructors.adamax = function (learningRate, beta1, beta2, epsilon, decay) {
        if (learningRate === void 0) { learningRate = 0.002; }
        if (beta1 === void 0) { beta1 = 0.9; }
        if (beta2 === void 0) { beta2 = 0.999; }
        if (epsilon === void 0) { epsilon = 1e-8; }
        if (decay === void 0) { decay = 0.0; }
        return new adamax_optimizer_1.AdamaxOptimizer(learningRate, beta1, beta2, epsilon, decay);
    };
    OptimizerConstructors.adagrad = function (learningRate, initialAccumulatorValue) {
        if (initialAccumulatorValue === void 0) { initialAccumulatorValue = 0.1; }
        return new adagrad_optimizer_1.AdagradOptimizer(learningRate, initialAccumulatorValue);
    };
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
    ], OptimizerConstructors, "sgd", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
    ], OptimizerConstructors, "momentum", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
    ], OptimizerConstructors, "rmsprop", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
    ], OptimizerConstructors, "adam", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
    ], OptimizerConstructors, "adadelta", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
    ], OptimizerConstructors, "adamax", null);
    __decorate([
        doc_1.doc({ heading: 'Training', subheading: 'Optimizers', namespace: 'train' })
    ], OptimizerConstructors, "adagrad", null);
    return OptimizerConstructors;
}());
exports.OptimizerConstructors = OptimizerConstructors;

},{"../doc":35,"./adadelta_optimizer":39,"./adagrad_optimizer":42,"./adam_optimizer":41,"./adamax_optimizer":40,"./momentum_optimizer":43,"./rmsprop_optimizer":45,"./sgd_optimizer":46}],33:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adadelta_optimizer_1 = require("./optimizers/adadelta_optimizer");
var adagrad_optimizer_1 = require("./optimizers/adagrad_optimizer");
var adam_optimizer_1 = require("./optimizers/adam_optimizer");
var adamax_optimizer_1 = require("./optimizers/adamax_optimizer");
var momentum_optimizer_1 = require("./optimizers/momentum_optimizer");
var optimizer_constructors_1 = require("./optimizers/optimizer_constructors");
var rmsprop_optimizer_1 = require("./optimizers/rmsprop_optimizer");
var sgd_optimizer_1 = require("./optimizers/sgd_optimizer");
[momentum_optimizer_1.MomentumOptimizer, sgd_optimizer_1.SGDOptimizer, adadelta_optimizer_1.AdadeltaOptimizer, adagrad_optimizer_1.AdagradOptimizer,
    rmsprop_optimizer_1.RMSPropOptimizer, adamax_optimizer_1.AdamaxOptimizer, adam_optimizer_1.AdamOptimizer];
exports.train = {
    sgd: optimizer_constructors_1.OptimizerConstructors.sgd,
    momentum: optimizer_constructors_1.OptimizerConstructors.momentum,
    adadelta: optimizer_constructors_1.OptimizerConstructors.adadelta,
    adagrad: optimizer_constructors_1.OptimizerConstructors.adagrad,
    rmsprop: optimizer_constructors_1.OptimizerConstructors.rmsprop,
    adamax: optimizer_constructors_1.OptimizerConstructors.adamax,
    adam: optimizer_constructors_1.OptimizerConstructors.adam
};

},{"./optimizers/adadelta_optimizer":39,"./optimizers/adagrad_optimizer":42,"./optimizers/adam_optimizer":41,"./optimizers/adamax_optimizer":40,"./optimizers/momentum_optimizer":43,"./optimizers/optimizer_constructors":54,"./optimizers/rmsprop_optimizer":45,"./optimizers/sgd_optimizer":46}],23:[function(require,module,exports) {
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("./kernels/backend_webgl");
require("./kernels/backend_cpu");
var browser_util_1 = require("./browser_util");
var environment = require("./environment");
exports.environment = environment;
var environment_1 = require("./environment");
var io = require("./io/io");
exports.io = io;
var serialization = require("./serialization");
exports.serialization = serialization;
var test_util = require("./test_util");
exports.test_util = test_util;
var util = require("./util");
exports.util = util;
var version_1 = require("./version");
exports.version_core = version_1.version;
var webgl = require("./webgl");
exports.webgl = webgl;
var adadelta_optimizer_1 = require("./optimizers/adadelta_optimizer");
exports.AdadeltaOptimizer = adadelta_optimizer_1.AdadeltaOptimizer;
var adagrad_optimizer_1 = require("./optimizers/adagrad_optimizer");
exports.AdagradOptimizer = adagrad_optimizer_1.AdagradOptimizer;
var adam_optimizer_1 = require("./optimizers/adam_optimizer");
exports.AdamOptimizer = adam_optimizer_1.AdamOptimizer;
var adamax_optimizer_1 = require("./optimizers/adamax_optimizer");
exports.AdamaxOptimizer = adamax_optimizer_1.AdamaxOptimizer;
var momentum_optimizer_1 = require("./optimizers/momentum_optimizer");
exports.MomentumOptimizer = momentum_optimizer_1.MomentumOptimizer;
var optimizer_1 = require("./optimizers/optimizer");
exports.Optimizer = optimizer_1.Optimizer;
var rmsprop_optimizer_1 = require("./optimizers/rmsprop_optimizer");
exports.RMSPropOptimizer = rmsprop_optimizer_1.RMSPropOptimizer;
var sgd_optimizer_1 = require("./optimizers/sgd_optimizer");
exports.SGDOptimizer = sgd_optimizer_1.SGDOptimizer;
var tensor_1 = require("./tensor");
exports.Tensor = tensor_1.Tensor;
exports.TensorBuffer = tensor_1.TensorBuffer;
exports.variable = tensor_1.variable;
exports.Variable = tensor_1.Variable;
var types_1 = require("./types");
exports.Rank = types_1.Rank;
__export(require("./ops/ops"));
var loss_ops_1 = require("./ops/loss_ops");
exports.Reduction = loss_ops_1.Reduction;
__export(require("./train"));
__export(require("./globals"));
var environment_2 = require("./environment");
exports.ENV = environment_2.ENV;
exports.Environment = environment_2.Environment;
exports.setBackend = environment_1.Environment.setBackend;
exports.getBackend = environment_1.Environment.getBackend;
exports.disposeVariables = environment_1.Environment.disposeVariables;
exports.memory = environment_1.Environment.memory;
var doc_1 = require("./doc");
exports.doc = doc_1.doc;
exports.nextFrame = browser_util_1.BrowserUtil.nextFrame;

},{"./kernels/backend_webgl":36,"./kernels/backend_cpu":37,"./browser_util":25,"./environment":24,"./io/io":38,"./serialization":29,"./test_util":27,"./util":26,"./version":28,"./webgl":30,"./optimizers/adadelta_optimizer":39,"./optimizers/adagrad_optimizer":42,"./optimizers/adam_optimizer":41,"./optimizers/adamax_optimizer":40,"./optimizers/momentum_optimizer":43,"./optimizers/optimizer":44,"./optimizers/rmsprop_optimizer":45,"./optimizers/sgd_optimizer":46,"./tensor":32,"./types":31,"./ops/ops":47,"./ops/loss_ops":48,"./train":33,"./globals":34,"./doc":35}],16:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
function createVertexProgram(gl, vertexShaderSource, fragmentShaderSource) {
    var vertexShader = tfc.webgl.webgl_util.createVertexShader(gl, vertexShaderSource);
    var fragmentShader = tfc.webgl.webgl_util.createFragmentShader(gl, fragmentShaderSource);
    var program = tfc.webgl.webgl_util.createProgram(gl);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.attachShader(program, vertexShader); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.attachShader(program, fragmentShader); });
    tfc.webgl.webgl_util.linkProgram(gl, program);
    tfc.webgl.webgl_util.validateProgram(gl, program);
    return program;
}
exports.createVertexProgram = createVertexProgram;
function createAndConfigureInterpolatedTexture(gl, width, height, numChannels, pixels) {
    tfc.webgl.webgl_util.validateTextureSize(gl, width, height);
    var texture = tfc.webgl.webgl_util.createTexture(gl);
    var tex2d = gl.TEXTURE_2D;
    var internalFormat = getTextureInternalFormat(gl, numChannels);
    var format = getTextureFormat(gl, numChannels);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindTexture(tex2d, texture); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.LINEAR); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.LINEAR); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, format, getTextureType(gl), pixels); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    return texture;
}
exports.createAndConfigureInterpolatedTexture = createAndConfigureInterpolatedTexture;
function createAndConfigureTexture(gl, width, height, numChannels, pixels) {
    tfc.webgl.webgl_util.validateTextureSize(gl, width, height);
    var texture = tfc.webgl.webgl_util.createTexture(gl);
    var tex2d = gl.TEXTURE_2D;
    var internalFormat = getTextureInternalFormat(gl, numChannels);
    var format = getTextureFormat(gl, numChannels);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindTexture(tex2d, texture); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, format, getTextureType(gl), pixels); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    return texture;
}
exports.createAndConfigureTexture = createAndConfigureTexture;
function createAndConfigureUByteTexture(gl, width, height, numChannels, pixels) {
    tfc.webgl.webgl_util.validateTextureSize(gl, width, height);
    var texture = tfc.webgl.webgl_util.createTexture(gl);
    var tex2d = gl.TEXTURE_2D;
    var internalFormat = getTextureInternalUByteFormat(gl, numChannels);
    var format = getTextureFormat(gl, numChannels);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindTexture(tex2d, texture); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MIN_FILTER, gl.NEAREST); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texParameteri(tex2d, gl.TEXTURE_MAG_FILTER, gl.NEAREST); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.texImage2D(tex2d, 0, internalFormat, width, height, 0, format, getTextureTypeUByte(gl), pixels); });
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindTexture(gl.TEXTURE_2D, null); });
    return texture;
}
exports.createAndConfigureUByteTexture = createAndConfigureUByteTexture;
function getTextureInternalFormat(gl, numChannels) {
    if (numChannels === 4) {
        return gl.RGBA32F;
    }
    else if (numChannels === 3) {
        return gl.RGB32F;
    }
    else if (numChannels === 2) {
        return gl.RG32F;
    }
    return gl.R32F;
}
function getTextureInternalUByteFormat(gl, numChannels) {
    if (numChannels === 4) {
        return gl.RGBA8;
    }
    else if (numChannels === 3) {
        return gl.RGB8;
    }
    else if (numChannels === 2) {
        return gl.RG8;
    }
    return gl.R8;
}
function getTextureFormat(gl, numChannels) {
    if (numChannels === 4) {
        return gl.RGBA;
    }
    else if (numChannels === 3) {
        return gl.RGB;
    }
    else if (numChannels === 2) {
        return gl.RG;
    }
    return gl.RED;
}
function getTextureType(gl) {
    return gl.FLOAT;
}
function getTextureTypeUByte(gl) {
    return gl.UNSIGNED_BYTE;
}
//# sourceMappingURL=gl_util.js.map
},{"@tensorflow/tfjs-core":23}],13:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var gl_util = require("./gl_util");
function generateDistanceComputationSource(format) {
    var source = "\n    #define DATA_NUM_PACKED_DIMENSIONS " + format.pixelsPerPoint + ".\n    #define DATA_POINTS_PER_ROW " + format.pointsPerRow + ".\n    #define DATA_NUM_ROWS " + format.numRows + ".\n    #define TEXTURE_WIDTH " + format.pointsPerRow * format.pixelsPerPoint + ".\n\n    //returns the texture coordinate for point/dimension\n    vec2 dataTexCoordinates(int id, int dimension) {\n      float id_f = float(id);\n      float row = (floor(id_f/DATA_POINTS_PER_ROW)+0.5) / DATA_NUM_ROWS;\n      float col = ((mod(id_f,DATA_POINTS_PER_ROW)*(DATA_NUM_PACKED_DIMENSIONS)\n                  + float(dimension)) + 0.5) / (TEXTURE_WIDTH);\n      return vec2(col,row);\n    }\n\n    //compute the euclidean squared distances between two points i and j\n    float pointDistanceSquared(int i, int j) {\n      vec4 result = vec4(0,0,0,0);\n      int num_iter = int(DATA_NUM_PACKED_DIMENSIONS);\n      for(int d = 0; d < num_iter; ++d) {\n        vec4 vi = texture(data_tex,dataTexCoordinates(i,d));\n        vec4 vj = texture(data_tex,dataTexCoordinates(j,d));\n        result += (vi-vj)*(vi-vj);\n      }\n      return (result.r+result.g+result.b+result.a);\n    }\n\n    //compute the euclidean squared distances between two points i and j\n    vec4 pointDistanceSquaredBatch(int i, int j0, int j1, int j2, int j3) {\n      vec4 result = vec4(0,0,0,0);\n      int num_iter = int(DATA_NUM_PACKED_DIMENSIONS);\n      for(int d = 0; d < num_iter; ++d) {\n        vec4 vi = texture(data_tex,dataTexCoordinates(i,d));\n        vec4 vj0 = texture(data_tex,dataTexCoordinates(j0,d));\n        vec4 vj1 = texture(data_tex,dataTexCoordinates(j1,d));\n        vec4 vj2 = texture(data_tex,dataTexCoordinates(j2,d));\n        vec4 vj3 = texture(data_tex,dataTexCoordinates(j3,d));\n        vj0 = (vi-vj0); vj0 *= vj0;\n        vj1 = (vi-vj1); vj1 *= vj1;\n        vj2 = (vi-vj2); vj2 *= vj2;\n        vj3 = (vi-vj3); vj3 *= vj3;\n        result.r += (vj0.r+vj0.g+vj0.b+vj0.a);\n        result.g += (vj1.r+vj1.g+vj1.b+vj1.a);\n        result.b += (vj2.r+vj2.g+vj2.b+vj2.a);\n        result.a += (vj3.r+vj3.g+vj3.b+vj3.a);\n      }\n      return result;\n    }\n    ";
    return source;
}
exports.generateDistanceComputationSource = generateDistanceComputationSource;
function generateMNISTDistanceComputationSource() {
    var source = "\n  #define POINTS_PER_ROW 250.\n  #define NUM_ROWS 240.\n  #define TEXTURE_WIDTH 3500.\n  #define TEXTURE_HEIGHT 3360.\n  #define DIGIT_WIDTH 14.\n  #define NUM_PACKED_DIMENSIONS 196\n\n  //returns the texture coordinate for point/dimension\n  vec2 dataTexCoordinates(int id, int dimension) {\n    float id_f = float(id);\n    float dimension_f = float(dimension);\n    float col = ((mod(id_f,POINTS_PER_ROW)*DIGIT_WIDTH));\n    float row = (floor(id_f/POINTS_PER_ROW)*DIGIT_WIDTH);\n\n    return (vec2(col,row)+\n            vec2(mod(dimension_f,DIGIT_WIDTH),floor(dimension_f/DIGIT_WIDTH))+\n            vec2(0.5,0.5)\n            )/\n            vec2(TEXTURE_WIDTH,TEXTURE_HEIGHT);\n  }\n\n  //compute the euclidean squared distances between two points i and j\n  float pointDistanceSquared(int i, int j) {\n    vec4 result = vec4(0,0,0,0);\n    for(int d = 0; d < NUM_PACKED_DIMENSIONS; d+=1) {\n      vec4 vi = texture(data_tex,dataTexCoordinates(i,d));\n      vec4 vj = texture(data_tex,dataTexCoordinates(j,d));\n      result += (vi-vj)*(vi-vj);\n    }\n    return (result.r+result.g+result.b+result.a);\n  }\n\n  //compute the euclidean squared distances between two points i and j\n  vec4 pointDistanceSquaredBatch(int i, int j0, int j1, int j2, int j3) {\n    vec4 result = vec4(0,0,0,0);\n    for(int d = 0; d < NUM_PACKED_DIMENSIONS; d+=1) {\n      vec4 vi = texture(data_tex,dataTexCoordinates(i,d));\n      vec4 vj0 = texture(data_tex,dataTexCoordinates(j0,d));\n      vec4 vj1 = texture(data_tex,dataTexCoordinates(j1,d));\n      vec4 vj2 = texture(data_tex,dataTexCoordinates(j2,d));\n      vec4 vj3 = texture(data_tex,dataTexCoordinates(j3,d));\n      vj0 = (vi-vj0); vj0 *= vj0;\n      vj1 = (vi-vj1); vj1 *= vj1;\n      vj2 = (vi-vj2); vj2 *= vj2;\n      vj3 = (vi-vj3); vj3 *= vj3;\n      result.r += (vj0.r+vj0.g+vj0.b+vj0.a);\n      result.g += (vj1.r+vj1.g+vj1.b+vj1.a);\n      result.b += (vj2.r+vj2.g+vj2.b+vj2.a);\n      result.a += (vj3.r+vj3.g+vj3.b+vj3.a);\n    }\n    return result;\n  }\n  ";
    return source;
}
exports.generateMNISTDistanceComputationSource = generateMNISTDistanceComputationSource;
function generateKNNClusterTexture(numPoints, numClusters, numNeighbors) {
    var pointsPerRow = Math.floor(Math.sqrt(numPoints * numNeighbors) / numNeighbors);
    var numRows = Math.ceil(numPoints / pointsPerRow);
    var dataShape = { numPoints: numPoints, pixelsPerPoint: numNeighbors, numRows: numRows, pointsPerRow: pointsPerRow };
    var pointsPerCluster = Math.ceil(numPoints / numClusters);
    var textureValues = new Float32Array(pointsPerRow * numNeighbors * numRows * 2);
    for (var i = 0; i < numPoints; ++i) {
        var clusterId = Math.floor(i / pointsPerCluster);
        for (var n = 0; n < numNeighbors; ++n) {
            var id = (i * numNeighbors + n) * 2;
            textureValues[id] = Math.floor(Math.random() * pointsPerCluster) +
                clusterId * pointsPerCluster;
            textureValues[id + 1] = Math.random();
        }
    }
    var backend = tfc.ENV.findBackend('webgl');
    if (backend === null) {
        throw Error('WebGL backend is not available');
    }
    var gpgpu = backend.getGPGPUContext();
    var knnGraph = gl_util.createAndConfigureTexture(gpgpu.gl, pointsPerRow * numNeighbors, numRows, 2, textureValues);
    return { knnGraph: knnGraph, dataShape: dataShape };
}
exports.generateKNNClusterTexture = generateKNNClusterTexture;
function generateKNNLineTexture(numPoints, numNeighbors) {
    var pointsPerRow = Math.floor(Math.sqrt(numPoints * numNeighbors) / numNeighbors);
    var numRows = Math.ceil(numPoints / pointsPerRow);
    var dataShape = { numPoints: numPoints, pixelsPerPoint: numNeighbors, numRows: numRows, pointsPerRow: pointsPerRow };
    var textureValues = new Float32Array(pointsPerRow * numNeighbors * numRows * 2);
    for (var i = 0; i < numPoints; ++i) {
        for (var n = 0; n < numNeighbors; ++n) {
            var id = (i * numNeighbors + n) * 2;
            textureValues[id] =
                Math.floor(i + n - (numNeighbors / 2) + numPoints) % numPoints;
            textureValues[id + 1] = 1;
        }
    }
    var backend = tfc.ENV.findBackend('webgl');
    if (backend === null) {
        throw Error('WebGL backend is not available');
    }
    var gpgpu = backend.getGPGPUContext();
    var knnGraph = gl_util.createAndConfigureTexture(gpgpu.gl, pointsPerRow * numNeighbors, numRows, 2, textureValues);
    return { knnGraph: knnGraph, dataShape: dataShape };
}
exports.generateKNNLineTexture = generateKNNLineTexture;
function generateKNNClusterData(numPoints, numClusters, numNeighbors) {
    var pointsPerCluster = Math.ceil(numPoints / numClusters);
    var distances = new Float32Array(numPoints * numNeighbors);
    var indices = new Uint32Array(numPoints * numNeighbors);
    for (var i = 0; i < numPoints; ++i) {
        var clusterId = Math.floor(i / pointsPerCluster);
        for (var n = 0; n < numNeighbors; ++n) {
            var id = (i * numNeighbors + n);
            distances[id] = Math.random();
            indices[id] = Math.floor(Math.random() * pointsPerCluster) +
                clusterId * pointsPerCluster;
        }
    }
    return { distances: distances, indices: indices };
}
exports.generateKNNClusterData = generateKNNClusterData;
function generateKNNLineData(numPoints, numNeighbors) {
    var distances = new Float32Array(numPoints * numNeighbors);
    var indices = new Uint32Array(numPoints * numNeighbors);
    for (var i = 0; i < numPoints; ++i) {
        for (var n = 0; n < numNeighbors; ++n) {
            var id = (i * numNeighbors + n);
            distances[id] = 1;
            indices[id] =
                Math.floor(i + n - (numNeighbors / 2) + numPoints) % numPoints;
        }
    }
    return { distances: distances, indices: indices };
}
exports.generateKNNLineData = generateKNNLineData;
//# sourceMappingURL=dataset_util.js.map
},{"@tensorflow/tfjs-core":23,"./gl_util":16}],20:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var gl_util = require("./gl_util");
function createTextureDrawerProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D texture;\n    uniform float width;\n    uniform float height;\n\n    void main() {\n      vec2 texture_coordinates = gl_FragCoord.xy/vec2(width,height);\n      texture_coordinates.y = 1. - texture_coordinates.y;\n      vec4 texture_color = texture2D(texture,texture_coordinates);\n      gl_FragColor = texture_color;\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createTextureDrawerProgram = createTextureDrawerProgram;
function executeTextureDrawerProgram(gpgpu, program, texture, width, height, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, height, width);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var textureLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'texture');
    gpgpu.setInputMatrixTexture(texture, textureLoc, 0);
    var widthLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'width');
    gl.uniform1f(widthLoc, width);
    var heightLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'height');
    gl.uniform1f(heightLoc, height);
    gpgpu.executeProgram();
}
exports.executeTextureDrawerProgram = executeTextureDrawerProgram;
function createAvgChannelTextureDrawerProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D texture;\n    uniform float width;\n    uniform float height;\n\n    void main() {\n      vec2 texture_coordinates = gl_FragCoord.xy/vec2(width,height);\n      texture_coordinates.y = 1. - texture_coordinates.y;\n      vec4 texture_color = texture2D(texture,texture_coordinates);\n      float grey_scale = (texture_color.r + texture_color.g +\n                         texture_color.b + texture_color.a)/4.;\n      gl_FragColor = vec4(vec3(grey_scale),1);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createAvgChannelTextureDrawerProgram = createAvgChannelTextureDrawerProgram;
function executeAvgChannelTextureDrawerProgram(gpgpu, program, texture, width, height, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, height, width);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var textureLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'texture');
    gpgpu.setInputMatrixTexture(texture, textureLoc, 0);
    var widthLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'width');
    gl.uniform1f(widthLoc, width);
    var heightLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'height');
    gl.uniform1f(heightLoc, height);
    gpgpu.executeProgram();
}
exports.executeAvgChannelTextureDrawerProgram = executeAvgChannelTextureDrawerProgram;
function createSplatTextureDrawerProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D splat_tex;\n    uniform sampler2D color_scale_tex;\n    uniform sampler2D drawn_embedding_tex;\n\n    uniform float width;\n    uniform float height;\n    uniform float normalization;\n\n    void main() {\n      float value = 0.;\n      vec2 texture_pos = vec2(-1,-1);\n\n      if(gl_FragCoord.x < width/2. && gl_FragCoord.y >= height/2.) {\n        vec2 texture_pos = (gl_FragCoord.xy-vec2(0.,height/2.))\n                              / vec2(width/2.,height/2.);\n        vec4 values = texture2D(drawn_embedding_tex,texture_pos);\n        gl_FragColor = values;\n        return;\n\n      }else if(gl_FragCoord.x >= width/2. && gl_FragCoord.y >= height/2.) {\n        vec2 texture_pos = (gl_FragCoord.xy-vec2(width/2.,height/2.))\n                              / vec2(width/2.,height/2.);\n        vec4 values = texture2D(splat_tex,texture_pos)/normalization*1.5;\n        value = values.x;\n\n      }else if(gl_FragCoord.x < width/2. && gl_FragCoord.y < height/2.) {\n        vec2 texture_pos = gl_FragCoord.xy / vec2(width/2.,height/2.);\n        vec4 values = texture2D(splat_tex,texture_pos)/normalization*15.;\n        value = values.y;\n\n      }else if(gl_FragCoord.x >= width/2. && gl_FragCoord.y < height/2.) {\n        vec2 texture_pos = (gl_FragCoord.xy-vec2(width/2.,0))\n                              / vec2(width/2.,height/2.);\n        vec4 values = texture2D(splat_tex,texture_pos)/normalization*15.;\n        value = values.z;\n      }\n\n\n      vec2 color_scale_pos  = vec2(-1.*value+0.5,0.5);\n      vec4 color = texture2D(color_scale_tex,color_scale_pos)/255.;\n\n      gl_FragColor = vec4(color.xyz,1);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createSplatTextureDrawerProgram = createSplatTextureDrawerProgram;
function executeSplatTextureDrawerProgram(gpgpu, program, splatTex, colorScaleTex, drawnEmbeddingTex, normalization, textureDiameter, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, textureDiameter, textureDiameter);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var splatLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'splat_tex');
    gpgpu.setInputMatrixTexture(splatTex, splatLocation, 0);
    var colorScaleLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'color_scale_tex');
    gpgpu.setInputMatrixTexture(colorScaleTex, colorScaleLocation, 1);
    var drawnEmbeddingLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'drawn_embedding_tex');
    gpgpu.setInputMatrixTexture(drawnEmbeddingTex, drawnEmbeddingLoc, 2);
    var widthLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'width');
    gl.uniform1f(widthLoc, textureDiameter);
    var heightLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'height');
    gl.uniform1f(heightLoc, textureDiameter);
    var normLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'normalization');
    gl.uniform1f(normLoc, normalization);
    gpgpu.executeProgram();
}
exports.executeSplatTextureDrawerProgram = executeSplatTextureDrawerProgram;
function createSimpleEmbeddingDrawerProgram(gpgpu) {
    var vertexShaderSource = "\n    precision highp float;\n    attribute float vertex_id;\n\n    uniform sampler2D embedding_tex;\n    uniform vec2 minV;\n    uniform vec2 maxV;\n    uniform float pnts_per_row;\n    uniform float num_rows;\n\n    void main() {\n      int row    = int(vertex_id/pnts_per_row);\n      int column = int(mod(vertex_id,pnts_per_row));\n      float width = (pnts_per_row*2.0);\n      float row_tex = (float(row)+0.5)/num_rows;\n      vec2 tex_coords_x = vec2((float(column)*2.+0.5)/width, row_tex);\n      vec2 tex_coords_y = vec2((float(column)*2.+1.+0.5)/width, row_tex);\n\n      float x_pnt = texture2D(embedding_tex,tex_coords_x).r;\n      float y_pnt = texture2D(embedding_tex,tex_coords_y).r;\n      vec2 vertex_coords = vec2(x_pnt,y_pnt);\n\n      vertex_coords = (vertex_coords-minV)/(maxV-minV); //  0:1 space\n      vertex_coords = vertex_coords*2.0 - 1.0;          // -1:1 space\n\n      gl_Position = vec4(vertex_coords,0,1);\n      gl_PointSize = 4.;\n    }\n  ";
    var fragmentShaderSource = "\n    precision highp float;\n    uniform float alpha;\n\n    void main() {\n      float r = 0.0, delta = 0.0;\n      vec2 cxy = 2.0 * gl_PointCoord - 1.0;\n      r = dot(cxy, cxy);\n      if (r > 1.0) {\n          discard;\n      }\n      gl_FragColor = vec4(0,0.6,1,alpha);\n    }\n  ";
    return gl_util.createVertexProgram(gpgpu.gl, vertexShaderSource, fragmentShaderSource);
}
exports.createSimpleEmbeddingDrawerProgram = createSimpleEmbeddingDrawerProgram;
function executeSimpleEmbeddingDrawerProgram(gpgpu, program, embeddingTex, numPoints, minX, minY, maxX, maxY, pntsPerRow, numRows, pointIdBuffer, alpha, targetTexDiameter, targetTex) {
    var gl = gpgpu.gl;
    var oldProgram = gpgpu.program;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, targetTexDiameter, targetTexDiameter);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gpgpu.setProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, pointIdBuffer); });
    tfc.webgl.webgl_util.bindVertexBufferToProgramAttribute(gl, program, 'vertex_id', pointIdBuffer, 1, 0, 0);
    var embeddingLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'embedding_tex');
    gpgpu.setInputMatrixTexture(embeddingTex, embeddingLocation, 0);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'pnts_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var alphaLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'alpha');
    gl.uniform1f(alphaLoc, alpha);
    if (maxX - minX > maxY - minY) {
        maxY = (maxY + minY) / 2 + (maxX - minX) / 2;
        minY = (maxY + minY) / 2 - (maxX - minX) / 2;
    }
    else {
        maxX = (maxX + minX) / 2 + (maxY - minY) / 2;
        minX = (maxX + minX) / 2 - (maxY - minY) / 2;
    }
    var minLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'minV');
    gl.uniform2f(minLoc, minX, minY);
    var maxLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'maxV');
    gl.uniform2f(maxLoc, maxX, maxY);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.drawArrays(gl.POINTS, 0, numPoints); });
    gl.disable(gl.BLEND);
    if (oldProgram != null) {
        gpgpu.setProgram(oldProgram);
        tfc.webgl.gpgpu_util.bindVertexProgramAttributeStreams(gpgpu.gl, oldProgram, gpgpu.vertexBuffer);
    }
}
exports.executeSimpleEmbeddingDrawerProgram = executeSimpleEmbeddingDrawerProgram;
function createColoredEmbeddingDrawerProgram(gpgpu) {
    var vertexShaderSource = "\n    precision highp float;\n    attribute float vertex_id;\n\n    uniform sampler2D embedding_tex;\n    uniform sampler2D color_tex;\n    uniform vec2 minV;\n    uniform vec2 maxV;\n    uniform float pnts_per_row;\n    uniform float num_rows;\n\n    varying vec4 color;\n\n    void main() {\n      int row    = int(vertex_id/pnts_per_row);\n      int column = int(mod(vertex_id,pnts_per_row));\n      float width = (pnts_per_row*2.0);\n      float row_tex = (float(row)+0.5)/num_rows;\n      vec2 tex_coords_x = vec2((float(column)*2.+0.5)/width, row_tex);\n      vec2 tex_coords_y = vec2((float(column)*2.+1.+0.5)/width, row_tex);\n\n      vec2 color_coords = vec2((float(column)+0.5)/pnts_per_row, row_tex);\n      color = texture2D(color_tex,color_coords);\n\n      float x_pnt = texture2D(embedding_tex,tex_coords_x).r;\n      float y_pnt = texture2D(embedding_tex,tex_coords_y).r;\n      vec2 vertex_coords = vec2(x_pnt,y_pnt);\n\n      vertex_coords = (vertex_coords-minV)/(maxV-minV); //  0:1 space\n      vertex_coords = vertex_coords*2.0 - 1.0;          // -1:1 space\n\n      gl_Position = vec4(vertex_coords,0,1);\n      gl_PointSize = 4.;\n    }\n  ";
    var fragmentShaderSource = "\n    precision highp float;\n    uniform float alpha;\n    varying vec4 color;\n\n    void main() {\n      //vec4 color = vec4(0.1,0.4,0.9,alpha);\n      float r = 0.0, delta = 0.0;\n      vec2 cxy = 2.0 * gl_PointCoord - 1.0;\n      r = dot(cxy, cxy);\n      if (r > 1.0) {\n          discard;\n      }\n      gl_FragColor = color;\n      gl_FragColor.a = alpha;\n    }\n  ";
    return gl_util.createVertexProgram(gpgpu.gl, vertexShaderSource, fragmentShaderSource);
}
exports.createColoredEmbeddingDrawerProgram = createColoredEmbeddingDrawerProgram;
function executeColoredEmbeddingDrawerProgram(gpgpu, program, embeddingTex, numPoints, minX, minY, maxX, maxY, pntsPerRow, numRows, pointIdBuffer, alpha, targetTexDiameter, colorsTex, targetTex) {
    var gl = gpgpu.gl;
    var oldProgram = gpgpu.program;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, targetTexDiameter, targetTexDiameter);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gpgpu.setProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, pointIdBuffer); });
    tfc.webgl.webgl_util.bindVertexBufferToProgramAttribute(gl, program, 'vertex_id', pointIdBuffer, 1, 0, 0);
    var embeddingLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'embedding_tex');
    gpgpu.setInputMatrixTexture(embeddingTex, embeddingLocation, 0);
    var colorLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'color_tex');
    gpgpu.setInputMatrixTexture(colorsTex, colorLocation, 1);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'pnts_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var alphaLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'alpha');
    gl.uniform1f(alphaLoc, alpha);
    if (maxX - minX > maxY - minY) {
        maxY = (maxY + minY) / 2 + (maxX - minX) / 2;
        minY = (maxY + minY) / 2 - (maxX - minX) / 2;
    }
    else {
        maxX = (maxX + minX) / 2 + (maxY - minY) / 2;
        minX = (maxX + minX) / 2 - (maxY - minY) / 2;
    }
    var minLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'minV');
    gl.uniform2f(minLoc, minX, minY);
    var maxLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'maxV');
    gl.uniform2f(maxLoc, maxX, maxY);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.drawArrays(gl.POINTS, 0, numPoints); });
    gl.disable(gl.BLEND);
    if (oldProgram != null) {
        gpgpu.setProgram(oldProgram);
        tfc.webgl.gpgpu_util.bindVertexProgramAttributeStreams(gpgpu.gl, oldProgram, gpgpu.vertexBuffer);
    }
}
exports.executeColoredEmbeddingDrawerProgram = executeColoredEmbeddingDrawerProgram;
function createTexturedPointsDrawerProgram(gpgpu) {
    var vertexShaderSource = "#version 300 es\n    precision highp float;\n    in float vertex_id;\n\n    uniform sampler2D embedding_tex;\n    uniform sampler2D color_tex;\n\n    uniform vec2 minV;\n    uniform vec2 maxV;\n    uniform float pnts_per_row;\n    uniform float num_rows;\n\n    out float image_id;\n    out vec4 label_color;\n\n\n    void main() {\n      int row    = int(vertex_id/pnts_per_row);\n      int column = int(mod(vertex_id,pnts_per_row));\n\n      float width = (pnts_per_row*2.0);\n      float row_tex = (float(row)+0.5)/num_rows;\n      vec2 tex_coords_x = vec2((float(column)*2.+0.5)/width, row_tex);\n      vec2 tex_coords_y = vec2((float(column)*2.+1.+0.5)/width, row_tex);\n\n      vec2 color_coords = vec2((float(column)+0.5)/pnts_per_row, row_tex);\n      label_color = texture(color_tex,color_coords);\n\n      float x_pnt = texture(embedding_tex,tex_coords_x).r;\n      float y_pnt = texture(embedding_tex,tex_coords_y).r;\n      vec2 vertex_coords = vec2(x_pnt,y_pnt);\n\n      vertex_coords = (vertex_coords-minV)/(maxV-minV); //  0:1 space\n      vertex_coords = vertex_coords*2.0 - 1.0;          // -1:1 space\n\n      gl_Position = vec4(vertex_coords,0,1);\n      gl_PointSize = 14.;\n      image_id = vertex_id;\n    }\n  ";
    var fragmentShaderSource = "#version 300 es\n    precision highp float;\n    uniform float alpha;\n    uniform float pnts_per_row;\n    uniform float num_rows;\n    uniform float point_texture_diameter;\n\n    in float image_id;\n    in vec4 label_color;\n\n    out vec4 fragment_color;\n\n    uniform sampler2D point_tex;\n\n    //Random function developed by Inigo Quilez\n    //https://www.shadertoy.com/view/llGSzw\n    float hash1( uint n ) {\n        // integer hash copied from Hugo Elias\n    \t  n = (n << 13U) ^ n;\n        n = n * (n * n * 15731U + 789221U) + 1376312589U;\n        return float( n & uvec3(0x7fffffffU))/float(0x7fffffff);\n    }\n\n    void main() {\n      vec2 cxy = gl_PointCoord*point_texture_diameter;\n\n      float random = hash1(uint(image_id));\n\n      int row    = int(image_id/250.);\n      int col = int(mod(image_id,250.));\n\n\n      float col_tex = (float(col)*point_texture_diameter+0.5+cxy.x)/3500.;\n      float row_tex = (float(row)*point_texture_diameter+0.5+cxy.y)/3360.;\n\n      vec2 tex_coords = vec2(col_tex, row_tex);\n      vec4 texture_value = texture(point_tex,tex_coords);\n      float average_value = (texture_value.r,texture_value.g,\n                              texture_value.b,texture_value.a)/4.;\n\n\n      fragment_color = label_color;\n      fragment_color.a = average_value*1.5;\n\n      float fade_in = 0.05;\n      if(random - alpha < fade_in) {\n        fragment_color.a *= 1. - (random - alpha)/fade_in;\n      }else if(random > alpha) {\n        fragment_color.a = 0.;\n      }\n    }\n  ";
    return gl_util.createVertexProgram(gpgpu.gl, vertexShaderSource, fragmentShaderSource);
}
exports.createTexturedPointsDrawerProgram = createTexturedPointsDrawerProgram;
function executeTexturedPointsDrawerProgram(gpgpu, program, embeddingTex, numPoints, minX, minY, maxX, maxY, pntsPerRow, numRows, pointIdBuffer, alpha, targetTexDiameter, pointsTex, pointTextureDiameter, colorsTex, targetTex) {
    var gl = gpgpu.gl;
    var oldProgram = gpgpu.program;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, targetTexDiameter, targetTexDiameter);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gpgpu.setProgram(program);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, pointIdBuffer); });
    tfc.webgl.webgl_util.bindVertexBufferToProgramAttribute(gl, program, 'vertex_id', pointIdBuffer, 1, 0, 0);
    var embeddingLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'embedding_tex');
    gpgpu.setInputMatrixTexture(embeddingTex, embeddingLocation, 0);
    var pointsTexLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'point_tex');
    gpgpu.setInputMatrixTexture(pointsTex, pointsTexLoc, 1);
    var colorsTexLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'color_tex');
    gpgpu.setInputMatrixTexture(colorsTex, colorsTexLoc, 2);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'pnts_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var pointTextureDiameterLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'point_texture_diameter');
    gl.uniform1f(pointTextureDiameterLoc, pointTextureDiameter);
    var alphaLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'alpha');
    gl.uniform1f(alphaLoc, alpha);
    if (maxX - minX > maxY - minY) {
        maxY = (maxY + minY) / 2 + (maxX - minX) / 2;
        minY = (maxY + minY) / 2 - (maxX - minX) / 2;
    }
    else {
        maxX = (maxX + minX) / 2 + (maxY - minY) / 2;
        minX = (maxX + minX) / 2 - (maxY - minY) / 2;
    }
    var minLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'minV');
    gl.uniform2f(minLoc, minX, minY);
    var maxLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'maxV');
    gl.uniform2f(maxLoc, maxX, maxY);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.drawArrays(gl.POINTS, 0, numPoints); });
    gl.disable(gl.BLEND);
    if (oldProgram != null) {
        gpgpu.setProgram(oldProgram);
        tfc.webgl.gpgpu_util.bindVertexProgramAttributeStreams(gpgpu.gl, oldProgram, gpgpu.vertexBuffer);
    }
}
exports.executeTexturedPointsDrawerProgram = executeTexturedPointsDrawerProgram;
//# sourceMappingURL=drawer_util.js.map
},{"@tensorflow/tfjs-core":23,"./gl_util":16}],14:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var drawer_util = require("./drawer_util");
var gl_util = require("./gl_util");
var EmbeddingDrawer = (function () {
    function EmbeddingDrawer(numPoints) {
        this.numPoints = numPoints;
        var backend = tfc.ENV.findBackend('webgl');
        this.gpgpu = backend.getGPGPUContext();
        this.initializePrograms();
    }
    EmbeddingDrawer.prototype.drawPoints = function (embedding, alpha, targetTex) {
        drawer_util.executeSimpleEmbeddingDrawerProgram(this.gpgpu, this.simpleEmbeddingDrawerProgram, embedding.embeddingTexture, embedding.numPoints, embedding.minX, embedding.minY, embedding.maxX, embedding.maxY, embedding.pntsPerRow, embedding.numRows, this.vertexIdBuffer, alpha, 800, targetTex);
    };
    EmbeddingDrawer.prototype.drawColoredPoints = function (embedding, alpha, colors, targetTex) {
        drawer_util.executeColoredEmbeddingDrawerProgram(this.gpgpu, this.coloredEmbeddingDrawerProgram, embedding.embeddingTexture, embedding.numPoints, embedding.minX, embedding.minY, embedding.maxX, embedding.maxY, embedding.pntsPerRow, embedding.numRows, this.vertexIdBuffer, alpha, 800, colors, targetTex);
    };
    EmbeddingDrawer.prototype.drawTexturedPoints = function (embedding, alpha, pointsTexture, pointTextureDiameter, colorsTexture, targetTex) {
        drawer_util.executeTexturedPointsDrawerProgram(this.gpgpu, this.texturedPointsDrawerProgram, embedding.embeddingTexture, embedding.numPoints, embedding.minX, embedding.minY, embedding.maxX, embedding.maxY, embedding.pntsPerRow, embedding.numRows, this.vertexIdBuffer, alpha, 800, pointsTexture, pointTextureDiameter, colorsTexture, targetTex);
    };
    EmbeddingDrawer.prototype.drawPointsAndSplatTexture = function (embedding, splatTexture, drawnEmbeddingTex, textureNormalization) {
        drawer_util.executeSplatTextureDrawerProgram(this.gpgpu, this.splatTextureDrawerProgram, splatTexture, this.colorScaleTex, drawnEmbeddingTex, textureNormalization, 800);
    };
    EmbeddingDrawer.prototype.initializePrograms = function () {
        this.simpleEmbeddingDrawerProgram =
            drawer_util.createSimpleEmbeddingDrawerProgram(this.gpgpu);
        this.coloredEmbeddingDrawerProgram =
            drawer_util.createColoredEmbeddingDrawerProgram(this.gpgpu);
        var vertexId = new Float32Array(this.numPoints);
        var i = 0;
        for (i = 0; i < this.numPoints; ++i) {
            vertexId[i] = i;
        }
        this.vertexIdBuffer =
            tfc.webgl.webgl_util.createStaticVertexBuffer(this.gpgpu.gl, vertexId);
        this.splatTextureDrawerProgram =
            drawer_util.createSplatTextureDrawerProgram(this.gpgpu);
        this.texturedPointsDrawerProgram =
            drawer_util.createTexturedPointsDrawerProgram(this.gpgpu);
        var colors = new Float32Array([
            178, 24, 43, 214, 96, 77, 244, 165, 130, 253, 219, 199, 255, 255,
            255, 209, 229, 240, 146, 197, 222, 67, 147, 195, 33, 102, 172
        ]);
        this.colorScaleTex = gl_util.createAndConfigureInterpolatedTexture(this.gpgpu.gl, 9, 1, 3, colors);
    };
    return EmbeddingDrawer;
}());
exports.EmbeddingDrawer = EmbeddingDrawer;
//# sourceMappingURL=drawer.js.map
},{"@tensorflow/tfjs-core":23,"./drawer_util":20,"./gl_util":16}],19:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var gl_util = require("./gl_util");
function generateFragmentShaderSource(distanceComputationSource, numNeighbors) {
    var source = "#version 300 es\n    precision highp float;\n    uniform sampler2D data_tex;\n    uniform float num_points;\n    uniform float points_per_row_knn;\n    uniform float num_rows_knn;\n    uniform float num_neighs;\n    uniform float iteration;\n\n    #define NUM_PACKED_NEIGHBORS " + numNeighbors / 4 + "\n\n    flat in vec4 knn[NUM_PACKED_NEIGHBORS];\n    flat in int point_id;\n    in float neighbor_id;\n\n    const float MAX_DIST = 10e30;\n\n    " + distanceComputationSource + "\n\n    out vec4 fragmentColor;\n    void main() {\n      int id = int(neighbor_id/4.);\n      int channel = int(mod(neighbor_id,4.)+0.1);\n\n      if(channel == 0) {\n        fragmentColor = vec4(knn[id].r,0,0,1);\n      }else if(channel == 1) {\n        fragmentColor = vec4(knn[id].g,0,0,1);\n      }else if(channel == 2) {\n        fragmentColor = vec4(knn[id].b,0,0,1);\n      }else if(channel == 3) {\n        fragmentColor = vec4(knn[id].a,0,0,1);\n      }\n\n      //If the neighbor has a valid id i compute the distance squared\n      //otherwise I set it to invalid\n      if(fragmentColor.r >= 0.) {\n        fragmentColor.g = pointDistanceSquared(int(fragmentColor.r),point_id);\n      }else{\n        fragmentColor.g = MAX_DIST;\n      }\n    }\n  ";
    return source;
}
function generateVariablesAndDeclarationsSource(numNeighbors) {
    var source = "\n  precision highp float;\n  #define NEIGH_PER_ITER 20\n  #define NUM_NEIGHBORS " + numNeighbors + "\n  #define NUM_NEIGHBORS_FLOAT " + numNeighbors + ".\n  #define NUM_PACKED_NEIGHBORS " + numNeighbors / 4 + "\n  #define MAX_DIST 10e30\n\n  //attributes\n  in float vertex_id;\n  //uniforms\n  uniform sampler2D data_tex;\n  uniform sampler2D starting_knn_tex;\n  uniform float num_points;\n  uniform float points_per_row_knn;\n  uniform float num_rows_knn;\n  uniform float num_neighs;\n  uniform float iteration;\n\n  //output\n  //the indices are packed in varying vectors\n  flat out vec4 knn[NUM_PACKED_NEIGHBORS];\n  //used to recover the neighbor id in the fragment shader\n  out float neighbor_id;\n  //used to recover the point id in the fragment shader\n  //(for recomputing distances)\n  flat out int point_id;\n\n  float distances_heap[NUM_NEIGHBORS];\n  int knn_heap[NUM_NEIGHBORS];\n  ";
    return source;
}
var randomGeneratorSource = "\n//Random function developed by Inigo Quilez\n//https://www.shadertoy.com/view/llGSzw\nfloat hash1( uint n ) {\n    // integer hash copied from Hugo Elias\n\t  n = (n << 13U) ^ n;\n    n = n * (n * n * 15731U + 789221U) + 1376312589U;\n    return float( n & uvec3(0x7fffffffU))/float(0x7fffffff);\n}\n\nuint hash( uint x ) {\n    x += ( x << 10u );\n    x ^= ( x >>  6u );\n    x += ( x <<  3u );\n    x ^= ( x >> 11u );\n    x += ( x << 15u );\n    return x;\n}\nfloat random( float f ) {\n    const uint mantissaMask = 0x007FFFFFu;\n    const uint one          = 0x3F800000u;\n\n    uint h = hash( floatBitsToUint( f ) );\n    h &= mantissaMask;\n    h |= one;\n\n    float  r2 = uintBitsToFloat( h );\n    return r2 - 1.0;\n}\n\n\n// #define HASHSCALE1 .1031\n// float random(float p) {\n// \tvec3 p3  = fract(vec3(p) * HASHSCALE1);\n//   p3 += dot(p3, p3.yzx + 19.19);\n//   return fract((p3.x + p3.y) * p3.z);\n// }\n\n// const vec2 randomConst = vec2(\n//   23.14069263277926, // e^pi (Gelfond's constant)\n//    2.665144142690225 // 2^sqrt(2) (Gelfond\u2013Schneider constant)\n// );\n// float random(float seed) {\n//     return fract(cos(dot(vec2(seed,seed), randomConst)) * 12345.6789);\n// }\n\n";
var distancesInitializationSource = "\n//Reads the distances and indices from the knn texture\nvoid initializeDistances(int pnt_id) {\n  //row coordinate in the texture\n  float row = (floor(float(pnt_id)/points_per_row_knn)+0.5)/num_rows_knn;\n  //column of the first neighbor\n  float start_col = mod(float(pnt_id),points_per_row_knn)*NUM_NEIGHBORS_FLOAT;\n  for(int n = 0; n < NUM_NEIGHBORS; n++) {\n    float col = (start_col+float(n)+0.5);\n    //normalized by the width of the texture\n    col /= (points_per_row_knn*NUM_NEIGHBORS_FLOAT);\n    //reads the index in the red channel and the distances in the green one\n    vec4 init = texture(starting_knn_tex,vec2(col,row));\n\n    knn_heap[n] = int(init.r);\n    distances_heap[n] = init.g;\n  }\n}\n";
var knnHeapSource = "\n//Swaps two points in the knn-heap\nvoid swap(int i, int j) {\n  float swap_value = distances_heap[i];\n  distances_heap[i] = distances_heap[j];\n  distances_heap[j] = swap_value;\n  int swap_id = knn_heap[i];\n  knn_heap[i] = knn_heap[j];\n  knn_heap[j] = swap_id;\n}\n\n//I can make use of the heap property but\n//I have to implement a recursive function\nbool inTheHeap(float dist_sq, int id) {\n  for(int i = 0; i < NUM_NEIGHBORS; ++i) {\n    if(knn_heap[i] == id) {\n      return true;\n    }\n  }\n  return false;\n}\n\nvoid insertInKNN(float dist_sq, int j) {\n  //not in the KNN\n  if(dist_sq >= distances_heap[0]) {\n    return;\n  }\n\n  //the point is already in the KNN\n  if(inTheHeap(dist_sq,j)) {\n    return;\n  }\n\n  //Insert in the new point in the root\n  distances_heap[0] = dist_sq;\n  knn_heap[0] = j;\n  //Sink procedure\n  int swap_id = 0;\n  while(swap_id*2+1 < NUM_NEIGHBORS) {\n    int left_id = swap_id*2+1;\n    int right_id = swap_id*2+2;\n    if(distances_heap[left_id] > distances_heap[swap_id] ||\n        (right_id < NUM_NEIGHBORS &&\n                            distances_heap[right_id] > distances_heap[swap_id])\n      ) {\n      if(distances_heap[left_id] > distances_heap[right_id]\n         || right_id >= NUM_NEIGHBORS) {\n        swap(swap_id,left_id);\n        swap_id = left_id;\n      }else{\n        swap(swap_id,right_id);\n        swap_id = right_id;\n      }\n    }else{\n      break;\n    }\n  }\n}\n";
var vertexPositionSource = "\n  //Line positions\n  float row = (floor(float(point_id)/points_per_row_knn)+0.5)/num_rows_knn;\n  row = row*2.0-1.0;\n  if(line_id < int(1)) {\n    //for the first vertex only the position is important\n    float col = (mod(float(point_id),points_per_row_knn))/(points_per_row_knn);\n    col = col*2.0-1.0;\n    gl_Position = vec4(col,row,0,1);\n    neighbor_id = 0.;\n    return;\n  }\n  //The computation of the KNN happens only for the second vertex\n  float col = (mod(float(point_id),points_per_row_knn)+1.)/(points_per_row_knn);\n  col = col*2.0-1.0;\n  gl_Position = vec4(col,row,0,1);\n";
function createBruteForceKNNProgram(gpgpu, numNeighbors, distanceComputationSource) {
    var vertexShaderSource = "#version 300 es\n    " +
        generateVariablesAndDeclarationsSource(numNeighbors) +
        distancesInitializationSource + distanceComputationSource +
        knnHeapSource + ("\n    void main() {\n      //Getting the id of the point and the line id (0/1)\n      point_id = int((vertex_id/2.0)+0.1);\n      int line_id = int(mod(vertex_id+0.1,2.));\n      if(float(point_id) >= num_points) {\n        return;\n      }\n\n      " + vertexPositionSource + "\n\n      //////////////////////////////////\n      //KNN computation\n      initializeDistances(point_id);\n      for(int i = 0; i < NEIGH_PER_ITER; i += 4) {\n        //TODO make it more readable\n        int j = int(mod(float(point_id+i)+\n                    iteration*float(NEIGH_PER_ITER)+1.,num_points));\n        vec4 dist_squared = pointDistanceSquaredBatch(point_id,j,j+1,j+2,j+3);\n        insertInKNN(dist_squared.r, j);\n        insertInKNN(dist_squared.g, j+1);\n        insertInKNN(dist_squared.b, j+2);\n        insertInKNN(dist_squared.a, j+3);\n      }\n\n      for(int n = 0; n < NUM_PACKED_NEIGHBORS; n++) {\n        knn[n].r = float(knn_heap[n*4]);\n        knn[n].g = float(knn_heap[n*4+1]);\n        knn[n].b = float(knn_heap[n*4+2]);\n        knn[n].a = float(knn_heap[n*4+3]);\n      }\n\n      neighbor_id = NUM_NEIGHBORS_FLOAT;\n    }\n  ");
    var knnFragmentShaderSource = generateFragmentShaderSource(distanceComputationSource, numNeighbors);
    return gl_util.createVertexProgram(gpgpu.gl, vertexShaderSource, knnFragmentShaderSource);
}
exports.createBruteForceKNNProgram = createBruteForceKNNProgram;
function createRandomSamplingKNNProgram(gpgpu, numNeighbors, distanceComputationSource) {
    var vertexShaderSource = "#version 300 es\n    " +
        generateVariablesAndDeclarationsSource(numNeighbors) +
        distancesInitializationSource + randomGeneratorSource +
        distanceComputationSource + knnHeapSource + ("\n    void main() {\n      //Getting the id of the point and the line id (0/1)\n      point_id = int((vertex_id/2.0)+0.1);\n      int line_id = int(mod(vertex_id+0.1,2.));\n      if(float(point_id) >= num_points) {\n        return;\n      }\n\n      " + vertexPositionSource + "\n\n      //////////////////////////////////\n      //KNN computation\n\n      initializeDistances(point_id);\n      for(int i = 0; i < NEIGH_PER_ITER; i += 4) {\n        //BAD SEED\n        //uint seed\n        //= uint(float(point_id) + float(NEIGH_PER_ITER)*iteration + float(i));\n        //GOOD SEED\n        //uint seed\n        //= uint(float(point_id) + float(num_points)*iteration + float(i));\n\n        float seed\n            = float(float(point_id) + float(num_points)*iteration + float(i));\n        int j0 = int(random(seed)*num_points);\n        int j1 = int(random(seed+1.)*num_points);\n        int j2 = int(random(seed+2.)*num_points);\n        int j3 = int(random(seed+3.)*num_points);\n\n        vec4 dist_squared = pointDistanceSquaredBatch(point_id,j0,j1,j2,j3);\n        if(j0!=point_id)insertInKNN(dist_squared.r, j0);\n        if(j1!=point_id)insertInKNN(dist_squared.g, j1);\n        if(j2!=point_id)insertInKNN(dist_squared.b, j2);\n        if(j3!=point_id)insertInKNN(dist_squared.a, j3);\n      }\n\n      for(int n = 0; n < NUM_PACKED_NEIGHBORS; n++) {\n        knn[n].r = float(knn_heap[n*4]);\n        knn[n].g = float(knn_heap[n*4+1]);\n        knn[n].b = float(knn_heap[n*4+2]);\n        knn[n].a = float(knn_heap[n*4+3]);\n      }\n      neighbor_id = NUM_NEIGHBORS_FLOAT;\n    }\n  ");
    var knnFragmentShaderSource = generateFragmentShaderSource(distanceComputationSource, numNeighbors);
    return gl_util.createVertexProgram(gpgpu.gl, vertexShaderSource, knnFragmentShaderSource);
}
exports.createRandomSamplingKNNProgram = createRandomSamplingKNNProgram;
function createKNNDescentProgram(gpgpu, numNeighbors, distanceComputationSource) {
    var vertexShaderSource = "#version 300 es\n    " +
        generateVariablesAndDeclarationsSource(numNeighbors) +
        distancesInitializationSource + randomGeneratorSource +
        distanceComputationSource + knnHeapSource + ("\n    int fetchNeighborIdFromKNNTexture(int id, int neighbor_id) {\n      //row coordinate in the texture\n      float row = (floor(float(id)/points_per_row_knn)+0.5)/num_rows_knn;\n      //column of the first neighbor\n      float start_col = mod(float(id),points_per_row_knn)*NUM_NEIGHBORS_FLOAT;\n      //column of the neighbor of interest\n      float col = (start_col+float(neighbor_id)+0.5);\n      //normalized by the width of the texture\n      col /= (points_per_row_knn*NUM_NEIGHBORS_FLOAT);\n      //reads the index in the red channel and the distances in the green one\n      vec4 knn_link = texture(starting_knn_tex,vec2(col,row));\n      //return the index\n      return int(knn_link.r);\n    }\n\n    int neighborOfANeighbor(int my_id, uint seed) {\n      //float random0 = hash1(seed);\n      float random0 = random(float(seed));\n      // random0 = random0*random0;\n      // random0 = 1. - random0;\n\n      //float random1 = hash1(seed*1798191U);\n      float random1 = random(float(seed+7U));\n      // random1 = random1*random1;\n      // random1 = 1. - random1;\n\n      //fetch a neighbor from the heap\n      int neighbor = knn_heap[int(random0*NUM_NEIGHBORS_FLOAT)];\n      //if it is not a valid pick a random point\n      if(neighbor < 0) {\n        return int(random(float(seed))*num_points);\n      }\n\n      //if it is valid I fetch from the knn graph texture one of its neighbors\n      int neighbor2ndDegree = fetchNeighborIdFromKNNTexture(\n                                    neighbor,int(random1*NUM_NEIGHBORS_FLOAT));\n      //if it is not a valid pick a random point\n      if(neighbor2ndDegree < 0) {\n        return int(random(float(seed))*num_points);\n      }\n      return neighbor2ndDegree;\n    }\n\n    void main() {\n      //Getting the id of the point and the line id (0/1)\n      point_id = int((vertex_id/2.0)+0.1);\n      int line_id = int(mod(vertex_id+0.1,2.));\n      if(float(point_id) >= num_points) {\n        return;\n      }\n      " + vertexPositionSource + "\n\n      //////////////////////////////////\n      //KNN computation\n      initializeDistances(point_id);\n      for(int i = 0; i < NEIGH_PER_ITER; i += 4) {\n        //BAD SEED\n        //uint seed\n        //= uint(float(point_id) + float(NEIGH_PER_ITER)*iteration + float(i));\n        //GOOD SEED\n        uint seed\n              = uint(float(point_id) + float(num_points)*iteration + float(i));\n        int j0 = neighborOfANeighbor(point_id,seed);\n        int j1 = neighborOfANeighbor(point_id,seed+1U);\n        int j2 = neighborOfANeighbor(point_id,seed+2U);\n        int j3 = neighborOfANeighbor(point_id,seed+3U);\n\n        vec4 dist_squared = pointDistanceSquaredBatch(point_id,j0,j1,j2,j3);\n        if(j0!=point_id)insertInKNN(dist_squared.r, j0);\n        if(j1!=point_id)insertInKNN(dist_squared.g, j1);\n        if(j2!=point_id)insertInKNN(dist_squared.b, j2);\n        if(j3!=point_id)insertInKNN(dist_squared.a, j3);\n      }\n\n      for(int n = 0; n < NUM_PACKED_NEIGHBORS; n++) {\n        knn[n].r = float(knn_heap[n*4]);\n        knn[n].g = float(knn_heap[n*4+1]);\n        knn[n].b = float(knn_heap[n*4+2]);\n        knn[n].a = float(knn_heap[n*4+3]);\n      }\n      neighbor_id = NUM_NEIGHBORS_FLOAT;\n    }\n  ");
    var knnFragmentShaderSource = generateFragmentShaderSource(distanceComputationSource, numNeighbors);
    return gl_util.createVertexProgram(gpgpu.gl, vertexShaderSource, knnFragmentShaderSource);
}
exports.createKNNDescentProgram = createKNNDescentProgram;
function executeKNNProgram(gpgpu, program, dataTex, startingKNNTex, iteration, knnShape, vertexIdBuffer, targetTex) {
    var gl = gpgpu.gl;
    var oldProgram = gpgpu.program;
    var oldLineWidth = gl.getParameter(gl.LINE_WIDTH);
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, knnShape.numRows, knnShape.pointsPerRow * knnShape.pixelsPerPoint);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    if (oldLineWidth !== 1) {
        gl.lineWidth(1);
    }
    gpgpu.setProgram(program);
    gl.clearColor(0., 0., 0., 0.);
    gl.clear(gl.COLOR_BUFFER_BIT);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, vertexIdBuffer); });
    tfc.webgl.webgl_util.bindVertexBufferToProgramAttribute(gl, program, 'vertex_id', vertexIdBuffer, 1, 0, 0);
    var dataTexLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'data_tex');
    gpgpu.setInputMatrixTexture(dataTex, dataTexLoc, 0);
    var startingKNNTexLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'starting_knn_tex');
    gpgpu.setInputMatrixTexture(startingKNNTex, startingKNNTexLoc, 1);
    var iterationLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'iteration');
    gl.uniform1f(iterationLoc, iteration);
    var numPointsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_points');
    gl.uniform1f(numPointsLoc, knnShape.numPoints);
    var pntsPerRowKNNLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row_knn');
    gl.uniform1f(pntsPerRowKNNLoc, knnShape.pointsPerRow);
    var numRowsKNNLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows_knn');
    gl.uniform1f(numRowsKNNLoc, knnShape.numRows);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.drawArrays(gl.LINES, 0, knnShape.numPoints * 2); });
    if (oldProgram != null) {
        gpgpu.setProgram(oldProgram);
        tfc.webgl.gpgpu_util.bindVertexProgramAttributeStreams(gpgpu.gl, oldProgram, gpgpu.vertexBuffer);
    }
    if (oldLineWidth !== 1) {
        gl.lineWidth(oldLineWidth);
    }
}
exports.executeKNNProgram = executeKNNProgram;
function createCopyDistancesProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D knn_tex;\n    uniform float width;\n    uniform float height;\n\n    void main() {\n      vec2 coordinates = gl_FragCoord.xy / vec2(width,height);\n      float distance = texture2D(knn_tex,coordinates).g;\n      gl_FragColor = vec4(distance,0,0,1);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createCopyDistancesProgram = createCopyDistancesProgram;
function executeCopyDistancesProgram(gpgpu, program, knnTex, knnShape, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, knnShape.numRows, knnShape.pointsPerRow * knnShape.pixelsPerPoint);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var knnLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'knn_tex');
    gpgpu.setInputMatrixTexture(knnTex, knnLoc, 0);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'width');
    gl.uniform1f(pntsPerRowLoc, knnShape.pointsPerRow * knnShape.pixelsPerPoint);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'height');
    gl.uniform1f(numRowsLoc, knnShape.numRows);
    gpgpu.executeProgram();
}
exports.executeCopyDistancesProgram = executeCopyDistancesProgram;
function createCopyIndicesProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D knn_tex;\n    uniform float width;\n    uniform float height;\n\n    void main() {\n      vec2 coordinates = gl_FragCoord.xy / vec2(width,height);\n      float id = texture2D(knn_tex,coordinates).r;\n      gl_FragColor = vec4(id,0,0,1);\n\n      if(id < 0.) {\n        gl_FragColor.b = 1.;\n      }\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createCopyIndicesProgram = createCopyIndicesProgram;
function executeCopyIndicesProgram(gpgpu, program, knnTex, knnShape, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, knnShape.numRows, knnShape.pointsPerRow * knnShape.pixelsPerPoint);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var knnLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'knn_tex');
    gpgpu.setInputMatrixTexture(knnTex, knnLoc, 0);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'width');
    gl.uniform1f(pntsPerRowLoc, knnShape.pointsPerRow * knnShape.pixelsPerPoint);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'height');
    gl.uniform1f(numRowsLoc, knnShape.numRows);
    gpgpu.executeProgram();
}
exports.executeCopyIndicesProgram = executeCopyIndicesProgram;
//# sourceMappingURL=knn_util.js.map
},{"@tensorflow/tfjs-core":23,"./gl_util":16}],15:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var dataset_util = require("./dataset_util");
var gl_util = require("./gl_util");
var knn_util = require("./knn_util");
function instanceOfRearrangedData(object) {
    return 'numPoints' in object && 'pointsPerRow' in object &&
        'pixelsPerPoint' in object && 'numRows' in object;
}
function instanceOfCustomDataDefinition(object) {
    return 'distanceComputationCode' in object;
}
var KNNEstimator = (function () {
    function KNNEstimator(dataTexture, dataFormat, numPoints, numDimensions, numNeighs, verbose) {
        if (verbose != null) {
            this.verbose = verbose;
        }
        else {
            verbose = false;
        }
        this.backend = tfc.ENV.findBackend('webgl');
        this.gpgpu = this.backend.getGPGPUContext();
        this.iteration = 0;
        this.dataTexture = dataTexture;
        if (numNeighs > 128) {
            throw new Error('kNN size must not be greater than 128');
        }
        if (numNeighs % 4 !== 0) {
            throw new Error('kNN size must be a multiple of 4');
        }
        this.numNeighs = numNeighs;
        var knnPointsPerRow = Math.ceil(Math.sqrt(numNeighs * numPoints) / numNeighs);
        this.knnDataShape = {
            numPoints: numPoints,
            pixelsPerPoint: numNeighs,
            pointsPerRow: knnPointsPerRow,
            numRows: Math.ceil(numPoints / knnPointsPerRow)
        };
        this.log('knn-pntsPerRow', this.knnDataShape.pointsPerRow);
        this.log('knn-numRows', this.knnDataShape.numRows);
        this.log('knn-pixelsPerPoint', this.knnDataShape.pixelsPerPoint);
        var distanceComputationSource;
        if (instanceOfRearrangedData(dataFormat)) {
            var rearrangedData = dataFormat;
            distanceComputationSource =
                dataset_util.generateDistanceComputationSource(rearrangedData);
        }
        else if (instanceOfCustomDataDefinition(dataFormat)) {
            var customDataDefinition = dataFormat;
            distanceComputationSource = customDataDefinition.distanceComputationCode;
        }
        this.initializeTextures();
        this.initilizeCustomWebGLPrograms(distanceComputationSource);
    }
    Object.defineProperty(KNNEstimator.prototype, "knnShape", {
        get: function () {
            return this.knnDataShape;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KNNEstimator.prototype, "numOfIterations", {
        get: function () {
            return this.iteration;
        },
        enumerable: true,
        configurable: true
    });
    KNNEstimator.prototype.log = function (str, obj) {
        if (this.verbose) {
            if (obj != null) {
                console.log(str + ": \t" + obj);
            }
            else {
                console.log(str);
            }
        }
    };
    KNNEstimator.prototype.initializeTextures = function () {
        var initNeigh = new Float32Array(this.knnDataShape.pointsPerRow * this.knnDataShape.pixelsPerPoint * 2 *
            this.knnDataShape.numRows);
        var numNeighs = this.knnDataShape.pixelsPerPoint;
        for (var i = 0; i < this.knnDataShape.numPoints; ++i) {
            for (var n = 0; n < numNeighs; ++n) {
                initNeigh[(i * numNeighs + n) * 2] = -1;
                initNeigh[(i * numNeighs + n) * 2 + 1] = 10e30;
            }
        }
        this.knnTexture0 = gl_util.createAndConfigureTexture(this.gpgpu.gl, this.knnDataShape.pointsPerRow * this.knnDataShape.pixelsPerPoint, this.knnDataShape.numRows, 2, initNeigh);
        this.knnTexture1 = gl_util.createAndConfigureTexture(this.gpgpu.gl, this.knnDataShape.pointsPerRow * this.knnDataShape.pixelsPerPoint, this.knnDataShape.numRows, 2, initNeigh);
    };
    KNNEstimator.prototype.initilizeCustomWebGLPrograms = function (distanceComputationSource) {
        this.copyDistancesProgram = knn_util.createCopyDistancesProgram(this.gpgpu);
        this.copyIndicesProgram = knn_util.createCopyIndicesProgram(this.gpgpu);
        this.bruteForceKNNProgram = knn_util.createBruteForceKNNProgram(this.gpgpu, this.numNeighs, distanceComputationSource);
        this.randomSamplingKNNProgram = knn_util.createRandomSamplingKNNProgram(this.gpgpu, this.numNeighs, distanceComputationSource);
        this.kNNDescentProgram = knn_util.createKNNDescentProgram(this.gpgpu, this.numNeighs, distanceComputationSource);
        var linesVertexId = new Float32Array(this.knnDataShape.numPoints * 2);
        {
            for (var i = 0; i < this.knnDataShape.numPoints * 2; ++i) {
                linesVertexId[i] = i;
            }
        }
        this.linesVertexIdBuffer = tfc.webgl.webgl_util.createStaticVertexBuffer(this.gpgpu.gl, linesVertexId);
    };
    KNNEstimator.prototype.iterateBruteForce = function () {
        if ((this.iteration % 2) === 0) {
            this.iterateGPU(this.dataTexture, this.iteration, this.knnTexture0, this.knnTexture1);
        }
        else {
            this.iterateGPU(this.dataTexture, this.iteration, this.knnTexture1, this.knnTexture0);
        }
        ++this.iteration;
        this.gpgpu.gl.finish();
    };
    KNNEstimator.prototype.iterateRandomSampling = function () {
        if ((this.iteration % 2) === 0) {
            this.iterateRandomSamplingGPU(this.dataTexture, this.iteration, this.knnTexture0, this.knnTexture1);
        }
        else {
            this.iterateRandomSamplingGPU(this.dataTexture, this.iteration, this.knnTexture1, this.knnTexture0);
        }
        ++this.iteration;
        this.gpgpu.gl.finish();
    };
    KNNEstimator.prototype.iterateKNNDescent = function () {
        if ((this.iteration % 2) === 0) {
            this.iterateKNNDescentGPU(this.dataTexture, this.iteration, this.knnTexture0, this.knnTexture1);
        }
        else {
            this.iterateKNNDescentGPU(this.dataTexture, this.iteration, this.knnTexture1, this.knnTexture0);
        }
        ++this.iteration;
        this.gpgpu.gl.finish();
    };
    KNNEstimator.prototype.knn = function () {
        if ((this.iteration % 2) === 0) {
            return this.knnTexture0;
        }
        else {
            return this.knnTexture1;
        }
    };
    KNNEstimator.prototype.distancesTensor = function () {
        var _this = this;
        return tfc.tidy(function () {
            var distances = tfc.zeros([
                _this.knnDataShape.numRows,
                _this.knnDataShape.pointsPerRow * _this.knnDataShape.pixelsPerPoint
            ]);
            var knnTexture = _this.knn();
            knn_util.executeCopyDistancesProgram(_this.gpgpu, _this.copyDistancesProgram, knnTexture, _this.knnDataShape, _this.backend.getTexture(distances.dataId));
            return distances;
        });
    };
    KNNEstimator.prototype.indicesTensor = function () {
        var _this = this;
        return tfc.tidy(function () {
            var indices = tfc.zeros([
                _this.knnDataShape.numRows,
                _this.knnDataShape.pointsPerRow * _this.knnDataShape.pixelsPerPoint
            ]);
            var knnTexture = _this.knn();
            knn_util.executeCopyIndicesProgram(_this.gpgpu, _this.copyIndicesProgram, knnTexture, _this.knnDataShape, _this.backend.getTexture(indices.dataId));
            return indices;
        });
    };
    KNNEstimator.prototype.iterateGPU = function (dataTexture, iteration, startingKNNTexture, targetTexture) {
        knn_util.executeKNNProgram(this.gpgpu, this.bruteForceKNNProgram, dataTexture, startingKNNTexture, iteration, this.knnDataShape, this.linesVertexIdBuffer, targetTexture);
    };
    KNNEstimator.prototype.iterateRandomSamplingGPU = function (dataTexture, iteration, startingKNNTexture, targetTexture) {
        knn_util.executeKNNProgram(this.gpgpu, this.randomSamplingKNNProgram, dataTexture, startingKNNTexture, iteration, this.knnDataShape, this.linesVertexIdBuffer, targetTexture);
    };
    KNNEstimator.prototype.iterateKNNDescentGPU = function (dataTexture, iteration, startingKNNTexture, targetTexture) {
        knn_util.executeKNNProgram(this.gpgpu, this.kNNDescentProgram, dataTexture, startingKNNTexture, iteration, this.knnDataShape, this.linesVertexIdBuffer, targetTexture);
    };
    return KNNEstimator;
}());
exports.KNNEstimator = KNNEstimator;
//# sourceMappingURL=knn.js.map
},{"@tensorflow/tfjs-core":23,"./dataset_util":13,"./gl_util":16,"./knn_util":19}],21:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var gl_util = require("./gl_util");
function createEmbeddingSplatterProgram(gpgpu) {
    var vertexShaderSource = "#version 300 es\n    precision highp float;\n    in float vertex_id;\n\n    uniform sampler2D embedding_tex;\n    uniform vec2 minV;\n    uniform vec2 maxV;\n    uniform float kernel_support;\n    uniform float points_per_row;\n    uniform float num_rows;\n\n    out vec2 kernel_coords;\n\n    void main() {\n      //TODO Clean up and check performance loss due to the conversions\n      uint pnt_id = uint((vertex_id / 4.0) + 0.1);\n      uint quad_id = uint(mod(vertex_id + 0.1,4.));\n\n      uint row    = uint((float(pnt_id) + 0.1)/points_per_row);\n      uint column = uint(float(pnt_id) - float(row) * points_per_row);\n\n      float width = (points_per_row * 2.0);\n      float row_tex = (float(row) + 0.5) / num_rows;\n      vec2 tex_coords_x = vec2((float(column) * 2. + 0.5) / width, row_tex);\n      vec2 tex_coords_y = vec2((float(column) * 2. + 1.5) / width, row_tex);\n\n      float x_pnt = texture(embedding_tex,tex_coords_x).r;\n      float y_pnt = texture(embedding_tex,tex_coords_y).r;\n      vec2 vertex_coords = vec2(x_pnt,y_pnt);\n\n      if(quad_id == uint(0)) {kernel_coords = vec2(-1,-1);}\n      else if(quad_id == uint(1)) {kernel_coords = vec2(1,-1);}\n      else if(quad_id == uint(2)) {kernel_coords = vec2(1,1);}\n      else if(quad_id == uint(3)) {kernel_coords = vec2(-1,1);}\n\n      vertex_coords += kernel_coords * kernel_support;      // embedding space\n      vertex_coords = (vertex_coords - minV) / (maxV-minV); //  0:1 space\n      vertex_coords = vertex_coords * 2.0 - 1.0;            // -1:1 space\n\n      gl_Position = vec4(vertex_coords,0,1);\n    }\n  ";
    var fragmentShaderSource = "#version 300 es\n    precision highp float;\n    uniform sampler2D kernel_tex;\n    in vec2 kernel_coords;\n    out vec4 fragmentColor;\n\n    void main() {\n      fragmentColor = texture(kernel_tex,(kernel_coords + 1.) / 2.0);\n    }\n  ";
    return gl_util.createVertexProgram(gpgpu.gl, vertexShaderSource, fragmentShaderSource);
}
exports.createEmbeddingSplatterProgram = createEmbeddingSplatterProgram;
function executeEmbeddingSplatterProgram(gpgpu, program, targetTex, embeddingTex, kernelTex, targetTexDiameter, numPoints, minX, minY, maxX, maxY, kernelSupport, pntsPerRow, numRows, vertexIdBuffer) {
    var gl = gpgpu.gl;
    var oldProgram = gpgpu.program;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, targetTexDiameter, targetTexDiameter);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    gl.clearColor(0., 0., 0., 0.);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.bindBuffer(gl.ARRAY_BUFFER, vertexIdBuffer); });
    tfc.webgl.webgl_util.bindVertexBufferToProgramAttribute(gl, program, 'vertex_id', vertexIdBuffer, 1, 0, 0);
    var embeddingLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'embedding_tex');
    gpgpu.setInputMatrixTexture(embeddingTex, embeddingLocation, 0);
    var kernelLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'kernel_tex');
    gpgpu.setInputMatrixTexture(kernelTex, kernelLocation, 1);
    var kernelSupportLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'kernel_support');
    gl.uniform1f(kernelSupportLoc, kernelSupport);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var minLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'minV');
    gl.uniform2f(minLoc, minX, minY);
    var maxLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'maxV');
    gl.uniform2f(maxLoc, maxX, maxY);
    tfc.webgl.webgl_util.callAndCheck(gl, function () { return gl.drawArrays(gl.TRIANGLES, 0, numPoints * 2 * 3); });
    gl.disable(gl.BLEND);
    if (oldProgram != null) {
        gpgpu.setProgram(oldProgram);
        tfc.webgl.gpgpu_util.bindVertexProgramAttributeStreams(gpgpu.gl, oldProgram, gpgpu.vertexBuffer);
    }
}
exports.executeEmbeddingSplatterProgram = executeEmbeddingSplatterProgram;
function createQInterpolatorProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D embedding_tex;\n    uniform sampler2D splat_tex;\n    uniform vec2 minV;\n    uniform vec2 maxV;\n    uniform float points_per_row;\n    uniform float num_rows;\n    uniform float num_points;\n\n    void main() {\n      vec2 pnt_location = gl_FragCoord.xy - vec2(0.5,0.5);\n\n      if(pnt_location.y * points_per_row + pnt_location.x >= num_points) {\n        gl_FragColor = vec4(0,0,0,0);\n        return;\n      }\n\n      float emb_width = (points_per_row * 2.0);\n      float emb_row_coord = (pnt_location.y + 0.5) / num_rows;\n      vec2 emb_coords_x\n              = vec2((pnt_location.x * 2.+0.5) / emb_width, emb_row_coord);\n      vec2 emb_coords_y\n              = vec2((pnt_location.x * 2. + 1.5) / emb_width, emb_row_coord);\n\n      float x_pnt = texture2D(embedding_tex,emb_coords_x).r;\n      float y_pnt = texture2D(embedding_tex,emb_coords_y).r;\n\n      vec2 splat_coords = vec2(x_pnt,y_pnt);\n      splat_coords = (splat_coords - minV) / (maxV - minV); //  0:1 space\n\n      float q = (texture2D(splat_tex,splat_coords).r - 1.);\n\n      gl_FragColor = vec4(q, 0, 0, 1);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createQInterpolatorProgram = createQInterpolatorProgram;
function executeQInterpolatorProgram(gpgpu, program, splatTex, embeddingTex, numPoints, minX, minY, maxX, maxY, pntsPerRow, numRows, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, numRows, pntsPerRow);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var embeddingLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'embedding_tex');
    gpgpu.setInputMatrixTexture(embeddingTex, embeddingLocation, 0);
    var splatLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'splat_tex');
    gpgpu.setInputMatrixTexture(splatTex, splatLocation, 1);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var numPointsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_points');
    gl.uniform1f(numPointsLoc, numPoints);
    var minLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'minV');
    gl.uniform2f(minLoc, minX, minY);
    var maxLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'maxV');
    gl.uniform2f(maxLoc, maxX, maxY);
    gpgpu.executeProgram();
}
exports.executeQInterpolatorProgram = executeQInterpolatorProgram;
function createXYInterpolatorProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D embedding_tex;\n    uniform sampler2D splat_tex;\n    uniform vec2 minV;\n    uniform vec2 maxV;\n    uniform float points_per_row;\n    uniform float num_rows;\n    uniform float num_points;\n    uniform float eta;\n\n    void main() {\n      vec2 pnt_location = gl_FragCoord.xy - vec2(0.5,0.5);\n      pnt_location.x = floor(pnt_location.x/2.+0.1);\n\n      if(pnt_location.y*points_per_row + pnt_location.x >= num_points) {\n        gl_FragColor = vec4(0,0,0,0);\n        return;\n      }\n\n      float emb_width = (points_per_row * 2.0);\n      float emb_row_coord = (pnt_location.y + 0.5) / num_rows;\n      vec2 emb_coords_x\n              = vec2((pnt_location.x * 2. + 0.5) / emb_width, emb_row_coord);\n      vec2 emb_coords_y\n              = vec2((pnt_location.x * 2. + 1.5) / emb_width, emb_row_coord);\n\n      float x_pnt = texture2D(embedding_tex,emb_coords_x).r;\n      float y_pnt = texture2D(embedding_tex,emb_coords_y).r;\n\n      vec2 splat_coords = vec2(x_pnt,y_pnt);\n      splat_coords = (splat_coords - minV) / (maxV - minV); //  0:1 space\n\n      float q = 0.;\n      if(mod(gl_FragCoord.x - 0.5,2.) < 0.5 ) {\n        q = texture2D(splat_tex,splat_coords).g * eta * 2.;\n      }else{\n        q = texture2D(splat_tex,splat_coords).b * eta * 2.;\n      }\n\n      gl_FragColor = vec4(q,0.0,0.0,1);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createXYInterpolatorProgram = createXYInterpolatorProgram;
function executeXYInterpolatorProgram(gpgpu, program, splatTex, embeddingTex, targetTex, numPoints, minX, minY, maxX, maxY, pntsPerRow, numRows, eta) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, numRows, pntsPerRow * 2);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var embeddingLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'embedding_tex');
    gpgpu.setInputMatrixTexture(embeddingTex, embeddingLocation, 0);
    var splatLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'splat_tex');
    gpgpu.setInputMatrixTexture(splatTex, splatLocation, 1);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var numPointsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_points');
    gl.uniform1f(numPointsLoc, numPoints);
    var etaLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'eta');
    gl.uniform1f(etaLoc, eta);
    var minLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'minV');
    gl.uniform2f(minLoc, minX, minY);
    var maxLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'maxV');
    gl.uniform2f(maxLoc, maxX, maxY);
    gpgpu.executeProgram();
}
exports.executeXYInterpolatorProgram = executeXYInterpolatorProgram;
function createAttractiveForcesComputationProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n\n    uniform sampler2D embedding_tex;\n    uniform sampler2D offset_tex;\n    uniform sampler2D neigh_id_tex;\n    uniform sampler2D neigh_prob_tex;\n\n    uniform float points_per_row;\n    uniform float num_rows;\n    uniform float num_points;\n    uniform float num_neighs_per_row;\n    uniform float eta;\n\n    void main() {\n      //add for nearest pixel interpolation\n      vec2 half_pxl = vec2(0.5,0.5);\n\n      // Dimension of the fragment\n      // 0 -> x :1 -> y\n      float dimension = mod(gl_FragCoord.x - 0.4,2.);\n\n      //Point location in the [points_per_row,num_rows] space\n      vec2 i_location = gl_FragCoord.xy - half_pxl;\n      i_location.x = floor(i_location.x / 2. + 0.1);\n\n      //just an extra fragment -> return\n      if(i_location.y*points_per_row + i_location.x >= num_points) {\n        gl_FragColor = vec4(0,0,0,0);\n        return;\n      }\n\n      //Offset coordinates for the point\n      vec2 offset_coord = (i_location + half_pxl) /\n                                              vec2(points_per_row,num_rows);\n      //Offset information ...\n      vec4 offset_info  = texture2D(offset_tex,offset_coord);\n      //... contains the number of neighbors for the point ...\n      float num_neighs  = offset_info.z;\n      //... and the coordinates of the firts neigh in the neigh textures\n      vec2 offset_neigh = offset_info.xy;\n\n      //Computing the coordinates of the point in the texture\n      //_i represent the point to move, _j the neighbors\n      float emb_width = (points_per_row * 2.0);\n      float emb_row_i = (i_location.y + 0.5) / num_rows;\n      vec2 x_i_coord = vec2((i_location.x * 2. + 0.5) / emb_width, emb_row_i);\n      vec2 y_i_coord = vec2((i_location.x * 2. + 1.5) / emb_width, emb_row_i);\n      //getting the coordinates in the embedding\n      float x_i = texture2D(embedding_tex,x_i_coord).r;\n      float y_i = texture2D(embedding_tex,y_i_coord).r;\n\n      //Sum of all attractive forces\n      float sum_pos = 0.;\n\n      //Can't be higher than 1000 (perplexity is usually around 30)\n      //and a 'while' can't be used\n      for(int n = 0; n < 2000; ++n) {\n        //Actual check on number of neighbors\n        if(float(n) >= num_neighs) {\n          break;\n        }\n\n        //Get the id and the probability for the neighbor\n        float pij = texture2D(neigh_prob_tex,\n                              (offset_neigh + half_pxl) / num_neighs_per_row\n                             ).r;\n        float neigh_id = texture2D(neigh_id_tex,\n                                  (offset_neigh + half_pxl) / num_neighs_per_row\n                                  ).r;\n\n        //Getting the coordinates of the neighbor\n        vec2 j_location = vec2(mod(neigh_id + 0.1, points_per_row),\n                               floor(neigh_id / points_per_row + 0.1));\n        float emb_row_j = (j_location.y + 0.5) / num_rows;\n        vec2 x_j_coord = vec2((j_location.x * 2. + 0.5) / emb_width, emb_row_j);\n        vec2 y_j_coord = vec2((j_location.x * 2. + 1.5) / emb_width, emb_row_j);\n        float x_j = texture2D(embedding_tex,x_j_coord).r;\n        float y_j = texture2D(embedding_tex,y_j_coord).r;\n\n        //Actual computation of the attractive forces\n        float dist_x    = (x_i - x_j);\n        float dist_y    = (y_i - y_j);\n        float qij       = 1. / (1. + dist_x * dist_x + dist_y * dist_y);\n        //the update depends on the dimension that this fragment represents\n        if(dimension < 0.5) {\n          // * 4 / (num_points*2) -> * 2 / num_points\n          sum_pos += eta * 2. * pij * qij * dist_x / (num_points);\n        }else{\n          sum_pos += eta * 2. * pij * qij * dist_y / (num_points);\n        }\n\n        //Increase the coordinate of the neigh in the neigh_id texture\n        offset_neigh.x += 1.;\n        //check if the new neigh is in the next row\n        if(offset_neigh.x + 0.2 > num_neighs_per_row) {\n          //in that case reset the column and increase the row\n          offset_neigh.x = 0.1;\n          offset_neigh.y += 1.0;\n        }\n      }\n\n      //The output is the sum of the attractive forces\n      gl_FragColor = vec4(sum_pos,0,0,0);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createAttractiveForcesComputationProgram = createAttractiveForcesComputationProgram;
function executeAttractiveForcesComputationProgram(gpgpu, program, embeddingTex, offsetTex, neighIdTex, neighProbTex, numPoints, neighsPerRow, pntsPerRow, numRows, eta, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, numRows, pntsPerRow * 2);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var embeddingLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'embedding_tex');
    gpgpu.setInputMatrixTexture(embeddingTex, embeddingLocation, 3);
    var offsetLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'offset_tex');
    gpgpu.setInputMatrixTexture(offsetTex, offsetLocation, 2);
    var neighIdLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'neigh_id_tex');
    gpgpu.setInputMatrixTexture(neighIdTex, neighIdLocation, 1);
    var neighProbLocation = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'neigh_prob_tex');
    gpgpu.setInputMatrixTexture(neighProbTex, neighProbLocation, 0);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var etaLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'eta');
    gl.uniform1f(etaLoc, eta);
    var neighsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_neighs_per_row');
    gl.uniform1f(neighsPerRowLoc, neighsPerRow);
    var numPointsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_points');
    gl.uniform1f(numPointsLoc, numPoints);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    gpgpu.executeProgram();
}
exports.executeAttractiveForcesComputationProgram = executeAttractiveForcesComputationProgram;
function createEmbeddingInitializationProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n\n    uniform sampler2D random_tex;\n    uniform float points_per_row;\n    uniform float num_rows;\n    uniform float num_points;\n\n    void main() {\n      //add for nearest pixel interpolation\n      vec2 half_pxl = vec2(0.5,0.5);\n\n      // Dimension of the fragment\n      // 0 -> x :1 -> y\n      float dimension = mod(gl_FragCoord.x - 0.4,2.);\n      vec2 pnt_location = gl_FragCoord.xy - half_pxl;\n      pnt_location.x = floor(pnt_location.x / 2.);\n\n      //just an extra fragment -> return\n      if(pnt_location.y*points_per_row + pnt_location.x >= num_points) {\n        gl_FragColor = vec4(0,0,0,1);\n        return;\n      }\n\n      float width = (points_per_row * 2.0);\n      float row_coord = (pnt_location.y + 0.5)/num_rows;\n      vec2 rad_coord = vec2((pnt_location.x * 2. + 0.5) / width, row_coord);\n      vec2 ang_coord = vec2((pnt_location.x * 2. + 1.5) / width, row_coord);\n\n      float rad = texture2D(random_tex,rad_coord).r * 3.;\n      float ang = texture2D(random_tex,ang_coord).r * 3.1415 * 2.;\n\n      gl_FragColor = vec4(rad,ang,0,1);\n\n      if(dimension < 0.5) {\n        gl_FragColor = vec4(cos(ang) * rad,0,0,0);\n      }else{\n        gl_FragColor = vec4(sin(ang) * rad,0,0,0);\n      }\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createEmbeddingInitializationProgram = createEmbeddingInitializationProgram;
function executeEmbeddingInitializationProgram(gpgpu, program, randomTex, numPoints, pntsPerRow, numRows, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, numRows, pntsPerRow * 2);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var randomLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'random_tex');
    gpgpu.setInputMatrixTexture(randomTex, randomLoc, 3);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var numPointsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_points');
    gl.uniform1f(numPointsLoc, numPoints);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    gpgpu.executeProgram();
}
exports.executeEmbeddingInitializationProgram = executeEmbeddingInitializationProgram;
function createDistributionParametersComputationProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n\n    #define MAX_NEIGHBORS 128\n    #define MAX_ITERATIONS 500\n    #define FLOAT_MAX 10e30\n    #define TOLERANCE 1e-5\n\n    uniform sampler2D knn_graph_tex;\n    uniform float points_per_row;\n    uniform float num_rows;\n    uniform float num_points;\n    uniform float num_neighs;\n    uniform float perplexity;\n\n    vec2 half_pixel = vec2(0.5,0.5);\n    float distances_squared[MAX_NEIGHBORS];\n\n    void readDistances(vec2 point_location) {\n      for(int n = 0; n < MAX_NEIGHBORS; ++n ) {\n        if(float(n) >= num_neighs-0.1) {\n          break;\n        }\n        vec2 knn_coordinates = vec2(\n            (point_location.x * num_neighs + float(n) + half_pixel.x)\n                                        /(points_per_row * num_neighs),\n            (point_location.y + half_pixel.y) / num_rows\n        );\n        distances_squared[n] = texture2D(knn_graph_tex,knn_coordinates).g;\n      }\n    }\n\n    void main() {\n      vec2 point_location = gl_FragCoord.xy - half_pixel;\n      //invalid points\n      if(point_location.y*points_per_row + point_location.x >= num_points) {\n        gl_FragColor = vec4(0,0,0,0);\n        return;\n      }\n      readDistances(point_location);\n\n      //Beta computation\n      float beta = 1.;\n      float max_beta = FLOAT_MAX;\n      float min_beta = -FLOAT_MAX;\n      //To avoid computing the log at every iteration\n      float log_perplexity = log(perplexity);\n      float entropy_diff = 0.;\n      float entropy = 0.;\n      float sum_probabilities = 0.;\n\n      //Binary search for a maximum of MAX_ITERATIONS\n      for(int iteration = 0; iteration < MAX_ITERATIONS; ++iteration) {\n        //At every iteration I compute the\n        //entropy enforced by the current beta\n        sum_probabilities = 0.;\n        entropy = 0.;\n        for(int n = 0; n < MAX_NEIGHBORS; ++n ) {\n          if(float(n) >= num_neighs-0.1) {\n            break;\n          }\n          float neigh_probability = exp(-beta * distances_squared[n]);\n          sum_probabilities += neigh_probability;\n          entropy += beta * distances_squared[n] * neigh_probability;\n        }\n\n        entropy = entropy / sum_probabilities + log(sum_probabilities);\n        entropy_diff = entropy - log_perplexity;\n\n        //the current beta is good enough!\n        if(entropy_diff < TOLERANCE && -entropy_diff < TOLERANCE) {\n          break;\n        }\n\n        if(entropy_diff > 0.) {\n          min_beta = beta;\n          if(max_beta == FLOAT_MAX || max_beta == -FLOAT_MAX) {\n            beta *= 2.;\n          }else{\n            beta = (beta + max_beta) / 2.;\n          }\n        }else{\n          max_beta = beta;\n          if(min_beta == -FLOAT_MAX || min_beta == FLOAT_MAX) {\n            beta /= 2.;\n          }else{\n            beta = (beta + min_beta) / 2.;\n          }\n        }\n      }\n      gl_FragColor = vec4(beta,sum_probabilities,0,1);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createDistributionParametersComputationProgram = createDistributionParametersComputationProgram;
function executeDistributionParametersComputationProgram(gpgpu, program, knnGraph, numPoints, numNeighs, pntsPerRow, numRows, perplexity, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, numRows, pntsPerRow);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var knnGraphLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'knn_graph_tex');
    gpgpu.setInputMatrixTexture(knnGraph, knnGraphLoc, 0);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var numPointsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_points');
    gl.uniform1f(numPointsLoc, numPoints);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numNeighsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_neighs');
    gl.uniform1f(numNeighsLoc, numNeighs);
    var perplexityLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'perplexity');
    gl.uniform1f(perplexityLoc, perplexity);
    gpgpu.executeProgram();
}
exports.executeDistributionParametersComputationProgram = executeDistributionParametersComputationProgram;
function createGaussiaDistributionsFromDistancesProgram(gpgpu) {
    var fragmentShaderSource = "\n    precision highp float;\n    uniform sampler2D knn_graph_tex;\n    uniform sampler2D parameters_tex;\n    uniform float points_per_row;\n    uniform float num_rows;\n    uniform float num_points;\n    uniform float num_neighs;\n\n    vec2 half_pixel = vec2(0.5,0.5);\n\n    void main() {\n      vec2 point_location = gl_FragCoord.xy - half_pixel;\n      point_location.x = floor(point_location.x / num_neighs);\n\n      //invalid points\n      if(point_location.y*points_per_row + point_location.x >= num_points) {\n        gl_FragColor = vec4(0,0,0,0);\n        return;\n      }\n      float distance_squared\n            = texture2D(knn_graph_tex,\n                        gl_FragCoord.xy /\n                        vec2(points_per_row*num_neighs,num_rows)\n                      ).g;\n      vec2 parameters\n            = texture2D(parameters_tex,\n                        (point_location.xy + half_pixel)/\n                        vec2(points_per_row,num_rows)\n                      ).rg;\n      float beta = parameters.r;\n      float normalization = parameters.g;\n\n      float probability = exp(-beta * distance_squared) / normalization;\n      //check for NaN for degenerated knn (d = 0 for every point)\n      if (!(probability < 0.0 || 0.0 < probability || probability == 0.0)) {\n        probability = 0.;\n      }\n\n      gl_FragColor = vec4(probability,0,0,1);\n    }\n  ";
    return gpgpu.createProgram(fragmentShaderSource);
}
exports.createGaussiaDistributionsFromDistancesProgram = createGaussiaDistributionsFromDistancesProgram;
function executeGaussiaDistributionsFromDistancesProgram(gpgpu, program, knnGraph, parameters, numPoints, numNeighs, pntsPerRow, numRows, targetTex) {
    var gl = gpgpu.gl;
    if (targetTex != null) {
        gpgpu.setOutputMatrixTexture(targetTex, numRows, pntsPerRow * numNeighs);
    }
    else {
        tfc.webgl.webgl_util.bindCanvasToFramebuffer(gpgpu.gl);
    }
    gpgpu.setProgram(program);
    var knnGraphLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'knn_graph_tex');
    gpgpu.setInputMatrixTexture(knnGraph, knnGraphLoc, 0);
    var parametersLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'parameters_tex');
    gpgpu.setInputMatrixTexture(parameters, parametersLoc, 1);
    var numRowsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_rows');
    gl.uniform1f(numRowsLoc, numRows);
    var numPointsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_points');
    gl.uniform1f(numPointsLoc, numPoints);
    var pntsPerRowLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'points_per_row');
    gl.uniform1f(pntsPerRowLoc, pntsPerRow);
    var numNeighsLoc = tfc.webgl.webgl_util.getProgramUniformLocationOrThrow(gl, program, 'num_neighs');
    gl.uniform1f(numNeighsLoc, numNeighs);
    gpgpu.executeProgram();
}
exports.executeGaussiaDistributionsFromDistancesProgram = executeGaussiaDistributionsFromDistancesProgram;
//# sourceMappingURL=tsne_optimizer_util.js.map
},{"@tensorflow/tfjs-core":23,"./gl_util":16}],17:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var gl_util = require("./gl_util");
var knn_util = require("./knn_util");
var tsne_util = require("./tsne_optimizer_util");
var TSNEOptimizer = (function () {
    function TSNEOptimizer(numPoints, verbose, splatTextureDiameter, kernelTextureRadius) {
        if (verbose != null) {
            this.verbose = verbose;
        }
        else {
            verbose = false;
        }
        this.log('Initializing the tSNE gradient descent computation...');
        this.numPoints = numPoints;
        this._iteration = 0;
        var webglVersion = tfc.ENV.get('WEBGL_VERSION');
        if (webglVersion === 1) {
            throw Error('WebGL version 1 is not supported by tfjs-tsne');
        }
        this.backend = tfc.ENV.findBackend('webgl');
        if (this.backend === null) {
            throw Error('WebGL backend is not available');
        }
        this.gpgpu = this.backend.getGPGPUContext();
        tfc.webgl.webgl_util.getExtensionOrThrow(this.gpgpu.gl, 'OES_texture_float_linear');
        this.pointsPerRow = Math.ceil(Math.sqrt(numPoints * 2));
        if (this.pointsPerRow % 2 === 1) {
            ++this.pointsPerRow;
        }
        this.pointsPerRow /= 2;
        this.numRows = Math.ceil(numPoints / this.pointsPerRow);
        this.log('\t# points per row', this.pointsPerRow);
        this.log('\t# rows', this.numRows);
        this._eta = 2500;
        this._momentum = tfc.scalar(0.8);
        this.rawExaggeration =
            [{ iteration: 200, value: 4 }, { iteration: 600, value: 1 }];
        this.updateExaggeration();
        if (splatTextureDiameter == null) {
            splatTextureDiameter = 5;
        }
        this.splatTextureDiameter = splatTextureDiameter;
        if (kernelTextureRadius == null) {
            kernelTextureRadius = 50;
        }
        this.kernelTextureDiameter = kernelTextureRadius * 2 + 1;
        this.initializeRepulsiveForceTextures();
        this.log('\tSplat texture diameter', this.splatTextureDiameter);
        this.log('\tKernel texture diameter', this.kernelTextureDiameter);
        this.initilizeCustomWebGLPrograms();
        this.initializeEmbedding();
        this.log('\tEmbedding', this.embedding);
        this.log('\tGradient', this.gradient);
    }
    Object.defineProperty(TSNEOptimizer.prototype, "minX", {
        get: function () {
            return this._minX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "maxX", {
        get: function () {
            return this._maxX;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "minY", {
        get: function () {
            return this._minY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "maxY", {
        get: function () {
            return this._maxY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "iteration", {
        get: function () {
            return this._iteration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "numberOfPoints", {
        get: function () {
            return this.numPoints;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "numberOfPointsPerRow", {
        get: function () {
            return this.pointsPerRow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "numberOfRows", {
        get: function () {
            return this.numRows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "embeddingCoordinates", {
        get: function () {
            return this.embedding;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "embedding2D", {
        get: function () {
            var _this = this;
            var result = tfc.tidy(function () {
                var reshaped = _this.embedding.reshape([_this.numRows * _this.pointsPerRow, 2])
                    .slice([0, 0], [_this.numPoints, 2]);
                return reshaped;
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "embeddingTexture", {
        get: function () {
            return this.backend.getTexture(this.embedding.dataId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "splatTexture", {
        get: function () {
            return this._splatTexture;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "normalizationQ", {
        get: function () {
            return this._normQ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "exaggerationAtCurrentIteration", {
        get: function () {
            return this._exaggeration.get();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "exaggeration", {
        get: function () {
            return this.rawExaggeration;
        },
        set: function (ex) {
            this.rawExaggeration = ex;
            if (typeof ex === 'number') {
                if (ex < 1) {
                    throw Error('Exaggeration must be greater then or equal to one');
                }
            }
            else {
                for (var i = 0; i < ex.length; ++i) {
                    if (ex[i].value < 1) {
                        throw Error('Exaggeration must be greater then or equal to one');
                    }
                    if (ex[i].iteration < 0) {
                        throw Error('Piecewise linear exaggeration function \
                                        must have poistive iteration values');
                    }
                }
                for (var i = 0; i < ex.length - 1; ++i) {
                    if (ex[i].iteration >= ex[i + 1].iteration) {
                        throw Error('Piecewise linear exaggeration function \
                                      must have increasing iteration values');
                    }
                }
                if (ex.length === 1) {
                    this.exaggeration = ex[0].value;
                }
            }
            this.updateExaggeration();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "momentum", {
        get: function () {
            return this._momentum.get();
        },
        set: function (mom) {
            if (mom < 0 || mom > 1) {
                throw Error('Momentum must be in the [0,1] range');
            }
            this._momentum.dispose();
            this._momentum = tfc.scalar(mom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSNEOptimizer.prototype, "eta", {
        get: function () {
            return this._eta;
        },
        set: function (eta) {
            if (eta <= 0) {
                throw Error('ETA must be greater then zero');
            }
            this._eta = eta;
        },
        enumerable: true,
        configurable: true
    });
    TSNEOptimizer.prototype.dispose = function () {
        this.embedding.dispose();
        this.gradient.dispose();
        this._momentum.dispose();
        this._exaggeration.dispose();
        this.gpgpu.gl.deleteTexture(this._splatTexture);
        this.gpgpu.gl.deleteTexture(this.kernelTexture);
        if (this.kernelTexture != null) {
            this.gpgpu.gl.deleteTexture(this.probOffsetTexture);
        }
        if (this.kernelTexture != null) {
            this.gpgpu.gl.deleteTexture(this.probNeighIdTexture);
        }
        if (this.kernelTexture != null) {
            this.gpgpu.gl.deleteTexture(this.probTexture);
        }
        this.gpgpu.gl.deleteBuffer(this.splatVertexIdBuffer);
        this.gpgpu.gl.deleteProgram(this.embeddingInitializationProgram);
        this.gpgpu.gl.deleteProgram(this.embeddingSplatterProgram);
        this.gpgpu.gl.deleteProgram(this.qInterpolatorProgram);
        this.gpgpu.gl.deleteProgram(this.xyInterpolatorProgram);
        this.gpgpu.gl.deleteProgram(this.attractiveForcesProgram);
        this.gpgpu.gl.deleteProgram(this.distributionParameterssComputationProgram);
        this.gpgpu.gl.deleteProgram(this.gaussiaDistributionsFromDistancesProgram);
    };
    TSNEOptimizer.prototype.initializeEmbedding = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.embedding != null) {
                            this.embedding.dispose();
                        }
                        if (this.gradient != null) {
                            this.gradient.dispose();
                        }
                        this.gradient = tfc.zeros([this.numRows, this.pointsPerRow * 2]);
                        this.embedding = tfc.tidy(function () {
                            var randomData = tfc.randomUniform([_this.numRows, _this.pointsPerRow * 2]);
                            var embedding = tfc.zeros([_this.numRows, _this.pointsPerRow * 2]);
                            _this.initializeEmbeddingPositions(embedding, randomData);
                            return embedding;
                        });
                        return [4, this.computeBoundaries()];
                    case 1:
                        _a.sent();
                        this.log('\tmin X', this._minX);
                        this.log('\tmax X', this._maxX);
                        this.log('\tmin Y', this._minY);
                        this.log('\tmax Y', this._maxY);
                        this._iteration = 0;
                        return [2];
                }
            });
        });
    };
    TSNEOptimizer.prototype.initializeNeighbors = function (numNeighPerRow, offsets, probabilities, neighIds) {
        this.numNeighPerRow = numNeighPerRow;
        this.probOffsetTexture = offsets;
        this.probTexture = probabilities;
        this.probNeighIdTexture = neighIds;
    };
    TSNEOptimizer.prototype.initializeNeighborsFromKNNGraph = function (numPoints, numNeighbors, distances, indices) {
        return __awaiter(this, void 0, void 0, function () {
            var pointsPerRow, numRows, dataShape, textureValues, i, n, id, knnGraphTexture;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pointsPerRow = Math.floor(Math.sqrt(numPoints * numNeighbors) / numNeighbors);
                        numRows = Math.ceil(numPoints / pointsPerRow);
                        dataShape = { numPoints: numPoints, pixelsPerPoint: numNeighbors, numRows: numRows, pointsPerRow: pointsPerRow };
                        textureValues = new Float32Array(pointsPerRow * numNeighbors * numRows * 2);
                        for (i = 0; i < numPoints; ++i) {
                            for (n = 0; n < numNeighbors; ++n) {
                                id = (i * numNeighbors + n);
                                textureValues[id * 2] = indices[id];
                                textureValues[id * 2 + 1] = distances[id];
                            }
                        }
                        knnGraphTexture = gl_util.createAndConfigureTexture(this.gpgpu.gl, pointsPerRow * numNeighbors, numRows, 2, textureValues);
                        return [4, this.initializeNeighborsFromKNNTexture(dataShape, knnGraphTexture)];
                    case 1:
                        _a.sent();
                        this.gpgpu.gl.deleteTexture(knnGraphTexture);
                        return [2];
                }
            });
        });
    };
    TSNEOptimizer.prototype.initializeNeighborsFromKNNTexture = function (shape, knnGraph) {
        return __awaiter(this, void 0, void 0, function () {
            var distributionParameters, gaussianDistributions, perplexity, gaussianDistributionsData, knnIndices, copyIndicesProgram, knnIndicesData, asymNeighIds, i, d, linearId, neighborCounter, neighborLinearOffset, i, i, check, maxValue, maxId, i, offsets, pointOffset, i, totalNeighbors, probabilities, neighIds, assignedNeighborCounter, i, n, linearId, pointId, probability, symMatrixDirectId, symMatrixIndirectId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.log('Asymmetric neighborhood initialization...');
                        if (shape.numPoints !== this.numPoints) {
                            throw new Error("KNN size and number of points must agree" +
                                ("(" + shape.numPoints + "," + this.numPoints + ")"));
                        }
                        distributionParameters = gl_util.createAndConfigureTexture(this.gpgpu.gl, shape.pointsPerRow, shape.numRows, 2);
                        gaussianDistributions = tfc.zeros([shape.numRows, shape.pointsPerRow * shape.pixelsPerPoint]);
                        perplexity = shape.pixelsPerPoint / 3;
                        this.computeDistributionParameters(distributionParameters, shape, perplexity, knnGraph);
                        this.computeGaussianDistributions(gaussianDistributions, distributionParameters, shape, knnGraph);
                        return [4, gaussianDistributions.data()];
                    case 1:
                        gaussianDistributionsData = _a.sent();
                        this.log('Gaussian distributions', gaussianDistributions);
                        knnIndices = tfc.zeros([shape.numRows, shape.pointsPerRow * shape.pixelsPerPoint]);
                        copyIndicesProgram = knn_util.createCopyIndicesProgram(this.gpgpu);
                        knn_util.executeCopyIndicesProgram(this.gpgpu, copyIndicesProgram, knnGraph, shape, this.backend.getTexture(knnIndices.dataId));
                        return [4, knnIndices.data()];
                    case 2:
                        knnIndicesData = _a.sent();
                        this.log('knn Indices', knnIndices);
                        asymNeighIds = new Float32Array(shape.numPoints * shape.pixelsPerPoint);
                        for (i = 0; i < this.numPoints; ++i) {
                            for (d = 0; d < shape.pixelsPerPoint; ++d) {
                                linearId = i * shape.pixelsPerPoint + d;
                                asymNeighIds[i * shape.pixelsPerPoint + d] = knnIndicesData[linearId];
                            }
                        }
                        this.log('NeighIds', asymNeighIds);
                        neighborCounter = new Uint32Array(this.numPoints);
                        neighborLinearOffset = new Uint32Array(this.numPoints);
                        for (i = 0; i < shape.numPoints * shape.pixelsPerPoint; ++i) {
                            ++neighborCounter[asymNeighIds[i]];
                        }
                        for (i = 1; i < shape.numPoints; ++i) {
                            neighborLinearOffset[i] = neighborLinearOffset[i - 1] +
                                neighborCounter[i - 1] + shape.pixelsPerPoint;
                        }
                        this.log('Counter', neighborCounter);
                        this.log('Linear offset', neighborLinearOffset);
                        check = 0;
                        maxValue = 0;
                        maxId = 0;
                        for (i = 0; i < neighborCounter.length; ++i) {
                            check += neighborCounter[i];
                            if (neighborCounter[i] > maxValue) {
                                maxValue = neighborCounter[i];
                                maxId = i;
                            }
                        }
                        this.log('Number of indirect links', check);
                        this.log('Most central point', maxId);
                        this.log('Number of indirect links for the central point', maxValue);
                        this.numNeighPerRow =
                            Math.ceil(Math.sqrt(shape.numPoints * shape.pixelsPerPoint * 2));
                        this.log('numNeighPerRow', this.numNeighPerRow);
                        {
                            offsets = new Float32Array(this.pointsPerRow * this.numRows * 3);
                            pointOffset = 0;
                            for (i = 0; i < this.numPoints; ++i) {
                                totalNeighbors = shape.pixelsPerPoint + neighborCounter[i];
                                offsets[i * 3 + 0] = (pointOffset) % (this.numNeighPerRow);
                                offsets[i * 3 + 1] = Math.floor((pointOffset) / (this.numNeighPerRow));
                                offsets[i * 3 + 2] = totalNeighbors;
                                pointOffset += totalNeighbors;
                            }
                            this.log('Offsets', offsets);
                            this.probOffsetTexture = gl_util.createAndConfigureTexture(this.gpgpu.gl, this.pointsPerRow, this.numRows, 3, offsets);
                        }
                        {
                            probabilities = new Float32Array(this.numNeighPerRow * this.numNeighPerRow);
                            neighIds = new Float32Array(this.numNeighPerRow * this.numNeighPerRow);
                            assignedNeighborCounter = new Uint32Array(this.numPoints);
                            for (i = 0; i < this.numPoints; ++i) {
                                for (n = 0; n < shape.pixelsPerPoint; ++n) {
                                    linearId = i * shape.pixelsPerPoint + n;
                                    pointId = knnIndicesData[linearId];
                                    probability = gaussianDistributionsData[linearId];
                                    symMatrixDirectId = neighborLinearOffset[i] + n;
                                    symMatrixIndirectId = neighborLinearOffset[pointId] +
                                        shape.pixelsPerPoint +
                                        assignedNeighborCounter[pointId];
                                    probabilities[symMatrixDirectId] = probability;
                                    probabilities[symMatrixIndirectId] = probability;
                                    neighIds[symMatrixDirectId] = pointId;
                                    neighIds[symMatrixIndirectId] = i;
                                    ++assignedNeighborCounter[pointId];
                                }
                            }
                            this.log('Probabilities', probabilities);
                            this.log('Neighbors', neighIds);
                            this.probTexture = gl_util.createAndConfigureTexture(this.gpgpu.gl, this.numNeighPerRow, this.numNeighPerRow, 1, probabilities);
                            this.probNeighIdTexture = gl_util.createAndConfigureTexture(this.gpgpu.gl, this.numNeighPerRow, this.numNeighPerRow, 1, neighIds);
                        }
                        gaussianDistributions.dispose();
                        knnIndices.dispose();
                        this.log('...done!');
                        return [2];
                }
            });
        });
    };
    TSNEOptimizer.prototype.initializedNeighborhoods = function () {
        return this.probNeighIdTexture != null;
    };
    TSNEOptimizer.prototype.updateExaggeration = function () {
        if (this._exaggeration !== undefined) {
            this._exaggeration.dispose();
        }
        if (typeof this.rawExaggeration === 'number') {
            this._exaggeration = tfc.scalar(this.rawExaggeration);
            return;
        }
        if (this._iteration <= this.rawExaggeration[0].iteration) {
            this._exaggeration = tfc.scalar(this.rawExaggeration[0].value);
            return;
        }
        if (this._iteration >=
            this.rawExaggeration[this.rawExaggeration.length - 1].iteration) {
            this._exaggeration = tfc.scalar(this.rawExaggeration[this.rawExaggeration.length - 1].value);
            return;
        }
        var i = 0;
        while (i < this.rawExaggeration.length &&
            this._iteration < this.rawExaggeration[i].iteration) {
            ++i;
        }
        var it0 = this.rawExaggeration[i].iteration;
        var it1 = this.rawExaggeration[i + 1].iteration;
        var v0 = this.rawExaggeration[i].value;
        var v1 = this.rawExaggeration[i + 1].value;
        var f = (it1 - this._iteration) / (it1 - it0);
        var v = v0 * f + v1 * (1 - f);
        this._exaggeration = tfc.scalar(v);
    };
    TSNEOptimizer.prototype.iterate = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var normQ, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.initializedNeighborhoods()) {
                            throw new Error('No neighborhoods defined. You may want to call\
                    initializeNeighbors or initializeNeighborsFromKNNGraph');
                        }
                        this.updateSplatTextureDiameter();
                        this.updateExaggeration();
                        _b = tfc.tidy(function () {
                            _this.splatPoints();
                            var interpQ = tfc.zeros([_this.numRows, _this.pointsPerRow]);
                            var interpXY = tfc.zeros([_this.numRows, _this.pointsPerRow * 2]);
                            _this.computeInterpolatedQ(interpQ);
                            _this.computeInterpolatedXY(interpXY);
                            var normQ = interpQ.sum();
                            var repulsiveForces = interpXY.div(normQ);
                            var attractiveForces = tfc.zeros([_this.numRows, _this.pointsPerRow * 2]);
                            _this.computeAttractiveForces(attractiveForces);
                            var gradientIter = attractiveForces.mul(_this._exaggeration).sub(repulsiveForces);
                            var gradient = _this.gradient.mul(_this._momentum).sub(gradientIter);
                            _this.gradient.dispose();
                            return [gradient, normQ];
                        }), this.gradient = _b[0], normQ = _b[1];
                        _a = this;
                        return [4, normQ.data()];
                    case 1:
                        _a._normQ = (_c.sent())[0];
                        normQ.dispose();
                        this.embedding = tfc.tidy(function () {
                            var embedding = _this.embedding.add(_this.gradient);
                            _this.embedding.dispose();
                            return embedding;
                        });
                        this.computeBoundaries();
                        ++this._iteration;
                        return [2];
                }
            });
        });
    };
    TSNEOptimizer.prototype.log = function (str, obj) {
        if (this.verbose) {
            if (obj != null) {
                console.log(str + ": \t" + obj);
            }
            else {
                console.log(str);
            }
        }
    };
    TSNEOptimizer.prototype.initializeRepulsiveForceTextures = function () {
        this._splatTexture = gl_util.createAndConfigureInterpolatedTexture(this.gpgpu.gl, this.splatTextureDiameter, this.splatTextureDiameter, 4, null);
        this.kernelSupport = 2.5;
        var kernel = new Float32Array(this.kernelTextureDiameter * this.kernelTextureDiameter * 4);
        var kernelRadius = Math.floor(this.kernelTextureDiameter / 2);
        var j = 0;
        var i = 0;
        for (j = 0; j < this.kernelTextureDiameter; ++j) {
            for (i = 0; i < this.kernelTextureDiameter; ++i) {
                var x = (i - kernelRadius) / kernelRadius * this.kernelSupport;
                var y = (j - kernelRadius) / kernelRadius * this.kernelSupport;
                var euclSquared = x * x + y * y;
                var tStudent = 1. / (1. + euclSquared);
                var id = (j * this.kernelTextureDiameter + i) * 4;
                kernel[id + 0] = tStudent;
                kernel[id + 1] = tStudent * tStudent * x;
                kernel[id + 2] = tStudent * tStudent * y;
                kernel[id + 3] = 1;
            }
        }
        this.kernelTexture = gl_util.createAndConfigureInterpolatedTexture(this.gpgpu.gl, this.kernelTextureDiameter, this.kernelTextureDiameter, 4, kernel);
    };
    TSNEOptimizer.prototype.initilizeCustomWebGLPrograms = function () {
        this.log('\tCreating custom programs...');
        this.embeddingInitializationProgram =
            tsne_util.createEmbeddingInitializationProgram(this.gpgpu);
        this.embeddingSplatterProgram =
            tsne_util.createEmbeddingSplatterProgram(this.gpgpu);
        var splatVertexId = new Float32Array(this.numPoints * 6);
        {
            var i = 0;
            var id = 0;
            for (i = 0; i < this.numPoints; ++i) {
                id = i * 6;
                splatVertexId[id + 0] = 0 + i * 4;
                splatVertexId[id + 1] = 1 + i * 4;
                splatVertexId[id + 2] = 2 + i * 4;
                splatVertexId[id + 3] = 0 + i * 4;
                splatVertexId[id + 4] = 2 + i * 4;
                splatVertexId[id + 5] = 3 + i * 4;
            }
        }
        this.splatVertexIdBuffer = tfc.webgl.webgl_util.createStaticVertexBuffer(this.gpgpu.gl, splatVertexId);
        this.qInterpolatorProgram =
            tsne_util.createQInterpolatorProgram(this.gpgpu);
        this.xyInterpolatorProgram =
            tsne_util.createXYInterpolatorProgram(this.gpgpu);
        this.attractiveForcesProgram =
            tsne_util.createAttractiveForcesComputationProgram(this.gpgpu);
        this.distributionParameterssComputationProgram =
            tsne_util.createDistributionParametersComputationProgram(this.gpgpu);
        this.gaussiaDistributionsFromDistancesProgram =
            tsne_util.createGaussiaDistributionsFromDistancesProgram(this.gpgpu);
    };
    TSNEOptimizer.prototype.computeBoundaries = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, min, max, _b, _c, offsetX, _d, _e, offsetY;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        _a = tfc.tidy(function () {
                            var embedding2D = _this.embedding.reshape([_this.numRows * _this.pointsPerRow, 2])
                                .slice([0, 0], [_this.numPoints, 2]);
                            var min = embedding2D.min(0);
                            var max = embedding2D.max(0);
                            return [min, max];
                        }), min = _a[0], max = _a[1];
                        _b = this;
                        return [4, min.data()];
                    case 1:
                        _b._minX = (_f.sent())[0];
                        _c = this;
                        return [4, max.data()];
                    case 2:
                        _c._maxX = (_f.sent())[0];
                        offsetX = (this._maxX - this._minX) * 0.05;
                        this._minX -= offsetX;
                        this._maxX += offsetX;
                        _d = this;
                        return [4, min.data()];
                    case 3:
                        _d._minY = (_f.sent())[1];
                        _e = this;
                        return [4, max.data()];
                    case 4:
                        _e._maxY = (_f.sent())[1];
                        offsetY = (this._maxY - this._minY) * 0.05;
                        this._minY -= offsetY;
                        this._maxY += offsetY;
                        min.dispose();
                        max.dispose();
                        return [2];
                }
            });
        });
    };
    TSNEOptimizer.prototype.updateSplatTextureDiameter = function () {
        var maxSpace = Math.max(this._maxX - this._minX, this._maxY - this._minY);
        var spacePerPixel = 0.35;
        var textureDiameter = Math.ceil(Math.max(maxSpace / spacePerPixel, 5));
        var percChange = Math.abs(this.splatTextureDiameter - textureDiameter) /
            this.splatTextureDiameter;
        if (percChange >= 0.2) {
            this.log('Updating splat-texture diameter', textureDiameter);
            this.gpgpu.gl.deleteTexture(this._splatTexture);
            this.splatTextureDiameter = textureDiameter;
            this._splatTexture = gl_util.createAndConfigureInterpolatedTexture(this.gpgpu.gl, this.splatTextureDiameter, this.splatTextureDiameter, 4, null);
        }
    };
    TSNEOptimizer.prototype.initializeEmbeddingPositions = function (embedding, random) {
        tsne_util.executeEmbeddingInitializationProgram(this.gpgpu, this.embeddingInitializationProgram, this.backend.getTexture(random.dataId), this.numPoints, this.pointsPerRow, this.numRows, this.backend.getTexture(embedding.dataId));
    };
    TSNEOptimizer.prototype.splatPoints = function () {
        tsne_util.executeEmbeddingSplatterProgram(this.gpgpu, this.embeddingSplatterProgram, this._splatTexture, this.backend.getTexture(this.embedding.dataId), this.kernelTexture, this.splatTextureDiameter, this.numPoints, this._minX, this._minY, this._maxX, this._maxY, this.kernelSupport, this.pointsPerRow, this.numRows, this.splatVertexIdBuffer);
    };
    TSNEOptimizer.prototype.computeInterpolatedQ = function (interpolatedQ) {
        tsne_util.executeQInterpolatorProgram(this.gpgpu, this.qInterpolatorProgram, this._splatTexture, this.backend.getTexture(this.embedding.dataId), this.numPoints, this._minX, this._minY, this._maxX, this._maxY, this.pointsPerRow, this.numRows, this.backend.getTexture(interpolatedQ.dataId));
    };
    TSNEOptimizer.prototype.computeInterpolatedXY = function (interpolatedXY) {
        tsne_util.executeXYInterpolatorProgram(this.gpgpu, this.xyInterpolatorProgram, this._splatTexture, this.backend.getTexture(this.embedding.dataId), this.backend.getTexture(interpolatedXY.dataId), this.numPoints, this._minX, this._minY, this._maxX, this._maxY, this.pointsPerRow, this.numRows, this._eta);
    };
    TSNEOptimizer.prototype.computeAttractiveForces = function (attractiveForces) {
        tsne_util.executeAttractiveForcesComputationProgram(this.gpgpu, this.attractiveForcesProgram, this.backend.getTexture(this.embedding.dataId), this.probOffsetTexture, this.probNeighIdTexture, this.probTexture, this.numPoints, this.numNeighPerRow, this.pointsPerRow, this.numRows, this._eta, this.backend.getTexture(attractiveForces.dataId));
    };
    TSNEOptimizer.prototype.computeDistributionParameters = function (distributionParameters, shape, perplexity, knnGraph) {
        tsne_util.executeDistributionParametersComputationProgram(this.gpgpu, this.distributionParameterssComputationProgram, knnGraph, shape.numPoints, shape.pixelsPerPoint, shape.pointsPerRow, shape.numRows, perplexity, distributionParameters);
    };
    TSNEOptimizer.prototype.computeGaussianDistributions = function (distributions, distributionParameters, shape, knnGraph) {
        tsne_util.executeGaussiaDistributionsFromDistancesProgram(this.gpgpu, this.gaussiaDistributionsFromDistancesProgram, knnGraph, distributionParameters, shape.numPoints, shape.pixelsPerPoint, shape.pointsPerRow, shape.numRows, this.backend.getTexture(distributions.dataId));
    };
    return TSNEOptimizer;
}());
exports.TSNEOptimizer = TSNEOptimizer;
//# sourceMappingURL=tsne_optimizer.js.map
},{"@tensorflow/tfjs-core":23,"./gl_util":16,"./knn_util":19,"./tsne_optimizer_util":21}],22:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
var gl_util = require("./gl_util");
function tensorToDataTexture(tensor) {
    return __awaiter(this, void 0, void 0, function () {
        var inputShape, backend, gpgpu, numPoints, numDimensions, numChannels, pixelsPerPoint, pointsPerRow, numRows, tensorData, textureValues, p, tensorOffset, textureOffset, d, texture, shape;
        return __generator(this, function (_a) {
            inputShape = tensor.shape;
            if (inputShape.length !== 2) {
                throw Error("tensorToDataTexture: input tensor must be 2-dimensional");
            }
            backend = tfc.ENV.findBackend('webgl');
            if (backend === null) {
                throw Error('WebGL backend is not available');
            }
            gpgpu = backend.getGPGPUContext();
            numPoints = inputShape[0];
            numDimensions = inputShape[1];
            numChannels = 4;
            pixelsPerPoint = Math.ceil(numDimensions / numChannels);
            pointsPerRow = Math.floor(Math.sqrt(numPoints * pixelsPerPoint)
                / pixelsPerPoint);
            numRows = Math.ceil(numPoints / pointsPerRow);
            tensorData = tensor.dataSync();
            textureValues = new Float32Array(pointsPerRow * pixelsPerPoint * numRows * numChannels);
            for (p = 0; p < numPoints; ++p) {
                tensorOffset = p * numDimensions;
                textureOffset = p * pixelsPerPoint * numChannels;
                for (d = 0; d < numDimensions; ++d) {
                    textureValues[textureOffset + d] = tensorData[tensorOffset + d];
                }
            }
            console.log(tensorData);
            console.log(textureValues);
            texture = gl_util.createAndConfigureTexture(gpgpu.gl, pointsPerRow * pixelsPerPoint, numRows, 4, textureValues);
            shape = { numPoints: numPoints, pointsPerRow: pointsPerRow, numRows: numRows, pixelsPerPoint: pixelsPerPoint };
            console.log(shape);
            return [2, { shape: shape, texture: texture }];
        });
    });
}
exports.tensorToDataTexture = tensorToDataTexture;
//# sourceMappingURL=tensor_to_data_texture.js.map
},{"@tensorflow/tfjs-core":23,"./gl_util":16}],18:[function(require,module,exports) {
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsne_optimizer_1 = require("./tsne_optimizer");
var knn_1 = require("./knn");
var tensor_to_data_texture_1 = require("./tensor_to_data_texture");
function tsne(data, config, verbose) {
    return new TSNE(data, config, verbose);
}
exports.tsne = tsne;
var TSNE = (function () {
    function TSNE(data, config, verbose) {
        this.initialized = false;
        this.probabilitiesInitialized = false;
        this.data = data;
        this.config = config;
        var inputShape = this.data.shape;
        this.numPoints = inputShape[0];
        this.numDimensions = inputShape[1];
        if (inputShape.length !== 2) {
            throw Error("computeTSNE: input tensor must be 2-dimensional");
        }
        this.verbose = false;
        if (verbose != null) {
            this.verbose = verbose;
        }
        if (this.verbose === true) {
            console.log("Computing tSNE embedding...");
        }
    }
    TSNE.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var perplexity, exaggeration, exaggerationIter, exaggerationDecayIter, momentum, _a, exaggerationPolyline;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        perplexity = 30;
                        exaggeration = 4;
                        exaggerationIter = 300;
                        exaggerationDecayIter = 200;
                        momentum = 0.8;
                        if (this.config !== undefined) {
                            if (this.config.perplexity !== undefined) {
                                perplexity = this.config.perplexity;
                            }
                            if (this.config.exaggeration !== undefined) {
                                exaggeration = this.config.exaggeration;
                            }
                            if (this.config.exaggerationIter !== undefined) {
                                exaggerationIter = this.config.exaggerationIter;
                            }
                            if (this.config.exaggerationDecayIter !== undefined) {
                                exaggerationDecayIter = this.config.exaggerationDecayIter;
                            }
                            if (this.config.momentum !== undefined) {
                                momentum = this.config.momentum;
                            }
                        }
                        if (perplexity > 42) {
                            throw Error("computeTSNE: perplexity cannot be greater than 42");
                        }
                        this.numNeighbors = Math.floor((perplexity * 3) / 4) * 4;
                        _a = this;
                        return [4, tensor_to_data_texture_1.tensorToDataTexture(this.data)];
                    case 1:
                        _a.packedData = _b.sent();
                        if (this.verbose === true) {
                            console.log("Number of points " + this.numPoints);
                            console.log("Number of dimensions " + this.numDimensions);
                            console.log("Number of neighbors " + this.numNeighbors);
                        }
                        this.knnEstimator
                            = new knn_1.KNNEstimator(this.packedData.texture, this.packedData.shape, this.numPoints, this.numDimensions, this.numNeighbors, true);
                        this.optimizer = new tsne_optimizer_1.TSNEOptimizer(this.numPoints, false);
                        exaggerationPolyline = [{ iteration: exaggerationIter, value: exaggeration },
                            { iteration: exaggerationIter + exaggerationDecayIter, value: 1 }];
                        if (this.verbose === true) {
                            console.log("Exaggerating for " + exaggerationPolyline[0].iteration + " "
                                + ("iterations with a value of " + exaggerationPolyline[0].value + ". ")
                                + ("Exaggeration is removed after " + exaggerationPolyline[1].iteration + "."));
                        }
                        this.optimizer.exaggeration = exaggerationPolyline;
                        this.optimizer.momentum = momentum;
                        return [2];
                }
            });
        });
    };
    TSNE.prototype.compute = function (iterations) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.initialize()];
                    case 1:
                        _a.sent();
                        return [4, this.iterateKnn(100)];
                    case 2:
                        _a.sent();
                        return [4, this.iterate(iterations)];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    TSNE.prototype.iterateKnn = function (iterations) {
        return __awaiter(this, void 0, void 0, function () {
            var iter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.initialized === false)) return [3, 2];
                        return [4, this.initialize()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.probabilitiesInitialized = false;
                        for (iter = 0; iter < iterations; ++iter) {
                            this.knnEstimator.iterateBruteForce();
                        }
                        return [2, true];
                }
            });
        });
    };
    TSNE.prototype.iterate = function (iterations) {
        return __awaiter(this, void 0, void 0, function () {
            var iter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.probabilitiesInitialized === false)) return [3, 2];
                        return [4, this.initializeProbabilities()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        iter = 0;
                        _a.label = 3;
                    case 3:
                        if (!(iter < iterations)) return [3, 6];
                        return [4, this.optimizer.iterate()];
                    case 4:
                        _a.sent();
                        if ((this.optimizer.iteration % 100) == 0 && this.verbose === true) {
                            console.log("Iteration " + this.optimizer.iteration);
                        }
                        _a.label = 5;
                    case 5:
                        ++iter;
                        return [3, 3];
                    case 6: return [2];
                }
            });
        });
    };
    TSNE.prototype.coordinates = function () {
        return this.optimizer.embedding2D;
    };
    TSNE.prototype.knnDistance = function () {
        return 0;
    };
    TSNE.prototype.initializeProbabilities = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.verbose === true) {
                            console.log("Initializing probabilities");
                        }
                        return [4, this.optimizer.initializeNeighborsFromKNNTexture(this.knnEstimator.knnShape, this.knnEstimator.knn())];
                    case 1:
                        _a.sent();
                        this.probabilitiesInitialized = true;
                        return [2];
                }
            });
        });
    };
    return TSNE;
}());
exports.TSNE = TSNE;
//# sourceMappingURL=tsne.js.map
},{"./tsne_optimizer":17,"./knn":15,"./tensor_to_data_texture":22}],12:[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tfc = require("@tensorflow/tfjs-core");
exports.tfc = tfc;
var dataset_util = require("./dataset_util");
exports.dataset_util = dataset_util;
var drawer_1 = require("./drawer");
exports.EmbeddingDrawer = drawer_1.EmbeddingDrawer;
var gl_util = require("./gl_util");
exports.gl_util = gl_util;
var knn_1 = require("./knn");
exports.KNNEstimator = knn_1.KNNEstimator;
var tsne_optimizer_1 = require("./tsne_optimizer");
exports.TSNEOptimizer = tsne_optimizer_1.TSNEOptimizer;
var tsne_1 = require("./tsne");
exports.tsne = tsne_1.tsne;
//# sourceMappingURL=index.js.map
},{"@tensorflow/tfjs-core":23,"./dataset_util":13,"./drawer":14,"./gl_util":16,"./knn":15,"./tsne_optimizer":17,"./tsne":18}],2:[function(require,module,exports) {
'use strict';

var _tfjsTsne = require('tfjs-tsne');

var tf_tsne = _interopRequireWildcard(_tfjsTsne);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

console.log('Texture tSNE with TensorFlow.js');

// Gradient Descent parameters
var iterations = 0;
var alphaViz = 0.25;
var maxExaggeration = 4;

var init = false;

var offsets = void 0;
var probabilities = void 0;
var neighIds = void 0;
var colors = void 0;
var mnistTexture = void 0;

// UI elements
var iterateChkBx = document.getElementById('iterateChkBx');
var textureChkBx = document.getElementById('textureChkBx');
var alphaSlider = document.getElementById('alphaSlider');

// Infomation
var numPoints = 60000;

var webglVersion = _tfjsTsne.tfc.ENV.get('WEBGL_VERSION');
var backend = _tfjsTsne.tfc.ENV.findBackend('webgl');
if (webglVersion === 1 || backend === null) {
  if (webglVersion === 1) {
    document.getElementById('legend-container-div').classList.add('hidden');
    document.getElementById('error-div').innerHTML = 'tfjs-tsne requires WebGL 2.0, but WebGL is not supported on this device.';
    console.log('tfjs-tsne requires WebGL version 2');
  }
  if (backend === null) {
    document.getElementById('legend-container-div').classList.add('hidden');
    document.getElementById('error-div').innerHTML = 'tfjs-tsne uses WebGL, but WebGL is not supported on this device.';
    console.log('WebGL is not supported on this device');
  }
} else {
  // The canvas used by TensorFlow.js is added to the page to enable the use
  // of custom drawers.
  var canvas = backend.getCanvas();
  document.getElementById('canvas-div').appendChild(canvas);
  canvas.height = 800;
  canvas.width = 800;

  // initializing the tSNE class and the canvas drawer
  var tsne = new tf_tsne.TSNEOptimizer(numPoints, false);
  var drawer = new tf_tsne.EmbeddingDrawer(numPoints);

  // Precomputed Probabilites
  // can be loaded from the server
  var pntsPerRow = tsne.pointsPerRow;
  var numRows = tsne.numRows;
  var numNeighPerRow = 2794;

  var gpgpu = backend.getGPGPUContext();
  var webglContext = backend.getGPGPUContext().gl;
  _tfjsTsne.tfc.webgl.webgl_util.bindCanvasToFramebuffer(webglContext);
  webglContext.clearColor(1, 1, 1, 1);
  webglContext.clear(webglContext.COLOR_BUFFER_BIT);

  // Off screen render target
  var tempTexture = tf_tsne.gl_util.createAndConfigureInterpolatedTexture(gpgpu.gl, 800, 800, 4);

  loadNeighIds().then(function () {
    loadMNIST(webglContext, document.getElementById('mnistImg').href).then(function () {
      loadOffsets().then(function () {
        loadProbabilities().then(function () {
          loadColors().then(function () {
            iterate();
            showControls();
          });
        });
      });
    });
  });
}

/**
 * Draw the embedding on canvas
 */
function draw() {
  var embedding = {
    minX: tsne.minX,
    maxX: tsne.maxX,
    minY: tsne.minY,
    maxY: tsne.maxY,
    embeddingTexture: tsne.embeddingTexture,
    pntsPerRow: tsne.numberOfPointsPerRow,
    numRows: tsne.numberOfRows,
    numPoints: tsne.numberOfPoints
  };
  if (textureChkBx.checked === false) {
    drawer.drawTexturedPoints(embedding, alphaViz, mnistTexture, 14, colors);
  } else {
    var textureNormalization = Math.sqrt(tsne.normalizationQ);
    drawer.drawColoredPoints(embedding, alphaViz, colors, tempTexture);
    drawer.drawPointsAndSplatTexture(embedding, tsne.splatTexture, tempTexture, textureNormalization);
  }
}

/**
 * Perform a gradient descent iteration
 */
function iterate() {
  if (init === false) {
    tsne.initializeNeighbors(numNeighPerRow, offsets, probabilities, neighIds);
    init = true;
  }
  if (iterateChkBx.checked === true) {
    requestAnimationFrame(iterate);
  }

  // Setting parameters the SGD parameters
  // with a linear fall-off of the exaggeration
  if (iterations >= 600) {
    tsne.exaggeration = 1.;
  } else if (iterations >= 200) {
    tsne.exaggeration = maxExaggeration - (maxExaggeration - 1) * (iterations - 200.) / 400.;
  } else {
    tsne.exaggeration = maxExaggeration;
  }

  tsne.iterate();
  ++iterations;
  if (iterations % 100 === 0) {
    console.log('Iter #' + iterations);
  }

  if (iterations === 1000) {
    console.log('Switching off automatically after 1000 iterations');
    iterateChkBx.checked = false;
  }

  draw();
}

iterateChkBx.addEventListener('click', function () {
  iterate();
});

textureChkBx.addEventListener('click', function () {
  draw();
});

var resetBtn = document.getElementById('resetBtn');
resetBtn.addEventListener('click', function () {
  console.log('Reset!');
  tsne.initializeEmbedding();
  iterations = 0;
  iterate();
  iterate();
  iterateChkBx.checked = false;
});

alphaSlider.addEventListener('input', function () {
  if (iterateChkBx.checked === false) {
    requestAnimationFrame(draw);
  }
  alphaViz = Number(alphaSlider.value) / Number(alphaSlider.max) / 2.;
});

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
// Loading the textures -> switch to promises

/**
 * Load the texture oReqOffsets
 */
function loadOffsets() {
  return new Promise(function (resolve, reject) {
    var oReqOffsets = new XMLHttpRequest();
    oReqOffsets.open('GET', document.getElementById('offsets').href, true);
    oReqOffsets.responseType = 'arraybuffer';
    oReqOffsets.onload = function (oEvent) {
      if (oReqOffsets.status >= 200 && oReqOffsets.status < 300) {
        var arrayBufferOffsets = oReqOffsets.response;
        if (arrayBufferOffsets) {
          var byteArrayOffsets = new Float32Array(arrayBufferOffsets);
          offsets = tf_tsne.gl_util.createAndConfigureTexture(gpgpu.gl, pntsPerRow, numRows, 3, // offset 2D + numNeigh
          byteArrayOffsets);
        }
        resolve(oReqOffsets.response);
      } else {
        reject({ status: oReqOffsets.status, statusText: oReqOffsets.statusText });
      }
    };
    oReqOffsets.onerror = function () {
      reject({ status: oReqOffsets.status, statusText: oReqOffsets.statusText });
    };
    oReqOffsets.send();
  });
}

/**
 * Loads the labels as oReqColors
 */
function loadColors() {
  return new Promise(function (resolve, reject) {
    var oReqColors = new XMLHttpRequest();
    oReqColors.open('GET', document.getElementById('colors').href, true);
    oReqColors.responseType = 'arraybuffer';
    oReqColors.onload = function (oEvent) {
      if (oReqColors.status >= 200 && oReqColors.status < 300) {
        var arrayBufferColors = oReqColors.response;
        if (arrayBufferColors) {
          var byteArrayColors = new Float32Array(arrayBufferColors);
          colors = tf_tsne.gl_util.createAndConfigureTexture(gpgpu.gl, pntsPerRow, numRows, 3, byteArrayColors);
        }
        resolve(oReqColors.response);
      } else {
        reject({ status: oReqColors.status, statusText: oReqColors.statusText });
      }
    };
    oReqColors.onerror = function () {
      reject({ status: oReqColors.status, statusText: oReqColors.statusText });
    };
    oReqColors.send();
  });
}

/**
 * Load the oReqProbabilities
 */
function loadProbabilities() {
  return new Promise(function (resolve, reject) {
    var oReqProbabilities = new XMLHttpRequest();
    oReqProbabilities.open('GET', document.getElementById('probabilities').href, true);
    oReqProbabilities.responseType = 'arraybuffer';
    oReqProbabilities.onload = function (oEvent) {
      if (oReqProbabilities.status >= 200 && oReqProbabilities.status < 300) {
        var arrayBufferProb = oReqProbabilities.response;
        if (arrayBufferProb) {
          var byteArrayProb = new Float32Array(arrayBufferProb);
          probabilities = tf_tsne.gl_util.createAndConfigureTexture(gpgpu.gl, numNeighPerRow, numNeighPerRow, 1, byteArrayProb);
        }
        resolve(oReqProbabilities.response);
      } else {
        reject({
          status: oReqProbabilities.status,
          statusText: oReqProbabilities.statusText
        });
      }
    };
    oReqProbabilities.onerror = function () {
      reject({
        status: oReqProbabilities.status,
        statusText: oReqProbabilities.statusText
      });
    };
    oReqProbabilities.send();
  });
}

/**
 * Loads the neighbor neighIds
 */
function loadNeighIds() {
  return new Promise(function (resolve, reject) {
    var oReqNeighIds = new XMLHttpRequest();
    oReqNeighIds.open('GET', document.getElementById('neighIds').href, true);
    oReqNeighIds.responseType = 'arraybuffer';
    oReqNeighIds.onload = function (oEvent) {
      if (oReqNeighIds.status >= 200 && oReqNeighIds.status < 300) {
        var arrayBufferNeighIds = oReqNeighIds.response;
        if (arrayBufferNeighIds) {
          var byteArrayNeighIds = new Float32Array(arrayBufferNeighIds);
          neighIds = tf_tsne.gl_util.createAndConfigureTexture(gpgpu.gl, numNeighPerRow, numNeighPerRow, 1, byteArrayNeighIds);
        }
        resolve(oReqNeighIds.response);
      } else {
        reject({
          status: oReqNeighIds.status,
          statusText: oReqNeighIds.statusText
        });
      }
    };
    oReqNeighIds.onerror = function () {
      reject({ status: oReqNeighIds.status, statusText: oReqNeighIds.statusText });
    };
    oReqNeighIds.send();
  });
}

/**
 * Load the MNIST dataset
 * @param {WebGlContext} gl current context
 * @param {string} url input image url
 * @returns {WebGLTexture} MNISTA dataset textures
 */
function loadMNIST(gl, url) {
  return new Promise(function (resolve, reject) {
    var texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    var level = 0;
    // tslint:disable-next-line:no-any
    var internalFormat = gl.RGBA8;
    var border = 0;
    // tslint:disable-next-line:no-any
    var srcFormat = gl.RGBA;
    var srcType = gl.UNSIGNED_BYTE;
    var pixel = new Uint8Array([0, 0, 255, 255]);
    gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, 1, 1, border, srcFormat, srcType, pixel);

    var image = new Image();
    image.onload = function () {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, srcFormat, srcType, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    };
    image.src = url;
    mnistTexture = texture;
    resolve();
  });
}

// loadMNIST(webglContext, document.getElementById('mnistImg').href);

function showControls() {
  var hiddenIterDiv = document.querySelector('#hidden-iter-div');
  hiddenIterDiv.classList.remove('hidden');

  var dataLoadingDiv = document.querySelector('#data-loading-div');
  dataLoadingDiv.remove();
}
},{"tfjs-tsne":12}]},{},[2])