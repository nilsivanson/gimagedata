'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyRGBAAverage = applyRGBAAverage;


/**
 *
 * @param source
 * @param target
 */
function applyRGBAAverage(source, target) {
  var sourceData = source.data;
  var targetData = target.data;
  var targetLength = targetData.length;
  var targetIndex = void 0,
      sourceIndex = void 0,
      alpha = void 0,
      sum = void 0;
  for (targetIndex = 0; targetIndex < targetLength; targetIndex++) {
    sourceIndex = targetIndex * 4;
    alpha = sourceData[sourceIndex + 3];
    if (alpha === 0) {
      targetData[targetIndex] = 255;
    } else {
      sum = sourceData[sourceIndex] + sourceData[sourceIndex + 1] + sourceData[sourceIndex + 2];
      targetData[targetIndex] = sum / 3;
    }
  }
}