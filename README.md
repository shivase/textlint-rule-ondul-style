# textlint-rule-ondul-style

テキストがオンドゥル語として正しいものかチェックするプラグインです。 Fix にも対応しているので、 `-fix` を入れてご利用ください。

この textlint plugin は zenn でのプラグイン開発の手順として参考に作ったものになります。

[textlint プラグインの作り方\(例：オンドゥル語変換\) 準備編](https://zenn.dev/shivase/articles/006-how-to-create-new-textlint-plugin-1)

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ondul-style

## Usage

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "ondul-style": true
  }
}
```

Via CLI

```bash
textlint --rule ondul-style README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    yarn build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    yarn test

## License

MIT © shivase
