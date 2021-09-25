# 🇰🇷 Hangul Search Js

> It allows you to search for simple Korean characters in the most consistent order regardless of the character assembly order.

<br/>

## 📦 Usage (ES5+)

```bash
npm i hangul-search-js
```

```ts
import { createSearch } from 'hangul-search-js'

const search = createSearch(['롯데시네마', '유튜브', '프로게이머'])
const result = search('시ㄴ')
expect(result).toMatchObject(['롯데시네마', '프로게이머'])'
```

<br/>

<br/>

## 📦 Usage (CDN)

```html
<script src="https://cdn.jsdelivr.net/npm/hangul-search-js/export/hangul-search.js"></script>
```
```js
var createSearch = window.hangulSearch

var search = createSearch(['롯데시네마', '유튜브', '프로게이머'])
var result = search('시ㄴ')
expect(result).toMatchObject(['롯데시네마', '프로게이머'])'
```

<br/>

## 💡 License

MIT Licensed.
