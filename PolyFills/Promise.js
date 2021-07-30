function PromisePolyFill(executor) {
    let onResolve;
    let fulfilled = false,
        called = false,
        value;

    function resolve(val) {
        fulfilled = true;
        value = val;

        if (typeof onResolve === "function") {
            onResolve(val);
            called = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;

        if (fulfilled && !called) {
            called = true;
            onResolve(value);
        }
        return this;
    };

    this.catch = function (callback) {
        // TODO: Complete the impl
        return this;
    };

    executor(resolve);
}

PromisePolyFill.resolve = (val) =>
    new PromisePolyFill(function executor(resolve, _reject) {
        resolve(val);
    });

PromisePolyFill.reject = (reason) =>
    new PromisePolyFill(function executor(resolve, reject) {
        reject(reason);
    });

PromisePolyFill.all = (promises) => {
    let fulfilledPromises = [],
        result = [];

    function executor(resolve, reject) {
        promises.forEach((promise, index) =>
            promise
                .then((val) => {

                    fulfilledPromises.push(true);
                    result[index] = val;

                    if (fulfilledPromises.length === promises.length) {
                        return resolve(result);
                    }
                })
                .catch((error) => {
                    return reject(error);
                })
        );
    }
    return new PromisePolyFill(executor);
};