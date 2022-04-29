let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 success')
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('p2 failed')
  }, 200)
})

Promise.race([p1, p2]).then(res => {
  console.log(res)
}).catch(err => {
  console.log(`catch ${err}`)
})