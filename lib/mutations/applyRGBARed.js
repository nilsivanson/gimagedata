'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyRGBARed = applyRGBARed;


/**
 *
 * @param source
 * @param target
 */
function applyRGBARed(source, target) {
  var sourceData = source.data;
  var targetData = target.data;
  var targetLength = targetData.length;
  var targetIndex = void 0,
      sourceIndex = void 0,
      alpha = void 0;
  for (targetIndex = 0; targetIndex < targetLength; targetIndex++) {
    sourceIndex = targetIndex * 4;
    alpha = sourceData[sourceIndex + 3];
    if (alpha === 0) {
      targetData[targetIndex] = 255;
    } else {
      targetData[targetIndex] = sourceData[sourceIndex];
    }
  }
}