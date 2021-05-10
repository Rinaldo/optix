import { BuildTypeFromPath, BuildTypeFromPathOptional, GetTypeAtPath, MergeRightWthDepth, PartialIfObject, PathItem } from "./common"

export interface Set {
    <Keys extends readonly [PathItem, ...PathItem[]]>(...keys: Keys):
        <U>(update: U) =>
            <T extends BuildTypeFromPathOptional<PartialIfObject<U>, Keys>>(obj: T) =>
                U extends GetTypeAtPath<T, Keys> ? T : unknown
}

export interface PolySet {
    <Keys extends readonly [PathItem, ...PathItem[]]>(...keys: Keys):
        <U>(update: U) =>
            <T>(obj: T) =>
                Keys extends [infer _, ...infer Rest] ? MergeRightWthDepth<T, BuildTypeFromPath<PartialIfObject<U>, Keys>, Rest> : U
}

export type _Set = <T>(obj: T, path: readonly PathItem[], update: any) => T
