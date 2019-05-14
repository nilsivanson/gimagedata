'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildWithoutData = buildWithoutData;


/**
 *
 * @param width
 * @param height
 * @returns {{width: number, height: number, data: Uint8ClampedArray}}
 */
function buildWithoutData(width, height) {
  // we build with a small data object and then delete it
  // the reason is to satisfy flow
  // suggestions for better solutions are welcome
  var matrix = { width: width, height: height, data: new Uint8ClampedArray(0) };
  delete matrix.data;
  return matrix;
}