// This file is generated. Do not edit. See scripts/typegen.js

import { Num, Nums } from './common'

export interface Remove {
	<K1 extends string>(key1: K1): <T extends { [key in K1]?: unknown }>(object: T) => T

	<K1 extends Num>(key1: K1): <T extends unknown[]>(object: T) => T

	<K1 extends Nums>(key1: K1): <T extends unknown[]>(object: T) => T

	<K1 extends string, K2 extends string>(key1: K1, key2: K2): <T extends { [key in K1]?: { [key in K2]?: unknown } }>(object: T) => T

	<K1 extends string, K2 extends Num>(key1: K1, key2: K2): <T extends { [key in K1]?: unknown[] }>(object: T) => T

	<K1 extends string, K2 extends Nums>(key1: K1, key2: K2): <T extends { [key in K1]?: unknown[] }>(object: T) => T

	<K1 extends Num, K2 extends string>(key1: K1, key2: K2): <T extends { [key in K2]?: unknown }[]>(object: T) => T

	<K1 extends Num, K2 extends Num>(key1: K1, key2: K2): <T extends unknown[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums>(key1: K1, key2: K2): <T extends unknown[][]>(object: T) => T

	<K1 extends Nums, K2 extends string>(key1: K1, key2: K2): <T extends { [key in K2]?: unknown }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num>(key1: K1, key2: K2): <T extends unknown[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums>(key1: K1, key2: K2): <T extends unknown[][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: { [key in K2]?: unknown[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: { [key in K2]?: unknown[] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: { [key in K3]?: unknown }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: unknown[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: unknown[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: { [key in K3]?: unknown }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: unknown[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends { [key in K1]?: unknown[][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K2]?: { [key in K3]?: unknown } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends { [key in K2]?: unknown[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends { [key in K2]?: unknown[] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K3]?: unknown }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K3]?: unknown }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K2]?: { [key in K3]?: unknown } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends { [key in K2]?: unknown[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends { [key in K2]?: unknown[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K3]?: unknown }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string>(key1: K1, key2: K2, key3: K3): <T extends { [key in K3]?: unknown }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums>(key1: K1, key2: K2, key3: K3): <T extends unknown[][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: unknown[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: unknown[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: unknown[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K2]?: unknown[][] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K3]?: unknown[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K3]?: unknown[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K4]?: unknown }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K4]?: unknown }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K3]?: unknown[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K3]?: unknown[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K4]?: unknown }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: { [key in K4]?: unknown }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K1]?: unknown[][][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K3]?: unknown[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K3]?: unknown[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K4]?: unknown }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K4]?: unknown }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: { [key in K4]?: unknown } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: { [key in K4]?: unknown } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K3]?: unknown[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K3]?: unknown[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K4]?: unknown }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: { [key in K4]?: unknown }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K2]?: unknown[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: { [key in K4]?: unknown } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: { [key in K4]?: unknown } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K3]?: unknown[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends { [key in K4]?: unknown }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4): <T extends unknown[][][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K2]?: unknown[][][] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K3]?: unknown[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K4]?: unknown[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: { [key in K5]?: unknown }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K1]?: unknown[][][][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K3]?: unknown[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K4]?: unknown[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: { [key in K5]?: unknown }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K2]?: unknown[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K4]?: unknown[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: { [key in K5]?: unknown }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K3]?: unknown[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: { [key in K5]?: unknown } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K4]?: unknown[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends { [key in K5]?: unknown }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5): <T extends unknown[][][][][]>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K3]?: unknown[][][] } } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K4]?: unknown[][] }[] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K5]?: unknown[] }[][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: { [key in K6]?: unknown }[][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K2]?: unknown[][][][] } }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K4]?: unknown[][] } }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K5]?: unknown[] }[] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: { [key in K6]?: unknown }[][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K3]?: unknown[][][] }[] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K5]?: unknown[] } }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: { [key in K6]?: unknown }[] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K4]?: unknown[][] }[][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: { [key in K6]?: unknown } }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K5]?: unknown[] }[][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: { [key in K6]?: unknown }[][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends string, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K1]?: unknown[][][][][] }>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Num, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K4]?: unknown[][] } } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K5]?: unknown[] }[] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: { [key in K6]?: unknown }[][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K3]?: unknown[][][] } }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K5]?: unknown[] } }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: { [key in K6]?: unknown }[] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K4]?: unknown[][] }[] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: { [key in K6]?: unknown } }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K5]?: unknown[] }[][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: { [key in K6]?: unknown }[][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends string, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K2]?: unknown[][][][] }[]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Num, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K5]?: unknown[] } } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: { [key in K6]?: unknown }[] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K4]?: unknown[][] } }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: { [key in K6]?: unknown } }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K5]?: unknown[] }[] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: { [key in K6]?: unknown }[][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends string, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K3]?: unknown[][][] }[][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Num, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: { [key in K6]?: unknown } } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K5]?: unknown[] } }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: { [key in K6]?: unknown }[] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends string, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K4]?: unknown[][] }[][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Num, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: { [key in K6]?: unknown } }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends string, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K5]?: unknown[] }[][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Num, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends string>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends { [key in K6]?: unknown }[][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Num>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	<K1 extends Nums, K2 extends Nums, K3 extends Nums, K4 extends Nums, K5 extends Nums, K6 extends Nums>(key1: K1, key2: K2, key3: K3, key4: K4, key5: K5, key6: K6): <T extends unknown[][][][][][]>(object: T) => T

	(...path: (string | Num | Nums)[]): <T extends { [key: string]: unknown } | unknown[]>(object: T) => T
}

export interface BaseRemove {
	<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | Num | Nums)[]): T
}
