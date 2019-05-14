'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rebuildData = rebuildData;


/**
 *
 * @param Constructor
 * @param fill
 * @param target
 */
function rebuildData(Constructor, fill, target) {
  if (target.data instanceof Constructor) return;
  target.data = new Constructor(target.width * target.height);
  if (fill === null || fill === undefined) return;
  target.data.fill(fill);
}