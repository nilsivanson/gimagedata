'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceDimensions = forceDimensions;


/**
 *
 * @param targetWidth
 * @param targetHeight
 * @param target
 */
function forceDimensions(targetWidth, targetHeight, target) {
  var sourceWidth = target.width,
      sourceHeight = target.height,
      sourceData = target.data;


  if (sourceWidth === targetWidth && sourceHeight === targetHeight) return;

  var targetData = new Uint8ClampedArray(targetWidth * targetHeight);
  targetData.fill(255);
  var copyableWidth = Math.min(sourceWidth, targetWidth);
  var copyableHeight = Math.min(sourceHeight, targetHeight);

  for (var targetRow = 0; targetRow < copyableHeight; targetRow++) {
    var targetIndex = targetRow * targetWidth;
    var sourceIndex = targetRow * sourceWidth;
    var sourceRowData = sourceData.subarray(sourceIndex, sourceIndex + copyableWidth);
    targetData.set(sourceRowData, targetIndex);
  }

  target.width = targetWidth;
  target.height = targetHeight;
  target.data = targetData;
}