/** @flow */
import type { t } from '../types'

/**
 *
 * @param width
 * @param height
 * @returns {{width: number, height: number, data: Uint8ClampedArray}}
 */
export function buildWithoutData (width: number, height: number): t {
  // we build with a small data object and then delete it
  // the reason is to satisfy flow
  // suggestions for better solutions are welcome
  const matrix = { width, height, data: new Uint8ClampedArray(0) }
  delete matrix.data
  return matrix
}
