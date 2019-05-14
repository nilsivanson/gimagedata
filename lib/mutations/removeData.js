'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeData = removeData;


/**
 * if you work with large data fields they can be really heavy to serialize and deserialize with json
 * example use case:
 * save png with bitmap data
 * delete data, serialize json (without data) to the client
 * on the client rebuild the data array
 * fill the data array with data from parsing the bitmap data from another url
 * @param target
 */
function removeData(target) {
  delete target.data;
}