/** @flow */

/**
 *
 * @param first
 * @param count
 * @returns {Array}
 */
export function range (first: number, count: number): number[] {
  // explanation: https://stackoverflow.com/a/18948066/4547973
  // $FlowFixme
  return Array.apply(null, { length: count })
    .map((current, index) => index + first)
}
