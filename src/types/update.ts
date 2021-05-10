import { BuildTypeFromPath, BuildTypeFromPathOptional, GetTypeAtPath, MergeRightWthDepth, PartialIfObject, PathItem } from "./common"

export interface Update {
    <Keys extends readonly [PathItem, ...PathItem[]]>(...keys: Keys):
        <U>(updater: (curr: U) => U) =>
            <T extends BuildTypeFromPathOptional<PartialIfObject<U>, Keys>>(obj: T) =>
                U extends GetTypeAtPath<T, Keys> ? T : unknown
}

export interface PolyUpdate {
    <Keys extends readonly [PathItem, ...PathItem[]]>(...keys: Keys):
        <U>(updater: (curr: any) => U) =>
            <T>(obj: T) =>
                Keys extends [infer _, ...infer Rest] ? MergeRightWthDepth<T, BuildTypeFromPath<PartialIfObject<U>, Keys>, Rest> : U
}

export type _Update = <T, U>(obj: T, path: readonly PathItem[], update: (curr: U) => U) => T
