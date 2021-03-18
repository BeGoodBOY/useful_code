let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 1000)
})

p1.then(res => {
  console.log(res)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('reject')
  }, 100)
})

p2.then(res => {
  console.log(res)
}, err => {
  console.log(`reject result: ${err}`)
})

p2.then(res => {
  console.log(res)
}, err => {
  console.log(`reject result: ${err}`)
}).catch(e => {
  console.log(`catch result: ${e}`)
})

p2.then().catch(e=> {
  console.log(`catch result: ${e}`)
})

let p3 = new Promise((resolve, reject) => {
  resolve(test)
})

p3.then(res => {}, err=> {
  console.log(`p3 reject result: ${err}`)
})
// p3 reject result: ReferenceError: test is not defined

p3.then(res => {}, err=> {
  console.log(`p3 reject result: ${err}`)
}).catch(e => {
  console.log(`p3 catch result: ${e}`)
})
// p3 reject result: ReferenceError: test is not defined