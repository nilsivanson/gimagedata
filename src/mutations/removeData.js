/** @flow */
import type { t } from '../types'

/**
 * if you work with large data fields they can be really heavy to serialize and deserialize with json
 * example use case:
 * save png with bitmap data
 * delete data, serialize json (without data) to the client
 * on the client rebuild the data array
 * fill the data array with data from parsing the bitmap data from another url
 * @param target
 */
export function removeData (target: t): void {
  delete target.data
}
