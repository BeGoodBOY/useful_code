/*
** reduce: 简化
** [].reduce((pre, cur, index, array) => {}, initValue)
** pre-之前值 cur-当前值
** initValue初始值，第一次遍历的pre，如果不传则默认从第二次遍历开始，arr[0]为初始值
*/

const arr = [1, 2, 3, 4];
const res = arr.reduce((pre, cur, index) => {
  // console.log(index + ':');
  // console.log('pre: ' + pre);
  // console.log('cur: ' + cur);
  return pre + cur;
}, 100);

console.log(res); //110

/*
** 数组扁平化
*/
const matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
];
const mres = matrix.reduce((pre, cur) => {
  return pre.concat(cur);
});
console.log(mres);

/*
** 深扁平
*/
function flat(arr) {
  var res = [];
  arr.forEach(item => {
    if(!Array.isArray(item)) {
      res.push(item)
    }else {
      res = res.concat(flat(item))
    }
  });
  return res;
}
console.log(flat([1,2,[3,4, [5, 6,[7,8,[9,10]]]]]));

/*
** reduce浅扁平
*/
function flatReduce(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(cur)
  }, [])
}

console.log(flatReduce([1,3,[3,4,[9,9]]]));
