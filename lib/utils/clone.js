'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;


/**
 *
 * @param source
 * @returns {*}
 */
function clone(source) {
  var data = source.data ? source.data.slice() : source.data; // support for building without data
  return Object.assign({}, source, { data: data });
}