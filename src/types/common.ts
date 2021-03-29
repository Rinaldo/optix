export type GetKey = (map: { [key: string]: any }) => string | undefined
export type GetKeys = (map: { [key: string]: any }) => string[]
export type GetIndex = (arr: any[]) => number | undefined
export type GetIndexes = (arr: any[]) => number[]

// PathItem in docs
export type Key = string | number | string[] | number[] | GetKey | GetIndex | GetKeys | GetIndexes

// PathHelper
export type PH<K extends Key, T> = K extends string ? { [key in K]?: T }
    : K extends number | number[] | GetIndex | GetIndexes ? T[]
    : K extends string[] | GetKey | GetKeys ? { [key: string]: T }
    : never
