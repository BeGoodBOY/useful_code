class Test {

}

const test = new Test()
console.log(test instanceof Test)

console.log(Test[Symbol.hasInstance](test))