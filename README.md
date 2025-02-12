# hatenablog-contents

## Overview
**はてなブログ**の記事管理やカスタマイズを効率化するための個人リポジトリ

## Requirement
- **OS**： Windows 11
- **Editor**： Visual Studio Code
  - **推奨プラグイン**：
    - Markdown All in One
    - markdownlint

## Usage
1. **Visual Studio Code**でリポジトリを開く
2. 記事（`.md`）、デザインCSS（`.css`）、ヘッダやフッタ（`.html`）を編集
3. **はてなブログ**にアクセスし、編集内容をコピペして反映

## Features
### ディレクトリ構成
#### .vscode/
| ファイル | 詳細 |
|--------|-----|
| `markdown-style.css` | VS Code用Markdownプレビューのスタイル設定 |
| `settings.json` | VS Codeのプロジェクト固有の設定 |

#### assets/css/
| ファイル | 詳細 |
|--------|-----|
| `hatena-design.css` | はてなブログで、`デザイン` -> `カスタマイズ` -> `デザインCSS`に反映 |

#### assets/html/
| ファイル | 詳細 |
|--------|-----|
| `hatena-about_blog-description.md` | はてなブログで、`設定` -> `aboutページ編集` -> `表示設定` -> `ブログの説明（モード：Markdown）`に反映 |
| `hatena-footer.html` | はてなブログで、`デザイン` -> `カスタマイズ` -> `フッタ`に反映 |
| `hatena-header.html` | はてなブログで、`デザイン` -> `カスタマイズ` -> `ヘッダ`に反映 |
| `hatena-sidebar_toc.html` | はてなブログで、`デザイン` -> `カスタマイズ` -> `サイドバー` -> `追加モジュール`に反映 |

#### assets/images/
| ファイル | 詳細 |
|--------|-----|
| `記事カテゴリ/.png` | 記事内画像ディレクトリ |

#### posts/
| ファイル | 詳細 |
|--------|-----|
| `drafts.md` | 執筆中のアイデア |
| `記事カテゴリ/.md` | 投稿記事ディレクトリ |

#### templates/
| ファイル | 詳細 |
|--------|-----|
| `parts.md` | 記事で使用するパーツテンプレート |
| `template.md` | 記事全体のテンプレート |

#### その他 (root/)
| ファイル | 詳細 |
|--------|-----|
| `.gitattributes` | Gitの属性設定 |

## Reference
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
- [はてなブログ公式ヘルプ](https://help.hatenablog.com/)

## Author

- [Twitter (@luarce77)](https://twitter.com/luarce77)
- [はてなブログ - Lua_Archives](https://luarce.hatenablog.com/archive)

## Licence
This repository is licensed under the [MIT License](https://github.com/Luarce/hatenablog-contents/blob/main/.github/LICENSE).
