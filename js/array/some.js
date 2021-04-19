/*
** some: 某些
** 只要数组中有一个符合筛选条件就返回true并停止遍历
*/

const arr = [8, 9 ,10];
const res = arr.some(item => {
  console.log(item)
  return item>=9
});
// 8
// 9
console.log(res); // true