## 大綱
### 課程內容
* Visual Studio Code 介紹
* 重要前端工具
    + npm
    + gulp
    + webpack
* 認識 TypeScript 與 ES6 重要特性
* Angular2 開發流程
    + 運作架構
    + 建立元件、元件樣板、元件樣板樣式
    + 建立子元件
    + 認識 Directive 畫面命令
    + 事件處理器
    + 資料繫節
    + 建立服務元件
    + 相依注入與 Http 服務

### 課程要求
+ 需對 HTML / CSS / JavaScript 語法有基礎了解
+ 需自備筆電並安裝好實作環境

---
## 環境安裝說明
### 瀏覽器
* [Google Chrome](http://www.google.com/intl/zh-TW/chrome/)
    + 安裝 [Augury](https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd) 擴充套件

### 開發工具
* [Visual Studio Code](https://code.visualstudio.com)
    + 安裝 [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) 擴充套件
    + 安裝 [Angular 2 TypeScript Snippets](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2) 擴充套件
    + 安裝 [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) 擴充套件
    + 安裝 [Angular-io-Code](https://marketplace.visualstudio.com/items?itemName=NoHomey.angular-io-code) 擴充套件
    + 安裝 [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) 擴充套件
    + 安裝 [HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets) 擴充套件
    + 安裝 [TypeScript](https://marketplace.visualstudio.com/items?itemName=DSKWRK.vscode-generate-getter-setter) 擴充套件

### 安裝 Git 工具
* 安裝 [Git](https://www.git-scm.com/)

### 安裝 Node.js
* 安裝 [Node.js](https://nodejs.org/) **v6.2.2** 以上版本
* 安裝 npm 套件
    ```
    npm install -g angular-cli gulp yo webpack rimraf typescript typings eslint tslint
    ```
* 驗證安裝結果的指令
    + `tsc -v`
        - 請確認是 `2.0.3` 以上版本
    + `gulp -v`
        - 請確認是 `3.9.1` 以上版本
    + `yo --version`
        - 請確認是 `1.8.5` 以上版本
    + `webpack version`
        - 請確認是 `1.13.2` 以上版本
    + `ng -v`
        - 請確認是 `1.0.0-beta.17` 以上版本

### 驗證 [Angular-CLI](https://cli.angular.io/)
* 開啟「命令提示字元」視窗 (Windows) 或「Terminal 應用程式」(macOS)，並依序執行以下指令
* 建立 myNG2Demo 專案
    + `ng new myNG2Demo --routing`
    + 過程中會自動建立 Angular2 專案檔案
* 進入 myNG2Demo 資料夾
    + `cd myNG2Demo`
* 啟動 Angular2 開發伺服器
    + `ng serve`
* 連到網站首頁 [http://localhost:4200/](http://localhost:4200/)
    + 畫面上會出現 **app works!**，就代表環境設置完成！
