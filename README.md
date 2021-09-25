# 🇰🇷 Hangul Search Js

> It allows you to search for simple Korean characters in the most consistent order regardless of the character assembly order.

<br/>

## 📦 Installation

```bash
npm i hangul-search-js
```

<br/>

## 🌸 How to use

```ts
import { createSearch } from 'hangul-search-js'

const search = createSearch(['롯데시네마', '유튜브', '프로F게이머'])
const result = search('시ㄴ')
expect(result).toMatchObject(['롯데시네마', '프로게이머'])'
```
