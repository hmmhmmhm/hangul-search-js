import { disassemble } from 'hangul-js'

const getChars = (keyword: string) => {
  const chars: Record<string, number> = {}
  disassemble(keyword).map(
    (char) =>
      (chars[char] = typeof chars[char] !== 'undefined' ? chars[char] + 1 : 1)
  )
  return chars
}

export const createSearch = (items: string[]) => {
  const itemCounts = items.map((item) => getChars(item))
  const search = (
    keyword: string,
    options?: {
      exact?: boolean
    }
  ) => {
    const keywordCounts = getChars(disassemble(keyword).join(''))
    const founds: [string, number][] = []
    itemCounts.map((itemCount, index) => {
      let matchCount = 0
      let exactFullCheck = 0
      let exactCheck = 0

      Object.entries(itemCount).map(([itemKey, itemValue]) => {
        if (options?.exact === true)
          exactFullCheck = Object.keys(keywordCounts).length

        Object.entries(keywordCounts).map(([keywordKey, keywordValue]) => {
          if (itemKey === keywordKey && itemValue >= keywordValue) {
            matchCount += keywordValue
            if (options?.exact === true) exactCheck += 1
          }
        })
      })

      if (options?.exact === true) {
        if (matchCount !== 0 && exactFullCheck === exactCheck)
          founds.push([items[index], matchCount])
      } else {
        if (matchCount !== 0) founds.push([items[index], matchCount])
      }
    })

    return founds.sort((min, max) => max[1] - min[1]).map((found) => found[0])
  }

  return search
}

export default createSearch
