# vue-login

> 基於 vue.js, vuex, vue-router, json-server, axios, element-ui 的範例

# Skills
* <a href="https://vuejs.org/v2/guide/">vue.js</a> 主框架
* <a href="https://vuex.vuejs.org/guide/">vuex</a> 狀態管理模式
* <a href="https://router.vuejs.org/">vue-router</a> 路由管理器
* <a href="https://yarnpkg.com/en/docs/getting-started">yarn</a> package 管理器

* <a href="https://github.com/typicode/json-server">JSON Server</a> API 模擬器

* <a href="https://github.com/axios/axios">Axios</a> HTTP package

* <a href="http://element.eleme.io/#/zh-CN">Element-UI</a> UI Libaray

# Structure

```
	├─ build                             // webpack配置文件
	├─ config                            // 項目打包路徑
	├─ src                               // 程式碼目錄
	|   ├─ api                           // API 接口
	|   │   ├─ auth.js                   // 接口串接文件
	|   ├─ components                    // 组件
	|       ├─ dashboard                 // 後台首頁
	|           ├─ index.vue             // 後台頁面
	|       ├─ login                     // 前台登入首頁
	|           ├─ index.vue             // 前台登入
	|           ├─ loginForm.vue         // 前台登入表單
	|       ├─ App.vue                   // 頁面入口文件
	|		├─ config            // 配置
	|           ├─ http.js               // Axios 攔阻器配置
	|		├─ directive         // 共用函數
	|           ├─ auth.js               // Token 配置文件
	|		├─ route             // 路由管理器
	|           ├─ index.js              // 路由管理配置文件
	|		├─ store             // 狀態管理模式
	|       ├─ modules                   // 狀態管理模組
	|           ├─ auth.js               // 登入狀態管理配置文件
	|       ├─ index.js                  // 狀態管理模式入口
	|   ├─ main.js                       // 程式入口文件，家載共用模組
	├─ .babelrc                          // ES6語法編譯配置
	├─ .editorconfig                     // 程式碼編寫規格
	├─ .env.example                      // 環境配置文件
	├─ .gitignore                        // 忽略的文件
	├─ db.json                           // JSON Sever 配置文件
	├─ index.html                        // 入口 html 文件
	├─ package.json                      // 项目及工具的依赖模組配置文件
	├─ README.md                         // 專案說明文件
```

# Design Flow
登入流程：
1. 檢查狀態：進入頁面或路由變化時檢查是否有登入狀態。
2. 如果有登入狀態則撈取登入訊息(username) 並儲存，並導向於根目錄`(/)`；若沒有則導向至登入頁`(/login)`。
3. 在登入頁面，進行輸入驗證。
4. 登入成功則從後端取出 `token` 訊息保存於 localStorage 中；登入失敗則提示不成功。
5. 登出時，則進行 localStorage 的屬性移除。

# Build Setup

``` bash
# set your environment params
cp .env.example .env

# install dependencies
yarn install

# serve with hot reload at localhost:8888
yarn start

# start json-server (啟動 JSON Server)
json-server --watch db.json
```
