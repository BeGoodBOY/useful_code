/*
** Object.assgin(tOb, srcOb1, srcOb2)
** 浅拷贝
** 覆盖模式
*/

let ob = {
  name: 'test',
  age: 18
};
Object.assign(ob, {name: 'libo', sex: 'male'});
console.log(ob); //{ name: 'libo', age: 18, sex: 'male' }

let ob1 = {
  hobbis: ['movie', 'music', 'box', 'basketball']
}
Object.assign(ob, ob1);
console.log(ob);
// {
//   name: 'libo',
//   age: 18,
//   sex: 'male',
//   hobbis: [ 'movie', 'music', 'box', 'basketball' ]
// }

ob1.hobbis.push('drive');
console.log(ob);
// 浅拷贝结果
// {
//   name: 'libo',
//   age: 18,
//   sex: 'male',
//   hobbis: [ 'movie', 'music', 'box', 'basketball', 'drive' ]
// }