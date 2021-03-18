// 创建Symbol，key如果已经创建过则返回已有的

let uid = Symbol.for('uid')
let object = {
  [uid]: '123456'
}

console.log(uid)
console.log(object[uid])

let uid1 = Symbol.for('uid')
console.log(uid === uid1)
console.log(object[uid1])