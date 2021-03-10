// This file is generated. Do not edit. See scripts/typegen.js

export type NumOrGetter = number | ((arr: any[]) => number | undefined)
export type NumsOrGetter = number[] | ((arr: any[]) => number[])
export type StrGetter = (map: { [key: string]: any }) => string
export type StrsOrGetter = string[] | ((map: { [key: string]: any }) => string[])
export type ValueOf<T> = T[keyof T]
