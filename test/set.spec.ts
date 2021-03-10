import { set } from "../src"

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
})
