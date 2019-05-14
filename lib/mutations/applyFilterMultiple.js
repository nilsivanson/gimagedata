'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyFilterMultiple = applyFilterMultiple;


/**
 *
 * @param filter
 * @param targets
 */
function applyFilterMultiple(filter, targets) {
  var width = filter.width;
  var height = filter.height;
  var whitePoints = []; // growing array

  var pointIndex = void 0;
  for (pointIndex = 0; pointIndex < width * height; pointIndex++) {
    if (filter.data[pointIndex] === 255) whitePoints.push(pointIndex);
  }

  // no changes if no white points where found
  if (whitePoints.length === 0) return;

  var targetIndex = void 0;
  var target = void 0,
      targetData = void 0;
  for (targetIndex = 0; targetIndex < targets.length; targetIndex++) {
    target = targets[targetIndex];
    targetData = target.data;

    for (pointIndex = 0; pointIndex < whitePoints.length; pointIndex++) {
      targetData[whitePoints[pointIndex]] = 255;
    }
  }
}