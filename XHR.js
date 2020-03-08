// 发送一个 HTTP 请求，需要创建一个 XMLHttpRequest 对象，打开一个 URL，最后发送请求

// 通过 XMLHttpRequest 生成的请求可以有两种方式来获取数据，异步模式或同步模式。
// 请求的类型是由这个 XMLHttpRequest 对象的 open() 方法的第三个参数async的值决定的。
// 如果该参数的值为 false，则该 XMLHttpRequest请求以同步模式进行，否则该过程将以异步模式完成
var httpRequest = new XMLHttpRequest();
httpRequest.onload = reqListener;
httpRequest.onreadystatechange = nameOfTheFunction; // httpRequest.addEventListener("load", reqListener); 也可
httpRequest.open("GET", "http://www.example.org/example.txt", true); // 如果设为 true (默认设置)，JavaScript执行会持续，并且在服务器还没有响应的情况下与页面进行交互
httpRequest.send();

var nameOfTheFunction = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) { // 4
        // Everything is good, the response was received.
        if (httpRequest.status === 200) {
            alert(httpRequest.responseText);
          } else {
            alert('There was a problem with the request.');
          }
    } else {
        // Not ready yet.
    }
}
// httpRequest.readyState状态值
// 0 (未初始化) or (请求还未初始化)
// 1 (正在加载) or (已建立服务器链接)
// 2 (加载成功) or (请求已接受)
// 3 (交互) or (正在处理请求)
// 4 (完成) or (请求已完成并且响应已准备好)

// XMLHttpRequest最初只支持XML解析。 
// HTML解析支持是最近的一个补充。对于较老的浏览器，您甚至可以使用与正则表达式关联的responseText属性

// 下载和上传的进度
httpRequest.addEventListener("progress", updateProgress);
httpRequest.upload.addEventListener("progress", updateProgress);

// 因为本地缓存都是以 URL 作为索引的，这样就可以使每个请求都是唯一的，也就可以这样来绕开缓存
// http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345 同 构建时contentHash一个原理

