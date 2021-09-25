import { createSearch } from '../src/index'

const listData = ['롯데시네마', '유튜브', '프로게이머', '가난', '난가']

describe('Test hangul-search-js', () => {
  const search = createSearch(listData)
  it('simple test', () => {
    const result = search('시ㄴ')
    expect(result).toMatchObject(['롯데시네마', '프로게이머', '가난', '난가'])
  })
  it('exact test', () => {
    const result = search('시ㄴ', { exact: true })
    expect(result).toMatchObject(['롯데시네마'])
  })
  it('exact order test', () => {
    const result = search('난가', { exact: true, order: true })
    expect(result).toMatchObject(['난가'])
  })
})
