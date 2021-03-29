import { remove, all, find, filter } from "../src"

const nested = { a: { b: { c: { d: { e: { f: true } } } } } }
const user = {
    name: "user",
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

describe("The remove function", () => {
    it("can remove single items", () => {
        const a = remove("a", "b", "c")(nested)
        expect(a).toEqual({ a: { b: {} } })

        const b = remove("posts", 0, "tags", 0)(user)
        expect(b).toEqual({
            name: "user",
            age: 22,
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
    })

    it("can remove multiple items", () => {
        const a = remove("posts", [0, 1, 3])(user)
        expect(a).toEqual({
            name: "user",
            age: 22,
            posts: [
                {
                    title: "bar",
                    tags: ["d", "e", "f"],
                },
            ],
        })

        const b = remove("posts", [0, 1, 3], "title")(user)
        expect(b).toEqual({
            name: "user",
            age: 22,
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

        const c = remove("posts", [0, 1, 2, 3], "tags", 0)(user)
        expect(c).toEqual({
            name: "user",
            age: 22,
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

        const d = remove(0, [0, 1], 0)(nestedArr)
        expect(d).toEqual([
            [[true], [false]],
            [
                [true, true],
                [false, false],
            ],
        ])
    })

    it("works with the helper functions", () => {
        const a = remove(
            "posts",
            find<typeof user.posts>((post) => post.title === "foo"),
            "title"
        )(user)
        expect(a).toEqual({
            name: "user",
            age: 22,
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

        const b = remove(
            "posts",
            filter<typeof user.posts>((post) => post.title.length === 3)
        )(user)
        expect(b).toEqual({
            name: "user",
            age: 22,
            posts: [
                {
                    title: "Tea with the Hatter",
                    tags: ["wonderland"],
                },
            ],
        })

        const c = remove("posts", all)(user)
        expect(c).toEqual({
            name: "user",
            age: 22,
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

    it("supports removing optional keys", () => {
        const partialuser: Partial<typeof user> = user
        const a = remove("name")(partialuser)
        expect(a.name).toEqual(undefined)
    })

    it("handles empty or invalid paths", () => {
        const a = remove("posts", -1)(user)
        expect(a).toEqual(user)

        const b = remove("posts", [] as number[])(user)
        expect(b).toEqual(user)

        const c = remove("posts", [] as number[], "title")(user)
        expect(c).toEqual(user)

        const t4 = remove(
            "posts",
            (undefined as unknown) as number,
            "title"
        )(user)
        expect(t4).toEqual(user)

        const t5 = remove([] as number[])(user.posts)
        expect(t5).toBe(user.posts)
    })
})
