module.exports = function reverse(n) {
    let stringNumber = String(Math.abs(n));
    return Number(stringNumber.split('').reverse().join(''));
}