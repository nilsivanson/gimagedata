'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.union = union;

require('../types');

/**
 *
 * @param sources
 * @param target
 */
function union(sources, target) {
  var quantity = sources.length;

  if (quantity === 0) return;

  var width = target.width,
      height = target.height;

  var row = void 0;
  var col = void 0;
  var positionIndex = void 0;
  var matrixIndex = void 0;
  var sum = void 0;

  for (row = 0; row < height; row++) {
    for (col = 0; col < width; col++) {
      positionIndex = row * width + col;
      sum = 255;
      for (matrixIndex = 0; matrixIndex < quantity; matrixIndex++) {
        sum -= 255 - sources[matrixIndex].data[positionIndex];
      }

      target.data[positionIndex] = sum;
    }
  }
}