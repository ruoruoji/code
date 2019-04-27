const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function Mypromise(fn) {
    var that = this;
    this.value = null;
    this.status = PENDING;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];

    function resolve(value) {
        if(that.status === PENDING) {
            that.value = value;
            that.status = RESOLVED;
            that.resolvedCallbacks.forEach(element => {
                element(value);
            });
        }
        
    }
    function reject(value) {
        if(that.status === PENDING) {
            that.value = value;
            that.status = REJECTED;
            that.rejectedCallbacks.forEach(element => {
                element(value);
            });
        }
    }

    try {
        fn(resolve, reject);
    } catch (error) {
        reject(error);
    }    
}

Mypromise.prototype.then = function(onFufilled, onRejected) {
    var promise2;
    var that = this;
    onFufilled = typeof onFufilled === 'function'? onFufilled : v => v;      //!!!第一次实现忘加了
    onRejected = typeof onRejected === 'function'? onRejected : e => { throw e;}
    if(this.status === RESOLVED) {
        promise2 = new Mypromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onFufilled(that.value);  //this
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0)
        })
    } else if(this.status === REJECTED) {
        promise2 = new Mypromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    let x = onRejected(that.value);  //this
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            }, 0)
        })
    } else if(this.status === PENDING) {
        promise2 = new Mypromise((resolve, reject) => {
            that.rejectedCallbacks.push((value) => {
                setTimeout(() => {
                    try {
                        let x = onFufilled(value);  
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            });
            that.resolvedCallbacks.push((value) => {
                setTimeout(() => {
                    try {
                        let x = onRejected(value);  
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            });
        })
    }
    return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
    if(x === promise2) {        //！！！第一次实现忘了
        throw TypeError("type err");
    }
    if(x !== null && (typeof x === 'object' || typeof x === 'function')) {  //promise或者对象
        let then = x.then;
        if(typeof then === 'function') {   //纯粹的promise或者thenable对象
            try {
                then.call(x, y => {
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    reject(err);
                })
            } catch (error) {
                reject(error);
            }
        } else {    //不是thenable的对象
            resolve(x);
        }
    } else {        //x为基本数据类型
        resolve(x);
    }
}
