import { update, all, filter } from "../src"

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

        const b: typeof user = update("posts", [1, 3], "tags", [1, 2])<string>(
            (tag) => tag.toUpperCase()
        )(user)
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

        const c: typeof nestedArr = update([0, 1], 1, [0, 1])<boolean>(
            (bool) => !bool
        )(nestedArr)
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

    it("works for paths more than 5 items long (without typings)", () => {
        const a = update("a", "b", "c", "d", "e", "f")((bool) => !bool)(nested)
        expect(a).toEqual({
            a: { b: { c: { d: { e: { f: false } } } } },
        })
    })

    it("can update values for keys for not present in the object (without typings, updater will be passed undefined)", () => {
        const untypedUpdate: any = update

        const a = untypedUpdate("foo")(() => 42)(user)
        expect(a).toEqual({
            ...user,
            foo: 42,
        })

        const b = untypedUpdate("foo", "bar", "baz")(() => true)(user)
        expect(b).toEqual({
            ...user,
            foo: { bar: { baz: true } },
        })

        const c = untypedUpdate("arr", 0, "nested", 0, "inner")(() => true)(
            user
        )
        expect(c).toEqual({
            ...user,
            arr: [{ nested: [{ inner: true }] }],
        })

        const mock = jest.fn()
        untypedUpdate("foo")(mock)(user)
        expect(mock).toHaveBeenCalledWith(undefined)
    })

    it("can change the type of values (without typings)", () => {
        const untypedUpdate: any = update
        const mock = jest.fn().mockReturnValue("test")

        const a = untypedUpdate("age")(mock)(user)
        expect(a).toEqual({
            ...user,
            age: "test",
        })
        expect(mock).toHaveBeenLastCalledWith(22)

        const b = untypedUpdate("name", "foo")(mock)(user)
        expect(b).toEqual({
            ...user,
            name: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const c = untypedUpdate("name", 0)(mock)(user)
        expect(c).toEqual({
            ...user,
            name: ["test"],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const d = untypedUpdate("name", 0, "foo")(mock)(user)
        expect(d).toEqual({
            ...user,
            name: [{ foo: "test" }],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const e = untypedUpdate("age", "foo")(mock)(user)
        expect(e).toEqual({
            ...user,
            age: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const f = untypedUpdate("ref", "foo")(mock)(user)
        expect(f).toEqual({
            ...user,
            ref: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const g = untypedUpdate("ref", 0)(mock)(user)
        expect(g).toEqual({
            ...user,
            ref: ["test"],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const h = untypedUpdate("fn", "foo")(mock)(user)
        expect(h).toEqual({
            ...user,
            fn: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        expect(mock).toHaveBeenCalledTimes(8)
    })

    it("supports updating optional keys", () => {
        const partialUser: Partial<typeof user> = user
        const a = update("name")<string>((name) => name.toUpperCase())(
            partialUser
        )
        expect(a.name).toBe("ALICE")
    })

    it("handles empty or invalid paths", () => {
        const mock = jest.fn()

        const t1 = update("posts", -1)(mock)(user)
        expect(t1).toEqual(user)

        const t2 = update("posts", [])(mock)(user)
        expect(t2).toEqual(user)

        const t3 = update("posts", [] as number[], "title")(mock)(user)
        expect(t3).toEqual(user)

        const t4 = update(
            "posts",
            (undefined as unknown) as number,
            "title"
        )(mock)(user)
        expect(t4).toEqual(user)

        const t5 = update([])(mock)(user.posts)
        expect(t5).toBe(user.posts)

        expect(mock).not.toHaveBeenCalled()
    })
})
