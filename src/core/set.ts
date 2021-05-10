import { _Set } from "../types"
import { _update } from "./update"

export const _set: _Set = (object: any, path: readonly any[], value: any) =>
    _update(object, path, () => value)
