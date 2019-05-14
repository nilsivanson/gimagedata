/** @flow */
import { type t } from '../types'

/**
 *
 * @param points
 * @param value
 * @param target
 */
export function setPoints (points: number[], value: number, target: t): void {
  for (let index = 0; index < points.length; index++) {
    target.data[points[index]] = value
  }
}
