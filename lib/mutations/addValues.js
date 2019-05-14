'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addValues = addValues;


/**
 *
 * @param sources
 * @param target
 */
function addValues(sources, target) {
  if (sources.length === 0) return;

  var width = target.width,
      height = target.height,
      data = target.data;


  var x = void 0;
  var y = void 0;
  var pos = void 0;
  var index = void 0;
  var matrixData = void 0;

  for (index = 0; index < sources.length; index++) {
    matrixData = sources[index].data;
    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        pos = y * width + x;
        data[pos] += matrixData[pos];
      }
    }
  }
}