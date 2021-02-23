import {
    first,
    last,
    all,
    allKeys,
    find,
    findByKey,
    findByVal,
    filter,
    filterByKey,
    filterByVal,
} from "../src"
import { alice, posts, userMap, User } from "./_testObjects"

describe("The query functions", () => {
    describe("The array queries", () => {
        it("has a first utility", () => {
            expect(first).toBe(0)
        })

        it("has a last function", () => {
            expect(last(posts)).toBe(9)
        })

        it("has an all function", () => {
            expect(all(posts)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        })

        it("has a find function", () => {
            expect(find((post: { id: number }) => post.id === 4)(posts)).toBe(4)
            expect(find<typeof posts>((post) => post.id === 420)(posts)).toBe(
                undefined
            )
        })

        it("has a filter function", () => {
            expect(
                filter((post: { id: number }) => post.id > 7)(posts)
            ).toEqual([8, 9])
            expect(
                filter<typeof posts>((post) => post.id === 420)(posts)
            ).toEqual([])
        })
    })

    describe("The record queries", () => {
        it("has an allKeys function", () => {
            expect(allKeys(alice)).toEqual([
                "name",
                "age",
                "location",
                "posts",
                "ref",
                "fn",
            ])
        })

        it("has a findByKey function", () => {
            expect(
                findByKey<typeof userMap>((userName) =>
                    userName.startsWith("b")
                )(userMap)
            ).toBe("bob")
            expect(
                findByKey((userName) => userName.startsWith("z"))(userMap)
            ).toBe(undefined)
        })

        it("has a findByVal function", () => {
            expect(
                findByVal<typeof userMap>((user) => user.age > 30)(userMap)
            ).toBe("bob")
            expect(findByVal((user: User) => user.age > 100)(userMap)).toBe(
                undefined
            )
        })

        it("has a filterByKey function", () => {
            expect(
                filterByKey<typeof userMap>((userName) =>
                    userName.includes("a")
                )(userMap)
            ).toEqual(["alice", "claire", "dave"])
            expect(
                filterByKey((userName) => userName.startsWith("z"))(userMap)
            ).toEqual([])
        })

        it("has a filterByVal function", () => {
            expect(
                filterByVal<typeof userMap>((user) => user.age > 30)(userMap)
            ).toEqual(["bob", "dave"])
            expect(
                filterByVal((user: User) => user.age > 100)(userMap)
            ).toEqual([])
        })
    })
})
