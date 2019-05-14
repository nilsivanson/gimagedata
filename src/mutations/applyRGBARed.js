/** @flow */
import type { ImageDataLike, t } from '../types'

/**
 *
 * @param source
 * @param target
 */
export function applyRGBARed (source: ImageDataLike, target: t): void {
  const sourceData = source.data
  const targetData = target.data
  const targetLength = targetData.length
  let targetIndex, sourceIndex, alpha
  for (targetIndex = 0; targetIndex < targetLength; targetIndex++) {
    sourceIndex = targetIndex * 4
    alpha = sourceData[sourceIndex + 3]
    if (alpha === 0) {
      targetData[targetIndex] = 255
    } else {
      targetData[targetIndex] = sourceData[sourceIndex]
    }
  }
}
