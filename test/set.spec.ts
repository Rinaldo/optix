import { set, all, find, filter, filterByKey } from "../src"
import {
    alice,
    nestedArr,
    nestedObj,
    users,
    posts,
    User,
    Post,
} from "./_testObjects"

describe("The set function", () => {
    it("can set single items", () => {
        const t1: typeof nestedObj = set(
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        )({ g: false })(nestedObj)
        expect(t1).toEqual({
            a: { b: { c: { d: { e: { f: { g: false } } } } } },
        })

        const t2: User = set("posts", 0, "tags", 0)("b")(alice)
        expect(t2).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 0 ? { ...post, tags: ["b", "b", "c"] } : post
            ),
        })
    })

    it("can set multiple items", () => {
        const t1: User = set("posts", [3, 4, 8], "title")("new title")(alice)
        expect(t1).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 3 || i === 4 || i === 8
                    ? { ...post, title: "new title" }
                    : post
            ),
        })

        const t2: typeof users = set([0, 1], "posts", 0, "tags", [1, 2])("d")(
            users
        )
        expect(t2).toEqual(
            users.map((user, idx) =>
                idx === 0 || idx === 1
                    ? {
                          ...user,
                          posts: posts.map((post, i) =>
                              i === 0
                                  ? { ...post, tags: ["a", "d", "d"] }
                                  : post
                          ),
                      }
                    : user
            )
        )

        const t3: typeof nestedArr = set([0, 1], 0, 0, 0)(false)(nestedArr)
        expect(t3).toEqual([[[[false, true]]], [[[false, true]]]])

        const t4: User = set(
            "posts",
            find<Post[]>((post) => post.id === 4),
            "title"
        )("new title")(alice)
        expect(t4).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 4 ? { ...post, title: "new title" } : post
            ),
        })
    })

    it("works with the helper functions", () => {
        const t1: User = set(
            "posts",
            filter<Post[]>((post) => post.id >= 3 && post.id <= 4),
            "title"
        )("new title")(alice)
        expect(t1).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 3 || i === 4 ? { ...post, title: "new title" } : post
            ),
        })

        const t2: User = set("posts", 0, "tags", all)("s")(alice)
        expect(t2).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 0 ? { ...post, tags: ["s", "s", "s"] } : post
            ),
        })
    })

    it("works for paths more than 6 items long (without typings)", () => {
        const t1 = set("a", "b", "c", "d", "e", "f", "g")(false)(nestedObj)
        expect(t1).toEqual({
            a: { b: { c: { d: { e: { f: { g: false } } } } } },
        })
    })

    it("supports setting multiple string keys (without typings)", () => {
        const t1 = (set as any)("location", ["city", "state"])("")(alice)
        expect(t1).toEqual({
            ...alice,
            location: {
                ...alice.location,
                city: "",
                state: "",
            },
        })

        const t2 = (set as any)(filterByKey((key) => key === "name"))(
            "Alice A"
        )(alice)
        expect(t2).toEqual({
            ...alice,
            name: "Alice A",
        })
    })

    it("can set values for keys for not present in the office (without typings)", () => {
        const t1 = (set as any)("foo")(42)(alice)
        expect(t1).toEqual({
            ...alice,
            foo: 42,
        })

        const t2 = (set as any)("foo", "bar", "baz")(true)(alice)
        expect(t2).toEqual({
            ...alice,
            foo: { bar: { baz: true } },
        })

        const t3 = (set as any)("arr", 0, "nested", 0, "inner")(true)(alice)
        expect(t3).toEqual({
            ...alice,
            arr: [{ nested: [{ inner: true }] }],
        })

        const t4 = (set as any)("location", "foo", "bar")(true)(alice)
        expect(t4).toEqual({
            ...alice,
            location: {
                ...alice.location,
                foo: {
                    bar: true,
                },
            },
        })
    })

    it("can change the type of values (without typings)", () => {
        const t1 = (set as any)("age")("21")(alice)
        expect(t1).toEqual({
            ...alice,
            age: "21",
        })

        const t2 = (set as any)("name", "foo")("test")(alice)
        expect(t2).toEqual({
            ...alice,
            name: { foo: "test" },
        })

        const t3 = (set as any)("name", 0)("test")(alice)
        expect(t3).toEqual({
            ...alice,
            name: ["test"],
        })

        const t4 = (set as any)("name", 0, "foo")("test")(alice)
        expect(t4).toEqual({
            ...alice,
            name: [{ foo: "test" }],
        })

        const t5 = (set as any)("age", "foo")("test")(alice)
        expect(t5).toEqual({
            ...alice,
            age: { foo: "test" },
        })

        const t6 = (set as any)("ref", "foo")("test")(alice)
        expect(t6).toEqual({
            ...alice,
            ref: { foo: "test" },
        })

        const t7 = (set as any)("ref", 0)("test")(alice)
        expect(t7).toEqual({
            ...alice,
            ref: ["test"],
        })

        const t8 = (set as any)("fn", "foo")("test")(alice)
        expect(t8).toEqual({
            ...alice,
            fn: { foo: "test" },
        })
    })

    it("supports setting optional keys with typings", () => {
        const partialAlice: Partial<User> = alice
        const t1 = set("location", "city")("Denver")(partialAlice)
        expect(t1.location!.city).toBe("Denver")

        const t2 = set("posts", 0, "id")(2)(partialAlice)
        expect(t2.posts![0].id).toBe(2)
    })

    it("handles edge cases", () => {
        const t1 = set("posts", -1)({ ...alice.posts[0], id: -1 })(alice)
        expect(t1).toEqual(alice)

        const t2 = set("posts", [])({ ...alice.posts[0], id: -1 })(alice)
        expect(t2).toEqual(alice)

        const t3 = set("posts", [], "title")("some title")(alice)
        expect(t3).toEqual(alice)

        const t4 = set(
            "posts",
            (undefined as unknown) as number,
            "title"
        )("some title")(alice)
        expect(t4).toEqual(alice)

        const t5 = set([])(null as any)(alice.posts)
        expect(t5).toBe(alice.posts)
    })
})
