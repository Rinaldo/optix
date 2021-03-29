import {
    last,
    all,
    keys,
    find,
    findByKey,
    findByVal,
    filter,
    filterByKey,
    filterByVal,
} from "../src"

const posts = Array(10)
    .fill(null)
    .map((_, i) => ({
        id: i,
        title: `Post ${i}`,
        description: "some description",
        tags: ["a", "b", "c"],
    }))

const userMap = {
    alice: { name: "Alice", age: 22 },
    bob: { name: "Bob", age: 32 },
    claire: { name: "Claire", age: 42 },
    dave: { name: "Dave", age: 52 },
}

describe("The query functions", () => {
    describe("The array queries", () => {
        it("has a last function", () => {
            expect(last(posts)).toEqual(9)
        })

        it("has an all function", () => {
            expect(all(posts)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
        })

        it("has a find function", () => {
            expect(find((post: { id: number }) => post.id === 4)(posts)).toBe(4)
            expect(find<typeof posts>((post) => post.id === 420)(posts)).toBe(-1)
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
        it("has a keys function", () => {
            expect(keys({ foo: true, bar: true, baz: true })).toEqual([
                "foo",
                "bar",
                "baz",
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
                findByVal<typeof userMap>((user) => user.age > 50)(userMap)
            ).toBe("dave")
            expect(
                findByVal((user: typeof userMap.alice) => user.age > 100)(
                    userMap
                )
            ).toBe(undefined)
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
            ).toEqual(["bob", "claire", "dave"])
            expect(
                filterByVal((user: typeof userMap.alice) => user.age > 100)(
                    userMap
                )
            ).toEqual([])
        })
    })
})
