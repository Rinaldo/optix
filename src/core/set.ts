import { BaseSet } from "../types"
import { update } from "./update"

export const set: BaseSet = (object: any, path: any[], value: any) =>
    update(object, path, () => value)
