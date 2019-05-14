'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reduce = reduce;

require('../types');

/**
 *
 * @param fn
 * @param start
 * @param source
 * @returns {T}
 */
function reduce(fn, start, source) {
  var row = void 0;
  var col = void 0;
  var current = start;

  // new style source with Uint8ClampedArray
  for (row = 0; row < source.height; row++) {
    for (col = 0; col < source.width; col++) {
      current = fn(current, source.data[row * source.width + col], row, col, source);
    }
  }

  return current;
}