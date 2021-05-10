import { remove, all, find, filter, polyRemove } from "../src"

interface User {
    name: {
        first?: string
        last?: string
    }
    age: number
    active?: boolean
    posts: {
        title: string
        tags?: string[]
    }[]
}

const user: User = {
    name: {
        first: "Alice",
    },
    age: 22,
    active: true,
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

describe("The remove function", () => {
    it("can remove single items", () => {
        const a: User = remove("name", "first")(user)
        expect(a).toEqual({
            ...user,
            name: {},
        })

        const b: User = remove("posts", 0, "tags", 0)(user)
        expect(b).toEqual({
            ...user,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: [],
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

        const c: User = remove("active")(user)
        const copy = { ...user }
        delete copy.active
        expect(c).toEqual(copy)
    })

    it("can remove multiple items", () => {
        const a: User = remove("posts", [0, 1, 3])(user)
        expect(a).toEqual({
            ...user,
            posts: [
                {
                    title: "bar",
                    tags: ["d", "e", "f"],
                },
            ],
        })

        // unknown
        const b = remove("posts", [0, 1, 3], "title")(user)
        expect(b).toEqual({
            ...user,
            posts: [
                {
                    tags: ["wonderland"],
                },
                {
                    tags: ["a", "b", "c"],
                },
                {
                    title: "bar",
                    tags: ["d", "e", "f"],
                },
                {
                    tags: ["g", "h", "i"],
                },
            ],
        })

        const c: User = remove("posts", [0, 1, 2, 3], "tags", 0)(user)
        expect(c).toEqual({
            ...user,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: [],
                },
                {
                    title: "foo",
                    tags: ["b", "c"],
                },
                {
                    title: "bar",
                    tags: ["e", "f"],
                },
                {
                    title: "baz",
                    tags: ["h", "i"],
                },
            ],
        })

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

        const d: boolean[][][] = remove(0, [0, 1], 0)(nestedArr)
        expect(d).toEqual([
            [[true], [false]],
            [
                [true, true],
                [false, false],
            ],
        ])
    })

    it("works with the helper functions", () => {
        // unknown
        const a = remove(
            "posts",
            find<typeof user.posts>((post) => post.title === "foo"),
            "title"
        )(user)
        expect(a).toEqual({
            ...user,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
                {
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

        const b: User = remove(
            "posts",
            filter<typeof user.posts>((post) => post.title.length === 3)
        )(user)
        expect(b).toEqual({
            ...user,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
            ],
        })

        const c: User = remove("posts", all)(user)
        expect(c).toEqual({
            ...user,
            posts: [],
        })
    })

    it("returns a deep copy of the object for paths that are not present", () => {
        const a = (remove as any)("blarg")(user)
        expect(a).toEqual(user)

        const b = (remove as any)("blarg", "blech")(user)
        expect(b).toEqual(user)

        const c = (remove as any)("name", "foo")(user)
        expect(c).toEqual(user)
    })

    it("supports removing keys from index types", () => {
        type Bools = Record<string, boolean>
        const dict: Bools = {
            foo: true,
            bar: true,
            baz: true,
        }
        const a: Bools = remove("bar")(dict)
        expect(a).toEqual({ foo: true, baz: true })

        const b: Bools = remove(["bar", "baz"])(dict)
        expect(b).toEqual({ foo: true })
    })

    it("handles empty or invalid paths", () => {
        const a: User = remove("posts", -1)(user)
        expect(a).toEqual(user)

        const b: User = remove("posts", [] as number[])(user)
        expect(b).toEqual(user)

        // unknown
        const c = remove("posts", [] as number[], "title")(user)
        expect(c).toEqual(user)

        // unknown
        const d = remove("posts", undefined as unknown as number, "title")(user)
        expect(d).toEqual(user)

        const e: User["posts"] = remove([] as number[])(user.posts)
        expect(e).toBe(user.posts)

        const f = (remove as any)()(user)
        expect(f).toBe(user)
    })
})

describe("the polyRemove function", () => {
    it("has correct typings", () => {
        const name = {
            first: "",
            last: "",
        }
        const a: { last: string } = polyRemove("first")(name)
        const dict = {
            foo: true,
            bar: true,
            baz: true,
        }
        const b: { foo: boolean; baz: boolean } = polyRemove("bar")(dict)
        const c: Record<string, boolean> = polyRemove(["bar"])(dict)
        const d: Record<string, boolean> = polyRemove("bar")(
            dict as Record<string, boolean>
        )
        const e: Record<string, boolean> = polyRemove(["bar"])(
            dict as Record<string, boolean>
        )

        const f: typeof dict[] = polyRemove(0)([dict])

        const g = polyRemove(0, "bar")([dict]) // bar property should still exist and be optional

        expect([a, b, c, d, e, f, g]).toBeTruthy()
    })
})
