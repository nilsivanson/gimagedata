'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.center = center;


/**
 *
 * @param matrix
 * @returns {{x: number, y: number}}
 */
function center(matrix) {
  var width = matrix.width;
  var height = matrix.height;
  var data = matrix.data;

  var xSum = 0;
  var ySum = 0;
  var points = 0;
  var row = void 0;
  var col = void 0;

  for (row = 0; row < height; row++) {
    for (col = 0; col < width; col++) {
      if (data[row * width + col] !== 255) {
        xSum += col;
        ySum += row;
        points++;
      }
    }
  }

  var xCenter = xSum / points;
  var yCenter = ySum / points;

  return { x: xCenter, y: yCenter };
}