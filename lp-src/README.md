# LP source (docs/index.html の元データ)

公開ページ `docs/index.html` はこのフォルダから生成しています。

- `template.html` — 本文。画像は `{{logo}}` `{{heroHearing}}` のような目印で書く
- `images.json` — 目印名 → base64画像（data URI）
- `build.py` — 目印を画像に置き換えて `docs/index.html` を書き出す

```
python3 lp-src/build.py
```

文章を直すときは `template.html` を編集してから build してください。
`src/App.tsx`（Figma Make の React 版）は公開ページには使われていません。
