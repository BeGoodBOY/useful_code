/*
** Object.keys()
** 返回对象自身属性键名（以数组形式）
*/
const ob = Object.create({name: 'parent'}, {
  age: {
    value: 19,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(Object.keys(ob)); // [ 'age' ]

const ob1 = {
  id: 0,
  brand: 'Benz'
};
console.log(Object.keys(ob1)); //[ 'id', 'brand' ]