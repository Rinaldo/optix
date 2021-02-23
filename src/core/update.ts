import { BaseUpdate } from "../types"

export const update: BaseUpdate = (obj, path, updater) => {
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
    // check for invalid path, prevents unexpected behavior if find return -1 or undefined
    if (keysToUpdate[0] == null || keysToUpdate[0] === -1) {
        return obj
    }
    const treatObjAsArray = typeof keysToUpdate[0] === "number"
    const newObj: any =
        obj && typeof obj === "object"
            ? treatObjAsArray
                ? (obj as any[]).slice(0)
                : { ...obj }
            : treatObjAsArray
            ? []
            : {}

    for (let i = 0; i < keysToUpdate.length; i++) {
        newObj[keysToUpdate[i]] = update(
            newObj[keysToUpdate[i]],
            slicedPath,
            updater
        )
    }
    return newObj
}
