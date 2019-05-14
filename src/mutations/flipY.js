/** @flow */
import type { t } from '../types'

/**
 *
 * @param target
 */
export function flipY (target: t): void {
  const { width, height, data: targetData } = target
  const sourceData = targetData.slice()

  for (let row = 0; row < height; row++) {
    const opposingRow = (height - 1) - row

    for (let col = 0; col < width; col++) {
      targetData[row * width + col] = sourceData[opposingRow * width + col]
    }
  }
}
