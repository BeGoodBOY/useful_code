/*
** every: 每一项
** 数组每一项满足筛选条件则返回true，反之返回false
*/

const arr = [3, 9, 5, 19];
const res = arr.every(item => item>2);
console.log(res); // true