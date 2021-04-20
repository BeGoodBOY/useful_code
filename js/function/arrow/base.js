
// var f = function(v){
//   return v;
// };
// 等价于

let f = v => v;
console.log(f(5))

// var sum = function(a, b) {
//   return a+b;
// };
let sum = (a, b) => a+b;
console.log(sum(4,8));

// 返回对象需要括号
let retOb = () => ({a:1, b:2});
console.log(retOb());

// 不需要返回值
let retdis = () => void console.log('dont need return value');
retdis();

// 解构赋值
let person = ({firstname, lastname}) => firstname + ' ' + lastname
console.log(person({firstname: 'john', lastname: 'mogen'}));

// 结合rest
let toArray = (...arr) => arr;
console.log(toArray(1,2,3,4)); //[1,2,3,4]
