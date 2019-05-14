/** @flow */
import type { t } from '../types'

/**
 *
 * @param source
 */
export function outline (source: t) {
  const { width, height } = source
  const oldData = source.data
  const newData = source.data.slice()

  let row
  let col
  let index

  for (row = 0; row < height; row++) {
    for (col = 0; col < width; col++) {
      index = (row * width) + col

      if (oldData[index] === 255) {
        // if it was 255 it should remain 255
        // do nothing
      } else if (row === 0 || col === 0 || (row + 1) === height || (col + 1) === width) {
        // edges are black
        newData[index] = 0
      } else if (oldData[((row - 1) * width) + col] === 255) {
        // if the previous row is dark return 255
        newData[index] = 0
      } else if (oldData[((row + 1) * width) + col] === 255) {
        // if the next row is dark return 255
        newData[index] = 0
      } else if (oldData[(row * width) + (col - 1)] === 255) {
        // if the previous column is dark return 255
        newData[index] = 0
      } else if (oldData[(row * width) + (col + 1)] === 255) {
        // if the next column is 255 return 0
        newData[index] = 0
      } else {
        newData[index] = 255
      }
    }
  }

  source.data.set(newData, 0)
}
