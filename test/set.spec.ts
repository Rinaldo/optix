import { set, polySet } from "../src"

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

describe("The set function", () => {
    it("works", () => {
        const a = set("posts", 0, "tags", 0)("test")(user)
        const a1: typeof user = a
        expect(a1).toEqual({
            name: "Alice",
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["test"],
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
        })

        const b = set("posts", [1, 2], "tags", [0, 1])("test")(user)
        const b1: typeof user = b
        expect(b1).toEqual({
            name: "Alice",
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
                {
                    title: "foo",
                    tags: ["test", "test", "c"],
                },
                {
                    title: "bar",
                    tags: ["test", "test", "f"],
                },
                {
                    title: "baz",
                    tags: ["g", "h", "i"],
                },
            ],
        })
    })

    it("returns unknown when the update argument is missing keys", () => {
        const nestedName = {
            name: {
                first: "Alice",
                last: "A",
            },
        }
        const a = set("name")({ first: "ALICE" })(nestedName)
        expect(a).toBeTruthy
    })

    it("supports updating optional keys", () => {
        interface Name {
            first?: string
            last?: string
        }
        const nestedName: { name: Name } = {
            name: {
                first: "Alice",
                last: "A",
            },
        }
        const a: { name: Name } = set("name")({ first: "ALICE" })(nestedName)
        expect(a.name.first).toBe("ALICE")
    })

    it("handles an empty path", () => {
        const a = (set as any)()("test")(user)
        expect(a).toBe("test")
    })
})

describe("the polySet function", () => {
    it("supports adding keys to the object", () => {
        const a: typeof user & { foo: number } = polySet("foo")(42)(user)
        expect(a).toEqual({
            ...user,
            foo: 42,
        })

        const b: typeof user & { foo: { bar: { baz: boolean } } } = polySet(
            "foo",
            "bar",
            "baz"
        )(true)(user)
        expect(b).toEqual({
            ...user,
            foo: { bar: { baz: true } },
        })

        const c: typeof user & {
            arr: { nested: { inner: boolean }[] }[]
        } = polySet("arr", 0, "nested", 0, "inner")(true)(user)
        expect(c).toEqual({
            ...user,
            arr: [{ nested: [{ inner: true }] }],
        })
    })

    it("supports adding keys to the object (2)", () => {
        const a = polySet("age")("test")(user)
        expect(a).toEqual({
            ...user,
            age: "test",
        })

        const b = polySet("name", "foo")("test")(user)
        expect(b).toEqual({
            ...user,
            name: { foo: "test" },
        })

        const c = polySet("name", 0)("test")(user)
        expect(c).toEqual({
            ...user,
            name: ["test"],
        })

        const d = polySet("name", 0, "foo")("test")(user)
        expect(d).toEqual({
            ...user,
            name: [{ foo: "test" }],
        })

        const e = polySet("age", "foo")("test")(user)
        expect(e).toEqual({
            ...user,
            age: { foo: "test" },
        })

        const f = polySet("ref", "foo")("test")(user)
        expect(f).toEqual({
            ...user,
            ref: { foo: "test" },
        })

        const g = polySet("ref", 0)("test")(user)
        expect(g).toEqual({
            ...user,
            ref: ["test"],
        })

        const h = polySet("fn", "foo")("test")(user)
        expect(h).toEqual({
            ...user,
            fn: { foo: "test" },
        })
    })

    it("can set multiple items", () => {
        const a: {
            name: string
            posts: (string | { title: string; tags: string[] })[]
        } = polySet("posts", [0, 1, 2, 3])("foo")(user)
        expect(a).toEqual({ ...user, posts: ["foo", "foo", "foo", "foo"] })

        const b: {
            name: string
            posts: {
                tags: string[]
                title: boolean
            }[]
        } = polySet("posts", [0, 1, 2, 3], "title")(true)(user)
        expect(b).toEqual({
            ...user,
            posts: user.posts.map((post) => ({ ...post, title: true })),
        })

        const c = polySet("posts", [0, 1, 2, 3], "bool")(true)(user) // bool property should be optional
        expect(c).toEqual({
            ...user,
            posts: user.posts.map((post) => ({ ...post, bool: true })),
        })

        const dict: Record<string, boolean> = {
            foo: true,
            bar: true,
            baz: true,
        }
        const d = polySet("foo")(0)(dict)
        expect(d).toEqual({ foo: 0, bar: true, baz: true })

        const e = polySet(["foo"])(0)(dict)
        expect(e).toEqual({ foo: 0, bar: true, baz: true })
    })
})
