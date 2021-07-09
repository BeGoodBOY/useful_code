function curry(fn) {
  return function curredFn(...args) {
    if(args.length<fn.length) {
      return function() {
        return curredFn(...args.concat(Array.from(arguments)))
      }
    }else {
      return fn(...args)
    }
  }
}

function checkInfo(reg, val) {
  return reg.test(val)
}

var isMobile = curry(checkInfo)(/^1\d{10}$/g)

console.log(isMobile('232'))