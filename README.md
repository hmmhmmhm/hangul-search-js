# 🇰🇷 Hangul Search Js

> It allows you to search for simple Korean characters in the most consistent order regardless of the character assembly order.

![Github Workflow](https://github.com/hmmhmmhm/hangul-search-js/actions/workflows/test.yml/badge.svg)
![GitHub License](https://img.shields.io/github/license/hmmhmmhm/hangul-search-js)
![Jest Coverage](https://raw.githubusercontent.com/hmmhmmhm/hangul-search-js/main/badges/badge-lines.svg)
![Gzip Size](https://img.badgesize.io//hmmhmmhm/hangul-search-js/main/export/hangul-search.js.svg?compression=gzip)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
![NPM Version](https://img.shields.io/npm/v/hangul-search-js.svg?label=version)
![jsDelivr](https://badgen.net/jsdelivr/v/npm/hangul-search-js)

<br/>

## 📦 Usage (ES5+)

```bash
npm i hangul-search-js
```

```ts
import { createSearch } from 'hangul-search-js'

const search = createSearch(['롯데시네마', '유튜브', '프로게이머'])
const result = search('시ㄴ') // result: ['롯데시네마', '프로게이머']
const resultExact = search('시ㄴ', { exact: true }) // result: ['롯데시네마']
```

<br/>

## 📦 Usage (CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/hangul-search-js/export/hangul-search.js"></script>
```

```js
var createSearch = window.hangulSearch

var search = createSearch(['롯데시네마', '유튜브', '프로게이머'])
var result = search('시ㄴ') // result: ['롯데시네마', '프로게이머']
var resultExact = search('시ㄴ', { exact: true }) // result: ['롯데시네마']
```

<br/>

## 💡 License

> MIT Licensed.
