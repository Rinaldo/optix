import { remove, all, find, filter, filterByKey } from "../src"
import {
    alice,
    nestedArr,
    nestedObj,
    users,
    posts,
    User,
    Post,
} from "./_testObjects"

describe("The remove function", () => {
    it("can remove single items", () => {
        const t1 = remove("a", "b", "c")(nestedObj)
        expect(t1).toEqual({ a: { b: {} } })

        const t2 = remove("posts", 0, "tags", 0)(alice)
        expect(t2).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 0 ? { ...post, tags: ["b", "c"] } : post
            ),
        })
    })

    it("can remove multiple items", () => {
        const t1 = remove("posts", [3, 8, 4], "title")(alice)
        expect(t1).toEqual({
            ...alice,
            posts: posts.map((post, i) => {
                if (i === 3 || i === 4 || i === 8) {
                    const copy = { ...post }
                    delete (copy as any).title
                    return copy
                }
                return post
            }),
        })

        const t2 = remove([0, 1], "posts", 0, "tags", [1, 2])(users)
        expect(t2).toEqual(
            users.map((user, idx) =>
                idx === 0 || idx === 1
                    ? {
                          ...user,
                          posts: posts.map((post, i) =>
                              i === 0 ? { ...post, tags: ["a"] } : post
                          ),
                      }
                    : user
            )
        )

        const t3 = remove([0, 1], 0, 0, 0)(nestedArr)
        expect(t3).toEqual([[[[true]]], [[[true]]]])

        const t4 = remove("posts", [0, 2, 4, 6, 8])(alice)
        expect(t4.posts.length).toBe(5)
        expect(t4.posts.filter((post) => post.id % 2 === 0).length).toBe(0)
    })

    it("works with the helper functions", () => {
        const t1 = remove(
            "posts",
            find<Post[]>((post) => post.id === 8),
            "title"
        )(alice)
        expect(t1).toEqual({
            ...alice,
            posts: posts.map((post, i) => {
                if (i === 8) {
                    const copy = { ...post }
                    delete (copy as any).title
                    return copy
                }
                return post
            }),
        })

        const t2 = remove(
            "posts",
            filter<Post[]>((post) => post.id >= 7 && post.id <= 8),
            "title"
        )(alice)
        expect(t2).toEqual({
            ...alice,
            posts: posts.map((post, i) => {
                if (i >= 7 && i <= 8) {
                    const copy = { ...post }
                    delete (copy as any).title
                    return copy
                }
                return post
            }),
        })

        const t3 = remove("posts", 0, "tags", all)(alice)
        expect(t3).toEqual({
            ...alice,
            posts: posts.map((post, i) =>
                i === 0 ? { ...post, tags: [] } : post
            ),
        })
    })

    it("works for paths more than 6 items long (without typings)", () => {
        const t1 = remove("a", "b", "c", "d", "e", "f", "g")(nestedObj)
        expect(t1).toEqual({ a: { b: { c: { d: { e: { f: {} } } } } } })
    })

    it("supports removing multiple string keys (without typings)", () => {
        const t1 = (remove as any)("location", ["city", "state"])(alice)
        expect(t1).toEqual({
            ...alice,
            location: {
                country: "USA",
            },
        })

        const t2 = (remove as any)(filterByKey((key) => key === "name"))(alice)
        const copy = { ...alice }
        delete (copy as any).name
        expect(t2).toEqual(copy)
    })

    it("returns a deep copy of the object for paths that are not present", () => {
        const t1 = (remove as any)("blarg")(alice)
        expect(t1).toEqual(alice)

        const t2 = (remove as any)("blarg", "blech")(alice)
        expect(t2).toEqual(alice)

        const t3 = (remove as any)("location", "foo", "bar")(alice)
        expect(t3).toEqual(alice)
    })

    it("supports removing optional keys with typings", () => {
        const partialAlice: Partial<User> = alice
        const t1 = remove("location", "city")(partialAlice)
        expect(t1.location!.city).toEqual(undefined)

        const t2 = remove("posts", 0, "id")(partialAlice)
        expect(t2.posts![0].id).toEqual(undefined)
    })

    it("handles edge cases", () => {
        const t1 = remove("posts", -1)(alice)
        expect(t1).toEqual(alice)

        const t2 = remove("posts", [])(alice)
        expect(t2).toEqual(alice)

        const t3 = remove("posts", [], "title")(alice)
        expect(t3).toEqual(alice)

        const t4 = remove(
            "posts",
            (undefined as unknown) as number,
            "title"
        )(alice)
        expect(t4).toEqual(alice)

        const t5 = remove([])(alice.posts)
        expect(t5).toBe(alice.posts)
    })
})
