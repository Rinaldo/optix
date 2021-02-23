import { BaseRemove } from "../types"

export const remove: BaseRemove = (obj, path) => {
    if (!path.length || !obj || typeof obj !== "object") {
        return obj
    }
    const resolved =
        typeof path[0] === "function" ? path[0](obj as any) : path[0]
    const keysToRemove =
        typeof resolved === "string" || typeof resolved === "number"
            ? [resolved]
            : Array.isArray(resolved)
            ? resolved
            : []
    // check for invalid path
    if (keysToRemove[0] == null || keysToRemove[0] === -1) {
        return obj
    }
    if (path.length === 1) {
        let newObj
        if (Array.isArray(obj)) {
            const keySet = new Set(keysToRemove)
            newObj = []
            for (let i = 0; i < obj.length; i++) {
                if (!keySet.has(i)) {
                    newObj.push(obj[i])
                }
            }
        } else {
            newObj = { ...obj }
            for (let i = 0; i < keysToRemove.length; i++) {
                delete newObj[keysToRemove[i]]
            }
        }
        return newObj
    } else {
        const slicedPath = path.slice(1)
        const newObj = Array.isArray(obj) ? obj.slice(0) : { ...obj }
        for (let i = 0; i < keysToRemove.length; i++) {
            const keyToRemove = keysToRemove[i]
            if ({}.hasOwnProperty.call(newObj, keyToRemove)) {
                newObj[keyToRemove] = remove(newObj[keyToRemove], slicedPath)
            }
        }
        return newObj
    }
}
