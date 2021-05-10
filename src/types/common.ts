export type GetKey = (map: { [key: string]: any }) => string | undefined
export type GetKeys = (map: { [key: string]: any }) => string[]
export type GetIndex = (arr: any[]) => number | undefined
export type GetIndexes = (arr: any[]) => number[]

export type PathItem = string | number | string[] | number[] | GetKey | GetIndex | GetKeys | GetIndexes

export type Id<T> = T extends infer U ? { [K in keyof U]: U[K] } : never
export type ValueOf<T> = T[keyof T]
export type Unarray<T> = T extends Array<infer U> ? U : T
export type PartialIfObject<T> = T extends { [key: string]: any } ? Partial<T> : T

export type WrapType<T, K extends PathItem> = K extends string ? { [key in K]: T }
    : K extends number | number[] | GetIndex | GetIndexes ? T[]
    : K extends GetKey | string[] | GetKeys ? { [key: string]: T }
    : never

export type WrapTypeOptional<T, K extends PathItem> = K extends string ? { [key in K]?: T }
    : K extends number | number[] | GetIndex | GetIndexes ? T[]
    : K extends GetKey | string[] | GetKeys ? { [key: string]: T }
    : never

export type UnwrapType<T, K extends PathItem> = K extends string ? T[K]
    : K extends number | GetIndex | number[] | GetIndexes ? Unarray<T>
    : K extends GetKey | string[] | GetKeys ? ValueOf<T>
    : never

export type BuildTypeFromPath<T, Keys extends readonly PathItem[]> = Keys extends [infer K, ...infer Rest]
    ? WrapType<BuildTypeFromPath<T, Rest>, K>
    : T

export type BuildTypeFromPathOptional<T, Keys extends readonly PathItem[]> = Keys extends [infer K, ...infer Rest]
    ? WrapTypeOptional<BuildTypeFromPathOptional<T, Rest>, K>
    : T

export type GetTypeAtPath<T, Keys extends readonly PathItem[]> = Keys extends [infer K, ...infer Rest]
    ? GetTypeAtPath<UnwrapType<T, K>, Rest>
    : T

export type NonNeverKeys<T extends { [key: string]: any }> = { [K in keyof T]: T[K] extends never ? never : K }[keyof T]
export type FilterNeverKeys<T extends { [key: string]: any }> = { [K in NonNeverKeys<T>]: T[K] }

export type MergeRightWthDepth<L, R, Depth extends any[]> = R extends any[]
    ? L extends any[]
        ? Depth extends [infer _, ...infer Rest]
            ? MergeRightWthDepth<Unarray<L>, Unarray<R>, Rest>[]
            : (Unarray<L> | Unarray<R>)[]
        : R
    : string extends keyof R
        ? string extends keyof L
            ? Depth extends [infer _, ...infer Rest]
                ? { [key: string]: MergeRightWthDepth<ValueOf<L>, ValueOf<R>, Rest> }
                : { [key: string]: (ValueOf<L> | ValueOf<R>) }
            : L extends { [key: string]: any }
                ? { [key: string]: (ValueOf<L> | ValueOf<R>) }
                : R
    : R extends { [key: string]: any }
        ? L extends { [key: string]: any }
            ? Id<
                Pick<L, Exclude<keyof L, keyof R>> &
                Pick<R, Exclude<keyof R, keyof L>> &
                FilterNeverKeys<{
                    [K in keyof L & keyof R]: Depth extends [infer _, ...infer Rest]
                        ? MergeRightWthDepth<L[K], R[K], Rest>
                        : R[K]
                }>
            >
            : R
    : R
