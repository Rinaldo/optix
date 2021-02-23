import { update, all, find, filter, filterByKey } from "../src"
import {
    alice,
    nestedArr,
    nestedObj,
    users,
    posts,
    User,
    Post,
} from "./_testObjects"

describe("The update function", () => {
    it("can update single items", () => {
        const t1: typeof nestedObj = update(
            "a",
            "b",
            "c",
            "d",
            "e",
            "f"
        )<{ g: boolean }>((o) => ({ ...o, g: false }))(nestedObj)
        expect(t1).toEqual({
            a: { b: { c: { d: { e: { f: { g: false } } } } } },
        })

        const t2: User = update("posts", 0, "tags", 0)(() => "b")(alice)
        expect(t2).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 0 ? { ...post, tags: ["b", "b", "c"] } : post
            ),
        })
    })

    it("can update multiple items", () => {
        const t1: User = update(
            "posts",
            [3, 4, 8],
            "title"
        )<string>((title) => title + " New")(alice)
        expect(t1).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 3 || i === 4 || i === 8
                    ? { ...post, title: post.title + " New" }
                    : post
            ),
        })

        const t2: User[] = update([0, 1], "posts", 0, "tags", [1, 2])<string>(
            () => "d"
        )(users)
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

        const t3: typeof nestedArr = update(
            [0, 1],
            0,
            0,
            0
        )<boolean>((bool) => !bool)(nestedArr)
        expect(t3).toEqual([[[[false, true]]], [[[false, true]]]])

        const t4: User = update(
            "posts",
            find<Post[]>((post) => post.id === 4),
            "title"
        )<string>(() => "new title")(alice)
        expect(t4).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 4 ? { ...post, title: "new title" } : post
            ),
        })
    })

    it("works with the helper functions", () => {
        const t1: User = update(
            "posts",
            filter<Post[]>((post) => post.id >= 3 && post.id <= 4),
            "title"
        )<string>(() => "new title")(alice)
        expect(t1).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 3 || i === 4 ? { ...post, title: "new title" } : post
            ),
        })

        const t2: User = update("posts", all, "id")<number>((n) => n + 1)(alice)
        expect(t2).toEqual({
            ...alice,
            posts: posts.map((post) => ({ ...post, id: post.id + 1 })),
        })
    })

    it("works for paths more than 6 items long (without typings)", () => {
        const t11 = update("a", "b", "c", "d", "e", "f", "g")((bool) => !bool)(
            nestedObj
        )
        expect(t11).toEqual({
            a: { b: { c: { d: { e: { f: { g: false } } } } } },
        })
    })

    it("supports updating multiple string keys (without typings)", () => {
        const t12 = (update as any)("location", [
            "city",
            "state",
        ])((val: string) => val.toLowerCase())(alice)
        expect(t12).toEqual({
            ...alice,
            location: {
                ...alice.location,
                city: "boulder",
                state: "co",
            },
        })

        const t14 = (update as any)(
            filterByKey((key) => key === "name")
        )((name: string) => name.toUpperCase())(alice)
        expect(t14).toEqual({
            ...alice,
            name: "ALICE",
        })
    })

    it("can update values for keys for not present in the office (without typings, updater will be passed undefined)", () => {
        const t1 = (update as any)("foo")(() => 42)(alice)
        expect(t1).toEqual({
            ...alice,
            foo: 42,
        })

        const t2 = (update as any)("foo", "bar", "baz")(() => true)(alice)
        expect(t2).toEqual({
            ...alice,
            foo: { bar: { baz: true } },
        })

        const t3 = (update as any)("arr", 0, "nested", 0, "inner")(() => true)(
            alice
        )
        expect(t3).toEqual({
            ...alice,
            arr: [{ nested: [{ inner: true }] }],
        })

        const t4 = (update as any)("location", "foo", "bar")(() => true)(alice)
        expect(t4).toEqual({
            ...alice,
            location: {
                ...alice.location,
                foo: {
                    bar: true,
                },
            },
        })

        const mock = jest.fn()

        ;(update as any)("foo")(mock)(alice)
        expect(mock).toHaveBeenCalledWith(undefined)
    })

    it("can change the type of values (without typings)", () => {
        const mock = jest.fn().mockReturnValue("test")

        const t1 = (update as any)("age")(mock)(alice)
        expect(t1).toEqual({
            ...alice,
            age: "test",
        })
        expect(mock).toHaveBeenLastCalledWith(21)

        const t2 = (update as any)("name", "foo")(mock)(alice)
        expect(t2).toEqual({
            ...alice,
            name: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const t3 = (update as any)("name", 0)(mock)(alice)
        expect(t3).toEqual({
            ...alice,
            name: ["test"],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const t4 = (update as any)("name", 0, "foo")(mock)(alice)
        expect(t4).toEqual({
            ...alice,
            name: [{ foo: "test" }],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const t5 = (update as any)("age", "foo")(mock)(alice)
        expect(t5).toEqual({
            ...alice,
            age: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const t6 = (update as any)("ref", "foo")(mock)(alice)
        expect(t6).toEqual({
            ...alice,
            ref: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const t7 = (update as any)("ref", 0)(mock)(alice)
        expect(t7).toEqual({
            ...alice,
            ref: ["test"],
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        const t8 = (update as any)("fn", "foo")(mock)(alice)
        expect(t8).toEqual({
            ...alice,
            fn: { foo: "test" },
        })
        expect(mock).toHaveBeenLastCalledWith(undefined)

        expect(mock).toHaveBeenCalledTimes(8)
    })

    it("supports updating optional keys with typings", () => {
        const partialAlice: Partial<User> = alice
        const t1 = update(
            "location",
            "city"
        )<string>((city) => city.toUpperCase())(partialAlice)
        expect(t1.location!.city).toBe("BOULDER")

        const t2 = update("posts", 0, "id")<number>((id) => id + 2)(
            partialAlice
        )
        expect(t2.posts![0].id).toBe(2)
    })

    it("handles edge cases", () => {
        const mock = jest.fn()

        const t1 = update("posts", -1)(mock)(alice)
        expect(t1).toEqual(alice)

        const t2 = update("posts", [])(mock)(alice)
        expect(t2).toEqual(alice)

        const t3 = update("posts", [], "title")(mock)(alice)
        expect(t3).toEqual(alice)

        const t4 = update(
            "posts",
            (undefined as unknown) as number,
            "title"
        )(mock)(alice)
        expect(t4).toEqual(alice)

        const t5 = update([])(mock)(alice.posts)
        expect(t5).toBe(alice.posts)

        expect(mock).not.toHaveBeenCalled()
    })
})
