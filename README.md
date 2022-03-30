# Node.js

* Master Node.js nonblocking IO and async programming

* Handle more requests and increase your application's flexibility

* Use and write your own modules

* Perform common JSON/web server tasks

* Use browsers to generate pages on the fly via Ajax calls and template libraries

* Simplify development with the Express framework

* Create database back-ends using popular NoSQL and relational databases

* Deploy and run Node.js apps on Unix/macOS or Windows servers

* Deploy apps to Heroku and Microsoft Azure

* Support virtual hosts and SSL/HTTPS security

* Test Node.js programs that mix synchronous, async, and RESTful server API functionality

* Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

## Node.js

* Callback (回呼): 一個回呼是指透過函數參數的參數傳遞到其他程式的，某段可執行程式的參考。

* 回呼函數的呼叫既可以是同步的 (如 map 方法)，也可以是非同步的 (如 setTimeout 方法中的匿名函數)。

* Asynchronous (非同步): Node 程式在發起一個呼叫後繼續向下執行，IO操作完成後，再執行對應的回呼函數 (非同步)。

* 雖然程式執行在單執行緒下，但依靠非同步+回呼的方式，也能實現對高平行處理的支援。

* Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

* Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.

* Libuv 是一個跨平台的非同步 IO 庫，它結合了 UNIX 下的 libev 和 Windows 下的 IOCP 的特性，最早由 Node 的作者開發，專門為 Node 提供多平台下的非同步 IO 支援。Node 中的非阻塞 IO 及事件循環的底層機制，是是由 libuv 來實現的。

* 單執行緒支援高平行處理，通常都是依靠非同步 + 事件驅動 (循環) 來實現的，非同步使得程式在面臨多個請求時不會發生阻塞，事件循環提供了 IO 呼叫結束後呼叫回呼函數的能力。

* JavaScript 的事件循環是依靠瀏覽器實現的，而 Node 作為另一種執行時期，事件循環由底層的 libuv 實現。

* WebSocket 可以看作是 HTTP 協定的升級版，它同樣是以 TCP 協定為基礎的應用層協定，主要是為了彌補 HTTP 協定的無持久化和無狀態等缺陷而誕生的。WebSocket 提供了用戶端端和伺服器之間全雙工的通訊機制。

## MongoDB

* MongoDB 是由 C++ 語言撰寫的，是一個以分散式檔案儲存為基礎的開放原始碼資料庫系統。在高負載的情況下，增加更多的節點，可以確保伺服器效能。

* MongoDB 旨在為 Web 應用提供可擴充的高性能資料儲存解決方案。MongoDB 將資料儲存為一個文件，資料結構由鍵值 (key=>value) 隊組成。MongoDB 文件類似 JSON 物件。欄位值可以包含其他文件，陣列及文件陣列。

## Examples

```
var fs = require("fs");

var callback = function(err, data){
    if(err) return;
    console.log(data.toString());
}

fs.readFile("foo.txt", callback);
```

## npm vs. Yarn

* What is npm?

npm (short for Node Package Manager), initially released in 2010, is a tremendously popular package manager among JavaScript developers. It is the default package that is automatically installed whenever you install Node.js on your system. It consists of three components: the website to manage various aspects of your npm experience, Command Line Interface (CLI) to interact with npm via the terminal, and registry to access an extensive public database of JavaScript software. 

* What is Yarn?

Yarn, initially released by Facebook in 2016, is another popular package manager for the JavaScript programming language. The intention behind creating Yarn was to address some of the performance and security shortcomings of working with npm (at that time).

## Hello World Firebase Realtime Database in Node

[https://riptutorial.com/firebase/example/22139/hello-world-firebase-realtime-database-in-node](https://riptutorial.com/firebase/example/22139/hello-world-firebase-realtime-database-in-node)

## Reference

[https://www.nodebeginner.org/index-zh-tw.html](https://www.nodebeginner.org/index-zh-tw.html)

[https://blog.hinablue.me/nodejs-first-look](https://blog.hinablue.me/nodejs-first-look)

[https://www.w3schools.com/nodejs/default.asp](https://www.w3schools.com/nodejs/default.asp)

[https://github.com/zcbenz/nw-sample-apps](https://github.com/zcbenz/nw-sample-apps)

[https://www.w3schools.com/nodejs/ref_modules.asp](https://www.w3schools.com/nodejs/ref_modules.asp)
