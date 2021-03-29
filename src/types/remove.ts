import { Key, PH } from "./common"

export interface Remove {
    <K1 extends Key>(key1: K1):
        <T extends PH<K1, unknown>>(obj: T) =>
            T

    <K1 extends Key, K2 extends Key>(key1: K1, key2: K2):
        <T extends PH<K1, PH<K2, unknown>>>(obj: T) =>
            T

    <K1 extends Key, K2 extends Key, K3 extends Key>(key1: K1, key2: K2, key3: K3):
        <T extends PH<K1, PH<K2, PH<K3, unknown>>>>(obj: T) =>
            T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, unknown>>>>>(obj: T) =>
            T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, unknown>>>>>>(obj: T) =>
            T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, unknown>>>>>>>(obj: T) =>
            T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key, K7 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, PH<K7, unknown>>>>>>>>(obj: T) =>
            T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key, K7 extends Key, K8 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7, key8: K8):
        <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, PH<K7, PH<K8, unknown>>>>>>>>>(obj: T) =>
            T

    (...keys: Key[]): <T extends { [key: string]: unknown } | unknown[]>(obj: T) => T
}

export type BaseRemove = <T>(obj: T, path: Key[]) => T
