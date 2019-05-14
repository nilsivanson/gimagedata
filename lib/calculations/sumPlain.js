'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumPlain = sumPlain;


/**
 *
 * @param source
 * @returns {number}
 */
function sumPlain(source) {
  var width = source.width,
      height = source.height,
      data = source.data;


  var x = void 0;
  var y = void 0;
  var sum = 0;

  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      sum += data[y * width + x];
    }
  }

  return sum;
}