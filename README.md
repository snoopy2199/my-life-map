# GitHub-Pages-base
基於 GitHub Pages 的 blog 基底 | Demo: https://tsy-and-cij.github.io/GitHub-Pages-base/

## 從這個專案開始自己的 blog
1. 點擊此專案右上角的 Fork
2. 到新專案的 Settings 將專案改成自己喜歡的名稱
3. 修改新專案描述
4. 到 `https://你的帳號.github.io/專案名稱/` 看看成果 🙌🏻

## 更改網站樣式與資訊
### 顏色
你可以在 `/src/assets/theme.scss` 定義主副色與背景色，[Color Tool - Material Design](https://material.io/tools/color/#!/?view.left=0&view.right=0) 或許能幫助你選擇

| 名稱        | 主要用途 |
|------------|---------|
| primary    | 側邊欄   |  
| secondary  | 主頁訊息 |
| background | 頁面背景 |

### 網站資訊
網站標題與 GitHub 帳號預覽資訊寫在 `src/config/sidebar.json`
```javascript
{
  "title": "{你的網站標題}",
  "author": {
    "github_og_image": "{GitHub帳號圖片網址}",
    "github_og_url": "{GitHub帳號網址}"
  }
}
```

### icon
請將你的 icon 放在 `public/favicon.ico`

## 網站內容
### 類別
### 短篇
### 詳細文章

## 部署到 GitHub Pages
#### 初次設定
#### 後續部署

## 持續追蹤本專案的更新
請參考 https://help.github.com/articles/syncing-a-fork/
