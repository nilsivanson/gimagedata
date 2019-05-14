'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flipY = flipY;


/**
 *
 * @param target
 */
function flipY(target) {
  var width = target.width,
      height = target.height,
      targetData = target.data;

  var sourceData = targetData.slice();

  for (var row = 0; row < height; row++) {
    var opposingRow = height - 1 - row;

    for (var col = 0; col < width; col++) {
      targetData[row * width + col] = sourceData[opposingRow * width + col];
    }
  }
}