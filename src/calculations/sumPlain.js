/** @flow */
import type { t } from '../types'

/**
 *
 * @param source
 * @returns {number}
 */
export function sumPlain (source: t): number {
  const { width, height, data } = source

  let x
  let y
  let sum = 0

  for (x = 0; x < width; x++) {
    for (y = 0; y < height; y++) {
      sum += data[(y * width) + x]
    }
  }

  return sum
}
