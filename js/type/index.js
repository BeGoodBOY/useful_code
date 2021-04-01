const toString = Object.prototype.toString

const isString = value =>  toString.call(value) === '[object String]' 
// console.log(isString([]))

const isType = type => value => toString.call(value) === `[object ${type}]`
const isArray = isType('Array')
console.log(isArray([]))