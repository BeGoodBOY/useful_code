let p1 = new Promise((resolve, reject) => {
  resolve('p1 resolved')
})

let p2 = new Promise((resolve, reject) => {
  resolve('p2 resolved')
})

let p3 = new Promise((resolve, reject) => {
  reject('p3 reject')
})

Promise.all([p1, p2]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// ['p1 resolved', 'p2 resolved']
// 结果按数组传入顺序排列

Promise.all([p1, p2, p3]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})
// 'p3 reject'