const s = [1, 2, 3, 4].reduce(function (pv, cv) {
    return pv + cv
}, 0);

console.log(s)

Array.prototype.reducePolyFill = function (callback, initVal) {
    const context = this
    let pv = initVal;
    for(let i = 0; i < context.length; i++) {
        pv = callback(pv, context[i], i, context)
    }
    return pv;
}  

const s1 = [1,2,3,4].reducePolyFill(function(a,b) {
    return a + b;
}, 0)

console.log(s1)
