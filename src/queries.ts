type Predicate<T> = (item: T) => unknown
type UnwrapArray<T> = T extends Array<infer U> ? U : T

export const all = (arr: any[]): number[] => arr.map((_, i) => i)

export const keys: (obj: { [key: string]: any }) => string[] = Object.keys

export const at = (index: number) => (arr: any[]): number => index < 0 ? arr.length + index : index

export const find = <T extends any[]>(predicate: Predicate<UnwrapArray<T>>) => (arr: T): number | undefined => {
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) return i
    }
}

export const findByKey = <T extends { [key: string]: any }>(predicate: Predicate<Extract<keyof T, string>>) => (obj: T): string | undefined => {
    for (let i = 0, keys = Object.keys(obj); i < keys.length; i++) {
        if (predicate(keys[i] as any)) return keys[i]
    }
}

export const findByVal = <T extends { [key: string]: any }>(predicate: Predicate<T[keyof T]>) => (obj: T): string | undefined => findByKey<T>(key => predicate(obj[key]))(obj)

export const filter = <T extends any[]>(predicate: Predicate<UnwrapArray<T>>) => (arr: T): number[] => {
    const filtered: number[] = []
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) filtered.push(i)
    }
    return filtered
}

export const filterByKey = <T extends { [key: string]: any }>(predicate: Predicate<Extract<keyof T, string>>) => (obj: T): string[] => {
    const filtered: string[] = []
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        if (predicate(keys[i] as any)) filtered.push(keys[i])
    }
    return filtered
}

export const filterByVal = <T extends { [key: string]: any }>(predicate: Predicate<T[keyof T]>) => (obj: T): string[] => filterByKey<T>(key => predicate(obj[key]))(obj)
