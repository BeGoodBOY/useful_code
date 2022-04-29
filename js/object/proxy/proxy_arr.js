var arr = [1, 2, 3]

var nArr = new Proxy(arr, {
    get(target, key, receiver) {
        console.log('获取值')
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log('设置值')
        return Reflect.set(target, key, value, receiver)
    }
})

nArr[5] = 6
nArr.push(19)
console.log(arr)
