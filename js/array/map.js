/*
** map 原数组被映射成新数组
** 原数组每一项经过加工后返回
*/

const arr = [1, 2, 3, 4];
const res = arr.map(item => {
  return item*item;
});

console.log(arr); //[1, 2, 3, 4]
console.log(res); //[1, 4, 9, 16] 