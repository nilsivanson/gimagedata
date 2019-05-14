/** @flow */
export type $TypedArrayConstructor = typeof Uint8ClampedArray |
  typeof Uint8Array |
  typeof Uint16Array |
  typeof Uint32Array |
  typeof Int8Array |
  typeof Int16Array |
  typeof Int32Array |
  typeof Float32Array |
  typeof Float64Array

export type $TypedArray = Uint8ClampedArray |
  Uint8Array |
  Uint16Array |
  Uint32Array |
  Int8Array |
  Int16Array |
  Int32Array |
  Float32Array |
  Float64Array

export interface t {
  width: number,
  height: number,
  data: $TypedArray
}

export interface ImageDataLike {
  width: number,
  height: number,
  data: number[] | $TypedArray
}
