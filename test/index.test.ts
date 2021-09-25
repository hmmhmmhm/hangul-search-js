import { createSearch } from '../src/index'

describe('Test hangul-search-js', () => {
  it('simple test', () => {
    const search = createSearch(['롯데시네마', '유튜브', '프로게이머'])
    const result = search('시ㄴ')
    expect(result).toMatchObject(['롯데시네마', '프로게이머'])
  })
  it('exact test', () => {
    const search = createSearch(['롯데시네마', '유튜브', '프로게이머'])
    const result = search('시ㄴ', { exact: true })
    expect(result).toMatchObject(['롯데시네마'])
  })
})
