/** @flow */
import type { $TypedArrayConstructor } from '../types'

/**
 *
 * @param Constructor
 * @param fill
 * @param width
 * @param height
 * @returns {{width: number, height: number, data: $TypedArrayConstructor}}
 */
export function build (Constructor: $TypedArrayConstructor, fill: ?number, width: number, height: number) {
  const data = new Constructor(width * height)
  if (fill !== null && fill !== undefined) data.fill(fill)
  return { width, height, data }
}
