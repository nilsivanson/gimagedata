'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matchingPoints = matchingPoints;

require('../types');

/**
 *
 * @param match
 * @param source
 * @returns {number[]}
 */
function matchingPoints(match, source) {
  var width = source.width,
      height = source.height,
      data = source.data;

  var whitePoints = []; // growing array

  var pointIndex = void 0;
  for (pointIndex = 0; pointIndex < width * height; pointIndex++) {
    if (data[pointIndex] === match) {
      whitePoints.push(pointIndex);
    }
  }

  return whitePoints;
}