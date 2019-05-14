"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.range = range;


/**
 *
 * @param first
 * @param count
 * @returns {Array}
 */
function range(first, count) {
  // explanation: https://stackoverflow.com/a/18948066/4547973
  // $FlowFixme
  return Array.apply(null, { length: count }).map(function (current, index) {
    return index + first;
  });
}