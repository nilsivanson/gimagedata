/** @flow */
import type { t } from '../types'

/**
 *
 * @param source
 * @returns {number}
 */
export function sumNonWhite (source: t): number {
  const { width, height, data } = source
  let sum = 0

  let index
  for (index = 0; index < (width * height); index++) {
    if (data[index] !== 255) sum += 1
  }

  return sum
}
