/* HELPERS */

const generateKeyCombinations = len => {
    const mappings = ['string', 'Num', 'Nums']
    const combinations = []
    const curr = Array(len).fill(0)
    for (let i = 0, l = 3**len; i < l; i++) {
        combinations.push(curr.map(x => mappings[x]))
        let pointer = curr.length - 1
        curr[pointer] += 1
        while (curr[pointer] === 3) {
            curr[pointer] = 0
            pointer--
            curr[pointer] += 1
        }
    }
    return combinations
}

const generatePathPiece = keys => '<' + keys.map((key, i) => `K${i + 1} extends ${key}`).join(', ') + '>' + '(' + keys.map((_, i) => `key${i + 1}: K${i + 1}`).join(', ') + ')'
const generateStructure = (keys, base) => '<T extends ' + keys.reduce((acc, arg, i) => (
    arg === 'string'
        ? acc.replace(base, `{ [key in K${i + 1}]?: ${base} }`)
        : acc.replace(base, `${base}[]`)
), base) + '>'
const generateTarget = keys => keys.reduce((acc, key, i) => acc + (key === 'string' ? `[K${i + 1}]` : '[0]'), '')

const range1 = n => Array(n).fill(0).map((_, i) => i + 1)



/* MAIN */

const fs = require('fs')
const path = require('path')
const maxArgs = 6
const notice = '// This file is generated. Do not edit. See scripts/typegen.js\n\n'
const commonImport = `import { Num, Nums } from './common'\n\n`

// generate common
;(writer => {
    writer.write(notice)
    writer.write('export type Num = number | ((arr: any[]) => number | undefined)\n')
    writer.write('export type Nums = number[] | ((arr: any[]) => number[])\n')
})(fs.createWriteStream(path.resolve(__dirname, '../src/types/common.ts')))

// generate get
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write('export interface Get {\n')
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                '\t' +
                generatePathPiece(keys) +
                ': ' +
                generateStructure(keys, 'unknown') +
                `(object: T) => T${generateTarget(keys)}${keys.filter(key => key === 'Nums').map(_ => '[]').join('')}` +
                '\n\n'
            )
        })
    writer.write('\t(...path: (string | Num | Nums)[]): <T extends { [key: string]: unknown } | unknown[]>(object: T) => any\n')
    writer.write('}\n\n')
    writer.write('export interface BaseGet {\n')
    writer.write('\t<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | Num | Nums)[]): any\n')
    writer.write('}\n')
})(fs.createWriteStream(path.resolve(__dirname, '../src/types/get.ts')))

// generate set
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write('export interface Set {\n')
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                '\t' +
                generatePathPiece(keys) + ': ' +
                '<V>(value: V) => ' + generateStructure(keys, 'V') +
                '(object: T) => T' +
                '\n\n'
            )
        })
    writer.write('\t(...path: (string | Num | Nums)[]): <V>(value: V) => <T extends { [key: string]: unknown } | unknown[]>(object: T) => T\n')
    writer.write('}\n\n')
    writer.write('export interface BaseSet {\n')
    writer.write('\t<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | Num | Nums)[], value: any): T\n')
    writer.write('}\n')
})(fs.createWriteStream(path.resolve(__dirname, '../src/types/set.ts')))

// generate update
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write('export interface Update {\n')
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                '\t' +
                generatePathPiece(keys) + ': ' +
                '<U>(updater: (curr: U) => U) => ' + generateStructure(keys, 'U') +
                '(object: T) => T' +
                '\n\n'
            )
        })
    writer.write('\t(...path: (string | Num | Nums)[]): <V>(updater: (item: V) => V) => <T extends { [key: string]: unknown } | unknown[]>(object: T) => T\n')
    writer.write('}\n\n')
    writer.write('export interface BaseUpdate {\n')
    writer.write('\t<T extends { [key: string]: unknown } | unknown[], V>(object: T, path: (string | Num | Nums)[], updater: (value: V) => V): T\n')
    writer.write('}\n')
})(fs.createWriteStream(path.resolve(__dirname, '../src/types/update.ts')))

// generate remove
;(writer => {
    writer.write(notice)
    writer.write(commonImport)
    writer.write('export interface Remove {\n')
    range1(maxArgs)
        .flatMap(generateKeyCombinations)
        .forEach(keys => {
            writer.write(
                '\t' +
                generatePathPiece(keys) +
                ': ' +
                generateStructure(keys, 'unknown') +
                '(object: T) => T' +
                '\n\n'
            )
        })
    writer.write('\t(...path: (string | Num | Nums)[]): <T extends { [key: string]: unknown } | unknown[]>(object: T) => T\n')
    writer.write('}\n\n')
    writer.write('export interface BaseRemove {\n')
    writer.write('\t<T extends { [key: string]: unknown } | unknown[]>(object: T, path: (string | Num | Nums)[]): T\n')
    writer.write('}\n')
})(fs.createWriteStream(path.resolve(__dirname, '../src/types/remove.ts')))

// generate index
;(writer => {
    writer.write(notice)
    writer.write(`export * from './common'\n`)
    writer.write(`export * from './get'\n`)
    writer.write(`export * from './set'\n`)
    writer.write(`export * from './update'\n`)
    writer.write(`export * from './remove'\n`)
})(fs.createWriteStream(path.resolve(__dirname, '../src/types/index.ts')))
