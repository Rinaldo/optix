import { update, all, filter, polyUpdate } from "../src"

const nested = { a: { b: { c: { d: { e: { f: true } } } } } }
const user = {
    name: "Alice",
    age: 22,
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

describe("The update function", () => {
    it("can update single items", () => {
        const a: typeof nested = update(
            "a",
            "b",
            "c",
            "d",
            "e"
        )<{ f: boolean }>((o) => ({ ...o, f: false }))(nested)
        expect(a).toEqual({
            a: { b: { c: { d: { e: { f: false } } } } },
        })

        const b: typeof user = update(
            "posts",
            0,
            "tags",
            0
        )((tag: string) => tag.toUpperCase())(user)
        expect(b).toEqual({
            name: "Alice",
            age: 22,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["WONDERLAND"],
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
    })

    it("can update multiple items", () => {
        const a: typeof user = update(
            "posts",
            [1, 3],
            "title"
        )<string>((tag) => tag.toUpperCase())(user)
        expect(a).toEqual({
            name: "Alice",
            age: 22,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
                {
                    title: "FOO",
                    tags: ["a", "b", "c"],
                },
                {
                    title: "bar",
                    tags: ["d", "e", "f"],
                },
                {
                    title: "BAZ",
                    tags: ["g", "h", "i"],
                },
            ],
        })

        const b: typeof user = update(
            "posts",
            [1, 3],
            "tags",
            [1, 2]
        )<string>((tag) => tag.toUpperCase())(user)
        expect(b).toEqual({
            name: "Alice",
            age: 22,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
                {
                    title: "foo",
                    tags: ["a", "B", "C"],
                },
                {
                    title: "bar",
                    tags: ["d", "e", "f"],
                },
                {
                    title: "baz",
                    tags: ["g", "H", "I"],
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

        const c: typeof nestedArr = update(
            [0, 1],
            1,
            [0, 1]
        )<boolean>((bool) => !bool)(nestedArr)
        expect(c).toEqual([
            [
                [true, true],
                [true, true],
            ],
            [
                [true, true],
                [true, true],
            ],
        ])
    })

    it("works with the helper functions", () => {
        const a: typeof user = update(
            "posts",
            filter<typeof user.posts>((post) => post.title.startsWith("f")),
            "title"
        )<string>((title) => title.toUpperCase())(user)
        expect(a).toEqual({
            name: "Alice",
            age: 22,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
                {
                    title: "FOO",
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

        const b: typeof user = update(
            "posts",
            all,
            "tags"
        )<string[]>((n) => n.concat(["test"]))(user)
        expect(b).toEqual({
            name: "Alice",
            age: 22,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland", "test"],
                },
                {
                    title: "foo",
                    tags: ["a", "b", "c", "test"],
                },
                {
                    title: "bar",
                    tags: ["d", "e", "f", "test"],
                },
                {
                    title: "baz",
                    tags: ["g", "h", "i", "test"],
                },
            ],
        })
    })

    it("supports updating optional keys", () => {
        const partialUser: Partial<typeof user> = user
        const a = update("name")<string>((name) => name.toUpperCase())(
            partialUser
        )
        expect(a.name).toBe("ALICE")

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
        const b: { name: Name } = update("name")((name: { first: string }) => ({
            first: name.first?.toUpperCase() || "",
        }))(nestedName)
        expect(b.name.first).toBe("ALICE")
    })

    it("handles empty or invalid paths", () => {
        const mock = jest.fn()

        const t1 = update("posts", -1)(mock)(user)
        expect(t1).toEqual(user)

        const t2 = update("posts", -1, "title")(mock)(user)
        expect(t2).toEqual(user)

        const t3 = update("posts", [])(mock)(user)
        expect(t3).toEqual(user)

        const t4 = update("posts", [] as number[], "title")(mock)(user)
        expect(t4).toEqual(user)

        const t5 = update(
            "posts",
            undefined as unknown as number,
            "title"
        )(mock)(user)
        expect(t5).toEqual(user)

        const t6 = update([])(mock)(user.posts)
        expect(t6).toBe(user.posts)

        expect(mock).not.toHaveBeenCalled()

        const t7 = (update as any)()(() => "test")(user)
        expect(t7).toBe("test")
    })
})

describe("the polyUpdate function", () => {
    it("supports adding keys to the object", () => {
        const a: typeof user & { foo: number } = polyUpdate("foo")(() => 42)(
            user
        )
        expect(a).toEqual({
            ...user,
            foo: 42,
        })

        const b: typeof user & { foo: { bar: { baz: boolean } } } = polyUpdate(
            "foo",
            "bar",
            "baz"
        )(() => true)(user)
        expect(b).toEqual({
            ...user,
            foo: { bar: { baz: true } },
        })

        const c: typeof user & {
            arr: { nested: { inner: boolean }[] }[]
        } = polyUpdate("arr", 0, "nested", 0, "inner")(() => true)(user)
        expect(c).toEqual({
            ...user,
            arr: [{ nested: [{ inner: true }] }],
        })

        const mock = jest.fn()
        polyUpdate("foo")(mock)(user)
        expect(mock).toHaveBeenCalledWith(undefined)
    })

    it("can change the type of existing values", () => {
        const mock: (arg: any) => string = jest.fn().mockReturnValue("test")

        const a = polyUpdate("age")(mock)(user)
        expect(a).toEqual({
            ...user,
            age: "test",
        })
        expect(mock).toHaveBeenLastCalledWith(22)

        const b = polyUpdate("name", "foo")(mock)(user)
        expect(b).toEqual({
            ...user,
            name: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const c = polyUpdate("name", 0)(mock)(user)
        expect(c).toEqual({
            ...user,
            name: ["test"],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const d = polyUpdate("name", 0, "foo")(mock)(user)
        expect(d).toEqual({
            ...user,
            name: [{ foo: "test" }],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const e = polyUpdate("age", "foo")(mock)(user)
        expect(e).toEqual({
            ...user,
            age: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const f = polyUpdate("ref", "foo")(mock)(user)
        expect(f).toEqual({
            ...user,
            ref: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const g = polyUpdate("ref", 0)(mock)(user)
        expect(g).toEqual({
            ...user,
            ref: ["test"],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const h = polyUpdate("fn", "foo")(mock)(user)
        expect(h).toEqual({
            ...user,
            fn: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        expect(mock).toHaveBeenCalledTimes(8)
    })
})
