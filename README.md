# App Policies

複数アプリのポリシー文書（プライバシーポリシーなど）を GitHub Pages で公開するための
リポジトリです。ソースコードは含みません（このリポジトリのみ public）。

公開 URL: <https://sakana1235.github.io/App-policy/>

| アプリ | プライバシーポリシー URL |
| --- | --- |
| Civimech | <https://sakana1235.github.io/App-policy/civimech/privacy/> |

## 初回セットアップ（GitHub Pages の有効化）

1. GitHub のリポジトリ → **Settings** → **Pages**
2. **Source** を `Deploy from a branch` にする
3. **Branch** を `main`（このブランチをマージした後）/ `(root)` にして **Save**
4. 数分後に `https://sakana1235.github.io/App-policy/` が公開される

Jekyll は GitHub Pages 側でビルドされるため、GitHub Actions の設定は不要です。

問い合わせ先は `_config.yml` の `contact_email`（現在 `support@niyareco.love`）が
サイト共通の既定値です。アプリごとに変えたい場合は、そのポリシーの front matter に
`contact_email: other@example.com` を書けば、そのページだけ上書きされます。

## ディレクトリ構成

```
_config.yml              サイト設定（連絡先メール・URL など）
_data/apps.yml           公開アプリの一覧（トップページはここから生成）
_layouts/default.html    共通レイアウト
_layouts/policy.html     ポリシー文書用レイアウト（多言語切替つき）
_includes/               言語切替 UI
assets/css/style.css     スタイル（ライト／ダーク対応）
assets/js/lang.js        言語切替スクリプト
index.md                 トップページ（アプリ一覧）
apps/<app-id>/index.md   アプリごとのハブページ  → /<app-id>/
apps/<app-id>/privacy.md プライバシーポリシー     → /<app-id>/privacy/
_templates/app-template/ 新規アプリ追加用のひな形（サイトには公開されない）
404.html
```

## アプリを追加する手順

1. ひな形をコピーする

   ```sh
   cp -r _templates/app-template apps/<app-id>
   ```

2. コピーしたファイル内の `APP_ID` / `APP_NAME` / `YYYY-MM-DD` を置換する

   ```sh
   sed -i '' -e 's/APP_ID/<app-id>/g' -e 's/APP_NAME/<App Name>/g' apps/<app-id>/*.md
   ```

3. 本文（日本語 / English / 简体中文）を書く
4. `_data/apps.yml` にブロックを追記する

   ```yaml
   - id: <app-id>
     name: <App Name>
     tagline: "ひとこと説明"
     url: /<app-id>/
     docs:
       - name: プライバシーポリシー / Privacy Policy
         url: /<app-id>/privacy/
   ```

5. コミットして push すれば数分で公開される

利用規約など別種の文書を追加したい場合も、`privacy.md` と同じ要領で
`terms.md`（`permalink: /<app-id>/terms/`）を作り、`_data/apps.yml` の `docs` に
1 行足すだけです。

## 多言語について

ポリシー本文は 1 ページの中に言語ごとの `<section class="lang-section" data-lang="…">`
を並べる方式です。ページ上部のボタンで切り替えられ、初回表示はブラウザの言語設定に
従います。`?` ではなく `#ja` `#en` `#zh` のハッシュを付けた URL で特定言語を直接
指定することもできます。JavaScript が無効な環境では全言語がそのまま表示されます。

対応言語を増減する場合は、ページの front matter の `langs` と
`_includes/lang-switcher.html` のラベル表を編集してください。

## ローカルでの確認（任意）

```sh
bundle install
bundle exec jekyll serve
```
