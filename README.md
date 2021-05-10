# Optix

`npm install optix`

Optix is a data manipulation library that can focus on one or many elements in a nested structure to get or set their values. Optix features robust Typescript support and is smaller and faster than true optics libraries.

- **Simple yet powerful**: optics-like capabilities with a simple, intuitive syntax
- **Type-safe**: Robust type checking with minimal type annotations
- **Tiny**: < 1kb gzipped, zero dependencies

## Usage

Let's say we have the following data structure
```js
import { get, set, find, filter, remove, all } from 'optix'

const state1 = {
    title: 'Introduction',
    steps: [
        { title: 'Introduce get', completed: false },
        { title: 'Introduce set', completed: false },
        { title: 'Introduce find', completed: false },
        { title: 'Introduce filter', completed: false },
        { title: 'Introduce remove', completed: false },
        { title: 'Introduce all', completed: false },
    ]
}
```

We can focus on the title of the first step and `get` its value
```js
get('steps', 0, 'title')(state1)
// 'Introduce get'
```
We can focus on the completed key of the first two steps and `set` them both to true
```js
const state2 = set('steps', [0, 1], 'completed')(true)(state1)
// {
//     title: 'Introduction',
//     steps: [
//         { title: 'Introduce get', completed: true },
//         { title: 'Introduce set', completed: true },
//         { title: 'Introduce find', completed: false },
//         { title: 'Introduce filter', completed: false },
//         { title: 'Introduce remove', completed: false },
//         { title: 'Introduce all', completed: false },
//     ]
// }
```
We can `find` the index of a step to focus on and `set` it to be completed
```js
const state3 = set('steps', find(step => step.title === 'Introduce find'), 'completed')(true)(state2)
// {
//     title: 'Introduction',
//     steps: [
//         { title: 'Introduce get', completed: true },
//         { title: 'Introduce set', completed: true },
//         { title: 'Introduce find', completed: true },
//         { title: 'Introduce filter', completed: false },
//         { title: 'Introduce remove', completed: false },
//         { title: 'Introduce all', completed: false },
//     ]
// }
```
We can focus on the incomplete steps with a `filter` and `get` their titles
```js
get('steps', filter(step => !step.completed), 'title')
// ['Introduce filter', 'Introduce remove', 'Introduce all']
```
We can focus on `all` the steps and `remove` their completed keys
```js
const state4 = remove('steps', all, 'completed')(state3)
// {
//     title: 'Introduction',
//     steps: [
//         { title: 'Introduce get' },
//         { title: 'Introduce set' },
//         { title: 'Introduce find' },
//         { title: 'Introduce filter' },
//         { title: 'Introduce remove' },
//         { title: 'Introduce all' },
//     ]
// }
```
We can even find and filter items in maps/records
```js
import { get, findByVal, filterByVal } from 'optix'

const state = {
    users: {
        alice: { name: 'Alice', age: 22 },
        bob: { name: 'Bob', age: 33 },
        claire: { name: 'Claire', age: 44 },
    }
}

get('users', findByVal(user => user.name.startsWith('C')))(state)
// { name: 'Claire', age: 44 }

get('users', filterByVal(user => user.age < 40))(state)
// [{ name: 'Alice', age: 22 }, { name: 'Bob', age: 33 }]
```


## API Reference

### Main Functions

The main functions all take any number of PathItems to form a Path. Each PathItem can focus on one or many elements in an object or array.
```typescript
type GetKey = (map: { [key: string]: any }) => string | undefined
type GetKeys = (map: { [key: string]: any }) => string[]
type GetIndex = (arr: any[]) => number | undefined
type GetIndexes = (arr: any[]) => number[]

type PathItem = string | number | string[] | number[] | GetKey | GetIndex | GetKeys | GetIndexes

type Path = PathItem[]
```
*All updates are performed immutably*

**get**

`path => object => valueAtPath`
```js
get('foo', 'bar')({ foo: { bar: 'baz' } })
// 'baz'

get('letters', [0, 1])({ letters: ['a', 'b', 'c'] })
// ['a', 'b']

get('letters', arr => arr.length - 1)({ letters: ['a', 'b', 'c'] })
// 'c'
```

