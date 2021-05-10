import { PathItem, BuildTypeFromPathOptional, GetTypeAtPath, GetKeys, GetIndexes } from "./common"

type FixArrayKey<T, K extends PathItem> = K extends number[] | GetIndexes | string[] | GetKeys ? T[] : T

type FixArrayPath<T, Keys extends readonly PathItem[]> = Keys extends [infer K, ...infer Rest]
    ? FixArrayPath<FixArrayKey<T, K>, Rest>
    : T


export interface Get {
    <Keys extends readonly [PathItem, ...PathItem[]]>(...keys: Keys):
        <T extends BuildTypeFromPathOptional<unknown, Keys>>(obj: T) =>
            FixArrayPath<GetTypeAtPath<T, Keys>, Keys>
}

export type _Get = (obj: any, path: readonly PathItem[]) => unknown
