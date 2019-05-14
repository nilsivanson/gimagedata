/** @flow */
import type { t } from '../types'

/**
 *
 * @param source
 * @returns {*}
 */
export function clone (source: t): t {
  const data = source.data ? source.data.slice() : source.data // support for building without data
  return Object.assign({}, source, { data })
}
