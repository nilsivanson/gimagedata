/** @flow */
import type { t } from '../types'

/**
 *
 * @param matrix
 * @returns {{x: number, y: number}}
 */
export function center (matrix: t): { x: number, y: number } {
  const width = matrix.width
  const height = matrix.height
  const data = matrix.data

  let xSum = 0
  let ySum = 0
  let points = 0
  let row
  let col

  for (row = 0; row < height; row++) {
    for (col = 0; col < width; col++) {
      if (data[(row * width) + col] !== 255) {
        xSum += col
        ySum += row
        points++
      }
    }
  }

  const xCenter = xSum / points
  const yCenter = ySum / points

  return { x: xCenter, y: yCenter }
}
