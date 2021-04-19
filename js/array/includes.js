const arr = [0, 1, 2, 3, 4];
console.log(arr.includes(0)); // true
console.log(arr.includes(8)); // false

/*
** 或判断优化
*/
const arr1 = ['string', 'number'];
let para = 'object';
let res = para === 'string' || para === 'number';
console.log(res);
console.log(arr1.includes('string'));