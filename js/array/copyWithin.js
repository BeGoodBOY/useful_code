/*
** copyWithin: [].copyWithin(start, copyStart, copyEnd)
** start: 赋值起始位置
** copyStart: 被复制的值起始位置
** copyEnd: 被复制的值结束位置（不包含当前位置）
*/
let arr = [1, 2, 3, 4, 5];
const res = arr.copyWithin(2); 
console.log(res); //[ 1, 2, 1, 2, 3 ]

let arr1 = [1, 2, 3, 4, 5, 6];
arr1.copyWithin(3, 2);
console.log(arr1);

let arr2 = [1,3,4,2,66,33,22,7];
arr2.copyWithin(1, 2, 4);
console.log(arr2);
