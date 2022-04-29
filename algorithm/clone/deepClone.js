const toString = Object.prototype.toString;

function deepClone(obj) {
  if(typeof(obj) !== 'object') {
    return obj
  }

}

var obj = {
  name: 'lili',
  age: 188,
  hobby: ['boxer', 'game', 'drive'],
  family: {
    lastName: 'Li',
    amount: 6,
    address: 'Hebei handan',
    member: {
      father: 'lsc',
      mother: 'jsm',
      brother: {
        name: 'ly',
        wife: 'lxk',
        son: 'lty'
      }
    }
  },
  wife: 'on the way'
}