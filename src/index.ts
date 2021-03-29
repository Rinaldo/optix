import { Get, Set, Update, Remove } from './types'
import { get as _get, set as _set, update as _update, remove as _remove } from './core'
export { _get, _set, _update, _remove }

export const get: Get = (...path: any[]) => (obj: any) => _get(obj, path) as any
export const set: Set = (...path: any[]) => (value: any) => (obj: any) => _set(obj, path, value) as any
export const update: Update = (...path: any[]) => (updater: (o: any) => any) => (obj: any) => _update(obj, path, updater) as any
export const remove: Remove = (...path: any[]) => (obj: any) => _remove(obj, path) as any

export * from './queries'
