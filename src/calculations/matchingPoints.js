/** @flow */
import { type t } from '../types'

/**
 *
 * @param match
 * @param source
 * @returns {number[]}
 */
export function matchingPoints (match: number, source: t): number[] {
  const { width, height, data } = source
  const whitePoints: number[] = [] // growing array

  let pointIndex: number
  for (pointIndex = 0; pointIndex < (width * height); pointIndex++) {
    if (data[pointIndex] === match) {
      whitePoints.push(pointIndex)
    }
  }

  return whitePoints
}
