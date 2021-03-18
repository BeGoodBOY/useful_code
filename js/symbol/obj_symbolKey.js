let name = Symbol('name')
let obj = {
  [name]: 'libo'
}

console.log(obj[name])
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))