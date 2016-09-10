/**
 * ch01 format-fibonacci.js
 */

console.info("\n");
console.info("-----Fibonacci 数列应用-------");
console.info("\n");

var strFibonacci;
var i = 1,j=1,s=i+j;

strFibonacci = "输出 Fibonacci 数列 >>> 1 1 ";

while (s <= 1000) {
    strFibonacci += s+" ";

    i = j;
    j = s;
    s = i+j;
}

console.info(strFibonacci);
console.info("\n");