/** @flow */
import { type t } from '../types'

/**
 *
 * @param fn
 * @param start
 * @param source
 * @returns {T}
 */
export function reduce<T> (fn: (acc: *, corePoint: number, row: number, column: number, matrix: t) => T, start: T, source: t): T {
  let row: number
  let col: number
  let current = start

  // new style source with Uint8ClampedArray
  for (row = 0; row < source.height; row++) {
    for (col = 0; col < source.width; col++) {
      current = fn(current, source.data[(row * source.width) + col], row, col, source)
    }
  }

  return current
}
