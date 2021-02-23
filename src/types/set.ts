// This file is generated. Do not edit. See scripts/typegen.js

import { Num, Nums } from './common'

export interface Set {
	<K1 extends string>(key1: K1): <V>(value: V) => <T extends { [key in K1]?: V }>(object: T) => T

	<K1 extends Num>(key1: K1): <V>(value: V) => <T extends V[]>(object: T) => T

	<K1 extends Nums>(key1: K1): <V>(value: V) => <T extends V[]>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V } }>(object: T) => T

	<K1 extends string, K2 extends Num>(key1: K1, key2: K2): <V>(value: V) => <T extends { [key in K1]?: V[] }>(object: T) => T

	<K1 extends string, K2 extends Nums>(key1: K1, key2: K2): <V>(value: V) => <T extends { [key in K1]?: V[] }>(object: T) => T

	<K1 extends Num, K2 extends string>(key1: K1, key2: K2): <V>(value: V) => <T extends { [key in K2]?: V }[]>(object: T) => T

	<K1 extends Num, K2 extends Num>(key1: K1, key2: K2): <V>(value: V) => <T extends V[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums>(key1: K1, key2: K2): <V>(value: V) => <T extends V[][]>(object: T) => T

	<K1 extends Nums, K2 extends string>(key1: K1, key2: K2): <V>(value: V) => <T extends { [key in K2]?: V }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num>(key1: K1, key2: K2): <V>(value: V) => <T extends V[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums>(key1: K1, key2: K2): <V>(value: V) => <T extends V[][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K1]?: V[][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K2]?: V[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends { [key in K3]?: V }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <V>(value: V) => <T extends V[][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K1]?: V[][][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K2]?: V[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K3]?: V[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends { [key in K4]?: V }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <V>(value: V) => <T extends V[][][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K1]?: V[][][][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K2]?: V[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K3]?: V[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K4]?: V[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends { [key in K5]?: V }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <V>(value: V) => <T extends V[][][][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: V[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: V[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: V[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: V }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K2]?: V[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: V[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: V[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: V }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K3]?: V[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: V[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: V }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K4]?: V[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: V } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K5]?: V[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: { [key in K6]?: V }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K1]?: V[][][][][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: V[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: V[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: V }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K3]?: V[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: V[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: V }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K4]?: V[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: V } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K5]?: V[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: { [key in K6]?: V }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K2]?: V[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: V[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: V }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K4]?: V[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: V } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K5]?: V[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: { [key in K6]?: V }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K3]?: V[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: V } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K5]?: V[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: { [key in K6]?: V }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K4]?: V[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: { [key in K6]?: V } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K5]?: V[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends { [key in K6]?: V }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <V>(value: V) => <T extends V[][][][][][]>(object: T) => T

	(...path: (string | Num | Nums)[]): <V>(value: V) => <T extends { [key: string]: unknown } | unknown[]>(object: T) => T
}

export interface BaseSet {
	<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | Num | Nums)[], value: any): T
}
