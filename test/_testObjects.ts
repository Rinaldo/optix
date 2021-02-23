export const posts = Array(10)
    .fill(null)
    .map((_, i) => ({
        id: i,
        title: `Post ${i}`,
        description: "some description",
        tags: ["a", "b", "c"],
    }))

export const alice = {
    name: "Alice",
    age: 21,
    location: {
        country: "USA",
        state: "CO",
        city: "Boulder",
    },
    posts,
    ref: null,
    fn: (): void => undefined,
}

export const bob = {
    name: "Bob",
    age: 42,
    location: {
        country: "USA",
        state: "TN",
        city: "Nashville",
    },
    posts,
    ref: null,
    fn: (): void => undefined,
}

export type Post = typeof posts[0]
export type User = typeof alice

export const claire = { ...alice, name: "Claire" }
export const dave = { ...bob, name: "Dave" }

export const users = [alice, bob, claire, dave]

export const userMap = { alice, bob, claire, dave }

export const nestedObj = { a: { b: { c: { d: { e: { f: { g: true } } } } } } }

export const nestedArr = [[[[true, true]]], [[[true, true]]]]
