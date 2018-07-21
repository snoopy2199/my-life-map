# GitHub-Pages-base
基於 GitHub Pages 的 blog 基底 | Demo: https://tsy-and-cij.github.io/GitHub-Pages-base/


## 從這個專案開始自己的 blog
1. 點擊此專案右上角的 Fork
2. 到新專案的 Settings 將專案改成自己喜歡的名稱
3. 修改專案描述
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
    "github_og_image": "{GitHub 帳號圖片網址}",
    "github_og_url": "{GitHub 帳號網址}"
  }
}
```

### icon
請將你的 icon 放在 `public/favicon.ico`


## 網站內容
當你 fork 這個專案，裡頭包含一些預設內容可以供你熟悉內容的撰寫方式，你可以在你了解後刪掉它們

### 類別
定義於 `src/articles/index.json`，並且每個類別要有其對應的資料夾
```javascript
[
  {
    "title": "{類別名稱}",
    "directory": "{對應資料夾名稱}",
    "route": "{類別的路由}"
  },
  ...
]
```

### 短篇
短篇內容直接撰寫於該類別的 index 檔案中，例如： `src/articles/category1/index.json`  
*請將新的內容擺放在前面
```javascript
[
  {
    "title": "{標題|必填}",
    "image": {
      "url": "{圖片網址|必填}",
      "site": "{圖片來源網站名稱|選填}",
      "link": "{圖片來源連結|選填}"
    },
    "star": {星等，0 ~ 5，支援.5|選填},
    "short": "{簡短描述|選填}",
    "tags": [
      {
        "color": "{標籤顏色，寫法同css <color>|tags 為選填，此項目為 tag item 中必填}",
        "text": "{標籤名稱|tags 為選填，此項目為 tag item 中必填}"
      },
      ...
    ],
    "time": "{時間，格式符合 dateString 皆可|必填}",
    "detail": {
      "directory": "{文章的檔案位置|detail 為選填，此項目為 detail object 中必填}",
      "route": "{文章的路由|detail 為選填，此項目為 detail object 中必填}"
    }
  },
  ...
]
```

### 詳細文章
文章請用 markdown 格式撰寫，檔案請擺放在所屬類別的資料夾內，並將此位置記錄於對應短篇的 detail.directory 欄位

### 主頁訊息與 Pin items
`src/config/home.json`
```javascript
{
  "message": "{主頁訊息，支援用<br>換行}",
  "pin_items": [
    {
      "directory": "{短篇所屬類別的資料夾名稱}",
      "title": "{短篇名稱}",
      "message": "{對此短篇額外的訊息文字}"
    },
    ...
  ]
}
```


## 本機開發

#### 初次
```shell
git clone https://github.com/{你的帳號}/{你的專案}.git
cd {你的專案}
yarn install
```

#### 開啟 hot reload
```shell
yarn serve
```


## 部署到 GitHub Pages
我們利用 `gh-pages` 分支將網站部署到 GitHub Pages。你可以選擇手動部署，或是透過CI工具部署

### 手動部署
我們會建議你將 `gh-pages` 分支另外 clone 成為不同的資料夾來分開管理實際內容與打包後的檔案

#### 初次
```shell
git clone https://github.com/{你的帳號}/{你的專案}.git -b gh-pages {你的專案}-deploy
```

#### 後續部署
```shell
cd {你的專案}
yarn build
rm -rf {你的專案}-deploy/*
cp -r {你的專案}/dist/* {你的專案}-deploy/
cd {你的專案}-deploy
git add .
git commit -m 'Deploy'
git push
```

### CI 部署
你可以參考我們目前的 `.travis.yml` 檔案，在 [Travis CI](https://travis-ci.org/) 設置你的部署流程


## 持續追蹤本專案的更新
請參考 [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)
