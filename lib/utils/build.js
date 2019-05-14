'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.build = build;


/**
 *
 * @param Constructor
 * @param fill
 * @param width
 * @param height
 * @returns {{width: number, height: number, data: $TypedArrayConstructor}}
 */
function build(Constructor, fill, width, height) {
  var data = new Constructor(width * height);
  if (fill !== null && fill !== undefined) data.fill(fill);
  return { width: width, height: height, data: data };
}