/** @flow */
import type { t } from '../types'
import { reduce } from '../utils/reduce'

type IntersectionObject = {
  first: number,
  second: number,
  intersection: number
}

/**
 *
 * @param first
 * @param second
 * @returns {T}
 */
export function intersection (first: t, second: t): IntersectionObject {
  const width = second.width

  return reduce((acc: IntersectionObject, curr, row, col): IntersectionObject => {
    // if both are black we have intersection
    if (curr === 0 && second.data[(row * width) + col] === 0) {
      acc.intersection = acc.intersection + 1
      return acc
    }

    // now we only have to check 1 at a time
    if (second.data[col + row * width] !== 0 && curr === 0) {
      acc.first = acc.first + 1
      return acc
    }

    if (second.data[col + row * width] === 0 && curr !== 0) {
      acc.second = acc.second + 1
      return acc
    }

    return acc
  }, { first: 0, second: 0, intersection: 0 }, first)
}