**set**

`path => newValueAtPath => object => updatedObject`
```js
set('foo', 'bar')('BAZ')({ foo: { bar: 'baz' } })
// { foo: { bar: 'BAZ' } }

set('letters', [0, 1])('z')({ letters: ['a', 'b', 'c'] })
// { letters: ['z', 'z', 'c'] }

set('letters', arr => arr.length - 1)('z')({ letters: ['a', 'b', 'c'] })
// { letters: ['a', 'b', 'z'] }
```

**update**

`path => updaterAtPath => object => updatedObject`
```js
const toUpper = str => str.toUpperCase()

update('foo', 'bar')(toUpper)({ foo: { bar: 'baz' } })
// { foo: { bar: 'BAZ' } }

update('letters', [0, 1])(toUpper)({ letters: ['a', 'b', 'c'] })
// { letters: ['A', 'B', 'c'] }

update('letters', arr => arr.length - 1)(toUpper)({ letters: ['a', 'b', 'c'] })
// { letters: ['a', 'b', 'C'] }
```

**remove**

`path => object => updatedObject`
```js
remove('foo', 'bar')({ foo: { bar: 'baz' } })
// { foo: {} }

remove('letters', [0, 1])({ letters: ['a', 'b', 'c'] })
// { letters: ['c'] }

remove('letters', arr => arr.length - 1)({ letters: ['a', 'b', 'c'] })
// { letters: ['a', 'b'] }
```

### Array query helpers

Optix provides helper functions that can be used within paths to find or filter items in an array
```js
import { get, all, filter, find, last } from 'optix'

const arrayHelpers = [
    { name: 'all', type: 'traversal' },
    { name: 'filter', type: 'prism' },
    { name: 'find', type: 'lens' },
    { name: 'last', type: 'lens' },
]
```
**all** - *focus on all items in the array*

`array => index`
```js
get(all, 'name')(arrayHelpers)
// ['all', 'filter', 'find', 'last']
```

**filter** - *focus on all items that match the predicate*

`predicate => array => indexes`
```js
get(filter(helper => helper.type === 'prism'), 'name')(arrayHelpers)
// ['filter']
```

**find** - *focus on the first item that matches the predicate*

`predicate => array => index`
```js
get(find(helper => helper.type === 'lens'), 'name')(arrayHelpers)
// 'find'
```

**last** - *focus on the last item in the array*

`array => index`
```js
get(last, 'name')(arrayHelpers)
// 'last'
```

### Record query helpers
Optix provides helper functions that can be used within paths to find or filter items in a record/map
```js
import { get, filterByKey, filterByVal, findByKey, findByVal, keys } from 'optix'

const recordHelpers = {
    filterByKey: { description: 'Filter By Key', type: 'prism', predicate: 'key' },
    filterByVal: { description: 'Filter By Value', type: 'prism', predicate: 'value' },
    findByKey: { description: 'Find By Key', type: 'lens', predicate: 'key' },
    findByVal: { description: 'Find By Value', type: 'lens', predicate: 'value' },
    keys: { description: 'All Keys', type: 'traversal' },
}
```

**filterByKey** - *focus on all items that match the predicate*

`predicate => record => keys`
```js
get(filterByKey(key => key.startsWith('filterBy')), 'description')(recordHelpers)
// ['Filter By Key', 'Filter By Value']
```

**filterByVal** - *focus on all items that match the predicate*

`predicate => record => keys`
```js
get(filterByVal(val => val.type === 'prism'), 'description')(recordHelpers)
// ['Filter By Key', 'Filter By Value']
```

**findByKey** - *focus on the first item that matches the predicate*

`predicate => record => key`
```js
get(findByKey(key => key.startsWith('findBy')), 'description')(recordHelpers)
// 'Find By Key'
```

**findByVal** - *focus on the first item that matches the predicate*

`predicate => record => key`
```js
get(findByVal(val => val.type === 'lens' && val.predicate === 'value'), 'description')(recordHelpers)
// 'Find By Value'
```

**keys** - *focus on all items in the object*

