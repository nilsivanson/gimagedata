/** @flow */
import type { t } from '../types'
import { flipY } from './flipY'
import { center } from '../calculations/center'

/**
 *
 * @param target
 */
export function fixYAsymmetry (target: t): void {
  if (center(target).y + 1 > target.height / 2) return
  flipY(target)
}
