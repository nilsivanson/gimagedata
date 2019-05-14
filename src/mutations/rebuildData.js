/** @flow */
import type { $TypedArrayConstructor, t } from '../types'

/**
 *
 * @param Constructor
 * @param fill
 * @param target
 */
export function rebuildData (Constructor: $TypedArrayConstructor, fill: ?number, target: t): void {
  if (target.data instanceof Constructor) return
  target.data = new Constructor(target.width * target.height)
  if (fill === null || fill === undefined) return
  target.data.fill(fill)
}
