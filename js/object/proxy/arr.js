var arr = [1,2,3];
arr.forEach((item, index) => {
  console.log(item)
  debugger
    Object.defineProperty(arr, index, {
        get() {
            console.log('数组被getter拦截')
            return item
        },
        set(value) {
            console.log('数组被setter拦截')
            return item = value
        }
    })
})

// arr[1] = 4;
// console.log(arr)
