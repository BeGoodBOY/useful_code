const isDate = date => Object.prototype.toString.call(date) === '[object Date]';
const deepClone = function(obj) {
  if(obj === null) return null;
  if(isDate(obj)) return obj;
  if(typeof(obj)!== 'object') {
    return obj
  }
  let res;
  if(Array.isArray(obj)) {
    res = [];
    obj.forEach(item => {
      res.push(deepClone(item));
    })
  }else {
    res = {};
    Object.keys(obj).forEach(key => {
      res[key] = deepClone(obj[key]);
    })
  }
  return res;
}

var ob = {
  a:1,
  b: [1,3,[3,4]],
  c: null,
  d: new Date(),
  f: {
    name: 'f'
  },
  e: function() {}
}

console.log(deepClone(ob))