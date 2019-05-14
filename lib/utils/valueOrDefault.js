'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valueOrDefault = valueOrDefault;


/**
 *
 * @param defaultValue
 * @param row
 * @param column
 * @param source
 * @returns {*}
 */
function valueOrDefault(defaultValue, row, column, source) {
  var width = source.width,
      height = source.height,
      data = source.data;

  if (row < 0 || row >= height || column < 0 || column >= width) return defaultValue;
  return data[row * width + column];
}