`record => key`
```js
get(keys, 'description')(recordHelpers)
// ['Filter By Key', 'Filter By Value', 'Find By Key', 'Find By Value', 'All Keys']
```

### Creating custom query helpers

Custom query helpers are easy to make, they just need to return one or more keys or indexes. Lodash's [findIndex](https://lodash.com/docs/4.17.15#findIndex) and [findKey](https://lodash.com/docs/4.17.15#findKey) can be used as drop-in replacements for `find` and `findByVal` respectively.

### Invalid keys

Keys must be strings or non-negative numbers. Operations will halted if an invalid key is found.
```js
// find will return -1 since Dave does not exist in the array
// a shallow copy of the array will be returned, no element will be modified
set(find(person => person.name === 'Dave'), 'name')('David')([{ name: 'Alice' }, { name: 'Bob' }])
// [{ name: 'Alice' }, { name: 'Bob' }]
```

### TypeScript Notes

`get` does not require any typings
```typescript
const getFooCompleted = get('foo', 'completed') // expect type { foo: { completed: unknown } }
const bool = getFooCompleted({ foo: { completed: false } }) // return type is boolean
// false
```

`set` does not require any typings

*if the new value is missing keys the return type will be unknown*
```typescript
const setFooCompleted = set('foo', 'completed')(true) // expect type { foo: { completed: boolean } }
const completedFoo = setFooCompleted({ foo: { completed: false } }) // return type same as final argument type
// { foo: { completed: true } }
```

`update` requires the updater to be typed

*if the new value is missing keys the return type will be unknown*
```typescript
const obj = { foo: { completed: false } }
const toggleFooCompleted1 = update('foo', 'completed')((bool: boolean) => !bool) // expect type { foo: { completed: boolean } }
const toggleFooCompleted2 = update('foo', 'completed')<boolean>((bool) => !bool) // same as above
const completedFoo = toggleFooCompleted1({ foo: { completed: false } }) // return type same as final argument type
// { foo: { completed: true } }
```

`remove` does not require explicit typings

*if the path targets a required key the return type will be unknown*
```typescript
const foo: { foo: { completed?: boolean } } = { foo: { completed: false } }

const removeFooCompleted = remove('foo', 'completed') // expect type { foo: { completed: unknown } }
const fooWithoutCompleted = removeFooCompleted(foo) // return type same as final argument type
// { foo: {} }
```

**Polymorphism**

Optix provides aliased versions of the main functions with typings that support polymorphism

```typescript
import { polySet, polyUpdate, polyRemove } from 'optix'

// changing boolean to string
polySet('foo')('bar')({ foo: true }) // return type { foo: string }
// { foo: 'bar' }

// removing required key
polyRemove('foo')({ foo: true, bar: true, baz: true }) // return type { bar: boolean; baz: boolean }
// { bar: true, baz: true }
```

**Query Helpers**

The `find*` and `filter*` helpers can be typed with either a type argument or by typing the callback
```typescript
interface User {
    name: string
    id: string
}

interface State {
    list: User[]
    map: { [id: string]: User }
}

const state: State = {
    list: [{ name: 'Alice', id: 'A123' }, { name: 'Bob', id: 'B234' }, { name: 'Claire', id: 'C345' }],
    map: {
        A123: { name: 'Alice', id: 'A123' },
        B234: { name: 'Bob', id: 'B234' },
        C345: { name: 'Claire', id: 'C345' }
    }
}

get('list', find<typeof State.list>((user) => user.name === 'Alice'))(state)
get('list', find((user: User) => user.name === 'Alice'))(state)

get('map', findByVal<typeof State.map>((user) => user.name === 'Alice'))(state)
get('map', findByVal((user: User) => user.name === 'Alice'))(state)
```


## Alternate data-first syntax
If you want a data-first, lodash-like syntax there's a set of functions just for you!

*these functions do not have full TypeScript support*
```js
import { _get, _set, _update, _delete } from 'optix'

_get({ foo: { bar: 'baz' } }, ['foo', 'bar'])
// 'baz'

_set({ foo: { bar: 'baz' } }, ['foo', 'bar'], 'BAZ')
// { foo: { bar: 'BAZ' } }
```
