import { BuildTypeFromPath, BuildTypeFromPathOptional, GetTypeAtPath, MergeRightWthDepth, PathItem } from "./common"

type IfElse<B extends boolean, If, Else> = B extends true ? If : Else

// does not work with index types
type OptionalKeys<T> = { [K in keyof T]-?: Record<string, unknown> extends Pick<T, K> ? K : never }[keyof T];
type IsOptional<T, K extends string> = string extends keyof T // all keys are optional in an index type
    ? true
    : [OptionalKeys<T>] extends [never] // if no optional keys in type, false
    ? false
    : K extends OptionalKeys<T>
    ? true
    : false

type IsRemovable<T, K extends PathItem> = Exclude<T, undefined> extends any[] // optional arrays are typed as any[] | undefined
    ? true
    : string extends keyof T // isIndexed
    ? true
    : K extends string
    ? IsOptional<T, K>
    : false

export interface Remove {
    <Keys extends readonly [PathItem, ...PathItem[]]>(...keys: Keys):
            <T extends BuildTypeFromPathOptional<unknown, Keys>>(obj: T) =>
                Keys extends [...infer Sliced, infer Last] ? IfElse<
                    IsRemovable<GetTypeAtPath<T, Sliced>, Last>,
                    T,
                    unknown
                > : T
}

export interface PolyRemove {
    <Keys extends readonly [PathItem, ...PathItem[]]>(...keys: Keys):
            <T>(obj: T) =>
                Keys extends [infer _, ...infer Rest] ? MergeRightWthDepth<T, BuildTypeFromPath<never, Keys>, Rest> : T
}

export type _Remove = <T>(obj: T, path: readonly PathItem[]) => T
