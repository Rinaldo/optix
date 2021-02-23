import { get, all, find, filter, filterByKey } from "../src"
import {
    alice,
    nestedArr,
    nestedObj,
    users,
    posts,
    User,
    Post,
} from "./_testObjects"

describe("The get function", () => {
    it("can get single items", () => {
        const t1: { g: boolean } = get("a", "b", "c", "d", "e", "f")(nestedObj)
        expect(t1).toBe(nestedObj.a.b.c.d.e.f)

        const t2: string = get("posts", 0, "tags", 0)(alice)
        expect(t2).toBe(posts[0].tags[0])
    })

    it("can get multiple items", () => {
        const t1: string[] = get("posts", [3, 8, 4], "title")(alice)
        expect(t1).toEqual([posts[3].title, posts[8].title, posts[4].title])

        const t2: string[][] = get([0, 1], "posts", 0, "tags", [1, 2])(users)
        expect(t2).toEqual([
            users[0].posts[0].tags.slice(1, 3),
            users[0].posts[0].tags.slice(1, 3),
        ])

        const t3: string[][][] = get([0, 1], "posts", [0, 1], "tags", [1, 2])(
            users
        )
        expect(t3).toEqual([
            [
                ["b", "c"],
                ["b", "c"],
            ],
            [
                ["b", "c"],
                ["b", "c"],
            ],
        ])

        const t4: boolean[] = get([0, 1], 0, 0, 0)(nestedArr)
        expect(t4).toEqual([true, true])
    })

    it("works with the helper functions", () => {
        const t1: string = get(
            "posts",
            find<Post[]>((post) => post.id === 8),
            "title"
        )(alice)
        expect(t1).toBe(posts[8].title)

        const t2: string[] = get(
            "posts",
            filter<Post[]>((post) => post.id >= 7 && post.id <= 8),
            "title"
        )(alice)
        expect(t2).toEqual([posts[7].title, posts[8].title])

        const t3: string[] = get("posts", 0, "tags", all)(alice)
        expect(t3).toEqual(posts[0].tags)

        const t4 = get(
            "posts",
            find<Post[]>((post) => post.id === 1000),
            "title"
        )(alice)
        expect(t4).toBe(undefined)

        const t5 = get(
            "posts",
            filter<Post[]>((post) => post.id === 1000),
            "title"
        )(alice)
        expect(t5).toEqual([])
    })

    it("works for paths more than 6 items long (without typings)", () => {
        const t1: boolean = get("a", "b", "c", "d", "e", "f", "g")(nestedObj)
        expect(t1).toBe(true)
    })

    it("supports getting multiple string keys (without typings)", () => {
        const t1 = (get as any)("location", ["city", "state"])(alice)
        expect(t1).toEqual(["Boulder", "CO"])

        const t2 = (get as any)(filterByKey((key) => key === "name"))(alice)
        expect(t2).toEqual(["Alice"])
    })

    it("returns undefined for paths that are not present in the object", () => {
        const t1 = (get as any)("blarg")(alice)
        expect(t1).toBe(undefined)

        const t2 = (get as any)("blarg", "blech")(alice)
        expect(t2).toBe(undefined)

        const t3 = (get as any)("location", "foo", "bar")(alice)
        expect(t3).toBe(undefined)

        const t4 = get("posts", [2, 3])((null as any) as User)
        expect(t4).toBe(undefined)

        const t5 = get("posts", [2, 3], "title")((null as any) as User)
        expect(t5).toBe(undefined)

        const t6 = get("posts", [2, 3], "tags", [0, 1, 2])(
            (null as any) as User
        )
        expect(t6).toBe(undefined)

        const t7 = get("posts", [2, 3])({} as any)
        expect(t7).toEqual([undefined, undefined])

        const t8 = get("posts", [2, 3])({ posts: null } as any)
        expect(t8).toEqual([undefined, undefined])
    })

    it("supports getting optional keys with typings", () => {
        const partialAlice: Partial<User> = alice
        const t1 = get("location", "city")(partialAlice)
        expect(t1).toBe("Boulder")

        const t2 = get("posts", 0, "id")(partialAlice)
        expect(t2).toBe(0)

        const t3 = get("posts", [3, 4, 5], "id")(partialAlice)
        expect(t3).toEqual([3, 4, 5])
    })

    it("handles edge cases", () => {
        const t1 = get("posts", -1)(alice)
        expect(t1).toBe(undefined)

        const t2 = get(
            "posts",
            ([undefined] as unknown) as number[],
            "title"
        )(alice)
        expect(t2).toEqual([undefined])
    })
})
