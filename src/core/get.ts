import { BaseGet } from "../types"

export const get: BaseGet = (obj, path) => {
    if (!path.length) {
        return obj
    }
    const slicedPath = path.slice(1)
    const resolved =
        typeof path[0] === "function" ? path[0](obj as any) : path[0]

    return resolved == null
        ? undefined
        : Array.isArray(resolved)
        ? resolved.map((idx) =>
              obj != null ? get(obj[idx], slicedPath) : undefined
          )
        : obj != null
        ? get(obj[resolved], slicedPath)
        : undefined
}
