// This file is generated. Do not edit. See scripts/typegen.js

import { NumOrGetter, NumsOrGetter, StrGetter, StrsOrGetter, ValueOf } from "./common"

export interface Set {
	<K1 extends string>(key1: K1): <V>(value: V) => <T extends { [key in K1]?: V }>(object: T) => T

	(key1: StrGetter): <V>(value: V) => <T extends { [key: string]: V }>(object: T) => T

	(key1: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }>(object: T) => T

	(key1: NumOrGetter): <V>(value: V) => <T extends V[]>(object: T) => T

	(key1: NumsOrGetter): <V>(value: V) => <T extends V[]>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[] }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2): <V>(value: V) => <T extends { [key in K2]?: V }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter): <V>(value: V) => <T extends V[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter): <V>(value: V) => <T extends V[][]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2): <V>(value: V) => <T extends { [key in K2]?: V }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter): <V>(value: V) => <T extends V[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter): <V>(value: V) => <T extends V[][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[] } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[] } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[] } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K4 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K5 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string>(key1: K1, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][][] } }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K3 extends string>(key1: K1, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[][] }[] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K4 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K4 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V[] }[][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K5 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K1]?: { [key: string]: V }[][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string>(key1: K1, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K3 extends string>(key1: StrsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[][] } } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K4 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V[] }[] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string, K5 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: { [key: string]: V }[][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K2 extends string>(key1: StrsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K2]?: V[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V[] } } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: { [key: string]: V }[] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K3]?: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K4]?: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V[] } } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V }[] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[][] } } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] }[] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	(key1: StrsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][][] } }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K3 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] }[] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K4 extends string, K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K4 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K5 extends string>(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	(key1: StrsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][][] }>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K3 extends string>(key1: NumsOrGetter, key2: K2, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[][] } }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K4 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V[] }[] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string, K5 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K2]?: { [key: string]: V }[][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K2 extends string>(key1: NumsOrGetter, key2: K2, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V[] } } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: { [key: string]: V }[] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: { [key: string]: V } } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key in K5]?: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: { [key: string]: V } } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V[] } } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V }[] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[][] } }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] }[] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	(key1: NumsOrGetter, key2: StrsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][][] }[]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K3 extends string, K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V[] } }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K3]?: { [key: string]: V }[] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K3 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: K3, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: { [key: string]: V } } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key in K5]?: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: { [key: string]: V } } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V[] } }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V }[] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: StrsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[][] }[][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K4 extends string, K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: StrsOrGetter): <V>(value: V) => <T extends { [key in K4]?: { [key: string]: V } }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K4 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: K4, key5: NumsOrGetter): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: K5): <V>(value: V) => <T extends { [key: string]: { [key in K5]?: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: { [key: string]: V } }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: StrsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends { [key: string]: V[] }[][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K5 extends string>(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: StrsOrGetter): <V>(value: V) => <T extends { [key: string]: V }[][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(key1: NumsOrGetter, key2: NumsOrGetter, key3: NumsOrGetter, key4: NumsOrGetter, key5: NumsOrGetter): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	(...path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): <V>(value: V) => <T extends { [key: string]: unknown } | unknown[]>(object: T) => T
}

export interface BaseSet {
	<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[], value: any): T
}
