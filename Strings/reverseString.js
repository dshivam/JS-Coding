function reverse(str) {
    if(!str || str.length === 1) {
        return str;
    }
    const lastChar = str[str.length - 1]
    return lastChar + reverse(str.slice(0, str.length - 1))
}

console.log(reverse('abc'))