let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am p1')
  }, 100)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I am p2')
  },100)
})


async function test() {
  const r1 = await p1
  console.log(r1)
  
  const r2 = await p2
  console.log(`${r1} ${r2}`)
}

test()