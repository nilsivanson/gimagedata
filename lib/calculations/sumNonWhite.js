'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumNonWhite = sumNonWhite;


/**
 *
 * @param source
 * @returns {number}
 */
function sumNonWhite(source) {
  var width = source.width,
      height = source.height,
      data = source.data;

  var sum = 0;

  var index = void 0;
  for (index = 0; index < width * height; index++) {
    if (data[index] !== 255) sum += 1;
  }

  return sum;
}