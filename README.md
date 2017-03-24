#AMP化
Gulpを使用して通常のHTMLを
AMPに最適化したファイルに置換します。
詳しいやり方は下記のとおりです。

## Gulpセットアップ手順
### ①　Gulpに必要なもの
下記をダウンロードしてください
- [Node.js](https://nodejs.org/ja/)
- [Ruby](http://rubyinstaller.org/downloads/)　※Windowsの場合

### ②　Glupファイルをセットアップ
ファイルをcloneし該当のディレクトリで下記コマンドを実行します。
必要なファイルがダウンロードされます。
```bash
$ npm install
```

### ③　Gulpを実行
```bash
$ gulp
```
セットアップは以上です。
エラー等で監視が止まったらまた`gulp`コマンドを実行してください。

## 実際の変換方法
### ①　CSSを`before/style.scss`にコピーする
style.scssに記載されたものが自動的に各HTMLファイルに
インラインで吐きだされます。

### ②　`parts/amp-script.html`にGA情報などを入力
ここに記載されたものが全ページに反映されます。

ここまでが全ページ共通の設定です。

### ③　`before/template.html`をコピーし任意のファイルを作成
ファイルを作成し`<body></body>`内に非AMPページのソースを貼り付ける。
そうすると`after`ディレクトリ内に同じファイルが作成されます。
このファイルは下記の状態になっています。
- `before/style.scss`と`parts/amp-script.html`の情報が反映
- `<body></body>`内にコピーしたソースの`<script>`タグ、コメントアウトを削除し、`<amp-img>`に変換

### ④作成されたファイルを[AMPテストツール](https://search.google.com/search-console/amp)でチェック

### ⑤チェックし問題なければ③～④を繰り返しページを作成する
