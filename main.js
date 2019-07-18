// task1
function convert(usd) {
    return usd*8;
}
console.log(convert(2));

// task2
let str = 'abc';

str = str.split("").reverse().join("");

//task2
function reverse(str) {
    return str.split('').reverse().join('');
}
// Другий варіант запису
// var str = 'abc';
// var arr = str.split('');
// var arr = arr.reverse();
// var result = arr.join('');
// console.log(result);

// task3
function printStairs(n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str +="#";
        console.log(str);
       };
}
printStairs(3)

// task4
function sumRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumRange(2, 4)) // 9
console.log(sumRange(-1, 3)) // 5

// task5
function min(a, b, c) {
    if (a < b) {
        if (a < c) 
        return a;
        else return c;
    } else {
        if (b < c) 
        return b;
        else return c;
    }
}
console.log(min(10, 5, 11)); // 5
console.log(min(3, 8, 4)); // 3



// task7
function firstAndLastToUpper(str)
{
    let firstLetter=str[0].toUpperCase();
    let lastLetter=str[(str.length)-1].toUpperCase();
   return(firstLetter+str.slice(1,(str.length-1))+lastLetter);
}
firstAndLastToUpper('abc')



