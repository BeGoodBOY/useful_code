var obj = {}
var nobj = new Proxy(obj, {
    get(target, key, receiver) {
        console.log('获取值')
        return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
        console.log('设置值')
        return Reflect.set(target, key, value, receiver)
    }
})

nobj.a = '代理'
console.log(obj)
