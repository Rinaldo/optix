import { Get, Set, Update, Remove, PolySet, PolyUpdate, PolyRemove } from "./types"
import { _get, _set, _update, _remove } from "./core"
export * from "./core"

export const get: Get = (...path: readonly any[]) => (obj: any) => _get(obj, path) as any
export const set: Set = (...path: readonly any[]) => (value: any) => (obj: any) => _set(obj, path, value) as any
export const update: Update = (...path: readonly any[]) => (updater: (o: any) => any) => (obj: any) => _update(obj, path, updater) as any
export const remove: Remove = (...path: readonly any[]) => (obj: any) => _remove(obj, path) as any

export const polySet = set as PolySet
export const polyUpdate = update as PolyUpdate
export const polyRemove = remove as PolyRemove

export * from "./queries"
