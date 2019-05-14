'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPoints = setPoints;

require('../types');

/**
 *
 * @param points
 * @param value
 * @param target
 */
function setPoints(points, value, target) {
  for (var index = 0; index < points.length; index++) {
    target.data[points[index]] = value;
  }
}