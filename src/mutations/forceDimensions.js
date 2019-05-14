/** @flow */
import type { t } from '../types'

/**
 *
 * @param targetWidth
 * @param targetHeight
 * @param target
 */
export function forceDimensions (targetWidth: number, targetHeight: number, target: t): void {
  const {
    width: sourceWidth,
    height: sourceHeight,
    data: sourceData
  } = target

  if (sourceWidth === targetWidth && sourceHeight === targetHeight) return

  const targetData = new Uint8ClampedArray(targetWidth * targetHeight)
  targetData.fill(255)
  const copyableWidth = Math.min(sourceWidth, targetWidth)
  const copyableHeight = Math.min(sourceHeight, targetHeight)

  for (let targetRow = 0; targetRow < copyableHeight; targetRow++) {
    const targetIndex = targetRow * targetWidth
    const sourceIndex = targetRow * sourceWidth
    const sourceRowData = sourceData.subarray(sourceIndex, sourceIndex + copyableWidth)
    targetData.set(sourceRowData, targetIndex)
  }

  target.width = targetWidth
  target.height = targetHeight
  target.data = targetData
}
