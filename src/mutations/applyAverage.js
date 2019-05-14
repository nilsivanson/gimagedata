/** @flow */
import type { t } from '../types'

/**
 *
 * @param sources
 * @param target
 */
export function applyAverage (sources: t[], target: t): void {
  const source = sources[0]
  if (!source || sources.length === 0) return
  if (sources.length === 1) {
    target.data.set(source.data, 0)
    return
  }

  const quantity = sources.length
  const width = source.width
  const height = source.height
  const pointsLength = width * height

  let matrixIndex
  let pointIndex
  let currentSum

  for (pointIndex = 0; pointIndex < pointsLength; pointIndex++) {
    currentSum = 0
    for (matrixIndex = 0; matrixIndex < quantity; matrixIndex++) {
      currentSum += sources[matrixIndex].data[pointIndex]
    }

    target.data[pointIndex] = currentSum / quantity
  }
}
