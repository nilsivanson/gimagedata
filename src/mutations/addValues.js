/** @flow */
import type { t } from '../types'

/**
 *
 * @param sources
 * @param target
 */
export function addValues (sources: t[], target: t): void {
  if (sources.length === 0) return

  const { width, height, data } = target

  let x
  let y
  let pos
  let index
  let matrixData

  for (index = 0; index < sources.length; index++) {
    matrixData = sources[index].data
    for (x = 0; x < width; x++) {
      for (y = 0; y < height; y++) {
        pos = (y * width) + x
        data[pos] += matrixData[pos]
      }
    }
  }
}
