/*
** filter: 过滤
** 返回符合筛选条件的选项
*/

const arr = [2, 8, 9 , 32, 99];
const res = arr.filter(item => {
  return item%2 === 0;
});
console.log(arr); //[2, 8, 9, 32, 99]
console.log(res); //[2, 8, 32]
