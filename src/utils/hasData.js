/** @flow */
import type { t } from '../types'

/**
 *
 * @param source
 * @returns {boolean}
 */
export function hasData (source: t): boolean {
  return Boolean(source.data)
}
