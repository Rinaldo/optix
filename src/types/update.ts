// This file is generated. Do not edit. See scripts/typegen.js

import { NumOrGetter, NumsOrGetter, StrGetter, StrsOrGetter, ValueOf } from "./common"

export interface Update {
	<K1 extends string>(key1: K1): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U }>(object: T) => T

	(key1: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }>(object: T) => T

	(key1: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }>(object: T) => T

	(key1: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[]>(object: T) => T

	(key1: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[]>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[] }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: U } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[] } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][] }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[] } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[] } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[] }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[] }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: U[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: U[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: U }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: U }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: U } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: U } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: U } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: U } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K2]?: U[][][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key in K5]?: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: { [key: string]: U }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K1]?: U[][][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: U[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: { [key: string]: U }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K2]?: U[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: U }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K3]?: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key in K5]?: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: { [key: string]: U }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K2]?: U[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: { [key: string]: U }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K3]?: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: U } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K4]?: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: U } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key in K5]?: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: { [key: string]: U }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K3]?: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: { [key: string]: U } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K4]?: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key in K5]?: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: { [key: string]: U } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key in K5]?: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: { [key: string]: U } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key in K4]?: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key in K5]?: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: { [key: string]: U } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <U>(updater: (curr: U) => U) => <T extends { [key in K5]?: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <U>(updater: (curr: U) => U) => <T extends { [key: string]: U }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <U>(updater: (curr: U) => U) => <T extends U[][][][][]>(object: T) => T

	(...path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): <V>(updater: (item: V) => V) => <T extends { [key: string]: unknown } | unknown[]>(object: T) => T
}

export interface BaseUpdate {
	<T extends { [key: string]: unknown } | unknown[], V>(object: T, path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[], updater: (value: V) => V): T
}
