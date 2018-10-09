# Node.js

* Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

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

## Notes

* Callback (回呼): 一個回呼是指透過函數參數的參數傳遞到其他程式的，某段可執行程式的參考。

* 回呼函數的呼叫既可以是同步的 (如 map 方法)，也可以是非同步的 (如 setTimeout 方法中的匿名函數)。

* Asynchronous (非同步): Node 程式在發起一個呼叫後繼續向下執行，IO操作完成後，再執行對應的回呼函數 (非同步)。

* 雖然程式執行在單執行緒下，但依靠非同步+回呼的方式，也能實現對高平行處理的支援。

## Examples

```
var fs = require("fs");

var callback = function(err, data){
    if(err) return;
    console.log(data.toString());
}

fs.readFile("foo.txt", callback);
```

## Reference

[https://www.nodebeginner.org/index-zh-tw.html](https://www.nodebeginner.org/index-zh-tw.html)

[https://blog.hinablue.me/nodejs-first-look](https://blog.hinablue.me/nodejs-first-look)

[http://www.codedata.com.tw/javascript/node-webkit-great-tool-for-gui](http://www.codedata.com.tw/javascript/node-webkit-great-tool-for-gui)

[https://github.com/zcbenz/nw-sample-apps](https://github.com/zcbenz/nw-sample-apps)
