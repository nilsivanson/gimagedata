/** @flow */
import { type t } from '../types'

/**
 *
 * @param sources
 * @param target
 */
export function union (sources: t[], target: t): void {
  const quantity = sources.length

  if (quantity === 0) return

  const { width, height } = target
  let row
  let col
  let positionIndex
  let matrixIndex
  let sum

  for (row = 0; row < height; row++) {
    for (col = 0; col < width; col++) {
      positionIndex = (row * width) + col
      sum = 255
      for (matrixIndex = 0; matrixIndex < quantity; matrixIndex++) {
        sum -= 255 - sources[matrixIndex].data[positionIndex]
      }

      target.data[positionIndex] = sum
    }
  }
}
