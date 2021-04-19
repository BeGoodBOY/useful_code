/*
** find: 找出符合条件选项并停止遍历返回该项
** 找不到则返回undefined
*/
const arr = ['String', 'Number', 'Object'];
const res = arr.find((item, index) => {
  console.log(index)
  return item === 'Object';
});

console.log(res); // Object

/*
** findIndex
*/
const arr1 = [0, 1, 2, 3, 2, 1];
const res1 = arr1.findIndex(item => {
  return item === 3;
});
console.log(res1); // 3