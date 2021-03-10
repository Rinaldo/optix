/*global __dirname, require*/
/* eslint-disable @typescript-eslint/no-var-requires */

/* HELPERS */

const generateKeyCombinations = len => {
    const mappings = ["string", "StrGetter", "StrsOrGetter", "NumOrGetter", "NumsOrGetter"]
    const combinations = []
    const curr = Array(len).fill(0)
    for (let i = 0, l = mappings.length**len; i < l; i++) {
        combinations.push(curr.map(x => mappings[x]))
        let pointer = curr.length - 1
        curr[pointer] += 1
        while (curr[pointer] === mappings.length) {
            curr[pointer] = 0
            pointer--
            curr[pointer] += 1
        }
    }
    return combinations
}

// <K1 extends string, K2 extends string>(key1: K1, key2: K2)
const generatePathPiece = keys => {
    const { vars, args } = keys.reduce((acc, key, i) => ({
        vars: key === "string" ? acc.vars.concat([`K${i + 1} extends ${key}`]) : acc.vars,
        args: key === "string" ? acc.args.concat([`key${i + 1}: K${i + 1}`]) : acc.args.concat([`key${i + 1}: ${key}`]),
    }), { vars: [], args: [] })
    const varString = vars.length ? "<" + vars.join(", ") + ">" : ""
    const argsString = "(" + args.join(", ") + ")"
    return varString + argsString
}
// <T extends { [key in K1]?: { [key in K2]?: unknown } }>
const generateStructure = (keys, base) => "<T extends " + keys.reduce((acc, key, i) => {
    switch (key) {
        case "string":
            return acc.replace(base, `{ [key in K${i + 1}]?: ${base} }`)
        case "StrGetter":
        case "StrsOrGetter":
            return acc.replace(base, `{ [key: string]: ${base} }`)
        case "NumOrGetter":
        case "NumsOrGetter":
            return acc.replace(base, `${base}[]`)
        default:
            throw Error(`unknown key: ${key}`)
    }
}, base) + ">"
// T[K1][K2]
const generateTarget = (keys, base) => keys.reduce((acc, key, i) => {
    switch (key) {
        case "string":
            return acc + `[K${i + 1}]`
        case "StrGetter":
        case "StrsOrGetter":
            return `ValueOf<${acc}>`
        case "NumOrGetter":
        case "NumsOrGetter":
            return acc + "[0]"
        default:
            throw Error(`unknown key: ${key}`)
    }
}, base)

const range1 = n => Array(n).fill(0).map((_, i) => i + 1)



/* MAIN */

const fs = require("fs")
const path = require("path")
const maxArgs = 5
const notice = "// This file is generated. Do not edit. See scripts/typegen.js\n\n"
const commonImport = `import { NumOrGetter, NumsOrGetter, StrGetter, StrsOrGetter, ValueOf } from "./common"\n\n`

// generate common
;(writer => {
    writer.write(notice)
    writer.write("export type NumOrGetter = number | ((arr: any[]) => number | undefined)\n")
    writer.write("export type NumsOrGetter = number[] | ((arr: any[]) => number[])\n")
    writer.write("export type StrGetter = (map: { [key: string]: any }) => string\n")
    writer.write("export type StrsOrGetter = string[] | ((map: { [key: string]: any }) => string[])\n")
    writer.write("export type ValueOf<T> = T[keyof T]\n")
})(fs.createWriteStream(path.resolve(__dirname, "../src/types/common.ts")))

// generate get
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write("export interface Get {\n")
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                "\t" +
                generatePathPiece(keys) +
                ": " +
                generateStructure(keys, "unknown") +
                `(object: T) => ${generateTarget(keys, "T")}${keys.filter(key => key === "NumsOrGetter" || key === "StrsOrGetter").map(_ => "[]").join("")}` +
                (keys.some(key => key === "NumOrGetter" || key === "StrGetter") ? " | undefined" : "") +
                "\n\n"
            )
        })
    writer.write("\t(...path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): <T extends { [key: string]: unknown } | unknown[]>(object: T) => any\n")
    writer.write("}\n\n")
    writer.write("export interface BaseGet {\n")
    writer.write("\t<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): any\n")
    writer.write("}\n")
})(fs.createWriteStream(path.resolve(__dirname, "../src/types/get.ts")))

// generate set
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write("export interface Set {\n")
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                "\t" +
                generatePathPiece(keys) + ": " +
                "<V>(value: V) => " + generateStructure(keys, "V") +
                "(object: T) => T" +
                "\n\n"
            )
        })
    writer.write("\t(...path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): <V>(value: V) => <T extends { [key: string]: unknown } | unknown[]>(object: T) => T\n")
    writer.write("}\n\n")
    writer.write("export interface BaseSet {\n")
    writer.write("\t<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[], value: any): T\n")
    writer.write("}\n")
})(fs.createWriteStream(path.resolve(__dirname, "../src/types/set.ts")))

// generate update
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write("export interface Update {\n")
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                "\t" +
                generatePathPiece(keys) + ": " +
                "<U>(updater: (curr: U) => U) => " + generateStructure(keys, "U") +
                "(object: T) => T" +
                "\n\n"
            )
        })
    writer.write("\t(...path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): <V>(updater: (item: V) => V) => <T extends { [key: string]: unknown } | unknown[]>(object: T) => T\n")
    writer.write("}\n\n")
    writer.write("export interface BaseUpdate {\n")
    writer.write("\t<T extends { [key: string]: unknown } | unknown[], V>(object: T, path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[], updater: (value: V) => V): T\n")
    writer.write("}\n")
})(fs.createWriteStream(path.resolve(__dirname, "../src/types/update.ts")))

// generate remove
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write("export interface Remove {\n")
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                "\t" +
                generatePathPiece(keys) +
                ": " +
                generateStructure(keys, "unknown") +
                "(object: T) => T" +
                "\n\n"
            )
        })
    writer.write("\t(...path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): <T extends { [key: string]: unknown } | unknown[]>(object: T) => T\n")
    writer.write("}\n\n")
    writer.write("export interface BaseRemove {\n")
    writer.write("\t<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | StrGetter | StrsOrGetter | NumOrGetter | NumsOrGetter)[]): T\n")
    writer.write("}\n")
})(fs.createWriteStream(path.resolve(__dirname, "../src/types/remove.ts")))

// generate index
;(writer => {
    writer.write(notice)
    writer.write(`export * from "./common"\n`)
    writer.write(`export * from "./get"\n`)
    writer.write(`export * from "./set"\n`)
    writer.write(`export * from "./update"\n`)
    writer.write(`export * from "./remove"\n`)
})(fs.createWriteStream(path.resolve(__dirname, "../src/types/index.ts")))
