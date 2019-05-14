/** @flow */
import type { t } from '../types'

/**
 *
 * @param filter
 * @param targets
 */
export function applyFilterMultiple (filter: t, targets: t[]): void {
  const width = filter.width
  const height = filter.height
  const whitePoints = [] // growing array

  let pointIndex
  for (pointIndex = 0; pointIndex < (width * height); pointIndex++) {
    if (filter.data[pointIndex] === 255) whitePoints.push(pointIndex)
  }

  // no changes if no white points where found
  if (whitePoints.length === 0) return

  let targetIndex
  let target, targetData
  for (targetIndex = 0; targetIndex < targets.length; targetIndex++) {
    target = targets[targetIndex]
    targetData = target.data

    for (pointIndex = 0; pointIndex < whitePoints.length; pointIndex++) {
      targetData[whitePoints[pointIndex]] = 255
    }
  }
}
