import { BaseSet } from "../types"
import { update } from "./update"

export const set: BaseSet = (object, path, value) =>
    update(object, path, () => value)
