const data = {
  name: 'Messi',
  age: 30,
  family: {
    from: 'agt',
    jlb: 'bsln'
  }
}
const $data = {}

Object.keys(data).forEach(key => {
  Object.defineProperty($data, key, {
    get() {
      console.log('get')
      return data[key]
    },
    set(val) {
      console.log('set')
      data[key] = val
    } 
  })
})

console.log($data.name)
$data.age = 32
console.log($data.age)
$data.from = 'agenting'
console.log($data.family)