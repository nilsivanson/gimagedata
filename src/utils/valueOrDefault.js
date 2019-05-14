/** @flow */
import type { t } from '../types'

/**
 *
 * @param defaultValue
 * @param row
 * @param column
 * @param source
 * @returns {*}
 */
export function valueOrDefault (defaultValue: number, row: number, column: number, source: t): number {
  const { width, height, data } = source
  if (row < 0 || row >= height || column < 0 || column >= width) return defaultValue
  return data[(row * width) + column]
}
