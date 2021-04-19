/*
** indexOf: [1,2,3].indexOf(1, index)
** 返回第一个找到的索引值
** index从哪一项开始查找，超过数组长度返回-1
*/

const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

console.log(arr.indexOf(2)); // 1
console.log(arr.indexOf(2, 3)); //7
console.log(arr.indexOf(2, 19)); // -1
console.log(arr.indexOf('5')); // -1

/*
** lastIndexOf: 从后往前找
** index从index处从后往前找
*/ 
const arr1 = [1, 2, 3, 2, 1];
console.log('lastIndexOf: ');
console.log(arr1.lastIndexOf(1)); //4
console.log(arr1.lastIndexOf(2, 0)); // -1
console.log(arr1.lastIndexOf(2, 1)); // 1
console.log(arr1.lastIndexOf(2, -1)); // 3
console.log(arr1.lastIndexOf(1, -1)); // 4