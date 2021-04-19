/*
** Object.defineProperty(ob, key, {value: 0})
** Object.defineProperty(ob, key, {get(){}, set(){}})
*/

let ob = {};
Object.defineProperty(ob, 'name', {
  // value: 'han',
  enumerable: true,
  configurable: true,
  get() {
    return 'han';
  },
  set(value) {
    console.log(value);
  }
});
ob.name = 'tang';
// ob.name
console.log(ob.name); // han