'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixYAsymmetry = fixYAsymmetry;

var _flipY = require('./flipY');

var _center = require('../calculations/center');

/**
 *
 * @param target
 */
function fixYAsymmetry(target) {
  if ((0, _center.center)(target).y + 1 > target.height / 2) return;
  (0, _flipY.flipY)(target);
}