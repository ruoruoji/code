function throttle(fn, wait, immediate) {
    var timer = null;
    var imme = immediate;
    return function() {
        if(imme) {
            fn.call(this, ...arguments);
            imme = false;
        }
        if(timer) return;
        timer = setTimeout(() => {    //定时器会立即返回一个定时器索引
            fn.call(this, ...arguments);
            timer = null;  //clearTimeout(timer)只能解除定时器任务，并不能将赋值给timer的索引清除
        }, wait)
    }
}