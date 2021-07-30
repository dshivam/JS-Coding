function PromisePollyfill(executor) {
    let status = 'pending';
    let result;
    let error;
    let onError;
    let onResolve;

    function resolve(data) {
        status = 'fulfilled';
        result = data;
        if (onResolve) {
            onResolve(result);
        }
    }

    function reject(err) {
        status = 'fulfilled';
        error = err;
        if (onError) {
            onError(error);
        }
    }

    this.then = function (cb, errCb) {
        if (typeof cb === 'function') {
            onResolve = cb;
        }
        if (typeof errCb === 'function') {
            onError = errCb
        }
        if (status === 'fulfilled' && result && onResolve) {
            onResolve(result)
        }
        if (status === 'fulfilled' && error && onError) {
            onError(error)
        }
    }
    this.catch = function (errCb) {
        if (typeof errCb === 'function') {
            onError = errCb
        }
        if (status === 'fulfilled' && error && onError) {
            onError(error)
        }
    }
    executor(resolve, reject);
}

let x = new PromisePollyfill(function (resolve, reject) {
    reject('error');
});
let y = new PromisePollyfill(function (resolve, reject) {
    setTimeout(() => {
        reject('error2');
    }, 1000)
});

x.then(function (data) {
    console.log(data)
}, function(err) {
    console.log(err)
})
y.then(function (data) {
    console.log(data)
},function(err) {
    console.log(err)
})