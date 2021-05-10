import { _Get } from "../types"

export const _get: _Get = (obj: any, path: readonly any[]) => {
    if (!path.length) {
        return obj
    }
    const slicedPath = path.slice(1)
    const resolved =
        typeof path[0] === "function" ? path[0](obj as any) : path[0]

    return Array.isArray(resolved)
        ? (resolved as any[]).map((idx) =>
              obj != null ? _get(obj[idx], slicedPath) : undefined
          )
        : obj != null
        ? _get(obj[resolved], slicedPath)
        : undefined
}
