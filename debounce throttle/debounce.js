function debounce(fn, wait, immediate) {
    var timer = null;
    var imme = immediate;
    return function() {
        if(imme) {
            fn.call(this, ...arguments);
            imme = false;
        }
        if(timer) clearTimeout(timer);  //无论定时器执行与否，timer都在都会执行clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...arguments);
        }, wait)
    }
}