import { _Update } from "../types"

export const _update: _Update = (
    obj: any,
    path: readonly any[],
    updater: (arg: any) => any
) => {
    if (!path.length) {
        return updater(obj as any)
    }
    const slicedPath = path.slice(1)
    const resolved =
        typeof path[0] === "function" ? path[0](obj as any) : path[0]
    const keysToUpdate =
        typeof resolved === "string" || typeof resolved === "number"
            ? [resolved]
            : Array.isArray(resolved)
            ? resolved
            : []
    // check for invalid path
    const typeofKey0 = typeof keysToUpdate[0]
    if (
        (typeofKey0 !== "string" && typeofKey0 !== "number") ||
        keysToUpdate[0] < 0
    ) {
        return obj
    }
    const treatObjAsArray = typeofKey0 === "number"
    const newObj: any =
        obj && typeof obj === "object"
            ? treatObjAsArray
                ? (obj as any[]).slice(0)
                : { ...obj }
            : treatObjAsArray
            ? []
            : {}

    for (let i = 0; i < keysToUpdate.length; i++) {
        newObj[keysToUpdate[i]] = _update(
            newObj[keysToUpdate[i]],
            slicedPath,
            updater
        )
    }
    return newObj
}
