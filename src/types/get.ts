import { Key, PH, GetIndex, GetIndexes, GetKey, GetKeys } from "./common"

export type ValueOf<T> = T[keyof T]
export type UnwrapArray<T> = T extends Array<infer U> ? U : T

// TargetHelper1
export type TH1<T, K extends Key> = K extends string ? T[K]
    : K extends number | GetIndex ? UnwrapArray<T>
    : K extends number[] | GetIndexes ? UnwrapArray<T>
    : K extends GetKey ? ValueOf<T>
    : K extends string[] | GetKeys ? ValueOf<T>
    : never

// TargetHelper2
export type TH2<T, K extends Key> = K extends number[] | GetIndexes | string[] | GetKeys ? T[] : T

export interface Get {
    <K1 extends Key>(key1: K1):
        <T extends PH<K1, unknown>>(obj: T) =>
            TH2<TH1<T, K1>, K1>

    <K1 extends Key, K2 extends Key>(key1: K1, key2: K2):
        <T extends PH<K1, PH<K2, unknown>>>(obj: T) =>
            TH2<TH2<TH1<TH1<T, K1>, K2>, K1>, K2>

    <K1 extends Key, K2 extends Key, K3 extends Key>(key1: K1, key2: K2, key3: K3):
        <T extends PH<K1, PH<K2, PH<K3, unknown>>>>(obj: T) =>
            TH2<TH2<TH2<TH1<TH1<TH1<T, K1>, K2>, K3>, K1>, K2>, K3>

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, unknown>>>>>(obj: T) =>
            TH2<TH2<TH2<TH2<TH1<TH1<TH1<TH1<T, K1>, K2>, K3>, K4>, K1>, K2>, K3>, K4>

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, unknown>>>>>>(obj: T) =>
            TH2<TH2<TH2<TH2<TH2<TH1<TH1<TH1<TH1<TH1<T, K1>, K2>, K3>, K4>, K5>, K1>, K2>, K3>, K4>, K5>

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, unknown>>>>>>>(obj: T) =>
            TH2<TH2<TH2<TH2<TH2<TH2<TH1<TH1<TH1<TH1<TH1<TH1<T, K1>, K2>, K3>, K4>, K5>, K6>, K1>, K2>, K3>, K4>, K5>, K6>

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key, K7 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, PH<K7, unknown>>>>>>>>(obj: T) =>
            TH2<TH2<TH2<TH2<TH2<TH2<TH2<TH1<TH1<TH1<TH1<TH1<TH1<TH1<T, K1>, K2>, K3>, K4>, K5>, K6>, K7>, K1>, K2>, K3>, K4>, K5>, K6>, K7>

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key, K7 extends Key, K8 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7, key8: K8):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, PH<K7, PH<K8, unknown>>>>>>>>>(obj: T) =>
            TH2<TH2<TH2<TH2<TH2<TH2<TH2<TH2<TH1<TH1<TH1<TH1<TH1<TH1<TH1<TH1<T, K1>, K2>, K3>, K4>, K5>, K6>, K7>, K8>, K1>, K2>, K3>, K4>, K5>, K6>, K7>, K8>

    (...keys: Key[]): (obj: { [key: string]: unknown } | unknown[]) => unknown
}

export type BaseGet = (obj: any, path: Key[]) => unknown
