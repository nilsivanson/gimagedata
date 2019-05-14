'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyAverage = applyAverage;


/**
 *
 * @param sources
 * @param target
 */
function applyAverage(sources, target) {
  var source = sources[0];
  if (!source || sources.length === 0) return;
  if (sources.length === 1) {
    target.data.set(source.data, 0);
    return;
  }

  var quantity = sources.length;
  var width = source.width;
  var height = source.height;
  var pointsLength = width * height;

  var matrixIndex = void 0;
  var pointIndex = void 0;
  var currentSum = void 0;

  for (pointIndex = 0; pointIndex < pointsLength; pointIndex++) {
    currentSum = 0;
    for (matrixIndex = 0; matrixIndex < quantity; matrixIndex++) {
      currentSum += sources[matrixIndex].data[pointIndex];
    }

    target.data[pointIndex] = currentSum / quantity;
  }
}