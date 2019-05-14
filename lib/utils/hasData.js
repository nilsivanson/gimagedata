'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasData = hasData;


/**
 *
 * @param source
 * @returns {boolean}
 */
function hasData(source) {
  return Boolean(source.data);
}