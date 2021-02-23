import { Get, Set, Update, Remove } from './types'
import { get as _get, set as _set, update as _update, remove as _remove } from './core'

export const get: Get = (...path) => (obj) => _get(obj, path)
export const set: Set = (...path) => (value) => (obj) => _set(obj, path, value) as any
export const update: Update = (...path) => (updater) => (obj) => _update(obj, path, updater) as any
export const remove: Remove = (...path) => (obj) => _remove(obj, path) as any

export * from './queries'
