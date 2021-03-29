import { get, all, find, filter } from "../src"

const nested = { a: { b: { c: { d: { e: { f: true } } } } } }
const user = {
    name: "Alice",
    posts: [
        {
            title: "Tea with the Hatter",
            tags: ["wonderland"],
        },
        {
            title: "foo",
            tags: ["a", "b", "c"],
        },
        {
            title: "bar",
            tags: ["d", "e", "f"],
        },
        {
            title: "baz",
            tags: ["g", "h", "i"],
        },
    ],
}

describe("The get function", () => {
    it("can get single items", () => {
        const a = get("a", "b", "c", "d", "e")(nested)
        const a1: { f: boolean } = a
        expect(a1).toBe(nested.a.b.c.d.e)

        const b = get("posts", 0, "tags", 0)(user)
        const b1: string = b!
        expect(b1).toBe("wonderland")
    })

    it("can get multiple items", () => {
        const a = get("posts", [0, 1, 3], "title")(user)
        const a1: string[] = a
        expect(a1).toEqual(["Tea with the Hatter", "foo", "baz"])

        const b = get("posts", [2, 1], "tags", [0, 1])(user)
        const b1: string[][] = b
        expect(b1).toEqual([
            ["d", "e"],
            ["a", "b"],
        ])

        const c = get([0], "posts", [1, 2, 3], "tags", [1, 2])([user])
        const c1: string[][][] = c
        expect(c1).toEqual([
            [
                ["b", "c"],
                ["e", "f"],
                ["h", "i"],
            ],
        ])

        const nestedArr = [
            [
                [true, true],
                [false, false],
            ],
            [
                [true, true],
                [false, false],
            ],
        ]

        const d = get([0, 1], 1, [0])(nestedArr)
        const d1: boolean[][] = d!
        expect(d1).toEqual([[false], [false]])

        const users = {
            alice: {
                name: "Alice",
                tags: {
                    builder: false,
                    wonderland: true,
                },
            },
            bob: {
                name: "Bob",
                tags: {
                    builder: true,
                    wonderland: false,
                },
            },
        }

        const e = get(["alice", "bob"], "name")(users)
        const e1: string[] = e
        expect(e1).toEqual(["Alice", "Bob"])

        const f = get(["alice", "bob"], "tags", "wonderland")(users)
        const f1: boolean[] = f
        expect(f1).toEqual([true, false])

        const g = get(["alice", "bob"], "tags", ["builder", "wonderland"])(
            users
        )
        const g1: boolean[][] = g
        expect(g1).toEqual([
            [false, true],
            [true, false],
        ])
    })

    it("supports getting optional keys", () => {
        interface User2 {
            contact: {
                email: string
            }
            contact2: {
                email?: string
            }
            contact3?: {
                email?: string
            }
            posts: [
                {
                    title?: string
                    tags?: string[]
                }
            ]
            posts2?: [
                {
                    title?: string
                    tags?: string[]
                }
            ]
        }
        const user: User2 = {
            contact: { email: "alice@email.com" },
            contact2: { email: "alice@email.com" },
            contact3: { email: "alice@email.com" },
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
            ],
            posts2: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
            ],
        }
        const a = get("contact", "email")(user)
        const a1: string = a
        expect(a1).toBe("alice@email.com")
        // need non null assertion for optional types
        const b = get("contact2", "email")(user)
        const b1: string = b!
        expect(b1).toBe("alice@email.com")
        // type is unknown for nested optional types
        const c = get("contact3", "email")(user) as string
        const c1: string = c
        expect(c1).toBe("alice@email.com")

        const d = get("posts", 0, "title")(user)
        const d1: string = d!
        expect(d1).toBe("Tea with the Hatter")

        const e = get("posts2", 0, "title")(user) as string
        const e1: string = e
        expect(e1).toBe("Tea with the Hatter")
    })

    it("works with the helper functions", () => {
        const a = get(
            "posts",
            find<typeof user.posts>((post) => post.tags.includes("wonderland")),
            "title"
        )(user)
        const a1: string = a!
        expect(a1).toBe("Tea with the Hatter")

        const b = get(
            "posts",
            filter<typeof user.posts>((post) => post.tags.length === 3),
            "title"
        )(user)
        const b1: string[] = b
        expect(b1).toEqual(["foo", "bar", "baz"])

        const c = get("posts", all, "title")(user)
        const c1 = c
        expect(c1).toEqual(["Tea with the Hatter", "foo", "bar", "baz"])

        const d = get(
            "posts",
            find<typeof user.posts>((post) => post.title === "blarg"),
            "title"
        )(user)
        expect(d).toBe(undefined)

        const e = get(
            "posts",
            filter<typeof user.posts>((post) => post.tags.length > 100),
            "title"
        )(user)
        const e1: string[] = e
        expect(e1).toEqual([])
    })

    it("returns undefined for paths that are not present in the object", () => {
        const a = get("blarg")({} as any)
        expect(a).toBe(undefined)

        const b = get("blarg", "blech")({} as any)
        expect(b).toBe(undefined)

        const c = get(
            "location",
            "foo",
            "bar"
        )({ location: { state: "AZ" } } as any)
        expect(c).toBe(undefined)

        const d = get("posts", [2, 3])(null as any)
        expect(d).toBe(undefined)

        const e = get("posts", [2, 3], "title")(null as any)
        expect(e).toBe(undefined)

        const f = get("posts", [2, 3], "tags", [0, 1, 2])(null as any)
        expect(f).toBe(undefined)

        const g = get("posts", [2, 3])({} as any)
        expect(g).toEqual([undefined, undefined])

        const h = get("posts", [2, 3])({ posts: undefined } as any)
        expect(h).toEqual([undefined, undefined])
    })

    it("handles edge cases", () => {
        const a = get("posts", -1)(user)
        expect(a).toBe(undefined)

        const b = get("posts", -1, "title")(user)
        expect(b).toBe(undefined)

        const c = get(undefined as unknown as string)(user)
        expect(c).toBe(undefined)

        const d = get("foo", undefined as unknown as string, "bar")({})
        expect(d).toBe(undefined)

        const e = get(
            "posts",
            [undefined as unknown] as number[],
            "title"
        )(user)
        expect(e).toEqual([undefined])
    })
})
