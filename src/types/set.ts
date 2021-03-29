import { Key, PH } from "./common"

export interface Set {
    <K1 extends Key>(key1: K1):
        <U>(update: U) =>
            <T extends PH<K1, U>>(obj: T) =>
                T

    <K1 extends Key, K2 extends Key>(key1: K1, key2: K2):
        <U>(update: U) =>
            <T extends PH<K1, PH<K2, U>>>(obj: T) =>
                T

    <K1 extends Key, K2 extends Key, K3 extends Key>(key1: K1, key2: K2, key3: K3):
        <U>(update: U) =>
            <T extends PH<K1, PH<K2, PH<K3, U>>>>(obj: T) =>
                T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4):
        <U>(update: U) =>
            <T extends PH<K1, PH<K2, PH<K3, PH<K4, U>>>>>(obj: T) =>
                T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5):
        <U>(update: U) =>
            <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, U>>>>>>(obj: T) =>
                T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6):
        <U>(update: U) =>
            <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, U>>>>>>>(obj: T) =>
                T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key, K7 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7):
        <U>(update: U) =>
            <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, PH<K7, U>>>>>>>>(obj: T) =>
                T

    <K1 extends Key, K2 extends Key, K3 extends Key, K4 extends Key, K5 extends Key, K6 extends Key, K7 extends Key, K8 extends Key>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6, key7: K7, key8: K8):
        <U>(update: U) =>
            <T extends PH<K1, PH<K2, PH<K3, PH<K4, PH<K5, PH<K6, PH<K7, PH<K8, U>>>>>>>>>(obj: T) =>
                T

    (...keys: Key[]): (update: unknown) => <T extends { [key: string]: unknown } | unknown[]>(obj: T) => T
}

export type BaseSet = <T>(obj: T, path: Key[], update: any) => T
